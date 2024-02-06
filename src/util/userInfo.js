import axios from "axios"
export const userme = async (datatoken) =>{
    //? obtengo mis datos desde el backend para validar el token
      const URL_ME = "http://localhost:5000/user/me";
      const response_token = await axios.get(URL_ME, {
        headers: {
          Authorization: `Bearer ${datatoken}`,
        },
      });
      return response_token.data
}

export const userfull = async (datatoken) =>{
    const URL_USERS = "http://localhost:5000/user/users";
    const response = await axios.get(URL_USERS, {
      headers: {
        Authorization: `Bearer ${datatoken}`,
      },
    });
    return response.data
}


