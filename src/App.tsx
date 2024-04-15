import { Outlet } from "react-router-dom";

import BottomNavigationBar from "./components/common/bottomNavigationBar/BottomNavigationBar";

function App() {
  return (
    <>
      <Outlet />
      <BottomNavigationBar />
    </>
  );
}

export default App;
