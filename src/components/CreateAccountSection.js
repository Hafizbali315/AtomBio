import DesktopSectionBackground from '../assets/DesktopSectionBackground.png'
import SocialMobileImg from '../assets/SocialMobileImg.png'

const CreateAccountSection = () => {
	return (
		<div className="create_account_section">
			<div className="left">
				<h1>
					Conecta todo tu universo con un <span>único link.</span>
				</h1>
				<p>Crea tu atom bio y unifica toda tu presencia online de manera sencilla, rápida y gratuita.</p>

				<button>Crear cuenta gratis</button>

				<p>
					¿Eres influencer y te conocen más allá de Orión? <span>Entra aquí</span>
				</p>
			</div>

			<div className="right">
				<div className="right_img">
					<img src={SocialMobileImg} alt="SocialMobileImg" />
				</div>
			</div>

			<div className="background_img">
				<img src={DesktopSectionBackground} alt="DesktopSectionBackground" />
			</div>
		</div>
	)
}

export default CreateAccountSection
