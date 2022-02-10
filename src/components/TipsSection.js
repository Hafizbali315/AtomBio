import { BsArrowRightCircle } from 'react-icons/bs'

const TipsSection = () => {
	return (
		<div className="tips_section">
			<div className="heading">
				<h2>Avanza años luz con estos consejos.</h2>
			</div>
			<div className="tips">
				<div className="tips_1">
					<ul>
						<li>
							<div className="icon_container">
								<BsArrowRightCircle className="icon" />
							</div>
							<div className="content">
								Comparte tu enlace en tu biografía o bio de Instagram u otras redes sociales: Facebook, Twitter, TikTok, Twitter, Snapchat,
								Youtube o Twitch.
							</div>
						</li>
						<li>
							<div className="icon_container">
								<BsArrowRightCircle className="icon" />
							</div>
							<div className="content">Añade tu link en tu firma de los correos electrónicos.</div>
						</li>
						<li>
							<div className="icon_container">
								<BsArrowRightCircle className="icon" />
							</div>
							<div className="content">En tu CV, LinkedIn, o cartas de presentación para dar a conocer tus proyectos.</div>
						</li>
					</ul>
				</div>
				<div className="tips_2">
					<ul>
						<li>
							<div className="icon_container">
								<BsArrowRightCircle className="icon" />
							</div>
							<div className="content">En tus anuncios, campañas de marketing, pósteres y presentaciones.</div>
						</li>
						<li>
							<div className="icon_container">
								<BsArrowRightCircle className="icon" />
							</div>
							<div className="content">
								Añádelo a tu tarjeta de empresa o de contacto, o simplemente comparte tu enlace en tus interacciones de trabajo.{' '}
							</div>
						</li>
						<li>
							<div className="icon_container">
								<BsArrowRightCircle className="icon" />
							</div>
							<div className="content">En tu estado de Whatsapp o en tus stories de Facebook o Instagram. </div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TipsSection
