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
          style={{
            backgroundColor: ' inherit'
          }}
          size={size}
        />
      ),
      to: '/About',
      hoverText: 'Sobre mim'
    },
    {
      label: (
        <Icon.FaProjectDiagram
          style={{
            backgroundColor: 'inherit'
          }}
          size={size}
        />
      ),
      to: '/Projects',
      hoverText: 'Projetos'
    },
    {
      label: (
        <Icon.FaPaperclip
          style={{
            backgroundColor: ' inherit'
          }}
          size={size}
        />
      ),
      to: '/Resume',
      hoverText: 'Curriculo'
    },
    {
      label: (
        <Icon.FaLinkedin
          style={{
            backgroundColor: 'inherit'
          }}
          size={size}
        />
      ),
      link: 'https://www.linkedin.com/in/geraldo-b-a50629146/',
      hoverText: 'LinkedIn'
    },
    {
      label: (
        <Icon.FaGithub
          style={{
            backgroundColor: 'inherit'
          }}
          size={size}
        />
      ),
      link: 'https://github.com/geraldosbn',
      hoverText: 'GitHub'
    },
    {
      label: (
        <Icon.FaWhatsappSquare
          style={{
            backgroundColor: '  inherit'
          }}
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

  return (
    <S.Container>
      <S.ContainerHeader>
        {/* //div provisória até colocar uma logo */}
        <S.ContainerDarkMode style={{ width: '43px' }} />
        <S.ContainerTitleAndSubTitle>
          <S.Title onClick={() => navigate('/')}>
            {'<GeraldoBarbosa />'}
          </S.Title>
          <S.SubTitle>{'<DevFrontend />'}</S.SubTitle>
        </S.ContainerTitleAndSubTitle>
        <S.ContainerDarkMode>
          <Button
            label={
              <Icon.FaSun
                style={{ backgroundColor: 'inherit', padding: '10px' }}
                size={size}
                onClick={() => setOpen(prevState => !prevState)}
              />
            }
          />
          {open && (
            <S.MsgDarkMode>
              Ops, Não temos LightMode/DarkMode ¯\_(ツ)_/¯ ! LightMode/DarkMode
              todo mundo faz, o importante mesmo é resolver os seus problemas!
            </S.MsgDarkMode>
          )}
        </S.ContainerDarkMode>
      </S.ContainerHeader>
      <S.ContainerNav>{actions}</S.ContainerNav>
    </S.Container>
  )
}
