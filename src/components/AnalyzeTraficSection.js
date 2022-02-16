import Image7 from '../assets/Image7.png'
import DesktopSectionBackground from '../assets/DesktopSectionBackground.png'

const AnalyzeTraficSection = () => {
	return (
		<div className="analyze_trafic_section">
			<div className="left">
				<h2>
					Analiza tu tráfico y pon en órbita tu estrategia<span style={{ color: '#F056E3' }}>.</span>
				</h2>
				<p>
					Sabrás cuántos usuarios visitan tu perfil cada día y qué enlaces reciben más atención. Conocer qué es lo que más interesa a tu
					audiencia te permitirá mejorar tu estrategia online y descubrir en qué debes centrar tus esfuerzos.
				</p>
			</div>
			<div className="right">
				<img src={Image7} alt="Image7" />
			</div>

			<div className="background_img">
				<img src={DesktopSectionBackground} alt="DesktopSectionBackground" />
			</div>
		</div>
	)
}

export default AnalyzeTraficSection
