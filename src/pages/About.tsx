import { useApp } from '../context/AppContext'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

export function About() {
  const { t, openDialog } = useApp()

  const principles = [
    { n: '01', title: t('secThirtySec'), body: t('secWhatMatters') },
    { n: '02', title: t('secRights'), body: t('whatThisMeans') },
    { n: '03', title: t('secSources'), body: t('srcIntro') },
    { n: '04', title: t('pmTitle'), body: t('pmWhatStored') }
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t('footerAbout')}</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-mist sm:text-base">{t('taglineSub')}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {principles.map((p) => (
          <div key={p.n} className="card p-5">
            <span className="font-display text-sm font-semibold text-saffron-deep">{p.n}</span>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-mist">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-[15px] leading-relaxed text-mist">
        {t('clAIBoundary')} {t('nlHint')}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/navigator">
          <Button variant="primary" className="w-full sm:w-auto">{t('heroCtaTell')}</Button>
        </Link>
        <button onClick={() => openDialog('disclaimer')} className="w-full sm:w-auto">
          <Button variant="ghost" className="w-full sm:w-auto">{t('discTitle')}</Button>
        </button>
      </div>
    </div>
  )
}
