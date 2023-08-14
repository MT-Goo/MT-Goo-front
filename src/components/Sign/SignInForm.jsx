import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SignWrapper from './SignWrapper';
import InputWithLabel from './InputWithLabel';
import useInput from '../../hooks/useInput';
import COLOR from '../../constants/color';

import eye from '../../assets/images/eye.png';
import blueEye from '../../assets/images/eye_blue.png';
import Checkbox from '../Common/CheckBox/CheckBox';
import { mobileSize } from '../../utils/MediaSize';

import useSignIn from '../../hooks/queries/Auth/useSignIn';

const LoginForm = styled.form`
  width: 80%;
`;

const PassWordContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  @media (max-width: ${mobileSize}px) {
    margin-top: 1rem;
  }
`;

const LoginSubmitBtn = styled.button`
  width: 100%;
  height: 3rem;
  background: ${COLOR.primary.gradient};
  border: none;
  font-size: 1rem;
  color: ${COLOR.white};
  font-weight: 900;
  cursor: pointer;
  @media (max-width: ${mobileSize}px) {
    border-radius: 8px;
  }
`;

const LoginBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  @media (max-width: ${mobileSize}px) {
    margin: 1rem 0;
    font-size: 8px;
  }
`;

const PasswordSearchText = styled.span`
  color: ${COLOR.primary.blue};
  cursor: pointer;
`;

const EyeImg = styled.img`
  position: absolute;
  width: 1.2rem;
  height: 0.8rem;
  right: 1rem;
  top: 2.7rem;
  color: ${(props) => (props.showPassWord ? `${COLOR.primary.blue}` : `${COLOR.lightGray}`)};
  @media (max-width: ${mobileSize}px) {
    top: 2.1rem;
  }
`;

const SignInForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [showPassWord, setShowPassword] = useState(false);

  const { signInMutation } = useSignIn();

  const toggleShowPassword = () => {
    setShowPassword(!showPassWord);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    signInMutation({ email, password });
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileSize);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= mobileSize);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SignWrapper title={isMobile ? 'MTGO' : '로그인'}>
      <LoginForm onSubmit={handleSubmitLogin}>
        <InputWithLabel label="E-mail" value={email} name="id" onChange={onChangeEmail} />
        <PassWordContainer>
          <InputWithLabel
            type={showPassWord ? 'text' : 'password'}
            label="Password"
            value={password}
            name="password"
            onChange={onChangePassword}
          />
          {showPassWord ? (
            <EyeImg src={blueEye} onClick={toggleShowPassword} showPassWord={showPassWord} />
          ) : (
            <EyeImg src={eye} onClick={toggleShowPassword} showPassWord={showPassWord} />
          )}
        </PassWordContainer>
        <LoginBottomContainer>
          <Checkbox text="로그인 기억하기" />
          <PasswordSearchText>패스워드 찾기</PasswordSearchText>
        </LoginBottomContainer>

        <LoginSubmitBtn type="submit">로그인</LoginSubmitBtn>
      </LoginForm>
    </SignWrapper>
  );
};

export default SignInForm;
