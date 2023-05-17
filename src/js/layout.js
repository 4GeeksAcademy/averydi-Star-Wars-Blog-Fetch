import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CharacterDetail from "./component/characterDetail.js";
import StarshipsDetail from "./component/StarshipsDetail";
import VehiclesDetail from "./component/VehiclesDetail";
import PlanetDetail from "./component/PlanetDetail";
import SpeciesDetail from "./component/SpeciesDetail";
import FilmDetail from "./component/FilmDetail";
import CharacterOverview from "./component/CharacterOverview";
import PlanetOverview from "./component/PlanetOverview";
import FilmOverview from "./component/FilmOverview";
import StarshipsOverview from "./component/StarshipOverview";
import SpeciesOverview from "./component/SpeciesOverview";
import VehicleOverview from "./component/VehicleOverview";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path ="/people/:peopleId" element={<CharacterDetail />} />
						<Route path ="/starships/:shipId" element={<StarshipsDetail />} />
						<Route path ="/vehicles/:vehicleId" element={<VehiclesDetail />} />
						<Route path ="/planets/:planetId" element={<PlanetDetail />} />
						<Route path ="/species/:speciesId" element={<SpeciesDetail />} />
						<Route path ="/films/:filmId" element={<FilmDetail />} />
						<Route path ="/people/" element={<CharacterOverview />} />
						<Route path ="/planets/" element={<PlanetOverview />} />
						<Route path ="/films/" element={<FilmOverview />} />
						<Route path ="/starships/" element={<StarshipsOverview />} />
						<Route path ="/species/" element={<SpeciesOverview />} />
						<Route path ="/vehicles/" element={<VehicleOverview />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
