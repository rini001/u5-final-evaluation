import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from "../components/Home";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { EmployeesDetails } from '../components/EmployeesDetails';
import { Employees } from '../components/Employees';
export const RouteComponents = () => {
    return (
		<div>
			<Navbar />
			<Routes>
				
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>
				<Route path="/Employees" element={<Employees />}></Route>
				<Route path="/Employees/:userId" element={<EmployeesDetails />}></Route>
				{/* <Route path="*" element={<DoNotExist />}></Route> */}
			</Routes>
		</div>
	);
}
