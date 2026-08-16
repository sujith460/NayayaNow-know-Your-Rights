import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  ShieldAlert,
  CheckCircle2,
  SearchX,
  TrafficCone,
  Mic,
  Square,
  Compass,
  AlertTriangle
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import {
  getSituationProvider,
  getRelatedSituations
} from '../lib/situationUnderstanding'
import type { SituationUnderstanding, RouteSituationId, Confidence, ClarificationOption } from '../lib/situationUnderstanding'
import { getSituationById, SITUATIONS } from '../data/situations'
import type { Lang } from '../data/types'
import type { UIKey } from '../data/ui'
import { SituationCard } from '../components/situation/SituationCard'
import { SituationStatusChecker } from '../components/features/SituationStatusChecker'
import { Button } from '../components/ui/Button'
import { UrgencyBadge } from '../components/ui/UrgencyBadge'
import { SituationIcon } from '../components/ui/icons'
import {
  getSpeechRecognitionCtor,
  isSpeechRecognitionSupported,
  type SpeechRecognitionLike
} from '../lib/speechRecognition'

const LANG_MAP: Record<Lang, string> = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN' }

const provider = getSituationProvider()

/* ────────────────────────────────────────────────────────────────
   Input — describe what happened (with optional voice input)
──────────────────────────────────────────────────────────────── */

function NavigatorInput({
  value,
  onChange,
  onSubmit
}: {
  value: string
  onChange: (v: string) => void
  onSubmit: (text: string) => void
}) {
  const { t, lang } = useApp()
  const [listening, setListening] = useState(false)
  const recRef = useRef<SpeechRecognitionLike | null>(null)
  const supported = isSpeechRecognitionSupported()

  useEffect(() => {
    return () => {
      try {
        recRef.current?.abort()
      } catch {
        /* noop */
      }
    }
  }, [])

  const submit = (text?: string) => {
    const q = (text ?? value).trim()
    if (q.length < 3) return
    onSubmit(q)
  }

  const stopListening = () => {
    try {
      recRef.current?.abort()
    } catch {
      /* noop */
    }
    setListening(false)
  }

  const startListening = () => {
    const Ctor = getSpeechRecognitionCtor()
    if (!Ctor) return
    const rec = new Ctor()
    rec.lang = LANG_MAP[lang] ?? 'en-IN'
    rec.continuous = false
    rec.interimResults = true
    rec.maxAlternatives = 1

    rec.onresult = (e) => {
      let interim = ''
      let final = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i]
        const text = res[0]?.transcript ?? ''
        if (res.isFinal) final += text
        else interim += text
      }
      const combined = (final + interim).trim()
      if (combined) onChange(combined)
      if (final.trim().length >= 3) {
        setListening(false)
        submit(final.trim())
      }
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)

    recRef.current = rec
    setListening(true)
    rec.start()
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submit()
      }}
      className="w-full"
    >
      <div className="flex items-stretch gap-2 rounded-2xl border border-line bg-cream p-2 shadow-[0_16px_40px_-20px_rgb(11_27_47/0.25)] transition-all focus-within:border-saffron sm:rounded-full sm:p-2.5">
        <label htmlFor="nl-search" className="sr-only">
          {t('anTitle')}
        </label>
        <Compass className="my-auto ml-3 h-5 w-5 shrink-0 text-saffron-deep" aria-hidden="true" />
        <input
          id="nl-search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('nlPlaceholder')}
          className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-[15px] text-ink placeholder:text-mist focus:outline-none"
          autoComplete="off"
        />
        {supported && (
          <button
            type="button"
            onClick={listening ? stopListening : startListening}
            aria-label={listening ? t('spStop') : t('spMic')}
            aria-pressed={listening}
            className={`shrink-0 self-center rounded-full p-2.5 transition-colors ${
              listening
                ? 'bg-danger text-white animate-pulse'
                : 'text-mist hover:bg-saffron-soft hover:text-saffron-deep'
            }`}
          >
            {listening ? (
              <Square className="h-4 w-4 fill-current" aria-hidden="true" />
            ) : (
              <Mic className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        )}
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-2 sm:rounded-full sm:px-6"
        >
          🧭 {t('nlSubmit')}
        </button>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-mist">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {listening ? t('spListening') : t('anHint')}
      </p>
      {supported && (
        <p className="mt-1.5 text-center text-[11px] leading-relaxed text-mist-2">
          {t('spPrivacy')}
        </p>
      )}
    </form>
  )
}

