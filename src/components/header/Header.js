import { HeadContainer, Title, TitleWrapper } from './Header.styled';

import { FcContacts } from 'react-icons/fc';

const Header = () => {
  return (
    <HeadContainer>
      <TitleWrapper>
        <Title variant="h5">
          Users management
          <FcContacts />
        </Title>
      </TitleWrapper>
    </HeadContainer>
  );
};

export default Header;
