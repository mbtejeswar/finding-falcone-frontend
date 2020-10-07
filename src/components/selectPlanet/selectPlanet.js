import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
// import SelectVehicle from '../selectVehicle/selectvehicle';



const selectPlanet = ({planets,vehicles,planetindex,selectedPlanet,selectedPlanets,selectedVehicle})=>{

    const planetSelecthandler = (event,index)=>{ 
        selectedPlanet(event.value,index);
      }

    const vehicleSelectHandler = (event,index)=>{
        selectedVehicle(event.target.value,index)

    }

    return(
 
        <div >
            <Select 
            options={planets.map((planet)=>(
            {value:planet.name,
            label:planet.name}
            ))}
            onChange={(event)=>planetSelecthandler(event,planetindex)}
             />
             <ul>
             {selectedPlanets[planetindex] &&  vehicles.map((vehicle,index)=>(
                 <li>
                    <label>
                    <input type="radio" value={vehicle.name} name={selectedPlanets[planetindex]} onChange={(event)=>vehicleSelectHandler(event,index)}></input>
                    {vehicle.name + '(' + vehicle.total_no +')'}
                    
                    </label>
                </li>
                
            ))}

             </ul>
            
          
             
           
        </div>

    )

}

const mapStateToProps = (state)=>{
    return{
        planets:state.planets,
        vehicles:state.vehicles,
        selectedPlanets:state.selectedPlanets
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        selectedPlanet:(planetName,index)=>dispatch({type:'STORE_SELECTED_PLANET',planetName,index}),
        selectedVehicle:(vehicleName,index)=>dispatch({type:'STORE_SELECTED_VEHCILE',vehicleName,index})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(selectPlanet);