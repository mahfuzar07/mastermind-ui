import LandingHome from './LandingHome';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Flight from './Flight';
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LandingHome />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/flight" element={<Flight />} />
			</Routes>
		</div>
	);
}

export default App;
