import { LoginData, UserData } from "./interface";


const LoginTestdata: LoginData = {
    validCreds : {
        userName: "standard_user",
        password: "secret_sauce"
    },
    invalidCreds : {
        userName: "invalid",
        password: "secret_sauce"
    }
}

export default LoginTestdata;