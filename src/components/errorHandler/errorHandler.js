import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary'

// import Modal from '../Modal/Modal';

 const ErrorHandler = (WrappedComponent,axios)=>{
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
                    // throw new Error(`${err.config.url} not found`);
         
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
                {/* <Modal show={this.state.show} closeModal={this.acceptErrorHandler}>
                <h1>{this.state.errorMessage}</h1>
                </Modal> */}
                <WrappedComponent {...this.props}/>
                </Aux>
        
            
            )

            
        }


    }

    
     

        

    
    

}

export default ErrorHandler;
