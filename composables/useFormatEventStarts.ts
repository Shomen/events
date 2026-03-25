const medium = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short',
})

const full = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'full',
  timeStyle: 'short',
})

export function useFormatEventStarts(style: 'medium' | 'full' = 'medium') {
  const formatter = style === 'full' ? full : medium
  return (iso: string) => formatter.format(new Date(iso))
}
