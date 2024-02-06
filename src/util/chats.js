import axios from "axios"
export const chatMessage = async (datatoken, participant_id_one, participant_id_two) =>{
    const URL_CHAT = "http://localhost:5000/user/chat";
    const response = await axios.post(URL_CHAT,
        {
          participant_id_one: participant_id_one,
          participant_id_two: participant_id_two,
        }, {
      headers: {
        Authorization: `Bearer ${datatoken}`,
      },
     
    });
    return response.data
}

export const getAllChat = async (datatoken) => {
    const URL_CHAT = "http://localhost:5000/user/chat";
    const response = await axios.get(URL_CHAT,
          {
      headers: {
        Authorization: `Bearer ${datatoken}`,
      },
     
    });
    return response.data
}