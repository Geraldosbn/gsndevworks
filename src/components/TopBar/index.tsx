import React from 'react'
import { Container } from './style'
import { Button } from '../Button'

export const TopBar = () => {
  const actions: JSX.Element[] = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Resume',
      to: '/resume',
    },
    {
      label: 'Contact',
      to: '/contact',
      link: 'https://www.linkedin.com/in/geraldo-b-a50629146/',
    },
    {
      label: 'Meninos',
      to: '/contact',
      link: 'https://www.linkedin.com/in/geraldo-b-a50629146/',
    },
  ].map(({ label, to, link }, index) => (
    <Button  key={index} label={label} to={to} href={link} />
  ))

  return <Container>{actions}</Container>
}
