import React, { useState, useEffect, useContext, Component } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SpeciesOverview = () =>{
    const {store, actions}= useContext(Context);
    const widget = "species";
    // const {people, planets, vehicles, films} = store
    function verifyFavorite(itemId){
        return store.favorites.some(item=>item.id==`${widget}/${itemId}`)
    }
    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
  
    useEffect(()=>{
		actions.fetchStarWars(widget)
	}, [])

  return (
    <div className="container text-center">
        <h1 className="m-auto my-5">Species!</h1>
        <div className="row row-cols-4 mx-auto justify-content-center">
            {store[widget]?.map(item=>(
            <div key={item.uid} className="wholecard col card my-3 mx-3">
                <img src={item.img} onError={imgError} className="card-img-top mx-0 p-0 overflow-hidden" alt="CharacterImg"></img>
                <div className="cardTitle card-body">
                    <h5 className="cardTitle card-body"><strong>{item.name}</strong></h5>
                </div>
                <div className="cardFooter card-body ms-auto px-auto">
                    <Link to={`${item.uid}`}>                       
                        <button className="btn btn-outline-info mx-4">
                            Nerd Mode
                        </button>
                    </Link>
                    
                    <button 
                    className={`btn btn-${verifyFavorite(item.uid)?"warning":"outline-warning"}`} 
                    onClick={()=>actions.FavoriteChecked(`${widget}/${item.uid}`, item.name)}
                    >♡</button>
                </div>
            </div>    
    ))|| <h1>loading...</h1>}
        </div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {/* <li className="page-item disabled">
                <a className="page-link">Previous</a>
                </li> */}
                <li className="page-item"><a onClick={()=>actions.fetchStarWars("species", 1, 21)} className="page-link">1</a></li>
                <li className="page-item"><a onClick={()=>actions.fetchStarWars("species", 2, 21)} className="page-link">2</a></li>
                {/* <li className="page-item">
                <a className="page-link" href="#">Next</a>
                </li> */}
            </ul>
        </nav>
    </div>
    )};

  export default SpeciesOverview;