import React from 'react';
import * as Styles  from './styles.module.css'
import Backdrop from '../backdrop/backDrop'
import Aux from '../../hoc/Auxilary/Auxilary';

class Modal extends React.PureComponent  {

    render(){ 
      
    return (
        <Aux>
      <Backdrop show={this.props.show} close={this.props.closeModal} />
        <div className={Styles.Modal} style={{transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
        opacity:this.props.show ? '1':'0'}}>
            {this.props.children}      
        </div>       
        </Aux>
    )
  
}
}

export default Modal;