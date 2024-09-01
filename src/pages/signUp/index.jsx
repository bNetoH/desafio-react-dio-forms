import Swal from 'sweetalert2'
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { api } from '../../services/api';
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Wrapper, Container, Title, TitleSignUp, SubtitleSignUp, Row, Column, Termos, JaTenhoConta } from './styles'
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    nome: yup.string().min(3,'informe seu nome completo aqui').required('preencha este campo!'),
    email: yup.string().email('entre com um email válido!').required('preencha este campo!'),
    password: yup.string().min(4, 'A senha deve conter no mínimo 4 digitos!').required('preencha este campo!'),
  })
  .required()

const SignUp = () => {
  
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors, isValid }} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const handleClickLogin = () => {
    navigate('/login')
  }

  console.log(isValid, errors)

  const onSubmit = async (formData) => {
    try{
      const { data } = await api.get(`users?email=${formData.email}`);
      if(data.length === 1) {
        Swal.fire("Atenção!","Usuário já cadastrado\nFaça login e make the change!")
      }
      else {
        Swal.fire("Parabéns!","Estamos quase lá!\nLocalize a mensagem de boas vindas na caixa de entrada do seu e-mail\ne siga as instruções")
      }
      navigate('/login')
    }
    catch
    {
      Swal.fire("Erro","Ocorreu um erro inexperado,\ncontacte o suporte por favor!")
    }
  }
  
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubtitleSignUp>Crie sua conta e <strong>make the change._</strong></SubtitleSignUp>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="nome" control={ control } placeholder="nome completo" leftIcon={ <MdPerson/> } errorMessage={ errors.nome?.message } />
              <Input name="email" control={ control } placeholder="e-mail" leftIcon={ <MdEmail/> } errorMessage={ errors.email?.message } />
              <Input name="password" control={ control } placeholder="senha" type="password" leftIcon={ <MdLock/> } errorMessage={ errors.password?.message }/>
              <Button title="Criar minha conta" variant="secundary" type="submit" />
            </form>
            <Row>
              <div>

              <Termos>Ao clicar em "criar minha conta", declaro que aceito as 
                <a href="https://www.dio.me/policies" target="_blank" rel="noreferrer"> Políticas de Privacidade</a> e os <a href="https://www.dio.me/policies" target="_blank" rel="noreferrer">Termos de Uso da DIO</a>
              </Termos>
              <JaTenhoConta>Já tenho conta <a href="##" onClick={handleClickLogin}>Fazer login</a></JaTenhoConta>
              </div>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

export default SignUp;