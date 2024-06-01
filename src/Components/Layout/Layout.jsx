// **** Installed libraries **** //
import { Outlet } from "react-router-dom";
// **** Component **** //
import Header from "../Header/Header";

export default function Layout() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
}