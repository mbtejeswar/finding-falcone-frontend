import React from 'react';
import Header from '../../components/Header/index';
// import {Dropdown} from '../../components/Dropdown/index';
import FindFalconeControls from '../../containers/findFalconeControls/findFalconControls';
import FindFalconeResult from '../../containers/findingFalconeResult/findingFalconeResult';
import {Route} from 'react-router-dom';
import Aux from '../Auxilary/Auxilary';

import Footer from '../../components/footer/footer';

class Layout extends React.Component {



    render(){
        return( 
        
        <Aux>
            <Header  />
            <Route exact path='/' component={FindFalconeControls} />
            <Route exact path='/result' component={FindFalconeResult} />
            <Footer />
        </Aux>

            )
    }

}


export default Layout;