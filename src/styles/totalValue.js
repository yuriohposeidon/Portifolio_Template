import styled from "styled-components";

export const StyledTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 26rem;
  max-width: 35.5rem;

  margin-top: 2rem;
  padding: 2rem;

  border: 0.1rem solid var(--color-gray-2);
  border-radius: 0.4rem;

  .value__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total__title {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .total__value {
    font-size: 1.6rem;
    font-weight: 700;

    color: var(--color-primary);
  }

  .specification__value {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
