import React from 'react';
import {connect} from 'react-redux';
import {fetchPlanetsAction,fetchVehiclesAction,fetchTokenAction,findFalconeAction} from '../../store/actions/fetchActions';
import SelectPlanets from '../../components/selectPlanet/selectPlanet';
import  './findFalconControls.css';

class FindFalconControls extends React.Component{

    calculateTravelTime = ()=>{
        let timeTaken = 0;
        const {selectedPlanets,selectedVehicles,planets,vehicles} = this.props;
        selectedPlanets.forEach((planet,index)=>{
            if(selectedVehicles[index]){
                timeTaken = timeTaken + planets[planets.findIndex((x)=>x.name===planet)].distance/vehicles[vehicles.findIndex((x)=>x.name===selectedVehicles[index])].speed;

            }
        })
        return timeTaken;
    }



    componentDidMount() {
        this.props.fetchPlanetsAction();
        this.props.fetchVehiclesAction();
        this.props.fetchTokenAction();
        

      }

      onSubmitHandler = ()=>{
        const {token,selectedPlanets,selectedVehicles, findFalconeAction} = this.props;
        findFalconeAction({
            token:token,
            planet_names:selectedPlanets,
            vehicle_names:selectedVehicles
        })
      }

    render(){

        return(
       
        // <div></div>
        // {Planets}
        <div className = 'main-container'>
            <div className="Heading">
                 <h2>Select planets you wish to search in:</h2>
             </div>

            <div className="planets-time-container">
                <div className='select-planets-container'>
                
                    {this.props.selectedPlanets.map((_,index)=>{
                    return <SelectPlanets key={index} planetindex={index}/>
                    })}
                </div>

                <div>
                <h2>Time Taken{this.calculateTravelTime()}</h2>
                </div>  
            
            </div>

            <div>
                <button  onClick={this.onSubmitHandler}><a href="/result">Find Falcone!</a></button>
            </div>


        </div>
        
        
     
        )
    }

}



const mapStateToProps = (state)=>{
    return{
        planets:state.planets,
        vehicles:state.vehicles,
        selectedPlanets:state.selectedPlanets,
        selectedVehicles:state.selectedVehicles,
        token:state.token
    }

}

const mapDispatchToProps = (dispatch)=>{

    return{
        fetchPlanetsAction:()=>fetchPlanetsAction(dispatch),
        fetchVehiclesAction:()=>fetchVehiclesAction(dispatch),
        fetchTokenAction:()=>fetchTokenAction(dispatch),
        findFalconeAction:(requestPayload)=>findFalconeAction(requestPayload)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FindFalconControls);