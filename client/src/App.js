import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home';
import Error from 'pages/Error';
import Admin from 'pages/Admin';

// const apiOrigin = "http://192.168.1.109:5000";
const apiOrigin = "http://localhost:5000/";

if (process.env.NODE_ENV === 'production') {
	apiOrigin = "/";
}

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</div>
	)
}

export { apiOrigin };
export default App;