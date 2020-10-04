import React from 'react';

const Dropdown = ({planets})=>{

    return(
        <select>
            {planets.map((planet)=>{
                return <option>{planet.name}</option>
            })} 
        </select>

    )
   

}

export default Dropdown;
