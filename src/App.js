import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Boards from "./pages/boards";
import Navbar from "./common/components/layout/navbar";
import Board from "./pages/board";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/boards" element={<Boards />} />
				<Route path="/boards/:board" element={<Board />} />
			</Routes>
		</Router>
	);
}

export default App;
