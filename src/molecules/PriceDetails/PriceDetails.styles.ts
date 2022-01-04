import Button from 'atoms/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 3rem 2rem;
  display: grid;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.variable.borderRadiusCard};
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: 2rem;
`;

export const Details = styled.h4`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const Summary = styled.h4`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-top: 1px solid ${({ theme }) => theme.color.gray6};
  margin-top: 2rem;
  padding-top: 2rem;
`;

export const StyledButton = styled(Button)`
  justify-self: center;
  margin-top: 2rem;
`;
