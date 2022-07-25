import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function Layout() {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}
export default Layout;
