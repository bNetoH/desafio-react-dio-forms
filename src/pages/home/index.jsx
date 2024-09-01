import { useNavigate  } from "react-router-dom";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from './styles'
import Button from "../../components/Button";
import BannerHome from "../../assets/emerging-technologies.png"

const Home = () => {

  const navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate('/signUp')
  }

  return (
    <>
      <Header/>
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Master the technologies used by the most innovative companies in the world
            </TitleHighlight>
          </Title>
          <TextContent>
            Our courses and formation programs are created with specialists from the best innovative companies in the world.
          </TextContent>
          <Button title="Sign Up now!" variant="secondary" onClick={handleClickSignUp}/>
        </div>

        <div>
          <img src={ BannerHome } alt="banner home"/>
        </div>
      </Container>
    </>
  );
}
export default Home;