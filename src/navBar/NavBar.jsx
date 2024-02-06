import { useState } from "react";
import choucair from "../../public/img/choucair.jpg";
import { disconnectSocket } from "../util/socket";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function NavBar() {
  let activeStyle = {
    fontWeight: "bold",
    paddingBottom: "2px",
    borderBottom: "2px solid ",
  };

  const [showMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!showMenu);
  };
  const handlerlogout =  () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("token_refresh")
    disconnectSocket()

  }
  return (
    <div className="lg:px-20  transition-colors z-20 duration-500 top-0 left-0 items-end fixed w-full bg-slate-400">
      <div className="px-5">
        <div className="flex justify-between items-center h-[90px] ">
          <div className="grid grid-cols-2  w-9/10  text-black items-center relative ">
            <div className=" flex items-center justify-center  ">
              <Link to={"/"} onClick={handlerlogout} target="_blank">
                <img className="w-[80%]" src={choucair} alt="logo" />
              </Link>
            </div>

            <div className="text-black flex  justify-end ">
              <button
                className={`lg:hidden block text-black text-xl transition-transform duration-200 ease-in-out focus:outline-none ${
                  showMenu ? "rotate-90" : "rotate-0"
                }`}
                onClick={toggleMenu}
              >
                {showMenu ? (
                  <VscChromeClose className="text-3xl" />
                ) : (
                  <IoMenuSharp className="text-4xl" />
                )}
              </button>
              <div className="hidden lg:flex lg:col-span-2 items-center justify-center ">
                <Link to={"/"} onClick={handlerlogout}>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMenu && (
        <div
          className={`lg:hidden bg-slate-50  py-3 px-5 mt-[0.5px] -700 shadow-md w-full text-black  absolute ${
            showMenu
              ? "opacity-100 max-h-full transition-all duration-300 ease-in-out"
              : "opacity-0 max-h-0"
          }`}
          style={{
            maxHeight: showMenu ? "500px" : "0",
            visibility: showMenu ? "visible" : "hidden",
          }}
        >
          <Link to={"/"} onClick={handlerlogout}>Logout</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;

{
  /* <Link
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={800}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer "
              onClick={toggleMenu}
            >
              <MdPayment className="" /> Nosotros
            </div>
          </Link> */
}
