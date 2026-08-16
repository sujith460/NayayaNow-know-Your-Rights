import { describe, expect, it, vi } from 'vitest'
import {
  analyzeLocal,
  getClarification,
  resolveClarificationStep,
  validateAIResult,
  aiResultToUnderstanding,
  createHybridProvider,
  localSituationProvider
} from './situationUnderstanding'
import { getAIConfig } from './aiConfig'

describe('local engine — safety escalation', () => {
  it('routes ongoing violence to the safety card first, always', () => {
    const r = analyzeLocal('Police are beating me right now')
    expect(r.safetyConcern).toBe(true)
    expect(r.situationId).toBe('POLICE_ABUSE')
  })

  it('routes threats to life to the safety card', () => {
    const r = analyzeLocal('The officer threatened to kill me')
    expect(r.safetyConcern).toBe(true)
  })

  it('routes Hindi immediate-danger phrases to the safety card', () => {
    const r = analyzeLocal('पुलिस मुझे पीट रहे हैं')
    expect(r.safetyConcern).toBe(true)
  })
})

describe('local engine — arrest uncertainty', () => {
  it('never decides an arrest for the user', () => {
    const r = analyzeLocal("I don't know if I am arrested")
    expect(r.arrestUncertainty).toBe(true)
  })

  it('routes "told me to come with them" to the decision tool', () => {
    const r = analyzeLocal('They told me to come with them to the station')
    expect(r.arrestUncertainty).toBe(true)
  })

  it('routes "won\'t let me leave" to the decision tool', () => {
    const r = analyzeLocal("They won't let me leave")
    expect(r.arrestUncertainty).toBe(true)
  })

  it('routes Telugu "not letting me leave" to the decision tool', () => {
    const r = analyzeLocal('వాళ్లు నన్ను వెళ్లనివ్వడం లేదు')
    expect(r.arrestUncertainty).toBe(true)
  })
})

describe('local engine — confident classification', () => {
  it('maps "Police arrested me" to ARREST at high confidence', () => {
    const r = analyzeLocal('Police arrested me')
    expect(r.situationId).toBe('ARREST')
    expect(r.confidence).toBe('HIGH')
  })

  it('maps "Police asked me for money" to BRIBE without needing a legal term', () => {
    const r = analyzeLocal('Police asked me for money')
    expect(r.situationId).toBe('BRIBE')
  })

  it('maps a challan to the honest traffic fallback — never invented traffic law', () => {
    const r = analyzeLocal('Police gave me a challan for speeding')
    expect(r.situationId).toBe('TRAFFIC_UNVERIFIED')
  })

  it('understands a search described without the word "search"', () => {
    const r = analyzeLocal('The officer wants to go through my bag')
    expect(r.situationId).toBe('SEARCH')
  })

  it('understands natural language "pulled me over"', () => {
    const r = analyzeLocal('Two officers pulled me over while I was going home')
    expect(r.situationId).toBe('POLICE_QUESTIONING')
  })

  it('understands an FIR refusal described without the word "FIR"', () => {
    const r = analyzeLocal('I went to the station to report what happened but they wouldn\'t take my complaint')
    expect(r.situationId).toBe('FIR_REFUSED')
  })

  it('maps phone seizure to property seizure', () => {
    const r = analyzeLocal('They took my phone and said I won\'t get it back yet')
    expect(r.situationId).toBe('PROPERTY_SEIZED')
  })
})

describe('local engine — multilingual', () => {
  it('understands Hindi "police stopped me and asked for documents"', () => {
    const r = analyzeLocal('पुलिस ने मुझे रोका और दस्तावेज़ माँगे')
    expect(r.situationId).toBe('POLICE_QUESTIONING')
  })

  it('starts the guided flow for a bare Hindi "police stopped me"', () => {
    const r = analyzeLocal('पुलिस ने मुझे रोका')
    expect(r.needsClarification).toBe(true)
    expect(r.clarification?.currentStepId).toBe('where')
  })

  it('understands Telugu bike stop', () => {
    const r = analyzeLocal('నేను బైక్ నడుపుతుండగా పోలీసులు నన్ను ఆపారు')
    expect(r.situationId).toBe('POLICE_QUESTIONING')
  })

  it('understands Hindi abuse', () => {
    const r = analyzeLocal('पुलिस ने मुझे पीटा')
    expect(r.situationId).toBe('POLICE_ABUSE')
  })

  it('understands Telugu phone seizure', () => {
    const r = analyzeLocal('పోలీసులు నా ఫోన్ తీసుకున్నారు')
    expect(r.situationId).toBe('PROPERTY_SEIZED')
  })

  it('understands Telugu "they want to look through my bag"', () => {
    const r = analyzeLocal('వాళ్లు నా బ్యాగ్ చూడాలని అంటున్నారు')
    expect(r.situationId).toBe('SEARCH')
  })

  it('understands Hindi "they took my phone"', () => {
    const r = analyzeLocal('उन्होंने मेरा फोन ले लिया')
    expect(r.situationId).toBe('PROPERTY_SEIZED')
  })
})

