import { classify } from './classifier'
import type { SituationId } from '../data/types'
import type { UIKey } from '../data/ui'

/**
 * NyayaNow Situation Navigator — understanding layer.
 *
 * ARCHITECTURE (product rule): understanding is SEPARATE from legal truth.
 * This module only answers "what situation is this person describing?". It
 * NEVER generates legal rights, advice, sections or sources. Once a situation
 * is identified, the verified knowledge base (situations.ts / sources.ts) is
 * read for the actual guidance.
 *
 * The engine is layered and fully on-device:
 *   1. safety scan (immediate danger → escalation, never ignored)
 *   2. arrest-uncertainty scan (→ Questioned vs Arrested decision tool)
 *   3. the existing local keyword classifier (fast, offline, private)
 *   4. structured context extraction (traffic, vehicle, phone, money, …)
 *   5. a single clarification question when the description is ambiguous
 *   6. honest UNKNOWN fallback — we never guess about legal rights
 *
 * The `SituationUnderstandingProvider` boundary exists so a remote AI
 * provider (e.g. a small serverless proxy) could be swapped in later without
 * touching the UI. Nothing is faked: with no external provider configured,
 * the local engine IS the understanding layer and the UI says so.
 */

export type RouteSituationId = SituationId | 'TRAFFIC_UNVERIFIED'

export type Confidence = 'HIGH' | 'MEDIUM' | 'LOW'

export interface NavigatorContext {
  vehicleInvolved?: boolean
  vehicleType?: string
  documentsRequested?: boolean
  questioning?: boolean
  searchInvolved?: boolean
  propertyInvolved?: boolean
  phoneInvolved?: boolean
  moneyRequested?: boolean
  arrestMentioned?: boolean
  harmMentioned?: boolean
  trafficMentioned?: boolean
  challanMentioned?: boolean
}

export interface ClarificationOption {
  id: string
  /** UI label key (labels live in ui.ts so localization stays in one place). */
  labelKey: UIKey
  situationId: RouteSituationId
  /** Picking this option is itself a safety signal (e.g. "hurting me"). */
  safetySignal?: boolean
}

export interface Clarification {
  questionKey: UIKey
  options: ClarificationOption[]
}

export interface SituationUnderstanding {
  situationId: RouteSituationId
  confidence: Confidence
  context: NavigatorContext
  needsClarification: boolean
  clarification?: Clarification
  /** Immediate danger detected — the UI must show the safety card first. */
  safetyConcern: boolean
  /** "I don't know if I am arrested" — the UI routes to the decision tool. */
  arrestUncertainty: boolean
  matchedTerms: string[]
}

export interface SituationUnderstandingProvider {
  name: string
  /** Honest disclosure shown in the UI (where the description is processed). */
  processingNoteKey: UIKey
  analyze: (userText: string) => SituationUnderstanding
  resolveClarification: (optionId: string) => SituationUnderstanding
}

/* ────────────────────────────────────────────────────────────────
   Context keywords (English + Hindi + Telugu). These only set flags —
   they never produce legal content.
──────────────────────────────────────────────────────────────── */

