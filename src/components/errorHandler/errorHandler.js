import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary'
import axios from '../../api/axios'
import Modal from '../Modal/Modal';


 const ErrorHandler = (WrappedComponent)=>{
    return class extends React.Component {
        
    state = {
      show:false,
      errorMessage:null
    }

    acceptErrorHandler=()=>{
      this.setState({show:false})

    }

    componentWillMount(){
      this.resInterceptor =  axios.interceptors.response.use(
        res => res,
        err => {
          if (err.response.status === 404) {         
            let error = `${err.config.url} not found`;
            this.setState({show:true, errorMessage:error});

            }
        return err;
          }
        );
              
      }

        componentWillUnmount(){

          axios.interceptors.response.eject(this.resInterceptor);
          
        }
   

        render(){
            return(
                <Aux>
                  {this.state.errorMessage?  
                  (<Modal show={this.state.show} closeModal={this.acceptErrorHandler}>
                  <h2>{`${this.state.errorMessage}.Please verify API connection to continue`}</h2>
                  </Modal>):
                  <WrappedComponent {...this.props}/> }              
                </Aux>
        
            
            )            
        }


    }

}

export default ErrorHandler;
