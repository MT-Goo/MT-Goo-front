import React from 'react';
import styled from 'styled-components';
import COLOR from '../../constants/color';

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const LabelContainer = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-size: 1rem;
  color: ${COLOR.black};
  margin-bottom: 0.25rem;
  margin-right: 0.2rem;
`;

const Required = styled.span`
  font-size: 1.75rem;
  color: ${COLOR.red};
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid ${COLOR.primary.blue};
  outline: none;
  border-radius: 0px;
  line-height: 3rem;
  font-size: 1rem;
  padding-left: 1rem;
  color: ${COLOR.gray};
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
function InputWithLabel({ label, required, ...rest }) {
  return (
    <Wrapper>
      <LabelContainer>
        <Label>{label}</Label>
        {required && <Required>*</Required>}
      </LabelContainer>
      <Input {...rest} />
    </Wrapper>
  );
}

export default InputWithLabel;
