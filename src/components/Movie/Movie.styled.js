import styled from 'styled-components';

export const StyledMovie = styled.div`
  width: 920px;
  display: flex;
  height: 600px;
  margin-bottom: 60px;
  padding: 20px 60px 20px 20px;
  border: 1px solid #fff;
  background-image: linear-gradient(
    39deg,
    rgba(53, 92, 94, 0.5) 6%,
    rgba(73, 78, 93, 0.5) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  img {
    margin-right: 60px;
  }

  div {
    padding: 60px 0;
    position: relative;
  }

  h2 {
    margin-bottom: 20px;
  }

  h2.large{
    font-size: 25px;
  }

  h2.medium{
    font-size: 40px;
  }  

  h2.small{
    font-size: 60px;
  }  

  h3, b {
    margin-bottom: 15px;
  }

  b{
    display: inline-block;
    margin-right:10px;
  }

  p {
    margin-bottom: 20px;
  }

  span {
    display: inline-block;
    margin-right: 10px;
  }

  div.star-ratings {
    transform: translateY(-20px);
    padding: 10px 0px !important;
  }

  div.star-container{
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .backLink{
    position: absolute;
    display: block;
    left: 0;
    bottom: 60px;
    color: #fff;
    font-weight: bolder;
  }

  .backLink:hover, .backLink:focus {
    text-decoration: underline;
  }

`;
