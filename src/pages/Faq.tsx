import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { FAQ_ITEMS } from '../data/faq'
import { getSituationBySlug } from '../data/situations'

export function Faq() {
  const { t, tr } = useApp()
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <HelpCircle className="h-4 w-4" aria-hidden="true" />
        {t('navFaq')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('faqTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">{t('faqIntro')}</p>

      <div className="mt-10 space-y-3">
        {FAQ_ITEMS.map((item) => {
          const open = openId === item.id
          const situation = getSituationBySlug(item.linkTo)
          return (
            <article
              key={item.id}
              className={`card overflow-hidden transition-shadow ${open ? 'ring-1 ring-ink/10' : ''}`}
            >
              <button
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <h2 className="font-display text-base font-semibold text-ink sm:text-lg">{tr(item.q)}</h2>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-mist transition-transform ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {open && (
                <div className="border-t border-line px-5 pb-5 pt-4 animate-fade">
                  <p className="text-[15px] leading-relaxed text-mist">{tr(item.a)}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-saffron-deep">
                    {t('srcSourceLabel')}: {tr(item.cite)}
                  </p>
                  {situation && (
                    <Link
                      to={`/situation/${situation.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ink/90"
                    >
                      {t('faqReadGuide')}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div className="mt-12 rounded-3xl bg-ink p-6 text-paper texture-ink sm:p-8">
        <h2 className="font-display text-xl font-semibold text-paper sm:text-2xl">{t('faqMoreHelpTitle')}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-paper/80">{t('faqMoreHelpBody')}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link to="/navigator">
            <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-saffron/90 sm:w-auto">
              {t('navNavigator')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
          <Link to="/sources">
            <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-paper/30 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-paper/10 sm:w-auto">
              {t('navSources')}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
