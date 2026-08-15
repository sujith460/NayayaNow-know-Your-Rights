import type { L10n } from './types'

const t = (en: string, hi: string, te: string): L10n => ({ en, hi, te })

/**
 * Legal jargon explained — plain-language definitions of legal terms.
 *
 * VERIFICATION RULE: every term is anchored to a section already cited in the
 * verified knowledge base (situations.ts) or to a section verified against the
 * official Act text on India Code / recognized legal sources:
 *   • Cognizable offence — BNSS §2(1)(g)
 *   • Non-cognizable offence — BNSS §2(1)(o)
 *   • FIR — BNSS §173
 *   • Summons — BNSS Chapter VI; Warrant — BNSS §74(1)
 * Section numbers were not invented; each maps to the Bharatiya Nagarik
 * Suraksha Sanhita, 2023 (India Code). Do not add terms without a verified
 * section/source.
 */

export interface LegalTerm {
  id: string
  term: L10n
  /** In simple words. */
  simpleWords: L10n
  /** Legal basis shown with the source, e.g. "BNSS §2(1)(g)". */
  legalBasis: string
  sourceIds: string[]
}

export const LEGAL_TERMS: LegalTerm[] = [
  {
    id: 'cognizable-offence',
    term: t('Cognizable offence', 'संज्ञेय अपराध', 'సంజ్ఞేయ నేరం'),
    simpleWords: t(
      'A serious offence for which the police may arrest you without a warrant (for example, murder or robbery). The police are required to record the information you give about such an offence.',
      'एक गंभीर अपराध जिसके लिए पुलिस बिना वारंट आपको गिरफ़्तार कर सकती है (जैसे हत्या या डकैती)। ऐसे अपराध की सूचना दर्ज करना पुलिस के लिए अनिवार्य है।',
      'వారెంట్ లేకుండా పోలీసులు మిమ్మల్ని అరెస్ట్ చేయగల తీవ్రమైన నేరం (ఉదా. హత్య లేదా దోపిడీ). అటువంటి నేర సమాచారాన్ని పోలీసులు నమోదు చేయాలి.'
    ),
    legalBasis: 'BNSS §2(1)(g)',
    sourceIds: ['bnss']
  },
  {
    id: 'non-cognizable-offence',
    term: t('Non-cognizable offence', 'असंज्ञेय अपराध', 'అసంజ్ఞేయ నేరం'),
    simpleWords: t(
      'A less serious offence for which the police generally cannot arrest without a warrant or an order from a Magistrate. Information about it is referred to the Magistrate.',
      'कम गंभीर अपराध जिसके लिए पुलिस आम तौर पर बिना वारंट या मजिस्ट्रेट के आदेश के गिरफ़्तार नहीं कर सकती। इसकी सूचना मजिस्ट्रेट को भेजी जाती है।',
      'తక్కువ తీవ్రమైన నేరం — దీనికి పోలీసులు సాధారణంగా వారెంట్ లేదా మేజిస్ట్రేట్ ఆదేశం లేకుండా అరెస్ట్ చేయలేరు. దీని సమాచారం మేజిస్ట్రేట్కు పంపబడుతుంది.'
    ),
    legalBasis: 'BNSS §2(1)(o) · §174',
    sourceIds: ['bnss']
  },
  {
    id: 'arrest',
    term: t('Arrest', 'गिरफ़्तारी', 'అరెస్ట్'),
    simpleWords: t(
      'Taking a person into custody under legal authority. You must be told the grounds of arrest, a relative or friend can be informed, and you have the right to meet a lawyer.',
      'कानूनी अधिकार से किसी व्यक्ति को हिरासत में लेना। गिरफ़्तारी के कारण बताए जाने चाहिए, परिवार या मित्र को सूचित किया जा सकता है, और आपको वकील से मिलने का अधिकार है।',
      'చట్టపరమైన అధికారంతో వ్యక్తిని అదుపులోకి తీసుకోవడం. అరెస్ట్ కారణాలు చెప్పాలి, బంధువు లేదా స్నేహితుడికి తెలియజేయవచ్చు, న్యాయవాదిని కలిసే హక్కు ఉంది.'
    ),
    legalBasis: 'Constitution of India, Article 22(1) · BNSS §43',
    sourceIds: ['constitution', 'bnss']
  },
  {
    id: 'bail',
    term: t('Bail', 'ज़मानत', 'బెయిల్'),
    simpleWords: t(
      'Release from custody, usually on conditions or security, while the case continues. For bailable offences it is a right; for non-bailable offences the court decides.',
      'मुकदमा चलने तक, आम तौर पर शर्तों या ज़मानत पर हिरासत से रिहाई। ज़मानती अपराधों में यह अधिकार है; गैर-ज़मानती में न्यायालय निर्णय करता है।',
      'కేసు కొనసాగుతున్నప్పుడు సాధారణంగా షరతులపై లేదా జామీనుపై కస్టడీ నుండి విడుదల. బెయిల్ ఇవ్వదగిన నేరాల్లో ఇది హక్కు; ఇవ్వని వాటిలో కోర్టు నిర్ణయిస్తుంది.'
    ),
    legalBasis: 'BNSS §478, §480',
    sourceIds: ['bnss']
  },
  {
    id: 'magistrate',
    term: t('Magistrate', 'मजिस्ट्रेट', 'మేజిస్ట్రేట్'),
    simpleWords: t(
      'A judicial officer who reviews arrests, decides bail and can order investigations. An arrested person must normally be brought before a Magistrate within 24 hours.',
      'एक न्यायिक अधिकारी जो गिरफ़्तारियों की समीक्षा करता है, ज़मानत तय करता है और जाँच का आदेश दे सकता है। गिरफ़्तार व्यक्ति को आम तौर पर 24 घंटे के भीतर मजिस्ट्रेट के सामने लाया जाना चाहिए।',
      'అరెస్ట్లను సమీక్షించే, బెయిల్ నిర్ణయించే, దర్యాప్తు ఆదేశించగల న్యాయ అధికారి. అరెస్ట్ అయిన వ్యక్తిని సాధారణంగా 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరుపరచాలి.'
    ),
    legalBasis: 'Constitution of India, Article 22(2) · BNSS §57, §58',
    sourceIds: ['constitution', 'bnss']
  },
  {
    id: 'fir',
    term: t('FIR', 'FIR (प्रथम सूचना रिपोर्ट)', 'FIR (మొదటి సమాచార నివేదిక)'),
    simpleWords: t(
      'First Information Report — the written record of information about a cognizable offence given to the police. You are entitled to a free copy of what is recorded.',
      'प्रथम सूचना रिपोर्ट — पुलिस को दी गई संज्ञेय अपराध की सूचना का लिखित रिकॉर्ड। दर्ज की गई सूचना की निःशुल्क प्रति आपको मिलती है।',
      'ఫస్ట్ ఇన్ఫర్మేషన్ రిపోర్ట్ — పోలీసులకు ఇచ్చిన సంజ్ఞేయ నేర సమాచారం యొక్క వ్రాతపూర్వక రికార్డు. నమోదైన దాని ఉచిత కాపీ మీకు లభిస్తుంది.'
    ),
    legalBasis: 'BNSS §173',
    sourceIds: ['bnss']
  },
  {
    id: 'search',
    term: t('Search', 'तलाशी', 'సోదా'),
    simpleWords: t(
      'Examining your person, vehicle or premises — under a warrant issued in certain circumstances, or under police powers during an investigation. The law provides safeguards such as witnesses and a list of what is seized.',
      'आपके व्यक्ति, वाहन या परिसर की जाँच — कुछ परिस्थितियों में जारी वारंट से, या जाँच के दौरान पुलिस शक्तियों से। कानून गवाहों और ज़ब्त वस्तुओं की सूची जैसी सुरक्षा देता है।',
      'మీ వ్యక్తి, వాహనం లేదా ఆవరణను పరిశీలించడం — కొన్ని పరిస్థితుల్లో జారీ చేసిన వారెంట్తో లేదా దర్యాప్తులో పోలీసు అధికారాలతో. సాక్షులు, జప్తు వస్తువుల జాబితా వంటి రక్షణలను చట్టం అందిస్తుంది.'
    ),
    legalBasis: 'BNSS §96, §185',
    sourceIds: ['bnss']
  },
  {
    id: 'seizure',
    term: t('Seizure', 'ज़ब्ती', 'జప్తు'),
    simpleWords: t(
      'When police take property or items into their possession during an investigation. You should receive a list or record of what was taken and can seek its return through the proper procedure.',
      'जब पुलिस जाँच के दौरान संपत्ति या वस्तुएँ अपने कब्जे में लेती है। आपको ली गई चीज़ों की सूची/रिकॉर्ड मिलना चाहिए, और आप सही प्रक्रिया से वापसी माँग सकते हैं।',
      'దర్యాప్తు సమయంలో పోలీసులు ఆస్తి లేదా వస్తువులను స్వాధీనం చేసుకోవడం. తీసుకున్న వాటి జాబితా/రికార్డు మీకు ఇవ్వాలి; సరైన ప్రక్రియ ద్వారా తిరిగి పొందవచ్చు.'
    ),
    legalBasis: 'BNSS §106',
    sourceIds: ['bnss']
  },
  {
    id: 'advocate',
    term: t('Advocate', 'अधिवक्ता', 'న్యాయవాది'),
    simpleWords: t(
      'A lawyer qualified to represent you in court. You have the right to consult and be defended by an advocate, including during interrogation.',
      'न्यायालय में आपका प्रतिनिधित्व करने के लिए योग्य वकील। आपको अधिवक्ता से परामर्श और प्रतिनिधित्व का अधिकार है — पूछताछ के दौरान भी।',
      'కోర్టులో మిమ్మల్ని ప్రాతినిధ్యం వహించడానికి అర్హత కలిగిన న్యాయవాది. న్యాయవాదిని సంప్రదించే, ప్రాతినిధ్యం పొందే హక్కు మీకు ఉంది — విచారణ సమయంలో కూడా.'
    ),
    legalBasis: 'Constitution of India, Article 22(1) · BNSS §38',
    sourceIds: ['constitution', 'bnss']
  },
  {
    id: 'legal-aid',
    term: t('Legal aid', 'कानूनी सहायता', 'న్యాయ సహాయం'),
    simpleWords: t(
      'Free legal help for eligible persons, provided through Legal Services Authorities — NALSA and its state and district authorities.',
      'पात्र व्यक्तियों के लिए निःशुल्क कानूनी सहायता, विधिक सेवा प्राधिकरणों — नालसा और उसके राज्य/जिला प्राधिकरणों — के माध्यम से।',
      'అర్హులకు ఉచిత న్యాయ సహాయం — న్యాయ సేవా అథారిటీల ద్వారా (NALSA మరియు దాని రాష్ట్ర/జిల్లా అథారిటీలు).'
    ),
    legalBasis: 'Legal Services Authorities Act, 1987',
    sourceIds: ['lsaa', 'nalsa']
  },
  {
    id: 'remand',
    term: t('Remand', 'रिमांड', 'రిమాండ్'),
    simpleWords: t(
      'Keeping an accused person in custody beyond the initial period, ordered by a Magistrate — for example, police custody or judicial custody while an investigation continues.',
      'मजिस्ट्रेट के आदेश से आरोपी को प्रारंभिक अवधि से अधिक हिरासत में रखना — जैसे जाँच जारी रहने तक पुलिस हिरासत या न्यायिक हिरासत।',
      'మేజిస్ట్రేట్ ఆదేశంతో నిందితుడిని ప్రారంభ కాలం కంటే ఎక్కువ కాలం నిర్బంధంలో ఉంచడం — ఉదా. దర్యాప్తు కొనసాగుతుండగా పోలీస్ కస్టడీ లేదా న్యాయ నిర్బంధం.'
    ),
    legalBasis: 'BNSS §187',
    sourceIds: ['bnss']
  },
  {
    id: 'summons',
    term: t('Summons', 'समन', 'సమన్స్'),
    simpleWords: t(
      'A written order from a court requiring you to appear before it. It asks you to come — it is not an arrest.',
      'न्यायालय द्वारा जारी लिखित आदेश कि आप न्यायालय के समक्ष उपस्थित हों। इसमें आने को कहा जाता है — यह गिरफ़्तारी नहीं है।',
      'కోర్టు ముందు హాజరు కావాలని కోర్టు జారీ చేసిన వ్రాతపూర్వక ఆదేశం. ఇది రమ్మని అడగడమే — ఇది అరెస్ట్ కాదు.'
    ),
    legalBasis: 'BNSS — Chapter VI (summons)',
    sourceIds: ['bnss']
  },
  {
    id: 'warrant',
    term: t('Warrant', 'वारंट', 'వారెంట్'),
    simpleWords: t(
      'A written order from a court. A warrant of arrest authorises police to arrest a person; a search warrant authorises a search.',
      'न्यायालय द्वारा जारी लिखित आदेश। गिरफ़्तारी वारंट पुलिस को किसी व्यक्ति को गिरफ़्तार करने का अधिकार देता है; तलाशी वारंट तलाशी का अधिकार देता है।',
      'కోర్టు జారీ చేసిన వ్రాతపూర్వక ఆదేశం. అరెస్ట్ వారెంట్ పోలీసులకు వ్యక్తిని అరెస్ట్ చేసే అధికారం ఇస్తుంది; సోదా వారెంట్ సోదా చేసే అధికారం ఇస్తుంది.'
    ),
    legalBasis: 'BNSS §74',
    sourceIds: ['bnss']
  }
]

/** Terms most relevant to each situation — shown as tappable chips on the guide page. */
export const SITUATION_TERMS: Record<string, string[]> = {
  POLICE_QUESTIONING: ['arrest', 'advocate', 'bail'],
  ARREST: ['arrest', 'bail', 'magistrate', 'advocate', 'legal-aid', 'remand', 'warrant'],
  FIR_REFUSED: ['fir', 'cognizable-offence', 'magistrate', 'legal-aid'],
  SEARCH: ['search', 'warrant', 'seizure', 'cognizable-offence'],
  PROPERTY_SEIZED: ['seizure', 'search', 'magistrate'],
  POLICE_ABUSE: ['arrest', 'advocate', 'legal-aid'],
  BRIBE: ['advocate', 'legal-aid', 'non-cognizable-offence'],
  COMPLAINT: ['fir', 'magistrate', 'legal-aid', 'summons']
}

export function getLegalTerm(id: string): LegalTerm | undefined {
  return LEGAL_TERMS.find((lt) => lt.id === id)
}

export function getLegalTerms(ids: string[]): LegalTerm[] {
  return ids.map((id) => getLegalTerm(id)).filter(Boolean) as LegalTerm[]
}
