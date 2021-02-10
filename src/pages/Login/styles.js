import styled from 'styled-components';

import background from '../../assets/background.png';
import Colors from '../../utils/Colors';
import Logo from '../../assets/Logo.png';

export const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.label`
  color: ${Colors.white};
  font-weight: 300;
  line-height: 40px;
  font-size: 28px;
  margin-bottom: 48px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 115px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div`
  background-image: url(${Logo});
  width: 104px;
  height: 36px;
  margin-right: 16px;
`;
