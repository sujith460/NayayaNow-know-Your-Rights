export function Loader() {
  return (
    <div className="flex min-h-[40dvh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-saffron" aria-hidden="true" />
        <span className="text-xs font-medium text-mist">NyayaNow</span>
      </div>
    </div>
  )
}
