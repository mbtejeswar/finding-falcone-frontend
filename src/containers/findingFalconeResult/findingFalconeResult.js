import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Spinner from '../../components/spinner/spinner';
import styles from './styles.module.css';
import Aux from '../../hoc/Auxilary/Auxilary';
class FindingFalconeResult extends React.Component{




    render(){


        let startAgainBtn = <Link to="/" ><button>Start Again </button> </Link>;
        let  result =  this.props.findFalconeResult.status ==="success"? (
            <Aux>
            <h2>Success!Congratulations on Finding Falcone. King shah is mightly pleased</h2>
            <div>Planet Found: {this.props.findFalconeResult.planet_name}</div>
            <div>Time Taken: {this.props.history.location.state.timeTaken}</div>
            {startAgainBtn}      
            </Aux>)
            :
            
            (<Aux>
                <h2>Better luck next time you didn't found the falcone</h2>
                {startAgainBtn}
            </Aux>);

        


        return(
         
            <div className={styles['result']}>
                {this.props.findFalconeResult.status ? (
                result 
               
                )
                :<Spinner/>}           
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