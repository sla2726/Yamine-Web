import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen w-screen min-h-screen">
      <Menu />
      <main className="pt-[54px]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
