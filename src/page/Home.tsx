import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Capitulos } from "../components/home/Capitulos";
import { Info } from "../components/home/Info";

export const Home = () => {
	return (
		<>
			<Header />
			<section className='home-cont'>
				<Info />
				<Capitulos />
			</section>
			<Footer />
		</>
	);
};
