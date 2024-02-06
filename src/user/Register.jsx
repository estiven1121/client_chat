import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
    const navigate = useNavigate();
  const [firsname, setFirsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleRegister = async(e) => {
    e.preventDefault();
    const URL = "http://localhost:5000/auth/register";
    // const params = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: {
    //     firsname,
    //     lastname,
    //     email,
    //     password,
    //   },
    // };
   try {
    const response = await axios.post(URL, {
        firsname,
        lastname,
        email,
        password,
      });
      if (response.data == "el usuario ya existe") {
        alert("el usuario ya existe")
      }else{
        navigate("/")
      }
     
   } catch (error) {
    console.log(error.message);
   }
  };

  return (
    <div className="font-sans pt-28">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-neutral-400">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-black shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-slate-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Registrate
            </label>
            <form action="" className="mt-10" onSubmit={handleRegister}>
              <div>
                <input
                  className="mt-10 block w-full border-b-4 border-black bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  type="text"
                  name="firsname"
                  value={firsname}
                  onChange={(event) => setFirsname(event.target.value)}
                  id="firsname"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <input
                  className="mt-10 block w-full border-b-4 border-black bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                  id="lastname"
                  placeholder="apellidos"
                />
              </div>
              <div>
                <input
                  className="mt-10 block w-full border-b-4 border-black bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  placeholder="Correo"
                />
              </div>
              <div>
                <input
                  className="mt-10 block w-full border-b-4 border-black bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  placeholder="constraseña"
                />
              </div>
              <div>
                <input
                  className="mt-10 block w-full border-b-4 border-black bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(event) => setImage(event.target.files[0])}
                  id="image"
                />
                {image && (
                  <div className="mt-2">
                    <img
                      className="mt-2 max-w-full h-auto rounded-xl"
                      src={URL.createObjectURL(image)}
                      alt="Imagen seleccionada"
                    />
                    <div className="pt-5 ">
                      <button
                        className="border-2 border-stone-950"
                        onClick={() => setImage(null)}
                      >
                        cancelar
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <button
                    className=" m-4 text-black border-black transition duration-500 ease-in-out 
                   transform hover:-translate-x hover:scale-105"
                  >
                    Registrarse
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
