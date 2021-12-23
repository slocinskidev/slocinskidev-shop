import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.color.white};
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.variable.borderRadiusRound};
  display: grid;
  place-items: center;
`;
