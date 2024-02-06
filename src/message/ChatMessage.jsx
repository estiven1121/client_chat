import { useState, useEffect } from "react";
import { initSockets } from "../util/socket";
import { userme,userfull } from "../util/userInfo";
import { chatMessage,getAllChat } from "../util/chats";
import { tokenExp } from "../util/token";
import { useNavigate } from "react-router-dom";

function ChatMessage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
      sendme();
    }, 0);
  }, []);

  const handleGetToken = async () => {
    const datatoken = localStorage.getItem("token");
    if (datatoken) {
      const token = tokenExp(datatoken);
      if (token) {
        localStorage.removeItem("token");
        localStorage.removeItem("token_refresh");
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };
  const sendme = async () => {
    initSockets();
    const token = localStorage.getItem("token");
     const user = await userme(token);
    setUser(user);
    const users = await userfull(token)
    setUsers(users)
  };

  const handler_iduser = async (user_id) => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await chatMessage(token, user._id, user_id);
  
      if (response) {
        console.log(response);
      } else {
        console.error("Error obteniendo mensajes del chat");
      }
      getAllChat(token)
    } catch (error) {
      console.error("Error en la función handler_iduser:", error);
    }
  };
  return (
    <div className="w-full relative">
      {/* Div de email arriba a la izquierda */}
      <div className="top-24 left-0 fixed text-5xl rounded-full bg-slate-500 w-12 h-12 flex items-center justify-center p-16">
        {user.email ? user.email.substring(0, 2).toUpperCase() : ""}
      </div>

      {/* Contenedores debajo */}
      <div className="grid grid-cols-3 gap-2  w-full mt-20">
        {/* USUARIOS ONLINE */}
        <div className="col-span-1  p-4">
            <h2 className="pb-5">USUARIOS ONLINE</h2>
          <ul className="li">usuario conectado 1</ul>
          <ul className="li">usuario conectado 2</ul>
          <ul className="li">usuario conectado 3</ul>
        </div>

        {/* Contenedor central CHAT */}
        <div className="col-span-1  p-4">
          <textarea name="" id="" cols="30" rows="10" className="bg-slate-100 border-4 border-neutral-950"></textarea>
          <input type="text" placeholder="escribe tu mensaje" className="bg-slate-100 border-4 border-neutral-950" />
        </div>

        {/* Contenedor Listado usuario */}
        <div className="col-span-1  p-4">
        <h2 className="pb-5">LISTADO DE USUARIOS</h2>
        <ul>
  {users.map((userData, index) => (
    <div key={index}>
        <li onClick={()=>handler_iduser(userData._id)}>
         {userData.firsname}
        </li>
      
      {/* Agrega más elementos según las propiedades del objeto user */}
    </div>
  ))}
  </ul>
</div>
      </div>
    </div>
  );
}

export default ChatMessage;
