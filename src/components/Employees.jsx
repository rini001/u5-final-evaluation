import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Employees.module.css"
export const Employees = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/posts", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setData(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
	

			<div className={styles.d1}>
				{data.map((elem) => {
					return (
						<div className={styles.mainDiv} key={elem.id}>
							<div >{elem.username}</div>
							<Link to={`./${elem.id}`}>More Detail</Link>
						</div>
					);
				})}
			</div>
		</>
	);
};

