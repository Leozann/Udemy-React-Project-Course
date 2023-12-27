import { useState } from 'react';
import Card from './components/GeneralComponent/Card';
import HeaderApp from './components/GeneralComponent/Header';
import InvestInput from './components/InvestmentComponent/InvestInput';
import ResultTable from './components/ResultComponent/ResultTable';

import DisplayStyles from './styles/Display.module.css'

function App() {
  const [investData, setInvestData] = useState(null);
  const getAllData = (inputData) => {
    setInvestData((prevData) => {
      return { ...prevData, ...inputData }
    })
  }

  function resetAllData(params) {
    if (params === true) {
      setInvestData(null)
    }
  }

  return (
    <div>
      <HeaderApp />
      <Card className={`${DisplayStyles['display-center']}`}>
        <InvestInput getInputData={getAllData} resetInvestData={resetAllData}></InvestInput>
      </Card>
      {/* <ResultTable sendDataToTableContent={yearlyData} /> */}
      {/* {!investData && <p>No Calculated Yet</p>} */}
      <ResultTable investData={investData} />
    </div>
  );
}

export default App;
