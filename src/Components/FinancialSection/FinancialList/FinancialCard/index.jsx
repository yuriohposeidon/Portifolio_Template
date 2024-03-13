import { StyledCard } from "../../../../styles/card";

export const FinancialCard = ({ financial, removeFinancialList }) => {
  return (
    <StyledCard>
      <li className={financial.type === "Entrada" ? "green" : "gray"}>
        <div className="organization__container">
          <span className="description__card"> {financial.description} </span>
          <span className="value__card">R${Number(financial.value).toFixed(2)} </span>
        </div>

        <div className="alignment__container">
          <span className="type__card"> {financial.type} </span>
          <button className="remove__card" onClick={() => removeFinancialList(financial.id)}>
            Excluir
          </button>
        </div>
      </li>
    </StyledCard>
  );
};