const KW = {
  vehicle: [
    'bike', 'scooter', 'motorcycle', 'two-wheeler', 'car', 'vehicle', 'driving',
    'drive', 'drove', 'riding', 'ride', 'traffic', 'road', 'highway',
    'गाड़ी', 'बाइक', 'कार', 'वाहन', 'ड्राइव', 'स्कूटर',
    'బైక్', 'కారు', 'వాహనం', 'డ్రైవింగ్', 'స్కూటర్'
  ],
  challan: [
    'challan', 'fine', 'fined', 'penalty', 'चालान', 'जुर्माना', 'చలాన్', 'జరిమానా'
  ],
  documents: [
    'licence', 'license', 'rc', 'registration', 'documents', 'papers',
    'दस्तावेज़', 'दस्तावेज', 'लाइसेंस', 'లైసెన్స్', 'పత్రాలు', 'రిజిస్ట్రేషన్'
  ],
  phone: [
    'phone', 'mobile', 'smartphone', 'फोन', 'फ़ोन', 'मोबाइल', 'ఫోన్', 'మొబైల్'
  ],
  money: [
    'money', 'cash', 'पैसे', 'पैसा', 'रुपये', 'డబ్బు', 'నగదు'
  ],
  search: [
    'search', 'searching', 'frisk', 'check my', 'checking my', 'तलाशी', 'తలచి', 'సోదా'
  ],
  questioning: [
    'asked me questions', 'asking me questions', 'asking questions', 'questioned me',
    'asked questions', 'questions', 'questioning', 'प्रश्न', 'पूछताछ', 'ప్రశ్నలు', 'ప్రశ్నిస్తున్నారు'
  ],
  station: ['station', 'थाने', 'थाना', 'స్టేషన్'],
  propertyTaken: [
    'took', 'taken', 'seized', 'seizure', 'confiscat', 'impound', 'keep my',
    'ज़ब्त', 'जब्त', 'ले लिया', 'తీసుకున్నారు', 'జప్తు'
  ],
  stopWords: ['stopped', 'stop me', 'रोका', 'रोक लिया', 'ఆపారు'],
  arrestWords: ['arrest', 'custody', 'गिरफ्तार', 'गिरफ़्तार', 'हिरासत', 'అరెస్ట్', 'కస్టడీ'],
  harmWords: [
    'threaten', 'threatened', 'threatening', 'abuse', 'abused', 'assault',
    'beaten', 'beat', 'slapped', 'hit', 'harass', 'harassed', 'torture',
    'धमकाया', 'धमका', 'मारा', 'पीटा', 'गाली', 'పిరికి', 'బెదిరించారు', 'కొట్టారు', 'వేధింపు'
  ]
} as const

/**
 * Immediate-danger phrases. These are deliberately narrow: ongoing violence,
 * threats to life or explicit danger. "Threatened me" (past, no life threat)
 * is NOT here — it routes to the verified abuse guide instead.
 */
const SAFETY_PHRASES = [
  'beating me', 'beating him', 'beating her', 'are beating', 'being beaten',
  'assaulting me', 'attacking me', 'hit me', 'hitting me', 'slapped me',
  'slapping me', 'threatened to kill', 'threaten to kill', 'threatens to kill',
  'killing me', 'will kill me', 'trying to kill', 'threatening to kill',
  'in immediate danger', 'immediate danger', 'danger right now', 'hurt me', 'hurting me',
  'मार रहे', 'पीट रहे', 'जान से मारने', 'जान से मार देंगे', 'धमका रहे',
  'చంపేస్తామని', 'చంపుతామని', 'కొడుతున్నారు', 'దాడి చేస్తున్నారు',
  'వెంటనే ప్రమాదం', 'ప్రమాదంలో ఉన్నాను'
]

/** "I don't know if I am arrested" — always routed to the decision tool. */
const UNCERTAINTY_PHRASES = [
  "don't know if", 'do not know if', 'not sure if', "don't know whether",
  'not sure whether', 'am i arrested', 'am i under arrest',
  'क्या मैं गिरफ्तार', 'क्या मुझे गिरफ्तार', 'पता नहीं गिरफ्तार',
  'నేను అరెస్ట్ అయ్యానా', 'అరెస్ట్ అయ్యానా తెలియదు'
]

/** "I don't know what applies" — the honest fallback, never a guess. */
const UNSURE_PHRASES = [
  "don't know what", 'do not know what', 'not sure what', 'complicated',
  'मुझे नहीं पता', 'पता नहीं क्या', 'నాకు తెలియదు', 'తెలియదు ఏమి'
]

/* ────────────────────────────────────────────────────────────────
   Single clarification question — used only when routing is ambiguous.
   Labels are UI keys (ui.ts); picking an option resolves to a verified
   situation (or the honest fallbacks).
──────────────────────────────────────────────────────────────── */

const CLARIFY_OPTIONS: ClarificationOption[] = [
  { id: 'docs', labelKey: 'anOptDocuments', situationId: 'POLICE_QUESTIONING' },
  { id: 'questions', labelKey: 'anOptQuestions', situationId: 'POLICE_QUESTIONING' },
  { id: 'search', labelKey: 'anOptSearch', situationId: 'SEARCH' },
  { id: 'money', labelKey: 'anOptMoney', situationId: 'BRIBE' },
  { id: 'property', labelKey: 'anOptProperty', situationId: 'PROPERTY_SEIZED' },
  { id: 'arrest', labelKey: 'anOptArrest', situationId: 'ARREST' },
  { id: 'harm', labelKey: 'anOptHarm', situationId: 'POLICE_ABUSE', safetySignal: true },
  { id: 'fir', labelKey: 'anOptFir', situationId: 'FIR_REFUSED' },
  { id: 'other', labelKey: 'anOptOther', situationId: 'UNKNOWN' }
]