/* ────────────────────────────────────────────────────────────────
   Result cards
──────────────────────────────────────────────────────────────── */

function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  const { t } = useApp()
  if (confidence === 'HIGH') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-leaf-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-leaf">
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
        {t('anConfidenceHigh')}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-saffron-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-saffron-deep">
      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
      {t('anConfidenceMore')}
    </span>
  )
}

function IdentifiedCard({ understanding }: { understanding: SituationUnderstanding }) {
  const { t, tr } = useApp()
  const situation = getSituationById(understanding.situationId)
  if (!situation) return null

  return (
    <div className="animate-pop">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <CheckCircle2 className="h-4 w-4 text-leaf" aria-hidden="true" />
        {t('anFound')}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {tr(situation.title)}
      </h2>
      <p className="mt-1 text-sm text-mist">{t('clBasedOn')}</p>

      <div className="card mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-saffron">
          <SituationIcon name={situation.icon} className="h-6 w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <UrgencyBadge urgency={situation.urgency} />
            <ConfidenceBadge confidence={understanding.confidence} />
          </span>
          <span className="mt-2 block font-display text-xl font-semibold text-ink sm:text-2xl">
            {tr(situation.title)}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-mist">{tr(situation.summary)}</span>
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link to={`/situation/${situation.slug}`} className="flex-1 sm:flex-none">
          <Button variant="primary" className="w-full sm:w-auto">
            {t('anViewNext')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
        <a href="#all-situations" className="flex-1 sm:flex-none">
          <Button variant="ghost" className="w-full sm:w-auto">
            {t('anChooseAnother')}
          </Button>
        </a>
      </div>

      <p className="mt-6 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-mist">
        {t('clAIBoundary')}
      </p>
    </div>
  )
}

function SafetyCard({
  understanding,
  answer,
  onSafe,
  onDanger,
  onNotSure
}: {
  understanding: SituationUnderstanding
  answer: 'safe' | 'danger' | 'notsure' | null
  onSafe: () => void
  onDanger: () => void
  onNotSure: () => void
}) {
  const { t } = useApp()

  if (answer === 'danger') return null

  if (answer === 'notsure') {
    return (
      <div className="rounded-3xl border border-danger/40 bg-danger-soft p-6 sm:p-8 animate-pop" role="alert">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <AlertTriangle className="h-6 w-6 text-danger" aria-hidden="true" />
          {t('scTitle')}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-danger">{t('scUnsafeNote')}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button variant="danger" onClick={onDanger}>
            {t('scOpenEmergency')}
          </Button>
          <Link to="/help" className="flex-1 sm:flex-none">
            <Button variant="ink" className="w-full sm:w-auto">
              {t('anGetLegalHelp')}
            </Button>
          </Link>
        </div>
        <div className="mt-8">
          <IdentifiedCard understanding={understanding} />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-danger/40 bg-danger-soft p-6 sm:p-8 animate-pop" role="alert">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-danger">
        <ShieldAlert className="h-4 w-4" aria-hidden="true" />
        {t('anSafetyIntro')}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">{t('scTitle')}</h2>
      <p className="mt-2 text-sm leading-relaxed text-danger">{t('emSafety')}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onSafe}
          className="flex-1 rounded-2xl border-2 border-leaf/50 bg-leaf-soft px-6 py-4 text-base font-semibold text-leaf transition-all hover:bg-leaf hover:text-white"
        >
          {t('scSafe')}
        </button>
        <button
          onClick={onDanger}
          className="flex-1 rounded-2xl bg-danger px-6 py-4 text-base font-semibold text-white transition-all hover:bg-danger/90"
        >
          {t('scDanger')}
        </button>
        <button
          onClick={onNotSure}
          className="flex-1 rounded-2xl border-2 border-dashed border-mist-2 bg-paper px-6 py-4 text-base font-semibold text-mist transition-all hover:text-ink"
        >
          {t('nsNotSure')}
        </button>
      </div>
    </div>
  )
}

function ClarifyCard({
  text,
  questionKey,
  options,
  onPick
}: {
  text: string
  questionKey: UIKey
  options: ClarificationOption[]
  onPick: (option: ClarificationOption) => void
}) {
  const { t } = useApp()
  return (
    <div className="animate-pop">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <Compass className="h-4 w-4" aria-hidden="true" />
        {t('anHelpIdentify')}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{t('anEnsure')}</h2>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-mist">{t('anYouDescribed')}</p>
      <blockquote className="mt-2 rounded-2xl border-l-4 border-saffron bg-paper-2 p-4 text-[15px] italic leading-relaxed text-ink">
        “{text}”
      </blockquote>

      <h3 className="mt-6 font-display text-lg font-semibold text-ink">{t(questionKey)}</h3>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onPick(option)}
            className="rounded-2xl border border-line bg-cream px-4 py-3.5 text-left text-sm font-semibold text-ink transition-all hover:border-saffron hover:bg-saffron-soft hover:text-saffron-deep"
          >
            {t(option.labelKey)}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-mist">{t('clAIBoundary')}</p>
    </div>
  )
}

