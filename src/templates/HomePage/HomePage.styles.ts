import styled from 'styled-components';
import PageTitle from 'atoms/PageTitle';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.variable.paddingWrapper};
`;

export const StyledPageTitle = styled(PageTitle)`
  text-align: center;
  margin: 10rem 0 4rem;
`;
