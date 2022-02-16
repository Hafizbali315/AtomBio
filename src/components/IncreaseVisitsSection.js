import DesktopSectionBackground from '../assets/DesktopSectionBackground.png'
import Image3 from '../assets/Image3.png'
import Image3Mobile from '../assets/Image3Mobile.png'
import SpotifyImg from '../assets/SpotifyImg.png'
import AmazonImg from '../assets/AmazonImg.png'
import Twitch from '../assets/Twitch.png'
import Recipe from '../assets/Recipe.png'
import TiktokImg from '../assets/TiktokImg.png'

const IncreaseVisitsSection = () => {
	return (
		<div className="increase_visits_section">
			<div className="left">
				<h2>
					Aumenta tus visitas y brilla más que nadie<span style={{ color: '#F056E3' }}>.</span>
				</h2>
				<p>
					Guía a tus seguidores hacia tu información de contacto y tus redes.
					<br /> Cuéntales lo que quieras sobre ti y expande tu universo.
				</p>
			</div>
			<div className="right">
				<div className="background_container">
					<img className="desktop" src={Image3} alt="img3" />
					<img className="mobile" src={Image3Mobile} alt="img3" />
				</div>

				<div className="links">
					<div className="left">
						<div className="last_single">
							<button>
								<div className="img_container">
									<img src={SpotifyImg} alt="SpotifyImg" />
								</div>
								<span>Last Single</span>
							</button>
						</div>
						<div className="amazon">
							<button>
								<div className="img_container">
									<img src={AmazonImg} alt="SpotifyImg" />
								</div>
								<span>Amazon</span>
							</button>
						</div>
						<div className="twitch">
							<button>
								<div className="img_container">
									<img src={Twitch} alt="SpotifyImg" />
								</div>
								<span>Twitch</span>
							</button>
						</div>
					</div>

					<div className="right">
						<div className="recipes">
							<button>
								<div className="img_container">
									<img src={Recipe} alt="SpotifyImg" />
								</div>
								<span>Recipes</span>
							</button>
						</div>
						<div className="tiktok">
							<button>
								<div className="img_container">
									<img src={TiktokImg} alt="SpotifyImg" />
								</div>
								<span>Tiktok</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="background_img">
				<img src={DesktopSectionBackground} alt="DesktopSectionBackground" />
			</div>
		</div>
	)
}

export default IncreaseVisitsSection
