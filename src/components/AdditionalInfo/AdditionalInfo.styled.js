import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAdditionalInfo = styled.div`
  ul {
    display: flex;
    width: 1141px;
  }

  li {
    position: relative;
    border: 1px solid #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom: none;
  overflow: hidden;
  }

  li:first-child {
    border-left: 1px solid #fff;
    border-right: none;
  }

  li:nth-child(2) {
    border-top-left-radius: 20px;
    left: -12px;
    border-left: 10px;
  }

  li:last-child {
    left: -18px;
    height: 60px;
    width: 736px;
    border: 1px solid #fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 20px;
    border-left: none;
    border-bottom: none;
    display: flex;
    align-items: center;
    background: linear-gradient(47deg, rgba(61, 170, 175, 0.8) 6%, rgba(26, 29, 38, 0.8) 100%);
  }

  h2{
    margin-left: 127px;
    color: rgb(203, 224, 230);
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  width: 140px;
  height: 60px;
  font-weight: bolder;
  z-index: 1;
  background-image: linear-gradient(
    39deg,
    rgb(195 205 205 / 55%) 6%,
    rgb(182 192 221 / 50%) 100%
  );

  &.active {
    z-index: 2;
    background-image: linear-gradient(
      39deg,
      rgba(53, 92, 94, 0.5) 6%,
      rgba(73, 78, 93, 0.5) 100%
    );
  }

  li:first-child &.active {
    border-right: 1px solid #fff;
  }

  li:nth-child(2) &.active{
    border-left: 1px solid #fff;
  }
`;

  /* background-image: linear-gradient(
      212deg,
      rgb(202 211 226) 6%,
      rgb(28 43 46) 100%
    ); */
