import styled from "styled-components";

export const StyledFinancialSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  min-width: 26rem;
  max-width: 50rem;

  p {

    max-width: 35.5rem;
    font-size: 2.2rem;
    font-weight: 700;
  }

  @media (min-width: 800px) {
    p{
    max-width: 50rem;
    }
  }
  
`;
