import Card from "../../components/Card/Card";
import Activity from "../../components/Activity/Activity";
import Performance from "../../components/Performance/Performance";
import Score from "../../components/Score/Score";
import AverageSession from "../../components/AverageSession/AverageSession";


import React from "react";

import {getActivity, getAverageSession, getData, getPerformance} from "../../services/dataFetch";

import fat_icon from "../../img/fat-icon.svg";
import carbs_icon from "../../img/carbs-icon.svg";
import calories_icon from "../../img/calories-icon.svg";
import protein_icon from "../../img/protein-icon.svg";


/**
 * Dashboard Page
 *
 */
class  Dashboard extends React.Component{
       

    constructor(props) {
        super(props);
        this.state = {id : window.location.pathname.substring(1)};
    }

    componentDidMount() {
        getData(this.state.id).then(userData => this.setState({ data: userData }));
        getActivity(this.state.id).then(userActivity => this.setState({ activity: userActivity }));
        getPerformance(this.state.id).then(userperformance => this.setState({ performance: userperformance }));
        getAverageSession(this.state.id).then(userAverage => this.setState({ average: userAverage }));
    }
    
    render() {

        if (!this.state.data || !this.state.average || !this.state.performance || !this.state.activity) { return null }
        const radialData = [{ score: this.state.data.todayScore }];
        const lineData = this.state.average.sessions;
        const barData = this.state.activity.sessions;
        const radarData = this.state.performance;
        
        return (
        <div class="dashboard">
        <h1 class="dashboard__greeting">Bonjour <span>{this.state.data.userInfos.firstName}</span></h1>
        <p class="dashboard__message">Félicitation ! Vous avez explosé vos objectifs hier</p>
        <div class="data">
            <div class="activity">
                <Activity activity={barData} />
            </div>
            <div class="chart__container">
                <div class="line">
                    <AverageSession averageSession={lineData} />
                </div>
                <div class="radar">
                    <Performance performance={radarData} />
                </div>
                <div class="radial">
                    <Score radialData={radialData} />
                </div>                                     
            </div>
                    
            <div class="nutrition">
                <Card image={calories_icon} value={this.state.data.keyData.calorieCount+"kCal"} name="Calories" />
                <Card image={protein_icon} value={this.state.data.keyData.proteinCount+"g"} name="Proteines" />
                <Card image={carbs_icon} value={this.state.data.keyData.carbohydrateCount+"g"} name="Glucides" />
                <Card image={fat_icon} value={this.state.data.keyData.lipidCount+"g"} name="Lipides" />
            </div>
        </div>
    </div>
        )
    }
}


export default Dashboard;