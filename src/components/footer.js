import React from 'react';

function Footer() {
	
	return (<div className="footer-wrapper">
		<div className="container">
			<footer className="navbar navbar-default">
				<div className="row">
					<div className="col-md-3 col-sm-12">
						<a href="https://uoguelph.ca/improve-life" className="il-link">
							<img src="https://www.uoguelph.ca/img/improve-life.svg" alt="Improve Life" className="footer-tagline" />
						</a>
						<a href="//www.uoguelph.ca/web/" className="copyright">&copy; {(new Date().getFullYear())} University of Guelph</a>
					</div>
					<div className="col-md-6 col-sm-12">
					</div>
					<div className="col-md-3 col-sm-12">
						<address>
							<strong>University of Guelph</strong><br />
							50 Stone Road East,<br />
							Guelph, Ontario, Canada<br />
							N1G 2W1<br />
							<a href="tel:1-519-824-4120"><span className="fa fa-phone"></span> 519-824-4120</a>
						</address>
					</div>
				</div>
			</footer>
		</div>
	</div>)

}

export default Footer
