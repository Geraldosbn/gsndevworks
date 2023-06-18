import {
  Container,
  ContainerHeader,
  ContainerNav,
  ContainerSubTitle,
  ContainerTitle,
  ContainerTools,
  MsgDarkMode,
  SubTitle,
  Title,
} from './style'
import { Button } from '../button'
import {
  FaInfoCircle,
  FaPaperclip,
  FaWhatsappSquare,
  FaLinkedin,
  FaGithub,
  FaSun,
  FaProjectDiagram,
} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TopBar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [size, setSize] = useState<number>(20)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      const widthScreen = window.innerWidth
      widthScreen >= 768 ? setSize(30) : setSize(20)
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
        <FaInfoCircle style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      to: '/About',
      hoverText: 'Sobre mim',
    },
    {
      label: (
        <FaProjectDiagram style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      to: '/Projects',
      hoverText: 'Projetos',
    },
    {
      label: (
        <FaPaperclip style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      to: '/Resume',
      hoverText: 'Curriculo',
    },
    {
      label: <FaLinkedin style={{ backgroundColor: ' #1d2941' }} size={size} />,
      link: 'https://www.linkedin.com/in/geraldo-b-a50629146/',
      hoverText: 'LinkedIn',
    },
    {
      label: <FaGithub style={{ backgroundColor: ' #1d2941' }} size={size} />,
      link: 'https://github.com/geraldosbn',
      hoverText: 'GitHub',
    },
    {
      label: (
        <FaWhatsappSquare style={{ backgroundColor: ' #1d2941' }} size={size} />
      ),
      link: 'https://wa.me/5527999235310?text=Ol%C3%A1%2C+dei+uma+olhada+no+seu+portf%C3%B3lio+e+achei+incr%C3%ADvel%21',
      hoverText: 'Whatsapp',
    },
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
    <Container>
      <ContainerHeader>
        <ContainerTools>
          <Button
            label={
              <FaSun
                style={{
                  backgroundColor: ' #1d2941',
                  paddingTop: 10,
                  paddingRight: 10,
                }}
                size={size}
                onClick={handleOpenMsgDM}
              />
            }
          />
          {open && (
            <MsgDarkMode>
              Ops, Não temos LightMode/DarkMode ¯\_(ツ)_/¯ ! LightMode/DarkMode
              todo mundo faz, o importante mesmo é resolver os seus problemas!
            </MsgDarkMode>
          )}
        </ContainerTools>
        <ContainerTitle onClick={() => navigate('/')}>
          <Title>{'<GeraldoBarbosa />'}</Title>
        </ContainerTitle>
        <ContainerSubTitle>
          <SubTitle>{'<Dev Frontend />'}</SubTitle>
        </ContainerSubTitle>
      </ContainerHeader>
      <ContainerNav>{actions}</ContainerNav>
    </Container>
  )
}
