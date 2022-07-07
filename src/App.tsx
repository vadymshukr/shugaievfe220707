import React from 'react';
import {Chart} from "./components/chart/chart";
import {ChartContextProvider} from "./components/chart/chart-service-context";
import GlobalStyle from "./components/global-styles/global-styles";

const App = () => {
  return (
      <>
        <GlobalStyle />
        <ChartContextProvider>
          <Chart />
        </ChartContextProvider>
      </>

  );
}

export default App;
