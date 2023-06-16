import { useEffect, useState } from 'react'
import {
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
import ContainerMain from './../../components/containerMain/index'
import Card from '../../components/card'

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
      </Card>
    )
  }

  const SkillsCard = () => {
    return (
      <Card>
        <Title>Habilidades</Title>
        <ContainerIcons>
          <ContentIcon>
            <SiReact style={{ backgroundColor: ' #475166' }} size={size} />
            <p>React</p>
          </ContentIcon>
          <ContentIcon>
            <SiTypescript style={{ backgroundColor: ' #475166' }} size={size} />
            <p>Typescript</p>
          </ContentIcon>
          <ContentIcon>
            <SiReactquery style={{ backgroundColor: ' #475166' }} size={size} />
            <p>React Query</p>
          </ContentIcon>
          <ContentIcon>
            <SiRedux style={{ backgroundColor: ' #475166' }} size={size} />
            <p>Redux</p>
          </ContentIcon>
          <ContentIcon>
            <SiStyledcomponents
              style={{ backgroundColor: ' #475166' }}
              size={size}
            />
            <p>S. Components</p>
          </ContentIcon>
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
      <Container>
        <XpCard />
        <SkillsCard />
        <EducationCard />
      </Container>
    </ContainerMain>
  )
}

export default Resume
