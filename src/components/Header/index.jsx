import Button from '../Button';
import { Container, Wrapper, Row, Input, MenuRight, BuscarInputContainer,  Menu } from './styles';
import  logodiome  from '../../assets/logo-full-30.png';
import { UserPicture } from '../Card/styles';
import { useNavigate  } from "react-router-dom";


const Header = ({ autenticado }) => {

  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate('/')
  }
  const handleClickSignUp = () => {
    navigate('/signUp')
  }
  const handleClickLogin = () => {
    navigate('/login')
  }


  return (
    <Wrapper>
      <Container>

        <Row>
          <img src={ logodiome } alt="logo da dio.me" />
          {autenticado ? 
          <>
            <BuscarInputContainer>
            <Input placeholder='Buscar...'/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </> 
           : null}
        </Row>
        <Row>
          {autenticado ? 
          <>
            <UserPicture src="https://avatars.githubusercontent.com/u/75443016?v=4"/>
          </> : <>
            <MenuRight onClick={handleClickHome}>Home</MenuRight>
            <Button title="Entrar" onClick={handleClickLogin}/>
            <Button title="Cadastrar" onClick={handleClickSignUp}/>
          </>
          }
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;