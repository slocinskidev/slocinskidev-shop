import styled from 'styled-components';
import PageTitle from 'atoms/PageTitle';
import Button from 'atoms/Button';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.variable.paddingWrapper};
  display: grid;
`;

export const StyledPageTitle = styled(PageTitle)`
  text-align: center;
  margin: 2rem 0 4rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 6rem;
  justify-self: center;
`;
