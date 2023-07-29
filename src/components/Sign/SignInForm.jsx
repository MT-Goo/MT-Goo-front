import React from 'react';
import styled from 'styled-components';

import SignWrapper from './SignWrapper';
import InputWithLabel from './InputWithLabel';
import useInput from '../../hooks/useInput';

const SignForm = styled.form``;

const SignSubmitBtn = styled.button``;

const SignInForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitLogin = (e) => {
    e.preventDefault();

    // 추후에 API 연동 작업 추가
  };

  return (
    <SignWrapper title="로그인">
      <SignForm onSubmit={onSubmitLogin}>
        <InputWithLabel
          label="ID"
          value={id}
          name="id"
          placeholder="ID를 입력하세요"
          onChange={onChangeId}
        />
        <InputWithLabel
          label="Password"
          value={password}
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={onChangePassword}
        />
        <SignSubmitBtn type="submit">로그인</SignSubmitBtn>
      </SignForm>
    </SignWrapper>
  );
};

export default SignInForm;
