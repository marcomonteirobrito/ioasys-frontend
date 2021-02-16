import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

import firstDashboardBackground from '../../assets/dashboard1.png';
import secondDashboardBackground from '../../assets/dashboard2.png';
import Colors from '../../commons/Colors';
import LogoIoasys from '../../assets/LogoBlack.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${secondDashboardBackground}),
    url(${firstDashboardBackground}), no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1080px;
  height: 42px;
  margin-bottom: 16px;
`;

export const Logo = styled.div`
  background-image: url(${LogoIoasys});
  width: 104px;
  height: 36px;
  margin-right: 16px;
`;

export const DashboardDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Detail = styled.div`
  color: ${Colors.textBlack};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
    margin-left: 8px;
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  color: ${Colors.textBlack};
`;

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 1px ${Colors.borderCirculeLogout};
  width: 32px;
  height: 32px;
  margin-left: 16px;
  cursor: pointer;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  grid-template-rows: auto;
  row-gap: 10px;
  margin-top: 12px;
  width: 1080px;
`;

export const PageContainer = styled.div``;
