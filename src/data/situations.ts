import type { Situation } from './types'

const t = (en: string, hi: string, te: string) => ({ en, hi, te })

/**
 * NyayaNow knowledge base — structured, verified content.
 *
 * LEGAL ACCURACY RULE: every legal claim points to a verified source
 * (sources.ts). Explanations are plain-language summaries of the cited
 * provision, not new legal claims. Where a fact could not be verified,
 * the content says so instead of guessing.
 *
 * Sources cited per situation use BNSS 2023 (India Code), the Constitution
 * of India, the Prevention of Corruption Act 1988 and official portals.
 */

export const SITUATIONS: Situation[] = [
  /* ────────────────────────────────────────────────────────────────
     1. POLICE STOPPED / QUESTIONING
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'POLICE_QUESTIONING',
    slug: 'police-stopped-me',
    icon: 'shield',
    title: t('Police stopped or questioned me', 'पुलिस ने मुझे रोका या पूछताछ की', 'పోలీసులు నన్ను ఆపారు లేదా ప్రశ్నించారు'),
    shortTitle: t('Police stopped me', 'पुलिस ने मुझे रोका', 'పోలీసులు నన్ను ఆపారు'),
    description: t(
      'You were stopped, asked questions, or asked to come to the police station — but you are not sure you are under arrest.',
      'आपको रोका गया, सवाल पूछे गए, या थाने आने को कहा गया — लेकिन आप सुनिश्चित नहीं हैं कि आप गिरफ़्तार हैं।',
      'మిమ్మల్ని ఆపారు, ప్రశ్నలు అడిగారు, లేదా పోలీస్ స్టేషన్ రమ్మన్నారు — కానీ మీరు అరెస్ట్ అయ్యారో లేదో ఖచ్చితంగా తెలియదు.'
    ),
    urgency: 'medium',
    summary: t(
      'You have the right to stay calm, to know why you are being stopped, and to seek legal help if the interaction goes further. Co-operate with lawful requests while protecting your rights.',
      'आपको शांत रहने, यह जानने का अधिकार है कि आपको क्यों रोका गया, और बात आगे बढ़ने पर कानूनी मदद लेने का अधिकार है। कानूनी मांगों का पालन करें, साथ ही अपने अधिकारों की रक्षा करें।',
      'మీరు ప్రశాంతంగా ఉండే హక్కు, మిమ్మల్ని ఎందుకు ఆపారో తెలుసుకునే హక్కు, మరియు పరిస్థితి ముందుకు సాగితే న్యాయ సహాయం పొందే హక్కు మీకు ఉంది. చట్టబద్ధమైన అభ్యర్థనలకు సహకరిస్తూనే మీ హక్కులను కాపాడుకోండి.'
    ),
    immediateActions: [
      t('Stay calm and polite. Do not run.', 'शांत और विनम्र रहें। भागें नहीं।', 'ప్రశాంతంగా మరియు మర్యాదగా ఉండండి. పారిపోకండి.'),
      t('Ask why you are being stopped or questioned.', 'पूछें कि आपको क्यों रोका या पूछताछ की जा रही है।', 'మిమ్మల్ని ఎందుకు ఆపుతున్నారో లేదా ప్రశ్నిస్తున్నారో అడగండి.'),
      t('Note the officer’s name, badge number, place and time.', 'अधिकारी का नाम, बैज नंबर, स्थान और समय नोट करें।', 'అధికారి పేరు, బ్యాడ్జ్ నంబర్, ప్రదేశం మరియు సమయం గమనించండి.'),
      t('If you are being held, you have the right to be told the grounds and to contact a lawyer or family member.', 'यदि आपको रोका गया है, तो आपको कारण बताने और वकील या परिवार से संपर्क करने का अधिकार है।', 'మిమ్మల్ని అదుపులో ఉంచితే, కారణాలు తెలుసుకునే మరియు న్యాయవాది లేదా కుటుంబ సభ్యుడిని సంప్రదించే హక్కు మీకు ఉంది.')
    ],
    rights: [
      {
        id: 'q-right-grounds',
        title: t('To be told the grounds if arrested or detained', 'गिरफ़्तार या हिरासत में लेने पर कारण बताए जाने का अधिकार', 'అరెస్ట్ లేదా నిర్బంధంలో ఉంటే కారణాలు తెలుసుకునే హక్కు'),
        whatThisMeans: t(
          'If police hold you or arrest you, they must tell you the reason promptly. You cannot be kept in custody without being told why.',
          'यदि पुलिस आपको रोकती है या गिरफ़्तार करती है, तो उन्हें तुरंत कारण बताना होगा। बिना कारण बताए आपको हिरासत में नहीं रखा जा सकता।',
          'పోలీసులు మిమ్మల్ని అదుపులో ఉంచితే లేదా అరెస్ట్ చేస్తే వెంటనే కారణం చెప్పాలి. కారణం చెప్పకుండా మిమ్మల్ని నిర్బంధంలో ఉంచలేరు.'
        ),
        legalBasis: 'Constitution of India, Article 22(1) · BNSS §47',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'q-right-lawyer',
        title: t('To consult and be defended by a lawyer', 'वकील से परामर्श और प्रतिनिधित्व का अधिकार', 'న్యాయవాదిని సంప్రదించే మరియు ప్రాతినిధ్యం పొందే హక్కు'),
        whatThisMeans: t(
          'You may speak to a lawyer of your choice. If you are arrested, you may meet an advocate during interrogation.',
          'आप अपनी पसंद के वकील से बात कर सकते हैं। गिरफ़्तार होने पर आप पूछताछ के दौरान अधिवक्ता से मिल सकते हैं।',
          'మీరు మీ ఇష్టానుసారం న్యాయవాదితో మాట్లాడవచ్చు. అరెస్ట్ అయితే విచారణ సమయంలో న్యాయవాదిని కలవవచ్చు.'
        ),
        legalBasis: 'Constitution of India, Article 22(1) · BNSS §38',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'q-right-selfincrimination',
        title: t('Against being compelled to incriminate yourself', 'स्वयं को दोषी ठहराने के लिए बाध्य न किए जाने का अधिकार', 'మీపైనే ఆరోపణ రుజువు చేసేలా బలవంతం చేయకూడదనే హక్కు'),
        whatThisMeans: t(
          'You cannot be forced to answer questions that would make you a witness against yourself. Staying silent on specific questions is not itself an admission.',
          'आपको ऐसे सवालों के जवाब देने के लिए मजबूर नहीं किया जा सकता जो आपको अपने विरुद्ध गवाह बनाएं। कुछ सवालों पर चुप रहना स्वयं को दोषी मानना नहीं है।',
          'మీపైనే వ్యతిరేక సాక్షిగా మారే ప్రశ్నలకు సమాధానం ఇవ్వమని బలవంతం చేయలేరు. కొన్ని ప్రశ్నలకు మౌనంగా ఉండటం నేరాన్ని అంగీకరించడం కాదు.'
        ),
        legalBasis: 'Constitution of India, Article 20(3)',
        sourceIds: ['constitution']
      },
      {
        id: 'q-right-inform',
        title: t('To have a relative or friend informed', 'परिवार या मित्र को सूचित कराने का अधिकार', 'బంధువు లేదా స్నేహితుడికి సమాచారం అందించే హక్కు'),
        whatThisMeans: t(
          'If you are arrested, the police must inform your relative or friend about your arrest, where you are, and where you may be moved.',
          'गिरफ़्तार होने पर पुलिस को आपके परिवार या मित्र को आपकी गिरफ़्तारी, आपका स्थान और संभावित स्थानांतरण की सूचना देनी होगी।',
          'మీరు అరెస్ట్ అయితే పోలీసులు మీ బంధువు లేదా స్నేహితుడికి మీ అరెస్ట్ గురించి, మీరు ఎక్కడ ఉన్నారో, ఎక్కడికి తరలించవచ్చో తెలియజేయాలి.'
        ),
        legalBasis: 'BNSS §48',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'q-do-1',
        text: t('Speak calmly and truthfully. You may say you wish to consult a lawyer first.', 'शांति से और सच बोलें। आप कह सकते हैं कि आप पहले वकील से परामर्श लेना चाहते हैं।', 'ప్రశాంతంగా మరియు నిజం చెప్పండి. ముందుగా న్యాయవాదిని సంప్రదించాలనుకుంటున్నానని చెప్పవచ్చు.'),
        why: t('Silence is not an admission, and a lawyer can help you respond correctly.', 'चुप्पी स्वीकारोक्ति नहीं है, और वकील सही उत्तर देने में मदद कर सकता है।', 'మౌనం అంగీకారం కాదు; న్యాయవాది సరైన సమాధానం ఇవ్వడానికి సహాయపడతారు.')
      },
      {
        id: 'q-do-2',
        text: t('Ask for the officer’s identification and note it down.', 'अधिकारी की पहचान माँगें और उसे नोट करें।', 'అధికారి గుర్తింపు అడిగి గమనించండి.'),
        why: t('It helps later if you need to complain or give an account.', 'बाद में शिकायत या विवरण देने में मदद करता है।', 'తర్వాత ఫిర్యాదు చేయాల్సి వస్తే ఉపయోగపడుతుంది.')
      },
      {
        id: 'q-do-3',
        text: t('If asked to come to the station, confirm whether it is voluntary or you are under arrest.', 'थाने आने को कहा जाए तो पूछें कि यह स्वेच्छा से है या आप गिरफ़्तार हैं।', 'స్టేషన్ రమ్మంటే అది స్వచ్ఛందమా లేదా మీరు అరెస్ట్ అవుతున్నారా అని నిర్ధారించుకోండి.'),
        why: t('Different rights apply once you are formally arrested.', 'औपचारिक गिरफ़्तारी के बाद अलग अधिकार लागू होते हैं।', 'అధికారిక అరెస్ట్ అయిన తర్వాత వేరే హక్కులు వర్తిస్తాయి.')
      },
      {
        id: 'q-do-4',
        text: t('Call a family member or lawyer if you are uncomfortable.', 'असहज होने पर परिवार के सदस्य या वकील को बुलाएँ।', 'ఇబ్బందిగా అనిపిస్తే కుటుంబ సభ్యుడు లేదా న్యాయవాదిని పిలవండి.')
      }
    ],
    avoid: [
      {
        id: 'q-avoid-1',
        text: t('Do not flee or physically resist.', 'भागें नहीं, शारीरिक प्रतिरोध न करें।', 'పారిపోకండి, శారీరక ప్రతిఘటన చేయకండి.'),
        why: t('It can escalate the situation and create additional trouble.', 'इससे स्थिति बिगड़ सकती है और अतिरिक्त मुश्किल हो सकती है।', 'పరిస్థితి మరింత దిగజారి అదనపు ఇబ్బంది కలుగుతుంది.')
      },
      {
        id: 'q-avoid-2',
        text: t('Do not give false information.', 'झूठी जानकारी न दें।', 'తప్పుడు సమాచారం ఇవ్వకండి.'),
        why: t('False information can itself create legal complications.', 'झूठी जानकारी स्वयं कानूनी परेशानी खड़ी कर सकती है।', 'తప్పుడు సమాచారం స్వయంగా చట్టపరమైన సమస్యలను సృష్టించవచ్చు.')
      },
      {
        id: 'q-avoid-3',
        text: t('Do not sign anything you have not read and understood.', 'बिना पढ़े-समझे किसी दस्तावेज़ पर हस्ताक्षर न करें।', 'చదవకుండా, అర్థం చేసుకోకుండా దేనిపైనా సంతకం చేయకండి.'),
        why: t('A signed statement may be used later; a lawyer can review it first.', 'हस्ताक्षरित बयान बाद में इस्तेमाल हो सकता है; पहले वकील से दिखाएँ।', 'సంతకం చేసిన ప్రకటన తర్వాత ఉపయోగించబడవచ్చు; ముందుగా న్యాయవాదితో చూపించండి.')
      },
      {
        id: 'q-avoid-4',
        text: t('Do not hand over your phone or documents without understanding why.', 'बिना कारण जाने अपना फोन या दस्तावेज़ न दें।', 'కారణం తెలియకుండా మీ ఫోన్ లేదా పత్రాలు ఇవ్వకండి.')
      }
    ],
    evidence: [
      {
        id: 'q-ev-1',
        text: t('Note the officer’s name, badge number, place and time.', 'अधिकारी का नाम, बैज नंबर, स्थान और समय नोट करें।', 'అధికారి పేరు, బ్యాడ్జ్ నంబర్, ప్రదేశం మరియు సమయం గమనించండి.'),
        why: t('It helps later if you need to complain or give an account.', 'बाद में शिकायत या विवरण देने में मदद करता है।', 'తర్వాత ఫిర్యాదు చేయాల్సి వస్తే ఉపయోగపడుతుంది.')
      },
      {
        id: 'q-ev-2',
        text: t('Note the reason you were stopped or questioned, as told to you.', 'आपको रोके/पूछताछ करने का बताया गया कारण नोट करें।', 'మిమ్మల్ని ఆపడానికి/ప్రశ్నించడానికి చెప్పిన కారణం గమనించండి.'),
        why: t('Your record of what was said matters if the interaction is later disputed.', 'बाद में विवाद होने पर आपका दर्ज विवरण महत्वपूर्ण है।', 'తర్వాత వివాదం వస్తే మీ నమోదు వివరణ ముఖ్యం.')
      },
      {
        id: 'q-ev-3',
        text: t('If you sign anything, keep a copy and note what it was.', 'यदि कुछ साइन करें तो उसकी प्रति रखें और नोट करें कि वह क्या था।', 'ఏదైనా సంతకం చేస్తే కాపీ ఉంచుకోండి, అది ఏమిటో గమనించండి.'),
        why: t('A signed statement may be used later; a lawyer can review it first.', 'हस्ताक्षरित बयान बाद में इस्तेमाल हो सकता है; पहले वकील से दिखाएँ।', 'సంతకం చేసిన ప్రకటన తర్వాత ఉపయోగించవచ్చు; ముందుగా న్యాయవాదితో చూపించండి.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — stopped or questioned', 'आप यहाँ हैं — रोका/पूछताछ', 'మీరు ఇక్కడ ఉన్నారు — ఆపారు/ప్రశ్నించారు') },
      { label: t('Police may ask you to come to the station', 'पुलिस थाने आने को कह सकती है', 'పోలీసులు స్టేషన్ రమ్మనవచ్చు'), note: t('Ask whether you are under arrest.', 'पूछें कि क्या आप गिरफ़्तार हैं।', 'మీరు అరెస్ట్ అవుతున్నారా అని అడగండి.') },
      { label: t('If arrested — grounds told, relative informed', 'गिरफ़्तारी पर — कारण बताए जाएँगे, परिवार को सूचना', 'అరెస్ట్ అయితే — కారణాలు చెప్పబడతాయి, బంధువుకు తెలియజేయబడుతుంది'), note: t('Art. 22(1) · BNSS §47, §48', 'अनु. 22(1) · बीएनएसएस §47, §48', 'ఆర్టి. 22(1) · BNSS §47, §48'), linkTo: 'arrested' },
      { label: t('Produced before a Magistrate within 24 hours', '24 घंटे के भीतर मजिस्ट्रेट के सामने पेशी', '24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరు'), note: t('Art. 22(2) · BNSS §57, §58', 'अनु. 22(2) · बीएनएसएस §57, §58', 'ఆర్టి. 22(2) · BNSS §57, §58') },
      { label: t('Free legal aid available if needed', 'ज़रूरत पड़ने पर निःशुल्क कानूनी सहायता उपलब्ध', 'అవసరమైతే ఉచిత న్యాయ సహాయం అందుబాటులో ఉంది'), note: t('NALSA / Legal Services Authorities', 'नालसा / कानूनी सेवा प्राधिकरण', 'NALSA / న్యాయ సేవా అథారిటీలు') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'state-directory', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'q-cr-1',
        route: t('Higher police authority / complaint cell', 'वरिष्ठ पुलिस अधिकारी / शिकायत प्रकोष्ठ', 'ఉన్నత పోలీసు అధికారి / ఫిర్యాదు సెల్'),
        whyItMayApply: t('If you believe you were stopped or treated improperly without lawful basis.', 'यदि आपको लगता है कि आपको बिना कानूनी आधार रोका या बुरा व्यवहार किया गया।', 'చట్టబద్ధమైన ఆధారం లేకుండా ఆపారని లేదా చెడుగా ప్రవర్తించారని భావిస్తే.'),
        whatToPrepare: t('Date, time, place, officer details, and a written account of what happened.', 'तारीख़, समय, स्थान, अधिकारी का विवरण और घटना का लिखित विवरण।', 'తేదీ, సమయం, ప్రదేశం, అధికారి వివరాలు, జరిగిన దాని వ్రాతపూర్వక వివరణ.'),
        legalBasis: 'BNSS §175(3) — complaint to Magistrate may follow',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss', 'constitution'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     2. ARREST — FLAGSHIP EXPERIENCE
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'ARREST',
    slug: 'arrested',
    icon: 'handcuffs',
    title: t('I have been arrested', 'मुझे गिरफ़्तार किया गया है', 'నన్ను అరెస్ట్ చేశారు'),
    shortTitle: t('I have been arrested', 'मुझे गिरफ़्तार किया गया', 'నన్ను అరెస్ట్ చేశారు'),
    description: t(
      'You have been told you are under arrest, or police are taking you into custody.',
      'आपको बताया गया है कि आप गिरफ़्तार हैं, या पुलिस आपको हिरासत में ले रही है।',
      'మీరు అరెస్ట్ అయ్యారని చెప్పారు, లేదా పోలీసులు మిమ్మల్ని అదుపులోకి తీసుకుంటున్నారు.'
    ),
    urgency: 'high',
    summary: t(
      'Your basic rights at every stage: know the grounds of arrest, have a relative or friend informed, meet a lawyer, and be produced before a Magistrate within 24 hours. Stay calm — nothing you say under pressure helps you.',
      'हर चरण पर आपके बुनियादी अधिकार: गिरफ़्तारी के कारण जानें, परिवार/मित्र को सूचित कराएँ, वकील से मिलें, और 24 घंटे के भीतर मजिस्ट्रेट के सामने पेशी। शांत रहें — दबाव में कही गई बात आपके लिए मददगार नहीं होती।',
      'ప్రతి దశలో మీ ప్రాథమిక హక్కులు: అరెస్ట్ కారణాలు తెలుసుకోండి, బంధువు/స్నేహితుడికి సమాచారం అందించండి, న్యాయవాదిని కలవండి, 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరుపరచాలి. ప్రశాంతంగా ఉండండి — ఒత్తిడిలో చెప్పిన మాట మీకు సహాయం చేయదు.'
    ),
    immediateActions: [
      t('Stay calm. Do not resist or flee — note where you are being taken.', 'शांत रहें। प्रतिरोध या भागने की कोशिश न करें — ध्यान दें कि आपको कहाँ ले जाया जा रहा है।', 'ప్రశాంతంగా ఉండండి. ప్రతిఘటించవద్దు లేదా పారిపోవద్దు — మిమ్మల్ని ఎక్కడికి తీసుకెళ్తున్నారో గమనించండి.'),
      t('Ask to be told the grounds of arrest and whether the offence is bailable.', 'गिरफ़्तारी के कारण और क्या अपराध ज़मानती है, यह पूछें।', 'అరెస్ట్ కారణాలు మరియు నేరం బెయిల్ ఇవ్వదగినదా అని అడగండి.'),
      t('Ask the police to inform a relative or friend.', 'पुलिस से परिवार या मित्र को सूचित करने को कहें।', 'బంధువు లేదా స్నేహితుడికి తెలియజేయమని పోలీసులను అడగండి.'),
      t('Say clearly that you wish to consult a lawyer. You may meet an advocate during interrogation.', 'स्पष्ट रूप से कहें कि आप वकील से परामर्श करना चाहते हैं। पूछताछ के दौरान आप अधिवक्ता से मिल सकते हैं।', 'మీరు న్యాయవాదిని సంప్రదించాలనుకుంటున్నారని స్పష్టంగా చెప్పండి. విచారణ సమయంలో న్యాయవాదిని కలవవచ్చు.'),
      t('If bail is not granted, you must be produced before a Magistrate within 24 hours.', 'ज़मानत न मिलने पर 24 घंटे के भीतर मजिस्ट्रेट के सामने पेशी अनिवार्य है।', 'బెయిల్ లభించకపోతే 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరుపరచాలి.')
    ],
    rights: [
      {
        id: 'a-right-grounds',
        title: t('To be told the grounds of arrest and your right to bail', 'गिरफ़्तारी के कारण और ज़मानत के अधिकार की जानकारी', 'అరెస్ట్ కారణాలు మరియు బెయిల్ హక్కు గురించి తెలుసుకునే హక్కు'),
        whatThisMeans: t(
          'At the time of arrest you must be told why you are being arrested and whether the offence is bailable. This is your constitutional right.',
          'गिरफ़्तारी के समय आपको बताना ज़रूरी है कि आपको क्यों गिरफ़्तार किया जा रहा है और क्या अपराध ज़मानती है। यह आपका संवैधानिक अधिकार है।',
          'అరెస్ట్ సమయంలో మిమ్మల్ని ఎందుకు అరెస్ట్ చేస్తున్నారో, నేరం బెయిల్ ఇవ్వదగినదా అని చెప్పాలి. ఇది మీ రాజ్యాంగ హక్కు.'
        ),
        legalBasis: 'Constitution of India, Article 22(1) · BNSS §47',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'a-right-inform',
        title: t('To have a relative or friend informed of your arrest', 'परिवार या मित्र को गिरफ़्तारी की सूचना', 'మీ అరెస్ట్ గురించి బంధువు లేదా స్నేహితుడికి తెలియజేసే హక్కు'),
        whatThisMeans: t(
          'The officer making the arrest must inform your relative or friend where you are and where you may be moved.',
          'गिरफ़्तार करने वाला अधिकारी आपके परिवार या मित्र को आपका स्थान और संभावित स्थानांतरण बताने के लिए बाध्य है।',
          'అరెస్ట్ చేసే అధికారి మీ బంధువు లేదా స్నేహితుడికి మీరు ఎక్కడ ఉన్నారో, ఎక్కడికి తరలించవచ్చో తెలియజేయాలి.'
        ),
        legalBasis: 'BNSS §48',
        sourceIds: ['bnss']
      },
      {
        id: 'a-right-lawyer',
        title: t('To consult a lawyer and meet an advocate during interrogation', 'वकील से परामर्श और पूछताछ में अधिवक्ता से मुलाकात', 'న్యాయవాదిని సంప్రదించే మరియు విచారణలో కలిసే హక్కు'),
        whatThisMeans: t(
          'You have a right to consult and be defended by a lawyer of your choice — including during interrogation.',
          'आपको अपनी पसंद के वकील से परामर्श और प्रतिनिधित्व का अधिकार है — पूछताछ के दौरान भी।',
          'మీ ఇష్టానుసారం న్యాయవాదిని సంప్రదించే, ప్రాతినిధ్యం పొందే హక్కు ఉంది — విచారణ సమయంలో కూడా.'
        ),
        legalBasis: 'Constitution of India, Article 22(1) · BNSS §38',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'a-right-magistrate',
        title: t('To be produced before a Magistrate within 24 hours', '24 घंटे के भीतर मजिस्ट्रेट के सामने पेश होने का अधिकार', '24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరయ్యే హక్కు'),
        whatThisMeans: t(
          'If you are not released on bail, you must be brought before the nearest Magistrate without unnecessary delay — within 24 hours of arrest (excluding travel time).',
          'यदि आपको ज़मानत नहीं मिलती, तो आपको बिना अनुचित देरी के निकटतम मजिस्ट्रेट के सामने लाया जाना चाहिए — गिरफ़्तारी के 24 घंटे के भीतर (यात्रा समय छोड़कर)।',
          'బెయిల్ లభించకపోతే మిమ్మల్ని ఆలస్యం లేకుండా దగ్గరి మేజిస్ట్రేట్ ముందు తీసుకురావాలి — అరెస్ట్ అయిన 24 గంటల్లో (ప్రయాణ సమయం మినహా).'
        ),
        legalBasis: 'Constitution of India, Article 22(2) · BNSS §57, §58',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'a-right-medical',
        title: t('To medical examination', 'चिकित्सा परीक्षण का अधिकार', 'వైద్య పరీక్ష హక్కు'),
        whatThisMeans: t(
          'An arrested person may be examined by a medical officer on request; police may also have an accused examined by a medical practitioner. Ask for medical help if you have been injured.',
          'गिरफ़्तार व्यक्ति की अनुरोध पर चिकित्सा अधिकारी द्वारा जाँच हो सकती है; पुलिस भी चिकित्सक से जाँच करा सकती है। चोट लगने पर चिकित्सा सहायता माँगें।',
          'అరెస్ట్ అయిన వ్యక్తిని అభ్యర్థన మేరకు వైద్య అధికారి పరీక్షించవచ్చు; పోలీసులు కూడా వైద్యుని ద్వారా పరీక్ష చేయించవచ్చు. గాయమైతే వైద్య సహాయం అడగండి.'
        ),
        legalBasis: 'BNSS §51, §53',
        sourceIds: ['bnss']
      },
      {
        id: 'a-right-restraint',
        title: t('Not to be unnecessarily restrained', 'अनुचित रूप से न रोके जाने का अधिकार', 'అనవసరంగా నిర్బంధించకూడదనే హక్కు'),
        whatThisMeans: t(
          'An arrest must be made according to law, and restraint must not be more than is necessary. Handcuffing is permitted only in the circumstances the law allows.',
          'गिरफ़्तारी कानून के अनुसार होनी चाहिए, और रोकथाम आवश्यकता से अधिक नहीं होनी चाहिए। हथकड़ी केवल कानून द्वारा अनुमत परिस्थितियों में लगाई जा सकती है।',
          'అరెస్ట్ చట్టం ప్రకారం ఉండాలి; అవసరానికి మించి నిర్బంధం ఉండకూడదు. చట్టం అనుమతించే పరిస్థితుల్లోనే సంకెళ్ళు వేయవచ్చు.'
        ),
        legalBasis: 'BNSS §43 (incl. 43(3) handcuffs), §46, §62',
        sourceIds: ['bnss']
      },
      {
        id: 'a-right-bail',
        title: t('To apply for bail', 'ज़मानत के लिए आवेदन का अधिकार', 'బెయిల్ కోసం దరఖాస్తు చేసే హక్కు'),
        whatThisMeans: t(
          'For bailable offences, bail is a matter of right. For non-bailable offences, the court decides based on the law and the facts. A lawyer or legal aid can help you apply.',
          'ज़मानती अपराधों में ज़मानत अधिकार है। गैर-ज़मानती अपराधों में न्यायालय कानून और तथ्यों के आधार पर निर्णय करता है। वकील या कानूनी सहायता आवेदन में मदद कर सकती है।',
          'బెయిల్ ఇవ్వదగిన నేరాల్లో బెయిల్ హక్కు. బెయిల్ ఇవ్వని నేరాల్లో న్యాయస్థానం చట్టం, వాస్తవాల ఆధారంగా నిర్ణయిస్తుంది. దరఖాస్తుకు న్యాయవాది లేదా న్యాయ సహాయం సహాయపడుతుంది.'
        ),
        legalBasis: 'BNSS §478, §480',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'a-do-1',
        text: t('Note the grounds of arrest as stated to you, and whether it is bailable.', 'बताए गए गिरफ़्तारी के कारण और ज़मानती/गैर-ज़मानती स्थिति नोट करें।', 'మీకు చెప్పిన అరెస్ట్ కారణాలు మరియు బెయిల్ పరిస్థితి గమనించండి.'),
        why: t('You are entitled to this information (Art. 22(1); BNSS §47).', 'आप इस जानकारी के हकदार हैं (अनु. 22(1); बीएनएसएस §47)।', 'ఈ సమాచారానికి మీరు అర్హులు (ఆర్టి. 22(1); BNSS §47).')
      },
      {
        id: 'a-do-2',
        text: t('Ask a relative or friend to note your arrest and location.', 'परिवार या मित्र से अपनी गिरफ़्तारी और स्थान नोट कराने को कहें।', 'బంధువు లేదా స్నేహితుడిని మీ అరెస్ట్ మరియు స్థానం గమనించమని అడగండి.'),
        why: t('The police must inform them (BNSS §48) — but a family member can also act quickly for you.', 'पुलिस को सूचित करना अनिवार्य है (बीएनएसएस §48) — परिवार भी तुरंत कार्रवाई कर सकता है।', 'పోలీసులు తెలియజేయాలి (BNSS §48) — కానీ కుటుంబ సభ్యుడు కూడా వెంటనే చర్య తీసుకోవచ్చు.')
      },
      {
        id: 'a-do-3',
        text: t('Ask for a lawyer. Legal aid is free for eligible persons.', 'वकील माँगें। पात्र व्यक्तियों के लिए कानूनी सहायता निःशुल्क है।', 'న్యాయవాదిని అడగండి. అర్హులకు న్యాయ సహాయం ఉచితం.'),
        why: t('You have a right to be defended (Art. 22(1)); NALSA and State Legal Services Authorities provide free aid.', 'आपको प्रतिनिधित्व का अधिकार है (अनु. 22(1)); नालसा और राज्य कानूनी सेवा प्राधिकरण निःशुल्क सहायता देते हैं।', 'మీకు ప్రాతినిధ్య హక్కు ఉంది (ఆర్టి. 22(1)); NALSA మరియు రాష్ట్ర న్యాయ సేవా అథారిటీలు ఉచిత సహాయం అందిస్తాయి.')
      },
      {
        id: 'a-do-4',
        text: t('Do not sign a statement before your lawyer sees it.', 'बिना वकील को दिखाए किसी बयान पर हस्ताक्षर न करें।', 'న్యాయవాదికి చూపించకుండా ప్రకటనపై సంతకం చేయకండి.')
      },
      {
        id: 'a-do-5',
        text: t('Ask for medical help if you have been injured, and get it recorded.', 'चोट लगने पर चिकित्सा सहायता माँगें और उसे दर्ज कराएँ।', 'గాయమైతే వైద్య సహాయం అడిగి నమోదు చేయించుకోండి.'),
        why: t('Medical examination rights exist under BNSS §51 and §53; records also matter if you later complain.', 'बीएनएसएस §51 और §53 के तहत चिकित्सा परीक्षण के अधिकार हैं; रिकॉर्ड बाद की शिकायत में भी काम आते हैं।', 'BNSS §51 మరియు §53 కింద వైద్య పరీక్ష హక్కులు ఉన్నాయి; రికార్డులు తర్వాత ఫిర్యాదుకు కూడా ఉపయోగపడతాయి.')
      }
    ],
    avoid: [
      {
        id: 'a-avoid-1',
        text: t('Do not resist arrest or flee.', 'गिरफ़्तारी का प्रतिरोध न करें, भागें नहीं।', 'అరెస్ట్ను ప్రతిఘటించవద్దు, పారిపోవద్దు.'),
        why: t('Resistance can lead to additional charges and physical harm.', 'प्रतिरोध से अतिरिक्त आरोप और शारीरिक नुकसान हो सकता है।', 'ప్రతిఘటన అదనపు ఆరోపణలకు, శారీరక హానికి దారితీయవచ్చు.')
      },
      {
        id: 'a-avoid-2',
        text: t('Do not argue with or provoke officers.', 'अधिकारियों से बहस या उकसावे में न आएँ।', 'అధికారులతో వాదించవద్దు లేదా రెచ్చగొట్టవద్దు.'),
        why: t('Stay calm; preserve your energy for lawful remedies.', 'शांत रहें; कानूनी उपायों के लिए शक्ति बचाएँ।', 'ప్రశాంతంగా ఉండండి; చట్టపరమైన పరిష్కారాల కోసం శక్తి ఆదా చేయండి.')
      },
      {
        id: 'a-avoid-3',
        text: t('Do not disclose your phone’s password under pressure without legal advice.', 'दबाव में बिना कानूनी सलाह के फोन का पासवर्ड न बताएँ।', 'ఒత్తిడిలో న్యాయ సలహా లేకుండా ఫోన్ పాస్వర్డ్ చెప్పకండి.'),
        why: t('What you reveal can be used in the case; get advice first.', 'आप जो बताते हैं वह मामले में इस्तेमाल हो सकता है; पहले सलाह लें।', 'మీరు చెప్పింది కేసులో ఉపయోగించవచ్చు; ముందుగా సలహా తీసుకోండి.')
      }
    ],
    evidence: [
      {
        id: 'a-ev-1',
        text: t('Note the grounds of arrest as told to you, and whether it is bailable.', 'बताए गए गिरफ़्तारी के कारण और ज़मानती/गैर-ज़मानती स्थिति नोट करें।', 'మీకు చెప్పిన అరెస్ట్ కారణాలు, బెయిల్ పరిస్థితి గమనించండి.'),
        why: t('You are entitled to this information (Art. 22(1); BNSS §47).', 'आप इस जानकारी के हकदार हैं (अनु. 22(1); बीएनएसएस §47)।', 'ఈ సమాచారానికి మీరు అర్హులు (ఆర్టి. 22(1); BNSS §47).')
      },
      {
        id: 'a-ev-2',
        text: t('Note the time and place of arrest, and the officers involved.', 'गिरफ़्तारी का समय, स्थान और शामिल अधिकारियों को नोट करें।', 'అరెస్ట్ సమయం, ప్రదేశం, ప్రమేయం ఉన్న అధికారులు గమనించండి.'),
        why: t('These details matter for the 24-hour rule and any complaint.', '24 घंटे के नियम और शिकायत के लिए ये विवरण महत्वपूर्ण हैं।', '24 గంటల నియమం, ఫిర్యాదుకు ఈ వివరాలు ముఖ్యం.')
      },
      {
        id: 'a-ev-3',
        text: t('Keep any medical record if you were injured.', 'चोट लगने पर चिकित्सा रिकॉर्ड रखें।', 'గాయమైతే వైద్య రికార్డు ఉంచుకోండి.'),
        why: t('Medical records matter for your safety and any later complaint (BNSS §51, §53).', 'चिकित्सा रिकॉर्ड आपकी सुरक्षा और बाद की शिकायत के लिए महत्वपूर्ण हैं (बीएनएसएस §51, §53)।', 'వైద్య రికార్డులు మీ భద్రతకు, తర్వాతి ఫిర్యాదుకు ముఖ్యం (BNSS §51, §53).')
      },
      {
        id: 'a-ev-4',
        text: t('Keep copies of anything you are asked to sign.', 'जो भी हस्ताक्षर करने को कहा जाए उसकी प्रति रखें।', 'సంతకం చేయమన్న దాని కాపీలు ఉంచుకోండి.'),
        why: t('A signed statement may be used later; have your lawyer review it first.', 'हस्ताक्षरित बयान बाद में इस्तेमाल हो सकता है; पहले वकील से दिखाएँ।', 'సంతకం చేసిన ప్రకటన తర్వాత ఉపయోగించవచ్చు; ముందు న్యాయవాదితో చూపించండి.')
      }
    ],
    timeline: [
      {
        id: 'arrest',
        title: t('At the time of arrest', 'गिरफ़्तारी के समय', 'అరెస్ట్ సమయంలో'),
        description: t(
          'What must happen the moment you are arrested.',
          'गिरफ़्तारी के क्षण क्या होना चाहिए।',
          'మిమ్మల్ని అరెస్ట్ చేసిన క్షణం నుండి ఏమి జరగాలి.'
        ),
        points: [
          {
            title: t('Grounds of arrest and right to bail', 'गिरफ़्तारी के कारण और ज़मानत का अधिकार', 'అరెస్ట్ కారణాలు మరియు బెయిల్ హక్కు'),
            detail: t('You must be informed why you are being arrested and whether the offence is bailable.', 'आपको बताना ज़रूरी है कि क्यों गिरफ़्तार किया जा रहा है और क्या अपराध ज़मानती है।', 'మిమ్మల్ని ఎందుకు అరెస్ట్ చేస్తున్నారో, నేరం బెయిల్ ఇవ్వదగినదా అని తెలియజేయాలి.'),
            sourceIds: ['constitution', 'bnss']
          },
          {
            title: t('Arrest according to law', 'कानून के अनुसार गिरफ़्तारी', 'చట్టం ప్రకారం అరెస్ట్'),
            detail: t('Arrest must be made strictly according to the law; restraint must not exceed what is necessary. Handcuffing is permitted only in the circumstances the law allows (BNSS §43(3)).', 'गिरफ़्तारी कानून के अनुसार होनी चाहिए; रोकथाम आवश्यकता से अधिक नहीं। हथकड़ी केवल कानून द्वारा अनुमत परिस्थितियों में (बीएनएसएस §43(3))।', 'అరెస్ట్ చట్టం ప్రకారం ఉండాలి; అవసరానికి మించి నిర్బంధం కూడదు. చట్టం అనుమతించే పరిస్థితుల్లోనే సంకెళ్ళు (BNSS §43(3)).'),
            sourceIds: ['bnss']
          },
          {
            title: t('Relative or friend informed', 'परिवार/मित्र को सूचना', 'బంధువు/స్నేహితుడికి సమాచారం'),
            detail: t('The police must inform your relative or friend about the arrest and your location.', 'पुलिस को आपके परिवार या मित्र को गिरफ़्तारी और स्थान की सूचना देनी होगी।', 'పోలీసులు మీ బంధువు లేదా స్నేహితుడికి అరెస్ట్ మరియు మీ స్థానం గురించి తెలియజేయాలి.'),
            sourceIds: ['bnss']
          }
        ]
      },
      {
        id: 'interrogation',
        title: t('During interrogation', 'पूछताछ के दौरान', 'విచారణ సమయంలో'),
        description: t(
          'Your protections while questions are being asked.',
          'पूछताछ के दौरान आपकी सुरक्षा।',
          'ప్రశ్నలు అడుగుతున్నప్పుడు మీ రక్షణలు.'
        ),
        points: [
          {
            title: t('Meet an advocate during interrogation', 'पूछताछ के दौरान अधिवक्ता से मुलाकात', 'విచారణ సమయంలో న్యాయవాదిని కలవడం'),
            detail: t('You have a right to meet an advocate of your choice during interrogation.', 'पूछताछ के दौरान आपको अपनी पसंद के अधिवक्ता से मिलने का अधिकार है।', 'విచారణ సమయంలో మీ ఇష్టానుసారం న్యాయవాదిని కలిసే హక్కు మీకు ఉంది.'),
            sourceIds: ['bnss', 'constitution']
          },
          {
            title: t('No compulsion to self-incriminate', 'स्वयं दोषी ठहराने के लिए बाध्यता नहीं', 'స్వీయ నేరారోపణకు బలవంతం లేదు'),
            detail: t('You cannot be compelled to be a witness against yourself.', 'आपको अपने विरुद्ध गवाह बनने के लिए बाध्य नहीं किया जा सकता।', 'మీపైనే సాక్షిగా మారమని మిమ్మల్ని బలవంతం చేయలేరు.'),
            sourceIds: ['constitution']
          },
          {
            title: t('Medical examination', 'चिकित्सा परीक्षण', 'వైద్య పరీక్ష'),
            detail: t('Police may have an accused examined by a medical practitioner; an arrested person may also be examined by a medical officer on request.', 'पुलिस चिकित्सक से आरोपी की जाँच करा सकती है; गिरफ़्तार व्यक्ति की अनुरोध पर चिकित्सा अधिकारी से जाँच हो सकती है।', 'పోలీసులు నిందితుడిని వైద్యుని ద్వారా పరీక్షించవచ్చు; అరెస్ట్ అయిన వ్యక్తి అభ్యర్థన మేరకు వైద్య అధికారి పరీక్ష చేయించుకోవచ్చు.'),
            sourceIds: ['bnss']
          }
        ]
      },
      {
        id: 'custody',
        title: t('In police custody', 'पुलिस हिरासत में', 'పోలీస్ కస్టడీలో'),
        description: t(
          'Your rights while held at the police station.',
          'थाने में रखे जाने पर आपके अधिकार।',
          'పోలీస్ స్టేషన్లో ఉన్నప్పుడు మీ హక్కులు.'
        ),
        points: [
          {
            title: t('Taken before a Magistrate without delay', 'बिना देरी मजिस्ट्रेट के सामने पेशी', 'ఆలస్యం లేకుండా మేజిస్ట్రేట్ ముందు హాజరు'),
            detail: t('A person arrested must be taken before the Magistrate or officer in charge of a police station without unnecessary delay.', 'गिरफ़्तार व्यक्ति को बिना अनुचित देरी मजिस्ट्रेट या थाना प्रभारी के सामने लाया जाना चाहिए।', 'అరెస్ట్ అయిన వ్యక్తిని ఆలస్యం లేకుండా మేజిస్ట్రేట్ లేదా పోలీస్ స్టేషన్ ఇన్ఛార్జ్ ముందు తీసుకురావాలి.'),
            sourceIds: ['bnss']
          },
          {
            title: t('No detention beyond 24 hours', '24 घंटे से अधिक हिरासत नहीं', '24 గంటలకు మించి నిర్బంధం లేదు'),
            detail: t('Detention cannot exceed 24 hours (excluding travel time) without a Magistrate’s order.', 'मजिस्ट्रेट के आदेश के बिना हिरासत 24 घंटे (यात्रा समय छोड़कर) से अधिक नहीं हो सकती।', 'మేజిస్ట్రేట్ ఆదేశం లేకుండా నిర్బంధం 24 గంటలు (ప్రయాణ సమయం మినహా) మించకూడదు.'),
            sourceIds: ['bnss', 'constitution']
          },
          {
            title: t('Health and safety', 'स्वास्थ्य और सुरक्षा', 'ఆరోగ్యం మరియు భద్రత'),
            detail: t('The health and safety of a person in custody is protected by law.', 'हिरासत में व्यक्ति के स्वास्थ्य और सुरक्षा की कानूनी सुरक्षा है।', 'నిర్బంధంలో ఉన్న వ్యక్తి ఆరోగ్యం మరియు భద్రతకు చట్టపరమైన రక్షణ ఉంది.'),
            sourceIds: ['bnss']
          }
        ]
      },
      {
        id: 'magistrate',
        title: t('Before the Magistrate', 'मजिस्ट्रेट के समक्ष', 'మేజిస్ట్రేట్ ముందు'),
        description: t(
          'What happens when the case reaches the court.',
          'मामला न्यायालय पहुँचने पर क्या होता है।',
          'కేసు కోర్టుకు చేరినప్పుడు ఏమి జరుగుతుంది.'
        ),
        points: [
          {
            title: t('Bail', 'ज़मानत', 'బెయిల్'),
            detail: t('For bailable offences bail is a right; for non-bailable offences the court decides under the law.', 'ज़मानती अपराधों में ज़मानत अधिकार है; गैर-ज़मानती में न्यायालय कानून के अनुसार निर्णय करता है।', 'బెయిల్ ఇవ్వదగిన నేరాల్లో బెయిల్ హక్కు; ఇవ్వని వాటిలో న్యాయస్థానం చట్టం ప్రకారం నిర్ణయిస్తుంది.'),
            sourceIds: ['bnss']
          },
          {
            title: t('Legal aid', 'कानूनी सहायता', 'న్యాయ సహాయం'),
            detail: t('If you cannot afford a lawyer, you can seek free legal aid from the Legal Services Authority.', 'यदि आप वकील का खर्च नहीं उठा सकते, तो कानूनी सेवा प्राधिकरण से निःशुल्क सहायता ले सकते हैं।', 'న్యాయవాదిని భరించలేకపోతే న్యాయ సేవా అథారిటీ నుండి ఉచిత న్యాయ సహాయం పొందవచ్చు.'),
            sourceIds: ['lsaa', 'nalsa']
          },
          {
            title: t('24-hour limit enforced', '24 घंटे की सीमा लागू', '24 గంటల పరిమితి అమలు'),
            detail: t('If you are produced late without a Magistrate’s order, that is a serious procedural issue your lawyer can raise.', 'यदि मजिस्ट्रेट के आदेश के बिना देर से पेशी हो, तो यह गंभीर प्रक्रियात्मक मुद्दा है जिसे आपका वकील उठा सकता है।', 'మేజిస్ట్రేట్ ఆదేశం లేకుండా ఆలస్యంగా హాజరుపరిస్తే అది మీ న్యాయవాది లేవనెత్తగల తీవ్రమైన ప్రక్రియాగత సమస్య.'),
            sourceIds: ['constitution', 'bnss']
          }
        ]
      }
    ],
    whatHappensNext: [
      { label: t('You are here — arrest', 'आप यहाँ हैं — गिरफ़्तारी', 'మీరు ఇక్కడ ఉన్నారు — అరెస్ట్') },
      { label: t('Police station / custody', 'थाना / हिरासत', 'పోలీస్ స్టేషన్ / కస్టడీ'), note: t('Grounds told · relative informed · lawyer available', 'कारण बताए जाएँ · परिवार को सूचना · वकील उपलब्ध', 'కారణాలు చెప్పబడతాయి · బంధువుకు సమాచారం · న్యాయవాది అందుబాటులో') },
      { label: t('Produced before Magistrate within 24 hours', '24 घंटे में मजिस्ट्रेट के समक्ष पेशी', '24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరు'), note: t('Art. 22(2) · BNSS §57, §58', 'अनु. 22(2) · बीएनएसएस §57, §58', 'ఆర్టి. 22(2) · BNSS §57, §58') },
      { label: t('Bail granted or judicial custody ordered', 'ज़मानत या न्यायिक हिरासत का आदेश', 'బెయిల్ లేదా న్యాయ నిర్బంధ ఆదేశం'), note: t('BNSS §478, §480 · remand §187', 'बीएनएसएस §478, §480 · रिमांड §187', 'BNSS §478, §480 · రిమాండ్ §187') },
      { label: t('Free legal aid throughout', 'पूरे दौरान निःशुल्क कानूनी सहायता', 'అంతటా ఉచిత న్యాయ సహాయం'), note: t('NALSA / State Legal Services Authority', 'नालसा / राज्य कानूनी सेवा प्राधिकरण', 'NALSA / రాష్ట్ర న్యాయ సేవా అథారిటీ') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'state-directory', 'dlsa-directory', 'apslsa'],
    complaintRoutes: [
      {
        id: 'a-cr-1',
        route: t('Senior police officer / Magistrate', 'वरिष्ठ पुलिस अधिकारी / मजिस्ट्रेट', 'సీనియర్ పోలీసు అధికారి / మేజిస్ట్రేట్'),
        whyItMayApply: t('If you believe rights during arrest were violated (e.g., grounds not told, relative not informed, produced late).', 'यदि गिरफ़्तारी के दौरान अधिकारों का उल्लंघन हुआ (जैसे कारण न बताना, परिवार को सूचना न देना, देर से पेशी)।', 'అరెస్ట్ సమయంలో హక్కుల ఉల్లంఘన జరిగిందని భావిస్తే (ఉదా. కారణాలు చెప్పకపోవడం, బంధువుకు తెలియజేయకపోవడం, ఆలస్యంగా హాజరు).'),
        whatToPrepare: t('A written account of what happened, any injury records, and the officers involved.', 'घटना का लिखित विवरण, चोट के रिकॉर्ड और शामिल अधिकारियों का विवरण।', 'జరిగిన దాని వ్రాతపూర్వక వివరణ, గాయాల రికార్డులు, ప్రమేయం ఉన్న అధికారుల వివరాలు.'),
        legalBasis: 'Constitution Article 22 · BNSS §47, §48, §57, §58',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'a-cr-2',
        phone: '14433',
        route: t('NHRC / State Human Rights Commission', 'एनएचआरसी / राज्य मानवाधिकार आयोग', 'NHRC / రాష్ట్ర మానవ హక్కుల కమిషన్'),
        whyItMayApply: t('For serious human-rights violations connected with arrest or custody.', 'गिरफ़्तारी या हिरासत से जुड़े गंभीर मानवाधिकार उल्लंघन के लिए।', 'అరెస్ట్ లేదా నిర్బంధానికి సంబంధించిన తీవ్రమైన మానవ హక్కుల ఉల్లంఘనలకు.'),
        whatToPrepare: t('Details of the incident, witnesses and any evidence — after getting legal advice.', 'घटना का विवरण, गवाह और साक्ष्य — कानूनी सलाह के बाद।', 'సంఘటన వివరాలు, సాక్షులు, ఆధారాలు — న్యాయ సలహా తర్వాత.'),
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      }
    ],
    sourceIds: ['bnss', 'constitution', 'lsaa'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     3. FIR REFUSED
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'FIR_REFUSED',
    slug: 'fir-refused',
    icon: 'fileX',
    title: t('Police refused to register my FIR', 'पुलिस ने मेरी एफआईआर दर्ज करने से मना किया', 'పోలీసులు నా ఎఫ్ఐఆర్ నమోదు చేయడానికి నిరాకరించారు'),
    shortTitle: t('FIR was refused', 'एफआईआर दर्ज नहीं हुई', 'ఎఫ్ఐఆర్ నమోదు కాలేదు'),
    description: t(
      'You gave information about an offence and the police refused to record it, or said it cannot be registered.',
      'आपने किसी अपराध की सूचना दी और पुलिस ने उसे दर्ज करने से मना कर दिया।',
      'మీరు నేరం గురించి సమాచారం ఇచ్చారు, కానీ పోలీసులు నమోదు చేయడానికి నిరాకరించారు.'
    ),
    urgency: 'high',
    summary: t(
      'A refusal to record information about a cognizable offence is not the end of the road. You can approach higher police authorities and, if needed, the Magistrate. Keep a written record of every attempt.',
      'संज्ञेय अपराध की सूचना दर्ज करने से इनकार अंत नहीं है। आप वरिष्ठ पुलिस अधिकारियों और ज़रूरत पड़ने पर मजिस्ट्रेट के पास जा सकते हैं। हर प्रयास का लिखित रिकॉर्ड रखें।',
      'సంజ్ఞేయ నేర సమాచారం నమోదు చేయడానికి నిరాకరించడం చివరి మార్గం కాదు. మీరు ఉన్నత పోలీసు అధికారులను, అవసరమైతే మేజిస్ట్రేట్ను సంప్రదించవచ్చు. ప్రతి ప్రయత్నాన్ని వ్రాతపూర్వకంగా నమోదు చేయండి.'
    ),
    immediateActions: [
      t('Give your information in writing and keep a copy with the date and time.', 'अपनी सूचना लिखित रूप में दें और तारीख़-समय सहित एक प्रति अपने पास रखें।', 'మీ సమాచారాన్ని వ్రాతపూర్వకంగా ఇచ్చి తేదీ, సమయంతో కాపీ దగ్గర ఉంచుకోండి.'),
      t('Note the name and rank of the officer who refused.', 'मना करने वाले अधिकारी का नाम और पद नोट करें।', 'నిరాకరించిన అధికారి పేరు, హోదా గమనించండి.'),
      t('Approach the Superintendent of Police (or higher police authority).', 'पुलिस अधीक्षक (या वरिष्ठ पुलिस अधिकारी) से संपर्क करें।', 'సూపరింటెండెంట్ ఆఫ్ పోలీస్ (లేదా ఉన్నత పోలీసు అధికారి)ను సంప్రదించండి.'),
      t('You may complain to the Magistrate, who can order an investigation.', 'आप मजिस्ट्रेट से शिकायत कर सकते हैं, जो जाँच का आदेश दे सकते हैं।', 'మీరు మేజిస్ట్రేట్కు ఫిర్యాదు చేయవచ్చు; వారు దర్యాప్తు ఆదేశించవచ్చు.'),
      t('Seek legal aid — free help is available for eligible persons.', 'कानूनी सहायता लें — पात्र व्यक्तियों के लिए निःशुल्क सहायता उपलब्ध है।', 'న్యాయ సహాయం పొందండి — అర్హులకు ఉచిత సహాయం అందుబాటులో ఉంది.')
    ],
    rights: [
      {
        id: 'fir-right-record',
        title: t('To have information about a cognizable offence recorded', 'संज्ञेय अपराध की सूचना दर्ज कराने का अधिकार', 'సంజ్ఞేయ నేర సమాచారం నమోదు చేయించుకునే హక్కు'),
        whatThisMeans: t(
          'When you give information about a cognizable offence, the police are required to record it. If they refuse, the law provides remedies rather than leaving you without recourse.',
          'जब आप संज्ञेय अपराध की सूचना देते हैं, तो पुलिस उसे दर्ज करने के लिए बाध्य है। इनकार करने पर कानून उपाय प्रदान करता है।',
          'మీరు సంజ్ఞేయ నేర సమాచారం ఇస్తే పోలీసులు నమోదు చేయాలి. నిరాకరిస్తే చట్టం పరిహారాలు అందిస్తుంది.'
        ),
        legalBasis: 'BNSS §173 · Supreme Court (FIR registration jurisprudence)',
        sourceIds: ['bnss', 'sci']
      },
      {
        id: 'fir-right-copy',
        title: t('To a free copy of the information recorded', 'दर्ज सूचना की निःशुल्क प्रति', 'నమోదైన సమాచారం యొక్క ఉచిత కాపీ'),
        whatThisMeans: t(
          'Once information is recorded, you are entitled to a copy free of cost. This copy is your record of what was registered.',
          'सूचना दर्ज होने पर आपको निःशुल्क प्रति मिलती है। यह प्रति आपका रिकॉर्ड है।',
          'సమాచారం నమోదైన తర్వాత ఉచిత కాపీ మీకు లభిస్తుంది. ఈ కాపీ మీ రికార్డు.'
        ),
        legalBasis: 'BNSS §173(2)',
        sourceIds: ['bnss']
      },
      {
        id: 'fir-right-magistrate',
        title: t('To approach the Magistrate if police do not act', 'पुलिस के निष्क्रिय रहने पर मजिस्ट्रेट से संपर्क का अधिकार', 'పోలీసులు చర్య తీసుకోకపోతే మేజిస్ట్రేట్ను సంప్రదించే హక్కు'),
        whatThisMeans: t(
          'If the police refuse or fail to record your information, you can complain to the Magistrate, who may order an investigation.',
          'यदि पुलिस सूचना दर्ज करने से इनकार करती है, तो आप मजिस्ट्रेट से शिकायत कर सकते हैं, जो जाँच का आदेश दे सकते हैं।',
          'పోలీసులు సమాచారం నమోదు చేయడానికి నిరాకరిస్తే మీరు మేజిస్ట్రేట్కు ఫిర్యాదు చేయవచ్చు; వారు దర్యాప్తు ఆదేశించవచ్చు.'
        ),
        legalBasis: 'BNSS §175(3)',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'fir-do-1',
        text: t('Write down your complaint in your own words before you go.', 'जाने से पहले अपनी शिकायत अपने शब्दों में लिख लें।', 'వెళ్ళే ముందు మీ ఫిర్యాదును మీ మాటల్లో రాసుకోండి.'),
        why: t('A written record with date/time helps at every later step.', 'तारीख़-समय सहित लिखित रिकॉर्ड हर अगले चरण में मदद करता है।', 'తేదీ/సమయంతో వ్రాతపూర్వక రికార్డు ప్రతి తదుపరి దశలో ఉపయోగపడుతుంది.')
      },
      {
        id: 'fir-do-2',
        text: t('Visit the station, give your information, and ask for it to be recorded.', 'थाने जाएँ, सूचना दें और दर्ज करने को कहें।', 'స్టేషన్ వెళ్లి సమాచారం ఇచ్చి నమోదు చేయమని అడగండి.'),
        why: t('Recording is the legal starting point (BNSS §173).', 'दर्ज करना कानूनी शुरुआत है (बीएनएसएस §173)।', 'నమోదు చేయడం చట్టపరమైన ప్రారంభం (BNSS §173).')
      },
      {
        id: 'fir-do-3',
        text: t('If refused, approach the Superintendent of Police or higher authority with your written complaint.', 'इनकार पर अपनी लिखित शिकायत लेकर पुलिस अधीक्षक या वरिष्ठ अधिकारी के पास जाएँ।', 'నిరాకరిస్తే మీ వ్రాతపూర్వక ఫిర్యాదుతో సూపరింటెండెంట్ లేదా ఉన్నత అధికారిని సంప్రదించండి.'),
        why: t('Supervisory officers can direct registration or investigation.', 'पर्यवेक्षी अधिकारी दर्ज या जाँच का निर्देश दे सकते हैं।', 'పర్యవేక్షక అధికారులు నమోదు లేదా దర్యాప్తును ఆదేశించగలరు.')
      },
      {
        id: 'fir-do-4',
        text: t('If still refused, complain to the Magistrate (BNSS §175(3)).', 'फिर भी इनकार हो तो मजिस्ट्रेट से शिकायत करें (बीएनएसएस §175(3))।', 'ఇంకా నిరాకరిస్తే మేజిస్ట్రేట్కు ఫిర్యాదు చేయండి (BNSS §175(3)).'),
        why: t('The Magistrate may order an investigation into your information.', 'मजिस्ट्रेट आपकी सूचना पर जाँच का आदेश दे सकते हैं।', 'మేజిస్ట్రేట్ మీ సమాచారంపై దర్యాప్తు ఆదేశించవచ్చు.')
      },
      {
        id: 'fir-do-5',
        text: t('Contact a legal aid clinic or lawyer for help drafting your complaint.', 'शिकायत लिखने में मदद के लिए कानूनी सहायता क्लिनिक या वकील से संपर्क करें।', 'ఫిర్యాదు రాయడంలో సహాయానికి న్యాయ సహాయ కేంద్రం లేదా న్యాయవాదిని సంప్రదించండి.'),
        why: t('Free legal aid is available to eligible persons under the Legal Services Authorities Act.', 'कानूनी सेवा प्राधिकरण अधिनियम के तहत पात्र व्यक्तियों को निःशुल्क सहायता मिलती है।', 'న్యాయ సేవా అథారిటీల చట్టం కింద అర్హులకు ఉచిత న్యాయ సహాయం లభిస్తుంది.')
      }
    ],
    avoid: [
      {
        id: 'fir-avoid-1',
        text: t('Do not give up after one refusal.', 'एक इनकार के बाद हार न मानें।', 'ఒక్క నిరాకరణతో వదులుకోకండి.'),
        why: t('The law gives you higher authorities and the Magistrate as remedies.', 'कानून आपको वरिष्ठ अधिकारियों और मजिस्ट्रेट का उपाय देता है।', 'చట్టం మీకు ఉన్నత అధికారులు, మేజిస్ట్రేట్ పరిహారాలను అందిస్తుంది.')
      },
      {
        id: 'fir-avoid-2',
        text: t('Do not file a false or exaggerated complaint.', 'झूठी या बढ़ा-चढ़ाकर शिकायत न करें।', 'తప్పుడు లేదా అతిశయోక్తి ఫిర్యాదు చేయకండి.'),
        why: t('Giving false information can itself create legal trouble.', 'झूठी सूचना स्वयं कानूनी परेशानी खड़ी कर सकती है।', 'తప్పుడు సమాచారం స్వయంగా చట్టపరమైన ఇబ్బంది కలిగించవచ్చు.')
      },
      {
        id: 'fir-avoid-3',
        text: t('Do not confront or argue aggressively at the station.', 'थाने में आक्रामक बहस न करें।', 'స్టేషన్లో దూకుడుగా వాదించకండి.'),
        why: t('A calm written record protects you better than a confrontation.', 'शांत लिखित रिकॉर्ड टकराव से बेहतर सुरक्षा देता है।', 'ప్రశాంతమైన వ్రాతపూర్వక రికార్డు ఘర్షణ కంటే మిమ్మల్ని బాగా కాపాడుతుంది.')
      }
    ],
    evidence: [
      {
        id: 'fir-ev-1',
        text: t('Keep a dated copy of your written complaint.', 'अपनी शिकायत की तारीख़युक्त प्रति रखें।', 'మీ ఫిర్యాదు తేదీతో కూడిన కాపీ ఉంచుకోండి.'),
        why: t('A written record with date/time helps at every later step.', 'तारीख़-समय सहित लिखित रिकॉर्ड हर अगले चरण में मदद करता है।', 'తేదీ/సమయంతో వ్రాతపూర్వక రికార్డు ప్రతి తదుపరి దశలో ఉపయోగపడుతుంది.')
      },
      {
        id: 'fir-ev-2',
        text: t('Note the name and rank of the officer who refused, and the date and time.', 'इनकार करने वाले अधिकारी का नाम, पद और तारीख़-समय नोट करें।', 'నిరాకరించిన అధికారి పేరు, హోదా, తేదీ-సమయం గమనించండి.'),
        why: t('It identifies the refusal clearly for the Superintendent of Police and the Magistrate.', 'यह पुलिस अधीक्षक और मजिस्ट्रेट के लिए इनकार स्पष्ट करता है।', 'సూపరింటెండెంట్, మేజిస్ట్రేట్కు నిరాకరణను స్పష్టం చేస్తుంది.')
      },
      {
        id: 'fir-ev-3',
        text: t('Keep copies of everything you submit to higher authorities and the Magistrate.', 'वरिष्ठ अधिकारियों और मजिस्ट्रेट को दी गई हर चीज़ की प्रति रखें।', 'పై అధికారులకు, మేజిస్ట్రేట్కు సమర్పించిన ప్రతిదాని కాపీలు ఉంచుకోండి.'),
        why: t('Your trail of attempts shows the matter was pursued in order.', 'आपके प्रयासों का क्रम दिखाता है कि मामला क्रमबद्ध रूप से उठाया गया।', 'మీ ప్రయత్నాల క్రమం విషయాన్ని క్రమబద్ధంగా వెంబడించారని చూపుతుంది.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — information refused', 'आप यहाँ हैं — सूचना दर्ज नहीं', 'మీరు ఇక్కడ ఉన్నారు — సమాచారం నమోదు కాలేదు') },
      { label: t('Superintendent of Police / higher authority', 'पुलिस अधीक्षक / वरिष्ठ अधिकारी', 'సూపరింటెండెంట్ / ఉన్నత అధికారి') },
      { label: t('Complaint to Magistrate (BNSS §175(3))', 'मजिस्ट्रेट से शिकायत (बीएनएसएस §175(3))', 'మేజిస్ట్రేట్కు ఫిర్యాదు (BNSS §175(3))'), note: t('Magistrate may order investigation', 'मजिस्ट्रेट जाँच का आदेश दे सकते हैं', 'మేజిస్ట్రేట్ దర్యాప్తు ఆదేశించవచ్చు'), linkTo: 'i-want-to-complain' },
      { label: t('Investigation proceeds (BNSS §176)', 'जाँच आगे बढ़ती है (बीएनएसएस §176)', 'దర్యాప్తు కొనసాగుతుంది (BNSS §176)') },
      { label: t('Legal aid while you pursue this', 'इस दौरान कानूनी सहायता', 'ఈ ప్రక్రియలో న్యాయ సహాయం'), note: t('NALSA / Legal Services Authorities', 'नालसा / कानूनी सेवा प्राधिकरण', 'NALSA / న్యాయ సేవా అథారిటీలు') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'state-directory', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'fir-cr-1',
        route: t('Superintendent of Police (written complaint)', 'पुलिस अधीक्षक (लिखित शिकायत)', 'సూపరింటెండెంట్ ఆఫ్ పోలీస్ (వ్రాతపూర్వక ఫిర్యాదు)'),
        whyItMayApply: t('First escalation when the station refuses to record your information.', 'थाने द्वारा सूचना दर्ज करने से इनकार पर पहला कदम।', 'స్టేషన్ నమోదు చేయడానికి నిరాకరించినప్పుడు మొదటి అడుగు.'),
        whatToPrepare: t('Copy of your complaint, date/time of the refusal, officer’s name/rank.', 'शिकायत की प्रति, इनकार की तारीख़-समय, अधिकारी का नाम/पद।', 'మీ ఫిర్యాదు కాపీ, నిరాకరణ తేదీ/సమయం, అధికారి పేరు/హోదా.'),
        legalBasis: 'BNSS §173, §175(3)',
        sourceIds: ['bnss']
      },
      {
        id: 'fir-cr-2',
        route: t('Complaint to the Magistrate', 'मजिस्ट्रेट से शिकायत', 'మేజిస్ట్రేట్కు ఫిర్యాదు'),
        whyItMayApply: t('When the police refuse or fail to act on your information.', 'जब पुलिस आपकी सूचना पर कार्रवाई करने से इनकार करे या न करे।', 'పోలీసులు మీ సమాచారంపై చర్య తీసుకోవడానికి నిరాకరిస్తే.'),
        whatToPrepare: t('Your information in writing, the record of refusal, and supporting documents.', 'आपकी सूचना लिखित में, इनकार का रिकॉर्ड और सहायक दस्तावेज़।', 'మీ సమాచారం వ్రాతపూర్వకంగా, నిరాకరణ రికార్డు, సహాయక పత్రాలు.'),
        legalBasis: 'BNSS §175(3) — Magistrate may order investigation',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss', 'sci', 'lsaa'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     4. SEARCH
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'SEARCH',
    slug: 'police-want-to-search',
    icon: 'search',
    title: t('Police want to search me or my property', 'पुलिस मेरी या मेरी संपत्ति की तलाशी लेना चाहती है', 'పోలీసులు నన్ను లేదా నా ఆస్తిని సోదా చేయాలనుకుంటున్నారు'),
    shortTitle: t('Police want to search me', 'पुलिस तलाशी लेना चाहती है', 'పోలీసులు సోదా చేయాలనుకుంటున్నారు'),
    description: t(
      'Police are searching your person, your vehicle, or your premises — with or without a warrant.',
      'पुलिस आपके व्यक्ति, वाहन या परिसर की तलाशी ले रही है — वारंट के साथ या बिना।',
      'పోలీసులు మీ వ్యక్తి, వాహనం లేదా ఆవరణను సోదా చేస్తున్నారు — వారెంట్తో లేదా లేకుండా.'
    ),
    urgency: 'medium',
    summary: t(
      'Search powers and safeguards depend on the circumstances, the type of search, and the law. You generally have the right to witnesses being present, to a written list of what is seized, and to know the basis of the search.',
      'तलाशी की शक्तियाँ और सुरक्षा परिस्थितियों, तलाशी के प्रकार और कानून पर निर्भर करती हैं। आम तौर पर आपको गवाहों की उपस्थिति, ज़ब्त वस्तुओं की लिखित सूची और तलाशी के आधार जानने का अधिकार है।',
      'సోదా అధికారాలు, రక్షణలు పరిస్థితులు, సోదా రకం, చట్టంపై ఆధారపడతాయి. సాధారణంగా సాక్షుల సమక్షం, జప్తు చేసిన వస్తువుల జాబితా, సోదా ఆధారం తెలుసుకునే హక్కు మీకు ఉంది.'
    ),
    immediateActions: [
      t('Stay calm. Do not physically obstruct the search.', 'शांत रहें। तलाशी में शारीरिक बाधा न डालें।', 'ప్రశాంతంగా ఉండండి. సోదాకు శారీరకంగా అడ్డుకోకండి.'),
      t('Ask the officer’s name/rank and on what authority the search is being conducted.', 'अधिकारी का नाम/पद और तलाशी का आधार पूछें।', 'అధికారి పేరు/హోదా మరియు సోదా ఆధారం అడగండి.'),
      t('Ask for a copy of the warrant if one is being used.', 'वारंट हो तो उसकी प्रति माँगें।', 'వారెంట్ ఉంటే కాపీ అడగండి.'),
      t('Watch and note what is searched and what is taken.', 'ध्यान दें और नोट करें कि क्या तलाशा गया और क्या लिया गया।', 'ఏమి సోదా చేశారో, ఏమి తీసుకున్నారో గమనించి నోట్ చేసుకోండి.'),
      t('Ask for the list of things seized and a copy of the search record.', 'ज़ब्त वस्तुओं की सूची और तलाशी रिकॉर्ड की प्रति माँगें।', 'జప్తు చేసిన వస్తువుల జాబితా మరియు సోదా రికార్డు కాపీ అడగండి.')
    ],
    rights: [
      {
        id: 's-right-basis',
        title: t('To know the basis of the search', 'तलाशी का आधार जानने का अधिकार', 'సోదా ఆధారం తెలుసుకునే హక్కు'),
        whatThisMeans: t(
          'A search may be conducted under a warrant issued by a Magistrate in certain circumstances, or under specific police powers during investigation. Which applies depends on the situation — there is no single rule for every search.',
          'तलाशी कुछ परिस्थितियों में मजिस्ट्रेट द्वारा जारी वारंट से, या जाँच के दौरान विशिष्ट पुलिस शक्तियों से हो सकती है। हर तलाशी का एक ही नियम नहीं है।',
          'సోదా కొన్ని పరిస్థితుల్లో మేజిస్ట్రేట్ జారీ చేసిన వారెంట్తో లేదా దర్యాప్తులో ప్రత్యేక పోలీసు అధికారాలతో జరగవచ్చు. ప్రతి సోదాకు ఒకే నియమం లేదు.'
        ),
        legalBasis: 'BNSS §96 (search warrant), §185 (search by police officer during investigation)',
        sourceIds: ['bnss']
      },
      {
        id: 's-right-witnesses',
        title: t('To have witnesses present and a list of seized things', 'गवाहों की उपस्थिति और ज़ब्त वस्तुओं की सूची', 'సాక్షుల సమక్షం మరియు జప్తు వస్తువుల జాబితా'),
        whatThisMeans: t(
          'For premises searches, the person in charge of the place must allow the search, and the law requires witnesses to the search and a list of things seized.',
          'परिसर की तलाशी में प्रभारी व्यक्ति को तलाशी देनी होती है, और कानून गवाहों और ज़ब्त वस्तुओं की सूची अनिवार्य करता है।',
          'ఆవరణ సోదాలో బాధ్యతగల వ్యక్తి అనుమతించాలి; చట్టం సాక్షులను మరియు జప్తు వస్తువుల జాబితాను తప్పనిసరి చేస్తుంది.'
        ),
        legalBasis: 'BNSS §103',
        sourceIds: ['bnss']
      },
      {
        id: 's-right-av',
        title: t('To audio-video recording of the search and seizure', 'तलाशी और ज़ब्ती की ऑडियो-वीडियो रिकॉर्डिंग', 'సోదా మరియు జప్తు యొక్క ఆడియో-వీడియో రికార్డింగ్'),
        whatThisMeans: t(
          'BNSS provides for search and seizure to be recorded through audio-video electronic means in the manner provided by law.',
          'बीएनएसएस कानून द्वारा निर्धारित तरीके से तलाशी और ज़ब्ती की ऑडियो-वीडियो रिकॉर्डिंग की व्यवस्था करता है।',
          'BNSS చట్టం నిర్దేశించిన విధంగా సోదా మరియు జప్తును ఆడియో-వీడియో ఎలక్ట్రానిక్ మార్గాల్లో రికార్డ్ చేయడానికి అనుమతిస్తుంది.'
        ),
        legalBasis: 'BNSS §105',
        sourceIds: ['bnss']
      },
      {
        id: 's-right-person',
        title: t('Protections when a person is searched', 'व्यक्ति की तलाशी में सुरक्षा', 'వ్యక్తిని సోదా చేసేటప్పుడు రక్షణలు'),
        whatThisMeans: t(
          'An arrested person may be searched under BNSS §49. Where a woman has to be searched, the search must be made by another woman with strict regard to decency.',
          'गिरफ़्तार व्यक्ति की तलाशी बीएनएसएस §49 के तहत हो सकती है। महिला की तलाशी केवल किसी अन्य महिला द्वारा, पूर्ण शालीनता के साथ की जाएगी।',
          'అరెస్ట్ అయిన వ్యక్తిని BNSS §49 కింద సోదా చేయవచ్చు. స్త్రీని సోదా చేయాల్సి వస్తే మరో స్త్రీ ద్వారా, పూర్తి మర్యాదతో చేయాలి.'
        ),
        legalBasis: 'BNSS §49, §49(2)',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 's-do-1',
        text: t('Ask what the search is for and on what authority.', 'पूछें कि तलाशी किसलिए और किस आधार पर हो रही है।', 'సోదా దేనికోసం, ఏ ఆధారంపై జరుగుతోందో అడగండి.'),
        why: t('The answer tells you which legal framework applies.', 'उत्तर से पता चलता है कि कौन सा कानूनी ढाँचा लागू है।', 'సమాధానం ఏ చట్టపరమైన ఫ్రేమ్వర్క్ వర్తిస్తుందో తెలియజేస్తుంది.')
      },
      {
        id: 's-do-2',
        text: t('If a warrant is shown, note its details.', 'वारंट दिखाया जाए तो उसका विवरण नोट करें।', 'వారెంట్ చూపిస్తే దాని వివరాలు గమనించండి.'),
        why: t('The warrant shows the authority and scope of the search.', 'वारंट तलाशी का अधिकार और दायरा दिखाता है।', 'వారెంట్ సోదా అధికారం, పరిధిని చూపుతుంది.')
      },
      {
        id: 's-do-3',
        text: t('Ask for the list of things seized and a copy of the search record.', 'ज़ब्त वस्तुओं की सूची और तलाशी रिकॉर्ड की प्रति माँगें।', 'జప్తు వస్తువుల జాబితా మరియు సోదా రికార్డు కాపీ అడగండి.'),
        why: t('This list is essential if you later need to reclaim property (see the seized-property guide).', 'बाद में संपत्ति वापस लेने के लिए यह सूची आवश्यक है (ज़ब्त संपत्ति गाइड देखें)।', 'తర్వాత ఆస్తి తిరిగి పొందాలంటే ఈ జాబితా అవసరం (జప్తు ఆస్తి గైడ్ చూడండి).')
      },
      {
        id: 's-do-4',
        text: t('Stay calm and note what happens, if you can do so safely.', 'शांत रहें और सुरक्षित रूप से जो हो रहा है उसे नोट करें।', 'ప్రశాంతంగా ఉండి, సురక్షితంగా ఉంటే జరుగుతున్నది గమనించండి.')
      }
    ],
    avoid: [
      {
        id: 's-avoid-1',
        text: t('Do not physically obstruct the search.', 'तलाशी में शारीरिक बाधा न डालें।', 'సోదాకు శారీరకంగా అడ్డుకోకండి.'),
        why: t('Obstruction can itself lead to legal trouble; your remedies come after, through records and complaints.', 'बाधा स्वयं कानूनी परेशानी ला सकती है; उपाय रिकॉर्ड और शिकायत से बाद में आते हैं।', 'అడ్డుకోవడం స్వయంగా ఇబ్బంది తెస్తుంది; పరిహారాలు రికార్డులు, ఫిర్యాదుల ద్వారా తర్వాత వస్తాయి.')
      },
      {
        id: 's-avoid-2',
        text: t('Do not assume every search without a warrant is unlawful.', 'बिना वारंट की हर तलाशी अवैध मानने की गलती न करें।', 'వారెంట్ లేని ప్రతి సోదా చట్టవిరుద్ధమని భావించకండి.'),
        why: t('The law allows certain searches without a warrant in specific circumstances (e.g., BNSS §185).', 'कानून कुछ परिस्थितियों में बिना वारंट तलाशी की अनुमति देता है (जैसे बीएनएसएस §185)।', 'చట్టం కొన్ని పరిస్థితుల్లో వారెంట్ లేకుండా సోదాకు అనుమతిస్తుంది (ఉదా. BNSS §185).')
      },
      {
        id: 's-avoid-3',
        text: t('Do not confront officers during the search.', 'तलाशी के दौरान अधिकारियों से टकराव न करें।', 'సోదా సమయంలో అధికారులతో ఘర్షణకు దిగకండి.'),
        why: t('Record the facts calmly; legal challenges are handled through proper channels.', 'तथ्य शांति से दर्ज करें; कानूनी चुनौती सही माध्यम से होती है।', 'వాస్తవాలను ప్రశాంతంగా నమోదు చేయండి; చట్టపరమైన సవాల్ సరైన మార్గాల ద్వారా జరుగుతుంది.')
      }
    ],
    evidence: [
      {
        id: 's-ev-1',
        text: t('Note the warrant details if one is shown — who issued it, date and scope.', 'वारंट दिखाया जाए तो उसका विवरण नोट करें — किसने जारी किया, तारीख़ और दायरा।', 'వారెంట్ చూపిస్తే వివరాలు గమనించండి — ఎవరు జారీ చేశారు, తేదీ, పరిధి.'),
        why: t('The warrant shows the authority and scope of the search.', 'वारंट तलाशी का अधिकार और दायरा दिखाता है।', 'వారెంట్ సోదా అధికారం, పరిధిని చూపుతుంది.')
      },
      {
        id: 's-ev-2',
        text: t('Ask for the list of things seized and a copy of the search record.', 'ज़ब्त वस्तुओं की सूची और तलाशी रिकॉर्ड की प्रति माँगें।', 'జప్తు వస్తువుల జాబితా, సోదా రికార్డు కాపీ అడగండి.'),
        why: t('This list is essential if you later need to reclaim property.', 'बाद में संपत्ति वापस लेने के लिए यह सूची आवश्यक है।', 'తర్వాత ఆస్తి తిరిగి పొందాలంటే ఈ జాబితా అవసరం.')
      },
      {
        id: 's-ev-3',
        text: t('Note the date, time, place and officers involved.', 'तारीख़, समय, स्थान और शामिल अधिकारियों को नोट करें।', 'తేదీ, సమయం, ప్రదేశం, ప్రమేయం ఉన్న అధికారులు గమనించండి.'),
        why: t('The basic facts you need if you later complain about the search.', 'बाद में तलाशी की शिकायत के लिए ये मूल तथ्य चाहिए।', 'తర్వాత సోదాపై ఫిర్యాదుకు ఈ ప్రాథమిక వాస్తవాలు అవసరం.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — search', 'आप यहाँ हैं — तलाशी', 'మీరు ఇక్కడ ఉన్నారు — సోదా') },
      { label: t('Search conducted (warrant or legal power)', 'तलाशी (वारंट या कानूनी शक्ति से)', 'సోదా (వారెంట్ లేదా చట్టపరమైన అధికారంతో)'), note: t('BNSS §96, §185', 'बीएनएसएस §96, §185', 'BNSS §96, §185') },
      { label: t('List of seized items prepared', 'ज़ब्त वस्तुओं की सूची', 'జప్తు వస్తువుల జాబితా'), note: t('BNSS §103 · recording §105', 'बीएनएसएस §103 · रिकॉर्डिंग §105', 'BNSS §103 · రికార్డింగ్ §105') },
      { label: t('If property taken — see the seized-property guide', 'संपत्ति ली गई — ज़ब्त संपत्ति गाइड देखें', 'ఆస్తి తీసుకుంటే — జప్తు ఆస్తి గైడ్ చూడండి'), note: t('BNSS §106, §503', 'बीएनएसएस §106, §503', 'BNSS §106, §503'), linkTo: 'property-seized' },
      { label: t('Legal remedy if the search was unlawful', 'अवैध तलाशी पर कानूनी उपाय', 'చట్టవిరుద్ధ సోదాకు చట్టపరమైన పరిహారం'), note: t('Consult a lawyer or Legal Services Authority', 'वकील या कानूनी सेवा प्राधिकरण से परामर्श', 'న్యాయవాది లేదా న్యాయ సేవా అథారిటీని సంప్రదించండి') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 's-cr-1',
        route: t('Senior police officer', 'वरिष्ठ पुलिस अधिकारी', 'సీనియర్ పోలీసు అధికారి'),
        whyItMayApply: t('If the search was conducted improperly or without lawful basis.', 'यदि तलाशी अनुचित तरीके से या बिना कानूनी आधार हुई।', 'సోదా సరిగా లేకుండా లేదా చట్టబద్ధమైన ఆధారం లేకుండా జరిగితే.'),
        whatToPrepare: t('Date, time, place, officers, warrant details (if any), and the list of items.', 'तारीख़, समय, स्थान, अधिकारी, वारंट विवरण और वस्तुओं की सूची।', 'తేదీ, సమయం, ప్రదేశం, అధికారులు, వారెంట్ వివరాలు, వస్తువుల జాబితా.')
      }
    ],
    sourceIds: ['bnss'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     5. PROPERTY SEIZED
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'PROPERTY_SEIZED',
    slug: 'property-seized',
    icon: 'archive',
    title: t('Police seized my property', 'पुलिस ने मेरी संपत्ति ज़ब्त की', 'పోలీసులు నా ఆస్తిని జప్తు చేశారు'),
    shortTitle: t('Property was seized', 'संपत्ति ज़ब्त हुई', 'ఆస్తి జప్తు అయింది'),
    description: t(
      'Police took your phone, vehicle, money, documents, or other belongings — during a search, an arrest, or in the course of an investigation.',
      'पुलिस ने आपका फोन, वाहन, पैसा, दस्तावेज़ या अन्य सामान लिया — तलाशी, गिरफ़्तारी या जाँच के दौरान।',
      'పోలీసులు మీ ఫోన్, వాహనం, డబ్బు, పత్రాలు లేదా ఇతర వస్తువులు తీసుకున్నారు — సోదా, అరెస్ట్ లేదా దర్యాప్తు సమయంలో.'
    ),
    urgency: 'medium',
    summary: t(
      'Keep a clear record of exactly what was taken and ask for the seizure documentation. Seized property must be handled according to law, and you can seek its return through the proper procedure — without confrontation.',
      'क्या-क्या लिया गया इसका स्पष्ट रिकॉर्ड रखें और ज़ब्ती दस्तावेज़ माँगें। ज़ब्त संपत्ति का कानूनी प्रबंधन होता है, और आप बिना टकराव सही प्रक्रिया से वापसी माँग सकते हैं।',
      'ఏమి తీసుకున్నారో స్పష్టమైన రికార్డు ఉంచండి, జప్తు పత్రాలు అడగండి. జప్తు ఆస్తి చట్టం ప్రకారం నిర్వహించబడుతుంది; ఘర్షణ లేకుండా సరైన ప్రక్రియ ద్వారా తిరిగి పొందవచ్చు.'
    ),
    immediateActions: [
      t('Record what was taken: items, quantity, condition, and where.', 'क्या लिया गया: वस्तुएँ, मात्रा, स्थिति और स्थान नोट करें।', 'ఏమి తీసుకున్నారు: వస్తువులు, పరిమాణం, పరిస్థితి, ప్రదేశం గమనించండి.'),
      t('Ask for the seizure list / memo and a copy.', 'ज़ब्ती सूची/मेमो और उसकी प्रति माँगें।', 'జప్తు జాబితా/మెమో మరియు కాపీ అడగండి.'),
      t('Ask on what legal basis the seizure is being made.', 'पूछें कि ज़ब्ती किस कानूनी आधार पर की जा रही है।', 'జప్తు ఏ చట్టపరమైన ఆధారంపై జరుగుతోందో అడగండి.'),
      t('Preserve receipts, bills, and proof of ownership.', 'रसीदें, बिल और स्वामित्व के प्रमाण सुरक्षित रखें।', 'రసీదులు, బిల్లులు, యాజమాన్య ఆధారాలు భద్రపరచండి.'),
      t('If the property is essential (e.g., vehicle for work), ask about interim custody.', 'यदि संपत्ति आवश्यक है (जैसे काम का वाहन), तो अंतरिम अभिरक्षा के बारे में पूछें।', 'ఆస్తి అవసరమైతే (ఉదా. పని వాహనం), ఇంటరిం కస్టడీ గురించి అడగండి.'),
      t('Seek legal aid if you need help.', 'ज़रूरत पड़ने पर कानूनी सहायता लें।', 'అవసరమైతే న్యాయ సహాయం పొందండి.')
    ],
    rights: [
      {
        id: 'p-right-legalbasis',
        title: t('Seizure only under law', 'केवल कानून के तहत ज़ब्ती', 'చట్టం ప్రకారం మాత్రమే జప్తు'),
        whatThisMeans: t(
          'Police may seize property in the circumstances and manner provided by law — for example, property connected to an investigation may be seized and reported to the Magistrate.',
          'पुलिस कानून द्वारा निर्धारित परिस्थितियों और तरीके से ही संपत्ति ज़ब्त कर सकती है — जैसे जाँच से जुड़ी संपत्ति ज़ब्त कर मजिस्ट्रेट को सूचित की जा सकती है।',
          'చట్టం నిర్దేశించిన పరిస్థితులు, పద్ధతిలోనే పోలీసులు ఆస్తి జప్తు చేయగలరు — ఉదా. దర్యాప్తుకు సంబంధించిన ఆస్తిని జప్తు చేసి మేజిస్ట్రేట్కు నివేదించవచ్చు.'
        ),
        legalBasis: 'BNSS §106, §503',
        sourceIds: ['bnss']
      },
      {
        id: 'p-right-record',
        title: t('To a record of the seizure', 'ज़ब्ती के रिकॉर्ड का अधिकार', 'జప్తు రికార్డు హక్కు'),
        whatThisMeans: t(
          'Searches and seizures may be recorded through audio-video electronic means, and a list of things seized is part of proper procedure.',
          'तलाशी और ज़ब्ती की ऑडियो-वीडियो रिकॉर्डिंग हो सकती है, और ज़ब्त वस्तुओं की सूची सही प्रक्रिया का हिस्सा है।',
          'సోదా, జప్తు ఆడియో-వీడియో రికార్డ్ కావచ్చు; జప్తు వస్తువుల జాబితా సరైన ప్రక్రియలో భాగం.'
        ),
        legalBasis: 'BNSS §103, §105',
        sourceIds: ['bnss']
      },
      {
        id: 'p-right-return',
        title: t('To seek return or interim custody through the proper procedure', 'सही प्रक्रिया से वापसी या अंतरिम अभिरक्षा माँगने का अधिकार', 'సరైన ప్రక్రియ ద్వారా తిరిగి పొందే లేదా ఇంటరిం కస్టడీ హక్కు'),
        whatThisMeans: t(
          'The court may order custody and disposal of property pending trial. If the property was seized in an investigation, the police must follow the procedure of reporting it to the Magistrate.',
          'न्यायालय मुकदमे तक संपत्ति की अभिरक्षा और निपटान का आदेश दे सकता है। जाँच में ज़ब्त संपत्ति की सूचना मजिस्ट्रेट को दी जाती है।',
          'విచారణ వరకు ఆస్తి కస్టడీ, నిర్వహణను న్యాయస్థానం ఆదేశించవచ్చు. దర్యాప్తులో జప్తు చేసిన ఆస్తిని మేజిస్ట్రేట్కు నివేదించాలి.'
        ),
        legalBasis: 'BNSS §497, §503',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'p-do-1',
        text: t('Write down everything taken, with details, while it is fresh.', 'सब कुछ विस्तार से लिख लें, जबकि याद ताज़ा है।', 'గుర్తుండగానే తీసుకున్న ప్రతిదీ వివరంగా రాయండి.'),
        why: t('Your own record protects you if the official list is later incomplete.', 'आधिकारिक सूची अधूरी हो तो आपका रिकॉर्ड सुरक्षा देता है।', 'అధికారిక జాబితా తర్వాత అసంపూర్ణంగా ఉంటే మీ రికార్డు కాపాడుతుంది.')
      },
      {
        id: 'p-do-2',
        text: t('Ask for the seizure memo and keep copies of your documents.', 'ज़ब्ती मेमो माँगें और अपने दस्तावेज़ों की प्रतियाँ रखें।', 'జప్తు మెమో అడగండి, మీ పత్రాల కాపీలు ఉంచుకోండి.'),
        why: t('Documentation is what you will need to claim the property later.', 'संपत्ति वापस लेने के लिए दस्तावेज़ ही काम आएँगे।', 'ఆస్తి తిరిగి పొందడానికి పత్రాలే అవసరం.')
      },
      {
        id: 'p-do-3',
        text: t('Ask the investigating officer about the procedure to claim the property.', 'संपत्ति वापसी की प्रक्रिया जाँच अधिकारी से पूछें।', 'ఆస్తి పొందే ప్రక్రియ గురించి దర్యాప్తు అధికారిని అడగండి.'),
        why: t('The officer or the court can tell you the correct channel.', 'अधिकारी या न्यायालय सही माध्यम बता सकते हैं।', 'అధికారి లేదా కోర్టు సరైన మార్గం చెబుతారు.')
      },
      {
        id: 'p-do-4',
        text: t('If the property is essential for work or livelihood, mention that when applying for interim custody.', 'यदि संपत्ति काम/आजीविका के लिए आवश्यक है, तो अंतरिम अभिरक्षा आवेदन में बताएँ।', 'ఆస్తి పని/జీవనోపాధికి అవసరమైతే ఇంటరిం కస్టడీ దరఖాస్తులో చెప్పండి.')
      }
    ],
    avoid: [
      {
        id: 'p-avoid-1',
        text: t('Do not confront the police or try to physically take the property back.', 'पुलिस से टकराव न करें और संपत्ति वापस लेने की कोशिश न करें।', 'పోలీసులతో ఘర్షణకు దిగకండి, ఆస్తిని బలవంతంగా తీసుకోకండి.'),
        why: t('The proper procedure protects you; confrontation creates new risks.', 'सही प्रक्रिया आपकी रक्षा करती है; टकराव नए जोखिम बनाता है।', 'సరైన ప్రక్రియ మిమ్మల్ని కాపాడుతుంది; ఘర్షణ కొత్త ప్రమాదాలు సృష్టిస్తుంది.')
      },
      {
        id: 'p-avoid-2',
        text: t('Do not assume the seizure was unlawful without legal advice.', 'बिना कानूनी सलाह के ज़ब्ती अवैध मानने की जल्दबाज़ी न करें।', 'న్యాయ సలహా లేకుండా జప్తు చట్టవిరుద్ధమని భావించకండి.'),
        why: t('Whether a seizure was lawful depends on the facts and the law; a lawyer can assess it.', 'ज़ब्ती की वैधता तथ्यों और कानून पर निर्भर करती है; वकील आकलन कर सकते हैं।', 'జప్తు చట్టబద్ధత వాస్తవాలు, చట్టంపై ఆధారపడుతుంది; న్యాయవాది అంచనా వేయగలరు.')
      }
    ],
    evidence: [
      {
        id: 'p-ev-1',
        text: t('Write down everything taken, with details, while it is fresh.', 'सब कुछ विस्तार से लिख लें, जबकि याद ताज़ा है।', 'గుర్తుండగానే తీసుకున్న ప్రతిదీ వివరంగా రాయండి.'),
        why: t('Your own record protects you if the official list is later incomplete.', 'आधिकारिक सूची अधूरी हो तो आपका रिकॉर्ड सुरक्षा देता है।', 'అధికారిక జాబితా తర్వాత అసంపూర్ణంగా ఉంటే మీ రికార్డు కాపాడుతుంది.')
      },
      {
        id: 'p-ev-2',
        text: t('Keep the seizure memo and copies of your documents.', 'ज़ब्ती मेमो और अपने दस्तावेज़ों की प्रतियाँ रखें।', 'జప్తు మెమో, మీ పత్రాల కాపీలు ఉంచుకోండి.'),
        why: t('Documentation is what you will need to claim the property later.', 'संपत्ति वापस लेने के लिए दस्तावेज़ ही काम आएँगे।', 'ఆస్తి తిరిగి పొందడానికి పత్రాలే అవసరం.')
      },
      {
        id: 'p-ev-3',
        text: t('Preserve receipts, bills and proof of ownership.', 'रसीदें, बिल और स्वामित्व के प्रमाण सुरक्षित रखें।', 'రసీదులు, బిల్లులు, యాజమాన్య ఆధారాలు భద్రపరచండి.'),
        why: t('They establish that the property is yours.', 'वे सिद्ध करते हैं कि संपत्ति आपकी है।', 'ఆస్తి మీదే అని ఇవి రుజువు చేస్తాయి.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — property seized', 'आप यहाँ हैं — संपत्ति ज़ब्त', 'మీరు ఇక్కడ ఉన్నారు — ఆస్తి జప్తు') },
      { label: t('Seizure recorded & reported to Magistrate', 'ज़ब्ती दर्ज और मजिस्ट्रेट को सूचित', 'జప్తు నమోదు, మేజిస్ట్రేట్కు నివేదిక'), note: t('BNSS §106, §503', 'बीएनएसएस §106, §503', 'BNSS §106, §503') },
      { label: t('Ask officer / apply to court for return or interim custody', 'वापसी/अंतरिम अभिरक्षा के लिए आवेदन', 'తిరిగి పొందడం/ఇంటరిం కస్టడీకి దరఖాస్తు'), note: t('BNSS §497', 'बीएनएसएस §497', 'BNSS §497') },
      { label: t('Legal aid if you need help', 'ज़रूरत पड़ने पर कानूनी सहायता', 'అవసరమైతే న్యాయ సహాయం'), note: t('NALSA / State Legal Services Authority', 'नालसा / राज्य कानूनी सेवा प्राधिकरण', 'NALSA / రాష్ట్ర న్యాయ సేవా అథారిటీ') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'state-directory', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'p-cr-1',
        route: t('Investigating officer → senior police officer', 'जाँच अधिकारी → वरिष्ठ पुलिस अधिकारी', 'దర్యాప్తు అధికారి → సీనియర్ పోలీసు అధికారి'),
        whyItMayApply: t('For questions about the seizure, its basis, or the return procedure.', 'ज़ब्ती, उसके आधार या वापसी प्रक्रिया के सवालों के लिए।', 'జప్తు, దాని ఆధారం లేదా తిరిగి పొందే ప్రక్రియ గురించి ప్రశ్నలకు.'),
        whatToPrepare: t('Seizure memo, your own list of items, ownership documents.', 'ज़ब्ती मेमो, आपकी सूची, स्वामित्व दस्तावेज़।', 'జప్తు మెమో, మీ జాబితా, యాజమాన్య పత్రాలు.')
      },
      {
        id: 'p-cr-2',
        route: t('Court application (through a lawyer)', 'न्यायालय आवेदन (वकील के माध्यम से)', 'కోర్టు దరఖాస్తు (న్యాయవాది ద్వారా)'),
        whyItMayApply: t('If the property is not returned or you dispute the seizure.', 'यदि संपत्ति वापस नहीं मिलती या आप ज़ब्ती को चुनौती देते हैं।', 'ఆస్తి తిరిగి రాకపోతే లేదా జప్తును సవాలు చేస్తే.'),
        whatToPrepare: t('Complete record of the seizure and any correspondence.', 'ज़ब्ती का पूरा रिकॉर्ड और पत्राचार।', 'జప్తు పూర్తి రికార్డు మరియు ఉత్తర ప్రత్యుత్తరాలు.'),
        legalBasis: 'BNSS §497',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     6. POLICE ABUSE / THREAT / ASSAULT
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'POLICE_ABUSE',
    slug: 'police-abuse',
    icon: 'shieldAlert',
    title: t('Police threatened, abused, or assaulted me', 'पुलिस ने मुझे धमकाया, दुर्व्यवहार या मारपीट की', 'పోలీసులు నన్ను బెదిరించారు, దుర్వినియోగం లేదా కొట్టారు'),
    shortTitle: t('Police threatened me', 'पुलिस ने धमकाया', 'పోలీసులు బెదిరించారు'),
    description: t(
      'A police officer threatened you, abused you verbally, or used physical force against you.',
      'किसी पुलिस अधिकारी ने आपको धमकाया, गाली दी, या आपके साथ शारीरिक बल का प्रयोग किया।',
      'ఒక పోలీసు అధికారి మిమ్మల్ని బెదిరించారు, తిట్టారు లేదా శారీరక బలాన్ని ప్రయోగించారు.'
    ),
    urgency: 'high',
    summary: t(
      'Your safety comes first. If you are in immediate danger, get to a safe place and call 112. If you are safe, document what happened, seek medical help where needed, and use the official complaint routes — including NHRC where human-rights violations are involved.',
      'आपकी सुरक्षा सबसे पहले। तत्काल खतरे में हों तो सुरक्षित स्थान पर जाएँ और 112 पर कॉल करें। सुरक्षित होने पर घटना दर्ज करें, ज़रूरत पर चिकित्सा लें, और आधिकारिक शिकायत मार्ग अपनाएँ — मानवाधिकार उल्लंघन पर एनएचआरसी भी।',
      'మీ భద్రత ముందుగా. వెంటనే ప్రమాదం ఉంటే సురక్షిత ప్రదేశానికి వెళ్లి 112 కాల్ చేయండి. సురక్షితంగా ఉంటే సంఘటనను నమోదు చేయండి, అవసరమైతే వైద్యం తీసుకోండి, అధికారిక ఫిర్యాదు మార్గాలు అనుసరించండి — మానవ హక్కుల ఉల్లంఘనకు NHRC కూడా.'
    ),
    immediateActions: [
      t('If you are in immediate danger: get to safety and call 112 (national emergency).', 'तत्काल खतरे में: सुरक्षित स्थान पर जाएँ और 112 पर कॉल करें।', 'వెంటనే ప్రమాదం ఉంటే: సురక్షిత ప్రదేశానికి వెళ్లి 112 కాల్ చేయండి.'),
      t('Seek medical attention if you are injured — get injuries examined and recorded.', 'चोट लगने पर चिकित्सा लें — चोटों की जाँच और रिकॉर्ड कराएँ।', 'గాయమైతే వైద్యం తీసుకోండి — గాయాలను పరీక్షించి రికార్డ్ చేయించుకోండి.'),
      t('If safe, note the date, time, place, officer details, and what was said or done.', 'सुरक्षित हो तो तारीख़, समय, स्थान, अधिकारी का विवरण और घटना नोट करें।', 'సురక్షితంగా ఉంటే తేదీ, సమయం, ప్రదేశం, అధికారి వివరాలు, జరిగినది గమనించండి.'),
      t('Preserve evidence only if it is safe — photos of injuries, torn clothes, messages.', 'साक्ष्य केवल सुरक्षित होने पर ही सुरक्षित करें — चोटों की तस्वीरें, फटे कपड़े, संदेश।', 'సురక్షితంగా ఉంటేనే ఆధారాలు భద్రపరచండి — గాయాల ఫోటోలు, చిరిగిన బట్టలు, సందేశాలు.'),
      t('Seek legal help before deciding how and where to complain.', 'कहाँ और कैसे शिकायत करनी है, यह तय करने से पहले कानूनी मदद लें।', 'ఎక్కడ, ఎలా ఫిర్యాదు చేయాలో నిర్ణయించే ముందు న్యాయ సహాయం తీసుకోండి.')
    ],
    rights: [
      {
        id: 'ab-right-art21',
        title: t('To life and personal liberty', 'जीवन और व्यक्तिगत स्वतंत्रता का अधिकार', 'జీవితం మరియు వ్యక్తిగత స్వేచ్ఛ హక్కు'),
        whatThisMeans: t(
          'Every person has a right to life and personal liberty, and protection against treatment that violates human dignity. Physical abuse by any authority is not part of lawful police duty.',
          'हर व्यक्ति को जीवन और व्यक्तिगत स्वतंत्रता का अधिकार है, और मानवीय गरिमा का उल्लंघन करने वाले व्यवहार से सुरक्षा। किसी भी अधिकारी द्वारा शारीरिक दुर्व्यवहार कानूनी पुलिस कर्तव्य नहीं है।',
          'ప్రతి వ్యక్తికి జీవితం, వ్యక్తిగత స్వేచ్ఛ హక్కు ఉంది; మానవ గౌరవాన్ని ఉల్లంఘించే ప్రవర్తన నుండి రక్షణ ఉంది. ఏ అధికారి శారీరక దుర్వినియోగం చట్టబద్ధమైన పోలీసు విధి కాదు.'
        ),
        legalBasis: 'Constitution of India, Article 21',
        sourceIds: ['constitution']
      },
      {
        id: 'ab-right-nhrc',
        title: t('To approach human-rights bodies', 'मानवाधिकार निकायों से संपर्क का अधिकार', 'మానవ హక్కుల సంస్థలను సంప్రదించే హక్కు'),
        whatThisMeans: t(
          'The National Human Rights Commission can inquire into complaints of human-rights violations, including those by police officers. State Human Rights Commissions exist in many states.',
          'राष्ट्रीय मानवाधिकार आयोग पुलिस अधिकारियों सहित मानवाधिकार उल्लंघन की शिकायतों की जाँच कर सकता है। कई राज्यों में राज्य मानवाधिकार आयोग हैं।',
          'జాతీయ మానవ హక్కుల కమిషన్ పోలీసు అధికారులతో సహా మానవ హక్కుల ఉల్లంఘన ఫిర్యాదులను విచారించగలదు. అనేక రాష్ట్రాల్లో రాష్ట్ర మానవ హక్కుల కమిషన్లు ఉన్నాయి.'
        ),
        legalBasis: 'Protection of Human Rights Act, 1993 (NHRC)',
        sourceIds: ['nhrc']
      },
      {
        id: 'ab-right-criminal',
        title: t('To criminal remedies for assault or threat', 'मारपीट/धमकी पर आपराधिक उपाय', 'దాడి/బెదిరింపుకు నేర పరిహారాలు'),
        whatThisMeans: t(
          'Physical assault, criminal intimidation or wrongful restraint by anyone — including police — can be offences under the Bharatiya Nyaya Sanhita, 2023. A qualified lawyer can identify the applicable provision for your facts.',
          'किसी के द्वारा भी — पुलिस सहित — शारीरिक हमला, आपराधिक धमकी या गलत रोकथाम भारतीय न्याय संहिता, 2023 के तहत अपराध हो सकते हैं। योग्य वकील आपके तथ्यों के लिए लागू प्रावधान बता सकते हैं।',
          'ఎవరైనా — పోలీసులతో సహా — శారీరక దాడి, నేరపూరిత బెదిరింపు, తప్పుడు నిర్బంధం భారతీయ న్యాయ సంహిత, 2023 కింద నేరాలు కావచ్చు. అర్హత కలిగిన న్యాయవాది వర్తించే నిబంధన చెప్పగలరు.'
        ),
        legalBasis: 'Bharatiya Nyaya Sanhita, 2023 (applicable provision depends on facts)',
        sourceIds: ['bnss', 'sci']
      }
    ],
    do: [
      {
        id: 'ab-do-1',
        text: t('Prioritize your safety. Leave the situation if you can do so safely.', 'अपनी सुरक्षा को प्राथमिकता दें। सुरक्षित रूप से संभव हो तो स्थिति से बाहर निकलें।', 'మీ భద్రతకు ప్రాధాన్యం ఇవ్వండి. సురక్షితంగా వీలైతే పరిస్థితి నుండి బయటపడండి.'),
        why: t('Do not escalate or confront — your wellbeing matters most.', 'टकराव न बढ़ाएँ — आपकी भलाई सबसे महत्वपूर्ण है।', 'ఘర్షణ పెంచకండి — మీ శ్రేయస్సే ముఖ్యం.')
      },
      {
        id: 'ab-do-2',
        text: t('Get medical care if injured and ask for a written record of injuries.', 'चोट लगने पर चिकित्सा लें और चोटों का लिखित रिकॉर्ड माँगें।', 'గాయమైతే వైద్యం తీసుకోండి, గాయాల వ్రాతపూర్వక రికార్డు అడగండి.'),
        why: t('Medical records are important if you later complain or file a case.', 'बाद में शिकायत या मामला दर्ज करने पर चिकित्सा रिकॉर्ड महत्वपूर्ण हैं।', 'తర్వాత ఫిర్యాదు లేదా కేసు కోసం వైద్య రికార్డులు ముఖ్యం.')
      },
      {
        id: 'ab-do-3',
        text: t('Note details while fresh: who, what, when, where, witnesses.', 'याद ताज़ा होने पर विवरण नोट करें: कौन, क्या, कब, कहाँ, गवाह।', 'గుర్తుండగా వివరాలు రాయండి: ఎవరు, ఏమి, ఎప్పుడు, ఎక్కడ, సాక్షులు.')
      },
      {
        id: 'ab-do-4',
        text: t('Consult a lawyer or legal aid before choosing a complaint route.', 'शिकायत मार्ग चुनने से पहले वकील या कानूनी सहायता से परामर्श करें।', 'ఫిర్యాదు మార్గం ఎంచుకునే ముందు న్యాయవాది లేదా న్యాయ సహాయంతో సంప్రదించండి.')
      },
      {
        id: 'ab-do-5',
        text: t('Report through official channels — senior police officers, NHRC, or State Human Rights Commission as appropriate.', 'आधिकारिक माध्यम से शिकायत करें — वरिष्ठ अधिकारी, एनएचआरसी, या राज्य मानवाधिकार आयोग।', 'అధికారిక మార్గాల ద్వారా ఫిర్యాదు చేయండి — సీనియర్ అధికారులు, NHRC లేదా రాష్ట్ర మానవ హక్కుల కమిషన్.')
      }
    ],
    avoid: [
      {
        id: 'ab-avoid-1',
        text: t('Do not confront or provoke the officer further.', 'अधिकारी से आगे टकराव या उकसावे में न आएँ।', 'అధికారితో మరింత ఘర్షణకు దిగకండి, రెచ్చగొట్టకండి.'),
        why: t('Your safety comes first; record facts, then pursue lawful remedies.', 'सुरक्षा पहले; तथ्य दर्ज करें, फिर कानूनी उपाय।', 'భద్రత ముందు; వాస్తవాలు నమోదు చేసి, చట్టపరమైన పరిహారాలు వెంబడించండి.')
      },
      {
        id: 'ab-avoid-2',
        text: t('Do not destroy or stage evidence.', 'साक्ष्य नष्ट या नकली न बनाएँ।', 'ఆధారాలను నాశనం చేయకండి లేదా నకిలీ చేయకండి.'),
        why: t('Genuine, preserved evidence is what counts in any proceeding.', 'किसी भी कार्यवाही में वास्तविक सुरक्षित साक्ष्य ही मायने रखते हैं।', 'ఏ ప్రక్రియలోనైనా నిజమైన, భద్రపరిచిన ఆధారాలే లెక్క.')
      },
      {
        id: 'ab-avoid-3',
        text: t('Do not rely only on verbal complaints.', 'केवल मौखिक शिकायत पर निर्भर न रहें।', 'మౌఖిక ఫిర్యాదుపై మాత్రమే ఆధారపడకండి.'),
        why: t('A written record with dates gives you a trail to follow up.', 'तारीख़ों सहित लिखित रिकॉर्ड अनुवर्तन के लिए राह बनाता है।', 'తేదీలతో వ్రాతపూర్వక రికార్డు కొనసాగింపుకు ఆధారం.')
      }
    ],
    evidence: [
      {
        id: 'ab-ev-1',
        text: t('Get medical care if injured and keep the record.', 'चोट लगने पर चिकित्सा लें और रिकॉर्ड रखें।', 'గాయమైతే వైద్యం తీసుకుని రికార్డు ఉంచుకోండి.'),
        why: t('Medical records are important if you later complain or file a case.', 'बाद में शिकायत या मामला दर्ज करने पर चिकित्सा रिकॉर्ड महत्वपूर्ण हैं।', 'తర్వాత ఫిర్యాదు లేదా కేసు కోసం వైద్య రికార్డులు ముఖ్యం.')
      },
      {
        id: 'ab-ev-2',
        text: t('Note details while fresh: who, what, when, where, witnesses.', 'याद ताज़ा होने पर विवरण नोट करें: कौन, क्या, कब, कहाँ, गवाह।', 'గుర్తుండగా వివరాలు రాయండి: ఎవరు, ఏమి, ఎప్పుడు, ఎక్కడ, సాక్షులు.'),
        why: t('A written account with names is the backbone of any complaint.', 'नामों सहित लिखित विवरण किसी भी शिकायत की रीढ़ है।', 'పేర్లతో వ్రాతపూర్వక వివరణ ఏ ఫిర్యాదుకైనా వెన్నెముక.')
      },
      {
        id: 'ab-ev-3',
        text: t('Preserve evidence only if it is safe — photos of injuries, torn clothes, messages.', 'साक्ष्य केवल सुरक्षित होने पर ही सुरक्षित करें — चोटों की तस्वीरें, फटे कपड़े, संदेश।', 'సురక్షితంగా ఉంటేనే ఆధారాలు భద్రపరచండి — గాయాల ఫోటోలు, చిరిగిన బట్టలు, సందేశాలు.'),
        why: t('Genuine, preserved evidence is what counts in any proceeding.', 'किसी भी कार्यवाही में वास्तविक सुरक्षित साक्ष्य ही मायने रखते हैं।', 'ఏ ప్రక్రియలోనైనా నిజమైన, భద్రపరిచిన ఆధారాలే లెక్క.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — safe (or in danger)', 'आप यहाँ हैं — सुरक्षित (या खतरे में)', 'మీరు ఇక్కడ ఉన్నారు — సురక్షితం (లేదా ప్రమాదం)') },
      { label: t('Safety → medical care if injured', 'सुरक्षा → चोट लगने पर चिकित्सा', 'భద్రత → గాయమైతే వైద్యం'), note: t('Call 112 in immediate danger', 'तत्काल खतरे में 112 पर कॉल करें', 'వెంటనే ప్రమాదం ఉంటే 112 కాల్ చేయండి') },
      { label: t('Document what happened', 'घटना दर्ज करें', 'సంఘటనను నమోదు చేయండి'), note: t('Date, time, place, officers, witnesses', 'तारीख़, समय, स्थान, अधिकारी, गवाह', 'తేదీ, సమయం, ప్రదేశం, అధికారులు, సాక్షులు') },
      { label: t('Legal advice on complaint route', 'शिकायत मार्ग पर कानूनी सलाह', 'ఫిర్యాదు మార్గంపై న్యాయ సలహా'), note: t('NALSA / lawyer', 'नालसा / वकील', 'NALSA / న్యాయవాది') },
      { label: t('Complaint: senior police → NHRC / State HRC as appropriate', 'शिकायत: वरिष्ठ पुलिस → एनएचआरसी/राज्य आयोग', 'ఫిర్యాదు: సీనియర్ పోలీస్ → NHRC / రాష్ట్ర కమిషన్'), linkTo: 'i-want-to-complain' }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'nhrc-route', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'ab-cr-1',
        route: t('Senior police officer / complaint cell', 'वरिष्ठ पुलिस अधिकारी / शिकायत प्रकोष्ठ', 'సీనియర్ పోలీసు అధికారి / ఫిర్యాదు సెల్'),
        whyItMayApply: t('For misconduct by police personnel; internal inquiry channels exist.', 'पुलिस कर्मियों के दुर्व्यवहार के लिए; आंतरिक जाँच मार्ग मौजूद हैं।', 'పోలీసు సిబ్బంది ప్రవర్తనకు; అంతర్గత విచారణ మార్గాలు ఉన్నాయి.'),
        whatToPrepare: t('Written account, medical records if injured, witness details, officer details.', 'लिखित विवरण, चोट के रिकॉर्ड, गवाह और अधिकारी का विवरण।', 'వ్రాతపూర్వక వివరణ, గాయాల రికార్డులు, సాక్షులు, అధికారి వివరాలు.')
      },
      {
        id: 'ab-cr-2',
        phone: '14433',
        route: t('NHRC (National Human Rights Commission)', 'एनएचआरसी (राष्ट्रीय मानवाधिकार आयोग)', 'NHRC (జాతీయ మానవ హక్కుల కమిషన్)'),
        whyItMayApply: t('For human-rights violations — especially serious abuse or assault by police.', 'मानवाधिकार उल्लंघन — विशेषकर पुलिस द्वारा गंभीर दुर्व्यवहार या हमले के लिए।', 'మానవ హక్కుల ఉల్లంఘనలకు — ముఖ్యంగా పోలీసుల తీవ్ర దుర్వినియోగం లేదా దాడికి.'),
        whatToPrepare: t('Details of the incident, evidence and witnesses — take legal advice first.', 'घटना का विवरण, साक्ष्य और गवाह — पहले कानूनी सलाह लें।', 'సంఘటన వివరాలు, ఆధారాలు, సాక్షులు — ముందుగా న్యాయ సలహా తీసుకోండి.'),
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      }
    ],
    sourceIds: ['constitution', 'nhrc', 'bnss'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     7. BRIBE
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'BRIBE',
    slug: 'police-asked-for-money',
    icon: 'banknote',
    title: t('Police asked me for money', 'पुलिस ने मुझसे पैसे माँगे', 'పోలీసులు నన్ను డబ్బు అడిగారు'),
    shortTitle: t('Police asked for money', 'पुलिस ने पैसे माँगे', 'పోలీసులు డబ్బు అడిగారు'),
    description: t(
      'A police officer asked you for money or another undue advantage — to register a case, drop a case, or do (or not do) official work.',
      'किसी पुलिस अधिकारी ने मामला दर्ज करने, बंद करने, या कोई आधिकारिक काम करने (या न करने) के लिए पैसे या अन्य अनुचित लाभ माँगा।',
      'ఒక పోలీసు అధికారి కేసు నమోదు చేయడానికి, మూసివేయడానికి లేదా అధికారిక పని చేయడానికి (లేదా చేయకుండా ఉండటానికి) డబ్బు లేదా అన్యాయ ప్రయోజనం అడిగారు.'
    ),
    urgency: 'high',
    summary: t(
      'Demanding money for official work is an offence under the Prevention of Corruption Act, 1988. Your safety comes first — never confront or provoke the officer. If you can decline safely, do so; note the details and report through official anti-corruption channels with legal advice.',
      'आधिकारिक काम के लिए पैसे माँगना भ्रष्टाचार निवारण अधिनियम, 1988 के तहत अपराध है। सुरक्षा पहले — अधिकारी से टकराव या उकसावे में न आएँ। सुरक्षित रूप से मना कर सकें तो करें; विवरण नोट करें और कानूनी सलाह से आधिकारिक भ्रष्टाचार-विरोधी मार्ग से रिपोर्ट करें।',
      'అధికారిక పనికి డబ్బు అడగడం నివారణ ఆఫ్ కరప్షన్ చట్టం, 1988 కింద నేరం. మీ భద్రత ముందు — అధికారితో ఘర్షణకు దిగకండి. సురక్షితంగా నిరాకరించగలిగితే చేయండి; వివరాలు గమనించి న్యాయ సలహాతో అధికారిక వ్యతిరేక అవినీతి మార్గాల ద్వారా నివేదించండి.'
    ),
    immediateActions: [
      t('Stay calm and safe. Do not confront, threaten, or provoke the officer.', 'शांत और सुरक्षित रहें। अधिकारी से टकराव, धमकी या उकसावे में न आएँ।', 'ప్రశాంతంగా, సురక్షితంగా ఉండండి. అధికారితో ఘర్షణ, బెదిరింపు, రెచ్చగొట్టడం చేయకండి.'),
      t('If you can decline safely, do so. Your safety matters more than the transaction.', 'सुरक्षित रूप से मना कर सकें तो करें। आपकी सुरक्षा लेन-देन से अधिक महत्वपूर्ण है।', 'సురక్షితంగా నిరాకరించగలిగితే చేయండి. మీ భద్రత లావాదేవీ కంటే ముఖ్యం.'),
      t('Note the date, time, place, officer details, and what was demanded.', 'तारीख़, समय, स्थान, अधिकारी का विवरण और माँग नोट करें।', 'తేదీ, సమయం, ప్రదేశం, అధికారి వివరాలు, డిమాండ్ గమనించండి.'),
      t('Preserve any evidence you can safely keep — messages, notes, recordings made lawfully.', 'सुरक्षित रख सकें तो साक्ष्य सुरक्षित करें — संदेश, नोट्स, कानूनी रूप से बनाई गई रिकॉर्डिंग।', 'సురక్షితంగా ఉంచగలిగితే ఆధారాలు భద్రపరచండి — సందేశాలు, నోట్స్, చట్టబద్ధంగా చేసిన రికార్డింగ్లు.'),
      t('Seek legal advice before deciding how to report.', 'कैसे रिपोर्ट करना है, यह तय करने से पहले कानूनी सलाह लें।', 'ఎలా నివేదించాలో నిర్ణయించే ముందు న్యాయ సలహా తీసుకోండి.')
    ],
    rights: [
      {
        id: 'b-right-pca7',
        title: t('Taking a bribe is an offence', 'रिश्वत लेना अपराध है', 'లంచం తీసుకోవడం నేరం'),
        whatThisMeans: t(
          'It is an offence for a public servant — including a police officer — to accept gratification other than legal remuneration in respect of an official act. You are not legally required to pay for lawful official work.',
          'किसी सार्वजनिक सेवक — पुलिस अधिकारी सहित — के लिए आधिकारिक कार्य के बदले कानूनी पारिश्रमिक के अलावा लाभ लेना अपराध है। कानूनी आधिकारिक काम के लिए पैसे देना कानूनी आवश्यकता नहीं है।',
          'అధికారిక చర్యకు చట్టబద్ధమైన పారితోషికం కాకుండా ప్రయోజనం స్వీకరించడం ప్రభుత్వ సేవకుడికి — పోలీసు అధికారితో సహా — నేరం. చట్టబద్ధమైన అధికారిక పనికి డబ్బు చెల్లించాల్సిన చట్టపరమైన అవసరం లేదు.'
        ),
        legalBasis: 'Prevention of Corruption Act, 1988, §7',
        sourceIds: ['pca']
      },
      {
        id: 'b-right-pca13',
        title: t('Criminal misconduct by public servants', 'सार्वजनिक सेवक द्वारा आपराधिक कदाचार', 'ప్రభుత్వ సేవకుల నేరపూరిత ప్రవర్తన'),
        whatThisMeans: t(
          'The Act also covers criminal misconduct by public servants, including taking undue advantage or obtaining valuable things without adequate consideration.',
          'यह अधिनियम सार्वजनिक सेवकों द्वारा आपराधिक कदाचार को भी कवर करता है, जिसमें अनुचित लाभ लेना या बिना पर्याप्त मूल्य के वस्तुएँ प्राप्त करना शामिल है।',
          'ఈ చట్టం ప్రభుత్వ సేవకుల నేరపూరిత ప్రవర్తనను కూడా కవర్ చేస్తుంది — అన్యాయ ప్రయోజనం తీసుకోవడం లేదా సరైన విలువ లేకుండా వస్తువులు పొందడం వంటివి.'
        ),
        legalBasis: 'Prevention of Corruption Act, 1988, §13',
        sourceIds: ['pca']
      },
      {
        id: 'b-right-investigation',
        title: t('Investigation by authorized officers only', 'केवल अधिकृत अधिकारियों द्वारा जाँच', 'అధికారం ఉన్న అధికారుల ద్వారా మాత్రమే దర్యాప్తు'),
        whatThisMeans: t(
          'Offences under the Act are investigated only by officers of the ranks the Act specifies — a safeguard on how bribery complaints are handled.',
          'अधिनियम के तहत अपराधों की जाँच केवल अधिनियम द्वारा निर्दिष्ट पद के अधिकारी ही कर सकते हैं — यह शिकायतों के निपटान पर एक सुरक्षा उपाय है।',
          'ఈ చట్టం కింద నేరాలను చట్టం నిర్దేశించిన హోదా అధికారులు మాత్రమే దర్యాప్తు చేయగలరు — ఫిర్యాదుల నిర్వహణపై రక్షణ.'
        ),
        legalBasis: 'Prevention of Corruption Act, 1988, §17',
        sourceIds: ['pca']
      }
    ],
    do: [
      {
        id: 'b-do-1',
        text: t('Note everything: date, time, place, what was demanded, officer details, witnesses.', 'सब नोट करें: तारीख़, समय, स्थान, माँग, अधिकारी का विवरण, गवाह।', 'అన్నీ గమనించండి: తేదీ, సమయం, ప్రదేశం, డిమాండ్, అధికారి వివరాలు, సాక్షులు.'),
        why: t('A clear written record is the backbone of any complaint.', 'स्पष्ट लिखित रिकॉर्ड किसी भी शिकायत की रीढ़ है।', 'స్పష్టమైన వ్రాతపూర్వక రికార్డు ఏ ఫిర్యాదుకైనా వెన్నెముక.')
      },
      {
        id: 'b-do-2',
        text: t('If safe, ask the officer to put the demand in writing or confirm it in front of a witness.', 'सुरक्षित हो तो अधिकारी से माँग लिखित में करने या गवाह के सामने दोहराने को कहें।', 'సురక్షితంగా ఉంటే డిమాండ్ రాతపూర్వకంగా చేయమని లేదా సాక్షి ముందు ధృవీకరించమని అడగండి.'),
        why: t('Witnesses and writing make a complaint credible.', 'गवाह और लिखित रिकॉर्ड शिकायत को विश्वसनीय बनाते हैं।', 'సాక్షులు, వ్రాతపూర్వకం ఫిర్యాదును నమ్మదగినవిగా చేస్తాయి.')
      },
      {
        id: 'b-do-3',
        text: t('Report through the appropriate official anti-corruption route with legal advice.', 'कानूनी सलाह से उचित आधिकारिक भ्रष्टाचार-विरोधी मार्ग से रिपोर्ट करें।', 'న్యాయ సలహాతో తగిన అధికారిక వ్యతిరేక అవినీతి మార్గం ద్వారా నివేదించండి.'),
        why: t('Anti-corruption bureaus and vigilance bodies handle these complaints; a lawyer can guide you to the right one.', 'भ्रष्टाचार-विरोधी ब्यूरो और सतर्कता निकाय इन शिकायतों को संभालते हैं; वकील सही मार्ग बता सकते हैं।', 'యాంటీ కరప్షన్ బ్యూరోలు, విజిలెన్స్ సంస్థలు ఈ ఫిర్యాదులను నిర్వహిస్తాయి; న్యాయవాది సరైన మార్గం చూపగలరు.')
      }
    ],
    avoid: [
      {
        id: 'b-avoid-1',
        text: t('Never confront, threaten, or provoke the officer.', 'अधिकारी से कभी टकराव, धमकी या उकसावे में न आएँ।', 'అధికారితో ఎప్పుడూ ఘర్షణ, బెదిరింపు, రెచ్చగొట్టడం చేయకండి.'),
        why: t('Your safety comes first — always.', 'आपकी सुरक्षा सबसे पहले — हमेशा।', 'మీ భద్రత ముందుగా — ఎల్లప్పుడూ.')
      },
      {
        id: 'b-avoid-2',
        text: t('Do not attempt risky operations or evidence-gathering.', 'जोखिम भरे ऑपरेशन या साक्ष्य संग्रह की कोशिश न करें।', 'ప్రమాదకర చర్యలు లేదా ఆధార సేకరణకు ప్రయత్నించకండి.'),
        why: t('Only safe, lawful evidence helps — your safety never takes a back seat.', 'केवल सुरक्षित, कानूनी साक्ष्य ही काम आते हैं — सुरक्षा कभी पीछे नहीं होनी चाहिए।', 'సురక్షితమైన, చట్టబద్ధమైన ఆధారాలే ఉపయోగపడతాయి — భద్రత ఎప్పుడూ వెనుక ఉండకూడదు.')
      },
      {
        id: 'b-avoid-3',
        text: t('Do not pay if you can safely refuse.', 'सुरक्षित रूप से मना कर सकें तो पैसे न दें।', 'సురక్షితంగా నిరాకరించగలిగితే డబ్బు ఇవ్వకండి.'),
        why: t('Paying under compulsion is a personal safety decision; if it happens, tell your lawyer.', 'दबाव में पैसा देना व्यक्तिगत सुरक्षा निर्णय है; ऐसा हुआ तो वकील को बताएँ।', 'బలవంతంగా చెల్లించడం వ్యక్తిగత భద్రత నిర్ణయం; జరిగితే మీ న్యాయవాదికి చెప్పండి.')
      }
    ],
    evidence: [
      {
        id: 'b-ev-1',
        text: t('Note everything: date, time, place, what was demanded, officer details, witnesses.', 'सब नोट करें: तारीख़, समय, स्थान, माँग, अधिकारी का विवरण, गवाह।', 'అన్నీ గమనించండి: తేదీ, సమయం, ప్రదేశం, డిమాండ్, అధికారి వివరాలు, సాక్షులు.'),
        why: t('A clear written record is the backbone of any complaint.', 'स्पष्ट लिखित रिकॉर्ड किसी भी शिकायत की रीढ़ है।', 'స్పష్టమైన వ్రాతపూర్వక రికార్డు ఏ ఫిర్యాదుకైనా వెన్నెముక.')
      },
      {
        id: 'b-ev-2',
        text: t('If safe, note whether the demand was put in writing or repeated before a witness.', 'सुरक्षित हो तो नोट करें कि माँग लिखित में की गई या गवाह के सामने दोहराई गई।', 'సురక్షితంగా ఉంటే డిమాండ్ రాతపూర్వకమా లేదా సాక్షి ముందు పునరావృతమా అని గమనించండి.'),
        why: t('Witnesses and writing make a complaint credible.', 'गवाह और लिखित रिकॉर्ड शिकायत को विश्वसनीय बनाते हैं।', 'సాక్షులు, వ్రాతపూర్వకం ఫిర్యాదును నమ్మదగినవిగా చేస్తాయి.')
      },
      {
        id: 'b-ev-3',
        text: t('Keep only safe, lawful evidence — never attempt risky recording.', 'केवल सुरक्षित, कानूनी साक्ष्य रखें — जोखिम भरी रिकॉर्डिंग कभी न करें।', 'సురక్షితమైన, చట్టబద్ధమైన ఆధారాలు మాత్రమే — ప్రమాదకర రికార్డింగ్ ఎప్పుడూ వద్దు.'),
        why: t('Your safety never takes a back seat; a lawyer can guide the lawful route.', 'आपकी सुरक्षा कभी पीछे नहीं होनी चाहिए; वकील कानूनी मार्ग बता सकते हैं।', 'మీ భద్రత ఎప్పుడూ వెనుక ఉండకూడదు; న్యాయవాది చట్టబద్ధ మార్గం చూపగలరు.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — demand made', 'आप यहाँ हैं — पैसे की माँग', 'మీరు ఇక్కడ ఉన్నారు — డిమాండ్') },
      { label: t('Stay safe · note details', 'सुरक्षित रहें · विवरण नोट करें', 'సురక్షితంగా ఉండండి · వివరాలు గమనించండి'), note: t('Date, time, place, officer, witnesses', 'तारीख़, समय, स्थान, अधिकारी, गवाह', 'తేదీ, సమయం, ప్రదేశం, అధికారి, సాక్షులు') },
      { label: t('Legal advice on how to report', 'रिपोर्ट करने के तरीके पर कानूनी सलाह', 'నివేదించే విధానంపై న్యాయ సలహా'), note: t('PC Act, 1988 · §7, §13', 'भ्रष्टाचार निवारण अधिनियम §7, §13', 'PC చట్టం §7, §13') },
      { label: t('Report to official anti-corruption channel', 'आधिकारिक भ्रष्टाचार-विरोधी मार्ग से रिपोर्ट', 'అధికారిక వ్యతిరేక అవినీతి మార్గంలో నివేదిక'), note: t('State ACB / vigilance / Lokayukta where applicable', 'राज्य एसीबी / सतर्कता / लोकायुक्त जहाँ लागू', 'రాష్ట్ర ACB / విజిలెన్స్ / లోకాయుక్త వర్తించే చోట') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'b-cr-1',
        phone: '1064',
        route: t('State Anti-Corruption Bureau / vigilance body', 'राज्य भ्रष्टाचार-विरोधी ब्यूरो / सतर्कता निकाय', 'రాష్ట్ర యాంటీ కరప్షన్ బ్యూరో / విజిలెన్స్ సంస్థ'),
        whyItMayApply: t('Police bribery is handled by anti-corruption bodies; the right one depends on your state.', 'पुलिस रिश्वतखोरी भ्रष्टाचार-विरोधी निकाय देखते हैं; सही निकाय राज्य पर निर्भर करता है।', 'పోలీసు లంచం అవినీతి నిరోధక సంస్థలు నిర్వహిస్తాయి; సరైనది మీ రాష్ట్రంపై ఆధారపడి ఉంటుంది.'),
        whatToPrepare: t('A written, dated account of the demand with officer details and witnesses — after legal advice.', 'माँग का लिखित, तारीख़युक्त विवरण, अधिकारी का विवरण और गवाह — कानूनी सलाह के बाद।', 'డిమాండ్ యొక్క వ్రాతపూర్వక, తేదీతో కూడిన వివరణ, అధికారి వివరాలు, సాక్షులు — న్యాయ సలహా తర్వాత.'),
        legalBasis: 'Prevention of Corruption Act, 1988',
        sourceIds: ['pca']
      },
      {
        id: 'b-cr-2',
        route: t('Lokayukta (where applicable)', 'लोकायुक्त (जहाँ लागू)', 'లోకాయుక్త (వర్తించే చోట)'),
        whyItMayApply: t('Many states have a Lokayukta to investigate complaints against public servants, including police.', 'कई राज्यों में लोकायुक्त पुलिस सहित सार्वजनिक सेवकों के खिलाफ शिकायतों की जाँच करता है।', 'చాలా రాష్ట్రాల్లో లోకాయుక్త పోలీసులతో సహా ప్రభుత్వ సేవకులపై ఫిర్యాదులను దర్యాప్తు చేస్తుంది.'),
        whatToPrepare: t('The same written record — check the Lokayukta’s official procedure for your state.', 'वही लिखित रिकॉर्ड — अपने राज्य के लोकायुक्त की आधिकारिक प्रक्रिया देखें।', 'అదే వ్రాతపూర్వక రికార్డు — మీ రాష్ట్ర లోకాయుక్త అధికారిక విధానం చూడండి.')
      }
    ],
    sourceIds: ['pca'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     8. COMPLAINT
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'COMPLAINT',
    slug: 'i-want-to-complain',
    icon: 'megaphone',
    title: t('I want to complain', 'मैं शिकायत करना चाहता/चाहती हूँ', 'నేను ఫిర్యాదు చేయాలనుకుంటున్నాను'),
    shortTitle: t('I want to complain', 'मैं शिकायत करना चाहता हूँ', 'నేను ఫిర్యాదు చేయాలనుకుంటున్నాను'),
    description: t(
      'You want to complain about something that happened with the police, or about a government service. Choose the route that matches your situation.',
      'आप पुलिस से जुड़ी घटना या सरकारी सेवा के बारे में शिकायत करना चाहते हैं। अपनी स्थिति से मेल खाता मार्ग चुनें।',
      'పోలీసులకు సంబంధించిన సంఘటన లేదా ప్రభుత్వ సేవ గురించి ఫిర్యాదు చేయాలనుకుంటున్నారు. మీ పరిస్థితికి సరిపోయే మార్గం ఎంచుకోండి.'
    ),
    urgency: 'low',
    summary: t(
      'The right complaint route depends on what happened: FIR refusal, police misconduct, a human-rights issue, cybercrime, or a general grievance. Pick the closest match — each route below explains why it may apply and what to prepare.',
      'सही शिकायत मार्ग घटना पर निर्भर करता है: एफआईआर इनकार, पुलिस दुर्व्यवहार, मानवाधिकार मुद्दा, साइबर अपराध, या सामान्य शिकायत। निकटतम विकल्प चुनें — हर मार्ग नीचे बताया गया है।',
      'సరైన ఫిర్యాదు మార్గం సంఘటనపై ఆధారపడి ఉంటుంది: ఎఫ్ఐఆర్ నిరాకరణ, పోలీసు దుర్వినియోగం, మానవ హక్కుల సమస్య, సైబర్ నేరం లేదా సాధారణ ఫిర్యాదు. దగ్గరి దాన్ని ఎంచుకోండి.'
    ),
    immediateActions: [
      t('Choose the closest match from the complaint routes below.', 'नीचे के शिकायत मार्गों में से निकटतम विकल्प चुनें।', 'క్రింది ఫిర్యాదు మార్గాల నుండి దగ్గరి దాన్ని ఎంచుకోండి.'),
      t('Write down what happened: date, time, place, people, and what you want done.', 'घटना लिखें: तारीख़, समय, स्थान, लोग, और आप क्या चाहते हैं।', 'సంఘటన రాయండి: తేదీ, సమయం, ప్రదేశం, వ్యక్తులు, మీరు కోరుకునేది.'),
      t('Collect supporting documents and records.', 'सहायक दस्तावेज़ और रिकॉर्ड इकट्ठा करें।', 'సహాయక పత్రాలు, రికార్డులు సేకరించండి.'),
      t('Take legal advice before filing where the matter is serious.', 'गंभीर मामले में दायर करने से पहले कानूनी सलाह लें।', 'తీవ్రమైన విషయంలో దాఖలు చేసే ముందు న్యాయ సలహా తీసుకోండి.')
    ],
    rights: [
      {
        id: 'c-right-grievance',
        title: t('To a grievance-redress route', 'शिकायत निवारण मार्ग का अधिकार', 'ఫిర్యాదు పరిష్కార మార్గం హక్కు'),
        whatThisMeans: t(
          'India has official channels for different kinds of complaints — police, human rights, cybercrime and general government grievances. Using the right channel gets your complaint to the body that can act.',
          'भारत में विभिन्न शिकायतों के आधिकारिक मार्ग हैं — पुलिस, मानवाधिकार, साइबर अपराध और सामान्य सरकारी शिकायतें। सही मार्ग आपकी शिकायत सही निकाय तक पहुँचाता है।',
          'భారతదేశంలో వివిధ ఫిర్యాదులకు అధికారిక మార్గాలు ఉన్నాయి — పోలీసు, మానవ హక్కులు, సైబర్ నేరం, సాధారణ ప్రభుత్వ ఫిర్యాదులు. సరైన మార్గం మీ ఫిర్యాదును చర్య తీసుకోగల సంస్థకు చేరుస్తుంది.'
        ),
        legalBasis: 'CPGRAMS · NHRC · National Cyber Crime Reporting Portal',
        sourceIds: ['cpgrams', 'nhrc', 'cyber']
      },
      {
        id: 'c-right-fir',
        title: t('To remedies when an FIR is refused', 'एफआईआर इनकार पर उपायों का अधिकार', 'ఎఫ్ఐఆర్ నిరాకరణపై పరిహారాల హక్కు'),
        whatThisMeans: t(
          'If your information about a cognizable offence is not recorded, you can approach higher police authorities and the Magistrate (see the FIR-refused guide).',
          'यदि संज्ञेय अपराध की सूचना दर्ज नहीं होती, तो आप वरिष्ठ पुलिस अधिकारियों और मजिस्ट्रेट से संपर्क कर सकते हैं (एफआईआर इनकार गाइड देखें)।',
          'మీ సంజ్ఞేయ నేర సమాచారం నమోదు కాకపోతే ఉన్నత పోలీసు అధికారులను, మేజిస్ట్రేట్ను సంప్రదించవచ్చు (ఎఫ్ఐఆర్ నిరాకరణ గైడ్ చూడండి).'
        ),
        legalBasis: 'BNSS §173, §175(3)',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'c-do-1',
        text: t('Pick the route that matches your complaint from the list below.', 'नीचे की सूची से अपनी शिकायत से मेल खाता मार्ग चुनें।', 'క్రింది జాబితా నుండి మీ ఫిర్యాదుకు సరిపోయే మార్గం ఎంచుకోండి.')
      },
      {
        id: 'c-do-2',
        text: t('Use the Complaint Checklist to prepare before you file.', 'दायर करने से पहले तैयारी के लिए शिकायत चेकलिस्ट का उपयोग करें।', 'దాఖలు చేసే ముందు తయారీకి ఫిర్యాదు చెక్లిస్ట్ ఉపయోగించండి.')
      },
      {
        id: 'c-do-3',
        text: t('Keep copies of everything you submit.', 'जो कुछ भी जमा करें उसकी प्रतियाँ रखें।', 'మీరు సమర్పించే ప్రతిదాని కాపీలు ఉంచుకోండి.')
      }
    ],
    avoid: [
      {
        id: 'c-avoid-1',
        text: t('Do not file a vague complaint without details.', 'बिना विवरण के अस्पष्ट शिकायत न दर्ज करें।', 'వివరాలు లేకుండా అస్పష్టమైన ఫిర్యాదు చేయకండి.'),
        why: t('Specific, dated facts make a complaint actionable.', 'विशिष्ट, तारीख़युक्त तथ्य शिकायत को कार्रवाई योग्य बनाते हैं।', 'నిర్దిష్ట, తేదీతో కూడిన వాస్తవాలు ఫిర్యాదును చర్య యోగ్యం చేస్తాయి.')
      },
      {
        id: 'c-avoid-2',
        text: t('Do not exaggerate or fabricate facts.', 'तथ्यों को बढ़ा-चढ़ाकर या गढ़कर न बताएँ।', 'వాస్తవాలను అతిశయోక్తి చేయకండి లేదా కల్పించకండి.'),
        why: t('Accuracy protects you and keeps the complaint credible.', 'सटीकता आपकी रक्षा करती है और शिकायत विश्वसनीय रहती है।', 'ఖచ్చితత్వం మిమ్మల్ని కాపాడుతుంది, ఫిర్యాదు నమ్మదగినదిగా ఉంటుంది.')
      }
    ],
    evidence: [
      {
        id: 'c-ev-1',
        text: t('Write down what happened: date, time, place, people, and what you want done.', 'घटना लिखें: तारीख़, समय, स्थान, लोग, और आप क्या चाहते हैं।', 'సంఘటన రాయండి: తేదీ, సమయం, ప్రదేశం, వ్యక్తులు, మీరు కోరుకునేది.'),
        why: t('Specific, dated facts make a complaint actionable.', 'विशिष्ट, तारीख़युक्त तथ्य शिकायत को कार्रवाई योग्य बनाते हैं।', 'నిర్దిష్ట, తేదీతో కూడిన వాస్తవాలు ఫిర్యాదును చర్య యోగ్యం చేస్తాయి.')
      },
      {
        id: 'c-ev-2',
        text: t('Collect supporting documents and records.', 'सहायक दस्तावेज़ और रिकॉर्ड इकट्ठा करें।', 'సహాయక పత్రాలు, రికార్డులు సేకరించండి.'),
        why: t('They back up your account at every stage.', 'वे हर चरण में आपके विवरण का समर्थन करते हैं।', 'ప్రతి దశలో మీ వివరణకు అవి మద్దతిస్తాయి.')
      },
      {
        id: 'c-ev-3',
        text: t('Keep copies of everything you submit, and any reference number.', 'जो भी जमा करें उसकी प्रति और संदर्भ संख्या रखें।', 'సమర్పించిన ప్రతిదాని కాపీ, రిఫరెన్స్ నంబర్ ఉంచుకోండి.'),
        why: t('Copies and references let you follow up on the complaint.', 'प्रतियाँ और संदर्भ शिकायत पर अनुवर्तन करने देते हैं।', 'కాపీలు, రిఫరెన్స్ ఫిర్యాదును ఫాలో అప్ చేయడానికి వీలిస్తాయి.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — choose a route', 'आप यहाँ हैं — मार्ग चुनें', 'మీరు ఇక్కడ ఉన్నారు — మార్గం ఎంచుకోండి') },
      { label: t('Prepare: dates, documents, records', 'तैयारी: तारीख़ें, दस्तावेज़, रिकॉर्ड', 'తయారీ: తేదీలు, పత్రాలు, రికార్డులు'), note: t('Use the Complaint Checklist', 'शिकायत चेकलिस्ट का उपयोग करें', 'ఫిర్యాదు చెక్లిస్ట్ ఉపయోగించండి') },
      { label: t('File through the official channel', 'आधिकारिक मार्ग से दायर करें', 'అధికారిక మార్గంలో దాఖలు చేయండి'), note: t('SP / Magistrate / NHRC / CPGRAMS / cyber portal', 'पुलिस अधीक्षक / मजिस्ट्रेट / एनएचआरसी / सीपीग्राम्स / साइबर पोर्टल', 'SP / మేజిస్ట్రేట్ / NHRC / CPGRAMS / సైబర్ పోర్టల్') },
      { label: t('Follow up with the reference number', 'संदर्भ संख्या से अनुवर्तन करें', 'రిఫరెన్స్ నంబర్తో ఫాలో అప్ చేయండి') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'c-cr-fir',
        route: t('FIR refused', 'एफआईआर इनकार', 'ఎఫ్ఐఆర్ నిరాకరణ'),
        whyItMayApply: t('Your information about an offence was not recorded at the police station.', 'थाने में आपकी सूचना दर्ज नहीं हुई।', 'మీ నేర సమాచారం స్టేషన్లో నమోదు కాలేదు.'),
        whatToPrepare: t('Your complaint in writing, the refusal record, officer details.', 'लिखित शिकायत, इनकार का रिकॉर्ड, अधिकारी का विवरण।', 'మీ ఫిర్యాదు వ్రాతపూర్వకంగా, నిరాకరణ రికార్డు, అధికారి వివరాలు.'),
        legalBasis: 'BNSS §173, §175(3)',
        sourceIds: ['bnss']
      },
      {
        id: 'c-cr-abuse',
        phone: '14433',
        route: t('Police threatened / abused / assaulted me', 'पुलिस ने धमकाया/दुर्व्यवहार/मारपीट की', 'పోలీసులు బెదిరించారు/దుర్వినియోగం/కొట్టారు'),
        whyItMayApply: t('Serious misconduct or human-rights violation by police officers.', 'पुलिस अधिकारियों द्वारा गंभीर दुर्व्यवहार या मानवाधिकार उल्लंघन।', 'పోలీసు అధికారుల తీవ్ర దుర్వినియోగం లేదా మానవ హక్కుల ఉల్లంఘన.'),
        whatToPrepare: t('Written account, medical records if injured, witnesses — with legal advice.', 'लिखित विवरण, चोट के रिकॉर्ड, गवाह — कानूनी सलाह से।', 'వ్రాతపూర్వక వివరణ, గాయాల రికార్డులు, సాక్షులు — న్యాయ సలహాతో.'),
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      },
      {
        id: 'c-cr-bribe',
        phone: '1064',
        route: t('Police asked for money', 'पुलिस ने पैसे माँगे', 'పోలీసులు డబ్బు అడిగారు'),
        whyItMayApply: t('A police officer demanded money or an undue advantage for official work.', 'आधिकारिक काम के लिए पुलिस अधिकारी ने पैसे या अनुचित लाभ माँगा।', 'అధికారిక పనికి పోలీసు అధికారి డబ్బు లేదా అన్యాయ ప్రయోజనం డిమాండ్ చేశారు.'),
        whatToPrepare: t('Dated record of the demand, officer details, witnesses — after legal advice.', 'माँग का तारीख़युक्त रिकॉर्ड, अधिकारी का विवरण, गवाह — कानूनी सलाह के बाद।', 'డిమాండ్ తేదీతో కూడిన రికార్డు, అధికారి వివరాలు, సాక్షులు — న్యాయ సలహా తర్వాత.'),
        legalBasis: 'Prevention of Corruption Act, 1988',
        sourceIds: ['pca']
      },
      {
        id: 'c-cr-hr',
        phone: '14433',
        route: t('Human-rights issue', 'मानवाधिकार मुद्दा', 'మానవ హక్కుల సమస్య'),
        whyItMayApply: t('The conduct involves a violation of human rights, such as custodial violence.', 'आचरण मानवाधिकार उल्लंघन है, जैसे हिरासत में हिंसा।', 'ప్రవర్తన మానవ హక్కుల ఉల్లంఘన అయితే — ఉదా. కస్టడీ హింస.'),
        whatToPrepare: t('Full incident details, evidence, witnesses; take legal advice first.', 'पूरा घटना विवरण, साक्ष्य, गवाह; पहले कानूनी सलाह लें।', 'పూర్తి సంఘటన వివరాలు, ఆధారాలు, సాక్షులు; ముందుగా న్యాయ సలహా తీసుకోండి.'),
        officialUrl: 'https://nhrc.nic.in/',
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      },
      {
        id: 'c-cr-cyber',
        phone: '1930',
        route: t('Cybercrime', 'साइबर अपराध', 'సైబర్ నేరం'),
        whyItMayApply: t('Online fraud, cyber harassment, or other offences committed through digital means.', 'ऑनलाइन धोखाधड़ी, साइबर उत्पीड़न या डिजिटल माध्यम से अपराध।', 'ఆన్లైన్ మోసం, సైబర్ వేధింపు లేదా డిజిటల్ మార్గాల నేరాలు.'),
        whatToPrepare: t('Screenshots, transaction records, and a written account of what happened.', 'स्क्रीनशॉट, लेन-देन रिकॉर्ड और घटना का लिखित विवरण।', 'స్క్రీన్షాట్లు, లావాదేవీ రికార్డులు, సంఘటన వ్రాతపూర్వక వివరణ.'),
        officialUrl: 'https://cybercrime.gov.in/',
        legalBasis: 'National Cyber Crime Reporting Portal',
        sourceIds: ['cyber']
      },
      {
        id: 'c-cr-grievance',
        route: t('General government grievance', 'सामान्य सरकारी शिकायत', 'సాధారణ ప్రభుత్వ ఫిర్యాదు'),
        whyItMayApply: t('A complaint about a government service or department, not involving police misconduct or cybercrime.', 'पुलिस दुर्व्यवहार या साइबर अपराध से अलग, किसी सरकारी सेवा या विभाग के बारे में शिकायत।', 'పోలీసు దుర్వినియోగం, సైబర్ నేరం కాకుండా ప్రభుత్వ సేవ లేదా విభాగం గురించి ఫిర్యాదు.'),
        whatToPrepare: t('Details of the service issue, dates, and supporting documents.', 'सेवा समस्या का विवरण, तारीख़ें और सहायक दस्तावेज़।', 'సేవా సమస్య వివరాలు, తేదీలు, సహాయక పత్రాలు.'),
        officialUrl: 'https://pgportal.gov.in/',
        legalBasis: 'CPGRAMS',
        sourceIds: ['cpgrams']
      }
    ],
    sourceIds: ['cpgrams', 'nhrc', 'cyber', 'bnss', 'pca'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     9. WOMAN DEALING WITH THE POLICE
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'WOMEN_AND_POLICE',
    slug: 'woman-dealing-with-police',
    icon: 'users',
    title: t('I am a woman dealing with the police', 'मैं एक महिला हूँ और पुलिस से बात कर रही हूँ', 'నేను స్త్రీని, పోలీసులతో వ్యవహరిస్తున్నాను'),
    shortTitle: t('Woman dealing with police', 'पुलिस से बात करती महिला', 'పోలీసులతో వ్యవహరించే స్త్రీ'),
    description: t(
      'You are a woman being stopped, questioned, searched, asked to come to the police station, or arrested. The law gives women specific protections during police interactions.',
      'आप एक महिला हैं जिसे रोका, पूछताछ, तलाशी, थाने बुलाया या गिरफ़्तार किया गया है। कानून पुलिस व्यवहार के दौरान महिलाओं को विशेष सुरक्षा देता है।',
      'మీరు స్త్రీ; మిమ్మల్ని ఆపారు, ప్రశ్నించారు, సోదా చేశారు, స్టేషన్ రమ్మన్నారు లేదా అరెస్ట్ చేశారు. పోలీసులతో వ్యవహారాల్లో చట్టం స్త్రీలకు ప్రత్యేక రక్షణలు ఇస్తుంది.'
    ),
    urgency: 'medium',
    summary: t(
      'Women have specific legal protections in police interactions: a woman is searched only by a female officer, a woman is not ordinarily arrested after sunset, and women cannot be required to attend the police station for questioning — the police must record statements at your residence. Knowing these protections helps you assert them calmly and safely.',
      'पुलिस व्यवहार में महिलाओं को विशेष कानूनी सुरक्षा मिलती है: महिला की तलाशी केवल महिला अधिकारी करती है, सूर्यास्त के बाद सामान्यतः महिला की गिरफ़्तारी नहीं होती, और पूछताछ के लिए महिला को थाने बुलाना अनिवार्य नहीं — पुलिस आपके निवास पर ही बयान दर्ज करती है। इन सुरक्षाओं को जानकर आप शांति और सुरक्षा से उनका उपयोग कर सकती हैं।',
      'పోలీసులతో వ్యవహారాల్లో స్త్రీలకు ప్రత్యేక చట్టపరమైన రక్షణలు ఉన్నాయి: స్త్రీని మహిళా అధికారి మాత్రమే సోదా చేయాలి, సూర్యాస్తమయం తర్వాత సాధారణంగా స్త్రీని అరెస్ట్ చేయకూడదు, ప్రశ్నలకు స్టేషన్ రమ్మని స్త్రీని నిర్బంధించలేరు — పోలీసులు మీ నివాసంలోనే వాంగ్మూలం నమోదు చేయాలి. ఈ రక్షణలు తెలుసుకుంటే ప్రశాంతంగా, సురక్షితంగా వినియోగించుకోవచ్చు.'
    ),
    immediateActions: [
      t('Stay calm. Ask why you are being stopped, questioned, or asked to come to the station.', 'शांत रहें। पूछें कि आपको क्यों रोका, पूछताछ या थाने बुलाया जा रहा है।', 'ప్రశాంతంగా ఉండండి. ఎందుకు ఆపుతున్నారో, ప్రశ్నిస్తున్నారో, స్టేషన్ రమ్మంటున్నారో అడగండి.'),
      t('If a search of your person is required, ask for a woman officer — the law requires it.', 'यदि आपकी तलाशी आवश्यक हो, तो महिला अधिकारी माँगें — कानून यही कहता है।', 'మిమ్మల్ని సోదా చేయాల్సి వస్తే మహిళా అధికారి కోసం అడగండి — చట్టం అదే చెబుతుంది.'),
      t('If asked to attend the police station for questioning, you may ask that it happen at your residence.', 'पूछताछ के लिए थाने बुलाया जाए तो आप अपने निवास पर ही बयान देने का अनुरोध कर सकती हैं।', 'ప్రశ్నలకు స్టేషన్ రమ్మంటే మీ నివాసంలోనే జరగాలని అడగవచ్చు.'),
      t('Call 181 (women helpline) or a trusted person if you feel unsafe.', 'असुरक्षित महसूस होने पर 181 (महिला हेल्पलाइन) या किसी भरोसेमंद व्यक्ति को कॉल करें।', 'భద్రతగా అనిపించకపోతే 181 (మహిళా హెల్ప్లైన్) లేదా నమ్మకమైన వ్యక్తికి కాల్ చేయండి.'),
      t('Note the officer’s name, badge number, place and time.', 'अधिकारी का नाम, बैज नंबर, स्थान और समय नोट करें।', 'అధికారి పేరు, బ్యాడ్జ్ నంబర్, ప్రదేశం, సమయం గమనించండి.')
    ],
    rights: [
      {
        id: 'w-right-search',
        title: t('To be searched only by a female officer', 'केवल महिला अधिकारी द्वारा तलाशी का अधिकार', 'మహిళా అధికారి ద్వారా మాత్రమే సోదా హక్కు'),
        whatThisMeans: t(
          'Whenever a woman has to be searched, the search must be made by another female with strict regard to decency.',
          'जब भी किसी महिला की तलाशी आवश्यक हो, वह किसी अन्य महिला द्वारा, पूर्ण शालीनता के साथ की जाएगी।',
          'స్త్రీని సోదా చేయాల్సి వస్తే ఆ సోదా మరో స్త్రీ ద్వారా, పూర్తి మర్యాదతో చేయాలి.'
        ),
        legalBasis: 'BNSS §49(2)',
        sourceIds: ['bnss']
      },
      {
        id: 'w-right-night',
        title: t('Not to be arrested after sunset, except with a Magistrate’s permission', 'सूर्यास्त के बाद गिरफ़्तारी से सुरक्षा (मजिस्ट्रेट की अनुमति के बिना)', 'సూర్యాస్తమయం తర్వాత అరెస్ట్ నుండి రక్షణ (మేజిస్ట్రేట్ అనుమతి లేకుండా)'),
        whatThisMeans: t(
          'Save in exceptional circumstances, no woman shall be arrested after sunset and before sunrise. Where exceptional circumstances exist, a woman police officer must first obtain the prior written permission of a Magistrate of the first class. In addition, when a woman is arrested, her submission to custody on oral intimation is presumed, and a male officer shall not touch her person unless circumstances require.',
          'विशेष परिस्थितियों को छोड़कर, सूर्यास्त के बाद और सूर्योदय से पहले किसी महिला की गिरफ़्तारी नहीं होगी। विशेष परिस्थिति में महिला अधिकारी को पहले प्रथम श्रेणी मजिस्ट्रेट की लिखित अनुमति लेनी होगी। साथ ही, महिला की गिरफ़्तारी पर मौखिक सूचना से उसका समर्पण माना जाता है, और परिस्थिति की आवश्यकता को छोड़कर पुरुष अधिकारी उसके शरीर को नहीं छूएगा।',
          'ప్రత్యేక పరిస్థితులు తప్ప సూర్యాస్తమయం తర్వాత, సూర్యోదయానికి ముందు స్త్రీని అరెస్ట్ చేయకూడదు. ప్రత్యేక పరిస్థితుల్లో మహిళా పోలీసు అధికారి ముందుగా ఫస్ట్ క్లాస్ మేజిస్ట్రేట్ వ్రాతపూర్వక అనుమతి పొందాలి. అంతేకాక, స్త్రీ అరెస్ట్ అయినప్పుడు మౌఖిక సమాచారంతోనే ఆమె అప్పగించుకున్నట్లు భావిస్తారు; పరిస్థితులు అవసరమైతే తప్ప పురుష అధికారి ఆమె శరీరాన్ని తాకకూడదు.'
        ),
        legalBasis: 'BNSS §43(1) proviso, §43(5)',
        sourceIds: ['bnss']
      },
      {
        id: 'w-right-attendance',
        title: t('Not to be required to attend the police station for questioning', 'पूछताछ के लिए थाने बुलाए जाने से सुरक्षा', 'ప్రశ్నలకు స్టేషన్ రమ్మని నిర్బంధించకూడదనే హక్కు'),
        whatThisMeans: t(
          'No woman can be required to attend at any place other than her residence for an investigation-related appearance. The police may record her statement at her residence instead.',
          'जाँच से जुड़ी उपस्थिति के लिए किसी महिला को उसके निवास के अलावा किसी अन्य स्थान पर बुलाना अनिवार्य नहीं है। पुलिस उसका बयान उसके निवास पर ही दर्ज कर सकती है।',
          'దర్యాప్తుకు సంబంధించిన హాజరు కోసం స్త్రీని ఆమె నివాసం కాకుండా మరే చోటికీ రమ్మని నిర్బంధించలేరు. పోలీసులు ఆమె నివాసంలోనే వాంగ్మూలం నమోదు చేయవచ్చు.'
        ),
        legalBasis: 'BNSS §179 (proviso)',
        sourceIds: ['bnss']
      },
      {
        id: 'w-right-lawyer',
        title: t('To know the grounds and to meet a lawyer during interrogation', 'कारण जानने और पूछताछ में वकील से मिलने का अधिकार', 'కారణాలు తెలుసుకునే, విచారణలో న్యాయవాదిని కలిసే హక్కు'),
        whatThisMeans: t(
          'If you are arrested, you must be told the grounds, and you are entitled to meet an advocate of your choice during interrogation.',
          'गिरफ़्तारी पर आपको कारण बताए जाने चाहिए, और पूछताछ के दौरान आप अपनी पसंद के अधिवक्ता से मिल सकती हैं।',
          'అరెస్ట్ అయితే కారణాలు చెప్పాలి; విచారణ సమయంలో మీ ఇష్టానుసారం న్యాయవాదిని కలవవచ్చు.'
        ),
        legalBasis: 'Constitution of India, Article 22(1) · BNSS §38, §47',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'w-right-helpdesk',
        title: t('To use the women help desk at a police station', 'थाने में महिला हेल्प डेस्क का उपयोग करने का अधिकार', 'పోలీస్ స్టేషన్లో మహిళా హెల్ప్ డెస్క్ ఉపయోగించే హక్కు'),
        whatThisMeans: t(
          'Under a Ministry of Home Affairs scheme funded by the Nirbhaya Fund, police stations across India have women help desks staffed to receive women and assist them. You can ask to be assisted by a woman officer or at the women help desk.',
          'निर्भया फंड से वित्तपोषित गृह मंत्रालय योजना के तहत भारत भर के थानों में महिला हेल्प डेस्क हैं। आप महिला अधिकारी या महिला हेल्प डेस्क से सहायता माँग सकती हैं।',
          'నిర్భయ ఫండ్ ద్వారా నిధులిచ్చిన హోం మంత్రిత్వ శాఖ పథకం కింద దేశవ్యాప్తంగా పోలీస్ స్టేషన్లలో మహిళా హెల్ప్ డెస్క్లు ఉన్నాయి. మీరు మహిళా అధికారి లేదా హెల్ప్ డెస్క్ సహాయం అడగవచ్చు.'
        ),
        legalBasis: 'MHA — Women Help Desks scheme (Nirbhaya Fund)',
        sourceIds: ['mha']
      }
    ],
    do: [
      {
        id: 'w-do-1',
        text: t('State your request calmly: a woman officer for any search, and questioning at your residence.', 'शांति से अनुरोध करें: किसी भी तलाशी के लिए महिला अधिकारी, और पूछताछ आपके निवास पर।', 'ప్రశాంతంగా అడగండి: ఏ సోదాకైనా మహిళా అధికారి, ప్రశ్నలు మీ నివాసంలోనే.'),
        why: t('These are legal entitlements (BNSS §49(2), §179), not favours.', 'ये कानूनी अधिकार हैं (बीएनएसएस §49(2), §179), एहसान नहीं।', 'ఇవి చట్టపరమైన హక్కులు (BNSS §49(2), §179), దయ కాదు.')
      },
      {
        id: 'w-do-2',
        text: t('If arrested at night, note the time and whether a Magistrate’s permission was obtained.', 'रात में गिरफ़्तारी हो तो समय नोट करें और देखें कि मजिस्ट्रेट की अनुमति ली गई थी या नहीं।', 'రాత్రి అరెస్ట్ అయితే సమయం గమనించండి; మేజిస్ట్రేట్ అనుమతి పొందారా లేదా చూడండి.'),
        why: t('Night arrest of a woman without prior Magistrate permission is a violation of BNSS §43(5).', 'बिना मजिस्ट्रेट की अनुमति महिला की रात्रि गिरफ़्तारी बीएनएसएस §43(5) का उल्लंघन है।', 'మేజిస్ట్రేట్ అనుమతి లేకుండా స్త్రీని రాత్రి అరెస్ట్ చేయడం BNSS §43(5) ఉల్లంఘన.')
      },
      {
        id: 'w-do-3',
        text: t('Call 181 (women helpline) or a family member if you are being taken to the station.', 'थाने ले जाए जाने पर 181 (महिला हेल्पलाइन) या परिवार को कॉल करें।', 'స్టేషన్కు తీసుకెళ్తుంటే 181 (మహిళా హెల్ప్లైన్) లేదా కుటుంబ సభ్యుడికి కాల్ చేయండి.'),
        why: t('Tell someone where you are — it protects you and creates a record.', 'किसी को बताएँ कि आप कहाँ हैं — यह आपकी सुरक्षा और रिकॉर्ड दोनों है।', 'మీరు ఎక్కడ ఉన్నారో ఎవరికైనా చెప్పండి — ఇది రక్షణ, రికార్డు కూడా.')
      },
      {
        id: 'w-do-4',
        text: t('Ask for a lawyer or free legal aid if you need support.', 'सहायता चाहिए तो वकील या निःशुल्क कानूनी सहायता माँगें।', 'సహాయం అవసరమైతే న్యాయవాది లేదా ఉచిత న్యాయ సహాయం అడగండి.')
      }
    ],
    avoid: [
      {
        id: 'w-avoid-1',
        text: t('Do not agree to a search by a male officer.', 'पुरुष अधिकारी द्वारा तलाशी के लिए सहमत न हों।', 'పురుష అధికారి సోదాకు అంగీకరించకండి.'),
        why: t('A woman may only be searched by another female (BNSS §49(2)).', 'महिला की तलाशी केवल दूसरी महिला कर सकती है (बीएनएसएस §49(2))।', 'స్త్రీని మరో స్త్రీ మాత్రమే సోదా చేయాలి (BNSS §49(2)).')
      },
      {
        id: 'w-avoid-2',
        text: t('Do not stay silent if you feel unsafe — seek help.', 'असुरक्षित महसूस होने पर चुप न रहें — मदद माँगें।', 'భద్రతగా అనిపించకపోతే మౌనంగా ఉండకండి — సహాయం అడగండి.'),
        why: t('The 181 helpline and women help desks exist to assist you.', '181 हेल्पलाइन और महिला हेल्प डेस्क आपकी सहायता के लिए हैं।', '181 హెల్ప్లైన్, మహిళా హెల్ప్ డెస్క్లు మీ కోసం ఉన్నాయి.')
      },
      {
        id: 'w-avoid-3',
        text: t('Do not sign a statement you have not read and understood.', 'बिना पढ़े-समझे बयान पर हस्ताक्षर न करें।', 'చదవకుండా, అర్థం చేసుకోకుండా వాంగ్మూలంపై సంతకం చేయకండి.'),
        why: t('A lawyer can review it first; a signed statement may be used later.', 'पहले वकील से दिखाएँ; हस्ताक्षरित बयान बाद में इस्तेमाल हो सकता है।', 'ముందుగా న్యాయవాదితో చూపించండి; సంతకం చేసిన ప్రకటన తర్వాత ఉపయోగించవచ్చు.')
      }
    ],
    evidence: [
      {
        id: 'w-ev-1',
        text: t('Note the officer’s name, badge number, place and time.', 'अधिकारी का नाम, बैज नंबर, स्थान और समय नोट करें।', 'అధికారి పేరు, బ్యాడ్జ్ నంబర్, ప్రదేశం, సమయం గమనించండి.'),
        why: t('It helps later if you need to complain or give an account.', 'बाद में शिकायत या विवरण देने में मदद करता है।', 'తర్వాత ఫిర్యాదు చేయాల్సి వస్తే ఉపయోగపడుతుంది.')
      },
      {
        id: 'w-ev-2',
        text: t('If searched, note whether a woman officer performed the search.', 'तलाशी हो तो नोट करें कि क्या महिला अधिकारी ने तलाशी ली।', 'సోదా జరిగితే మహిళా అధికారి చేశారా లేదా గమనించండి.'),
        why: t('A woman may only be searched by another female (BNSS §49(2)).', 'महिला की तलाशी केवल दूसरी महिला कर सकती है (बीएनएसएस §49(2))।', 'స్త్రీని మరో స్త్రీ మాత్రమే సోదా చేయాలి (BNSS §49(2)).')
      },
      {
        id: 'w-ev-3',
        text: t('If arrested at night, note the time and whether a Magistrate’s permission was obtained.', 'रात में गिरफ़्तारी हो तो समय नोट करें और देखें कि मजिस्ट्रेट की अनुमति ली गई थी या नहीं।', 'రాత్రి అరెస్ట్ అయితే సమయం, మేజిస్ట్రేట్ అనుమతి పొందారా గమనించండి.'),
        why: t('Night arrest of a woman without prior permission is a violation of BNSS §43(5).', 'बिना मजिस्ट्रेट की अनुमति महिला की रात्रि गिरफ़्तारी बीएनएसएस §43(5) का उल्लंघन है।', 'ముందస్తు అనుమతి లేకుండా స్త్రీని రాత్రి అరెస్ట్ చేయడం BNSS §43(5) ఉల్లంఘన.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — interacting with police as a woman', 'आप यहाँ हैं — महिला के रूप में पुलिस से बातचीत', 'మీరు ఇక్కడ ఉన్నారు — స్త్రీగా పోలీసులతో వ్యవహారం') },
      { label: t('Search, if any, by a woman officer', 'तलाशी, यदि हो, महिला अधिकारी द्वारा', 'సోదా, ఉంటే, మహిళా అధికారి ద్వారా'), note: t('BNSS §49(2)', 'बीएनएसएस §49(2)', 'BNSS §49(2)') },
      { label: t('Questioning, if any, at your residence', 'पूछताछ, यदि हो, आपके निवास पर', 'ప్రశ్నలు, ఉంటే, మీ నివాసంలో'), note: t('BNSS §179', 'बीएनएसएस §179', 'BNSS §179') },
      { label: t('If arrested — grounds told, relative informed, produced within 24 hours', 'गिरफ़्तारी पर — कारण, परिवार को सूचना, 24 घंटे में पेशी', 'అరెస్ట్ అయితే — కారణాలు, బంధువుకు సమాచారం, 24 గంటల్లో హాజరు'), note: t('Art. 22 · BNSS §47, §48, §57', 'अनु. 22 · बीएनएसएस §47, §48, §57', 'ఆర్టి. 22 · BNSS §47, §48, §57'), linkTo: 'arrested' },
      { label: t('Free legal aid if needed', 'ज़रूरत पर निःशुल्क कानूनी सहायता', 'అవసరమైతే ఉచిత న్యాయ సహాయం'), note: t('NALSA / Legal Services Authorities', 'नालसा / कानूनी सेवा प्राधिकरण', 'NALSA / న్యాయ సేవా అథారిటీలు') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'w-cr-1',
        phone: '181',
        route: t('Senior police officer / women help desk escalation', 'वरिष्ठ पुलिस अधिकारी / महिला हेल्प डेस्क शिकायत', 'సీనియర్ పోలీసు అధికారి / మహిళా హెల్ప్ డెస్క్ ఫిర్యాదు'),
        whyItMayApply: t('If your protections were ignored — e.g., a male officer searched you or you were arrested at night without permission.', 'यदि आपकी सुरक्षा अनदेखी हुई — जैसे पुरुष अधिकारी ने तलाशी ली या बिना अनुमति रात में गिरफ़्तारी।', 'మీ రక్షణలను పట్టించుకోకపోతే — ఉదా. పురుష అధికారి సోదా లేదా అనుమతి లేకుండా రాత్రి అరెస్ట్.'),
        whatToPrepare: t('Date, time, place, officer details, and a written account of what happened.', 'तारीख़, समय, स्थान, अधिकारी का विवरण और घटना का लिखित विवरण।', 'తేదీ, సమయం, ప్రదేశం, అధికారి వివరాలు, జరిగిన దాని వ్రాతపూర్వక వివరణ.'),
        legalBasis: 'BNSS §43, §49(2), §179',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss', 'constitution', 'mha'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     10. PROLONGED DETENTION
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'PROLONGED_DETENTION',
    slug: 'detained-longer-than-24-hours',
    icon: 'clock',
    title: t('I have been detained for a long time', 'मुझे लंबे समय से हिरासत में रखा गया है', 'నన్ను ఎక్కువ కాలం నిర్బంధంలో ఉంచారు'),
    shortTitle: t('Detained for a long time', 'लंबी हिरासत', 'దీర్ఘ నిర్బంధం'),
    description: t(
      'You have been held by the police for more than 24 hours, or your detention has continued for days without you being produced before a Magistrate.',
      'आपको 24 घंटे से अधिक समय से पुलिस हिरासत में रखा गया है, या बिना मजिस्ट्रेट के सामने पेश किए कई दिनों से हिरासत जारी है।',
      'మిమ్మల్ని 24 గంటల కంటే ఎక్కువ పోలీసులు నిర్బంధించారు, లేదా మేజిస్ట్రేట్ ముందు హాజరుపరచకుండా రోజుల తరబడి నిర్బంధం కొనసాగుతోంది.'
    ),
    urgency: 'high',
    summary: t(
      'No one can be held in police custody beyond 24 hours without a Magistrate’s order. Continued detention is only lawful through remand ordered by a Magistrate. If you were not produced within 24 hours, were not told the grounds, or your family was not informed, these are serious violations with legal remedies — including habeas corpus for unlawful detention.',
      'मजिस्ट्रेट के आदेश के बिना 24 घंटे से अधिक पुलिस हिरासत में कोई नहीं रखा जा सकता। लंबी हिरासत केवल मजिस्ट्रेट द्वारा आदेशित रिमांड से ही कानूनी है। यदि आपको 24 घंटे में पेश नहीं किया गया, कारण नहीं बताए गए, या परिवार को सूचना नहीं दी गई — ये गंभीर उल्लंघन हैं और इनके कानूनी उपाय हैं, जिनमें अवैध हिरासत के लिए बंदी प्रत्यक्षीकरण शामिल है।',
      'మేజిస్ట్రేట్ ఆదేశం లేకుండా 24 గంటలకు మించి ఎవరినీ పోలీసు నిర్బంధంలో ఉంచలేరు. మేజిస్ట్రేట్ ఆదేశించిన రిమాండ్ ద్వారా మాత్రమే కొనసాగింపు నిర్బంధం చట్టబద్ధం. 24 గంటల్లో హాజరుపరచకపోతే, కారణాలు చెప్పకపోతే, కుటుంబానికి తెలియజేయకపోతే — ఇవి తీవ్రమైన ఉల్లంఘనలు; చట్టపరమైన పరిహారాలు ఉన్నాయి — చట్టవిరుద్ధ నిర్బంధానికి హేబియస్ కార్పస్ సహా.'
    ),
    immediateActions: [
      t('Ask to be produced before a Magistrate if you have been held beyond 24 hours.', '24 घंटे से अधिक हिरासत में रखे जाने पर मजिस्ट्रेट के सामने पेशी की माँग करें।', '24 గంటలు దాటితే మేజిస్ట్రేట్ ముందు హాజరుపరచమని అడగండి.'),
      t('Ask again for the grounds of detention and to inform a relative or friend.', 'हिरासत के कारण और परिवार/मित्र को सूचित करने के लिए फिर अनुरोध करें।', 'నిర్బంధ కారణాలు మరియు బంధువు/స్నేహితుడికి తెలియజేయమని మళ్లీ అడగండి.'),
      t('Insist on meeting a lawyer — free legal aid is available for eligible persons.', 'वकील से मिलने पर ज़ोर दें — पात्र व्यक्तियों के लिए निःशुल्क कानूनी सहायता उपलब्ध है।', 'న్యాయవాదిని కలవాలని పట్టుబట్టండి — అర్హులకు ఉచిత న్యాయ సహాయం అందుబాటులో ఉంది.'),
      t('Ask for medical help if you have been injured, and get it recorded.', 'चोट लगने पर चिकित्सा सहायता माँगें और उसे दर्ज कराएँ।', 'గాయమైతే వైద్య సహాయం అడిగి నమోదు చేయించుకోండి.'),
      t('Ask a relative to note the time of arrest and your location.', 'परिवार से गिरफ़्तारी का समय और आपका स्थान नोट करने को कहें।', 'బంధువును అరెస్ట్ సమయం, మీ స్థానం గమనించమని అడగండి.')
    ],
    rights: [
      {
        id: 'pd-right-24h',
        title: t('To be produced before a Magistrate within 24 hours', '24 घंटे के भीतर मजिस्ट्रेट के सामने पेश होने का अधिकार', '24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరయ్యే హక్కు'),
        whatThisMeans: t(
          'A person arrested must be brought before the nearest Magistrate or the officer in charge of a police station without unnecessary delay, and cannot be detained beyond 24 hours (excluding travel time) without a Magistrate’s order.',
          'गिरफ़्तार व्यक्ति को बिना अनुचित देरी निकटतम मजिस्ट्रेट या थाना प्रभारी के सामने लाया जाना चाहिए, और मजिस्ट्रेट के आदेश के बिना 24 घंटे (यात्रा समय छोड़कर) से अधिक हिरासत नहीं हो सकती।',
          'అరెస్ట్ అయిన వ్యక్తిని ఆలస్యం లేకుండా దగ్గరి మేజిస్ట్రేట్ లేదా స్టేషన్ ఇన్ఛార్జ్ ముందు తీసుకురావాలి; మేజిస్ట్రేట్ ఆదేశం లేకుండా 24 గంటలు (ప్రయాణ సమయం మినహా) మించి నిర్బంధించలేరు.'
        ),
        legalBasis: 'Constitution of India, Article 22(2) · BNSS §57, §58',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'pd-right-remand',
        title: t('Continued detention only by a Magistrate’s order (remand)', 'मजिस्ट्रेट के आदेश (रिमांड) से ही लंबी हिरासत', 'మేజిస్ట్రేట్ ఆదేశం (రిమాండ్)తోనే కొనసాగింపు నిర్బంధం'),
        whatThisMeans: t(
          'When an investigation cannot be completed in 24 hours, the accused must be produced before a Magistrate, who may authorise further detention. Detention without such an order is unlawful.',
          'जब जाँच 24 घंटे में पूरी न हो, तो आरोपी को मजिस्ट्रेट के सामने पेश करना होता है, जो आगे की हिरासत की अनुमति दे सकते हैं। ऐसे आदेश के बिना हिरासत अवैध है।',
          'దర్యాప్తు 24 గంటల్లో పూర్తి కాకపోతే నిందితుడిని మేజిస్ట్రేట్ ముందు హాజరుపరచాలి; వారు మరింత నిర్బంధానికి అనుమతించవచ్చు. అటువంటి ఆదేశం లేకుండా నిర్బంధం చట్టవిరుద్ధం.'
        ),
        legalBasis: 'BNSS §187',
        sourceIds: ['bnss']
      },
      {
        id: 'pd-right-defaultbail',
        title: t('To default bail if investigation is not completed in 60/90 days', '60/90 दिनों में जाँच पूरी न होने पर डिफ़ॉल्ट ज़मानत का अधिकार', '60/90 రోజుల్లో దర్యాప్తు పూర్తి కాకపోతే డిఫాల్ట్ బెయిల్ హక్కు'),
        whatThisMeans: t(
          'If the investigation is not completed and no police report is filed within the prescribed period (60 days for lesser offences, 90 days for serious ones), the accused is entitled to be released on bail.',
          'यदि निर्धारित अवधि (कम अपराधों के लिए 60 दिन, गंभीर अपराधों के लिए 90 दिन) में जाँच पूरी नहीं होती और पुलिस रिपोर्ट दर्ज नहीं होती, तो आरोपी ज़मानत पर छोड़े जाने का हकदार है।',
          'నిర్దేశిత కాలం (తక్కువ నేరాలకు 60 రోజులు, తీవ్రమైన వాటికి 90 రోజులు)లో దర్యాప్తు పూర్తి కాక, పోలీసు నివేదిక దాఖలు కాకపోతే నిందితుడు బెయిల్పై విడుదలకు అర్హుడు.'
        ),
        legalBasis: 'BNSS §187(3)',
        sourceIds: ['bnss']
      },
      {
        id: 'pd-right-grounds',
        title: t('To know the grounds and to have a relative informed', 'कारण जानने और परिवार को सूचित कराने का अधिकार', 'కారణాలు తెలుసుకునే, బంధువుకు సమాచారం ఇప్పించే హక్కు'),
        whatThisMeans: t(
          'You must be told why you are detained, the police must inform a relative or friend of your whereabouts, and you may meet a lawyer during interrogation.',
          'आपको बताना होगा कि आपको क्यों रखा गया है, पुलिस को आपके परिवार/मित्र को आपका स्थान बताना होगा, और पूछताछ के दौरान आप वकील से मिल सकते हैं।',
          'ఎందుకు నిర్బంధించారో చెప్పాలి; పోలీసులు మీ బంధువు/స్నేహితుడికి మీ స్థానం తెలియజేయాలి; విచారణలో న్యాయవాదిని కలవవచ్చు.'
        ),
        legalBasis: 'Constitution of India, Article 22(1) · BNSS §47, §48, §38',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'pd-right-habeas',
        title: t('To seek habeas corpus for unlawful detention', 'अवैध हिरासत के लिए बंदी प्रत्यक्षीकरण का अधिकार', 'చట్టవిరుద్ధ నిర్బంధానికి హేబియస్ కార్పస్ హక్కు'),
        whatThisMeans: t(
          'If you believe the detention is unlawful, you or your family can approach the High Court or the Supreme Court for a writ of habeas corpus, which requires the detaining authority to justify the detention in court.',
          'यदि हिरासत अवैध लगती है, तो आप या आपका परिवार उच्च न्यायालय या सर्वोच्च न्यायालय में बंदी प्रत्यक्षीकरण याचिका दायर कर सकते हैं, जिसमें हिरासत का औचित्य न्यायालय में सिद्ध करना होता है।',
          'నిర్బంధం చట్టవిరుద్ధమని భావిస్తే మీరు లేదా కుటుంబం హైకోర్టు లేదా సుప్రీంకోర్టులో హేబియస్ కార్పస్ పిటిషన్ దాఖలు చేయవచ్చు; దానిలో నిర్బంధాన్ని కోర్టులో సమర్థించాలి.'
        ),
        legalBasis: 'Constitution of India, Articles 32, 226',
        sourceIds: ['constitution']
      },
      {
        id: 'pd-right-medical',
        title: t('To medical examination', 'चिकित्सा परीक्षण का अधिकार', 'వైద్య పరీక్ష హక్కు'),
        whatThisMeans: t(
          'An arrested person may be examined by a medical officer on request, and police may have an accused examined by a medical practitioner. Ask for medical help if you have been injured.',
          'गिरफ़्तार व्यक्ति की अनुरोध पर चिकित्सा अधिकारी द्वारा जाँच हो सकती है, और पुलिस चिकित्सक से जाँच करा सकती है। चोट लगने पर चिकित्सा सहायता माँगें।',
          'అరెస్ట్ అయిన వ్యక్తిని అభ్యర్థన మేరకు వైద్య అధికారి పరీక్షించవచ్చు; పోలీసులు వైద్యుని ద్వారా పరీక్ష చేయించవచ్చు. గాయమైతే వైద్య సహాయం అడగండి.'
        ),
        legalBasis: 'BNSS §51, §53',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'pd-do-1',
        text: t('Keep asking for the grounds of detention and for a lawyer — repeat it clearly.', 'हिरासत के कारण और वकील की माँग दोहराते रहें — स्पष्ट रूप से।', 'నిర్బంధ కారణాలు, న్యాయవాది కోసం స్పష్టంగా పదే పదే అడుగుతూ ఉండండి.'),
        why: t('It creates a record and triggers the police’s legal duties.', 'इससे रिकॉर्ड बनता है और पुलिस के कानूनी कर्तव्य सक्रिय होते हैं।', 'ఇది రికార్డు సృష్టిస్తుంది, పోలీసుల చట్టపరమైన విధులు ప్రేరేపిస్తుంది.')
      },
      {
        id: 'pd-do-2',
        text: t('Ask a family member to contact a lawyer or the Legal Services Authority.', 'परिवार से वकील या कानूनी सेवा प्राधिकरण से संपर्क करने को कहें।', 'కుటుంబ సభ్యుడిని న్యాయవాది లేదా న్యాయ సేవా అథారిటీని సంప్రదించమని అడగండి.'),
        why: t('Legal aid is free for eligible persons and can move the court quickly.', 'पात्र व्यक्तियों के लिए कानूनी सहायता निःशुल्क है और तुरंत न्यायालय जा सकती है।', 'అర్హులకు న్యాయ సహాయం ఉచితం; కోర్టును త్వరగా ఆశ్రయించవచ్చు.')
      },
      {
        id: 'pd-do-3',
        text: t('If injured, ask for medical examination and that it be recorded.', 'चोट हो तो चिकित्सा परीक्षण और उसके रिकॉर्ड की माँग करें।', 'గాయమైతే వైద్య పరీక్ష మరియు నమోదు కోసం అడగండి.'),
        why: t('Medical records matter for your safety and for any later complaint.', 'चिकित्सा रिकॉर्ड आपकी सुरक्षा और बाद की शिकायत के लिए महत्वपूर्ण हैं।', 'వైద్య రికార్డులు మీ భద్రతకు, తర్వాతి ఫిర్యాదుకు ముఖ్యం.')
      },
      {
        id: 'pd-do-4',
        text: t('Note the dates: when you were arrested and when you were produced.', 'तारीख़ें नोट करें: कब गिरफ़्तार हुए और कब पेश हुए।', 'తేదీలు గమనించండి: ఎప్పుడు అరెస్ట్, ఎప్పుడు హాజరు.'),
        why: t('These dates determine whether the 24-hour rule and default-bail periods were respected.', 'ये तारीख़ें तय करती हैं कि 24 घंटे का नियम और डिफ़ॉल्ट ज़मानत अवधि पूरी हुई या नहीं।', 'ఈ తేదీలే 24 గంటల నియమం, డిఫాల్ట్ బెయిల్ కాలాలు పాటించబడ్డాయో లేదో నిర్ణయిస్తాయి.')
      }
    ],
    avoid: [
      {
        id: 'pd-avoid-1',
        text: t('Do not lose hope after the first 24 hours — the law gives continuing remedies.', 'पहले 24 घंटे के बाद हार न मानें — कानून निरंतर उपाय देता है।', 'మొదటి 24 గంటల తర్వాత ఆశ వదులుకోకండి — చట్టం నిరంతర పరిహారాలు ఇస్తుంది.'),
        why: t('Remand, default bail and habeas corpus remain available.', 'रिमांड, डिफ़ॉल्ट ज़मानत और बंदी प्रत्यक्षीकरण उपलब्ध रहते हैं।', 'రిమాండ్, డిఫాల్ట్ బెయిల్, హేబియస్ కార్పస్ అందుబాటులో ఉంటాయి.')
      },
      {
        id: 'pd-avoid-2',
        text: t('Do not sign statements under pressure without your lawyer’s review.', 'दबाव में बिना वकील की सलाह बयान पर हस्ताक्षर न करें।', 'ఒత్తిడిలో న్యాయవాది సలహా లేకుండా ప్రకటనలపై సంతకం చేయకండి.'),
        why: t('What you sign can be used later; a lawyer should see it first.', 'हस्ताक्षरित बात बाद में इस्तेमाल हो सकती है; पहले वकील को दिखाएँ।', 'మీరు సంతకం చేసినది తర్వాత ఉపయోగించవచ్చు; ముందు న్యాయవాదికి చూపించాలి.')
      },
      {
        id: 'pd-avoid-3',
        text: t('Do not reveal phone passwords under pressure without legal advice.', 'दबाव में बिना कानूनी सलाह फोन का पासवर्ड न बताएँ।', 'ఒత్తిడిలో న్యాయ సలహా లేకుండా ఫోన్ పాస్వర్డ్ చెప్పకండి.'),
        why: t('What you reveal can be used in the case; get advice first.', 'आप जो बताते हैं वह मामले में इस्तेमाल हो सकता है; पहले सलाह लें।', 'మీరు చెప్పినది కేసులో ఉపయోగించవచ్చు; ముందు సలహా తీసుకోండి.')
      }
    ],
    evidence: [
      {
        id: 'pd-ev-1',
        text: t('Note the dates: when you were arrested and when you were produced.', 'तारीख़ें नोट करें: कब गिरफ़्तार हुए और कब पेश हुए।', 'తేదీలు గమనించండి: ఎప్పుడు అరెస్ట్, ఎప్పుడు హాజరు.'),
        why: t('These dates determine whether the 24-hour rule and default-bail periods were respected.', 'ये तारीख़ें तय करती हैं कि 24 घंटे का नियम और डिफ़ॉल्ट ज़मानत अवधि पूरी हुई या नहीं।', 'ఈ తేదీలే 24 గంటల నియమం, డిఫాల్ట్ బెయిల్ కాలాలు పాటించబడ్డాయో లేదో నిర్ణయిస్తాయి.')
      },
      {
        id: 'pd-ev-2',
        text: t('Ask a relative to note the time of arrest and your location.', 'परिवार से गिरफ़्तारी का समय और आपका स्थान नोट करने को कहें।', 'బంధువును అరెస్ట్ సమయం, మీ స్థానం గమనించమని అడగండి.'),
        why: t('A family record helps the lawyer and any petition.', 'परिवार का रिकॉर्ड वकील और किसी याचिका में मदद करता है।', 'కుటుంబ రికార్డు న్యాయవాదికి, ఏ పిటిషన్కైనా ఉపయోగపడుతుంది.')
      },
      {
        id: 'pd-ev-3',
        text: t('Keep any medical record if you were injured.', 'चोट लगने पर चिकित्सा रिकॉर्ड रखें।', 'గాయమైతే వైద్య రికార్డు ఉంచుకోండి.'),
        why: t('Medical records matter for your safety and any later complaint.', 'चिकित्सा रिकॉर्ड आपकी सुरक्षा और बाद की शिकायत के लिए महत्वपूर्ण हैं।', 'వైద్య రికార్డులు మీ భద్రతకు, తర్వాతి ఫిర్యాదుకు ముఖ్యం.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — held beyond 24 hours', 'आप यहाँ हैं — 24 घंटे से अधिक हिरासत', 'మీరు ఇక్కడ ఉన్నారు — 24 గంటలకు మించి నిర్బంధం') },
      { label: t('Produced before a Magistrate (mandatory)', 'मजिस्ट्रेट के सामने पेशी (अनिवार्य)', 'మేజిస్ట్రేట్ ముందు హాజరు (తప్పనిసరి)'), note: t('Art. 22(2) · BNSS §57, §58', 'अनु. 22(2) · बीएनएसएस §57, §58', 'ఆర్టి. 22(2) · BNSS §57, §58') },
      { label: t('Remand by Magistrate, or release', 'मजिस्ट्रेट द्वारा रिमांड या रिहाई', 'మేజిస్ట్రేట్ రిమాండ్ లేదా విడుదల'), note: t('BNSS §187', 'बीएनएसएस §187', 'BNSS §187') },
      { label: t('Default bail if no police report in 60/90 days', '60/90 दिनों में रिपोर्ट न होने पर डिफ़ॉल्ट ज़मानत', '60/90 రోజుల్లో నివేదిక లేకపోతే డిఫాల్ట్ బెయిల్'), note: t('BNSS §187(3)', 'बीएनएसएस §187(3)', 'BNSS §187(3)') },
      { label: t('Habeas corpus for unlawful detention', 'अवैध हिरासत पर बंदी प्रत्यक्षीकरण', 'చట్టవిరుద్ధ నిర్బంధానికి హేబియస్ కార్పస్'), note: t('Art. 32, 226', 'अनु. 32, 226', 'ఆర్టి. 32, 226') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'pd-cr-1',
        phone: '15100',
        route: t('Lawyer / Legal Services Authority → court (bail, habeas corpus)', 'वकील / कानूनी सेवा प्राधिकरण → न्यायालय (ज़मानत, बंदी प्रत्यक्षीकरण)', 'న్యాయవాది / న్యాయ సేవా అథారిటీ → కోర్టు (బెయిల్, హేబియస్ కార్పస్)'),
        whyItMayApply: t('If the 24-hour rule was violated or the detention is unlawful.', 'यदि 24 घंटे का नियम टूटा या हिरासत अवैध है।', '24 గంటల నియమం ఉల్లంఘించబడితే లేదా నిర్బంధం చట్టవిరుద్ధమైతే.'),
        whatToPrepare: t('Dates and times of arrest and production, and any record of requests made.', 'गिरफ़्तारी और पेशी की तारीख़ें-समय, और किए गए अनुरोधों का रिकॉर्ड।', 'అరెస్ట్, హాజరు తేదీలు-సమయాలు, చేసిన అభ్యర్థనల రికార్డు.'),
        legalBasis: 'Art. 22(2), 32, 226 · BNSS §187',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'pd-cr-2',
        phone: '14433',
        route: t('NHRC / State Human Rights Commission', 'एनएचआरसी / राज्य मानवाधिकार आयोग', 'NHRC / రాష్ట్ర మానవ హక్కుల కమిషన్'),
        whyItMayApply: t('For custodial violence or serious violations connected with the detention.', 'हिरासत से जुड़ी हिंसा या गंभीर उल्लंघन के लिए।', 'నిర్బంధానికి సంబంధించిన హింస లేదా తీవ్రమైన ఉల్లంఘనలకు.'),
        whatToPrepare: t('Incident details, medical records, witnesses — after legal advice.', 'घटना विवरण, चिकित्सा रिकॉर्ड, गवाह — कानूनी सलाह के बाद।', 'సంఘటన వివరాలు, వైద్య రికార్డులు, సాక్షులు — న్యాయ సలహా తర్వాత.'),
        officialUrl: 'https://nhrc.nic.in/',
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      }
    ],
    sourceIds: ['bnss', 'constitution', 'lsaa'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     11. POLICE REFUSED TO HELP WITH A COMPLAINT
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'POLICE_REFUSED_HELP',
    slug: 'police-refused-to-help',
    icon: 'userX',
    title: t('Police refused to help with my complaint', 'पुलिस ने मेरी शिकायत पर मदद करने से मना किया', 'పోలీసులు నా ఫిర్యాదుకు సహాయం చేయడానికి నిరాకరించారు'),
    shortTitle: t('Police refused to help', 'पुलिस ने मदद नहीं की', 'పోలీసులు సహాయం చేయలేదు'),
    description: t(
      'You approached the police with a complaint — about an offence, a dispute, or harassment — and they refused to act, said it is not their job, or did nothing.',
      'आपने पुलिस के पास शिकायत लेकर गए — किसी अपराध, विवाद या उत्पीड़न के बारे में — और उन्होंने कार्रवाई से इनकार कर दिया, कहा कि यह उनका काम नहीं है, या कुछ नहीं किया।',
      'మీరు ఫిర్యాదుతో పోలీసుల దగ్గరకు వెళ్లారు — నేరం, వివాదం లేదా వేధింపు గురించి — వారు చర్య తీసుకోవడానికి నిరాకరించారు, తమ పని కాదన్నారు లేదా ఏమీ చేయలేదు.'
    ),
    urgency: 'medium',
    summary: t(
      'The police cannot simply ignore information about an offence. For a cognizable offence, information must be recorded as an FIR; for a non-cognizable matter, the officer must record it and direct you to the Magistrate. If they refuse to act, there are escalation routes — higher police authorities and the Magistrate.',
      'पुलिस किसी अपराध की सूचना को अनदेखा नहीं कर सकती। संज्ञेय अपराध के लिए सूचना एफआईआर के रूप में दर्ज होनी चाहिए; गैर-संज्ञेय मामले में अधिकारी उसे दर्ज कर मजिस्ट्रेट के पास भेजने के लिए कहता है। इनकार पर उपाय हैं — वरिष्ठ पुलिस अधिकारी और मजिस्ट्रेट।',
      'పోలీసులు నేర సమాచారాన్ని విస్మరించలేరు. సంజ్ఞేయ నేరానికి సమాచారం ఎఫ్ఐఆర్గా నమోదు కావాలి; సంజ్ఞేయం కాని విషయంలో అధికారి దాన్ని నమోదు చేసి మేజిస్ట్రేట్ వద్దకు పంపాలి. నిరాకరిస్తే పరిహార మార్గాలు ఉన్నాయి — ఉన్నత పోలీసు అధికారులు, మేజిస్ట్రేట్.'
    ),
    immediateActions: [
      t('Give your complaint in writing and keep a dated copy.', 'अपनी शिकायत लिखित में दें और तारीख़युक्त प्रति रखें।', 'మీ ఫిర్యాదు వ్రాతపూర్వకంగా ఇచ్చి తేదీతో కూడిన కాపీ ఉంచుకోండి.'),
      t('Ask whether your matter is cognizable or non-cognizable, and what the officer will record.', 'पूछें कि आपका मामला संज्ञेय है या गैर-संज्ञेय, और अधिकारी क्या दर्ज करेगा।', 'మీ విషయం సంజ్ఞేయమా కాదా, అధికారి ఏమి నమోదు చేస్తారో అడగండి.'),
      t('Note the name and rank of the officer who refused to act.', 'कार्रवाई से इनकार करने वाले अधिकारी का नाम और पद नोट करें।', 'చర్యకు నిరాకరించిన అధికారి పేరు, హోదా గమనించండి.'),
      t('Approach the Superintendent of Police or higher authority with your written complaint.', 'अपनी लिखित शिकायत लेकर पुलिस अधीक्षक या वरिष्ठ अधिकारी के पास जाएँ।', 'మీ వ్రాతపూర్వక ఫిర్యాదుతో సూపరింటెండెంట్ లేదా ఉన్నత అధికారిని సంప్రదించండి.'),
      t('If still refused, complain to the Magistrate.', 'फिर भी इनकार हो तो मजिस्ट्रेट से शिकायत करें।', 'ఇంకా నిరాకరిస్తే మేజిస్ట్రేట్కు ఫిర్యాదు చేయండి.')
    ],
    rights: [
      {
        id: 'prh-right-cognizable',
        title: t('Information about a cognizable offence must be recorded (FIR)', 'संज्ञेय अपराध की सूचना दर्ज कराने का अधिकार (एफआईआर)', 'సంజ్ఞేయ నేర సమాచారం నమోదు చేయించుకునే హక్కు (ఎఫ్ఐఆర్)'),
        whatThisMeans: t(
          'When information is given about a cognizable offence, the police are required to record it. If they refuse, the FIR-refused guide explains your remedies.',
          'संज्ञेय अपराध की सूचना मिलने पर पुलिस उसे दर्ज करने के लिए बाध्य है। इनकार पर एफआईआर इनकार गाइड में उपाय बताए गए हैं।',
          'సంజ్ఞేయ నేర సమాచారం ఇస్తే పోలీసులు నమోదు చేయాలి. నిరాకరిస్తే ఎఫ్ఐఆర్ నిరాకరణ గైడ్లో పరిహారాలు వివరించబడ్డాయి.'
        ),
        legalBasis: 'BNSS §173',
        sourceIds: ['bnss']
      },
      {
        id: 'prh-right-noncognizable',
        title: t('A non-cognizable complaint must still be recorded and directed to the Magistrate', 'गैर-संज्ञेय शिकायत दर्ज कर मजिस्ट्रेट की ओर निर्देशित कराने का अधिकार', 'సంజ్ఞేయం కాని ఫిర్యాదు నమోదు చేయించి మేజిస్ట్రేట్ వైపు పంపించే హక్కు'),
        whatThisMeans: t(
          'Even when an offence is non-cognizable, the officer must record the information and direct the complainant to the Magistrate. Police cannot simply say “nothing can be done”.',
          'गैर-संज्ञेय अपराध होने पर भी अधिकारी सूचना दर्ज करता है और शिकायतकर्ता को मजिस्ट्रेट के पास भेजता है। पुलिस सिर्फ़ “कुछ नहीं हो सकता” नहीं कह सकती।',
          'సంజ్ఞేయం కాని నేరమైనా అధికారి సమాచారం నమోదు చేసి ఫిర్యాదుదారుని మేజిస్ట్రేట్ వద్దకు పంపాలి. పోలీసులు "ఏమీ చేయలేం" అని మాత్రమే చెప్పలేరు.'
        ),
        legalBasis: 'BNSS §174',
        sourceIds: ['bnss']
      },
      {
        id: 'prh-right-magistrate',
        title: t('To complain to the Magistrate when police do not act', 'पुलिस के निष्क्रिय रहने पर मजिस्ट्रेट से शिकायत का अधिकार', 'పోలీసులు చర్య తీసుకోకపోతే మేజిస్ట్రేట్కు ఫిర్యాదు చేసే హక్కు'),
        whatThisMeans: t(
          'If the police refuse or fail to act on your information, you can complain to the Magistrate, who may order an investigation.',
          'यदि पुलिस आपकी सूचना पर कार्रवाई से इनकार करती है, तो आप मजिस्ट्रेट से शिकायत कर सकते हैं, जो जाँच का आदेश दे सकते हैं।',
          'పోలీసులు మీ సమాచారంపై చర్య తీసుకోకపోతే మీరు మేజిస్ట్రేట్కు ఫిర్యాదు చేయవచ్చు; వారు దర్యాప్తు ఆదేశించవచ్చు.'
        ),
        legalBasis: 'BNSS §175(3)',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'prh-do-1',
        text: t('Write your complaint in your own words with dates before you go.', 'जाने से पहले अपनी शिकायत तारीख़ों सहित अपने शब्दों में लिखें।', 'వెళ్లే ముందు మీ ఫిర్యాదును తేదీలతో మీ మాటల్లో రాయండి.'),
        why: t('A written record with dates makes every escalation stronger.', 'तारीख़ों सहित लिखित रिकॉर्ड हर अपील को मज़बूत बनाता है।', 'తేదీలతో వ్రాతపూర్వక రికార్డు ప్రతి అప్పీల్ను బలపరుస్తుంది.')
      },
      {
        id: 'prh-do-2',
        text: t('Ask the officer to record the information and give you a copy.', 'अधिकारी से सूचना दर्ज कर प्रति देने को कहें।', 'అధికారిని సమాచారం నమోదు చేసి కాపీ ఇవ్వమని అడగండి.'),
        why: t('The copy is your proof that the matter was brought to the police.', 'प्रति इस बात का प्रमाण है कि मामला पुलिस के पास लाया गया।', 'కాపీ అనేది విషయం పోలీసుల దృష్టికి వెళ్లిందన్న నిదర్శనం.')
      },
      {
        id: 'prh-do-3',
        text: t('Escalate in writing: Superintendent of Police, then the Magistrate if needed.', 'लिखित रूप में अपील करें: पुलिस अधीक्षक, फिर ज़रूरत पर मजिस्ट्रेट।', 'వ్రాతపూర్వకంగా పై స్థాయికి వెళ్లండి: సూపరింటెండెంట్, అవసరమైతే మేజిస్ట్రేట్.')
      },
      {
        id: 'prh-do-4',
        text: t('Take legal aid help if the process feels difficult.', 'प्रक्रिया कठिन लगे तो कानूनी सहायता लें।', 'ప్రక్రియ కష్టంగా అనిపిస్తే న్యాయ సహాయం తీసుకోండి.')
      }
    ],
    avoid: [
      {
        id: 'prh-avoid-1',
        text: t('Do not give up after one refusal — the law gives you higher authorities and the Magistrate.', 'एक इनकार पर हार न मानें — कानून वरिष्ठ अधिकारियों और मजिस्ट्रेट का उपाय देता है।', 'ఒక్క నిరాకరణతో వదులుకోకండి — చట్టం ఉన్నత అధికారులు, మేజిస్ట్రేట్ పరిహారాలిస్తుంది.'),
        why: t('Recording and investigation duties are legal obligations, not choices.', 'दर्ज करना और जाँच करना कानूनी दायित्व है, विकल्प नहीं।', 'నమోదు, దర్యాప్తు చట్టపరమైన బాధ్యతలు, ఐచ్ఛికం కాదు.')
      },
      {
        id: 'prh-avoid-2',
        text: t('Do not exaggerate or fabricate facts.', 'तथ्यों को बढ़ा-चढ़ाकर या गढ़कर न बताएँ।', 'వాస్తవాలను అతిశయోక్తి చేయకండి లేదా కల్పించకండి.'),
        why: t('Accuracy keeps your complaint credible and protects you.', 'सटीकता शिकायत को विश्वसनीय और आपको सुरक्षित रखती है।', 'ఖచ్చితత్వం ఫిర్యాదును నమ్మదగినదిగా, మిమ్మల్ని సురక్షితంగా ఉంచుతుంది.')
      },
      {
        id: 'prh-avoid-3',
        text: t('Do not argue aggressively at the station — keep a calm written record.', 'थाने में आक्रामक बहस न करें — शांत लिखित रिकॉर्ड रखें।', 'స్టేషన్లో దూకుడుగా వాదించకండి — ప్రశాంతమైన వ్రాతపూర్వక రికార్డు ఉంచుకోండి.'),
        why: t('A written trail serves you better than a confrontation.', 'लिखित रिकॉर्ड टकराव से बेहतर काम करता है।', 'వ్రాతపూర్వక ఆనవాలు ఘర్షణ కంటే బాగా పనిచేస్తుంది.')
      }
    ],
    evidence: [
      {
        id: 'prh-ev-1',
        text: t('Keep a dated copy of your written complaint.', 'अपनी शिकायत की तारीख़युक्त प्रति रखें।', 'మీ ఫిర్యాదు తేదీతో కూడిన కాపీ ఉంచుకోండి.'),
        why: t('A written record with dates makes every escalation stronger.', 'तारीख़ों सहित लिखित रिकॉर्ड हर अपील को मज़बूत बनाता है।', 'తేదీలతో వ్రాతపూర్వక రికార్డు ప్రతి అప్పీల్ను బలపరుస్తుంది.')
      },
      {
        id: 'prh-ev-2',
        text: t('Note the name and rank of the officer who refused to act, and the date and time.', 'कार्रवाई से इनकार करने वाले अधिकारी का नाम, पद और तारीख़-समय नोट करें।', 'చర్యకు నిరాకరించిన అధికారి పేరు, హోదా, తేదీ-సమయం గమనించండి.'),
        why: t('It identifies the refusal for higher authorities.', 'यह वरिष्ठ अधिकारियों के लिए इनकार स्पष्ट करता है।', 'పై అధికారులకు నిరాకరణను స్పష్టం చేస్తుంది.')
      },
      {
        id: 'prh-ev-3',
        text: t('Keep records of every approach — the station, the SP, and the Magistrate.', 'हर संपर्क का रिकॉर्ड रखें — थाना, पुलिस अधीक्षक और मजिस्ट्रेट।', 'ప్రతి సంప్రదింపు రికార్డు ఉంచుకోండి — స్టేషన్, SP, మేజిస్ట్రేట్.'),
        why: t('They show the matter was pursued in order.', 'वे दिखाते हैं कि मामला क्रमबद्ध रूप से उठाया गया।', 'విషయం క్రమబద్ధంగా వెంబడించారని చూపుతాయి.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — police refused to act', 'आप यहाँ हैं — पुलिस ने कार्रवाई नहीं की', 'మీరు ఇక్కడ ఉన్నారు — పోలీసులు చర్య తీసుకోలేదు') },
      { label: t('Cognizable offence → FIR must be recorded', 'संज्ञेय अपराध → एफआईआर दर्ज होनी चाहिए', 'సంజ్ఞేయ నేరం → ఎఫ్ఐఆర్ నమోదు కావాలి'), note: t('BNSS §173', 'बीएनएसएस §173', 'BNSS §173'), linkTo: 'fir-refused' },
      { label: t('Non-cognizable matter → recorded and directed to Magistrate', 'गैर-संज्ञेय मामला → दर्ज कर मजिस्ट्रेट की ओर', 'సంజ్ఞేయం కానిది → నమోదు చేసి మేజిస్ట్రేట్ వైపు'), note: t('BNSS §174', 'बीएनएसएस §174', 'BNSS §174') },
      { label: t('Escalation: SP / higher authority, then Magistrate', 'अपील: पुलिस अधीक्षक / वरिष्ठ, फिर मजिस्ट्रेट', 'పై స్థాయి: SP / సీనియర్, తర్వాత మేజిస్ట్రేట్'), note: t('BNSS §175(3)', 'बीएनएसएस §175(3)', 'BNSS §175(3)'), linkTo: 'i-want-to-complain' },
      { label: t('Legal aid while you pursue this', 'इस दौरान कानूनी सहायता', 'ఈ ప్రక్రియలో న్యాయ సహాయం'), note: t('NALSA / Legal Services Authorities', 'नालसा / कानूनी सेवा प्राधिकरण', 'NALSA / న్యాయ సేవా అథారిటీలు') }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'state-directory', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'prh-cr-1',
        route: t('Superintendent of Police (written complaint)', 'पुलिस अधीक्षक (लिखित शिकायत)', 'సూపరింటెండెంట్ ఆఫ్ పోలీస్ (వ్రాతపూర్వక ఫిర్యాదు)'),
        whyItMayApply: t('First escalation when the station refuses to act on your complaint.', 'थाने द्वारा शिकायत पर कार्रवाई से इनकार होने पर पहला कदम।', 'స్టేషన్ ఫిర్యాదుపై చర్యకు నిరాకరించినప్పుడు మొదటి అడుగు.'),
        whatToPrepare: t('Your complaint in writing, the record of refusal, officer details.', 'आपकी शिकायत लिखित में, इनकार का रिकॉर्ड, अधिकारी का विवरण।', 'మీ ఫిర్యాదు వ్రాతపూర్వకంగా, నిరాకరణ రికార్డు, అధికారి వివరాలు.'),
        legalBasis: 'BNSS §173, §174',
        sourceIds: ['bnss']
      },
      {
        id: 'prh-cr-2',
        route: t('Complaint to the Magistrate', 'मजिस्ट्रेट से शिकायत', 'మేజిస్ట్రేట్కు ఫిర్యాదు'),
        whyItMayApply: t('When the police refuse or fail to act and higher authorities do not resolve it.', 'जब पुलिस कार्रवाई न करे और वरिष्ठ अधिकारी समाधान न करें।', 'పోలీసులు చర్య తీసుకోకపోయినా, పై అధికారులు పరిష్కరించకపోయినా.'),
        whatToPrepare: t('Your information in writing, records of every approach, and supporting documents.', 'आपकी सूचना लिखित में, हर संपर्क का रिकॉर्ड और सहायक दस्तावेज़।', 'మీ సమాచారం వ్రాతపూర్వకంగా, ప్రతి సంప్రదింపు రికార్డు, సహాయక పత్రాలు.'),
        legalBasis: 'BNSS §175(3) — Magistrate may order investigation',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss', 'lsaa'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     12. POLICE NOTICE TO APPEAR
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'POLICE_NOTICE',
    slug: 'police-notice-to-appear',
    icon: 'fileText',
    title: t('Police sent me a notice to appear', 'पुलिस ने मुझे पेश होने का नोटिस भेजा', 'పోలీసులు నాకు హాజరు నోటీసు పంపారు'),
    shortTitle: t('Police notice to appear', 'पुलिस नोटिस', 'పోలీసు నోటీసు'),
    description: t(
      'You received a written notice from the police asking you to appear before them for questioning about a matter.',
      'आपको पुलिस से लिखित नोटिस मिला है जिसमें किसी मामले में पूछताछ के लिए उनके सामने पेश होने को कहा गया है।',
      'పోలీసుల నుండి వ్రాతపూర్వక నోటీసు వచ్చింది — ఒక విషయంపై ప్రశ్నలకు వారి ముందు హాజరు కావాలని.'
    ),
    urgency: 'medium',
    summary: t(
      'A notice under BNSS §35(3) is issued for a cognizable offence when the police decide your arrest is not needed. Take it seriously and appear as directed — appearing is not an admission, and if you comply you should not ordinarily be arrested. This notice is not the same as a court summons.',
      'बीएनएसएस §35(3) के तहत नोटिस तब जारी होता है जब पुलिस तय करती है कि संज्ञेय अपराध में आपकी गिरफ़्तारी आवश्यक नहीं है। इसे गंभीरता से लें और निर्देश अनुसार पेश हों — पेश होना स्वीकारोक्ति नहीं है, और पालन करने पर सामान्यतः गिरफ़्तारी नहीं होनी चाहिए। यह नोटिस न्यायालय के समन से अलग है।',
      'BNSS §35(3) కింద నోటీసు అంటే సంజ్ఞేయ నేరంలో మీ అరెస్ట్ అవసరం లేదని పోలీసులు నిర్ణయించారని. దాన్ని తీవ్రంగా పరిగణించి నిర్దేశించినట్లు హాజరు కండి — హాజరు అవ్వడం అంగీకారం కాదు; పాటిస్తే సాధారణంగా అరెస్ట్ చేయకూడదు. ఈ నోటీసు కోర్టు సమన్లా కాదు.'
    ),
    immediateActions: [
      t('Read the notice carefully: what matter, what date, time and place.', 'नोटिस ध्यान से पढ़ें: कौन सा मामला, कौन सी तारीख़, समय और स्थान।', 'నోటీసు జాగ్రత్తగా చదవండి: ఏ విషయం, ఏ తేదీ, సమయం, స్థలం.'),
      t('Appear as directed, or inform the officer in writing if you cannot.', 'निर्देश अनुसार पेश हों, या न हो पाने पर लिखित रूप से सूचित करें।', 'నిర్దేశించినట్లు హాజరు కండి; కుదరకపోతే వ్రాతపూర్వకంగా తెలియజేయండి.'),
      t('You may consult a lawyer before you go or bring one with you.', 'जाने से पहले वकील से सलाह लें या अपने साथ ले जाएँ।', 'వెళ్లే ముందు న్యాయవాదిని సంప్రదించండి లేదా వెంట తీసుకెళ్లండి.'),
      t('Do not ignore the notice — failure to comply can lead to arrest.', 'नोटिस अनदेखा न करें — पालन न करने पर गिरफ़्तारी हो सकती है।', 'నోటీసును విస్మరించకండి — పాటించకపోతే అరెస్ట్ కావచ్చు.'),
      t('Note the officer’s details and keep a copy of the notice.', 'अधिकारी का विवरण नोट करें और नोटिस की प्रति रखें।', 'అధికారి వివరాలు గమనించి నోటీసు కాపీ ఉంచుకోండి.')
    ],
    rights: [
      {
        id: 'pn-right-duty',
        title: t('Your duty is to comply — but complying is not an admission', 'पालन आपका कर्तव्य है — पर पालन स्वीकारोक्ति नहीं है', 'పాటించడం మీ బాధ్యత — కానీ అది అంగీకారం కాదు'),
        whatThisMeans: t(
          'Once a notice is issued, you have a duty to comply with its terms. Appearing for questioning does not mean you have admitted anything.',
          'नोटिस जारी होने पर उसकी शर्तों का पालन आपका कर्तव्य है। पूछताछ के लिए पेश होना स्वीकारोक्ति नहीं है।',
          'నోటీసు జారీ అయిన తర్వాత దాని నిబంధనలు పాటించడం మీ బాధ్యత. ప్రశ్నలకు హాజరు కావడం అంగీకారం కాదు.'
        ),
        legalBasis: 'BNSS §35(4)',
        sourceIds: ['bnss']
      },
      {
        id: 'pn-right-noarrest',
        title: t('If you comply, you should not ordinarily be arrested', 'पालन करने पर सामान्यतः गिरफ़्तारी नहीं', 'పాటిస్తే సాధారణంగా అరెస్ట్ చేయకూడదు'),
        whatThisMeans: t(
          'If you comply with the notice and continue to comply, you shall not be arrested for the offence in the notice unless the police record reasons to believe you ought to be arrested.',
          'यदि आप नोटिस का पालन करते हैं, तो नोटिस वाले अपराध के लिए आपकी गिरफ़्तारी नहीं होगी, जब तक पुलिस कारण दर्ज कर यह न माने कि गिरफ़्तारी आवश्यक है।',
          'మీరు నోటీసు పాటిస్తే, ఆ నోటీసులోని నేరానికి మిమ్మల్ని అరెస్ట్ చేయకూడదు — అరెస్ట్ అవసరమని పోలీసులు కారణాలు నమోదు చేస్తే తప్ప.'
        ),
        legalBasis: 'BNSS §35(5)',
        sourceIds: ['bnss']
      },
      {
        id: 'pn-right-arrest',
        title: t('Failure to comply can lead to arrest', 'पालन न करने पर गिरफ़्तारी हो सकती है', 'పాటించకపోతే అరెస్ట్ కావచ్చు'),
        whatThisMeans: t(
          'If you fail to comply with the notice or are unwilling to identify yourself, the police may arrest you for the offence mentioned in the notice.',
          'यदि आप नोटिस का पालन नहीं करते या अपनी पहचान बताने से इनकार करते हैं, तो पुलिस नोटिस में बताए अपराध के लिए आपको गिरफ़्तार कर सकती है।',
          'మీరు నోటీసు పాటించకపోతే లేదా గుర్తింపు చెప్పడానికి నిరాకరిస్తే, నోటీసులోని నేరానికి పోలీసులు అరెస్ట్ చేయవచ్చు.'
        ),
        legalBasis: 'BNSS §35(6)',
        sourceIds: ['bnss']
      },
      {
        id: 'pn-right-lawyer',
        title: t('To consult a lawyer and not be compelled to incriminate yourself', 'वकील से परामर्श और स्वयं-दोषारोपण से सुरक्षा', 'న్యాయవాదిని సంప్రదించే, స్వీయ నేరారోపణకు గురికాకుండా ఉండే హక్కు'),
        whatThisMeans: t(
          'You may consult a lawyer before and during questioning, and you cannot be compelled to be a witness against yourself.',
          'पूछताछ से पहले और दौरान आप वकील से परामर्श कर सकते हैं, और आपको अपने विरुद्ध गवाह बनने के लिए बाध्य नहीं किया जा सकता।',
          'ప్రశ్నలకు ముందు, సమయంలో న్యాయవాదిని సంప్రదించవచ్చు; మీపైనే సాక్షిగా మారమని బలవంతం చేయలేరు.'
        ),
        legalBasis: 'Constitution of India, Article 20(3) · BNSS §38',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'pn-right-residence',
        title: t('Women, children, disabled and ill persons need not attend away from home', 'महिलाओं, बच्चों, दिव्यांगों और बीमार व्यक्तियों को घर से बाहर नहीं बुलाया जा सकता', 'స్త్రీలు, పిల్లలు, వికలాంగులు, అనారోగ్యులను ఇంటి నుండి బయటకు పిలవలేరు'),
        whatThisMeans: t(
          'No woman, child under 15, person with a mental or physical disability, or person with an acute illness can be required to attend at any place other than their residence for an investigation-related appearance.',
          'किसी महिला, 15 वर्ष से कम उम्र के बच्चे, मानसिक या शारीरिक दिव्यांग व्यक्ति, या गंभीर बीमार व्यक्ति को जाँच से जुड़ी उपस्थिति के लिए अपने निवास के अलावा किसी अन्य स्थान पर बुलाना अनिवार्य नहीं है।',
          'స్త్రీ, 15 సంవత్సరాలలోపు పిల్లలు, మానసిక లేదా శారీరక వికలాంగులు, తీవ్ర అనారోగ్యంతో ఉన్నవారిని దర్యాప్తు హాజరు కోసం నివాసం కాకుండా మరే చోటికీ రమ్మని నిర్బంధించలేరు.'
        ),
        legalBasis: 'BNSS §179 (proviso)',
        sourceIds: ['bnss']
      },
      {
        id: 'pn-right-60',
        title: t('Protection for elderly and infirm persons from arrest', 'बुज़ुर्गों और अस्वस्थ व्यक्तियों को गिरफ़्तारी से सुरक्षा', 'వృద్ధులు, బలహీనులకు అరెస్ట్ నుండి రక్షణ'),
        whatThisMeans: t(
          'For an offence punishable with imprisonment of less than three years, no arrest of a person who is infirm or above sixty years of age may be made without the prior permission of an officer not below the rank of Deputy Superintendent of Police.',
          'तीन वर्ष से कम कारावास वाले अपराध में, अस्वस्थ या साठ वर्ष से अधिक उम्र के व्यक्ति की गिरफ़्तारी उप-अधीक्षक (डीएसपी) से कम रैंक के अधिकारी की पूर्व अनुमति के बिना नहीं हो सकती।',
          'మూడేళ్ల కంటే తక్కువ జైలు శిక్ష ఉన్న నేరంలో బలహీనులు లేదా అరవై ఏళ్లు పైబడిన వ్యక్తిని డిప్యూటీ సూపరింటెండెంట్ కంటే తక్కువ హోదా అధికారి ముందస్తు అనుమతి లేకుండా అరెస్ట్ చేయకూడదు.'
        ),
        legalBasis: 'BNSS §35(7)',
        sourceIds: ['bnss']
      }
    ],
    do: [
      {
        id: 'pn-do-1',
        text: t('Appear on the date and time, or give written notice if you cannot.', 'तारीख़-समय पर पेश हों, या न हो पाने पर लिखित रूप से सूचित करें।', 'తేదీ-సమయానికి హాజరు కండి; కుదరకపోతే వ్రాతపూర్వకంగా తెలియజేయండి.'),
        why: t('Complying protects you from arrest under BNSS §35(5)/(6).', 'पालन आपको बीएनएसएस §35(5)/(6) के तहत गिरफ़्तारी से बचाता है।', 'పాటించడం BNSS §35(5)/(6) కింద అరెస్ట్ నుండి కాపాడుతుంది.')
      },
      {
        id: 'pn-do-2',
        text: t('Take a lawyer with you, or consult one first.', 'वकील साथ ले जाएँ, या पहले सलाह लें।', 'న్యాయవాదిని వెంట తీసుకెళ్లండి లేదా ముందుగా సంప్రదించండి.'),
        why: t('A lawyer helps you respond correctly during questioning.', 'वकील पूछताछ के दौरान सही उत्तर देने में मदद करता है।', 'న్యాయవాది ప్రశ్నలకు సరిగ్గా సమాధానమివ్వడానికి సహాయపడతారు.')
      },
      {
        id: 'pn-do-3',
        text: t('Answer truthfully, and say you wish to consult a lawyer where needed.', 'सच बोलें, और ज़रूरत पड़ने पर कहें कि आप वकील से परामर्श लेना चाहते हैं।', 'నిజం చెప్పండి; అవసరమైతే న్యాయవాదిని సంప్రదించాలనుకుంటున్నానని చెప్పండి.'),
        why: t('You are not compelled to incriminate yourself (Art. 20(3)).', 'आप स्वयं-दोषारोपण के लिए बाध्य नहीं हैं (अनु. 20(3))।', 'స్వీయ నేరారోపణకు మీరు బలవంతం కాదు (ఆర్టి. 20(3)).')
      },
      {
        id: 'pn-do-4',
        text: t('If you cannot attend away from your residence (woman, child, disabled, ill), state this in writing.', 'घर से बाहर नहीं जा सकते (महिला, बच्चा, दिव्यांग, बीमार) तो यह लिखित रूप से बताएँ।', 'ఇంటి నుండి బయటకు వెళ్లలేని వారు (స్త్రీ, పిల్లలు, వికలాంగులు, అనారోగ్యులు) వ్రాతపూర్వకంగా తెలియజేయండి.'),
        why: t('The law does not require you to attend elsewhere than your residence (BNSS §179).', 'कानून आपको निवास के अलावा कहीं और बुलाना अनिवार्य नहीं करता (बीएनएसएस §179)।', 'చట్టం మిమ్మల్ని నివాసం కాకుండా మరే చోటికీ పిలవడం తప్పనిసరి చేయదు (BNSS §179).')
      }
    ],
    avoid: [
      {
        id: 'pn-avoid-1',
        text: t('Do not ignore the notice.', 'नोटिस अनदेखा न करें।', 'నోటీసును విస్మరించకండి.'),
        why: t('Failure to comply can lead to arrest (BNSS §35(6)).', 'पालन न करने पर गिरफ़्तारी हो सकती है (बीएनएसएस §35(6))।', 'పాటించకపోతే అరెస్ట్ కావచ్చు (BNSS §35(6)).')
      },
      {
        id: 'pn-avoid-2',
        text: t('Do not assume it is the same as a court summons.', 'इसे न्यायालय के समन जैसा न मानें।', 'దీన్ని కోర్టు సమన్లా భావించకండి.'),
        why: t('A police notice under §35(3) is a pre-arrest notice; a court summons is issued by a court.', '§35(3) के तहत पुलिस नोटिस गिरफ़्तारी-पूर्व नोटिस है; न्यायालय का समन न्यायालय जारी करता है।', '§35(3) నోటీసు అరెస్ట్కు ముందు నోటీసు; కోర్టు సమన్ను కోర్టు జారీ చేస్తుంది.')
      },
      {
        id: 'pn-avoid-3',
        text: t('Do not give false information during questioning.', 'पूछताछ में झूठी जानकारी न दें।', 'ప్రశ్నలకు తప్పుడు సమాచారం ఇవ్వకండి.'),
        why: t('False information can itself create legal complications.', 'झूठी जानकारी स्वयं कानूनी परेशानी खड़ी कर सकती है।', 'తప్పుడు సమాచారం స్వయంగా చట్టపరమైన సమస్యలు సృష్టించవచ్చు.')
      }
    ],
    evidence: [
      {
        id: 'pn-ev-1',
        text: t('Keep a copy of the notice.', 'नोटिस की प्रति रखें।', 'నోటీసు కాపీ ఉంచుకోండి.'),
        why: t('You need it to comply correctly and to prove you complied.', 'पालन सही ढंग से करने और सिद्ध करने के लिए ज़रूरी है।', 'సరిగ్గా పాటించడానికి, పాటించినట్లు రుజువు చేయడానికి అవసరం.')
      },
      {
        id: 'pn-ev-2',
        text: t('Note the dates you appeared and what was asked.', 'पेश होने की तारीख़ें और पूछे गए सवाल नोट करें।', 'హాజరైన తేదీలు, అడిగిన ప్రశ్నలు గమనించండి.'),
        why: t('Proof of compliance protects you from arrest under BNSS §35(5).', 'पालन का प्रमाण आपको बीएनएसएस §35(5) के तहत गिरफ़्तारी से बचाता है।', 'పాటించిన ఆధారం BNSS §35(5) కింద అరెస్ట్ నుండి కాపాడుతుంది.')
      },
      {
        id: 'pn-ev-3',
        text: t('If you cannot attend away from home, keep a copy of your written request.', 'घर से बाहर नहीं जा सकते तो अपने लिखित अनुरोध की प्रति रखें।', 'ఇంటి నుండి బయటకు వెళ్లలేకపోతే మీ వ్రాతపూర్వక అభ్యర్థన కాపీ ఉంచుకోండి.'),
        why: t('The law does not require certain persons to attend elsewhere than their residence (BNSS §179).', 'कानून कुछ व्यक्तियों को निवास के अलावा कहीं और बुलाना अनिवार्य नहीं करता (बीएनएसएस §179)।', 'చట్టం కొందరిని నివాసం కాకుండా మరే చోటికీ రమ్మని నిర్బంధించదు (BNSS §179).')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — police notice received', 'आप यहाँ हैं — पुलिस नोटिस मिला', 'మీరు ఇక్కడ ఉన్నారు — పోలీసు నోటీసు వచ్చింది') },
      { label: t('Appear as directed (comply)', 'निर्देश अनुसार पेश हों (पालन)', 'నిర్దేశించినట్లు హాజరు (పాటించండి)'), note: t('BNSS §35(4)', 'बीएनएसएस §35(4)', 'BNSS §35(4)') },
      { label: t('No arrest if you comply — unless reasons recorded', 'पालन पर गिरफ़्तारी नहीं — कारण दर्ज होने को छोड़कर', 'పాటిస్తే అరెస్ట్ లేదు — కారణాలు నమోదైతే తప్ప'), note: t('BNSS §35(5)', 'बीएनएसएस §35(5)', 'BNSS §35(5)') },
      { label: t('If arrested — grounds told, lawyer, produced within 24 hours', 'गिरफ़्तारी पर — कारण, वकील, 24 घंटे में पेशी', 'అరెస్ట్ అయితే — కారణాలు, న్యాయవాది, 24 గంటల్లో హాజరు'), note: t('Art. 22 · BNSS §47, §48, §57', 'अनु. 22 · बीएनएसएस §47, §48, §57', 'ఆర్టి. 22 · BNSS §47, §48, §57'), linkTo: 'arrested' }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'pn-cr-1',
        route: t('Senior police officer', 'वरिष्ठ पुलिस अधिकारी', 'సీనియర్ పోలీసు అధికారి'),
        whyItMayApply: t('If you were arrested despite complying with the notice without recorded reasons.', 'पालन के बावजूद बिना दर्ज कारण गिरफ़्तारी हुई हो।', 'పాటించినప్పటికీ నమోదైన కారణాలు లేకుండా అరెస్ట్ చేస్తే.'),
        whatToPrepare: t('A copy of the notice, the dates you appeared, and a written account.', 'नोटिस की प्रति, पेश होने की तारीख़ें और लिखित विवरण।', 'నోటీసు కాపీ, హాజరైన తేదీలు, వ్రాతపూర్వక వివరణ.'),
        legalBasis: 'BNSS §35(3)-(6)',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss', 'constitution'],
    lastVerified: '2026-08-15'
  },

  /* ────────────────────────────────────────────────────────────────
     13. POLICE CAME TO MY HOME
  ──────────────────────────────────────────────────────────────── */
  {
    id: 'POLICE_AT_HOME',
    slug: 'police-came-to-my-home',
    icon: 'home',
    title: t('Police came to my home', 'पुलिस मेरे घर आई', 'పోలీసులు నా ఇంటికి వచ్చారు'),
    shortTitle: t('Police at my home', 'पुलिस मेरे घर', 'పోలీసులు ఇంటికి వచ్చారు'),
    description: t(
      'Police officers have come to your home — to ask questions about an investigation, to search, or to ask you to come with them.',
      'पुलिस अधिकारी आपके घर आए हैं — जाँच के सवाल पूछने, तलाशी लेने, या आपको साथ चलने को कहने।',
      'పోలీసు అధికారులు మీ ఇంటికి వచ్చారు — దర్యాప్తు ప్రశ్నలు అడగడానికి, సోదా చేయడానికి లేదా వెంట రమ్మనడానికి.'
    ),
    urgency: 'medium',
    summary: t(
      'Police may visit your home during an investigation, but they cannot force their way in without lawful authority. Stay calm, ask for identification and the reason for the visit, and ask to see a warrant before allowing a search. You may consult a lawyer before making statements, and you are not required to go to the station merely because they ask.',
      'जाँच के दौरान पुलिस आपके घर आ सकती है, लेकिन बिना कानूनी अधिकार के ज़बरदस्ती अंदर नहीं घुस सकती। शांत रहें, पहचान और आने का कारण पूछें, और तलाशी से पहले वारंट देखने को कहें। बयान देने से पहले वकील से सलाह ले सकते हैं, और सिर्फ़ कहने से थाने जाना अनिवार्य नहीं है।',
      'దర్యాప్తులో పోలీసులు మీ ఇంటికి రావచ్చు, కానీ చట్టబద్ధమైన అధికారం లేకుండా బలవంతంగా లోపలికి రాలేరు. ప్రశాంతంగా ఉండండి, గుర్తింపు మరియు రావడానికి కారణం అడగండి, సోదాకు ముందు వారెంట్ చూపించమని అడగండి. వాంగ్మూలం ఇచ్చే ముందు న్యాయవాదిని సంప్రదించవచ్చు; అడిగారని స్టేషన్కు వెళ్లడం తప్పనిసరి కాదు.'
    ),
    immediateActions: [
      t('Stay calm. Ask the officers to identify themselves and state the reason for the visit.', 'शांत रहें। अधिकारियों से पहचान और आने का कारण पूछें।', 'ప్రశాంతంగా ఉండండి. అధికారులను గుర్తింపు చూపించి, కారణం చెప్పమని అడగండి.'),
      t('If they want to search, ask to see the warrant first.', 'तलाशी चाहें तो पहले वारंट देखने को कहें।', 'సోదా చేయాలంటే ముందు వారెంట్ చూపించమని అడగండి.'),
      t('You may consult a lawyer before making any statement.', 'कोई बयान देने से पहले वकील से सलाह ले सकते हैं।', 'వాంగ్మూలం ఇచ్చే ముందు న్యాయవాదిని సంప్రదించవచ్చు.'),
      t('Note the officers’ names, badge numbers, time and what they ask or take.', 'अधिकारियों के नाम, बैज नंबर, समय और वे क्या पूछते या लेते हैं, नोट करें।', 'అధికారుల పేర్లు, బ్యాడ్జ్ నంబర్లు, సమయం, వారు అడిగేది/తీసుకునేది గమనించండి.'),
      t('If asked to come to the station, ask whether it is voluntary or you are under arrest.', 'थाने चलने को कहें तो पूछें कि यह स्वेच्छा से है या आप गिरफ़्तार हैं।', 'స్టేషన్ రమ్మంటే అది స్వచ్ఛందమా లేదా మీరు అరెస్ట్ అవుతున్నారా అని అడగండి.')
    ],
    rights: [
      {
        id: 'ph-right-id',
        title: t('To know who is at your door and why', 'यह जानने का अधिकार कि आपके दरवाज़े पर कौन और क्यों है', 'మీ ఇంటి గుమ్మం దగ్గర ఎవరు, ఎందుకు ఉన్నారో తెలుసుకునే హక్కు'),
        whatThisMeans: t(
          'Officers on duty must bear visible identification, and you may ask for it and for the reason for the visit before engaging further.',
          'ड्यूटी पर मौजूद अधिकारी दृश्य पहचान रखते हैं, और आगे बातचीत से पहले आप उसे और आने का कारण पूछ सकते हैं।',
          'విధిలో ఉన్న అధికారులు కనిపించే గుర్తింపు ధరిస్తారు; మరింత మాట్లాడే ముందు దాన్ని, రావడానికి కారణం అడగవచ్చు.'
        ),
        legalBasis: 'BNSS §36(a)',
        sourceIds: ['bnss']
      },
      {
        id: 'ph-right-warrant',
        title: t('A home search normally requires a warrant — and you must be shown it', 'घर की तलाशी के लिए सामान्यतः वारंट आवश्यक — और वह दिखाया जाना चाहिए', 'ఇంటి సోదాకు సాధారణంగా వారెంట్ అవసరం — దాన్ని చూపించాలి'),
        whatThisMeans: t(
          'A Magistrate may issue a search warrant in the circumstances the law provides. If officers have a warrant, ask to see it before allowing entry — and once a lawful search is under way, the person in charge of the place must allow it.',
          'कानून द्वारा निर्धारित परिस्थितियों में मजिस्ट्रेट तलाशी वारंट जारी कर सकते हैं। वारंट हो तो अंदर आने से पहले देखने को कहें — और कानूनी तलाशी शुरू होने पर स्थान का प्रभारी उसे अनुमति देने के लिए बाध्य है।',
          'చట్టం నిర్దేశించిన పరిస్థితుల్లో మేజిస్ట్రేట్ సోదా వారెంట్ జారీ చేయవచ్చు. వారెంట్ ఉంటే లోపలికి రానివ్వడానికి ముందు చూపించమని అడగండి — చట్టబద్ధమైన సోదా మొదలైతే స్థల బాధ్యతగల వ్యక్తి అనుమతించాలి.'
        ),
        legalBasis: 'BNSS §96 (search warrant), §103 (allow search)',
        sourceIds: ['bnss']
      },
      {
        id: 'ph-right-station',
        title: t('Not to be required to attend the police station merely because they ask', 'सिर्फ़ कहने से थाने जाना अनिवार्य नहीं', 'అడిగారని స్టేషన్కు వెళ్లడం తప్పనిసరి కాదు'),
        whatThisMeans: t(
          'For investigation-related appearances, no woman, child under 15, person with a disability, or acutely ill person can be required to attend anywhere other than their residence. You may also ask that questioning happen at your home or with a lawyer present.',
          'जाँच से जुड़ी उपस्थिति के लिए किसी महिला, 15 वर्ष से कम उम्र के बच्चे, दिव्यांग या गंभीर बीमार व्यक्ति को अपने निवास के अलावा कहीं और बुलाना अनिवार्य नहीं है। आप पूछताछ घर पर या वकील की उपस्थिति में करने का अनुरोध भी कर सकते हैं।',
          'దర్యాప్తు హాజరు కోసం స్త్రీ, 15 ఏళ్లలోపు పిల్లలు, వికలాంగులు, తీవ్ర అనారోగ్యులను నివాసం కాకుండా మరే చోటికీ పిలవలేరు. ప్రశ్నలు ఇంట్లో లేదా న్యాయవాది సమక్షంలో జరగాలని కూడా అడగవచ్చు.'
        ),
        legalBasis: 'BNSS §179 (proviso)',
        sourceIds: ['bnss']
      },
      {
        id: 'ph-right-lawyer',
        title: t('To consult a lawyer before making statements', 'बयान देने से पहले वकील से परामर्श का अधिकार', 'వాంగ్మూలం ఇచ్చే ముందు న్యాయవాదిని సంప్రదించే హక్కు'),
        whatThisMeans: t(
          'You may speak to a lawyer before answering questions, and you cannot be compelled to incriminate yourself.', 'सवालों के जवाब से पहले आप वकील से बात कर सकते हैं, और आपको स्वयं-दोषारोपण के लिए बाध्य नहीं किया जा सकता।', 'ప్రశ్నలకు సమాధానమిచ్చే ముందు న్యాయవాదితో మాట్లాడవచ్చు; స్వీయ నేరారోపణకు బలవంతం చేయలేరు.'
        ),
        legalBasis: 'Constitution of India, Article 20(3) · BNSS §38',
        sourceIds: ['constitution', 'bnss']
      },
      {
        id: 'ph-right-arrest',
        title: t('If arrested at home — grounds, relative informed, produced within 24 hours', 'घर पर गिरफ़्तारी हो तो — कारण, परिवार को सूचना, 24 घंटे में पेशी', 'ఇంట్లో అరెస్ట్ అయితే — కారణాలు, బంధువుకు సమాచారం, 24 గంటల్లో హాజరు'),
        whatThisMeans: t(
          'If you are arrested, you must be told the grounds, a relative or friend must be informed, and you must be produced before a Magistrate within 24 hours.',
          'गिरफ़्तारी पर कारण बताना होगा, परिवार/मित्र को सूचित करना होगा, और 24 घंटे के भीतर मजिस्ट्रेट के सामने पेशी होगी।',
          'అరెస్ట్ అయితే కారణాలు చెప్పాలి, బంధువు/స్నేహితుడికి తెలియజేయాలి, 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరుపరచాలి.'
        ),
        legalBasis: 'Constitution of India, Article 22 · BNSS §47, §48, §57',
        sourceIds: ['constitution', 'bnss']
      }
    ],
    do: [
      {
        id: 'ph-do-1',
        text: t('Talk at the door first: ask who they are, which station, and why they are there.', 'पहले दरवाज़े पर ही बात करें: पूछें कौन हैं, किस थाने से, और क्यों आए हैं।', 'ముందు గుమ్మం దగ్గరే మాట్లాడండి: ఎవరు, ఏ స్టేషన్ నుండి, ఎందుకు వచ్చారు అని అడగండి.'),
        why: t('This helps you respond correctly and protects your rights.', 'इससे सही जवाब देना आसान होता है और अधिकार सुरक्षित रहते हैं।', 'ఇది సరిగ్గా స్పందించడానికి, హక్కులు కాపాడటానికి సహాయపడుతుంది.')
      },
      {
        id: 'ph-do-2',
        text: t('If they show a search warrant, read it and note its details before allowing entry.', 'तलाशी वारंट दिखाएँ तो अंदर आने से पहले पढ़ें और विवरण नोट करें।', 'సోదా వారెంట్ చూపిస్తే లోపలికి అనుమతించే ముందు చదివి వివరాలు గమనించండి.'),
        why: t('The warrant shows the authority and scope of the search.', 'वारंट तलाशी का अधिकार और दायरा दिखाता है।', 'వారెంట్ సోదా అధికారం, పరిధి చూపుతుంది.')
      },
      {
        id: 'ph-do-3',
        text: t('If they ask you to come to the station, ask whether you are under arrest.', 'थाने चलने को कहें तो पूछें कि क्या आप गिरफ़्तार हैं।', 'స్టేషన్ రమ్మంటే మీరు అరెస్ట్ అవుతున్నారా అని అడగండి.'),
        why: t('Different rights apply once you are formally arrested.', 'औपचारिक गिरफ़्तारी के बाद अलग अधिकार लागू होते हैं।', 'అధికారిక అరెస్ట్ తర్వాత వేరే హక్కులు వర్తిస్తాయి.')
      },
      {
        id: 'ph-do-4',
        text: t('Call a family member or lawyer if you are uncomfortable.', 'असहज होने पर परिवार या वकील को कॉल करें।', 'ఇబ్బందిగా అనిపిస్తే కుటుంబ సభ్యుడు లేదా న్యాయవాదికి కాల్ చేయండి.')
      }
    ],
    avoid: [
      {
        id: 'ph-avoid-1',
        text: t('Do not physically obstruct officers who are acting under a lawful warrant.', 'कानूनी वारंट के तहत कार्य कर रहे अधिकारियों में शारीरिक बाधा न डालें।', 'చట్టబద్ధమైన వారెంట్తో పనిచేసే అధికారులకు శారీరకంగా అడ్డుకోకండి.'),
        why: t('Obstruction can create additional legal trouble; challenge through records and complaints.', 'बाधा अतिरिक्त कानूनी परेशानी ला सकती है; रिकॉर्ड और शिकायत से चुनौती दें।', 'అడ్డుకోవడం అదనపు ఇబ్బంది తెస్తుంది; రికార్డులు, ఫిర్యాదుల ద్వారా సవాలు చేయండి.')
      },
      {
        id: 'ph-avoid-2',
        text: t('Do not let a search happen without seeing the warrant, if one is claimed.', 'वारंट दावा हो तो बिना देखे तलाशी न होने दें।', 'వారెంట్ ఉందంటే చూడకుండా సోదా జరగనివ్వకండి.'),
        why: t('The warrant defines the lawful scope of the search.', 'वारंट तलाशी का कानूनी दायरा तय करता है।', 'వారెంట్ సోదా చట్టబద్ధ పరిధిని నిర్ణయిస్తుంది.')
      },
      {
        id: 'ph-avoid-3',
        text: t('Do not sign statements under pressure without a lawyer’s review.', 'दबाव में बिना वकील की सलाह बयान पर हस्ताक्षर न करें।', 'ఒత్తిడిలో న్యాయవాది సలహా లేకుండా వాంగ్మూలాలపై సంతకం చేయకండి.'),
        why: t('A signed statement may be used later; have it reviewed first.', 'हस्ताक्षरित बयान बाद में इस्तेमाल हो सकता है; पहले दिखाएँ।', 'సంతకం చేసిన ప్రకటన తర్వాత ఉపయోగించవచ్చు; ముందుగా చూపించండి.')
      }
    ],
    evidence: [
      {
        id: 'ph-ev-1',
        text: t('Note the officers’ names, badge numbers, station and time of the visit.', 'अधिकारियों के नाम, बैज नंबर, थाना और विज़िट का समय नोट करें।', 'అధికారుల పేర్లు, బ్యాడ్జ్ నంబర్లు, స్టేషన్, సందర్శన సమయం గమనించండి.'),
        why: t('The basic facts you need if you later complain about the visit.', 'बाद में विज़िट की शिकायत के लिए ये मूल तथ्य चाहिए।', 'తర్వాత సందర్శనపై ఫిర్యాదుకు ఈ ప్రాథమిక వాస్తవాలు అవసరం.')
      },
      {
        id: 'ph-ev-2',
        text: t('If a warrant is shown, note its details before allowing entry.', 'वारंट दिखाया जाए तो अंदर आने से पहले उसका विवरण नोट करें।', 'వారెంట్ చూపిస్తే లోపలికి అనుమతించే ముందు వివరాలు గమనించండి.'),
        why: t('The warrant defines the lawful scope of the search.', 'वारंट तलाशी का कानूनी दायरा तय करता है।', 'వారెంట్ సోదా చట్టబద్ధ పరిధిని నిర్ణయిస్తుంది.')
      },
      {
        id: 'ph-ev-3',
        text: t('Write down what was asked or taken during the visit.', 'विज़िट के दौरान जो पूछा या लिया गया उसे लिखें।', 'సందర్శనలో అడిగినది లేదా తీసుకున్నది రాయండి.'),
        why: t('A written account protects you if the visit is later disputed.', 'बाद में विवाद होने पर लिखित विवरण आपकी रक्षा करता है।', 'తర్వాత వివాదం వస్తే వ్రాతపూర్వక వివరణ మిమ్మల్ని కాపాడుతుంది.')
      }
    ],
    whatHappensNext: [
      { label: t('You are here — police at your home', 'आप यहाँ हैं — पुलिस आपके घर', 'మీరు ఇక్కడ ఉన్నారు — పోలీసులు మీ ఇంటికి వచ్చారు') },
      { label: t('Identify officers and the purpose', 'अधिकारियों की पहचान और उद्देश्य', 'అధికారుల గుర్తింపు, ఉద్దేశ్యం'), note: t('BNSS §36(a)', 'बीएनएसएस §36(a)', 'BNSS §36(a)') },
      { label: t('Search, if any, under a warrant', 'तलाशी, यदि हो, वारंट के तहत', 'సోదా, ఉంటే, వారెంట్తో'), note: t('BNSS §96, §103', 'बीएनएसएस §96, §103', 'BNSS §96, §103'), linkTo: 'police-want-to-search' },
      { label: t('Questioning, if any, at your home or with a lawyer', 'पूछताछ, यदि हो, घर पर या वकील सहित', 'ప్రశ్నలు, ఉంటే, ఇంట్లో లేదా న్యాయవాదితో'), note: t('BNSS §179', 'बीएनएसएस §179', 'BNSS §179') },
      { label: t('If arrested — grounds told, produced within 24 hours', 'गिरफ़्तारी पर — कारण, 24 घंटे में पेशी', 'అరెస్ట్ అయితే — కారణాలు, 24 గంటల్లో హాజరు'), note: t('Art. 22 · BNSS §47, §48, §57', 'अनु. 22 · बीएनएसएस §47, §48, §57', 'ఆర్టి. 22 · BNSS §47, §48, §57'), linkTo: 'arrested' }
    ],
    helpRouteIds: ['nalsa', 'helpline-15100', 'dlsa-directory'],
    complaintRoutes: [
      {
        id: 'ph-cr-1',
        route: t('Senior police officer', 'वरिष्ठ पुलिस अधिकारी', 'సీనియర్ పోలీసు అధికారి'),
        whyItMayApply: t('If officers entered or searched without lawful authority, or misbehaved during the visit.', 'यदि अधिकारियों ने बिना कानूनी अधिकार प्रवेश या तलाशी की, या विज़िट के दौरान दुर्व्यवहार किया।', 'అధికారులు చట్టబద్ధమైన అధికారం లేకుండా ప్రవేశించి లేదా సోదా చేసి, లేదా సందర్శనలో దుర్వినియోగం చేస్తే.'),
        whatToPrepare: t('Date, time, officers’ details, warrant details (if any), and a written account.', 'तारीख़, समय, अधिकारियों का विवरण, वारंट विवरण (यदि हो) और लिखित विवरण।', 'తేదీ, సమయం, అధికారుల వివరాలు, వారెంట్ వివరాలు (ఉంటే), వ్రాతపూర్వక వివరణ.'),
        legalBasis: 'BNSS §96, §103, §36',
        sourceIds: ['bnss']
      }
    ],
    sourceIds: ['bnss', 'constitution'],
    lastVerified: '2026-08-15'
  }
]

