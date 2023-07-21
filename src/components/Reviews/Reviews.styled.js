import styled from 'styled-components';

export const StyledReviews = styled.div`
  width: 960px;
  border: 1px solid #fff;
  border-top: none;
  padding: 40px 20px;
  min-height: 60px;
  background-image: linear-gradient(
    39deg,
    rgba(53, 92, 94, 0.5) 6%,
    rgba(73, 78, 93, 0.5) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  ul {
    display: inline;
  }
`;

export const StyledReview = styled.li`

  &:first-child.review,
  &:last-child.review,
  &:nth-child(2).review {
    position: static;
    height: 100%;
    width: 100%;
    display: inline-block;
    background-color: transparent;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  h3 {
  }
`;
