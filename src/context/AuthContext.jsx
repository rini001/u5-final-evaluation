import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [token,setToken]=useState('')
    const navigate=useNavigate()
    const onLogIn = (token) => {
        setIsAuth(true);
        setToken(token)
        navigate(`/Home`)
    };
const onLogOut = () => {
	setIsAuth(false);
};
	return <AuthContext.Provider value={{ isAuth,onLogIn, onLogOut,token}} >
		{children}
	</AuthContext.Provider>
}
