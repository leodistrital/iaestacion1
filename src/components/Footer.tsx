export const Footer = () => {
	return (
		<>
			<div className='agradecimiento'>
				Agradecimiento especial a las personas que administraron el
				repositorio de información de la Comisión para el
				Esclarecimiento de la Verdad
			</div>
			<footer className='footer'>
				<div className='footer-cont'>
					<div className='logos'>
						<div className='img-logos'>
							<img
								src='../img/Logo expo.png'
								alt='logo-expo'
								className='logo-expo'
							/>
							<img
								src='./img/LogoComision.png'
								alt='logo-comision'
								className='logo-comision'
							/>
							<img
								src='../img/CMPR.png'
								alt='logo-cmpr'
								className='logo-cmpr'
							/>
							<img
								src='../img/GIZ.png'
								alt='logo-giz'
								className='logo-giz'
							/>
						</div>
						<div className='TYC'>
							<a href='#'>
								COMISIÓN DE LA VERDAD / TÉRMINOS Y CONDICIONES
								DE LA APLICACIÓN DE LA IA
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
