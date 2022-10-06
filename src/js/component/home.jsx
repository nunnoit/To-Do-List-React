import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Todo } from "./todos.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<h1 className="text-center mt-5">My To-Do List!</h1>
			<Todo/>
		</div>
	);
};

export default Home;
