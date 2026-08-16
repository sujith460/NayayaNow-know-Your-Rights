import type { ClassifierResult, SituationId } from '../data/types'

/**
 * On-device situation classifier.
 *
 * DESIGN RULE (product): the classifier NEVER generates legal content. It only
 * maps a user's own words to a predefined, verified situation ID. The verified
 * content is then read from the knowledge base.
 *
 * This is a rule-based keyword matcher (not an external LLM) so it works
 * offline, instantly, with zero data leaving the device. It understands
 * English, Hindi and Telugu keywords and returns a confidence score.
 * Low-confidence matches resolve to UNKNOWN instead of guessing.
 */

interface Term {
  w: string
  p: 1 | 2 | 3
}

const TERMS: Record<string, Term[]> = {
  POLICE_QUESTIONING: [
    { w: 'stopped me', p: 3 },
    { w: 'stopped', p: 2 },
    { w: 'pull over', p: 2 },
    { w: 'pulled over', p: 2 },
    { w: 'questioning', p: 2 },
    { w: 'questioned', p: 2 },
    { w: 'question', p: 1 },
    { w: 'asking me to come', p: 2 },
    { w: 'come to the station', p: 3 },
    { w: 'asked me to come', p: 2 },
    { w: 'interrogat', p: 2 },
    { w: 'verify', p: 1 },
    { w: 'asked me to accompany', p: 2 },
    { w: 'asking questions', p: 2 },
    { w: 'asking for id', p: 1 },
    { w: 'checking me', p: 1 },
    { w: 'रोका', p: 3 },
    { w: 'रोक लिया', p: 3 },
    { w: 'पूछताछ', p: 3 },
    { w: 'थाने', p: 2 },
    { w: 'थाना', p: 1 },
    { w: 'बुलाया', p: 1 },
    { w: 'ప్రశ్నిస్తున్నారు', p: 3 },
    { w: 'నన్ను ఆపారు', p: 3 },
    { w: 'ఆపారు', p: 2 },
    { w: 'స్టేషన్ రమ్మన్నారు', p: 3 },
    { w: 'ప్రశ్నలు అడుగుతున్నారు', p: 2 }
  ],
  ARREST: [
    { w: 'arrested', p: 3 },
    { w: 'arrest', p: 3 },
    { w: 'arresting', p: 3 },
    { w: 'under arrest', p: 3 },
    { w: 'taken into custody', p: 3 },
    { w: 'custody', p: 2 },
    { w: 'lockup', p: 2 },
    { w: 'handcuff', p: 2 },
    { w: 'jail', p: 2 },
    { w: 'remand', p: 2 },
    { w: 'गिरफ्तार', p: 3 },
    { w: 'गिरफ़्तार', p: 3 },
    { w: 'हिरासत', p: 3 },
    { w: 'हथकड़ी', p: 2 },
    { w: 'अरेस्ट', p: 3 },
    { w: 'అరెస్ట్', p: 3 },
    { w: 'అరెస్టు', p: 3 },
    { w: 'కస్టడీ', p: 3 },
    { w: 'నిర్బంధం', p: 2 },
    { w: 'సంకెళ్ళు', p: 2 },
    { w: 'జైలు', p: 1 }
  ],
  FIR_REFUSED: [
    { w: 'fir', p: 3 },
    { w: 'refused to register', p: 3 },
    { w: 'refuse to register', p: 3 },
    { w: 'not registering', p: 2 },
    { w: "won't register", p: 3 },
    { w: 'wont register', p: 3 },
    { w: 'refused', p: 1 },
    { w: 'refusing', p: 1 },
    { w: 'didn\'t take my complaint', p: 3 },
    { w: 'did not take my complaint', p: 3 },
    { w: 'case not registered', p: 3 },
    { w: 'not registered my complaint', p: 3 },
    { w: 'registered my complaint', p: 2 },
    { w: 'एफआईआर', p: 3 },
    { w: 'fir दर्ज', p: 3 },
    { w: 'दर्ज नहीं', p: 3 },
    { w: 'मना कर दिया', p: 2 },
    { w: 'मना कर रहे', p: 2 },
    { w: 'रिपोर्ट नहीं', p: 2 },
    { w: 'ఎఫ్ఐఆర్', p: 3 },
    { w: 'నమోదు చేయలేదు', p: 3 },
    { w: 'నిరాకరించారు', p: 2 },
    { w: 'ఫిర్యాదు తీసుకోలేదు', p: 3 },
    { w: 'ఫిర్యాదు నమోదు కాలేదు', p: 3 }
  ],
  SEARCH: [
    { w: 'search', p: 2 },
    { w: 'searching', p: 2 },
    { w: 'searched', p: 2 },
    { w: 'search me', p: 3 },
    { w: 'searched me', p: 3 },
    { w: 'searched my', p: 3 },
    { w: 'searched my house', p: 3 },
    { w: 'searched my home', p: 3 },
    { w: 'frisk', p: 2 },
    { w: 'search warrant', p: 3 },
    { w: 'warrant', p: 2 },
    { w: 'check my bag', p: 2 },
    { w: 'check my phone', p: 2 },
    { w: 'checking my phone', p: 2 },
    { w: 'check my house', p: 2 },
    { w: 'searching my', p: 3 },
    { w: 'तलाशी', p: 3 },
    { w: 'तलाश', p: 2 },
    { w: 'वारंट', p: 3 },
    { w: 'खंगाल', p: 2 },
    { w: 'సోదా', p: 3 },
    { w: 'వారెంట్', p: 3 },
    { w: 'వెతుకుతున్నారు', p: 2 }
  ],
  PROPERTY_SEIZED: [
    { w: 'seized', p: 3 },
    { w: 'seizure', p: 3 },
    { w: 'confiscat', p: 3 },
    { w: 'impound', p: 3 },
    { w: 'took my phone', p: 3 },
    { w: 'took my property', p: 3 },
    { w: 'took my vehicle', p: 3 },
    { w: 'took my money', p: 3 },
    { w: 'phone taken', p: 3 },
    { w: 'taken my phone', p: 3 },
    { w: 'took my things', p: 2 },
    { w: 'took my belongings', p: 3 },
    { w: 'took my documents', p: 2 },
    { w: 'ज़ब्त', p: 3 },
    { w: 'जब्त', p: 3 },
    { w: 'फोन ले लिया', p: 3 },
    { w: 'समान ले लिया', p: 2 },
    { w: 'सामान ले लिया', p: 2 },
    { w: 'जप्तు', p: 3 },
    { w: 'ఆస్తి తీసుకున్నారు', p: 3 },
    { w: 'ఫోన్ తీసుకున్నారు', p: 3 },
    { w: 'వాహనం తీసుకున్నారు', p: 3 },
    { w: 'డబ్బు తీసుకున్నారు', p: 3 }
  ],
  POLICE_ABUSE: [
    { w: 'threaten', p: 2 },
    { w: 'threatened', p: 3 },
    { w: 'threatening', p: 2 },
    { w: 'abuse', p: 2 },
    { w: 'abused', p: 3 },
    { w: 'assault', p: 2 },
    { w: 'assaulted', p: 3 },
    { w: 'beat me', p: 3 },
    { w: 'beat my', p: 3 },
    { w: 'beat him', p: 3 },
    { w: 'beat her', p: 3 },
    { w: 'beaten', p: 3 },
    { w: 'slapped', p: 3 },
    { w: 'hit me', p: 3 },
    { w: 'harass', p: 2 },
    { w: 'harassed', p: 3 },
    { w: 'torture', p: 3 },
    { w: 'misbehav', p: 2 },
    { w: 'धमकाया', p: 3 },
    { w: 'धमका', p: 2 },
    { w: 'मारा', p: 3 },
    { w: 'पीटा', p: 3 },
    { w: 'गाली', p: 3 },
    { w: 'प्रताड़ित', p: 3 },
    { w: 'बदतमीज़ी', p: 2 },
    { w: 'బెదిరించారు', p: 3 },
    { w: 'కొట్టారు', p: 3 },
    { w: 'దాడి', p: 3 },
    { w: 'వేధింపు', p: 3 },
    { w: 'తిట్టారు', p: 3 },
    { w: 'గాయపరిచారు', p: 3 }
  ],
  BRIBE: [
    { w: 'bribe', p: 3 },
    { w: 'bribery', p: 3 },
    { w: 'asked for money', p: 3 },
    { w: 'asking for money', p: 3 },
    { w: 'wants money', p: 3 },
    { w: 'want money', p: 2 },
    { w: 'pay me', p: 2 },
    { w: 'demand money', p: 3 },
    { w: 'demanded money', p: 3 },
    { w: 'demanding money', p: 3 },
    { w: 'baksheesh', p: 3 },
    { w: 'bakshish', p: 3 },
    { w: 'money to settle', p: 3 },
    { w: 'रिश्वत', p: 3 },
    { w: 'पैसे माँगे', p: 3 },
    { w: 'पैसा माँग', p: 3 },
    { w: 'पैसे मांगे', p: 3 },
    { w: 'लंच', p: 2 },
    { w: 'లంచం', p: 3 },
    { w: 'డబ్బు అడిగారు', p: 3 },
    { w: 'డబ్బు అడుగుతున్నారు', p: 3 },
    { w: 'పైకం', p: 3 },
    { w: 'డబ్బు ఇవ్వమన్నారు', p: 3 }
  ],
  COMPLAINT: [
    { w: 'complain', p: 1 },
    { w: 'complaint', p: 1 },
    { w: 'want to complain', p: 3 },
    { w: 'file a complaint', p: 3 },
    { w: 'report the police', p: 3 },
    { w: 'where do i complain', p: 3 },
    { w: 'how to complain', p: 3 },
    { w: 'shikayat', p: 2 },
    { w: 'शिकायत', p: 3 },
    { w: 'फिर्याद', p: 3 },
    { w: 'फिरयाद', p: 3 },
    { w: 'ఫిర్యాదు', p: 3 },
    { w: 'ఫిర్యాదు చేయాలనుకుంటున్నాను', p: 3 },
    { w: 'ఎవరికి ఫిర్యాదు', p: 3 }
  ],
  WOMEN_AND_POLICE: [
    { w: 'woman', p: 2 },
    { w: 'women', p: 2 },
    { w: 'woman was searched', p: 3 },
    { w: 'women were searched', p: 3 },
    { w: 'searched by police', p: 2 },
    { w: 'lady police', p: 2 },
    { w: 'woman officer', p: 2 },
    { w: 'महिला', p: 2 },
    { w: 'औरत', p: 2 },
    { w: 'स्त्री', p: 2 },
    { w: 'స్త్రీ', p: 2 },
    { w: 'మహిళ', p: 2 },
    { w: 'ఆడదాన్ని', p: 2 },
    { w: 'ఆడదానికి', p: 2 }
  ],
  PROLONGED_DETENTION: [
    { w: 'held for days', p: 3 },
    { w: 'kept for days', p: 3 },
    { w: 'held for', p: 2 },
    { w: 'kept for', p: 2 },
    { w: 'detained for', p: 3 },
    { w: 'for 3 days', p: 3 },
    { w: 'for 2 days', p: 3 },
    { w: 'for 4 days', p: 3 },
    { w: 'for 5 days', p: 3 },
    { w: 'for 6 days', p: 3 },
    { w: 'for a week', p: 3 },
    { w: 'for weeks', p: 3 },
    { w: 'kept him', p: 2 },
    { w: 'kept her', p: 2 },
    { w: 'kept my brother', p: 3 },
    { w: 'kept my son', p: 3 },
    { w: 'more than 24 hours', p: 3 },
    { w: 'beyond 24 hours', p: 3 },
    { w: 'kept in custody', p: 2 },
    { w: 'held in custody', p: 2 },
    { w: 'not produced before magistrate', p: 3 },
    { w: 'still in jail', p: 2 },
    { w: 'लंबे समय से हिरासत', p: 3 },
    { w: 'कई दिनों से हिरासत', p: 3 },
    { w: '24 घंटे से ज़्यादा', p: 3 },
    { w: '24 घंटे से अधिक', p: 3 },
    { w: 'దినాల నుండి నిర్బంధం', p: 3 },
    { w: 'రోజుల నుండి నిర్బంధం', p: 3 },
    { w: '24 గంటల కంటే ఎక్కువ', p: 3 },
    { w: 'నిర్బంధంలో ఉంచారు', p: 2 },
    { w: 'రోజులు పట్టుకున్నారు', p: 3 }
  ],
  POLICE_REFUSED_HELP: [
    { w: 'refused to help', p: 3 },
    { w: 'refused to help with', p: 3 },
    { w: 'refused to help me', p: 3 },
    { w: 'refuse to help', p: 3 },
    { w: 'refusing to help', p: 3 },
    { w: "won't help", p: 3 },
    { w: 'wont help', p: 3 },
    { w: 'not helping', p: 2 },
    { w: 'did nothing', p: 2 },
    { w: 'not taking my complaint', p: 3 },
    { w: 'not taking action', p: 3 },
    { w: 'no action on my complaint', p: 3 },
    { w: 'ignoring my complaint', p: 3 },
    { w: 'refusing to act', p: 3 },
    { w: 'मदद नहीं कर रहे', p: 3 },
    { w: 'शिकायत नहीं सुन रहे', p: 3 },
    { w: 'कार्रवाई नहीं', p: 2 },
    { w: 'సహాయం చేయలేదు', p: 3 },
    { w: 'ఫిర్యాదు పట్టించుకోలేదు', p: 3 },
    { w: 'చర్య తీసుకోలేదు', p: 2 }
  ],
  POLICE_NOTICE: [
    { w: 'notice to appear', p: 3 },
    { w: 'police notice', p: 3 },
    { w: 'received a notice', p: 3 },
    { w: 'sent me a notice', p: 3 },
    { w: 'asked to appear', p: 2 },
    { w: 'summons', p: 2 },
    { w: 'नोटिस मिला', p: 3 },
    { w: 'पुलिस नोटिस', p: 3 },
    { w: 'पेश होने को कहा', p: 2 },
    { w: 'సమన్లు', p: 2 },
    { w: 'నోటీసు వచ్చింది', p: 3 },
    { w: 'హాజరు కావాలని', p: 2 }
  ],
  POLICE_AT_HOME: [
    { w: 'came to my house', p: 3 },
    { w: 'came to my home', p: 3 },
    { w: 'police came home', p: 3 },
    { w: 'visited my house', p: 3 },
    { w: 'visited my home', p: 3 },
    { w: 'at my house', p: 2 },
    { w: 'at my home', p: 2 },
    { w: 'home visit', p: 2 },
    { w: 'घर आए', p: 3 },
    { w: 'घर आई', p: 3 },
    { w: 'मेरे घर आए', p: 3 },
    { w: 'ఇంటికి వచ్చారు', p: 3 },
    { w: 'ఇంటికి వచ్చింది', p: 3 },
    { w: 'నా ఇంటికి', p: 2 }
  ]
}

