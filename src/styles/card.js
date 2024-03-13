import styled from "styled-components";

export const StyledCard = styled.div`
  .green {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: var(--color-gray-1);

    width: 100%;
    min-width: 26rem;
    max-width: 35.5rem;
    height: 9.5rem;

    padding: 1.5rem;

    border-left: solid 0.5rem var(--color-secondary);
    border-radius: 0.4rem;
  }

  .gray {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: var(--color-gray-1);

    max-width: 35.5rem;
    min-width: 26rem;
    height: 9.5rem;

    padding: 1.5rem;

    border-left: solid 0.5rem var(--color-gray-2);
    border-radius: 0.4rem;
  }

  .organization__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .description__card {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .value__card {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .alignment__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .type__card {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .remove__card {
    font-size: 1rem;

    background-color: var(--color-gray-2);
    color: var(--color-gray-4);

    border-radius: 0.2rem;

    padding: 0.5rem;

    text-align: center;
  }

  @media (min-width: 800px) {
    .green, .gray {
      width: 100%;
      min-width: 26rem;
      max-width: 50rem;
    }
  }
`;
