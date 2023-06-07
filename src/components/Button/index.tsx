import { useNavigate } from 'react-router-dom'
import { ButtonStyle, ContainerBtn } from './styled'

export interface ButtonProps {
  label?: React.ReactNode
  href?: string
  to?: string
  hoverText?: string
}

export const Button = ({ label, href, to, hoverText }: ButtonProps) => {
  const navigate = useNavigate()

  if (href) {
    return (
      <ContainerBtn>
        <a
          href={href}
          target='_blank'
          rel='noreferrer'
          style={{ backgroundColor: ' #1d2941' }}>
          <ButtonStyle children={label} onClick={() => navigate(to ?? '')} />
        </a>
        <p>{hoverText}</p>
      </ContainerBtn>
    )
  } else {
    return (
      <ContainerBtn>
        <ButtonStyle children={label} onClick={() => navigate(to ?? '')} />
        <p>{hoverText}</p>
      </ContainerBtn>
    )
  }
}