/* ────────────────────────────────────────────────────────────────
   Related verified guides shown after a result ("This may also involve").
──────────────────────────────────────────────────────────────── */

const RELATED: Record<RouteSituationId, SituationId[]> = {
  POLICE_QUESTIONING: ['PROPERTY_SEIZED', 'ARREST', 'SEARCH'],
  ARREST: ['POLICE_QUESTIONING', 'PROLONGED_DETENTION', 'POLICE_ABUSE'],
  FIR_REFUSED: ['COMPLAINT', 'POLICE_REFUSED_HELP'],
  SEARCH: ['PROPERTY_SEIZED', 'WOMEN_AND_POLICE', 'POLICE_QUESTIONING'],
  PROPERTY_SEIZED: ['SEARCH', 'BRIBE', 'POLICE_QUESTIONING'],
  POLICE_ABUSE: ['COMPLAINT', 'ARREST', 'BRIBE'],
  BRIBE: ['COMPLAINT', 'POLICE_ABUSE', 'POLICE_QUESTIONING'],
  COMPLAINT: ['FIR_REFUSED', 'POLICE_REFUSED_HELP'],
  WOMEN_AND_POLICE: ['SEARCH', 'POLICE_ABUSE'],
  PROLONGED_DETENTION: ['ARREST', 'POLICE_ABUSE'],
  POLICE_REFUSED_HELP: ['FIR_REFUSED', 'COMPLAINT'],
  POLICE_NOTICE: ['POLICE_QUESTIONING', 'ARREST'],
  POLICE_AT_HOME: ['SEARCH', 'POLICE_QUESTIONING'],
  NOT_SURE: [],
  UNKNOWN: [],
  TRAFFIC_UNVERIFIED: ['POLICE_QUESTIONING', 'PROPERTY_SEIZED', 'SEARCH']
}

export function getRelatedSituations(id: RouteSituationId): SituationId[] {
  return RELATED[id] ?? []
}

/* ────────────────────────────────────────────────────────────────
   Engine
──────────────────────────────────────────────────────────────── */

function hasAny(text: string, terms: readonly string[]): boolean {
  return terms.some((term) => text.includes(term))
}

function detectVehicleType(text: string): string | undefined {
  if (/(bike|scooter|motorcycle|two-wheeler|बाइक|स्कूटर|బైక్|స్కూటర్)/.test(text)) return 'two-wheeler'
  if (/(car|four-wheeler|गाड़ी|कार|కారు)/.test(text)) return 'car'
  if (/(vehicle|वाहन|వాహనం)/.test(text)) return 'other'
  return undefined
}

function buildContext(text: string): NavigatorContext {
  return {
    vehicleInvolved: hasAny(text, KW.vehicle),
    vehicleType: detectVehicleType(text),
    documentsRequested: hasAny(text, KW.documents),
    questioning: hasAny(text, KW.questioning) || hasAny(text, KW.station),
    searchInvolved: hasAny(text, KW.search),
    propertyInvolved: hasAny(text, KW.propertyTaken),
    phoneInvolved: hasAny(text, KW.phone),
    moneyRequested: hasAny(text, KW.money),
    arrestMentioned: hasAny(text, KW.arrestWords),
    harmMentioned: hasAny(text, KW.harmWords),
    trafficMentioned: hasAny(text, KW.vehicle) || hasAny(text, KW.challan),
    challanMentioned: hasAny(text, KW.challan)
  }
}

/** Local-classifier confidence is a number 0–1; HIGH needs a clear winner. */
const HIGH_CONFIDENCE = 0.72

