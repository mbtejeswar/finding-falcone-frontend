import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Spinner from '../../components/spinner/spinner';
class FindingFalconeResult extends React.Component{


    startAgain(){
        
    }





    render(){
        let  result =  this.props.findFalconeResult.status ==="success"? (
            <div className="success">
            <h2>Success!Congratulations on Finding Falcone. King shah is mightly pleased</h2>
            <div>Planet Found: {this.props.findFalconeResult.planet_name}</div>
            <div>Time Taken: {this.props.history.location.state.timeTaken}</div>
            <Link to="/" >Start Again</Link>
            </div>)
            :
            
            (<div className="failed">
                <h2>Better luck next time you didn't found the falcone</h2>
            </div>)
        return(
         
            <div className="result">
                {this.props.findFalconeResult.status ? result:<Spinner/>}


                   
                    

                
        
           
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