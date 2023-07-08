import { useEffect, useState } from 'react'
import * as S from './style'
import * as Icon from 'react-icons/si'
import ContainerMain from '../../components/ContainerMain/ContainerMain'
import CardIcon from '../../components/CardIcon/CardIcon'
import Card from '../../components/Card/Card'

interface IconProps {
  label: string
  icon: JSX.Element
}

export default function Resume() {
  const [size, setSize] = useState<number>(20)

  useEffect(() => {
    const handleResize = () => {
      const widthScreen = window.innerWidth
      widthScreen >= 768 ? setSize(80) : setSize(50)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const XpCard = () => {
    return (
      <Card>
        <S.Title>Experiências</S.Title>
        <S.Company>Evologica Tecnologia e Pesquisa.</S.Company>
        <S.Span>Estagiário de Front-end 08/22 - 02/23</S.Span>
        <S.Content>
          <S.Span>Ferramentas:</S.Span> ReactJS com TS, Styled Components, Redux
          e realizando o consumo de API usando framework próprio 'Curió'.
        </S.Content>
        <S.Content>
          A <S.Span>Evológica</S.Span> é uma empresa de desenvolvimento de
          software que possui uma ampla gama de projetos. Esses projetos
          abrangem desde soluções que atendem milhares de vendedores e clientes
          até iniciativas para grandes empresas e programas de televisão.
        </S.Content>
        <S.Content>
          <S.Span>Competências:</S.Span> Meu foco principal é no desenvolvimento
          web com React e Typescript, tanto na manutenção de sistemas legados
          quanto no desenvolvimento de novos projetos.
        </S.Content>
      </Card>
    )
  }

  const SkillsCard = () => {
    const icons: IconProps[] = [
      {
        label: 'React',
        icon: (
          <Icon.SiReact
            style={{ backgroundColor: 'transparent' }}
            size={size}
          />
        )
      },
      {
        label: 'Typescript',
        icon: (
          <Icon.SiTypescript
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        )
      },
      {
        label: 'React Query',
        icon: (
          <Icon.SiReactquery
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        )
      },
      {
        label: 'Redux',
        icon: (
          <Icon.SiRedux
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        )
      },
      {
        label: 'S. Components',
        icon: (
          <Icon.SiStyledcomponents
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        )
      }
    ]
    return (
      <Card>
        <S.Title>Habilidades</S.Title>
        <S.ContainerIcons>
          {icons.map(({ icon, label }) => (
            <CardIcon label={label} icon={icon} />
          ))}
        </S.ContainerIcons>
      </Card>
    )
  }

  const EducationCard = () => {
    return (
      <Card>
        <S.Title>Formação Acadêmica</S.Title>
        <S.Span>Senac - Centro universitário Santo Amaro</S.Span>
        <S.Content>Análise e desenvolvimento de sistemas 2020-2022</S.Content>
      </Card>
    )
  }
  return (
    <ContainerMain>
      <SkillsCard />
      <XpCard />
      <EducationCard />
    </ContainerMain>
  )
}
