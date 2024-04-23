import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../bottomNavigationBar/BottomNavigationBar";

export default function Layout() {
  return (
    <>
      <Outlet />
      <BottomNavigationBar />
    </>
  );
}
