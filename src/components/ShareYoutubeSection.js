import DesktopSectionBackground from '../assets/DesktopSectionBackground.png'
import Image5 from '../assets/Image5.png'

const ShareYoutubeSection = () => {
	return (
		<div className="share_youtube_section">
			<div className="left">
				<h2>
					Comparte videos de YouTube como una estrella del rock<span style={{ color: '#F056E3' }}>.</span>
				</h2>
				<p>Copia el enlace del video de YouTube que quieras compartir y se podrá reproducir directamente desde tu página.</p>
			</div>
			<div className="right">
				<img src={Image5} alt="Image5" />
			</div>

			<div className="background_img">
				<img src={DesktopSectionBackground} alt="DesktopSectionBackground" />
			</div>
		</div>
	)
}

export default ShareYoutubeSection
