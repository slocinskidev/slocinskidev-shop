import styled from 'styled-components';
import Logo from 'atoms/Logo';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.variable.wrapper};
  padding: 1rem 2rem;
  margin: 0 auto;
`;

export const StyledLogo = styled(Logo)`
  width: 220px;

  ${({ theme }) => theme.breakpoint.md`
    width: 280px;
  `}
`;
