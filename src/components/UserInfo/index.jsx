import { UserInfoContainer, Progress, NameText, UserPicture } from './styles';

const UserInfo = ({nome, imagem, percentual}) => {
  return (
    <UserInfoContainer>
      <UserPicture src={ imagem }/>
      <div>
        <NameText>{ nome }</NameText>
        <Progress percentual={ percentual }/>
      </div>
    </UserInfoContainer>
  );
}

export default UserInfo;