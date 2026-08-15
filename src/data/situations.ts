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
        route: t('Police threatened / abused / assaulted me', 'पुलिस ने धमकाया/दुर्व्यवहार/मारपीट की', 'పోలీసులు బెదిరించారు/దుర్వినియోగం/కొట్టారు'),
        whyItMayApply: t('Serious misconduct or human-rights violation by police officers.', 'पुलिस अधिकारियों द्वारा गंभीर दुर्व्यवहार या मानवाधिकार उल्लंघन।', 'పోలీసు అధికారుల తీవ్ర దుర్వినియోగం లేదా మానవ హక్కుల ఉల్లంఘన.'),
        whatToPrepare: t('Written account, medical records if injured, witnesses — with legal advice.', 'लिखित विवरण, चोट के रिकॉर्ड, गवाह — कानूनी सलाह से।', 'వ్రాతపూర్వక వివరణ, గాయాల రికార్డులు, సాక్షులు — న్యాయ సలహాతో.'),
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      },
      {
        id: 'c-cr-bribe',
        route: t('Police asked for money', 'पुलिस ने पैसे माँगे', 'పోలీసులు డబ్బు అడిగారు'),
        whyItMayApply: t('A police officer demanded money or an undue advantage for official work.', 'आधिकारिक काम के लिए पुलिस अधिकारी ने पैसे या अनुचित लाभ माँगा।', 'అధికారిక పనికి పోలీసు అధికారి డబ్బు లేదా అన్యాయ ప్రయోజనం డిమాండ్ చేశారు.'),
        whatToPrepare: t('Dated record of the demand, officer details, witnesses — after legal advice.', 'माँग का तारीख़युक्त रिकॉर्ड, अधिकारी का विवरण, गवाह — कानूनी सलाह के बाद।', 'డిమాండ్ తేదీతో కూడిన రికార్డు, అధికారి వివరాలు, సాక్షులు — న్యాయ సలహా తర్వాత.'),
        legalBasis: 'Prevention of Corruption Act, 1988',
        sourceIds: ['pca']
      },
      {
        id: 'c-cr-hr',
        route: t('Human-rights issue', 'मानवाधिकार मुद्दा', 'మానవ హక్కుల సమస్య'),
        whyItMayApply: t('The conduct involves a violation of human rights, such as custodial violence.', 'आचरण मानवाधिकार उल्लंघन है, जैसे हिरासत में हिंसा।', 'ప్రవర్తన మానవ హక్కుల ఉల్లంఘన అయితే — ఉదా. కస్టడీ హింస.'),
        whatToPrepare: t('Full incident details, evidence, witnesses; take legal advice first.', 'पूरा घटना विवरण, साक्ष्य, गवाह; पहले कानूनी सलाह लें।', 'పూర్తి సంఘటన వివరాలు, ఆధారాలు, సాక్షులు; ముందుగా న్యాయ సలహా తీసుకోండి.'),
        officialUrl: 'https://nhrc.nic.in/',
        legalBasis: 'Protection of Human Rights Act, 1993',
        sourceIds: ['nhrc']
      },
      {
        id: 'c-cr-cyber',
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