describe('local engine — honest fallbacks', () => {
  it('asks a clarification question when the description is ambiguous', () => {
    const r = analyzeLocal('Police stopped me')
    expect(r.needsClarification).toBe(true)
    expect(r.clarification?.currentStepId).toBe('where')
  })

  it('falls back to UNKNOWN instead of guessing', () => {
    const r = analyzeLocal('My situation is very complicated and I don\'t know what applies')
    expect(r.situationId).toBe('UNKNOWN')
    expect(r.needsClarification).toBe(false)
  })

  it('routes a veiled bribe request to the guided flow instead of guessing', () => {
    const r = analyzeLocal('The officer said the problem could disappear if I gave him something')
    expect(r.needsClarification).toBe(true)
  })

  it('routes the demo scenario to the Questioned-vs-Arrested decision tool', () => {
    const r = analyzeLocal(
      "I was riding my bike home when two policemen stopped me, took my keys and told me to come with them. They haven't said I'm arrested."
    )
    expect(r.arrestUncertainty).toBe(true)
  })

  it('routes "took me with them and won\'t let me leave" to the decision tool', () => {
    const r = analyzeLocal("They took me with them and won't let me leave")
    expect(r.arrestUncertainty).toBe(true)
  })
})

describe('dynamic clarification — everyday language, max 3 steps', () => {
  it('starts with the "where are you" step', () => {
    const c = getClarification('where')
    expect(c.needsClarification).toBe(true)
    expect(c.clarification?.currentStepId).toBe('where')
  })

  it('advances from where → what', () => {
    const r = resolveClarificationStep('where', 'road')
    expect(r.needsClarification).toBe(true)
    expect(r.clarification?.currentStepId).toBe('what')
  })

  it('resolves "asked me for money" to BRIBE', () => {
    const r = resolveClarificationStep('what', 'money')
    expect(r.situationId).toBe('BRIBE')
    expect(r.needsClarification).toBe(false)
  })

  it('treats "threatened or hurt me" as a safety signal', () => {
    const r = resolveClarificationStep('what', 'harm')
    expect(r.safetyConcern).toBe(true)
    expect(r.situationId).toBe('POLICE_ABUSE')
  })

  it('routes "told me to come with them" to the decision tool', () => {
    const r = resolveClarificationStep('what', 'comeWith')
    expect(r.arrestUncertainty).toBe(true)
  })

  it('never fails on "I\'m not sure" — advances to the next step', () => {
    const r = resolveClarificationStep('what', 'whatUnsure')
    expect(r.needsClarification).toBe(true)
    expect(r.clarification?.currentStepId).toBe('took')
  })

  it('ends honestly at UNKNOWN when the user is unsure after 3 questions', () => {
    const r = resolveClarificationStep('took', 'tookUnsure')
    expect(r.situationId).toBe('UNKNOWN')
    expect(r.needsClarification).toBe(false)
  })

  it('resolves at-station "told me I am under arrest" to ARREST', () => {
    const r = resolveClarificationStep('atStation', 'toldArrest')
    expect(r.situationId).toBe('ARREST')
  })

  it('resolves at-home police visit to POLICE_AT_HOME', () => {
    const r = resolveClarificationStep('atHome', 'policeCameHome')
    expect(r.situationId).toBe('POLICE_AT_HOME')
  })

  it('returns UNKNOWN for an invalid option id', () => {
    const r = resolveClarificationStep('where', 'nope')
    expect(r.situationId).toBe('UNKNOWN')
  })
})

describe('AI structured-output schema validation', () => {
  it('accepts a valid situation-understanding result', () => {
    const v = validateAIResult({
      situationId: 'SEARCH',
      confidence: 'HIGH',
      context: { searchInvolved: true, propertyInvolved: false },
      needsClarification: false
    })
    expect(v).not.toBeNull()
    expect(v?.situationId).toBe('SEARCH')
    expect(v?.context.searchInvolved).toBe(true)
    expect(v?.context.propertyInvolved).toBe(false)
  })

  it('rejects non-object output', () => {
    expect(validateAIResult(null)).toBeNull()
    expect(validateAIResult('search')).toBeNull()
    expect(validateAIResult(42)).toBeNull()
  })

  it('rejects an unsupported situation ID', () => {
    expect(
      validateAIResult({ situationId: 'MAKE_MY_OWN_LAW', confidence: 'HIGH', needsClarification: false })
    ).toBeNull()
  })

  it('rejects an invalid confidence value', () => {
    expect(
      validateAIResult({ situationId: 'SEARCH', confidence: 'ABSOLUTELY', needsClarification: false })
    ).toBeNull()
  })

  it('ignores any non-schema fields (e.g. generated legal text)', () => {
    const v = validateAIResult({
      situationId: 'BRIBE',
      confidence: 'MEDIUM',
      context: { moneyRequested: true },
      needsClarification: false,
      legalAdvice: 'You should pay nothing and cite section 123 of a law I invented'
    })
    expect(v).not.toBeNull()
    expect(v?.situationId).toBe('BRIBE')
    expect('legalAdvice' in (v as object)).toBe(false)
  })

  it('only keeps boolean context flags', () => {
    const v = validateAIResult({
      situationId: 'ARREST',
      confidence: 'HIGH',
      context: { arrestMentioned: true, vehicleType: 'motorcycle', garbage: 'x', harmMentioned: 'yes' },
      needsClarification: false
    })
    expect(v?.context.arrestMentioned).toBe(true)
    expect(v?.context.vehicleType).toBe('motorcycle')
    expect(v?.context.harmMentioned).toBeUndefined()
  })
})

