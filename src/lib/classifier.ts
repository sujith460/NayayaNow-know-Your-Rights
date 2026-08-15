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
    { w: 'search me', p: 3 },
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
    { w: 'complain', p: 2 },
    { w: 'complaint', p: 2 },
    { w: 'want to complain', p: 3 },
    { w: 'file a complaint', p: 3 },
    { w: 'report the police', p: 3 },
    { w: 'where do i complain', p: 3 },
    { w: 'how to complain', p: 3 },
    { w: 'शिकायत', p: 3 },
    { w: 'फिर्याद', p: 3 },
    { w: 'फिरयाद', p: 3 },
    { w: 'ఫిర్యాదు', p: 3 },
    { w: 'ఫిర్యాదు చేయాలనుకుంటున్నాను', p: 3 },
    { w: 'ఎవరికి ఫిర్యాదు', p: 3 }
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

  // Ambiguity guard: if the second-best is close, don't force a wrong answer.
  const second = ranked[1]
  const ambiguous = second && second.score >= top.score - 1
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
