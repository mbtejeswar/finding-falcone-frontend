import React from 'react';
import {connect} from 'react-redux';
import {fetchPlanetsAction,fetchVehiclesAction,fetchTokenAction,findFalconeAction} from '../../store/actions/fetchActions';
import SelectPlanets from '../../components/selectPlanetVehicle//selectPlanetVehicle';
import styles from './styles.module.css';
import Spinner from '../../components/spinner/spinner';
import ErrorHandler from '../../components/errorHandler/errorHandler';
import Aux from '../../hoc/Auxilary/Auxilary';
import PropTypes from 'prop-types';

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
        this.props.reset();
        

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
   
        <div className={styles['mainContainer']} data-test='findControls'>
            {this.props.planets.length?(
                <Aux>

                <div className={styles['Heading']}>
                    <h2>Select planets you wish to search in:</h2>
                </div>

                <div className={styles['selectPlanetsContainer']}>
                    {this.props.selectedPlanets.map((_,index)=>{
                    return <SelectPlanets key={index} planetindex={index}/>
                    })}
                </div>

                <div className={styles['time']}>
                <h2>Time Taken: {this.calculateTravelTime()}</h2>
                </div>

            <div className={styles['searchButton']}>
                <button  disabled={this.submitbtnHandler()} onClick={this.onSubmitHandler}>Find Falcone!</button>
            </div>

            </Aux>)
            :
            <Spinner />}
        </div>

        )
    }

}



FindFalconControls.propTypes = {
    planets: PropTypes.array.isRequired,
    vehicles:PropTypes.array.isRequired,
    selectedPlanets:PropTypes.array.isRequired,
    selectedVehicles:PropTypes.array.isRequired,
    token:PropTypes.string.isRequired,
    fetchPlanetsAction: PropTypes.func.isRequired,
    fetchVehiclesAction:PropTypes.func.isRequired,
    fetchTokenAction:PropTypes.func.isRequired,
    findFalconeAction:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired
  };
  
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
        reset:()=>dispatch({type:'RESET'})
        

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(FindFalconControls));