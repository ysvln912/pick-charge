import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import BottomNavigationBar from "./components/common/bottomNavigationBar/BottomNavigationBar";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
        <BottomNavigationBar />
      </ThemeProvider>
    </>
  );
}

export default App;
