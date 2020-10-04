import React from 'react';
import {connect} from 'react-redux';
import {fetchPlanetsAction,fetchVehiclesAction} from '../../store/actions/fetchActions';
import SelectPlanets from '../../components/selectPlanet/selectPlanet';





class FindFalconControls extends React.Component{
    state = {
        selectPlanets : ['','','','']
    }


    componentDidMount() {
        this.props.fetchPlanetsAction();
        this.props.fetchVehiclesAction();

      }


    render(){
        
     

 
        return(
       
        // <div></div>
        // {Planets}
        <div main-container>
            <div className="Heading">
                <h2>Select planets you wish to search in:</h2>
            </div>
            {this.state.selectPlanets.map((_,index)=>{
               return <SelectPlanets key={index}/>
            })}
        </div>
     
        )
    }

}



const mapStateToProps = (state)=>{
    return{
        planets:state.planets,
        vehicles:state.vehicles
    }

}

const mapDispatchToProps = (dispatch)=>{

    return{
        fetchPlanetsAction:()=>fetchPlanetsAction(dispatch),
        fetchVehiclesAction:()=>fetchVehiclesAction(dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FindFalconControls);