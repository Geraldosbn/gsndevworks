import { useEffect, useState } from 'react'
import {
  CardContainer,
  Company,
  Container,
  ContainerIcons,
  Content,
  ContentIcon,
  Span,
  Title,
} from './style'
import {
  SiReact,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import { ContainerApp } from '../../components/container'

const Resume = () => {
  const [size, setSize] = useState<number>(20)

  useEffect(() => {
    const handleResize = () => {
      const widthScreen = window.innerWidth
      widthScreen >= 1024 ? setSize(80) : setSize(50)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const XpCard = () => {
    return (
      <CardContainer>
        <Title>Expereciência</Title>
        <Company>Evologica Tecnologia e Pesquisa.</Company>
        <Span>Estagiário de Front-end 08/22 - 02/23</Span>
        <Content>
          Desenvolvimento web utilizando: ReactJS com TS, Styled Components,
          Redux e realizando o consumo de API usando framework próprio 'Curió'.
        </Content>
        <Content>
          A Evológica é uma empresa de desenvolvimento de software que possui
          uma ampla gama de projetos. Esses projetos abrangem desde soluções que
          atendem milhares de vendedores e clientes até iniciativas para grandes
          empresas e programas de televisão.
        </Content>
        <Content>
          Competências: Meu foco principal é no desenvolvimento web com React e
          Typescript, tanto na manutenção de sistemas legados quanto no
          desenvolvimento de novos projetos.
        </Content>
      </CardContainer>
    )
  }

  const SkillsCard = () => {
    return (
      <CardContainer>
        <Title>Habilidades</Title>
        <ContainerIcons>
          <ContentIcon icon='React'>
            <SiReact style={{ backgroundColor: ' #475166' }} size={size} />
            <p>React</p>
          </ContentIcon>
          <ContentIcon icon='Typescript'>
            <SiTypescript style={{ backgroundColor: ' #475166' }} size={size} />
            <p>Typescript</p>
          </ContentIcon>
          <ContentIcon icon='Query'>
            <SiReactquery style={{ backgroundColor: ' #475166' }} size={size} />
            <p>React query</p>
          </ContentIcon>
          <ContentIcon icon='Redux'>
            <SiRedux style={{ backgroundColor: ' #475166' }} size={size} />
            <p>Redux</p>
          </ContentIcon>
          <ContentIcon icon='SComponents'>
            <SiStyledcomponents
              style={{ backgroundColor: ' #475166' }}
              size={size}
            />
            <p>Styled components</p>
          </ContentIcon>
        </ContainerIcons>
      </CardContainer>
    )
  }

  const EducationCard = () => {
    return (
      <CardContainer>
        <Title>Formação Acadêmica</Title>
        <Content>Senac - Centro universitário Santo Amaro</Content>
        <Content>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS 2020-2022</Content>
      </CardContainer>
    )
  }
  return (
    <ContainerApp>
      <Container>
        <XpCard />
        <SkillsCard />
        <EducationCard />
      </Container>
    </ContainerApp>
  )
}

export default Resume
