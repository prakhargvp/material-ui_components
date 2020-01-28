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
import Header5 from "./templates/header/Header5";
import Header6 from "./templates/header/Header6";
import URLIndexPage from "./templates/url";
import URLMainContent from "./templates/url/App";
import Test from "./Test";

const App = (props) => {
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
					<Header5 />
					<Header6 />
				</div>
			</Route>
			<Route exact path="/signin" component={SignIn} ></Route>
			<Route exact path="/urltest" component={URLIndexPage}></Route>
			<Route exact path="/url" component={URLMainContent}></Route>
			<Route path="/url/topics/:topic"> <URLIndexPage /> </Route>
		</Switch>
	</Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));