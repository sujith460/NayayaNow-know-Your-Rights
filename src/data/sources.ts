import type { Source, L10n } from './types'

const en = (s: string): L10n => ({ en: s, hi: '', te: '' })

/**
 * Verified official sources only. Every URL here has been checked against
 * the official institution website (India Code, NALSA, NHRC, etc.).
 * Do not invent URLs.
 */
export const SOURCES: Record<string, Source> = {
  bnss: {
    id: 'bnss',
    institution: en('India Code — Ministry of Law and Justice'),
    legalInstrument: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (Act 46 of 2023)',
    officialUrl: 'https://www.indiacode.nic.in/handle/123456789/20099',
    purpose: en(
      'The primary procedural law for police procedure, arrest, FIR, search, seizure and custody in India (replaced the CrPC). NyayaNow cites its sections for procedural rights.'
    ),
    lastVerified: '2026-08-15'
  },
  constitution: {
    id: 'constitution',
    institution: en('Constitution of India — India Code'),
    legalInstrument: 'Constitution of India, 1950',
    sectionOrArticle: 'Articles 20(3), 21, 22',
    officialUrl: 'https://www.indiacode.nic.in/bitstream/123456789/19150/1/constitution_of_india.pdf',
    purpose: en(
      'The supreme law of India. Articles 20(3), 21 and 22 protect against self-incrimination and arbitrary arrest and detention.'
    ),
    lastVerified: '2026-08-15'
  },
  pca: {
    id: 'pca',
    institution: en('India Code — Ministry of Law and Justice'),
    legalInstrument: 'Prevention of Corruption Act, 1988 (Act 49 of 1988)',
    officialUrl: 'https://www.indiacode.nic.in/handle/123456789/15302',
    purpose: en(
      'The central law on bribery and corruption by public servants, including police officers. NyayaNow cites it for bribe-related guidance.'
    ),
    lastVerified: '2026-08-15'
  },
  lsaa: {
    id: 'lsaa',
    institution: en('India Code — Ministry of Law and Justice'),
    legalInstrument: 'Legal Services Authorities Act, 1987',
    officialUrl: 'https://www.indiacode.nic.in/bitstream/123456789/19023/1/legal_service_authorities_act%2C_1987.pdf',
    purpose: en(
      'Establishes free legal services (legal aid) for eligible persons through NALSA, State and District Legal Services Authorities.'
    ),
    lastVerified: '2026-08-15'
  },
  nalsa: {
    id: 'nalsa',
    institution: en('National Legal Services Authority (NALSA)'),
    legalInstrument: 'NALSA — Legal Services Authorities Act, 1987',
    officialUrl: 'https://nalsa.gov.in/',
    purpose: en(
      'The national authority for free legal aid. NyayaNow directs users here for legal help and for state/district Legal Services Authority contact details.'
    ),
    lastVerified: '2026-08-15'
  },
  nhrc: {
    id: 'nhrc',
    institution: en('National Human Rights Commission (NHRC)'),
    legalInstrument: 'Protection of Human Rights Act, 1993',
    officialUrl: 'https://nhrc.nic.in/',
    purpose: en(
      'The national body that can inquire into complaints of human-rights violations, including by police. Used in the abuse/threat guidance.'
    ),
    lastVerified: '2026-08-15'
  },
  cpgrams: {
    id: 'cpgrams',
    institution: en('CPGRAMS — Department of Administrative Reforms & Public Grievances'),
    legalInstrument: 'Centralised Public Grievance Redress and Monitoring System',
    officialUrl: 'https://pgportal.gov.in/',
    purpose: en(
      'The official central portal for registering grievances against government departments and services.'
    ),
    lastVerified: '2026-08-15'
  },
  cyber: {
    id: 'cyber',
    institution: en('National Cyber Crime Reporting Portal — Ministry of Home Affairs'),
    legalInstrument: 'National Cyber Crime Reporting Portal',
    officialUrl: 'https://cybercrime.gov.in/',
    purpose: en(
      'Official portal to report cybercrime (including online fraud and threats) and access cyber helpline 1930.'
    ),
    lastVerified: '2026-08-15'
  },
  mha: {
    id: 'mha',
    institution: en('Ministry of Home Affairs, Government of India'),
    legalInstrument: 'Ministry of Home Affairs',
    officialUrl: 'https://www.mha.gov.in/',
    purpose: en('The central ministry responsible for internal security and police administration; host of key citizen services and reports.'),
    lastVerified: '2026-08-15'
  },
  sci: {
    id: 'sci',
    institution: en('Supreme Court of India'),
    legalInstrument: 'Judgments of the Supreme Court of India',
    officialUrl: 'https://www.sci.gov.in/',
    purpose: en(
      'The highest court of India. NyayaNow cites its judgments (e.g., on FIR registration) as primary legal sources.'
    ),
    lastVerified: '2026-08-15'
  },
  apslsa: {
    id: 'apslsa',
    institution: en('Andhra Pradesh State Legal Services Authority'),
    legalInstrument: 'APSLSA — Legal Services Authorities Act, 1987',
    officialUrl: 'https://andhrapradesh.nalsa.gov.in/',
    purpose: en('The State Legal Services Authority for Andhra Pradesh — free legal aid for eligible residents.'),
    lastVerified: '2026-08-15'
  },
  indiacode: {
    id: 'indiacode',
    institution: en('India Code — Government of India'),
    legalInstrument: 'India Code (Digital Repository of Acts)',
    officialUrl: 'https://www.indiacode.nic.in/',
    purpose: en('The official digital repository of central and state legislation. The primary place to verify any statute.'),
    lastVerified: '2026-08-15'
  }
}

