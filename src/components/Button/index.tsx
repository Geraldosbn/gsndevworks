import { ReactNode } from 'react'
import * as S from './styled'

export interface ButtonProps {
  children?: ReactNode
  href?: string
  onClick?: () => void
}

export default function Button({ children, href, onClick }: ButtonProps) {
  if (href) {
    return (
      <a style={{ width: '100%' }} href={href} target='_blank' rel='noreferrer'>
        <S.ButtonStyle children={children} onClick={onClick} />
      </a>
    )
  } else {
    return <S.ButtonStyle children={children} onClick={onClick} />
  }
}
