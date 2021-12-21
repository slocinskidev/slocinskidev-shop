import styled from 'styled-components';

export const Wrapper = styled.aside`
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  padding: 1rem 2rem;
`;
