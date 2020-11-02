import React,{ useEffect, useState} from 'react';
import ReciepeComp from './ReciepeComp';
import './Reciepe.css';
import SearchIcon from '@material-ui/icons/Search';

export default function Reciepe() {

    const APP_ID = "a3572e71";
    const APP_KEY="2ddfb1eab1247cf8ea4a23f406ed6508"; 
    
    const [ recipes, setReciepe] = useState([]);
    const [ search, setSearch] = useState("");
    const [ query, setQuery] = useState('')

    useEffect(() => {
      getReciepes();
    },[ query ]);
        
    const getReciepes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();    
        setReciepe(data.hits);
        console.log(data.hits);
    }
    const updateSearch = e => {
      setSearch(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }


    return (
        <div>
                <div className="search">
                <form className="search-form" onSubmit={getSearch} >
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit"><SearchIcon /></button>
                </form> 
                </div>
                <div className="structure">
                {recipes.map( recipe => (
                         < ReciepeComp
                          key={recipe.recipe.label}
                          title={recipe.recipe.label}
                          image={recipe.recipe.image}
                          ingredientaLines={recipe.recipe.ingredientLines}
                          />
                ))}
                </div>
        </div>
    )
}
