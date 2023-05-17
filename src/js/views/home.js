import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";
import { FilmCard } from "../component/FilmCard";
import { Context } from "../store/appContext.js"
import { SpeciesCard } from "../component/SpeciesCard.js";
import { Link } from "react-router-dom";
import {StarshipsCard} from "../component/StarshipsCard.js";

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.fetchStarWars("vehicles")
		actions.fetchStarWars("people")
		actions.fetchStarWars("planets")
		actions.fetchStarWars("films")
		actions.fetchStarWars("species")
		actions.fetchStarWars("starships")
	}, [])
	return(
	<>
		<Link to="/people/">
			<h1>
				Characters
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll">
			<CharacterCard 
			widget="people"
			/>
		</div>
		<Link to="/planets/">
			<h1>
				Planets
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<PlanetCard 
			widget="planets"
			/>
		</div>
		<Link to="/vehicles/">
			<h1>
				Vehicles
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<VehicleCard 
			widget="vehicles"
			/>
		</div>
		<Link to="/species/">
			<h1>
				Species
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<SpeciesCard 
			widget="species"
			/>
		</div>
		<Link to="/starships/">
			<h1>
				Starships
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<StarshipsCard 
			widget="starships"
			/>
		</div>
		<Link to="/films/">
			<h1>
				Films
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<FilmCard 
			widget="films"
			/>
		</div>
	</>
);}

