import styled from 'styled-components';
import { VFlex } from '../../styles/mixins';

export const Root = styled.div`
  ${VFlex};

  width: 32rem;
  height: 32rem;
  padding: 1rem;
  overflow: auto;
  background-color: black;
`;

export const Command = styled.div`
  color: yellow;
`;
