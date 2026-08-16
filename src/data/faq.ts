import type { L10n } from './types'

const t = (en: string, hi: string, te: string): L10n => ({ en, hi, te })

/**
 * NyayaNow FAQ — plain-language answers to common questions.
 *
 * LEGAL ACCURACY RULE: every answer is a short restatement of content
 * already verified in situations.ts / sources.ts, and each item links to
 * the full situation guide where the sources are shown. No new legal
 * claims are introduced here.
 */
export interface FaqItem {
  id: string
  q: L10n
  a: L10n
  /** Slug of the situation guide that answers this in full. */
  linkTo: string
  /** Short citation of the legal basis. */
  cite: L10n
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-stop',
    q: t(
      'Do I have to go with the police if they stop me on the road?',
      'अगर पुलिस मुझे रास्ते में रोके तो क्या मुझे उनके साथ जाना ज़रूरी है?',
      'పోలీసులు నన్ను రోడ్డుపై ఆపితే నేను వారితో వెళ్లాల్సిందేనా?'
    ),
    a: t(
      'You have the right to stay calm and to know why you are being stopped. If police hold you or arrest you, they must tell you the reason promptly, and you have the right to consult a lawyer and to have a relative or friend informed. You are not required to answer questions that would make you a witness against yourself — staying silent on specific questions is not itself an admission. Do not run, do not physically resist, and do not give false information.',
      'आपको शांत रहने और यह जानने का अधिकार है कि आपको क्यों रोका गया। यदि पुलिस आपको रोकती है या गिरफ़्तार करती है, तो उन्हें तुरंत कारण बताना होगा; आपको वकील से परामर्श और परिवार या मित्र को सूचना देने का अधिकार है। ऐसे सवालों के जवाब देने के लिए बाध्य नहीं किया जा सकता जो आपको अपने विरुद्ध गवाह बनाएँ — कुछ सवालों पर चुप रहना स्वीकारोक्ति नहीं है। भागें नहीं, शारीरिक प्रतिरोध न करें, और झूठी जानकारी न दें।',
      'ప్రశాంతంగా ఉండే హక్కు, మిమ్మల్ని ఎందుకు ఆపారో తెలుసుకునే హక్కు మీకు ఉంది. పోలీసులు మిమ్మల్ని అదుపులో ఉంచితే లేదా అరెస్ట్ చేస్తే వెంటనే కారణం చెప్పాలి; న్యాయవాదిని సంప్రదించే మరియు బంధువు లేదా స్నేహితుడికి సమాచారం అందించే హక్కు మీకు ఉంది. మీపైనే వ్యతిరేక సాక్షిగా మారే ప్రశ్నలకు సమాధానం ఇవ్వమని బలవంతం చేయలేరు — కొన్ని ప్రశ్నలకు మౌనంగా ఉండటం అంగీకారం కాదు. పారిపోకండి, శారీరక ప్రతిఘటన చేయకండి, తప్పుడు సమాచారం ఇవ్వకండి.'
    ),
    linkTo: 'police-stopped-me',
    cite: t(
      'Art. 20(3), 22(1) · BNSS §38, §47, §48',
      'अनु. 20(3), 22(1) · बीएनएसएस §38, §47, §48',
      'ఆర్టి. 20(3), 22(1) · BNSS §38, §47, §48'
    )
  },
  {
    id: 'faq-arrest',
    q: t(
      'Can the police arrest me without a warrant?',
      'क्या पुलिस बिना वारंट मुझे गिरफ़्तार कर सकती है?',
      'వారెంట్ లేకుండా పోలీసులు నన్ను అరెస్ట్ చేయగలరా?'
    ),
    a: t(
      'For cognizable offences the law allows arrest without a warrant in the circumstances it specifies, but the arrest must still follow the law: you must be told the grounds of arrest, your relative or friend must be informed, and you must be produced before a Magistrate within 24 hours. Handcuffing is permitted only in the circumstances the law allows. If you believe the arrest is unlawful, your remedy is through the courts — do not physically resist at the time.',
      'संज्ञेय अपराधों के लिए कानून निर्धारित परिस्थितियों में बिना वारंट गिरफ़्तारी की अनुमति देता है, पर गिरफ़्तारी कानून के अनुसार ही होनी चाहिए: आपको गिरफ़्तारी के कारण बताए जाने चाहिए, परिवार या मित्र को सूचित किया जाना चाहिए, और आपको 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश किया जाना चाहिए। हथकड़ी केवल कानून द्वारा अनुमत परिस्थितियों में। यदि गिरफ़्तारी अवैध लगे तो उपाय न्यायालय के माध्यम से है — उस समय शारीरिक प्रतिरोध न करें।',
      'దోషారోపణ నేరాలకు చట్టం నిర్దేశించిన పరిస్థితుల్లో వారెంట్ లేకుండా అరెస్ట్ చేయడానికి అనుమతి ఉంది, కానీ అరెస్ట్ చట్టం ప్రకారమే ఉండాలి: అరెస్ట్ కారణాలు చెప్పాలి, బంధువు లేదా స్నేహితుడికి సమాచారం ఇవ్వాలి, 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరు పరచాలి. చట్టం అనుమతించే పరిస్థితుల్లోనే సంకెళ్ళు. అరెస్ట్ చట్టవిరుద్ధమని భావిస్తే పరిహారం కోర్టు ద్వారానే — ఆ సమయంలో శారీరక ప్రతిఘటన చేయకండి.'
    ),
    linkTo: 'arrested',
    cite: t(
      'Art. 22(1), 22(2) · BNSS §43, §46, §47, §48, §57, §58',
      'अनु. 22(1), 22(2) · बीएनएसएस §43, §46, §47, §48, §57, §58',
      'ఆర్టి. 22(1), 22(2) · BNSS §43, §46, §47, §48, §57, §58'
    )
  },
  {
    id: 'faq-silence',
    q: t(
      'Do I have to answer all of the police\u2019s questions?',
      'क्या मुझे पुलिस के सभी सवालों के जवाब देने होंगे?',
      'పోలీసుల ప్రశ్నలన్నింటికీ సమాధానం చెప్పాల్సిందేనా?'
    ),
    a: t(
      'You cannot be forced to answer questions that would make you a witness against yourself (right against self-incrimination). Staying silent on specific questions is not itself an admission. At the same time, you should not give false information — that can itself create legal complications. If you are unsure how to respond, you may say you wish to consult a lawyer first.',
      'आपको ऐसे सवालों के जवाब देने के लिए बाध्य नहीं किया जा सकता जो आपको अपने विरुद्ध गवाह बनाएँ (आत्म-दोषारोपण से संरक्षण का अधिकार)। कुछ सवालों पर चुप रहना स्वीकारोक्ति नहीं है। साथ ही, झूठी जानकारी न दें — वह स्वयं कानूनी परेशानी खड़ी कर सकती है। उत्तर देने में अनिश्चित हों तो कह सकते हैं कि आप पहले वकील से परामर्श लेना चाहते हैं।',
      'మీపైనే వ్యతిరేక సాక్షిగా మారే ప్రశ్నలకు సమాధానం ఇవ్వమని మిమ్మల్ని బలవంతం చేయలేరు (స్వయం-నేరారోపణకు వ్యతిరేక హక్కు). కొన్ని ప్రశ్నలకు మౌనంగా ఉండటం అంగీకారం కాదు. అదే సమయంలో తప్పుడు సమాచారం ఇవ్వకండి — అది స్వయంగా చట్టపరమైన సమస్యలు సృష్టించవచ్చు. ఏమి సమాధానం చెప్పాలో తెలియకపోతే ముందుగా న్యాయవాదిని సంప్రదించాలనుకుంటున్నానని చెప్పవచ్చు.'
    ),
    linkTo: 'police-stopped-me',
    cite: t(
      'Constitution of India, Article 20(3)',
      'भारत का संविधान, अनुच्छेद 20(3)',
      'భారత రాజ్యాంగం, ఆర్టికల్ 20(3)'
    )
  },
  {
    id: 'faq-fir-refused',
    q: t(
      'The police refused to register my FIR. What can I do?',
      'पुलिस ने मेरी एफआईआर दर्ज करने से इनकार कर दिया। मैं क्या करूँ?',
      'పోలీసులు నా ఎఫ్ఐఆర్ నమోదు చేయడానికి నిరాకరించారు. నేను ఏమి చేయాలి?'
    ),
    a: t(
      'For a cognizable offence, the police are required to record the FIR. If the officer refuses, give your complaint in writing and ask for a receipt. You can approach the Superintendent of Police, and you can also complain to the Magistrate, who may order an investigation. Keep copies of everything you submit.',
      'संज्ञेय अपराध के लिए पुलिस को एफआईआर दर्ज करना आवश्यक है। यदि अधिकारी इनकार करे, तो अपनी शिकायत लिखित में दें और रसीद माँगें। आप पुलिस अधीक्षक के पास जा सकते हैं, और मजिस्ट्रेट से भी शिकायत कर सकते हैं, जो जाँच का आदेश दे सकते हैं। जो कुछ भी जमा करें उसकी प्रतियाँ रखें।',
      'దోషారోపణ నేరానికి పోలీసులు ఎఫ్ఐఆర్ నమోదు చేయాల్సి ఉంటుంది. అధికారి నిరాకరిస్తే మీ ఫిర్యాదును వ్రాతపూర్వకంగా ఇచ్చి రశీదు అడగండి. మీరు సూపరింటెండెంట్ ఆఫ్ పోలీసును సంప్రదించవచ్చు, మరియు మేజిస్ట్రేట్కు కూడా ఫిర్యాదు చేయవచ్చు — వారు దర్యాప్తు ఆదేశించవచ్చు. సమర్పించిన ప్రతిదాని కాపీలు ఉంచుకోండి.'
    ),
    linkTo: 'fir-refused',
    cite: t(
      'BNSS §173, §175(3)',
      'बीएनएसएस §173, §175(3)',
      'BNSS §173, §175(3)'
    )
  },
  {
    id: 'faq-search',
    q: t(
      'Can the police search me or my house without a warrant?',
      'क्या पुलिस बिना वारंट मेरी या मेरे घर की तलाशी ले सकती है?',
      'వారెంట్ లేకుండా పోలీసులు నన్ను లేదా నా ఇంటిని సోదా చేయగలరా?'
    ),
    a: t(
      'The law sets out when a search is allowed and how it must be done. An arrested person may be searched as the law provides — and where a woman has to be searched, the search must be made by another woman with strict regard to decency. Searching a house generally requires a warrant or another lawful basis; you may ask to see the warrant and you must allow a lawful search. If a search is unlawful, do not physically resist at the time — note what happened and pursue a complaint later.',
      'कानून निर्धारित करता है कि तलाशी कब और कैसे हो सकती है। गिरफ़्तार व्यक्ति की तलाशी कानून के अनुसार हो सकती है — और जब स्त्री की तलाशी करनी हो, तो वह किसी अन्य स्त्री द्वारा पूरी मर्यादा के साथ की जानी चाहिए। घर की तलाशी के लिए सामान्यतः वारंट या अन्य वैध आधार चाहिए; आप वारंट देखने को कह सकते हैं और वैध तलाशी की अनुमति देनी चाहिए। यदि तलाशी अवैध हो, तो उस समय शारीरिक प्रतिरोध न करें — घटना नोट करें और बाद में शिकायत करें।',
      'సోదా ఎప్పుడు, ఎలా చేయాలో చట్టం నిర్దేశిస్తుంది. అరెస్ట్ అయిన వ్యక్తిని చట్టం ప్రకారం సోదా చేయవచ్చు — స్త్రీని సోదా చేయాల్సి వస్తే మరో స్త్రీ ద్వారా, పూర్తి మర్యాదతో చేయాలి. ఇంటి సోదాకు సాధారణంగా వారెంట్ లేదా మరో చట్టబద్ధ ఆధారం అవసరం; మీరు వారెంట్ చూడమని అడగవచ్చు, చట్టబద్ధ సోదాకు అనుమతించాలి. సోదా చట్టవిరుద్ధమైతే ఆ సమయంలో శారీరక ప్రతిఘటన చేయకండి — జరిగినది గమనించి తర్వాత ఫిర్యాదు చేయండి.'
    ),
    linkTo: 'police-want-to-search',
    cite: t(
      'BNSS §49, §49(2), §96, §103, §185',
      'बीएनएसएस §49, §49(2), §96, §103, §185',
      'BNSS §49, §49(2), §96, §103, §185'
    )
  },
  {
    id: 'faq-seizure',
    q: t(
      'The police took my phone / property. Can they do that?',
      'पुलिस ने मेरा फोन / सामान ले लिया। क्या वे ऐसा कर सकते हैं?',
      'పోలీసులు నా ఫోన్ / ఆస్తి తీసుకున్నారు. వారు అలా చేయగలరా?'
    ),
    a: t(
      'The law allows seizure in specified circumstances, but it must follow the procedure — ask for the reason, and ask for a seizure memo or receipt listing exactly what was taken and when. Keep a copy of every document. If your property is seized, you are entitled to know the basis and how to get it back; the situation guide explains the steps and the complaint route if the seizure is unlawful.',
      'कानून निर्धारित परिस्थितियों में ज़ब्ती की अनुमति देता है, पर वह प्रक्रिया के अनुसार होनी चाहिए — कारण पूछें, और ज़ब्ती मेमो या रसीद माँगें जिसमें क्या-क्या और कब लिया गया, सूचीबद्ध हो। हर दस्तावेज़ की प्रति रखें। सामान ज़ब्त होने पर आपको आधार और वापस पाने का तरीका जानने का अधिकार है; स्थिति गाइड में कदम और अवैध ज़ब्ती की शिकायत का मार्ग बताया गया है।',
      'చట్టం నిర్దేశించిన పరిస్థితుల్లో స్వాధీనం అనుమతించబడుతుంది, కానీ అది ప్రక్రియ ప్రకారం ఉండాలి — కారణం అడగండి, ఏమి, ఎప్పుడు తీసుకున్నారో జాబితా చేసే స్వాధీన మెమో లేదా రశీదు అడగండి. ప్రతి పత్రం కాపీ ఉంచుకోండి. ఆస్తి స్వాధీనం అయితే ఆధారం మరియు తిరిగి పొందే విధానం తెలుసుకునే హక్కు మీకు ఉంది; సిట్యుయేషన్ గైడ్లో దశలు మరియు చట్టవిరుద్ధ స్వాధీనంపై ఫిర్యాదు మార్గం ఉన్నాయి.'
    ),
    linkTo: 'property-seized',
    cite: t(
      'BNSS §103, §105, §106',
      'बीएनएसएस §103, §105, §106',
      'BNSS §103, §105, §106'
    )
  },
  {
    id: 'faq-bribe',
    q: t(
      'A police officer asked me for a bribe. What should I do?',
      'एक पुलिस अधिकारी ने मुझसे रिश्वत माँगी। मुझे क्या करना चाहिए?',
      'ఒక పోలీసు అధికారి నన్ను లంచం అడిగారు. నేను ఏమి చేయాలి?'
    ),
    a: t(
      'Demanding or accepting a bribe is an offence under the Prevention of Corruption Act, 1988. You are not required to pay. Do not pay if you can avoid it — note the details (who, when, where, how much, what for) and report to the anti-corruption helpline (1064) or the Lokayukta / anti-corruption bureau in your state. Keep any evidence of the demand. The situation guide gives the full complaint route.',
      'रिश्वत माँगना या लेना भ्रष्टाचार निवारण अधिनियम, 1988 के तहत अपराध है। आपको भुगतान करना आवश्यक नहीं है। यदि संभव हो तो भुगतान न करें — विवरण नोट करें (कौन, कब, कहाँ, कितना, किस लिए) और भ्रष्टाचार विरोधी हेल्पलाइन (1064) या अपने राज्य के लोकायुक्त / भ्रष्टाचार निरोधक ब्यूरो को सूचित करें। माँग का कोई भी सबूत रखें। पूरा शिकायत मार्ग स्थिति गाइड में है।',
      'లంచం డిమాండ్ చేయడం లేదా తీసుకోవడం అవినీతి నిరోధక చట్టం, 1988 కింద నేరం. మీరు చెల్లించాల్సిన అవసరం లేదు. వీలైతే చెల్లించకండి — వివరాలు గమనించండి (ఎవరు, ఎప్పుడు, ఎక్కడ, ఎంత, దేనికి) మరియు అవినీతి నిరోధక హెల్ప్లైన్ (1064) లేదా మీ రాష్ట్ర లోకాయుక్త / యాంటీ-కరప్షన్ బ్యూరోకు నివేదించండి. డిమాండ్కు సంబంధించిన ఏదైనా ఆధారం ఉంచుకోండి. పూర్తి ఫిర్యాదు మార్గం సిట్యుయేషన్ గైడ్లో ఉంది.'
    ),
    linkTo: 'police-asked-for-money',
    cite: t(
      'Prevention of Corruption Act, 1988 · anti-corruption helpline 1064',
      'भ्रष्टाचार निवारण अधिनियम, 1988 · भ्रष्टाचार विरोधी हेल्पलाइन 1064',
      'అవినీతి నిరోధక చట్టం, 1988 · యాంటీ-కరప్షన్ హెల్ప్లైన్ 1064'
    )
  },
  {
    id: 'faq-women',
    q: t(
      'What protections exist for women dealing with the police?',
      'पुलिस से व्यवहार में महिलाओं के लिए क्या सुरक्षाएँ हैं?',
      'పోలీసులతో వ్యవహరించేటప్పుడు మహిళలకు ఏ రక్షణలు ఉన్నాయి?'
    ),
    a: t(
      'Several legal protections apply: where a woman has to be searched, the search must be made by another woman with strict regard to decency; a woman may not ordinarily be arrested after sunset and before sunrise without the prior permission of a Magistrate; and a woman may not be required to attend the police station for questioning away from her residence. Women\u2019s help desks operate at police stations, and the national women\u2019s helpline is 181.',
      'कई कानूनी सुरक्षाएँ लागू होती हैं: स्त्री की तलाशी किसी अन्य स्त्री द्वारा पूरी मर्यादा के साथ की जानी चाहिए; सूर्यास्त के बाद और सूर्योदय से पहले स्त्री की गिरफ़्तारी सामान्यतः मजिस्ट्रेट की पूर्व अनुमति के बिना नहीं हो सकती; और स्त्री को पूछताछ के लिए अपने निवास से दूर थाने आने के लिए बाध्य नहीं किया जा सकता। पुलिस थानों में महिला हेल्प डेस्क कार्यरत हैं, और राष्ट्रीय महिला हेल्पलाइन 181 है।',
      'అనేక చట్టపరమైన రక్షణలు వర్తిస్తాయి: స్త్రీని సోదా చేయాల్సి వస్తే మరో స్త్రీ ద్వారా పూర్తి మర్యాదతో చేయాలి; సూర్యాస్తమయం తర్వాత, సూర్యోదయానికి ముందు మేజిస్ట్రేట్ ముందస్తు అనుమతి లేకుండా స్త్రీని అరెస్ట్ చేయకూడదు; మరియు స్త్రీని తన నివాసానికి దూరంగా ఉన్న పోలీస్ స్టేషన్కు ప్రశ్నించడానికి హాజరు కమ్మని బలవంతం చేయలేరు. పోలీస్ స్టేషన్లలో మహిళా హెల్ప్ డెస్క్లు ఉన్నాయి; జాతీయ మహిళా హెల్ప్లైన్ 181.'
    ),
    linkTo: 'woman-dealing-with-police',
    cite: t(
      'BNSS §43(5), §49(2), §179 · Women helpline 181',
      'बीएनएसएस §43(5), §49(2), §179 · महिला हेल्पलाइन 181',
      'BNSS §43(5), §49(2), §179 · మహిళా హెల్ప్లైన్ 181'
    )
  },
  {
    id: 'faq-24-hours',
    q: t(
      'Can the police keep someone for more than 24 hours?',
      'क्या पुलिस किसी को 24 घंटे से अधिक हिरासत में रख सकती है?',
      'పోలీసులు ఎవరినైనా 24 గంటల కంటే ఎక్కువ నిర్బంధంలో ఉంచగలరా?'
    ),
    a: t(
      'A person arrested must be produced before a Magistrate within 24 hours of arrest. Detention beyond that is lawful only under a Magistrate\u2019s remand order. If the investigation is not completed within 60 or 90 days (depending on the offence), the accused may become entitled to default bail. If someone is held without any order, a habeas corpus petition can be filed in the High Court or Supreme Court.',
      'गिरफ़्तार व्यक्ति को गिरफ़्तारी के 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश किया जाना चाहिए। इससे अधिक हिरासत केवल मजिस्ट्रेट के रिमांड आदेश पर ही वैध है। यदि जाँच 60 या 90 दिनों (अपराध के अनुसार) में पूरी न हो, तो अभियुक्त डिफ़ॉल्ट ज़मानत का हकदार हो सकता है। यदि किसी को बिना किसी आदेश के हिरासत में रखा गया है, तो उच्च न्यायालय या सर्वोच्च न्यायालय में बंदी प्रत्यक्षीकरण याचिका दायर की जा सकती है।',
      'అరెస్ట్ అయిన వ్యక్తిని 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరు పరచాలి. ఆ తర్వాత నిర్బంధం మేజిస్ట్రేట్ రిమాండ్ ఆదేశం ఉంటేనే చట్టబద్ధం. దర్యాప్తు 60 లేదా 90 రోజుల్లో (నేరాన్ని బట్టి) పూర్తి కాకపోతే నిందితుడు డిఫాల్ట్ బెయిల్కు అర్హులు కావచ్చు. ఎటువంటి ఆదేశం లేకుండా ఎవరినైనా నిర్బంధంలో ఉంచితే హైకోర్టు లేదా సుప్రీంకోర్టులో హెబియస్ కార్పస్ పిటిషన్ దాఖలు చేయవచ్చు.'
    ),
    linkTo: 'detained-longer-than-24-hours',
    cite: t(
      'Art. 22(2) · BNSS §57, §58, §187 · Art. 32, 226',
      'अनु. 22(2) · बीएनएसएस §57, §58, §187 · अनु. 32, 226',
      'ఆర్టి. 22(2) · BNSS §57, §58, §187 · ఆర్టి. 32, 226'
    )
  },
  {
    id: 'faq-notice',
    q: t(
      'I received a police notice to appear. Do I have to go?',
      'मुझे पेश होने का पुलिस नोटिस मिला है। क्या मुझे जाना होगा?',
      'హాజరు కావాలని పోలీసు నోటీసు వచ్చింది. నేను వెళ్లాల్సిందేనా?'
    ),
    a: t(
      'A notice to appear under the law asks you to appear before the police officer at a specified time. You should comply with the notice — the law provides that a person who complies should not be arrested on that ground unless fresh grounds arise. Complying with the notice is not an admission of guilt. You may bring a lawyer and you may ask for the details in writing. Women, children and persons with significant illness or disability may not be required to attend away from their residence.',
      'कानून के तहत पेशी नोटिस आपको निर्धारित समय पर पुलिस अधिकारी के सामने उपस्थित होने के लिए कहता है। आपको नोटिस का पालन करना चाहिए — कानून कहता है कि नोटिस का पालन करने वाले व्यक्ति को इसी आधार पर गिरफ़्तार नहीं किया जाना चाहिए, जब तक नए आधार न उत्पन्न हों। नोटिस का पालन अपराध स्वीकारना नहीं है। आप वकील ला सकते हैं और विवरण लिखित में माँग सकते हैं। महिलाओं, बच्चों और गंभीर रूप से बीमार या विकलांग व्यक्तियों को अपने निवास से दूर उपस्थित होने के लिए बाध्य नहीं किया जा सकता।',
      'చట్టం ప్రకారం హాజరు నోటీసు నిర్దేశిత సమయంలో పోలీసు అధికారి ముందు హాజరు కావాలని అడుగుతుంది. మీరు నోటీసు పాటించాలి — నోటీసు పాటించిన వ్యక్తిని కొత్త ఆధారాలు లేకుండా ఆ కారణంగా అరెస్ట్ చేయకూడదని చట్టం నిర్దేశిస్తుంది. నోటీసు పాటించడం నేరాన్ని అంగీకరించడం కాదు. మీరు న్యాయవాదిని తీసుకురావచ్చు, వివరాలు వ్రాతపూర్వకంగా అడగవచ్చు. మహిళలు, పిల్లలు మరియు తీవ్ర అనారోగ్యం లేదా వికలాంగులు తమ నివాసానికి దూరంగా హాజరు కావాల్సిన అవసరం లేదు.'
    ),
    linkTo: 'police-notice-to-appear',
    cite: t(
      'BNSS §35(3), §35(4), §35(5), §179',
      'बीएनएसएस §35(3), §35(4), §35(5), §179',
      'BNSS §35(3), §35(4), §35(5), §179'
    )
  },
  {
    id: 'faq-home',
    q: t(
      'Can the police enter my home without permission?',
      'क्या पुलिस बिना अनुमति मेरे घर में प्रवेश कर सकती है?',
      'అనుమతి లేకుండా పోలీసులు నా ఇంట్లోకి ప్రవేశించగలరా?'
    ),
    a: t(
      'The police cannot force entry without lawful authority. A search of premises generally requires a warrant or another lawful basis — you may ask to see the warrant before allowing entry, and you should note the officer\u2019s details. If a lawful search is conducted, you must allow it. Do not physically obstruct a lawful search; if you believe it is unlawful, note what happened and complain through the proper route afterwards.',
      'बिना वैध अधिकार के पुलिस ज़बरदस्ती प्रवेश नहीं कर सकती। परिसर की तलाशी के लिए सामान्यतः वारंट या अन्य वैध आधार चाहिए — प्रवेश की अनुमति से पहले आप वारंट देखने को कह सकते हैं और अधिकारी का विवरण नोट करें। यदि वैध तलाशी हो रही है, तो आपको अनुमति देनी होगी। वैध तलाशी में शारीरिक बाधा न डालें; यदि अवैध लगे तो घटना नोट करें और बाद में उचित मार्ग से शिकायत करें।',
      'చట్టబద్ధ అధికారం లేకుండా పోలీసులు బలవంతంగా ప్రవేశించలేరు. ప్రాంగణ సోదాకు సాధారణంగా వారెంట్ లేదా మరో చట్టబద్ధ ఆధారం అవసరం — ప్రవేశానికి అనుమతించే ముందు వారెంట్ చూడమని అడగవచ్చు, అధికారి వివరాలు గమనించండి. చట్టబద్ధ సోదా జరుగుతుంటే అనుమతించాలి. చట్టబద్ధ సోదాకు శారీరకంగా అడ్డుపడకండి; చట్టవిరుద్ధమని భావిస్తే జరిగినది గమనించి తర్వాత సరైన మార్గంలో ఫిర్యాదు చేయండి.'
    ),
    linkTo: 'police-came-to-my-home',
    cite: t(
      'BNSS §96, §103, §185',
      'बीएनएसएस §96, §103, §185',
      'BNSS §96, §103, §185'
    )
  },
  {
    id: 'faq-refused-help',
    q: t(
      'The police are not helping with my complaint. Where can I go?',
      'पुलिस मेरी शिकायत पर कार्रवाई नहीं कर रही। मैं कहाँ जा सकता हूँ?',
      'పోలీసులు నా ఫిర్యాదుపై చర్య తీసుకోవడం లేదు. నేను ఎక్కడికి వెళ్లాలి?'
    ),
    a: t(
      'If your complaint concerns a cognizable offence, the police must record it. If they refuse or fail to act, you can complain to the Superintendent of Police and to the Magistrate, who may order an investigation. For a non-cognizable complaint, the police must record it and direct you to the Magistrate. You can also approach the State Human Rights Commission or NHRC for police misconduct, and free legal aid is available through NALSA and the State Legal Services Authorities.',
      'यदि आपकी शिकायत संज्ञेय अपराध की है, तो पुलिस को उसे दर्ज करना ही होगा। इनकार या निष्क्रियता पर आप पुलिस अधीक्षक और मजिस्ट्रेट से शिकायत कर सकते हैं, जो जाँच का आदेश दे सकते हैं। गैर-संज्ञेय शिकायत के लिए पुलिस को उसे दर्ज कर आपको मजिस्ट्रेट के पास भेजना होगा। पुलिस कदाचार के लिए राज्य मानवाधिकार आयोग या एनएचआरसी से भी संपर्क कर सकते हैं, और नालसा व राज्य विधिक सेवा प्राधिकरण से निःशुल्क कानूनी सहायता उपलब्ध है।',
      'మీ ఫిర్యాదు దోషారోపణ నేరానికి సంబంధించినదైతే పోలీసులు దానిని నమోదు చేయాలి. నిరాకరిస్తే లేదా చర్య తీసుకోకపోతే సూపరింటెండెంట్ ఆఫ్ పోలీసుకు మరియు మేజిస్ట్రేట్కు ఫిర్యాదు చేయవచ్చు — వారు దర్యాప్తు ఆదేశించవచ్చు. దోషారోపణేతర ఫిర్యాదుకు పోలీసులు దానిని నమోదు చేసి మేజిస్ట్రేట్ వద్దకు పంపాలి. పోలీసు దుర్వర్తనకు రాష్ట్ర మానవ హక్కుల కమిషన్ లేదా NHRCని సంప్రదించవచ్చు; NALSA మరియు రాష్ట్ర న్యాయ సేవా అథారిటీల ద్వారా ఉచిత న్యాయ సహాయం అందుబాటులో ఉంది.'
    ),
    linkTo: 'police-refused-to-help',
    cite: t(
      'BNSS §173, §174, §175(3) · NALSA',
      'बीएनएसएस §173, §174, §175(3) · नालसा',
      'BNSS §173, §174, §175(3) · NALSA'
    )
  }
]
