import React from 'react';
import {connect} from 'react-redux';
import {fetchPlanetsAction,fetchVehiclesAction} from '../../store/actions/fetchActions';
import SelectPlanets from '../../components/selectPlanet/selectPlanet';
import  './findFalconControls.css';




class FindFalconControls extends React.Component{



    componentDidMount() {
        this.props.fetchPlanetsAction();
        this.props.fetchVehiclesAction();

      }

    render(){

        return(
       
        // <div></div>
        // {Planets}
        <div className = 'main-container'>
            <div className="Heading">
                <h2>Select planets you wish to search in:</h2>
            </div>
            <div className='select-planets-container'>
             
                {this.props.selectedPlanets.map((_,index)=>{
                return <SelectPlanets key={index} index={index}/>
                })}
            </div>

        </div>
     
        )
    }

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
        fetchPlanetsAction:()=>fetchPlanetsAction(dispatch),
        fetchVehiclesAction:()=>fetchVehiclesAction(dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FindFalconControls);