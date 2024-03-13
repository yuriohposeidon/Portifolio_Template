import { useState } from "react";
import { StyledForm, StyledInput, StyledSelect } from "../../styles/form";
import { v4 as uuidv4 } from "uuid";
import { StyledButtonForm } from "../../styles/buttonForm";

export const Form = ({ setFinancialList }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");

  const addFinancialList = () => {
    const newFinancial = { id: uuidv4(), value, description, type };
    setFinancialList((financialList) => [...financialList, newFinancial]);
  };

  const submit = (event) => {
    event.preventDefault();
    addFinancialList();
    setValue("");
    setDescription("");
  };

  return (
    <StyledForm onSubmit={submit}>
      <div className="input__container">
        <label> Descrição </label>
        <StyledInput
          className="input__form"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite aqui sua descrição"
          required
        />
        <span className="example__message">Ex: Compra de roupas</span>
      </div>

      <div className="input__container">
        <label> Valor (R$) </label>
        <StyledInput
          className="input__form"
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="1"
          required
        />
      </div>

      <div className="input__container">
        <label> Tipo de Valor </label>
        <StyledSelect
          className="select__form"
          name="select__value"
          id="select__value"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option className="option__form" value="Entrada">
            {" "}
            Entrada{" "}
          </option>
          <option className="option__form" value="Despesa">
            {" "}
            Despesa{" "}
          </option>
        </StyledSelect>
      </div>

      <StyledButtonForm className="send__button"> Inserir valor </StyledButtonForm>
    </StyledForm>
  );
};
