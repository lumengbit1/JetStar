import styled from 'styled-components';
import { VFlex } from '../../styles/mixins';

export const Root = styled.div`
  ${VFlex};
  
  align-items: center;
  padding: 3.125rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 30%;
  height: 1.875rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 5rem;
  height: 1.875rem;

  :first-child {
    margin-right: 1rem;
  }
`;
