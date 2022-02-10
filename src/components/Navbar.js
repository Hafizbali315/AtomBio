import Logo from '../assets/Logo.png'
import HamburgerMenu from '../assets/HamburgerMenu.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left">
				<div className="hamburger">
					<img src={HamburgerMenu} alt="HamburgerMenu" />
				</div>
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
			</div>

			<div className="right">
				<button className="signup">CREAR CUENTA GRATIS</button>
				<button className="signup_sm">CREAR</button>
				<button className="login">Login</button>
			</div>
		</div>
	)
}

export default Navbar