function analyze(text: string): SituationUnderstanding {
  const lower = text.toLowerCase().trim()
  const context = buildContext(lower)

  const safetyConcern = hasAny(lower, SAFETY_PHRASES)
  const arrestUncertainty = hasAny(lower, UNCERTAINTY_PHRASES) && context.arrestMentioned === true

  const classified = classify(text)
  const highConf = classified.situationId !== 'UNKNOWN' && classified.confidence >= HIGH_CONFIDENCE

  const base = (patch: Partial<SituationUnderstanding>): SituationUnderstanding => ({
    situationId: 'UNKNOWN',
    confidence: 'LOW',
    context,
    needsClarification: false,
    safetyConcern,
    arrestUncertainty,
    matchedTerms: classified.matchedTerms,
    ...patch
  })

  // 1. Immediate danger — safety card comes first, always.
  if (safetyConcern) {
    return base({ situationId: 'POLICE_ABUSE', confidence: 'HIGH' })
  }

  // 2. "I don't know if I am arrested" — never decide for the user.
  if (arrestUncertainty) {
    return base({ situationId: 'UNKNOWN', confidence: 'LOW' })
  }

  // 3. High-confidence local classification → verified guide directly.
  if (highConf) {
    return base({ situationId: classified.situationId, confidence: 'HIGH' })
  }

  // 4. Any real classifier match (score ≥ 3) → verified guide, MEDIUM.
  if (classified.situationId !== 'UNKNOWN' && classified.confidence >= 0.6) {
    return base({ situationId: classified.situationId, confidence: 'MEDIUM' })
  }

  // 5. "I don't know what applies" → honest fallback, never a guess.
  if (hasAny(lower, UNSURE_PHRASES)) {
    return base({ situationId: 'UNKNOWN', confidence: 'LOW' })
  }

  // 6. Structured context routing (no classifier match). Traffic is handled
  //    honestly: challan/fine law is NOT in the verified KB yet, so we never
  //    invent Motor Vehicles Act guidance.
  if (context.challanMentioned) {
    return base({ situationId: 'TRAFFIC_UNVERIFIED', confidence: 'MEDIUM' })
  }
  if (context.searchInvolved) return base({ situationId: 'SEARCH', confidence: 'MEDIUM' })
  //    Vehicle / phone / documents taken → verified property-seizure guide.
  if ((context.vehicleInvolved || context.phoneInvolved || context.documentsRequested) && context.propertyInvolved) {
    return base({ situationId: 'PROPERTY_SEIZED', confidence: 'MEDIUM' })
  }
  if (context.propertyInvolved) return base({ situationId: 'PROPERTY_SEIZED', confidence: 'MEDIUM' })
  //    Called to the station / questions / documents check → police stopped.
  if (context.questioning || context.documentsRequested) {
    return base({ situationId: 'POLICE_QUESTIONING', confidence: 'MEDIUM' })
  }
  //    Traffic stop while travelling → verified "police stopped me" guide.
  if (
    context.trafficMentioned &&
    (context.vehicleInvolved || hasAny(lower, KW.stopWords))
  ) {
    return base({ situationId: 'POLICE_QUESTIONING', confidence: 'MEDIUM' })
  }
  if (context.moneyRequested) return base({ situationId: 'BRIBE', confidence: 'MEDIUM' })
  if (context.harmMentioned) return base({ situationId: 'POLICE_ABUSE', confidence: 'MEDIUM' })
  if (context.arrestMentioned) return base({ situationId: 'ARREST', confidence: 'MEDIUM' })

  // 7. Traffic mentioned but nothing specific → honest traffic fallback.
  if (context.trafficMentioned) {
    return base({ situationId: 'TRAFFIC_UNVERIFIED', confidence: 'MEDIUM' })
  }

  // 8. Nothing matched → one clarification question, then fall back safely.
  return base({
    needsClarification: true,
    clarification: { questionKey: 'anWhatNow', options: CLARIFY_OPTIONS }
  })
}

function resolveClarification(optionId: string): SituationUnderstanding {
  const option = CLARIFY_OPTIONS.find((o) => o.id === optionId)
  if (!option) {
    return {
      situationId: 'UNKNOWN',
      confidence: 'LOW',
      context: {},
      needsClarification: false,
      safetyConcern: false,
      arrestUncertainty: false,
      matchedTerms: []
    }
  }
  return {
    situationId: option.situationId,
    confidence: option.safetySignal ? 'HIGH' : 'MEDIUM',
    context: {},
    needsClarification: false,
    safetyConcern: option.safetySignal === true,
    arrestUncertainty: false,
    matchedTerms: []
  }
}

/**
 * The active provider. Today this is the local on-device engine — honest,
 * private and deterministic. A remote provider (e.g. a minimal serverless
 * proxy in front of an LLM) can be added later behind this same interface
 * without touching the UI; only the disclosure note would change.
 */
export const localSituationProvider: SituationUnderstandingProvider = {
  name: 'local',
  processingNoteKey: 'anOnDevice',
  analyze,
  resolveClarification
}

export function getSituationProvider(): SituationUnderstandingProvider {
  return localSituationProvider
}
