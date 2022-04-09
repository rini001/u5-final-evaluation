import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Register.module.css"

export const Register = () => {
    const [data, setData] = useState({
       
            "name": "",
            "email": "",
            "password": "",
            "username": "",
            "mobile": "",
            "description": "" 
       
    });
    const {name,email,password,username,mobile,description}=data
    const handleData = (e) => {
        const { name, value } = e.currentTarget;
        
        setData({
          ...data,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div className={styles.div1}>
      <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder='name'
            value={name}
            onChange={handleData}
          />
        </div>
        <div >
          <input
            type="text"
            name="email"
            placeholder='email'
            value={email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder='password'
            value={password}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={username}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            name="mobile"
            placeholder='mobile'
            value={mobile}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            placeholder='description'
            value={description}
            onChange={handleData}
          />
        </div>
        <div><Link to="/Login"><button>Redirect to login page</button></Link></div>
        </form>
    </div>
  )
}
