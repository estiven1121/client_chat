import { jwtDecode } from "jwt-decode";

export const tokenExp = (datatoken) =>{
    const {exp} = jwtDecode(datatoken)
    const currenDate = new Date().getTime();//getTime() getDate()
if (exp <= currenDate) {
  return true
}else{
 return false
}
}
export const reLoading = (datatoken) =>{
    const {exp} = jwtDecode(datatoken)
    const currenDate = new Date().getDate();
    //TODO : PORFALTA DE TIEMPO NO PUDE HACER EL REFRESH TOKEN
// if (exp <= currenDate) {
//   return true
// }else{
//  return false
// }
return true
}

   //? obtengo mis datos desde el backend para validar el token
      // const URL_ME = "http://localhost:5000/user/me";
      // const response_token = await axios.get(URL_ME, {
      //   headers: {
      //     Authorization: `Bearer ${datatoken}`,
      //   },
      // });
      // console.log(response_token.data)
