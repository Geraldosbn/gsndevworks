export interface Actions {
  label: string
  to?: string
  href?: string
}

export const actions: Actions[] = [
  {
    label: 'Abouts',
    to: '/'
  },
  {
    label: 'Projects',
    to: '/Projects'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/geraldo-b-a50629146/'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/geraldosbn'
  },
  {
    label: 'EXEMPLO',
    href: 'https://github.com/geraldosbn'
  }
]
