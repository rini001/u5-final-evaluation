import axios from "axios";
import { loginError, loginRequest, loginSuccess } from "./auth.action";

export const login = (params) => (dispatch) => {
	dispatch(loginRequest());

	axios
		.post("https://masai-api-mocker.herokuapp.com/auth/login", params)
		.then((json) => {
			
			dispatch(loginSuccess(json.data));
		})
		.catch((err) => {
			dispatch(loginError(err));

			console.log(err);
		});
};