describe('hybrid provider — local first, AI assist optional', () => {
  it('uses the local result and never calls AI when AI assist is off', async () => {
    const llm = vi.fn(async () => null)
    const p = createHybridProvider({ llm, available: true })
    const r = await p.analyze('Police arrested me')
    expect(r.situationId).toBe('ARREST')
    expect(llm).not.toHaveBeenCalled()
  })

  it('uses the AI result when AI assist is on and the model is confident', async () => {
    const llm = vi.fn(async () => ({
      situationId: 'SEARCH' as const,
      confidence: 'MEDIUM' as const,
      context: { searchInvolved: true },
      needsClarification: false,
      matchedTerms: [],
      safetyConcern: false,
      arrestUncertainty: false
    }))
    const p = createHybridProvider({ llm, available: true })
    p.setAiAssistEnabled(true)
    const r = await p.analyze('The officer wants to check my bag')
    expect(llm).toHaveBeenCalledTimes(1)
    expect(r.situationId).toBe('SEARCH')
  })

  it('falls back to the local result when the AI provider fails', async () => {
    const llm = vi.fn(async () => null) // network error / invalid JSON / timeout
    const p = createHybridProvider({ llm, available: true })
    p.setAiAssistEnabled(true)
    const r = await p.analyze('The officer wants to check my bag')
    expect(r.situationId).toBe('SEARCH') // local context routing still works
    expect(r.needsClarification).toBe(false)
  })

  it('never delegates safety situations to AI', async () => {
    const llm = vi.fn(async () => null)
    const p = createHybridProvider({ llm, available: true })
    p.setAiAssistEnabled(true)
    const r = await p.analyze('Police are beating me')
    expect(r.safetyConcern).toBe(true)
    expect(llm).not.toHaveBeenCalled()
  })

  it('passes an AI-assisted result through when it resolves the situation', async () => {
    const llm = vi.fn(async () => ({
      situationId: 'SEARCH' as const,
      confidence: 'MEDIUM' as const,
      context: { searchInvolved: true },
      needsClarification: false,
      matchedTerms: [],
      safetyConcern: false,
      arrestUncertainty: false
    }))
    const p = createHybridProvider({ llm, available: true })
    p.setAiAssistEnabled(true)
    const r = await p.analyze('Police gave me a challan')
    expect(llm).toHaveBeenCalledTimes(1)
    expect(r.situationId).toBe('SEARCH')
  })

  it('uses the curated clarification flow when AI asks for clarification', async () => {
    const llm = vi.fn(async () => getClarification('where'))
    const p = createHybridProvider({ llm, available: true })
    p.setAiAssistEnabled(true)
    const r = await p.analyze('Something happened and I am not sure what to do')
    expect(r.needsClarification).toBe(true)
    expect(r.clarification?.currentStepId).toBe('where')
  })

  it('stays fully functional with the local-only provider', async () => {
    const r = await localSituationProvider.analyze('Police asked me for money')
    expect(r.situationId).toBe('BRIBE')
  })
})

describe('AI result → understanding mapping', () => {
  it('maps ARREST_UNCERTAIN to the decision tool, never declaring an arrest', () => {
    const r = aiResultToUnderstanding({
      situationId: 'ARREST_UNCERTAIN',
      confidence: 'MEDIUM',
      context: { propertyInvolved: true },
      needsClarification: true
    })
    expect(r.arrestUncertainty).toBe(true)
    expect(r.situationId).toBe('UNKNOWN')
  })

  it('maps a needsClarification request to the curated everyday-language flow', () => {
    const r = aiResultToUnderstanding({
      situationId: 'UNKNOWN',
      confidence: 'LOW',
      context: {},
      needsClarification: true
    })
    expect(r.needsClarification).toBe(true)
    expect(r.clarification?.currentStepId).toBe('where')
  })

  it('maps a valid situation ID to the verified guide path', () => {
    const r = aiResultToUnderstanding({
      situationId: 'SEARCH',
      confidence: 'HIGH',
      context: { searchInvolved: true },
      needsClarification: false
    })
    expect(r.situationId).toBe('SEARCH')
    expect(r.needsClarification).toBe(false)
  })
})

describe('ai config', () => {
  it('is off by default — no proxy configured, no secrets anywhere', () => {
    expect(getAIConfig().available).toBe(false)
  })
})
