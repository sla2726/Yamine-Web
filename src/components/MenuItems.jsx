import { NavLink } from "react-router-dom";

function MenuItems() {
  return (
    <ul className="space-y-4">
      <li className="transition-all duration-200 hover:scale-105 text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `z-10 inline-block uppercase font-oswald font-bold
          ${isActive ? "text-blue-500" : ""}`
          }
        >
          Início
        </NavLink>
      </li>
      <li className="transition-all duration-200 hover:scale-105 text-center">
        <NavLink
          to="/commands"
          className={({ isActive }) =>
            `z-10 inline-block uppercase font-oswald font-bold ${isActive ? "text-blue-500" : ""}`
          }
        >
          Comandos
        </NavLink>
      </li>

      <li className="transition-all duration-200 hover:scale-105 text-center">
        <NavLink
          to="/premium"
          className={({ isActive }) =>
            `z-10 inline-block uppercase font-oswald font-bold
          ${isActive ? "text-blue-500" : ""}`
          }
        >
          Premium
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuItems;
