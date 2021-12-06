import React from 'react';
import BarChartScreen from '../charts/BarChartScreen';
import styles from "../screens/HomeScreen.module.css"



const HomeScreen = () => {
    return(
        <div className="container-fluid">

            <h3 className= {styles.headerText}>
                Dashboard
            </h3>
        <div className ="row">
            <div classNAme = 'col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className = "card-shadow">
                    <h4>Bar chart</h4>
                    <BarChartScreen/>
                </div>

            </div>
            
        </div>


        </div>
    )
}

export default HomeScreen;