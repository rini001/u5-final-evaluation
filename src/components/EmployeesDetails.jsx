import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Form.module.css";
export const EmployeesDetails = () => {
	const { userId } = useParams();
	const [userDetail, setUserDetail] = useState({});

	useEffect(() => {
		fetch(`http://localhost:8000/posts/${userId}`, {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				setUserDetail(json);
			})
            .catch((err) => {
				setUserDetail("err",err);
                
            });
	}, [userId]);


    return (
        
		<div >
			 <div className={styles.div2}>
        <div className={styles.table} style={{fontWeight:"bolder"}}>
          <div>ID</div>
          <div>USERNAME</div>
          <div>AGE</div>
          <div>GENDER</div>
          <div>CONTACT</div>
          <div>IMAGE</div>
          <div>DEPARTMENT</div>
          <div>SALARY</div>
       
         
        </div>
        <div>
          
            <div className={styles.table}>
            <div>{userDetail.id}</div>
              <div>{userDetail.username}</div>
              <div>{userDetail.age}</div>
              <div>{userDetail.gender}</div>
              <div>{userDetail.contact}</div>
              <div>{userDetail.image}</div>
              <div>{userDetail.department}</div>
              <div>₹{userDetail.salary}</div>
             
            </div>
         
        </div>
      </div>
		</div>
	);
};