import { useEffect, useState } from 'react'
import * as S from './style'
import * as Icon from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

export default function TopBar() {
  const [open, setOpen] = useState<boolean>(false)
  const [size, setSize] = useState<number>(20)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      const widthScreen = window.innerWidth
      widthScreen >= 768 ? setSize(30) : setSize(23)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const actions: JSX.Element[] = [
    {
      label: (
        <Icon.FaInfoCircle
          style={{ backgroundColor: ' #1d2941' }}
          size={size}
        />
      ),
      to: '/About',
      hoverText: 'Sobre mim'
    },
    {
      label: (
        <Icon.FaProjectDiagram
          style={{ backgroundColor: ' #1d2941' }}
          size={size}
        />
      ),
      to: '/Projects',
      hoverText: 'Projetos'
    },
    {
      label: (
        <Icon.FaPaperclip style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      to: '/Resume',
      hoverText: 'Curriculo'
    },
    {
      label: (
        <Icon.FaLinkedin style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      link: 'https://www.linkedin.com/in/geraldo-b-a50629146/',
      hoverText: 'LinkedIn'
    },
    {
      label: (
        <Icon.FaGithub style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      link: 'https://github.com/geraldosbn',
      hoverText: 'GitHub'
    },
    {
      label: (
        <Icon.FaWhatsappSquare
          style={{ backgroundColor: ' #1d2941' }}
          size={size}
        />
      ),
      link: 'https://wa.me/5527999235310?text=Ol%C3%A1%2C+dei+uma+olhada+no+seu+portf%C3%B3lio+e+achei+incr%C3%ADvel%21',
      hoverText: 'Whatsapp'
    }
  ].map(({ label, to, link, hoverText }, index) => (
    <Button
      key={index}
      hoverText={hoverText}
      label={label}
      to={to}
      href={link}
    />
  ))

  const handleOpenMsgDM = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ContainerTools>
          <Button
            label={
              <Icon.FaSun
                style={{
                  backgroundColor: ' #1d2941',
                  paddingTop: 15,
                  paddingRight: 20
                }}
                size={size}
                onClick={handleOpenMsgDM}
              />
            }
          />
          {open && (
            <S.MsgDarkMode>
              Ops, Não temos LightMode/DarkMode ¯\_(ツ)_/¯ ! LightMode/DarkMode
              todo mundo faz, o importante mesmo é resolver os seus problemas!
            </S.MsgDarkMode>
          )}
        </S.ContainerTools>
        <S.ContainerTitle onClick={() => navigate('/')}>
          <S.Title>{'<GeraldoBarbosa />'}</S.Title>
        </S.ContainerTitle>
        <S.ContainerSubTitle>
          <S.SubTitle>{'<DevFrontend />'}</S.SubTitle>
        </S.ContainerSubTitle>
      </S.ContainerHeader>
      <S.ContainerNav>{actions}</S.ContainerNav>
    </S.Container>
  )
}
