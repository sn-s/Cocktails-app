import React, {useContext} from 'react';
import {DrinkContext} from "../../store/Store";

const Results = () => {

  const [drinks, valid] = useContext(DrinkContext);
  let showResults;
  
    showResults = !valid ? <h1>unidentified drink entered</h1>
    : drinks.map(item => (
      <div 
        key={item.idDrink} 
        style={{width: "500px"}}
        className="cardList black bg-light-blue dib br4 pa3 ma3 grow ba b--white bw1 shadow-5">
        <h2>{item.strDrink}</h2>
        <img style={{width: "150px"}} src={item.strDrinkThumb} alt="alcoholic drink" /> 
        <h4>{item.strInstructions}</h4>
      </div>))
    

  return(
    <div >
      {showResults}
    </div>
  )
}

export default Results;