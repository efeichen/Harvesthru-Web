import { fadeIn } from 'react-animations';
import Color from '../../../Styles/bases/Color';
import styled, { keyframes } from 'styled-components';

const FullPageLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const fadeInAnimation = keyframes`${fadeIn}`;
const FullPageFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  ${'' /* animation: 0.8s ${fadeInAnimation}; */}
`;

const FormHelperLink = styled.div`
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 17px;
  text-align: right;
  a {
    color: ${Color.grey};
    &:visited {
      color: ${Color.darkGrey};
    }
    &:hover {
      color: ${Color.darkGrey};
    }
  }
`;

// const fadeInDownAnimation = keyframes`${fadeIn}`;
const LoginContainer = styled.div`
  width: 450px;
  height: 640px;
  position: absolute;
  padding: 50px 20px;
  text-align: center;
  border-radius: 8px;
  opacity: 0.95;
  background: white;
  ${'' /* animation: 0.8s ${fadeInDownAnimation}; */}
`;

const LoginWrapper = styled.div`
  display: flex;
  align: center;
  justify: center;
`;

const LoginTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  FullPageLayer,
  // fadeInAnimation,
  FullPageFilter,
  // fadeInDownAnimation,
  FormHelperLink,
  LoginContainer,
  LoginTitleWrapper,
  LoginWrapper
};
