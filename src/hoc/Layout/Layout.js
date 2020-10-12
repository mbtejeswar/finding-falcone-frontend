import React from 'react';
import {Header} from '../../components/Header/index';
// import {Dropdown} from '../../components/Dropdown/index';
import FindFalconeControls from '../../containers/findFalconeControls/findFalconControls';
import FindFalconeResult from '../../containers/findingFalconeResult/findingFalconeResult';
import {Route} from 'react-router-dom';


class Layout extends React.Component {



    render(){
        return( 
        
        <div>
            <Header  />
            {/* <Dropdown /> */}
            <Route exact path='/' component={FindFalconeControls} />
            <Route exact path='/result' component={FindFalconeResult} />


        </div>

            )
    }

}


export default Layout;