function TrafficCard() {
  const { t } = useApp()
  return (
    <div className="animate-pop">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <TrafficCone className="h-4 w-4" aria-hidden="true" />
        {t('anTrafficTitle')}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{t('anFound')}</h2>
      <p className="mt-2 text-sm leading-relaxed text-mist">{t('anTrafficNote')}</p>
      <p className="mt-3 rounded-2xl bg-saffron-soft p-4 text-sm leading-relaxed text-saffron-deep">
        {t('anTrafficVerify')}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link to="/help" className="flex-1 sm:flex-none">
          <Button variant="primary" className="w-full sm:w-auto">
            {t('anGetLegalHelp')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
        <a href="#related" className="flex-1 sm:flex-none">
          <Button variant="ghost" className="w-full sm:w-auto">
            {t('anBrowseRelated')}
          </Button>
        </a>
      </div>
    </div>
  )
}

function UnknownCard() {
  const { t } = useApp()
  return (
    <div className="rounded-3xl border border-dashed border-line bg-paper p-8 text-center animate-pop">
      <SearchX className="mx-auto h-10 w-10 text-mist" aria-hidden="true" />
      <h2 className="mt-4 font-display text-2xl font-semibold text-ink">{t('clUnknown')}</h2>
      <p className="mt-2 text-sm leading-relaxed text-mist">{t('anNoGuess')}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a href="#all-situations" className="flex-1 sm:flex-none">
          <Button variant="secondary" className="w-full sm:w-auto">
            {t('clBrowseAll')}
          </Button>
        </a>
        <Link to="/help" className="flex-1 sm:flex-none">
          <Button variant="ghost" className="w-full sm:w-auto">
            {t('anGetLegalHelp')}
          </Button>
        </Link>
      </div>
    </div>
  )
}

function RelatedSection({ situationId }: { situationId: RouteSituationId }) {
  const { t } = useApp()
  const related = getRelatedSituations(situationId)
    .map((id) => getSituationById(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  if (related.length === 0) return null

  return (
    <section id="related" className="mt-12 scroll-mt-24">
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{t('anRelated')}</h2>
      <p className="mt-1 text-sm text-mist">{t('anRelatedSub')}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((s) => (
          <SituationCard key={s.id} situation={s} />
        ))}
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────
   Navigator page — the guided flow
──────────────────────────────────────────────────────────────── */

export function Navigator() {
  const { t, openEmergency } = useApp()
  const [params, setSearchParams] = useSearchParams()
  const q = params.get('q') ?? ''

  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [understanding, setUnderstanding] = useState<SituationUnderstanding | null>(null)
  const [safetyAnswer, setSafetyAnswer] = useState<'safe' | 'danger' | 'notsure' | null>(null)

  // Analyze whenever the URL carries a description (homepage card → /navigator?q=…).
  useEffect(() => {
    if (q && q.trim().length >= 3) {
      setValue(q.trim())
      setSubmitted(q.trim())
      setUnderstanding(provider.analyze(q.trim()))
      setSafetyAnswer(null)
    }
  }, [q])

  const reset = () => {
    setValue('')
    setSubmitted(null)
    setUnderstanding(null)
    setSafetyAnswer(null)
    setSearchParams({}, { replace: true })
  }

  const submit = (text: string) => {
    setSearchParams({ q: text }, { replace: true })
  }

  const pickOption = (option: ClarificationOption) => {
    // The "something else" option is the honest fallback — never a guess.
    const id = option.situationId === 'UNKNOWN' ? 'other' : option.id
    setUnderstanding(provider.resolveClarification(id))
    setSafetyAnswer(null)
  }

  const showResult = submitted !== null && understanding !== null

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <span aria-hidden="true">🧭</span> {t('anEyebrow')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('anTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">{t('anSub')}</p>

      {/* Describe what happened — always visible */}
      <div className="mt-8 max-w-3xl">
        <NavigatorInput value={value} onChange={setValue} onSubmit={submit} />
      </div>

      {showResult && (
        <div className="mt-10 max-w-3xl">
          {/* Clear conversation */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-mist">
              {t('progressLabel')} · {t('anFound')}
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-semibold text-mist transition-colors hover:border-saffron hover:text-saffron-deep"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              {t('anClear')}
            </button>
          </div>

          {/* 1. Immediate danger — safety first, always */}
          {understanding.safetyConcern ? (
            <SafetyCard
              understanding={understanding}
              answer={safetyAnswer}
              onSafe={() => setSafetyAnswer('safe')}
              onDanger={openEmergency}
              onNotSure={() => setSafetyAnswer('notsure')}
            />
          ) : // 2. "I don't know if I am arrested" → the decision tool decides, not us
          understanding.arrestUncertainty ? (
            <div className="rounded-3xl border border-line bg-cream p-5 sm:p-6 animate-pop">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
                <Compass className="h-4 w-4" aria-hidden="true" />
                {t('anArrestCheckTitle')}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">{t('anArrestCheckTitle')}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{t('anArrestCheckIntro')}</p>
              <div className="mt-6">
                <SituationStatusChecker />
              </div>
            </div>
          ) : // 3. Traffic identified but no verified traffic guidance yet
          understanding.situationId === 'TRAFFIC_UNVERIFIED' ? (
            <TrafficCard />
          ) : // 4. Honest fallback — we don't guess about legal rights
          understanding.situationId === 'UNKNOWN' && !understanding.needsClarification ? (
            <UnknownCard />
          ) : // 5. Ambiguous → one clarification question
          understanding.needsClarification && understanding.clarification ? (
            <ClarifyCard
              text={submitted}
              questionKey={understanding.clarification.questionKey}
              options={understanding.clarification.options}
              onPick={pickOption}
            />
          ) : // 6. Verified situation identified
          understanding.situationId !== 'UNKNOWN' ? (
            <IdentifiedCard understanding={understanding} />
          ) : (
            <UnknownCard />
          )}

          {/* Related verified guides — "This may also involve" */}
          {understanding.situationId !== 'UNKNOWN' &&
            !understanding.needsClarification &&
            (!understanding.safetyConcern || safetyAnswer !== null) && (
              <RelatedSection situationId={understanding.situationId} />
            )}

          {/* Honest processing note */}
          <p className="mt-8 flex items-start gap-2 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-mist">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
            {t(provider.processingNoteKey)}
          </p>
        </div>
      )}

      {/* Fallback grid — browse all verified situations */}
      <div id="all-situations" className="mt-20 scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{t('homeWhatHappened')}</h2>
          <Link to="/not-sure" className="text-sm font-semibold text-saffron-deep hover:underline">
            {t('clNotSureLink')}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITUATIONS.map((s) => (
            <SituationCard key={s.id} situation={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
