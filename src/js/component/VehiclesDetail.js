import React, { useState, useEffect, useContext, Component } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehiclesDetail = () =>{
  const {store, actions}= useContext(Context);
  const {vehicleId} = useParams()
  const widget="vehicles"
  const itemUrlTail = widget+"/"+vehicleId+"/";
  const index = store.people.find(item=>item.id==vehicleId)
  const data = store.data && store.data[vehicleId]

  useEffect(()=>{
    actions.fetchStarWars(widget)
		actions.fetchStarWarsDetails(itemUrlTail, widget, vehicleId)
	}, [])

  function imgError(e){
    e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
  }

  function verifyFavorite(itemId){
    return store.favorites.some(item=>item.id==`${widget}/${itemId}`)
  }

return (
  <div className="wholecard w-100 card rounded mx-auto" style={{maxWidth:"40rem"}}>
      {!data?
      <h1 className="d-flex justify-content-center align-items-center text-center m-5">
      Loading...
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
        <path 
          d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"
        />
      </svg>
    </h1>:(
    <div className="container-fluid text-center mx-auto">
    <div className="container-fluid mx-auto">
      <h1 className="text-center mx-0">{data.name}</h1>
    </div>
      <p>{data.description}</p>
    <ul className="list-group list-group-flush rounded">
      <img className="mx-auto px-auto img-fluid rounded mb-3" src={data.img} onError={imgError}></img>
      <li className="list-group-item rounded mb-1"><p><strong>Vehicle class: </strong> {data.vehicle_class}</p></li>
      <li className="list-group-item rounded my-1"><strong>Cargo Capacity:</strong> {data.cargo_capacity}Kg</li>
      <li className="list-group-item rounded my-1"><strong>Consumable loot will last for: </strong>{data.consumables}</li>
      <li className="list-group-item rounded my-1"><strong>you Need</strong> {data.cost_in_credits} Credits<strong> to afford this bad boy</strong> </li>
      <li className="list-group-item rounded my-1"><strong>Can Hold: </strong>{data.crew} crewmembers<strong> of average size</strong> </li>
      <li className="list-group-item rounded my-1"><strong>Hyperdrive Rating: </strong>{data.hyperdrive_rating}</li>
      <li className="list-group-item rounded my-1"><strong>Ship length: </strong>{data.length} meters</li>
      <li className="list-group-item rounded my-1"><strong>Ship Manufacturer</strong><br/>{data.manufacturer}</li>
      <li className="list-group-item rounded my-1"><strong>Maximum atmospheric speed: </strong>{data.max_atmosphering_speed} Km/h</li>
      <li className="list-group-item rounded mt-1"><strong>Ship Model: </strong>{data.model}</li>
      {/* vehiculos con pilotos en arrray parece que no estan funcionando del lado del servidor */}
    </ul>
    <div className="d-grid gap-2">
                <Link className="btn btn-outline-info mt-4 mb-0" to="/">
                  <button className="btn btn-outline-danger my-2" type="button">Noob Mode</button>
                </Link>
                <button 
                  className={`btn mt-0 mb-4 btn-${verifyFavorite(data.id)?"warning":"outline-warning"}`} 
                  onClick={()=>actions.FavoriteChecked(`${widget}/${data.url?.slice(-2)}`, data.name)}
                >♡</button>
            </div>
</div>)}  
  </div>
)};

  export default VehiclesDetail;