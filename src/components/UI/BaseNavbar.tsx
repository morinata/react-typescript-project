import React, {FC, useContext} from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import BaseButton from './BaseButton';
import BaseImage from './BaseImage';
import {AuthContext} from '../../context';
import logo from '../../assets/images/logo.png';
import Colors from '../../theme/colors';
import {POSTS_CONSTS} from '../../PostsConsts';

const {blue050, white000} = Colors;

const {LOG_IN, LOG_OUT} = POSTS_CONSTS;

const BaseNavbar: FC = () => {
  const {isAuth, setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuth) {
      setAuth(false);
      localStorage.removeItem('auth');
    }
    navigate('/auth');
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <div>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <AuthBtn onClick={handleClick} className="auth">
          {isAuth ? LOG_OUT : LOG_IN}
        </AuthBtn>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 20px 50px;
  background-color: ${blue050};
  position: fixed;
  z-index: 1;

  & a {
    margin: 0 15px;
    color: white;
    text-decoration: unset;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled(BaseImage)`
  height: 40px;
`;

const AuthBtn = styled(BaseButton)`
  &.auth {
    padding: 0;
    color: ${white000};
    margin-left: 5px;
    
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default BaseNavbar;