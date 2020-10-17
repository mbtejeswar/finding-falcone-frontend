import React from 'react';
import {connect} from 'react-redux';
import {fetchPlanetsAction,fetchVehiclesAction,fetchTokenAction,findFalconeAction} from '../../store/actions/fetchActions';
import SelectPlanets from '../../components/selectPlanet/selectPlanet';
import  './findFalconControls.css';
import Spinner from '../../components/spinner/spinner';
import ErrorHandler from '../../components/errorHandler/errorHandler';
import Aux from '../../hoc/Auxilary/Auxilary';

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
      
      componentDidUpdate(){

      }
    


      onSubmitHandler = ()=>{
        const {token,selectedPlanets,selectedVehicles, findFalconeAction} = this.props;
        findFalconeAction({
            token:token,
            planet_names:selectedPlanets,
            vehicle_names:selectedVehicles
        })
        this.props.history.push({pathname:'/result', state:{timeTaken:this.calculateTravelTime()}})
      }

      submitbtnHandler =()=>{
        let planetVehcileCount = 0;
        const {selectedPlanets, selectedVehicles} = this.props;
        selectedPlanets.forEach((planet,index)=>{
                if(planet){
                    planetVehcileCount = planetVehcileCount + 1 
                    if(selectedVehicles[index]){
                    planetVehcileCount = planetVehcileCount + 1 
                    } else{
                        
                        return true;
                    }
                } else
                {
                    
                    return true;
                }
          } )
         if (planetVehcileCount === 8){
            return false
         }
         else{
             return true
         }

      }

    
 

    render(){



        return(
       
        // <div></div>
        // {Planets}
     
       
        <div className = 'main-container'>
            {this.props.planets.length?(
                <Aux>
                <div className="Heading">
                    <h2>Select planets you wish to search in:</h2>
                </div>

                <div className='select-planets-container'>
                    {this.props.selectedPlanets.map((_,index)=>{
                    return <SelectPlanets key={index} planetindex={index}/>
                    })}
                </div>

                <div className="time">
                <h2>Time Taken: {this.calculateTravelTime()}</h2>
                </div>  
            
            {/* </div> */}

            <div className="searchButton">
                <button  disabled={this.submitbtnHandler()} onClick={this.onSubmitHandler}>Find Falcone!</button>
            </div>

            </Aux>):<Spinner />}


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
        findFalconeAction:(requestPayload)=>findFalconeAction(requestPayload,dispatch),
        

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FindFalconControls);