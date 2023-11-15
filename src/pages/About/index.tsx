import Card from '../../components/Card'
import * as S from './style'

export default function About() {
  return (
    <Card>
      <S.Container>
        <S.Presentation>
          <S.Title>Hi. My name</S.Title>
          <S.UserName>Geraldo Barbosa</S.UserName>
          <a
            target='_blank'
            href='https://wa.me/5527999235310?text=Ol%C3%A1%2C+dei+uma+olhada+no+seu+portf%C3%B3lio+e+achei+incr%C3%ADvel%21'
          >
            <S.Button> Contact me</S.Button>
          </a>
        </S.Presentation>
        <S.Image
          src='https://avatars.githubusercontent.com/u/81484642?v=4'
          alt='Perfil'
          width={170}
        />
      </S.Container>

      <S.Content>
        I'm a Front-end developer focused on the ecosystem
        {<S.WordBold> React JS, TypeScript, React Query.</S.WordBold>} My
        journey in web development has led me to master the features of{' '}
        {<S.WordBold>React JS</S.WordBold>}, enjoying its full potential to
        create interactive and responsive interfaces. As
        {<S.WordBold> TypeScript</S.WordBold>}, guarantee a robust and
        error-free, bringing greater security and scalability to projects.
        Furthermore, my experience with
        {<S.WordBold>Redux e React Query</S.WordBold>} allows me to manage
        efficiently state the application and optimize data requests.
      </S.Content>
      <S.Content>
        I also have knowledge in maintaining React Native projects.
      </S.Content>
      <S.Content>
        My approach combines a keen eye for technical details with a vision
        oriented towards excellence, for example, with the application of
        principles of {<S.WordBold>SOLID</S.WordBold>}, ensuring delivery of
        quality solutions that exceed user expectations.
      </S.Content>
      <S.Content>
        I have experience in systems that serve thousands of users, both
        intermediaries and end customers, always prioritizing usability and the
        maintainability of the code I develop.
      </S.Content>
      <S.Content>
        If you are looking for a Front-end developer committed to provide
        exceptional results and drive the success of your project, I'm ready to
        be part of your team. Together we can achieve great achievements in the
        world of technology!
      </S.Content>
    </Card>
  )
}
