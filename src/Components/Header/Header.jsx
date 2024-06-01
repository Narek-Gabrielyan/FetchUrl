// **** Installed libraries **** //
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <header>
        <NavLink to={"/"}>Users</NavLink>
        <NavLink to={"/todos"}>Todos</NavLink>
        <NavLink to={"/photos"}>Photos</NavLink>
        <NavLink to={"/albums"}>Albums</NavLink>
        <NavLink to={"/comments"}>Comments</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </header>
    );
}