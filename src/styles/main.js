import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