export function getSource(id: string): Source | undefined {
  return SOURCES[id]
}

export function getSources(ids: string[]): Source[] {
  return ids.map((id) => SOURCES[id]).filter(Boolean)
}

/** The "official sources" catalogue shown in the trust dialog. */
export const SOURCE_CATEGORIES: {
  id: string
  institution: L10n
  purpose: L10n
  officialUrl: string
}[] = [
  {
    id: 'indiacode',
    institution: en('India Code'),
    purpose: en('Official digital repository of all central and state Acts — the primary place to verify any law.'),
    officialUrl: 'https://www.indiacode.nic.in/'
  },
  {
    id: 'mha',
    institution: en('Ministry of Home Affairs'),
    purpose: en('Central ministry for police and internal security; publishes key citizen-facing resources.'),
    officialUrl: 'https://www.mha.gov.in/'
  },
  {
    id: 'sci',
    institution: en('Supreme Court of India'),
    purpose: en('Highest court; its judgments are primary legal sources NyayaNow links to.'),
    officialUrl: 'https://www.sci.gov.in/'
  },
  {
    id: 'nalsa',
    institution: en('NALSA'),
    purpose: en('National Legal Services Authority — free legal aid and the directory of State/District authorities.'),
    officialUrl: 'https://nalsa.gov.in/'
  },
  {
    id: 'nhrc',
    institution: en('NHRC'),
    purpose: en('National Human Rights Commission — inquires into human-rights violations, including by police.'),
    officialUrl: 'https://nhrc.nic.in/'
  },
  {
    id: 'cpgrams',
    institution: en('CPGRAMS'),
    purpose: en('Official central portal for grievances against government departments and services.'),
    officialUrl: 'https://pgportal.gov.in/'
  },
  {
    id: 'cyber',
    institution: en('National Cyber Crime Reporting Portal'),
    purpose: en('Official portal to report cybercrime and access the cyber helpline (1930).'),
    officialUrl: 'https://cybercrime.gov.in/'
  },
  {
    id: 'slsa',
    institution: en('State Legal Services Authorities'),
    purpose: en('State-level free legal aid bodies; reachable through NALSA’s official directory.'),
    officialUrl: 'https://nalsa.gov.in/directory/'
  }
]

export const LAST_REVIEWED = '15 August 2026'
