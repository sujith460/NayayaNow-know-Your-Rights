import type { L10n } from './types'

const t = (en: string, hi: string, te: string): L10n => ({ en, hi, te })

/**
 * UI chrome strings (navigation, hero, dialogs, footer, features).
 * Situation content lives in situations.ts; legal sources in sources.ts.
 */
export const UI = {
  appName: t('NYAYANOW', 'न्यायनाउ', 'న్యాయనౌ'),
  appNameLong: t('NyayaNow', 'न्यायनाउ', 'న్యాయనౌ'),
  tagline: t('Know your rights. Know your next step.', 'अपने अधिकार जानें। अपना अगला कदम जानें।', 'మీ హక్కులు తెలుసుకోండి. మీ తదుపరి అడుగు తెలుసుకోండి.'),
  taglineSub: t(
    'Legal information should not be difficult to understand when you need it most.',
    'जब आपको सबसे ज़्यादा ज़रूरत हो, तब कानूनी जानकारी समझना मुश्किल नहीं होना चाहिए।',
    'మీకు అత్యంత అవసరమైనప్పుడు చట్టపరమైన సమాచారం అర్థం చేసుకోవడం కష్టం కాకూడదు.'
  ),

  /* ——— Navigation ——— */
  navSituations: t('Situations', 'परिस्थितियाँ', 'పరిస్థితులు'),
  navNavigator: t('Tell us what happened', 'बताइए क्या हुआ', 'ఏమి జరిగిందో చెప్పండి'),
  navHelp: t('Get legal help', 'कानूनी सहायता लें', 'న్యాయ సహాయం పొందండి'),
  navComplaints: t('Complaint navigator', 'शिकायत नेविगेटर', 'ఫిర్యాదు నావిగేటర్'),
  navSources: t('Official sources', 'आधिकारिक स्रोत', 'అధికారిక మూలాలు'),
  navNotSure: t("I'm not sure", 'मुझे समझ नहीं आ रहा', 'నాకు తెలియదు'),
  navPrivacyMode: t('Privacy mode', 'गोपनीयता मोड', 'గోప్యతా మోడ్'),
  navSituationMemory: t('Situation memory', 'स्थिति मेमोरी', 'పరిస్థితి మెమరీ'),

  /* ——— Hero ——— */
  heroTitle: t('Know your rights.', 'अपने अधिकार जानें।', 'మీ హక్కులు తెలుసుకోండి.'),
  heroTitle2: t('Know your next step.', 'अपना अगला कदम जानें।', 'మీ తదుపరి అడుగు తెలుసుకోండి.'),
  heroSub: t(
    'Understand what to do when you interact with the police — in seconds, with verified official sources.',
    'पुलिस से बातचीत के समय क्या करना है — सेकंडों में, प्रमाणित आधिकारिक स्रोतों के साथ समझें।',
    'పోలీసులతో వ్యవహరించేటప్పుడు ఏమి చేయాలో — సెకన్లలో, ధృవీకరించిన అధికారిక మూలాలతో తెలుసుకోండి.'
  ),
  heroCtaTell: t('Tell us what happened', 'बताइए क्या हुआ', 'ఏమి జరిగిందో చెప్పండి'),
  heroCtaBrowse: t('Browse situations', 'परिस्थितियाँ देखें', 'పరిస్థితులను చూడండి'),
  heroCtaHelp: t('Get legal help', 'कानूनी सहायता लें', 'న్యాయ సహాయం పొందండి'),
  heroTrustLine: t(
    'We don’t ask you to trust NyayaNow. We show you where the information comes from.',
    'हम आपसे न्यायनाउ पर भरोसा करने को नहीं कहते। हम दिखाते हैं कि जानकारी कहाँ से आती है।',
    'మేము మీరు న్యాయనౌను నమ్మమని అడగము. సమాచారం ఎక్కడి నుండి వస్తుందో చూపిస్తాము.'
  ),

  /* ——— Home ——— */
  homeWhatHappened: t('What happened?', 'क्या हुआ?', 'ఏమి జరిగింది?'),
  homeGridHint: t(
    'Choose the closest situation — or describe it in your own words below.',
    'निकटतम परिस्थिति चुनें — या नीचे अपने शब्दों में बताएँ।',
    'దగ్గరి పరిస్థితిని ఎంచుకోండి — లేదా క్రింద మీ మాటల్లో వివరించండి.'
  ),
  nlTitle: t('Tell us what happened', 'बताइए क्या हुआ', 'ఏమి జరిగిందో చెప్పండి'),
  nlPlaceholder: t('Police stopped me and are asking me to come to the station.', 'पुलिस ने मुझे रोका और थाने आने को कह रही है।', 'పోలీసులు నన్ను ఆపి స్టేషన్ రమ్మంటున్నారు.'),
  nlSubmit: t('Find my next step', 'मेरा अगला कदम खोजें', 'నా తదుపరి అడుగు కనుగొనండి'),
  nlHint: t(
    'We match your words to a verified guide. We never generate legal advice.',
    'हम आपके शब्दों को प्रमाणित गाइड से मिलाते हैं। हम कभी कानूनी सलाह नहीं बनाते।',
    'మీ మాటలను ధృవీకరించిన గైడ్తో సరిపోల్చుతాము. మేము ఎప్పుడూ న్యాయ సలహా సృష్టించము.'
  ),

  /* ——— Situation page sections ——— */
  secWhatMatters: t('What matters right now', 'अभी क्या महत्वपूर्ण है', 'ప్రస్తుతం ఏది ముఖ్యం'),
  secThirtySec: t('30-second summary', '30 सेकंड का सारांश', '30 సెకన్ల సారాంశం'),
  secRights: t('Your rights', 'आपके अधिकार', 'మీ హక్కులు'),
  secDo: t('What you can do', 'आप क्या कर सकते हैं', 'మీరు ఏమి చేయవచ్చు'),
  secAvoid: t('What to avoid', 'किन बातों से बचें', 'దేనిని నివారించాలి'),
  secTimeline: t('Your journey through this situation', 'इस परिस्थिति में आपका सफ़र', 'ఈ పరిస్థితిలో మీ ప్రయాణం'),
  secHelp: t('Get legal help', 'कानूनी सहायता लें', 'న్యాయ సహాయం పొందండి'),
  secComplain: t('Where to complain', 'कहाँ शिकायत करें', 'ఎక్కడ ఫిర్యాదు చేయాలి'),
  secWhatNext: t('What happens next?', 'आगे क्या होगा?', 'తర్వాత ఏమి జరుగుతుంది?'),
  secSources: t('Official sources', 'आधिकारिक स्रोत', 'అధికారిక మూలాలు'),
  viewFullRights: t('View full rights', 'पूरे अधिकार देखें', 'పూర్తి హక్కులు చూడండి'),
  showMore: t('Show all steps', 'सभी चरण दिखाएँ', 'అన్ని దశలు చూపించండి'),
  viewFullGuide: t('View the full guide', 'पूरी गाइड देखें', 'పూర్తి గైడ్ చూడండి'),
  backToHome: t('Back to home', 'होम पर वापस', 'హోమ్కు తిరిగి'),
  viewGuide: t('Open guide', 'गाइड खोलें', 'గైడ్ తెరవండి'),
  spListen: t('Listen', 'सुनें', 'వినండి'),
  spStop: t('Stop', 'रोकें', 'ఆపండి'),
  progressLabel: t('Your path', 'आपका मार्ग', 'మీ మార్గం'),

  /* ——— Rights cards ——— */
  whatThisMeans: t('What this means', 'इसका अर्थ', 'దీని అర్థం'),
  legalBasis: t('Legal basis', 'कानूनी आधार', 'చట్టపరమైన ఆధారం'),
  officialSource: t('Official source', 'आधिकारिक स्रोत', 'అధికారిక మూలం'),
  viewOfficialSource: t('View official source →', 'आधिकारिक स्रोत देखें →', 'అధికారిక మూలం చూడండి →'),
  why: t('Why', 'क्यों', 'ఎందుకు'),
  lastVerified: t('Last verified', 'अंतिम सत्यापन', 'చివరి ధృవీకరణ'),

  /* ——— Trust badge ——— */
  trustVerified: t('Official source verified', 'आधिकारिक स्रोत सत्यापित', 'అధికారిక మూలం ధృవీకరించబడింది'),
  trustViewProvision: t('View official provision →', 'आधिकारिक प्रावधान देखें →', 'అధికారిక నిబంధన చూడండి →'),

  /* ——— Urgency ——— */
  urgHigh: t('Act soon', 'जल्दी कार्रवाई करें', 'త్వరగా చర్య తీసుకోండి'),
  urgMedium: t('Take note', 'ध्यान दें', 'గమనించండి'),
  urgLow: t('Guidance', 'मार्गदर्शन', 'మార్గదర్శనం'),
  urgInfo: t('Information', 'जानकारी', 'సమాచారం'),

  /* ——— Classifier ——— */
  clFound: t('Situation detected', 'परिस्थिति पहचानी गई', 'పరిస్థితి గుర్తించబడింది'),
  clMatched: t('We matched your description to this guide.', 'हमने आपके विवरण को इस गाइड से मिलाया।', 'మీ వివరణను ఈ గైడ్తో సరిపోల్చాము.'),
  clUnknown: t("We couldn’t confidently identify your situation.", 'हम आपकी परिस्थिति का विश्वासपूर्वक पता नहीं लगा सके।', 'మీ పరిస్థితిని నమ్మకంగా గుర్తించలేకపోయాము.'),
  clUnknownHint: t(
    'You can browse all situations or try describing it differently.',
    'आप सभी परिस्थितियाँ देख सकते हैं या अलग तरह से बता सकते हैं।',
    'మీరు అన్ని పరిస్థితులు చూడవచ్చు లేదా వేరే విధంగా వివరించవచ్చు.'
  ),
  clBrowseAll: t('Browse all situations', 'सभी परिस्थितियाँ देखें', 'అన్ని పరిస్థితులు చూడండి'),
  clTryAgain: t('Try again', 'फिर से कोशिश करें', 'మళ్లీ ప్రయత్నించండి'),
  clNotSureLink: t("Not sure? Use the guided helper →", 'समझ नहीं आया? मार्गदर्शक सहायक का उपयोग करें →', 'తెలియదా? మార్గదర్శక సహాయకుడిని ఉపయోగించండి →'),
  clAIBoundary: t(
    'NyayaNow only maps your words to a verified guide. It does not generate legal rights or advice.',
    'न्यायनाउ केवल आपके शब्दों को प्रमाणित गाइड से जोड़ता है। यह कानूनी अधिकार या सलाह नहीं बनाता।',
    'న్యాయనౌ మీ మాటలను ధృవీకరించిన గైడ్కు మాత్రమే అనుసంధానిస్తుంది. ఇది న్యాయ హక్కులు లేదా సలహాను సృష్టించదు.'
  ),

  /* ——— Not-sure flow ——— */
  nsTitle: t("I'm not sure what applies", 'मुझे नहीं पता क्या लागू होता है', 'దేని వర్తిస్తుందో నాకు తెలియదు'),
  nsIntro: t(
    'Answer a few simple questions. They are not legal questions — they just help us point you to the right guide.',
    'कुछ आसान सवालों के जवाब दें। ये कानूनी सवाल नहीं हैं — बस सही गाइड तक पहुँचाने में मदद करते हैं।',
    'కొన్ని సాధారణ ప్రశ్నలకు సమాధానం ఇవ్వండి. ఇవి చట్ట ప్రశ్నలు కావు — సరైన గైడ్కు చేర్చడానికి మాత్రమే.'
  ),
  nsQ1: t('Are you currently with the police?', 'क्या आप अभी पुलिस के पास हैं?', 'మీరు ప్రస్తుతం పోలీసుల వద్ద ఉన్నారా?'),
  nsQ2: t('Have you been told you are under arrest?', 'क्या आपको बताया गया है कि आप गिरफ़्तार हैं?', 'మీరు అరెస్ట్ అయ్యారని చెప్పారా?'),
  nsQ3: t('Has your property been taken?', 'क्या आपकी संपत्ति ली गई है?', 'మీ ఆస్తి తీసుకోబడిందా?'),
  nsQ4: t('Has anyone threatened or physically harmed you?', 'क्या किसी ने आपको धमकाया या शारीरिक नुकसान पहुँचाया है?', 'ఎవరైనా మిమ్మల్ని బెదిరించారా లేదా శారీరకంగా హాని చేశారా?'),
  nsYes: t('Yes', 'हाँ', 'అవును'),
  nsNo: t('No', 'नहीं', 'కాదు'),
  nsNotSure: t('Not sure', 'पता नहीं', 'తెలియదు'),
  nsResultTitle: t('We recommend this guide', 'हम यह गाइड सुझाते हैं', 'ఈ గైడ్ను సిఫార్సు చేస్తున్నాము'),
  nsRestart: t('Start over', 'फिर से शुरू करें', 'మళ్లీ ప్రారంభించండి'),
  nsSkip: t('Skip to choosing a situation', 'परिस्थिति चुनने पर जाएँ', 'పరిస్థితి ఎంచుకోవడానికి వెళ్లండి'),

  /* ——— Emergency ——— */
  emOpen: t('I need help now', 'मुझे अभी मदद चाहिए', 'నాకు ఇప్పుడే సహాయం కావాలి'),
  emTitle: t('Help right now', 'अभी मदद', 'ఇప్పుడే సహాయం'),
  emSafety: t('If you are in immediate danger, get to a safe place and call 112 — the national emergency number.', 'यदि आप तत्काल खतरे में हैं, तो सुरक्षित स्थान पर जाएँ और 112 — राष्ट्रीय आपातकालीन नंबर पर कॉल करें।', 'మీరు వెంటనే ప్రమాదంలో ఉంటే సురక్షిత ప్రదేశానికి వెళ్లి 112 — జాతీయ అత్యవసర నంబర్ కాల్ చేయండి.'),
  emPolice: t('Police', 'पुलिस', 'పోలీసులు'),
  emPoliceNum: '100',
  emFire: t('Fire', 'अग्निशमन', 'అగ్నిమాపక'),
  emFireNum: '101',
  emAmbulance: t('Ambulance', 'एम्बुलेंस', 'అంబులెన్స్'),
  emAmbulanceNum: '102',
  emWomen: t('Women helpline', 'महिला हेल्पलाइन', 'మహిళా హెల్ప్లైన్'),
  emWomenNum: '181',
  emChild: t('Childline', 'चाइल्डलाइन', 'చైల్డ్లైన్'),
  emChildNum: '1098',
  emCyber: t('Cybercrime helpline', 'साइबर अपराध हेल्पलाइन', 'సైబర్ నేర హెల్ప్లైన్'),
  emCyberNum: '1930',
  emAllInOne: t('All-in-One SOS', 'ऑल-इन-वन SOS', 'ఆల్-ఇన్-వన్ SOS'),
  emAllInOneNum: '112',
  emSupport: t('Women support (24×7)', 'महिला सहायता (24×7)', 'మహిళా మద్దతు (24×7)'),
  emSupportNum: '1091',
  emBribe: t('Anti-corruption / bribery', 'भ्रष्टाचार विरोधी / रिश्वत', 'అవినీతి వ్యతిరేక / లంచం'),
  emBribeNum: '1064',
  emHumanRights: t('Human rights (NHRC)', 'मानवाधिकार (एनएचआरसी)', 'మానవ హక్కులు (NHRC)'),
  emHumanRightsNum: '14433',
  emLegal: t('Legal help', 'कानूनी सहायता', 'న్యాయ సహాయం'),
  emLegalNum: '15100',
  emLegalNote: t(
    'NALSA free 24×7 legal counsel helpline · nalsa.gov.in',
    'नालसा निःशुल्क 24×7 विधिक परामर्श हेल्पलाइन · nalsa.gov.in',
    'NALSA ఉచిత 24×7 న్యాయ సలహా హెల్ప్లైన్ · nalsa.gov.in'
  ),
  emNote: t(
    'NyayaNow is not an emergency service. It only shows you official numbers and routes.',
    'न्यायनाउ आपातकालीन सेवा नहीं है। यह केवल आधिकारिक नंबर और मार्ग दिखाता है।',
    'న్యాయనౌ అత్యవసర సేవ కాదు. ఇది అధికారిక నంబర్లు, మార్గాలను మాత్రమే చూపుతుంది.'
  ),
  emReturn: t('Return to NyayaNow', 'न्यायनाउ पर वापस', 'న్యాయనౌకు తిరిగి'),

  /* ——— Situation memory ——— */
  memTitle: t('Situation memory', 'स्थिति मेमोरी', 'పరిస్థితి మెమరీ'),
  memIntro: t(
    'Privately record the details of what happened. This is stored only on this device — never sent anywhere.',
    'घटना का विवरण निजी रूप से दर्ज करें। यह केवल इसी डिवाइस पर रहता है — कहीं नहीं भेजा जाता।',
    'సంఘటన వివరాలను ప్రైవేట్గా నమోదు చేయండి. ఇది ఈ పరికరంలో మాత్రమే ఉంటుంది — ఎక్కడికీ పంపబడదు.'
  ),
  memSavedOnly: t('Saved only on this device.', 'केवल इसी डिवाइस पर सहेजा गया।', 'ఈ పరికరంలో మాత్రమే సేవ్ చేయబడింది.'),
  memFieldDate: t('Date', 'तारीख़', 'తేదీ'),
  memFieldTime: t('Time', 'समय', 'సమయం'),
  memFieldLocation: t('Location', 'स्थान', 'ప్రదేశం'),
  memFieldStation: t('Police station', 'पुलिस थाना', 'పోలీస్ స్టేషన్'),
  memFieldOfficer: t('Officer details (if known)', 'अधिकारी का विवरण (यदि ज्ञात हो)', 'అధికారి వివరాలు (తెలిస్తే)'),
  memFieldWhat: t('What happened', 'क्या हुआ', 'ఏమి జరిగింది'),
  memFieldNotes: t('Important notes', 'महत्वपूर्ण नोट्स', 'ముఖ్యమైన గమనికలు'),
  memSave: t('Save to this device', 'इस डिवाइस पर सहेजें', 'ఈ పరికరంలో సేవ్ చేయండి'),
  memClear: t('Clear my information', 'मेरी जानकारी साफ़ करें', 'నా సమాచారాన్ని తొలగించండి'),
  memSaved: t('Saved on this device.', 'इस डिवाइस पर सहेजा गया।', 'ఈ పరికరంలో సేవ్ అయింది.'),
  memEmpty: t('Nothing recorded yet.', 'अभी कुछ दर्ज नहीं है।', 'ఇంకా ఏమీ నమోదు కాలేదు.'),
  memSavedMemories: t('Saved memories', 'सहेजी गई मेमोरी', 'సేవ్ చేసిన మెమరీలు'),
  memDelete: t('Delete', 'हटाएँ', 'తొలగించు'),
  memNoAccount: t('No account needed. This never requires login.', 'कोई खाता आवश्यक नहीं। इसमें लॉगिन की ज़रूरत नहीं।', 'ఖాతా అవసరం లేదు. దీనికి లాగిన్ అవసరం లేదు.'),
  memOpen: t('Record what happened', 'घटना दर्ज करें', 'సంఘటన నమోదు చేయండి'),

  /* ——— Complaint checklist ——— */
  clTitle: t('Prepare before you complain', 'शिकायत से पहले तैयारी करें', 'ఫిర్యాదు ముందు సిద్ధం చేయండి'),
  clIntro: t(
    'A private, on-device checklist. Nothing is uploaded or sent anywhere.',
    'एक निजी, ऑन-डिवाइस चेकलिस्ट। कुछ भी अपलोड या भेजा नहीं जाता।',
    'ప్రైవేట్, పరికరంలోనే చెక్లిస్ట్. ఏదీ అప్లోడ్ చేయబడదు లేదా పంపబడదు.'
  ),
  clDate: t('Date', 'तारीख़', 'తేదీ'),
  clTime: t('Time', 'समय', 'సమయం'),
  clLocation: t('Location', 'स्थान', 'ప్రదేశం'),
  clStation: t('Police station', 'पुलिस थाना', 'పోలీస్ స్టేషన్'),
  clOfficer: t('Officer details if known', 'अधिकारी का विवरण यदि ज्ञात हो', 'అధికారి వివరాలు తెలిస్తే'),
  clWitnesses: t('Witness details', 'गवाहों का विवरण', 'సాక్షుల వివరాలు'),
  clDocs: t('Relevant documents', 'प्रासंगिक दस्तावेज़', 'సంబంధిత పత్రాలు'),
  clMedical: t('Medical records where relevant', 'जहाँ प्रासंगिक हो चिकित्सा रिकॉर्ड', 'వర్తించే చోట వైద్య రికార్డులు'),
  clEvidence: t('Other safely preserved evidence', 'अन्य सुरक्षित संरक्षित साक्ष्य', 'ఇతర సురక్షితంగా భద్రపరిచిన ఆధారాలు'),
  clCreate: t('Create my checklist', 'मेरी चेकलिस्ट बनाएँ', 'నా చెక్లిస్ట్ సృష్టించండి'),
  clReset: t('Reset checklist', 'चेकलिस्ट रीसेट करें', 'చెక్లిస్ట్ రీసెట్ చేయండి'),
  clProgress: t('prepared', 'तैयार', 'సిద్ధం'),
  clNoUpload: t('No files are uploaded. Keep everything yourself.', 'कोई फ़ाइल अपलोड नहीं होती। सब कुछ अपने पास रखें।', 'ఫైళ్లు అప్లోడ్ చేయబడవు. ప్రతిదీ మీ వద్దే ఉంచుకోండి.'),

  /* ——— Privacy mode ——— */
  pmTitle: t('Privacy mode', 'गोपनीयता मोड', 'గోప్యతా మోడ్'),
  pmDesc: t(
    'When enabled, NyayaNow hides personal information from the interface and makes clearing your local data one tap away. Situation memory and checklists stay on this device only.',
    'सक्षम होने पर, न्यायनाउ इंटरफ़ेस से व्यक्तिगत जानकारी छिपाता है और स्थानीय डेटा साफ़ करना एक क्लिक दूर कर देता है। स्थिति मेमोरी और चेकलिस्ट केवल इसी डिवाइस पर रहती हैं।',
    'ప్రారంభించినప్పుడు, న్యాయనౌ ఇంటర్ఫేస్ నుండి వ్యక్తిగత సమాచారాన్ని దాచి, స్థానిక డేటాను ఒక క్లిక్లో తొలగించేలా చేస్తుంది. పరిస్థితి మెమరీ, చెక్లిస్ట్ ఈ పరికరంలోనే ఉంటాయి.'
  ),
  pmOn: t('Privacy mode is ON', 'गोपनीयता मोड चालू है', 'గోప్యతా మోడ్ ఆన్లో ఉంది'),
  pmOff: t('Privacy mode is OFF', 'गोपनीयता मोड बंद है', 'గోప్యతా మోడ్ ఆఫ్లో ఉంది'),
  pmClearData: t('Clear my local situation data', 'मेरा स्थानीय स्थिति डेटा साफ़ करें', 'నా స్థానిక పరిస్థితి డేటాను తొలగించండి'),
  pmCleared: t('Local data cleared.', 'स्थानीय डेटा साफ़ किया गया।', 'స్థానిక డేటా తొలగించబడింది.'),
  pmNoAccount: t(
    'NyayaNow does not require an account to use the core rights navigator.',
    'मुख्य अधिकार नेविगेटर के लिए न्यायनाउ को किसी खाते की आवश्यकता नहीं है।',
    'ప్రధాన హక్కుల నావిగేటర్ కోసం న్యాయనౌకు ఖాతా అవసరం లేదు.'
  ),
  pmWhatStored: t(
    'What is stored on this device: your situation memory and checklist entries, and your language/preferences. Nothing is sent to a server.',
    'इस डिवाइस पर क्या रहता है: आपकी स्थिति मेमोरी, चेकलिस्ट प्रविष्टियाँ, और भाषा/प्राथमिकताएँ। कुछ भी सर्वर पर नहीं भेजा जाता।',
    'ఈ పరికరంలో నిల్వ ఉండేవి: మీ పరిస్థితి మెమరీ, చెక్లిస్ట్ నమోదులు, భాష/ప్రాధాన్యతలు. ఏదీ సర్వర్కు పంపబడదు.'
  ),

  /* ——— Source dialog / verification ——— */
  srcTitle: t('Official sources & verification', 'आधिकारिक स्रोत और सत्यापन', 'అధికారిక మూలాలు & ధృవీకరణ'),
  srcIntro: t(
    'NyayaNow uses official government and primary legal sources wherever possible. Important legal information is linked to its original source.',
    'न्यायनाउ जहाँ संभव हो आधिकारिक सरकारी और प्राथमिक कानूनी स्रोतों का उपयोग करता है। महत्वपूर्ण कानूनी जानकारी उसके मूल स्रोत से जुड़ी होती है।',
    'న్యాయనౌ సాధ్యమైనచోట అధికారిక ప్రభుత్వ, ప్రాథమిక చట్టపరమైన మూలాలను ఉపయోగిస్తుంది. ముఖ్యమైన చట్టపరమైన సమాచారం దాని అసలు మూలానికి అనుసంధానించబడి ఉంటుంది.'
  ),
  srcHowWeVerify: t('How we verify information', 'हम जानकारी कैसे सत्यापित करते हैं', 'మేము సమాచారాన్ని ఎలా ధృవీకరిస్తాము'),
  srcStep1: t('Official source identified', 'आधिकारिक स्रोत की पहचान', 'అధికారిక మూలం గుర్తించబడింది'),
  srcStep2: t('Relevant Act / Article / Section / Judgment checked', 'प्रासंगिक अधिनियम/अनुच्छेद/धारा/निर्णय जाँचा गया', 'సంబంధిత చట్టం/ఆర్టికల్/సెక్షన్/తీర్పు పరిశీలించబడింది'),
  srcStep3: t('Plain-language explanation prepared', 'सरल भाषा में व्याख्या तैयार', 'సరళ భాషలో వివరణ సిద్ధం చేయబడింది'),
  srcStep4: t('Official source linked beside the claim', 'दावे के साथ आधिकारिक स्रोत जुड़ा', 'వాదన పక్కన అధికారిక మూలం అనుసంధానించబడింది'),
  srcStep5: t('Verification date recorded', 'सत्यापन तिथि दर्ज', 'ధృవీకరణ తేదీ నమోదు చేయబడింది'),
  srcLastReviewed: t('Last reviewed', 'अंतिम समीक्षा', 'చివరి సమీక్ష'),
  srcVisit: t('Visit official source →', 'आधिकारिक स्रोत देखें →', 'అధికారిక మూలం చూడండి →'),
  srcInstitution: t('Institution', 'संस्था', 'సంస్థ'),
  srcPurpose: t('Purpose', 'उद्देश्य', 'ప్రయోజనం'),
  srcHowUsed: t('How NyayaNow uses it', 'न्यायनाउ इसका उपयोग कैसे करता है', 'న్యాయనౌ దీన్ని ఎలా ఉపయోగిస్తుంది'),

  /* ——— Disclaimer ——— */
  discTitle: t('Legal disclaimer', 'कानूनी अस्वीकरण', 'చట్టపరమైన నిరాకరణ'),
  discBody: t(
    'NyayaNow provides general legal information for public awareness and educational purposes. It is not a substitute for advice or representation from a qualified legal professional.\n\nLegal rights, procedures and available remedies may depend on the specific facts, applicable law and jurisdiction. Information shown on NyayaNow should not be treated as a determination that a particular action by a police officer or authority is lawful or unlawful.\n\nWe make reasonable efforts to link important information to official and primary sources. Laws, procedures, government portals and other information may change. Users should verify important information using the official sources linked within the application.\n\nNyayaNow does not submit complaints, contact authorities, provide emergency services, or represent users before courts or authorities unless explicitly stated.\n\nIf you are in immediate danger, seek appropriate emergency assistance rather than relying solely on this website.\n\nFor case-specific legal advice, contact a qualified lawyer or appropriate Legal Services Authority.',
    'न्यायनाउ सार्वजनिक जागरूकता और शैक्षिक उद्देश्यों के लिए सामान्य कानूनी जानकारी प्रदान करता है। यह किसी योग्य कानूनी पेशेवर से सलाह या प्रतिनिधित्व का विकल्प नहीं है।\n\nकानूनी अधिकार, प्रक्रियाएँ और उपलब्ध उपाय विशिष्ट तथ्यों, लागू कानून और क्षेत्राधिकार पर निर्भर कर सकते हैं। न्यायनाउ पर दिखाई गई जानकारी को यह निर्धारण नहीं माना जाना चाहिए कि पुलिस अधिकारी या प्राधिकरण की कोई विशेष कार्रवाई वैध या अवैध है।\n\nहम महत्वपूर्ण जानकारी को आधिकारिक और प्राथमिक स्रोतों से जोड़ने का उचित प्रयास करते हैं। कानून, प्रक्रियाएँ, सरकारी पोर्टल और अन्य जानकारी बदल सकती है। उपयोगकर्ताओं को एप्लिकेशन में जुड़े आधिकारिक स्रोतों से महत्वपूर्ण जानकारी सत्यापित करनी चाहिए।\n\nन्यायनाउ शिकायत दर्ज नहीं करता, अधिकारियों से संपर्क नहीं करता, आपातकालीन सेवाएँ प्रदान नहीं करता, और स्पष्ट रूप से कहे बिना न्यायालयों या प्राधिकरणों के समक्ष उपयोगकर्ताओं का प्रतिनिधित्व नहीं करता।\n\nयदि आप तत्काल खतरे में हैं, तो केवल इस वेबसाइट पर निर्भर रहने के बजाय उचित आपातकालीन सहायता लें।\n\nमामला-विशिष्ट कानूनी सलाह के लिए, योग्य वकील या उपयुक्त विधिक सेवा प्राधिकरण से संपर्क करें।',
    'న్యాయనౌ ప్రజా అవగాహన, విద్యా ప్రయోజనాల కోసం సాధారణ చట్టపరమైన సమాచారాన్ని అందిస్తుంది. ఇది అర్హత కలిగిన న్యాయ నిపుణుల సలహా లేదా ప్రాతినిధ్యానికి ప్రత్యామ్నాయం కాదు.\n\nచట్టపరమైన హక్కులు, విధానాలు, అందుబాటులో ఉన్న పరిహారాలు నిర్దిష్ట వాస్తవాలు, వర్తించే చట్టం, అధికార పరిధిపై ఆధారపడి ఉండవచ్చు. న్యాయనౌలో చూపిన సమాచారం ఒక పోలీసు అధికారి లేదా అథారిటీ చర్య చట్టబద్ధమైనదా లేదా చట్టవిరుద్ధమైనదా అనే నిర్ణయంగా పరిగణించకూడదు.\n\nముఖ్యమైన సమాచారాన్ని అధికారిక, ప్రాథమిక మూలాలకు అనుసంధానించడానికి మేము సహేతుక ప్రయత్నాలు చేస్తాము. చట్టాలు, విధానాలు, ప్రభుత్వ పోర్టల్లు, ఇతర సమాచారం మారవచ్చు. యూజర్లు అప్లికేషన్లో అనుసంధానించిన అధికారిక మూలాల ద్వారా ముఖ్యమైన సమాచారాన్ని ధృవీకరించాలి.\n\nన్యాయనౌ ఫిర్యాదులు దాఖలు చేయదు, అధికారులను సంప్రదించదు, అత్యవసర సేవలు అందించదు, స్పష్టంగా పేర్కొనకుండా కోర్టులు లేదా అథారిటీల ముందు యూజర్లకు ప్రాతినిధ్యం వహించదు.\n\nమీరు వెంటనే ప్రమాదంలో ఉంటే, ఈ వెబ్సైట్పై మాత్రమే ఆధారపడకుండా తగిన అత్యవసర సహాయం పొందండి.\n\nకేసు-నిర్దిష్ట న్యాయ సలహా కోసం, అర్హత కలిగిన న్యాయవాది లేదా తగిన న్యాయ సేవా అథారిటీని సంప్రదించండి.'
  ),
  discAck: t('I understand', 'मैं समझ गया/गई', 'నేను అర్థం చేసుకున్నాను'),
  discFirstVisit: t(
    'NyayaNow provides general legal information, not personalized legal advice.',
    'न्यायनाउ सामान्य कानूनी जानकारी देता है, व्यक्तिगत कानूनी सलाह नहीं।',
    'న్యాయనౌ సాధారణ చట్టపరమైన సమాచారం అందిస్తుంది, వ్యక్తిగత న్యాయ సలహా కాదు.'
  ),

  /* ——— Legal help page ——— */
  lhTitle: t('I need legal help', 'मुझे कानूनी सहायता चाहिए', 'నాకు న్యాయ సహాయం కావాలి'),
  lhIntro: t(
    'Free legal aid is available across India through the Legal Services Authorities. Choose your state below.',
    'पूरे भारत में विधिक सेवा प्राधिकरणों के माध्यम से निःशुल्क कानूनी सहायता उपलब्ध है। नीचे अपना राज्य चुनें।',
    'భారతదేశం అంతటా న్యాయ సేవా అథారిటీల ద్వారా ఉచిత న్యాయ సహాయం అందుబాటులో ఉంది. క్రింద మీ రాష్ట్రం ఎంచుకోండి.'
  ),
  lhSelectStates: t('Select your states', 'अपने राज्य चुनें', 'మీ రాష్ట్రాలు ఎంచుకోండి'),
  lhNational: t('National resources', 'राष्ट्रीय संसाधन', 'జాతీయ వనరులు'),
  lhStates: t('States', 'राज्य', 'రాష్ట్రాలు'),
  lhUts: t('Union Territories', 'केंद्र शासित प्रदेश', 'కేంద్ర పాలిత ప్రాంతాలు'),
  lhClear: t('Clear selection', 'चयन साफ़ करें', 'ఎంపిక తొలగించండి'),
  lhViaDirectory: t('Official NALSA directory', 'नालसा की आधिकारिक निर्देशिका', 'NALSA అధికారిక డైరెక్టరీ'),
  lhSelectedLabel: t('selected', 'चयनित', 'ఎంపిక చేయబడ్డాయి'),
  lhCoveredNote: t(
    'All states and union territories are covered. Where a state has no dedicated portal, the link opens its entry in the official NALSA directory.',
    'सभी राज्य और केंद्र शासित प्रदेश शामिल हैं। जहाँ किसी राज्य का समर्पित पोर्टल नहीं है, वहाँ लिंक नालसा की आधिकारिक निर्देशिका में उसकी प्रविष्टि खोलता है।',
    'అన్ని రాష్ట్రాలు, కేంద్ర పాలిత ప్రాంతాలు కవర్ చేయబడ్డాయి. ప్రత్యేక పోర్టల్ లేని రాష్ట్రానికి లింక్ NALSA అధికారిక డైరెక్టరీలో దాని నమోదును తెరుస్తుంది.'
  ),
  lhYourState: t('Your state legal aid', 'आपके राज्य की कानूनी सहायता', 'మీ రాష్ట్ర న్యాయ సహాయం'),
  lhDlsa: t('District Legal Services Authority (DLSA)', 'जिला विधिक सेवा प्राधिकरण (डीएलएसए)', 'జిల్లా న్యాయ సేవా అథారిటీ (DLSA)'),
  lhDlsaFind: t('Find my DLSA →', 'मेरा डीएलएसए खोजें →', 'నా DLSA ను కనుగొనండి →'),
  lhDlsaIntro: t(
    'Your DLSA offers free legal aid and is attached to your district court. Use the official contact page for your state to find your district authority and its contact details.',
    'आपका जिला विधिक सेवा प्राधिकरण निःशुल्क कानूनी सहायता देता है और आपके जिला न्यायालय से जुड़ा है। अपने जिला प्राधिकरण और संपर्क विवरण खोजने के लिए अपने राज्य का आधिकारिक संपर्क पृष्ठ देखें।',
    'మీ జిల్లా న్యాయ సేవా అథారిటీ ఉచిత న్యాయ సహాయం అందిస్తుంది, మీ జిల్లా కోర్టుతో అనుసంధానించబడి ఉంటుంది. మీ జిల్లా అథారిటీ, సంప్రదింపు వివరాలు కనుగొనడానికి మీ రాష్ట్ర అధికారిక సంప్రదింపు పేజీని చూడండి.'
  ),
  lhAddress: t('Address', 'पता', 'చిరునామా'),
  lhPhone: t('Phone', 'फ़ोन', 'ఫోన్'),
  lhEmail: t('Email', 'ईमेल', 'ఇమెయిల్'),
  lhContactSource: t(
    'Details from the official NALSA directory (15 August 2026).',
    'विवरण नालसा की आधिकारिक निर्देशिका से (15 अगस्त 2026)।',
    'వివరాలు అధికారిక NALSA డైరెక్టరీ నుండి (15 ఆగస్టు 2026).'
  ),
  lhAllIndia: t('India-wide', 'पूरे भारत', 'భారతదేశం అంతటా'),
  lhAP: t('Andhra Pradesh', 'आंध्र प्रदेश', 'ఆంధ్రప్రదేశ్'),
  lhFreeNote: t(
    'Legal aid is free for eligible persons (for example, women, children, SC/ST members, and persons below the income threshold). Check with your Legal Services Authority.',
    'पात्र व्यक्तियों (जैसे महिलाएँ, बच्चे, अनुसूचित जाति/जनजाति सदस्य, और आय सीमा से नीचे के लोग) के लिए कानूनी सहायता निःशुल्क है। अपने विधिक सेवा प्राधिकरण से पूछें।',
    'అర్హులకు (ఉదా. మహిళలు, పిల్లలు, ఎస్సీ/ఎస్టీ సభ్యులు, ఆదాయ పరిమితి కంటే తక్కువ వారు) న్యాయ సహాయం ఉచితం. మీ న్యాయ సేవా అథారిటీని అడగండి.'
  ),

  /* ——— Complaint navigator page ——— */
  cnTitle: t('Complaint navigator', 'शिकायत नेविगेटर', 'ఫిర్యాదు నావిగేటర్'),
  cnIntro: t(
    'Pick what happened. We show the recommended route, why it may apply, what to prepare, and where to get legal help.',
    'चुनें कि क्या हुआ। हम अनुशंसित मार्ग, क्यों लागू हो सकता है, क्या तैयार करें, और कानूनी सहायता कहाँ मिलेगी — दिखाते हैं।',
    'ఏమి జరిగిందో ఎంచుకోండి. సిఫార్సు చేసిన మార్గం, ఎందుకు వర్తిస్తుంది, ఏమి సిద్ధం చేయాలి, న్యాయ సహాయం ఎక్కడ లభిస్తుందో చూపిస్తాము.'
  ),
  cnRecommended: t('Recommended route', 'अनुशंसित मार्ग', 'సిఫార్సు చేసిన మార్గం'),
  cnWhy: t('Why it may apply', 'क्यों लागू हो सकता है', 'ఎందుకు వర్తిస్తుంది'),
  cnPrepare: t('What to prepare', 'क्या तैयार करें', 'ఏమి సిద్ధం చేయాలి'),
  cnWebsite: t('Official website', 'आधिकारिक वेबसाइट', 'అధికారిక వెబ్సైట్'),
  cnLegalHelp: t('Legal help', 'कानूनी सहायता', 'న్యాయ సహాయం'),
  cnPickOne: t('Choose a situation', 'एक परिस्थिति चुनें', 'ఒక పరిస్థితిని ఎంచుకోండి'),

  /* ——— Footer / final CTA ——— */
  fctaTitle: t('Know your rights.', 'अपने अधिकार जानें।', 'మీ హక్కులు తెలుసుకోండి.'),
  fctaTitle2: t('Know your next step.', 'अपना अगला कदम जानें।', 'మీ తదుపరి అడుగు తెలుసుకోండి.'),
  fctaSub: t(
    'Legal information should not be difficult to understand when you need it most.',
    'जब आपको सबसे ज़्यादा ज़रूरत हो, तब कानूनी जानकारी समझना मुश्किल नहीं होना चाहिए।',
    'మీకు అత్యంత అవసరమైనప్పుడు చట్టపరమైన సమాచారం అర్థం చేసుకోవడం కష్టం కాకూడదు.'
  ),
  fctaButton: t('Explore your rights', 'अपने अधिकार देखें', 'మీ హక్కులు అన్వేషించండి'),
  footerExplore: t('Explore', 'अन्वेषण', 'అన్వేషించండి'),
  footerTrust: t('Trust & Legal', 'भरोसा और कानून', 'నమ్మకం & చట్టం'),
  footerProject: t('Project', 'परियोजना', 'ప్రాజెక్ట్'),
  footerSituations: t('Situations', 'परिस्थितियाँ', 'పరిస్థితులు'),
  footerRightsNavigator: t('Rights navigator', 'अधिकार नेविगेटर', 'హక్కుల నావిగేటర్'),
  footerComplaintNavigator: t('Complaint navigator', 'शिकायत नेविगेटर', 'ఫిర్యాదు నావిగేటర్'),
  footerLegalHelp: t('Get legal help', 'कानूनी सहायता लें', 'న్యాయ సహాయం పొందండి'),
  footerSources: t('Official sources', 'आधिकारिक स्रोत', 'అధికారిక మూలాలు'),
  footerHowVerify: t('How we verify', 'हम कैसे सत्यापित करते हैं', 'మేము ఎలా ధృవీకరిస్తాము'),
  footerDisclaimer: t('Legal disclaimer', 'कानूनी अस्वीकरण', 'చట్టపరమైన నిరాకరణ'),
  footerPrivacy: t('Privacy', 'गोपनीयता', 'గోప్యత'),
  footerGithub: t('GitHub Repository', 'गिटहब रिपॉज़िटरी', 'GitHub రిపోజిటరీ'),
  footerAbout: t('About NyayaNow', 'न्यायनाउ के बारे में', 'న్యాయనౌ గురించి'),
  footerBuilt: t(
    'Built for citizen awareness and access to reliable public resources.',
    'नागरिक जागरूकता और विश्वसनीय सार्वजनिक संसाधनों तक पहुँच के लिए बनाया गया।',
    'పౌరుల అవగాహన, విశ్వసనీయ ప్రజా వనరుల ప్రాప్తి కోసం నిర్మించబడింది.'
  ),
  footerCopyright: t(
    '© 2026 NyayaNow. Built with technology for a more informed India.',
    '© 2026 न्यायनाउ। अधिक जागरूक भारत के लिए तकनीक से निर्मित।',
    '© 2026 న్యాయనౌ. మరింత సమాచారం గల భారతదేశం కోసం సాంకేతికతతో నిర్మించబడింది.'
  ),
  offlineTitle: t("You're offline", 'आप ऑफ़लाइन हैं', 'మీరు ఆఫ్లైన్లో ఉన్నారు'),
  offlineNote: t(
    'showing cached content — verify against official sources when you are back online.',
    'कैश की गई सामग्री दिख रही है — ऑनलाइन लौटने पर आधिकारिक स्रोतों से सत्यापित करें।',
    'క్యాష్ చేసిన కంటెంట్ చూపిస్తున్నాం — ఆన్లైన్కు వచ్చాక అధికారిక మూలాలతో ధృవీకరించండి.'
  ),
  footerOffline: t('Available offline', 'ऑफ़लाइन उपलब्ध', 'ఆఫ్లైన్లో అందుబాటులో ఉంది'),
  footerOfflineNote: t(
    'Cached content may not reflect the latest law — always verify against official sources.',
    'कैश की गई सामग्री नवीनतम कानून न दर्शाए — हमेशा आधिकारिक स्रोतों से सत्यापित करें।',
    'క్యాష్ చేసిన కంటెంట్ తాజా చట్టాన్ని ప్రతిబింబించకపోవచ్చు — ఎల్లప్పుడూ అధికారిక మూలాలతో ధృవీకరించండి.'
  ),

  /* ——— Language ——— */
  langEn: t('English', 'अंग्रेज़ी', 'ఇంగ్లీష్'),
  langHi: t('हिन्दी', 'हिन्दी', 'హిందీ'),
  langTe: t('తెలుగు', 'తెలుగు', 'తెలుగు'),

  /* ——— Misc ——— */
  close: t('Close', 'बंद करें', 'మూసివేయండి'),
  learnMore: t('Learn more', 'और जानें', 'మరింత తెలుసుకోండి'),
  disclaimerShort: t('Legal disclaimer', 'कानूनी अस्वीकरण', 'చట్టపరమైన నిరాకరణ'),
  notEmergency: t(
    'If you are in immediate danger, call 112. NyayaNow is not an emergency service.',
    'तत्काल खतरे में 112 पर कॉल करें। न्यायनाउ आपातकालीन सेवा नहीं है।',
    'వెంటనే ప్రమాదంలో ఉంటే 112 కాల్ చేయండి. న్యాయనౌ అత్యవసర సేవ కాదు.'
  ),
  proceedToGuide: t('Go to guide', 'गाइड पर जाएँ', 'గైడ్కు వెళ్లండి')
} as const

export type UIKey = keyof typeof UI
