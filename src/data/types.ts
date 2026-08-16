export type Lang = 'en' | 'hi' | 'te'

/** A localized string. Legal instrument names and section numbers stay in the original (English). */
export type L10n = { en: string; hi: string; te: string }

export type Urgency = 'high' | 'medium' | 'low' | 'info'

/** What kind of official source backs a claim — used by the "Why this source?" explainer. */
export type SourceKind = 'legislation' | 'authority' | 'court' | 'legalaid'

/** Verified official source. */
export interface Source {
  id: string
  institution: L10n
  /** e.g. "Bharatiya Nagarik Suraksha Sanhita, 2023" */
  legalInstrument: string
  /** e.g. "BNSS §47 · Art. 22(1)" */
  sectionOrArticle?: string
  officialUrl: string
  purpose: L10n
  lastVerified: string
  kind: SourceKind
}

/** A citizen-facing legal right with a plain-language explanation + verified basis. */
export interface Right {
  id: string
  title: L10n
  /** WHAT THIS MEANS — plain language. */
  whatThisMeans: L10n
  /** LEGAL BASIS — e.g. "BNSS §47 · Article 22(1), Constitution of India" */
  legalBasis: string
  sourceIds: string[]
}

export interface ActionItem {
  id: string
  text: L10n
  why?: L10n
}

export interface TimelineStage {
  id: string
  title: L10n
  description: L10n
  points: {
    title: L10n
    detail: L10n
    sourceIds?: string[]
  }[]
}

export interface HelpRoute {
  id: string
  authority: L10n
  purpose: L10n
  whenToUse: L10n
  officialUrl: string
  /** 'all' applies across India; otherwise a state key. */
  scope: 'all' | string
}

export interface ComplaintRoute {
  id: string
  route: L10n
  whyItMayApply: L10n
  whatToPrepare: L10n
  officialUrl?: string
  legalBasis?: string
  sourceIds?: string[]
  /** Official helpline number (verified). Rendered as a tap-to-call link. */
  phone?: string
}

export interface Situation {
  id: string
  slug: string
  icon: string
  title: L10n
  shortTitle: L10n
  description: L10n
  urgency: Urgency
  summary: L10n
  immediateActions: L10n[]
  rights: Right[]
  do: ActionItem[]
  avoid: ActionItem[]
  /** "What evidence & documents to keep" — records that protect the person at later steps. */
  evidence: ActionItem[]
  /** Interactive stage timeline (flagship for arrest). */
  timeline?: TimelineStage[]
  /** "WHAT HAPPENS NEXT?" — visual action path. `linkTo` turns a possible next step into a link to another verified guide. */
  whatHappensNext: { label: L10n; note?: L10n; linkTo?: string }[]
  helpRouteIds: string[]
  complaintRoutes: ComplaintRoute[]
  sourceIds: string[]
  lastVerified: string
}

export type SituationId =
  | 'POLICE_QUESTIONING'
  | 'ARREST'
  | 'FIR_REFUSED'
  | 'SEARCH'
  | 'PROPERTY_SEIZED'
  | 'POLICE_ABUSE'
  | 'BRIBE'
  | 'COMPLAINT'
  | 'WOMEN_AND_POLICE'
  | 'PROLONGED_DETENTION'
  | 'POLICE_REFUSED_HELP'
  | 'POLICE_NOTICE'
  | 'POLICE_AT_HOME'
  | 'NOT_SURE'
  | 'UNKNOWN'

export interface ClassifierResult {
  situationId: SituationId
  confidence: number
  matchedTerms: string[]
}

