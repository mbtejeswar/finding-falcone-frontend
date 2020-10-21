import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Spinner from '../../components/spinner/spinner';
import styles from './styles.module.css';
import Aux from '../../hoc/Auxilary/Auxilary';
import PropTypes from 'prop-types';
class FindingFalconeResult extends React.Component{


    




    render(){
   

    let startAgainBtn = <Link to="/" ><button>Start Again </button> </Link>;

    let result = <Spinner />;

        if (this.props.findFalconeResult.status ==="success"){
           result =  ( <Aux>
            <h2>Success!Congratulations on Finding Falcone. King shah is mightly pleased</h2>
            <div>Planet Found: {this.props.findFalconeResult.planet_name}</div>
            <div>Time Taken: {this.props.history.location.state.timeTaken}</div>
            {startAgainBtn}      
            </Aux>)

        }
        else if(this.props.findFalconeResult.status ==="false"){
            result = ( <Aux>
                <h2>Better luck next time you didn't found the falcone</h2>
                {startAgainBtn}
            </Aux>)
        }

        else if(this.props.findFalconeResult.error){
            result =  (<Aux>
                <h2>'Token is not initialized. Please get a new token with /token API'</h2>
                {startAgainBtn}
            </Aux>)
        }

        else{
            result =  (<Aux>
                <h2>'Something went wrong. Please try again'</h2>
                {startAgainBtn}
            </Aux>)
        }
       
   
        


        return(
         
            <div className={styles['result']}>
                {this.props.findFalconeResult.status || this.props.findFalconeResult.error ? (
                result
               
                )
                :<Spinner/>}           
            </div>
        )
    }

}

FindingFalconeResult.propTypes = {
    findFalconeResult:PropTypes.object.isRequired,
    history:PropTypes.object.isRequired
  };

const mapStatetoProps = state=>(
    {
        findFalconeResult:state.result
     
       
    }
)


export default connect(mapStatetoProps)(FindingFalconeResult);