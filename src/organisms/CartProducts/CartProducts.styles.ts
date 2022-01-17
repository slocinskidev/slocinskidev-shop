import styled from 'styled-components';
import PageTitle from 'atoms/PageTitle';
import breakpoint from 'utils/breakpoints';

export const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  align-items: start;
  background-color: ${({ theme }) => theme.color.gray6};

  @media ${breakpoint.device.sm} {
    padding: ${({ theme }) => theme.variable.paddingWrapper};
  }

  @media ${breakpoint.device.lg} {
    grid-template-columns: 1fr minmax(300px, 400px);
  }
`;

export const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 4rem;
`;

export const BasketSection = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.variable.borderRadiusCard};
  padding: 3rem 2rem;
`;

export const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
`;
