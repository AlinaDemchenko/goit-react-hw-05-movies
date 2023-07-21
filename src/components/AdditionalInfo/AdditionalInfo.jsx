import { StyledAdditionalInfo, StyledLink } from './AdditionalInfo.styled';
import { Outlet } from 'react-router-dom';

const AdditionalInfo = () => {


  return (
    <StyledAdditionalInfo>
      <ul>
          <li>
            <StyledLink to="reviews"><p>Reviews</p></StyledLink>
          </li>
          <li>
            <StyledLink to="cast"><p>Cast</p></StyledLink>
          </li>
          <li>
            <h2>Additional Information</h2>
          </li>
        </ul>
        <Outlet />
 </StyledAdditionalInfo>
  );
};

export default AdditionalInfo;
