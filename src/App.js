import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./common/components/layout/navbar";
import Home from "./pages/home";
import Boards from "./pages/boards";
import Board from "./pages/board";
import Page404 from "./pages/page404";

import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/boards" element={<Boards />} />
				<Route path="/board/:name" element={<Board />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Router>
	);
}

export default App;
