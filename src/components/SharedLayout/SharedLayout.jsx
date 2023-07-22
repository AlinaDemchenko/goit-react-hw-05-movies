import { Outlet } from 'react-router-dom';
import { StyledSharedLayout } from './SharedLayout.styled';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <StyledSharedLayout>
      <Header />
      <Outlet />
    </StyledSharedLayout>
  );
};

export default SharedLayout;
