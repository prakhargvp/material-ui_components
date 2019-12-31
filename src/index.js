import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/style.css';
import SignIn from "./templates/sign-in/SignIn";
import Header1 from "./templates/header/Header1";
import Header2 from "./templates/header/Header2";
import Header3 from "./templates/header/Header3";
import Header4 from "./templates/header/Header4";


import Test from "./Test";

const App = () => {
  return (
	<Router>
		<Switch>
			<Route exact path="/">
				<Test />
			</Route>
			<Route exact path="/header">
				<div className="headers">
					<Header1 />
					<Header2 />
					<Header3 />
					<Header4 />
				</div>
			</Route>
			<Route exact path="/signin" component={SignIn} ></Route>
		</Switch>
	</Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));