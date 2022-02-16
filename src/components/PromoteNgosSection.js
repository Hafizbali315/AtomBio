import Image8Left from '../assets/Image8Left.png'
import DesktopSectionBackground from '../assets/DesktopSectionBackground.png'
import Image8 from '../assets/Image8.png'

const PromoteNgosSection = () => {
	return (
		<div className="promote_ngos">
			<div className="left">
				<h2>
					Promueve ONG’s hasta el infinito y más allá<span style={{ color: '#F056E3' }}>.</span>
				</h2>

				<p>Usa tu página para ayudar a Amnistía Internacional y próximamente a muchas más ONG’s.</p>
				<p>Activa el enlace al crear tu página.</p>

				<div className="img_container">
					<img src={Image8Left} alt="Image8Left" />
				</div>
			</div>

			<div className="right">
				<div className="img_container">
					<img src={Image8} alt="Image8" />
				</div>

				<div className="content">
					<h2>Crea ahora tu propio Big Bang.</h2>

					<button>Crear cuenta gratis</button>

					<p>
						Haz tu página en segundos. Elige un nombre y un tema. Añade tantos links como quieras.
						<br /> Es gratis.
					</p>
				</div>
			</div>

			<div className="background_img">
				<img src={DesktopSectionBackground} alt="DesktopSectionBackground" />
			</div>
		</div>
	)
}

export default PromoteNgosSection
