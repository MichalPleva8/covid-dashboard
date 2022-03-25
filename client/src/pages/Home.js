import React from 'react';
import { Link } from 'react-router-dom'
import doctor from 'assets/doctors.jpg';
import bg from 'assets/bg.jpg';
import 'styles/home.css';
import { Button } from 'antd';

function Home() {
	return (
		<div className="home">
			<nav className='nav'>
				<div className="nav-wrapper">
					<div className="nav-left">
						<img className='nav-logo' src="https://logosrated.net/wp-content/uploads/parser/Natural-Health-Logo-1.jpg" alt="Health logo" />
					</div>
					<div className="nav-links">
						<Link to="/dashboard">
							<Button type='primary'>Dashboard</Button>
						</Link>
					</div>
				</div>
			</nav>

			{/* Header start */}
			<section className="header container center">
			<div className="bg-blur" style={{ backgroundImage: `url('${bg}')`}} />
			<div className="header-wrapper center">
				<h4 className="header-sub">Slovak Goverment</h4>
				<h1 className="header-xl">Health App</h1>
				<p className="header-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptates aliquid, dolor porro, non neque sit necessitatibus odit soluta debitis officia enim rem voluptatum modi tenetur! Assumenda unde quasi corporis!</p>
				<div className="cta-wrapper">
				<input className="cta cta-input" type="text" placeholder="Janko Hrasko" />
				<a href="#" className="cta cta-phone">
					<svg xmlns="http://www.w3.org/2000/svg" className="solid-icon" viewBox="0 0 20 20" fill="currentColor">
					<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
					<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
					</svg>
				</a>
				</div>
			</div>
			<div className="header-fade" />
			</section>
			{/* Header end */}

			{/* About start */}
			<section id="about" className="about">
			<div className="container center">
				<div className="header-wrapper center">
				<p className="header-sub">history</p>
				<h1 className="header-lg">About us</h1>
				</div>
				<div className="split-two">
				<div className="split">
					<div className="split-row">
					<button className="split-button">
						<h3 className="header-sm">Helping peoples since 1886</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="solid-icon" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
						</svg>
					</button>
					<p className="split-content about-text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ex beatae dicta quisquam blanditiis dolore tenetur modi exercitationem. Possimus optio fugit tempora dolore vitae inventore dolor repudiandae facere molestiae, repellendus alias assumenda? Excepturi error, culpa laboriosam quae animi neque dicta.
					</p>
					</div>
					<div className="split-row">
					<button className="split-button">
						<h3 className="header-sm">Frist heart surgery</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="solid-icon" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
						</svg>
					</button>
					<div className="split-content">
						<p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate ea veritatis necessitatibus porro delectus. Totam eveniet nobis in voluptatibus!</p>
						<p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex animi quaerat totam rerum ut?</p>
					</div>
					</div>
					<div className="split-row">
					<button className="split-button">
						<h3 className="header-sm">Testing for Covid-19</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="solid-icon" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
						</svg>
					</button>
					<div className="split-content">
						<p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, molestiae!</p>
					</div>
					</div>
					<div className="split-row">
					<button className="split-button">
						<h3 className="header-sm">Website redesign</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="solid-icon" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
						</svg>
					</button>
					<div className="split-content">
						<p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum architecto dolore nihil, sapiente tempore optio nobis provident quis itaque laudantium labore unde veniam quaerat, cupiditate similique? Natus, totam temporibus?</p>
						<q>Create by Michal Pleva and Sebastian Synak</q>
					</div>
					</div>
				</div>
				<div className="split split-center">
					<img src={doctor} alt="Surgery" />
				</div>
				</div>
			</div>
			</section>
			{/* About end */}

			{/* Testing start */}
			<section id="testing" className="testing">
			<div className="container center">
				<div className="header-wrapper center">
					<p className="header-sub">covid-19</p>
					<h1 className="header-lg">Testing</h1>
					<Link to="/dashboard" style={{ marginTop: 20 }} className="button-primary">Order</Link>
				</div>
			</div>
			</section>
			{/* Testing end */}

			{/* Gallery start */}
			<section className="gallery">
			<div className="cotainer center">
				<div className="header-wrapper center">
				<p className="header-sub">we in action</p>
				<h1 className="header-lg">Gallery</h1>
				</div>
				<div className="gallery-wrapper container">
				<div className="row">
					<div className="column">
					<a className="item" data-src="/images/doctors.jpg" data-lg-id="9a3099f8-5faa-48b7-bad2-782f7dee08de">
						<img src={doctor} alt="We in action" />
					</a>
					<a className="item" data-src="./gallery/full/_full-4.jpg" data-lg-id="64a067a7-fa24-4df2-a153-aba32b029883">
						<img src={bg} alt="We in action" />
					</a>
					</div>
					<div className="column">
					<a className="item" data-src="./gallery/full/_full-4.jpg" data-lg-id="64a067a7-fa24-4df2-a153-aba32b029883">
						<img src={bg} alt="We in action" />
					</a>
					<a className="item" data-src="./gallery/full/_full-1.jpg" data-lg-id="9a3099f8-5faa-48b7-bad2-782f7dee08de">
						<img src={doctor} alt="We in action" />
					</a>
					</div>
					<div className="column">
					<a className="item" data-src="./gallery/full/_full-1.jpg" data-lg-id="9a3099f8-5faa-48b7-bad2-782f7dee08de">
						<img src={doctor} alt="We in action" />
					</a>
					<a className="item" data-src="./gallery/full/_full-4.jpg" data-lg-id="64a067a7-fa24-4df2-a153-aba32b029883">
						<img src={bg} alt="We in action" />
					</a>
					</div>
					<div className="column">
					<a className="item" data-src="./gallery/full/_full-4.jpg" data-lg-id="64a067a7-fa24-4df2-a153-aba32b029883">
						<img src={bg} alt="We in action" />
					</a>
					<a className="item" data-src="./gallery/full/_full-1.jpg" data-lg-id="9a3099f8-5faa-48b7-bad2-782f7dee08de">
						<img src={doctor} alt="We in action" />
					</a>
					</div>
					<div className="gallery-fade" />
				</div>
				</div>
			</div>
			</section>
			{/* Gallery end */}
		</div>
	);
}

export default Home;
