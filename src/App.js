import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./common/components/layout/navbar";
import Home from "./pages/home";
import Boards from "./pages/boards";
import Board from "./pages/board";
import Page404 from "./pages/page404";

import "./sass/main.scss";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Navbar />
				<div className="content-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/boards" element={<Boards />} />
						<Route path="/board/:name" element={<Board />} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
