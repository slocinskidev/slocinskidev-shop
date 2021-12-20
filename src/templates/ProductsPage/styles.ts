import styled from 'styled-components';
import PageTitle from 'atoms/PageTitle';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.variable.paddingWrapper};
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 4rem;
`;
