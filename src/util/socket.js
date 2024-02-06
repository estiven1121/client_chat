import io from "socket.io-client"

//http://localhost:5000


export let socket = null

export const initSockets = () => {
    const URL = "http://localhost:5000"
    socket = io(URL)
}

export const disconnectSocket = () => {
    if (socket) {
        socket = io.disconnect();
    }
}