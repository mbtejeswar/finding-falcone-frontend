import React from 'react';
import {connect} from 'react-redux';

class FindingFalconeResult extends React.Component{


    render(){
        return(
            // <div>This is Result container</div>
            <div>
                {this.props.findFalconeResult.status? (<div>You have found the falcone</div>):
                
                (<div>Better luck next time you didn't found the falcone</div>)}

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