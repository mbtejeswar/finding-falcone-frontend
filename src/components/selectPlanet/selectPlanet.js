import React from 'react';
import { connect } from "react-redux";
import {Dropdown} from '../Dropdown/dropdown';
import Select from 'react-select';



const selectPlanet = ({planets})=>{


    return(
 
        <div>
            {/* <Dropdown planets={planets} /> */}
       
        </div>

    )

}

const mapStateToProps = (state)=>{
    return{
        planets:state.planets,
        vehicles:state.vehicles
    }

}

export default connect(mapStateToProps)(selectPlanet);