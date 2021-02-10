import styled from 'styled-components';

import background from '../../assets/background.png';
import Colors from '../../utils/Colors';

export const Title = styled.label`
  color: ${Colors.white};
  height: 36px;
`;
export const Container = styled.div`
  background-image: url(${background});

  width: 100%;
`;