const STOPWORDS = new Set([
  'the', 'a', 'an', 'to', 'and', 'me', 'my', 'i', 'is', 'are', 'was', 'were', 'have', 'has', 'had',
  'they', 'them', 'their', 'he', 'she', 'it', 'of', 'for', 'with', 'on', 'at', 'in', 'from', 'do', 'did',
  'can', 'what', 'how', 'why', 'where', 'when', 'who', 'please', 'help', 'some', 'been', 'being', 'not',
  'कर', 'है', 'हूँ', 'मुझे', 'ने', 'को', 'से', 'हैं', 'था', 'थे', 'నేను', 'నాకు', 'ఉంది', 'ఉన్నారు',
  'చేశారు', 'అని', 'ఒక'
])

export function classify(input: string): ClassifierResult {
  const text = input.toLowerCase().trim()
  const scores: Record<string, { score: number; matched: string[] }> = {}

  for (const [situationId, terms] of Object.entries(TERMS)) {
    let score = 0
    const matched: string[] = []
    for (const term of terms) {
      if (text.includes(term.w)) {
        score += term.p
        matched.push(term.w)
      }
    }
    scores[situationId] = { score, matched }
  }

  const ranked = Object.entries(scores)
    .map(([id, v]) => ({ id, ...v }))
    .filter((v) => v.score > 0)
    .sort((a, b) => b.score - a.score)

  const top = ranked[0]
  if (!top || top.score < 3) {
    return { situationId: 'UNKNOWN', confidence: 0, matchedTerms: [] }
  }

  // Ambiguity guard: only back off when the top two are genuinely tied — a
  // clear winner (even by one point) is better than sending the user nowhere.
  const second = ranked[1]
  const ambiguous = second && second.score === top.score
  if (ambiguous && top.score < 5) {
    return { situationId: 'UNKNOWN', confidence: 0, matchedTerms: top.matched }
  }

  const confidence = Math.min(0.95, top.score / 10 + 0.4)
  return {
    situationId: top.id as SituationId,
    confidence,
    matchedTerms: top.matched
  }
}

export function tokenCount(text: string): number {
  return text
    .toLowerCase()
    .split(/[^a-z\u0900-\u097F\u0C00-\u0C7F]+/)
    .filter((w) => w.length > 0 && !STOPWORDS.has(w)).length
}