/* "I'm not sure" meta-entry — used by the guided flow and the grid. */
export const NOT_SURE_ENTRY: Situation = {
  id: 'NOT_SURE',
  slug: 'not-sure',
  icon: 'help',
  title: t("I'm not sure what applies", 'मुझे नहीं पता क्या लागू होता है', 'దేని వర్తిస్తుందో నాకు తెలియదు'),
  shortTitle: t("I'm not sure", 'मुझे समझ नहीं आ रहा', 'నాకు ఖచ్చితంగా తెలియదు'),
  description: t(
    'Answer a few simple questions and we will point you to the right guide.',
    'कुछ आसान सवालों के जवाब दें और हम आपको सही गाइड तक पहुँचाएँगे।',
    'కొన్ని సాధారణ ప్రశ్నలకు సమాధానం ఇవ్వండి; మేము మిమ్మల్ని సరైన గైడ్కు చేరుస్తాము.'
  ),
  urgency: 'info',
  summary: t(
    'We will ask a few short, non-legal questions to find the guide that fits your situation.',
    'हम आपकी स्थिति के अनुरूप गाइड खोजने के लिए कुछ छोटे, गैर-कानूनी सवाल पूछेंगे।',
    'మీ పరిస్థితికి సరిపోయే గైడ్ను కనుగొనడానికి కొన్ని చిన్న, చట్టేతర ప్రశ్నలు అడుగుతాము.'
  ),
  immediateActions: [],
  rights: [],
  do: [],
  avoid: [],
  evidence: [],
  whatHappensNext: [],
  helpRouteIds: [],
  complaintRoutes: [],
  sourceIds: [],
  lastVerified: '2026-08-15'
}

export function getSituationBySlug(slug: string): Situation | undefined {
  return SITUATIONS.find((s) => s.slug === slug)
}

export function getSituationById(id: string): Situation | undefined {
  return SITUATIONS.find((s) => s.id === id) ?? (id === 'NOT_SURE' ? NOT_SURE_ENTRY : undefined)
}

export const ALL_ENTRIES: Situation[] = [...SITUATIONS, NOT_SURE_ENTRY]
