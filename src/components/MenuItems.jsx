import { Link } from "react-router-dom";

function MenuItems() {
  return (
    <ul className="space-y-4">
      <li className="transition-all duration-200 hover:scale-105 text-center">
        <Link to="/" className="z-10 inline-block uppercase font-oswald font-bold">Início</Link>
      </li>
      <li className="transition-all duration-200 hover:scale-105 text-center">
        <Link to="/commands" className="z-10 inline-block uppercase font-oswald font-bold">Comandos</Link>
      </li>
    </ul>
  );
}

export default MenuItems;
