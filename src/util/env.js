const auth = {
    austhStart : "AuthStart",
    loginStart : "LoginStart",
    registerStart : "RegisterStart"
    
}

const global = {
    userPerfile : "UserPerfile",
    imagePerfile : "ImagePerfile",
    chatPerfile : "ChatPerfile",

}

const chat = {
    root : "ChatRoot",
    chatuser : "ChatUser",
    createchat : "CreateChat",
}

const settings = {
    root : "SettingsRoot",
    settingsChat : "SettingsChat",
    
}

const SERVER_IP = "localhost:6000"

const ENV = {
    SERVER_IP : SERVER_IP,
    BASE_PATH : `http://${SERVER_IP}`,
    API_URL : `http://${SERVER_IP}/user`,
    SOCKET_URL: `http://${SERVER_IP}`,
    ENDPONITS : {
        AUTH : {
            REGISTER : "http://localhost:6000/auth/register"
        }
    }
}