import Card from "../../components/Card/Card";
import Activity from "../../components/Activity/Activity";
import Performance from "../../components/Performance/Performance";
import Score from "../../components/Score/Score";
import AverageSession from "../../components/AverageSession/AverageSession";

import PropTypes from 'prop-types';
import React, {useState, useEffect} from "react";

import {getActivity, getAverageSession, getData, getPerformance} from "../../services/dataFetch";

import fat_icon from "../../img/fat-icon.svg";
import carbs_icon from "../../img/carbs-icon.svg";
import calories_icon from "../../img/calories-icon.svg";
import protein_icon from "../../img/protein-icon.svg";


class  Dashboard extends React.Component{
       

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        getData().then(userData => this.setState({ data: userData }));
        getActivity().then(userActivity => this.setState({ activity: userActivity }));
        getPerformance().then(userperformance => this.setState({ performance: userperformance }));
        getAverageSession().then(userAverage => this.setState({ average: userAverage }));
        console.log("data:" + this.state.data);
        console.log("perf:" + this.state.performance);
        console.log("avg:" + this.state.average);
        console.log("act:" + this.state.activity);
    }
    
    

    render() {

        if (!this.state.data || !this.state.average || !this.state.performance || !this.state.activity) { return null }
        const radialData = [{ score: this.state.data.todayScore }];
        const lineData = this.state.average.sessions;
        const radarData = this.state.performance.data;
        const uData = this.state.activity.sessions;

        return (
        <div class="dashboard">
        <h1 class="dashboard__greeting">Bonjour {this.state.data.userInfos.firstName}</h1>
        <p class="dashboard__message">Félicitation ! Vous avez explosé vos objectifs hier</p>
        <div class="data">
            <div class="activity">
                <Activity activity={uData} />
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