import React, {useState, useEffect, createContext} from 'react';

export const DrinkContext = createContext();

export const Store = (props) => {

  const [drinks, setDrinks] = useState([]);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.query}`)
      .then(resp => resp.json())
      .then(resp => {
        if(resp.drinks === null) {
          setValid(false)
          throw new Error('Invalid request')
        }
        return resp
      })
      .then(json => {
        setDrinks(json.drinks)
        setValid(true)
      })
      .catch(err => {
        console.log(err)
      });
  }, [props.query])

  return(
    <DrinkContext.Provider value={[drinks, valid]} >
      {props.children}
    </DrinkContext.Provider>
  )
}