import { StyledFinancialSection } from "../../styles/financialSection";
import { FinancialList } from "./FinancialList";

export const FinancialSection = ({ financialList, setFinancialList }) => {
  return (
    <StyledFinancialSection>
      <h2>Resumo financeiro</h2>
      {financialList.length > 0 ? (
        <FinancialList financialList={financialList} setFinancialList={setFinancialList} />
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </StyledFinancialSection>
  );
};
