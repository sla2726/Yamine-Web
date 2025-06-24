import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen w-screen min-h-screen">
      <Menu />
      <Outlet />
    </div>
  );
}

export default Layout;
