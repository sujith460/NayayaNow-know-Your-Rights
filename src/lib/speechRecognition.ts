/**
 * Speech-to-text via the browser's Web Speech API (webkitSpeechRecognition /
 * SpeechRecognition). Only used when the browser actually provides it — the
 * component renders nothing otherwise and text input stays the default.
 *
 * PRIVACY NOTE (shown in the UI): speech recognition may be handled by the
 * browser or its vendor's online service. NyayaNow never receives or stores
 * what is spoken; typed input remains the default path.
 */

export interface SpeechRecognitionAlternativeLike {
  transcript: string
}

export interface SpeechRecognitionResultLike {
  isFinal: boolean
  0: SpeechRecognitionAlternativeLike
}

export interface SpeechRecognitionEventLike {
  resultIndex: number
  results: {
    length: number
    [i: number]: SpeechRecognitionResultLike
  }
}

export interface SpeechRecognitionLike {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onresult: ((e: SpeechRecognitionEventLike) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
  onstart: (() => void) | null
  start: () => void
  stop: () => void
  abort: () => void
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionLike
    webkitSpeechRecognition?: new () => SpeechRecognitionLike
  }
}

export function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null
  return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null
}

export function isSpeechRecognitionSupported(): boolean {
  return getSpeechRecognitionCtor() !== null
}
