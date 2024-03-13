import { StyledTotalValue } from "../../../styles/totalValue";

export const FinancialTotalValue = ({ financialList }) => {
  const totalValue = financialList.reduce((acumulator, currentValue) => {
    if (currentValue.type === "Entrada") {
      return acumulator + Number(currentValue.value);
    } else {
      return acumulator - Number(currentValue.value);
    }
  }, 0);

  return (
    <StyledTotalValue className="total__container">
      <div className="value__container">
        <span className="total__title">Valor total:</span>
        <span className="total__value">R$ {totalValue.toFixed(2)}</span>
      </div>

      <span className="specification__value">O valor se refere ao saldo </span>
    </StyledTotalValue>
  );
};
