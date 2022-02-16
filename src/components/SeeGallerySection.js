import Image2 from '../assets/Image2.png'
import { BsCircleFill } from 'react-icons/bs'

const SeeGallerySection = () => {
	return (
		<div className="gallery_section">
			<div className="left">
				<div className="img_container">
					<img src={Image2} alt="Image2" />
				</div>
			</div>
			<div className="right">
				<h2>
					Cada estrella tiene su estilo<span style={{ color: '#02B09E' }}>.</span>
				</h2>
				<p>
					Elige un tema predefinido o personaliza tu
					<br />
					página como más te guste.
				</p>

				<div className="points_row">
					<ul className="left">
						<li>
							<BsCircleFill className="icon" /> <span>Sube tu imagen de fondo.</span>
						</li>
						<li>
							<BsCircleFill className="icon" /> <span>Elige el estilo de tu presentación.</span>
						</li>
						<li>
							<BsCircleFill className="icon" /> <span>Personaliza tus botones.</span>
						</li>
					</ul>

					<div className="right">
						<p>¿Necesitas inspiración?</p>
						<button>Ver galería</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SeeGallerySection
