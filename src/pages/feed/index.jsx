import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={ 7 }>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={ 1 }>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={85} nome="Homero Barbosa" imagem={"https://avatars.githubusercontent.com/u/75443016?v=4"}/>
          <UserInfo percentual={70} nome="Homero Barbosa" imagem={"https://avatars.githubusercontent.com/u/75443016?v=4"}/>
          <UserInfo percentual={68} nome="Homero Barbosa" imagem={"https://avatars.githubusercontent.com/u/75443016?v=4"}/>
          <UserInfo percentual={65} nome="Homero Barbosa" imagem={"https://avatars.githubusercontent.com/u/75443016?v=4"}/>
          <UserInfo percentual={53} nome="Homero Barbosa" imagem={"https://avatars.githubusercontent.com/u/75443016?v=4"}/>
        </Column>
      </Container>
    </>
  );
}
export default Feed;