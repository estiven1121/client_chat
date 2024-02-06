import { useState, useEffect } from "react";
import choucair from "../../public/img/choucair.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { tokenExp,reLoading } from "../util/token";
import axios from "axios";
//  import { initSockets} from "../util/socket";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 0);
  }, []);

  const handleGetToken = async () => {
    const datatoken = localStorage.getItem("token");

    if (datatoken) {
      const token = tokenExp(datatoken)
      if (token) {

        //TODO NO ME ALCANZO EL TIEMPO PARA HACER EL REFRESH DEL TOKEN 
        // const datatoken_refresh = localStorage.getItem("token_refresh");
        // const token_refresh = tokenExp(datatoken_refresh)
        // if (datatoken_refresh) {
        //   localStorage.removeItem("token")
        //   localStorage.removeItem("token_refresh")
        //   navigate("/");
        //    reLoading(datatoken_refresh)
        // }else{
        //    navigate("/chat"); //entra normal
        //    initSockets()
        // }
         localStorage.removeItem("token")
          localStorage.removeItem("token_refresh")
          navigate("/");
       
      } else{
   navigate("/chat"); //entra normal
      }
    }
  
   
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const URL = "http://localhost:5000/auth/login";

      try {
        if (!email || !password) {
          alert("porfavor ingrese todos los datos");
        } else {
          const response = await axios.post(URL, {
            email,
            password,
          });
          if (response.data == "Contraseña incorrecta") {
            alert("contraseña incorrecta");
          } else {
            if (response.data == "Usuario no encontrado") {
              alert("el usuario no existe en la base de datos");
            } else {
              localStorage.setItem("token", response.data.access);
              localStorage.setItem("token_refresh", response.data.refresh);
              // initSockets()
             navigate("/chat")
            }
          }
        }
      } catch (error) {
        console.log(error.message);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-slate-400 bg-opacity-50">
          <div className="loader"></div>
        </div>
      ) : null}

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen h-full md:pb-10">
        <a
          href=""
          className="flex items-center mb-6 text-2xl font-semibold text-white max-w-[550px]"
        >
          <img className="" src={choucair} alt="" />
        </a>
        <div className="w-full bg-gray-500 rounded-lg shadow md:mt-0 max-w-md xl:p-0">
          <div className="p-6 space-y-4 w-80 md:space-y-6 sm:p-8">
            <h1 className="text-xl leading-tight text-black md:text-4xl text-center font-Horatio">
              Bienvenido
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg text-blackfont-Horatio"
                >
                  Usuario
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Correo"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg text-blackfont-Horatio"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <div className="flex justify-center">
                <button
                  onClick={handleLogin}
                  className="w-4/5 text-blackbg-naranjaCreame focus:outline-none focus:scale-95 transition font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:shadow-inner-lg-red-500 "
                >
                  Iniciar
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <NavLink
                to={"/register"}
                className="w-4/5 text-blackbg-naranjaCreame
               focus:outline-none focus:scale-95 transition font-medium rounded-lg text-sm
               px-5 py-2.5 text-center focus:shadow-inner-lg-red-500"
              >
                <button onClick={()=>{navigate("/register")}} className=" ">
                  Registrar
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
