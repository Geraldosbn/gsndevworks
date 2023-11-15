import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export interface ButtonProps {
  label?: ReactNode
  href?: string
  to?: string
}

export default function Button({ label, href, to }: ButtonProps) {
  const navigate = useNavigate()

  if (href) {
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        <S.ButtonStyle children={label} onClick={() => navigate(to ?? '')} />
      </a>
    )
  } else {
    return <S.ButtonStyle children={label} onClick={() => navigate(to ?? '')} />
  }
}
