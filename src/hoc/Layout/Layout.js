import React from 'react';
import {Header} from '../../components/Header/index';
// import {Dropdown} from '../../components/Dropdown/index';
import FindFalconeControls from '../../containers/findFalconeControls/findFalconControls';




class Layout extends React.Component {



    render(){
        return( 
        
        <div>
            <Header  />
            {/* <Dropdown /> */}
            <FindFalconeControls />


        </div>

            )
    }

}


export default Layout;