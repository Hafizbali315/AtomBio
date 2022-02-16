import Image4 from '../assets/Image4.png'
import { BsCircleFill } from 'react-icons/bs'

const PromoteProductsSection = () => {
	return (
		<div className="promote_products_section">
			<div className="left">
				<div className="img_container">
					<img src={Image4} alt="Image2" />
				</div>
			</div>
			<div className="right">
				<h2>
					Promociona tus productos y servicios en toda la galaxia<span style={{ color: '#02B09E' }}>.</span>
				</h2>

				<ul>
					<li>
						<div className="icon_container">
							<BsCircleFill className="icon" />
						</div>
						<p>Añade imágenes con información de tus productos o servicios, horarios, calendarios... ¡lo que necesites!</p>
					</li>
					<li>
						<div className="icon_container">
							<BsCircleFill className="icon" />
						</div>{' '}
						<p>¿Tienes mucho que contar? Usa sliders para agrupar varias imágenes.</p>
					</li>
					<li>
						<div className="icon_container">
							<BsCircleFill className="icon" />
						</div>{' '}
						<p>Añade enlaces y dirige a tus usuarios hacia la plataforma que más te interese.</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default PromoteProductsSection
