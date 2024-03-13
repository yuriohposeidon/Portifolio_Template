import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  min-width: 26rem;
  max-width: 35.5rem;
  height: 43.4rem;

  border: 0.1rem solid rgba(0, 0, 0, 0.2);

  padding: 4rem 2rem;

  label {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .input__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .example__message {
    font-size: 1.2rem;
    font-weight: 400;

    color: var(--color-gray-3);
  }

  @media (min-width: 800px) {
    width: 35.5rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 4.8rem;

  font-size: 1.6rem;
  font-weight: 400;

  background-color: var(--color-gray-1);

  padding: 0rem 2rem;

  border-radius: 0.8rem;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 4.8rem;

  font-size: 1.6rem;
  font-weight: 400;

  background-color: var(--color-gray-1);

  padding: 0rem 2rem;

  border-radius: 0.8rem;
`;

export const StyledOption = styled.option`
  font-size: 1.6rem;
  font-weight: 400;

  border-radius: 0.8rem;
`;
