import Swal from 'sweetalert2'
import { MdEmail, MdLock } from "react-icons/md";
import { api } from '../../services/api';
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Wrapper, Container, Title, TitleLogin, SubtitleLogin, Row, Column, EsqueciText, CriarText } from './styles'
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().email('entre com um email válido!').required('preencha este campo!'),
    password: yup.string().min(4, 'A senha deve conter no mínimo 4 digitos!').required('preencha este campo!'),
  })
  .required()

const Login = () => {
  
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors, isValid }} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  console.log(isValid, errors)

  const onSubmit = async (formData) => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1) {
        navigate('/feed')
      }
      else {
        Swal.fire("Atenção!","Usuário não localizado,\ntente novamente!")
      }
    }catch{
        Swal.fire("Erro","Ocorreu um erro inexperado,\ncontacte o suporte por favor!")
    }
  }
  

  const handleClickSignUp = () => {
    navigate('/signUp')
  }

  return (
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e <strong>make the change._</strong></SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" control={ control } placeholder="e-mail" leftIcon={ <MdEmail/> } errorMessage={ errors.email?.message } />
              <Input name="password" control={ control } placeholder="senha" type="password" leftIcon={ <MdLock/> } errorMessage={ errors.password?.message }/>
              <Button title="Entrar" variant="secundary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleClickSignUp}>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

export default Login;