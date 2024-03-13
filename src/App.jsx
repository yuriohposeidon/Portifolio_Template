import { useState } from "react";
import { FinancialSection } from "./Components/FinancialSection";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { GlobalStyles } from "./styles/global";
import { ResetGlobalStyle } from "./styles/reset";
import { StyledMain } from "./styles/main";
import { FinancialTotalValue } from "./Components/FinancialSection/FinancialValues";

const App = () => {
  const [financialList, setFinancialList] = useState([]);

  return (
    <div className="App">
      <ResetGlobalStyle />
      <GlobalStyles />
      <Header />
      <StyledMain>
        <div className="form__box">
          <Form setFinancialList={setFinancialList} />
          <FinancialTotalValue financialList={financialList} />
        </div>
        <FinancialSection financialList={financialList} setFinancialList={setFinancialList} />
      </StyledMain>
    </div>
  );
};

export default App;
