import type { Lang } from '../data/types'

/**
 * Text-to-speech cleanup.
 *
 * Indic TTS voices read ASCII digits, slashes and dashes as English/garble
 * (e.g. a Telugu voice says "slash 24" instead of "బంధువు స్నేహితుడికి,
 * ఇరవై నాలుగు"). Before speaking we convert ASCII digits to the language's
 * native numerals (౧౨౩ / १२३) and replace punctuation that voices stumble
 * on with pauses/spaces.
 */

const NUMERALS: Record<Lang, string[]> = {
  en: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  hi: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  te: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯']
}

export function speechClean(text: string, lang: Lang): string {
  let s = text
    .replace(/[—–]/g, '. ')
    .replace(/\//g, ' ')
    .replace(/·/g, '. ')
    .replace(/[()]/g, ' ')
    .replace(/["“”'‘’]/g, '')
    .replace(/\s+/g, ' ')

  if (lang !== 'en') {
    s = s.replace(/[0-9]/g, (d) => NUMERALS[lang][Number(d)])
  }

  return s.trim()
}
