import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { Layout } from './components/layout/Layout'
import { Loader } from './components/ui/Loader'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const SituationPage = lazy(() => import('./pages/Situation').then((m) => ({ default: m.SituationPage })))
const Navigator = lazy(() => import('./pages/Navigator').then((m) => ({ default: m.Navigator })))
const NotSure = lazy(() => import('./pages/NotSure').then((m) => ({ default: m.NotSure })))
const Complaints = lazy(() => import('./pages/Complaints').then((m) => ({ default: m.Complaints })))
const Help = lazy(() => import('./pages/Help').then((m) => ({ default: m.Help })))
const Sources = lazy(() => import('./pages/Sources').then((m) => ({ default: m.Sources })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/situation/:slug" element={<SituationPage />} />
              <Route path="/navigator" element={<Navigator />} />
              <Route path="/not-sure" element={<NotSure />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/help" element={<Help />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </AppProvider>
  )
}
