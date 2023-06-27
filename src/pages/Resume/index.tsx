import { useEffect, useState } from 'react'
import { Company, ContainerIcons, Content, Span, Title } from './style'
import {
  SiReact,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import ContainerMain from './../../components/containerMain/index'
import Card from '../../components/card'
import CardIcon from '../../components/cardIcon'

interface Icon {
  label: string
  icon: JSX.Element
}

const Resume = () => {
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
        <Title>Experiências</Title>
        <Company>Evologica Tecnologia e Pesquisa.</Company>
        <Span>Estagiário de Front-end 08/22 - 02/23</Span>
        <Content>
          <Span>Ferramentas:</Span> ReactJS com TS, Styled Components, Redux e
          realizando o consumo de API usando framework próprio 'Curió'.
        </Content>
        <Content>
          A <Span>Evológica</Span> é uma empresa de desenvolvimento de software
          que possui uma ampla gama de projetos. Esses projetos abrangem desde
          soluções que atendem milhares de vendedores e clientes até iniciativas
          para grandes empresas e programas de televisão.
        </Content>
        <Content>
          <Span>Competências:</Span> Meu foco principal é no desenvolvimento web
          com React e Typescript, tanto na manutenção de sistemas legados quanto
          no desenvolvimento de novos projetos.
        </Content>
      </Card>
    )
  }

  const SkillsCard = () => {
    const icons: Icon[] = [
      {
        label: 'React',
        icon: (
          <SiReact style={{ backgroundColor: 'transparent' }} size={size} />
        ),
      },
      {
        label: 'Typescript',
        icon: (
          <SiTypescript
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        ),
      },
      {
        label: 'React Query',
        icon: (
          <SiReactquery
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        ),
      },
      {
        label: 'Redux',
        icon: (
          <SiRedux size={size} style={{ backgroundColor: 'transparent' }} />
        ),
      },
      {
        label: 'S. Components',
        icon: (
          <SiStyledcomponents
            size={size}
            style={{ backgroundColor: 'transparent' }}
          />
        ),
      },
    ]
    return (
      <Card>
        <Title>Habilidades</Title>
        <ContainerIcons>
          {icons.map(({ icon, label }) => (
            <CardIcon label={label} icon={icon} />
          ))}
        </ContainerIcons>
      </Card>
    )
  }

  const EducationCard = () => {
    return (
      <Card>
        <Title>Formação Acadêmica</Title>
        <Span>Senac - Centro universitário Santo Amaro</Span>
        <Content>Análise e desenvolvimento de sistemas 2020-2022</Content>
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

export default Resume
