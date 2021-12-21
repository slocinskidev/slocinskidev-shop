import styled from 'styled-components';
import PageTitle from 'atoms/PageTitle';

export const Wrapper = styled.section`
  margin: 4rem 0 10rem;
  padding: ${({ theme }) => theme.variable.paddingWrapper};
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 4rem;
`;
