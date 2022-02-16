import Image6 from '../assets/Image6.png'
import Image6Mobile from '../assets/Image6Mobile.png'

const GenerateLeadsSection = () => {
	return (
		<div className="generate_leads_section">
			<div className="left">
				<img className="desktop" src={Image6} alt="image6" />
				<img className="mobile" src={Image6Mobile} alt="image6" />
			</div>
			<div className="right">
				<h2>
					Genera leads y eclípsales con tu contenido<span style={{ color: '#02B09E' }}>.</span>
				</h2>
				<p>Recolecta los emails y números de teléfono de tus seguidores o potenciales clientes e impáctalos con tus novedades.</p>
			</div>
		</div>
	)
}

export default GenerateLeadsSection
