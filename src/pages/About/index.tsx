import * as S from './style'
import ContainerMain from '../../components/ContainerMain/index'
import Card from '../../components/Card/index'

export default function About() {
  return (
    <ContainerMain>
      <Card>
        <S.Title>Oi,</S.Title>
        <S.Content>
          Sou um desenvolvedor Front-end focado no ecossistema
          {<S.WordBold> React JS, TypeScript, React Query.</S.WordBold>} Minha
          jornada no desenvolvimento web tem me levado a dominar as
          funcionalidades do {<S.WordBold>React JS</S.WordBold>}, aproveitando
          todo o seu potencial para criar interfaces interativas e responsivas.
          Com o{<S.WordBold> TypeScript</S.WordBold>}, garanto um código robusto
          e livre de erros, trazendo maior segurança e escalabilidade aos
          projetos. Além disso, minha experiência com{' '}
          {<S.WordBold>Redux e React Query</S.WordBold>} me permite gerenciar
          eficientemente o estado da aplicação e otimizar as requisições de
          dados.
        </S.Content>
        <S.Content>
          Também possuo conhecimentos em manutenção de projetos React Native.
        </S.Content>
        <S.Content>
          Minha abordagem combina um olhar atento aos detalhes técnicos com uma
          visão orientada para a excelência, por exemplo, com a aplicação dos
          princípios do {<S.WordBold>SOLID</S.WordBold>}, garantindo a entrega
          de soluções de qualidade que superam as expectativas dos usuários.
        </S.Content>
        <S.Content>
          Além disso, sou um entusiasta do trabalho em equipe, acreditando que a
          colaboração e a troca de ideias são essenciais para o sucesso de um
          projeto.
        </S.Content>
        <S.Content>
          Tenho experiência em sistemas que atendem a milhares de usuários,
          tanto intermediários quanto clientes finais, sempre priorizando a
          usabilidade e a manutenibilidade do código que desenvolvo.
        </S.Content>
        <S.Content>
          Se você está em busca de um desenvolvedor Front-end comprometido em
          fornecer resultados excepcionais e impulsionar o sucesso do seu
          projeto, estou pronto para fazer parte da sua equipe. Juntos, podemos
          alcançar grandes conquistas no mundo da tecnologia!
        </S.Content>
      </Card>
    </ContainerMain>
  )
}
