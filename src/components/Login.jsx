import React ,{useState} from 'react'
// import { useDispatch } from "react-redux";
// import { login } from "../redux/AuthRedux/auth.api";
import {AuthContext} from "../context/AuthContext"
import styles from "./Register.module.css"
export const Login = () => {
      const [data, setData] = useState({
            "password": "",
            "username": "",   
    });
    const {onLogIn}= React.useContext(AuthContext)
    const {password,username}=data
    const handleData = (e) => {
        const { name, value } = e.currentTarget;
        
        setData({
          ...data,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((res) =>(onLogIn(res.token)))
          .catch((err) => {
            console.log(err);
          });
      };



      // const [userName, setUserName] = useState("");
      // const [password, setPassword] = useState("");
      // const dispatch = useDispatch();
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   dispatch(login({ userName, password }));
      // };



  return (
    <div className={styles.div1}>
      <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="password"
            placeholder='password'
            value={password}
            onChange={handleData}
            // onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={username}
            onChange={handleData}
            // onChange={(e) => setUserName(e.currentTarget.value)}
          />
        </div>
       <button >Login</button>
        </form>
    </div>
  )
}
