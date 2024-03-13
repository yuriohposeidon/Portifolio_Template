import { StyledList } from "../../../styles/list";
import { FinancialCard } from "./FinancialCard";

export const FinancialList = ({ financialList, setFinancialList }) => {
  const removeFinancialList = (financialId) => {
    if (confirm("Você tem certeza disso?")) {
      setFinancialList((financialList) =>
        financialList.filter((financial) => financial.id !== financialId)
      );
    }
  };

  return (
    <StyledList>
      {financialList.map((financial) => (
        <FinancialCard
          key={financial.id}
          financial={financial}
          removeFinancialList={removeFinancialList}
        />
      ))}
    </StyledList>
  );
};
