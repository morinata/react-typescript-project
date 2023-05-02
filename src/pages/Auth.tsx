import React, {FC, ChangeEvent, MouseEvent, useCallback, useState, useMemo, useContext} from 'react';
import styled from 'styled-components';
import BaseInput from '../components/UI/BaseInput';
import BaseButton from '../components/UI/BaseButton';
import BaseIcon from '../components/UI/BaseIcon';
import {AuthContext} from '../context';
import {ReactComponent as Hide} from '../assets/icons/password-open-eye.svg';
import {ReactComponent as Show} from '../assets/icons/password-hidden-eye.svg';
import Colors from '../theme/colors';
import {POSTS_CONSTS} from '../PostsConsts';

const {blue050} = Colors;

const {LOG_IN, AUTH_TITLE} = POSTS_CONSTS;


const Auth: FC = () => {
  const initialState = useMemo(() => ({
    login: '',
    password: '',
  }), []);
  const {setAuth} = useContext(AuthContext);
  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState<{[key: string]: boolean}>({login: false, password: false});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => setShowPassword((showPassword) => !showPassword), []);

  const handleChangeInput = useCallback((name: string, value: string) => {
    setFormValue({...formValue, [name]: value});
    setError({...error, [name]: false});
  }, [error, formValue]);

  const handleLogIn = useCallback((event: MouseEvent) => {
    event.preventDefault();
    if (formValue.login !== '' && formValue.password !== '') {
      setFormValue(initialState);
      setAuth(true);
      localStorage.setItem('auth', 'true');
    }
    setError({title: formValue.login === '', body: formValue.password === ''});
  }, [initialState, formValue, setAuth]);

  return (
    <Wrapper>
      <Title>{AUTH_TITLE}</Title>
      <Form>
        <BaseInput
          type="text"
          value={formValue.login}
          placeholder="Login"
          onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) => handleChangeInput('login', value)}
          error={error.title}
        />
        <BaseInput
          type={showPassword ? 'text' : 'password'}
          value={formValue.password}
          placeholder="Password"
          onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) =>  handleChangeInput('password', value)}
          error={error.body}
          endAdornment={
            <ShowHideButton disableRipple onClick={handleShowPassword} className="password_icon">
              <BaseIcon icon={showPassword ? Hide : Show} boxH={20} boxW={20} />
            </ShowHideButton>
          }
        />
        <BaseButton onClick={handleLogIn} className="purple">{LOG_IN}</BaseButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const ShowHideButton = styled(BaseButton)`
  &.password_icon {
    display: flex;
    justify-content: flex-end;
    min-width: 20px;
    padding: 0;

    &:hover {
      background-color: transparent;
    }
    
    & div {
      display: flex;
      
      & svg {
        fill: ${blue050};
      }
    }
  }
`;

export default Auth;