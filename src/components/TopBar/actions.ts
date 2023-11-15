export interface Actions {
  label: string
  to?: string
  href?: string
}

export const actions: Actions[] = [
  {
    label: 'About me',
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
  }
]
