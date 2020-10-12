import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class FindingFalconeResult extends React.Component{


    startAgain(){
        
    }


    render(){
        return(
            // <div>This is Result container</div>
            <div>
                
                {this.props.findFalconeResult.status ==="success"? (
                <div>
                <div>Success!Congratulations on Finding Falcone. King shah is mightly pleased</div>
                <div>Planet Found: {this.props.findFalconeResult.planet_name}</div>
                <div>Planet Found: {this.props.history.location.state.timeTaken}</div>
                </div>)
                :
                
                (<div>Better luck next time you didn't found the falcone</div>)}
        
            <Link to="/" >Start Again</Link>
            </div>
        )
    }

}

const mapStatetoProps = state=>(
    {
        findFalconeResult:state.result
    }
)


export default connect(mapStatetoProps)(FindingFalconeResult);