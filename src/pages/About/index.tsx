import { Content, Title, WordBold } from './style'
import ContainerMain from './../../components/containerMain/index'
import Card from '../../components/card'

const About = () => {
  return (
    <ContainerMain>
      <Card>
        <Title>Olá,</Title>
        <Content>
          Sou um desenvolvedor Front-end focado no ecossistema
          {<WordBold> React JS, TypeScript, React Query.</WordBold>} Minha
          jornada no desenvolvimento web tem me levado a dominar as
          funcionalidades do {<WordBold>React JS</WordBold>}, aproveitando todo
          o seu potencial para criar interfaces interativas e responsivas. Com o
          {<WordBold> TypeScript</WordBold>}, garanto um código robusto e livre
          de erros, trazendo maior segurança e escalabilidade aos projetos. Além
          disso, minha experiência com{' '}
          {<WordBold>Redux e React Query</WordBold>} me permite gerenciar
          eficientemente o estado da aplicação e otimizar as requisições de
          dados.
        </Content>
        <Content>
          Também possuo conhecimentos em manutenção de projetos React Native.
        </Content>
        <Content>
          Minha abordagem combina um olhar atento aos detalhes técnicos com uma
          visão orientada para a excelência, por exemplo, com a aplicação dos
          princípios do {<WordBold>SOLID</WordBold>}, garantindo a entrega de
          soluções de qualidade que superam as expectativas dos usuários.
        </Content>
        <Content>
          Além disso, sou um entusiasta do trabalho em equipe, acreditando que a
          colaboração e a troca de ideias são essenciais para o sucesso de um
          projeto.
        </Content>
        <Content>
          Tenho experiência em sistemas que atendem a milhares de usuários,
          tanto intermediários quanto clientes finais, sempre priorizando a
          usabilidade e a manutenibilidade do código que desenvolvo.
        </Content>
        <Content>
          Se você está em busca de um desenvolvedor Front-end comprometido em
          fornecer resultados excepcionais e impulsionar o sucesso do seu
          projeto, estou pronto para fazer parte da sua equipe. Juntos, podemos
          alcançar grandes conquistas no mundo da tecnologia!
        </Content>
      </Card>
    </ContainerMain>
  )
}
export default About
