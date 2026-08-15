import type { HelpRoute } from './types'

const t = (en: string, hi: string, te: string) => ({ en, hi, te })

/**
 * Legal help routes. All URLs are official (NALSA and its state portals).
 * The state-scoped entries are intentionally limited — add states only with
 * verified official URLs.
 */
export const HELP_ROUTES: Record<string, HelpRoute> = {
  nalsa: {
    id: 'nalsa',
    authority: t('NALSA — National Legal Services Authority', 'नालसा — राष्ट्रीय विधिक सेवा प्राधिकरण', 'NALSA — జాతీయ న్యాయ సేవా అథారిటీ'),
    purpose: t(
      'Provides free legal aid and legal awareness to eligible persons across India.',
      'पूरे भारत में पात्र व्यक्तियों को निःशुल्क कानूनी सहायता और कानूनी जागरूकता प्रदान करता है।',
      'భారతదేశం అంతటా అర్హులకు ఉచిత న్యాయ సహాయం, చట్ట అవగాహన అందిస్తుంది.'
    ),
    whenToUse: t(
      'When you need a lawyer but cannot afford one, or need legal information and guidance.',
      'जब आपको वकील चाहिए लेकिन खर्च वहन नहीं कर सकते, या कानूनी जानकारी और मार्गदर्शन चाहिए।',
      'మీకు న్యాయవాది అవసరం కానీ భరించలేకపోతే, లేదా న్యాయ సమాచారం, మార్గదర్శనం అవసరమైతే.'
    ),
    officialUrl: 'https://nalsa.gov.in/',
    scope: 'all'
  },
  'helpline-15100': {
    id: 'helpline-15100',
    authority: t('NALSA Legal Aid Helpline — 15100', 'नालसा विधिक सहायता हेल्पलाइन — 15100', 'NALSA న్యాయ సహాయ హెల్ప్లైన్ — 15100'),
    purpose: t(
      'Toll-free national legal aid helpline of NALSA.',
      'नालसा की टोल-फ्री राष्ट्रीय विधिक सहायता हेल्पलाइन।',
      'NALSA యొక్క టోల్-ఫ్రీ జాతీయ న్యాయ సహాయ హెల్ప్లైన్.'
    ),
    whenToUse: t(
      'When you need quick legal assistance or do not know where to start.',
      'जब आपको त्वरित कानूनी सहायता चाहिए या पता नहीं कहाँ से शुरू करें।',
      'శీఘ్ర న్యాయ సహాయం అవసరమైనప్పుడు లేదా ఎక్కడ ప్రారంభించాలో తెలియనప్పుడు.'
    ),
    officialUrl: 'https://nalsa.gov.in/',
    scope: 'all'
  },
  'state-directory': {
    id: 'state-directory',
    authority: t('State & District Legal Services Authorities', 'राज्य एवं जिला विधिक सेवा प्राधिकरण', 'రాష్ట్ర & జిల్లా న్యాయ సేవా అథారిటీలు'),
    purpose: t(
      'Official NALSA directory of every State, District and Taluk legal services authority.',
      'सभी राज्य, जिला और तालुक विधिक सेवा प्राधिकरणों की आधिकारिक नालसा निर्देशिका।',
      'ప్రతి రాష్ట్ర, జిల్లా, తాలూకా న్యాయ సేవా అథారిటీ అధికారిక NALSA డైరెక్టరీ.'
    ),
    whenToUse: t(
      'To find the legal aid office nearest to you.',
      'अपने निकटतम विधिक सहायता कार्यालय खोजने के लिए।',
      'మీకు దగ్గరగా ఉన్న న్యాయ సహాయ కార్యాలయాన్ని కనుగొనడానికి.'
    ),
    officialUrl: 'https://nalsa.gov.in/directory/',
    scope: 'all'
  },
  apslsa: {
    id: 'apslsa',
    authority: t('APSLSA — Andhra Pradesh State Legal Services Authority', 'एपीएसएलएसए — आंध्र प्रदेश राज्य विधिक सेवा प्राधिकरण', 'APSLSA — ఆంధ్రప్రదేశ్ రాష్ట్ర న్యాయ సేవా అథారిటీ'),
    purpose: t(
      'Free legal aid for eligible residents of Andhra Pradesh.',
      'आंध्र प्रदेश के पात्र निवासियों के लिए निःशुल्क कानूनी सहायता।',
      'ఆంధ్రప్రదేశ్ అర్హులైన నివాసులకు ఉచిత న్యాయ సహాయం.'
    ),
    whenToUse: t(
      'If you live in Andhra Pradesh and need legal aid or a lawyer.',
      'यदि आप आंध्र प्रदेश में रहते हैं और कानूनी सहायता या वकील चाहते हैं।',
      'మీరు ఆంధ్రప్రదేశ్లో నివసిస్తూ న్యాయ సహాయం లేదా న్యాయవాది అవసరమైతే.'
    ),
    officialUrl: 'https://andhrapradesh.nalsa.gov.in/',
    scope: 'ap'
  },
  'nhrc-route': {
    id: 'nhrc-route',
    authority: t('NHRC — National Human Rights Commission', 'एनएचआरसी — राष्ट्रीय मानवाधिकार आयोग', 'NHRC — జాతీయ మానవ హక్కుల కమిషన్'),
    purpose: t(
      'Inquires into complaints of human-rights violations, including by police.',
      'पुलिस सहित मानवाधिकार उल्लंघन की शिकायतों की जाँच करता है।',
      'పోలీసులతో సహా మానవ హక్కుల ఉల్లంఘన ఫిర్యాదులను విచారిస్తుంది.'
    ),
    whenToUse: t(
      'For serious human-rights violations connected with police conduct.',
      'पुलिस आचरण से जुड़े गंभीर मानवाधिकार उल्लंघन के लिए।',
      'పోలీసు ప్రవర్తనకు సంబంధించిన తీవ్రమైన మానవ హక్కుల ఉల్లంఘనలకు.'
    ),
    officialUrl: 'https://nhrc.nic.in/',
    scope: 'all'
  },
  cyber: {
    id: 'cyber',
    authority: t('National Cyber Crime Reporting Portal', 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल', 'జాతీయ సైబర్ నేర రిపోర్టింగ్ పోర్టల్'),
    purpose: t(
      'Official portal to report cybercrime and access the cyber helpline 1930.',
      'साइबर अपराध रिपोर्ट करने और साइबर हेल्पलाइन 1930 के लिए आधिकारिक पोर्टल।',
      'సైబర్ నేరాలను నివేదించడానికి, సైబర్ హెల్ప్లైన్ 1930 కోసం అధికారిక పోర్టల్.'
    ),
    whenToUse: t(
      'For online fraud, cyber harassment and other digital offences.',
      'ऑनलाइन धोखाधड़ी, साइबर उत्पीड़न और अन्य डिजिटल अपराधों के लिए।',
      'ఆన్లైన్ మోసం, సైబర్ వేధింపు, ఇతర డిజిటల్ నేరాలకు.'
    ),
    officialUrl: 'https://cybercrime.gov.in/',
    scope: 'all'
  },
  cpgrams: {
    id: 'cpgrams',
    authority: t('CPGRAMS — Public Grievance Portal', 'सीपीग्राम्स — लोक शिकायत पोर्टल', 'CPGRAMS — ప్రజా ఫిర్యాదు పోర్టల్'),
    purpose: t(
      'Official central portal for grievances against government departments and services.',
      'सरकारी विभागों और सेवाओं के खिलाफ शिकायतों का आधिकारिक केंद्रीय पोर्टल।',
      'ప్రభుత్వ విభాగాలు, సేవలపై ఫిర్యాదుల అధికారిక కేంద్ర పోర్టల్.'
    ),
    whenToUse: t(
      'For general grievances about government services.',
      'सरकारी सेवाओं से संबंधित सामान्य शिकायतों के लिए।',
      'ప్రభుత్వ సేవలపై సాధారణ ఫిర్యాదులకు.'
    ),
    officialUrl: 'https://pgportal.gov.in/',
    scope: 'all'
  },
  'dlsa-directory': {
    id: 'dlsa-directory',
    authority: t('District Legal Services Authorities (NALSA directory)', 'जिला विधिक सेवा प्राधिकरण (नालसा निर्देशिका)', 'జిల్లా న్యాయ సేవా అథారిటీలు (NALSA డైరెక్టరీ)'),
    purpose: t(
      'Official NALSA directory of every State, District and Taluk legal services authority, with contact details.',
      'संपर्क विवरण सहित सभी राज्य, जिला और तालुक विधिक सेवा प्राधिकरणों की आधिकारिक नालसा निर्देशिका।',
      'సంప్రదింపు వివరాలతో ప్రతి రాష్ట్ర, జిల్లా, తాలూకా న్యాయ సేవా అథారిటీ అధికారిక NALSA డైరెక్టరీ.'
    ),
    whenToUse: t(
      'To find and contact the District Legal Services Authority (DLSA) nearest to you.',
      'अपने निकटतम जिला विधिक सेवा प्राधिकरण (डीएलएसए) को खोजने और संपर्क करने के लिए।',
      'మీకు దగ్గరగా ఉన్న జిల్లా న్యాయ సేవా అథారిటీని (DLSA) కనుగొని సంప్రదించడానికి.'
    ),
    officialUrl: 'https://nalsa.gov.in/directory/',
    scope: 'all'
  }
}

export function getHelpRoute(id: string): HelpRoute | undefined {
  return HELP_ROUTES[id]
}

export function getHelpRoutes(ids: string[]): HelpRoute[] {
  return ids.map((id) => HELP_ROUTES[id]).filter(Boolean)
}

/* ────────────────────────────────────────────────────────────────
   All Indian states & union territories for the legal-help checklist.

   VERIFICATION POLICY: every URL below was checked live (August 2026).
   • Most states/UTs have an official NALSA-hosted portal at
     https://{state}.nalsa.gov.in/ (returned HTTP 200 when verified).
   • Bihar → Patna High Court official page; Jharkhand → jhalsa.org (its own
     official site).
   • Odisha, Andaman & Nicobar, Dadra & Nagar Haveli and Daman & Diu,
     Jammu & Kashmir and Lakshadweep have no dedicated live portal, so they
     link to the official NALSA state-authority directory instead.
   Do not add unverified URLs here.
──────────────────────────────────────────────────────────────── */

export const NALSA_DIRECTORY_URL = 'https://nalsa.gov.in/directory/'

const n = (key: string): string => `https://${key}.nalsa.gov.in/`

/** State SLSA portal root (verified live, HTTP 200). */
const P = (key: string) => n(key)

/** State SLSA official contact / DLSA page (verified live, HTTP 200, Aug 2026). */
const C = (key: string) => n(key) + 'contact-us/'

/** A state/UT in the checklist. `officialUrl` and `contactUrl` are verified real links. */
export interface StateInfo {
  key: string
  name: string
  officialUrl: string
  /** Official contact / DLSA listing page (per-district authority details live there). */
  contactUrl: string
  hasPortal: boolean
  kind: 'state' | 'ut'
}

export const STATES: StateInfo[] = [
  // ── States ──
  { key: 'ap', name: 'Andhra Pradesh', officialUrl: P('andhrapradesh'), contactUrl: C('andhrapradesh'), hasPortal: true, kind: 'state' },
  { key: 'ar', name: 'Arunachal Pradesh', officialUrl: P('arunachalpradesh'), contactUrl: C('arunachalpradesh'), hasPortal: true, kind: 'state' },
  { key: 'as', name: 'Assam', officialUrl: P('assam'), contactUrl: C('assam'), hasPortal: true, kind: 'state' },
  { key: 'br', name: 'Bihar', officialUrl: 'https://patnahighcourt.gov.in/bslsa/', contactUrl: 'https://patnahighcourt.gov.in/bslsa/Contact.aspx', hasPortal: true, kind: 'state' },
  { key: 'cg', name: 'Chhattisgarh', officialUrl: P('chhattisgarh'), contactUrl: C('chhattisgarh'), hasPortal: true, kind: 'state' },
  { key: 'ga', name: 'Goa', officialUrl: P('goa'), contactUrl: C('goa'), hasPortal: true, kind: 'state' },
  { key: 'gj', name: 'Gujarat', officialUrl: P('gujarat'), contactUrl: C('gujarat'), hasPortal: true, kind: 'state' },
  { key: 'hr', name: 'Haryana', officialUrl: P('haryana'), contactUrl: C('haryana'), hasPortal: true, kind: 'state' },
  { key: 'hp', name: 'Himachal Pradesh', officialUrl: P('himachalpradesh'), contactUrl: C('himachalpradesh'), hasPortal: true, kind: 'state' },
  { key: 'jh', name: 'Jharkhand', officialUrl: 'https://jhalsa.org/', contactUrl: 'https://jhalsa.org/contact-us/', hasPortal: true, kind: 'state' },
  { key: 'ka', name: 'Karnataka', officialUrl: P('karnataka'), contactUrl: C('karnataka'), hasPortal: true, kind: 'state' },
  { key: 'kl', name: 'Kerala', officialUrl: P('kerala'), contactUrl: C('kerala'), hasPortal: true, kind: 'state' },
  { key: 'mp', name: 'Madhya Pradesh', officialUrl: P('madhyapradesh'), contactUrl: C('madhyapradesh'), hasPortal: true, kind: 'state' },
  { key: 'mh', name: 'Maharashtra', officialUrl: P('maharashtra'), contactUrl: C('maharashtra'), hasPortal: true, kind: 'state' },
  { key: 'mn', name: 'Manipur', officialUrl: P('manipur'), contactUrl: C('manipur'), hasPortal: true, kind: 'state' },
  { key: 'ml', name: 'Meghalaya', officialUrl: P('meghalaya'), contactUrl: C('meghalaya'), hasPortal: true, kind: 'state' },
  { key: 'mz', name: 'Mizoram', officialUrl: P('mizoram'), contactUrl: C('mizoram'), hasPortal: true, kind: 'state' },
  { key: 'nl', name: 'Nagaland', officialUrl: P('nagaland'), contactUrl: C('nagaland'), hasPortal: true, kind: 'state' },
  { key: 'od', name: 'Odisha', officialUrl: NALSA_DIRECTORY_URL, contactUrl: NALSA_DIRECTORY_URL, hasPortal: false, kind: 'state' },
  { key: 'pb', name: 'Punjab', officialUrl: P('punjab'), contactUrl: C('punjab'), hasPortal: true, kind: 'state' },
  { key: 'rj', name: 'Rajasthan', officialUrl: P('rajasthan'), contactUrl: C('rajasthan'), hasPortal: true, kind: 'state' },
  { key: 'sk', name: 'Sikkim', officialUrl: P('sikkim'), contactUrl: C('sikkim'), hasPortal: true, kind: 'state' },
  { key: 'tn', name: 'Tamil Nadu', officialUrl: P('tamilnadu'), contactUrl: C('tamilnadu'), hasPortal: true, kind: 'state' },
  { key: 'tg', name: 'Telangana', officialUrl: P('telangana'), contactUrl: C('telangana'), hasPortal: true, kind: 'state' },
  { key: 'tr', name: 'Tripura', officialUrl: P('tripura'), contactUrl: C('tripura'), hasPortal: true, kind: 'state' },
  { key: 'up', name: 'Uttar Pradesh', officialUrl: P('uttarpradesh'), contactUrl: C('uttarpradesh'), hasPortal: true, kind: 'state' },
  { key: 'uk', name: 'Uttarakhand', officialUrl: P('uttarakhand'), contactUrl: C('uttarakhand'), hasPortal: true, kind: 'state' },
  { key: 'wb', name: 'West Bengal', officialUrl: P('westbengal'), contactUrl: C('westbengal'), hasPortal: true, kind: 'state' },

  // ── Union Territories ──
  { key: 'an', name: 'Andaman & Nicobar Islands', officialUrl: NALSA_DIRECTORY_URL, contactUrl: NALSA_DIRECTORY_URL, hasPortal: false, kind: 'ut' },
  { key: 'ch', name: 'Chandigarh', officialUrl: P('chandigarh'), contactUrl: C('chandigarh'), hasPortal: true, kind: 'ut' },
  { key: 'dn', name: 'Dadra & Nagar Haveli and Daman & Diu', officialUrl: NALSA_DIRECTORY_URL, contactUrl: NALSA_DIRECTORY_URL, hasPortal: false, kind: 'ut' },
  { key: 'dl', name: 'Delhi', officialUrl: P('delhi'), contactUrl: C('delhi'), hasPortal: true, kind: 'ut' },
  { key: 'jk', name: 'Jammu & Kashmir', officialUrl: NALSA_DIRECTORY_URL, contactUrl: NALSA_DIRECTORY_URL, hasPortal: false, kind: 'ut' },
  { key: 'la', name: 'Ladakh', officialUrl: P('ladakh'), contactUrl: C('ladakh'), hasPortal: true, kind: 'ut' },
  { key: 'ld', name: 'Lakshadweep', officialUrl: NALSA_DIRECTORY_URL, contactUrl: NALSA_DIRECTORY_URL, hasPortal: false, kind: 'ut' },
  { key: 'py', name: 'Puducherry', officialUrl: P('puducherry'), contactUrl: C('puducherry'), hasPortal: true, kind: 'ut' }
]

export function getState(key: string): StateInfo | undefined {
  return STATES.find((s) => s.key === key)
}

/* ────────────────────────────────────────────────────────────────
   SLSA contact details (address / phone / email).

   SOURCE: the official NALSA directory (https://nalsa.gov.in/directory/),
   fetched and parsed on 15 August 2026. All details below were copied
   verbatim from that official page (only formatting cleaned).
   Do not edit these values from memory — re-fetch the directory page.
──────────────────────────────────────────────────────────────── */

export interface StateContact {
  address: string
  phone?: string
  email?: string
}

export const STATE_CONTACTS: Record<string, StateContact> = {
  ap: { address: 'H.No.2-273/54-A, B.S.R Commercial Complex, Malkapuram village, Andhra Pradesh Secretariat Road, Opposite Traffic Police Station, Thulluru Mandal, Guntur District – 522 238', phone: '0863-2372755-60', email: 'apslsauthority@yahoo.com' },
  ar: { address: 'Tower-1 Apartment, Zoo Road, Chimpu, Itanagar – 791113', phone: '0360-2310999, 2310116-17', email: 'apslsa2013@rediffmail.com' },
  as: { address: 'Gauhati High Court, Old Block, 1st Floor, Guwahati – 781001', phone: '0361-2601843 / 2516367', email: 'aslsa.guwahati2020@gmail.com' },
  br: { address: 'Opposite Patna Museum, Buddha Marg, Patna – 800 001', phone: '0612-2508943, 2508390', email: 'ms.bslsa-bih@gov.in' },
  cg: { address: 'Old High Court Building, Bilaspur – 495001, Chhattisgarh', phone: '07752-410210', email: 'cgslsa.cg@nic.in' },
  ga: { address: 'High Court of Bombay at Goa, Penha-de-franca, Porvorim – Goa', phone: '0832-2492614, 2492664', email: 'reg-high.goa@nic.in' },
  gj: { address: '3rd Floor, Near Gujarat High Court Post Office, High Court Complex, Sola, Ahmedabad – 380 060', phone: '079-27664964 / 27665296 · Toll-free 1800-233-7966', email: 'msguj.lsa@nic.in' },
  hr: { address: 'Institutional Plot No. 9, Sector-14, Panchkula – 134109', phone: '0172-2583309 / 2586309', email: 'hslsa.haryana@gmail.com' },
  hp: { address: 'Block No. 22, SDA Complex, Kusumpti, Shimla – 171 009', phone: '0177-2623862', email: 'mslegal-hp@nic.in' },
  jk: { address: 'Winter (Nov–Apr): JDA Complex, Janipur, Jammu – 180007 · Summer (May–Oct): Old Secretariat, Srinagar – 190001', phone: 'Jammu 0191-2539962, 2539679 · Srinagar 0194-2480408, 2476945', email: 'jkslsa1234@gmail.com' },
  jh: { address: '“NYAYA SADAN”, Near AG Office, Doranda, Ranchi – 834 002', phone: '0651-2481520, 2482392', email: 'jhalsaranchi@gmail.com' },
  ka: { address: 'Nyaya Degula, 1st Floor, H. Siddaiah Road, Bangalore – 560 027', phone: '080-22111875, 22111714', email: 'karslsa@gmail.com' },
  kl: { address: 'Niyama Sahaya Bhavan, High Court Compound, Ernakulam, Kochi – 682 031', phone: '0484-2396717, 2562919', email: 'kelsakerala@nic.in' },
  mp: { address: 'C-2, South Civil Lines, Pachpedi, Jabalpur – 482001', phone: '0761-2678352, 2627370', email: 'mplsajab@nic.in' },
  mh: { address: '105, High Court, PWD Building, Fort, Mumbai – 400 032', phone: '022-22691395, 22691358', email: 'mslsa-bhc@nic.in' },
  mn: { address: 'ADR Centre, Lamphel Court Complex, Lamphelpat – 795004, Imphal West', phone: 'Helpline 9436239666', email: 'maslsa.imphal@gmail.com' },
  ml: { address: 'R.No. 120, MATI Building, Additional Secretariat, Shillong – 793 001', phone: '0364-2501051', email: 'mslsa-meg@nic.in' },
  mz: { address: 'Behind New District Court Building, High Court Complex, MINECO, Aizawl – 796001', phone: '0389-2336621', email: 'slsamizoram@gmail.com' },
  nl: { address: 'KDPA Building, Top Floor, D.C. Office Compound, Kohima – 797001', phone: '0370-2290153', email: 'nslsa.nagaland@yahoo.in' },
  od: { address: 'AAIN Seva Bhawan, Sector-1, CDA, Cuttack – 753014, Odisha', phone: '0671-2307678, 2304389, 2307071', email: 'oslsa1997@gmail.com' },
  pb: { address: 'Site No. 126, Opposite GMADA Community Centre, Sector 69, S.A.S. Nagar, Mohali', phone: '0172-2216690, 2216750', email: 'ms@punjab.gov.in' },
  rj: { address: 'Rajasthan High Court Building, Jaipur – 302 005', phone: '0141-2227481', email: 'rslsajp@gmail.com' },
  sk: { address: 'Development Area, Gangtok, East Sikkim – 737101', phone: '03592-207753', email: 'sikkim_slsa@live.com' },
  tn: { address: 'North Fort Road, High Court Campus, Chennai – 600 104', phone: '044-25342834, 25235767', email: 'tnslsa@gmail.com' },
  tg: { address: '1st & 2nd Floor, Nyaya Seva Sadan, Near Nagamata Temple, Gate No. 2, High Court Premises, Hyderabad – 500 066', phone: '040-23446725', email: 'telenganaslsa@gmail.com' },
  tr: { address: 'Old District & Sessions Judge Court, Near Fire Brigade Chowmuhani, Agartala – 799 001', phone: '0381-2322481', email: 'salsatripura@gmail.com' },
  up: { address: '3rd Floor, Jawahar Bhavan Annexe, Lucknow – 226 001', phone: '0522-2286395, 2287972', email: 'upslsa@nic.in' },
  uk: { address: 'ADR Centre, High Court Campus, Nainital – 263002', phone: '05942-236762', email: 'ukslsanainial@gmail.com' },
  wb: { address: 'City Civil Court Building (1st Floor), 2 & 3, Kiron Sankar Roy Road, Kolkata – 700 001', phone: '033-22483892', email: 'wbstatelegal@gmail.com' },
  an: { address: 'Secretariat, A&N Administration, Port Blair – 744 101', phone: '03192-232835', email: 'secy.law2016@gmail.com' },
  ch: { address: 'UT Chandigarh SLSA, Additional Deluxe Building, Ground Floor, Sector 9-D, Chandigarh – 160009', phone: '0172-2742999', email: 'slsa_utchd@yahoo.com' },
  dn: { address: 'District & Sessions Court, Tokarkhada, Silvassa (DNH – 396 230) · Fort Area, Moti Daman (Daman – 396220)', phone: '0260-2641337 (DNH) · 0260-2230887 (Daman)', email: 'reg.slsa-dnh@gov.in' },
  dl: { address: 'Central Office, 3rd Floor, Rouse Avenue District Court Complex, Pt. Deen Dayal Upadhyaya Marg, New Delhi – 110002', phone: '011-23232273', email: 'dslsa-phc@nic.in' },
  la: { address: 'Dambuchan, Akling, Leh, Ladakh – 194101', email: 'ladakhlsa1234@gmail.com' },
  ld: { address: 'District & Sessions Judge, Kavaratti Islands – 682 555', phone: '04896-263422', email: 'lakshadweepjusticeforall@gmail.com' },
  py: { address: 'No. 3, Lal Bahadur Shastri Street, Puducherry – 605 001', phone: '0413-2338831', email: 'msutplsa@gmail.com' }
}

export function getStateContact(key: string): StateContact | undefined {
  return STATE_CONTACTS[key]
}
