import { FaThumbsUp } from 'react-icons/fa';
import { CardContainer, Content, HasInfo, ImageBackground,PostInfo,UserInfo,UserPicture } from './styles';
import  CardPost  from '../../assets/cardpost.png';


const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={ CardPost } alt="post-banner" />
      <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/75443016?v=4"/>
              <div>
                <h4> x x name</h4>
                <p>something</p>
              </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para curso html e css</h4>
            <p>Projeto feito para o curso html e css bootcamp...<strong>saiba mais</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #JavaScript</h4>
            <p>
              <FaThumbsUp/> 1
            </p>
          </HasInfo>
      </Content>
    </CardContainer>
  );
}

export default Card;