import Image10 from '../assets/Image10.png'
import LogoWhite from '../assets/LogoWhite.png'
import DesktopSectionBackground from '../assets/DesktopSectionBackground.png'

const AtomSection = () => {
	return (
		<div className="atom_section">
			<div className="content_container">
				<div className="img_container">
					<img src={Image10} alt="Image10" />
				</div>

				<div className="content">
					<h2>
						“I,
						<br /> a universe of atoms an atom in the Universe.”
					</h2>
					<h6>R. Feynman</h6>

					<div className="logo">
						<img src={LogoWhite} alt="logo" />
					</div>

					<p>Síguenos en Instagram</p>
				</div>
			</div>

			<div className="background_img">
				<img src={DesktopSectionBackground} alt="DesktopSectionBackground" />
			</div>
		</div>
	)
}

export default AtomSection
