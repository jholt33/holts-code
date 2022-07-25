import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

function Layout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
