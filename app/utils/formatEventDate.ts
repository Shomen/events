export function formatCardDate(iso: string) {
  const d = new Date(`${iso}T12:00:00Z`)
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
}

export function formatLongBadgeDate(iso: string, weekday: string, time: string) {
  const d = new Date(`${iso}T12:00:00Z`)
  const datePart = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  return `${weekday}, ${datePart} · ${time}`
}
