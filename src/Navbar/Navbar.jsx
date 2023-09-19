import { useState } from "react";
import Link from "../components/Link/Link";
import { CgMenuLeftAlt, CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [open, setopen] = useState(false);

  const partsData = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black  bg-lime-300 p-6">
      <div className="md:hidden text-2xl" onClick={() => setopen(!open)}>
        {open === true ? <CgCloseO /> : <CgMenuLeftAlt />}
      </div>

      <ul
        className={` text-center md:flex absolute duration-1000
      bg-red-400 px-6 md:static ${open ? "top-12" : "-top-60"}`}>

        {
          partsData.map((partData) => (
          <Link partData1={partData} key={partData.id}></Link>))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
