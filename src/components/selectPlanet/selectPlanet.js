import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
// import SelectVehicle from '../selectVehicle/selectvehicle';



const SelectPlanet = ({planets,vehicles,planetindex,selectedPlanet,selectedPlanets,selectedVehicle,selectedVehicles})=>{

    const planetSelecthandler = (event,index)=>{ 
        selectedPlanet(event.value,index);

      }

    const vehicleSelectHandler = (event,index,planetIndex)=>{
        selectedVehicle(event.target.value,index,planetIndex)

    }
  
    const checkDistanceFeasibility = (vehicle,planet)=>{    
        if(vehicle){
       
           return planets[planets.findIndex((x)=>x.name===planet)].distance > vehicle.max_distance
        }
    }

    
    const planetList = planets.filter(planet=>
        selectedPlanets && selectedPlanets.indexOf(planet.name)<0       
        )
    

    return(
 
        <div className="selectPlanet">
            <Select
             value={selectedPlanets[planetindex]!==''? {value:selectedPlanets[planetindex], label:selectedPlanets[planetindex]}: 'Select...'}
            options={planetList.map((planet)=>(
            {value:planet.name,
            label:planet.name}
            ))}
            onChange={(event)=>planetSelecthandler(event,planetindex)}
             />
             <ul>
             {selectedPlanets[planetindex] &&  vehicles.map((vehicle,index)=>(
                 <li>
                    <label>
                    <input 
                    type="radio" 
                    value={vehicle.name} 
                    name={planetindex} 
                    onChange={(event)=>vehicleSelectHandler(event,index,planetindex)} 
                    disabled={checkDistanceFeasibility(vehicle,selectedPlanets[planetindex]) || vehicle.total_no<=0}
                    checked={selectedVehicles[planetindex]===vehicle.name}
                    >
                    </input>
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
        selectedPlanets:state.selectedPlanets,
        selectedVehicles:state.selectedVehicles
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        selectedPlanet:(planetName,index)=>dispatch({type:'STORE_SELECTED_PLANET',planetName,index}),
        selectedVehicle:(vehicleName,index,planetIndex)=>dispatch({type:'STORE_SELECTED_VEHCILE',vehicleName,index,planetIndex})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectPlanet);