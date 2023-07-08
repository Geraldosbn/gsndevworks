import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export interface ButtonProps {
  label?: ReactNode
  href?: string
  to?: string
  hoverText?: string
}

export default function Button({ label, href, to, hoverText }: ButtonProps) {
  const navigate = useNavigate()

  if (href) {
    return (
      <S.ContainerBtn>
        <a
          href={href}
          target='_blank'
          rel='noreferrer'
          style={{ backgroundColor: ' #1d2941' }}
        >
          <S.ButtonStyle children={label} onClick={() => navigate(to ?? '')} />
        </a>
        <p>{hoverText}</p>
      </S.ContainerBtn>
    )
  } else {
    return (
      <S.ContainerBtn>
        <S.ButtonStyle children={label} onClick={() => navigate(to ?? '')} />
        <p>{hoverText}</p>
      </S.ContainerBtn>
    )
  }
}
