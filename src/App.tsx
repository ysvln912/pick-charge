import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ToastProvider from "@/components/common/toast/provider/ToastProvider.tsx";
import GlobalStyles from "./styles/global.ts";

import theme from "./styles/theme.ts";
import router from "./routes/routing.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
