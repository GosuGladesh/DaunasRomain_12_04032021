import Card from "../../components/Card/Card";
import Activity from "../../components/Activity/Activity";
import Performance from "../../components/Performance/Performance";

import PropTypes from 'prop-types';

import {Legend, PolarAngleAxis, Cell, RadialBarChart, RadialBar } from "recharts";

import fat_icon from "../../img/fat-icon.svg";
import carbs_icon from "../../img/carbs-icon.svg";
import calories_icon from "../../img/calories-icon.svg";
import protein_icon from "../../img/protein-icon.svg";
import AverageSession from "../../components/AverageSession/AverageSession";


function Dashboard(props) {
    const radialData = [{"score": 0.3}];
    const lineData = [{ "day": 1, "sessionLength": 30 }, { "day": 2, "sessionLength": 40 }, { "day": 3, "sessionLength": 50 }, { "day": 4, "sessionLength": 30 }, { "day": 5, "sessionLength": 30 }, { "day": 6, "sessionLength": 50 }, { "day": 7, "sessionLength": 50 }];
    const radarData = [{ "value": 200, "kind": 1 }, { "value": 240, "kind": 2 }, { "value": 80, "kind": 3 }, { "value": 80, "kind": 4 }, { "value": 220, "kind": 5 }, { "value": 110, "kind": 6 }];
    const uData = [{ "day": "2020-07-01", "kilogram": 70, "calories": 240 }, { "day": "2020-07-02", "kilogram": 69, "calories": 220 }, { "day": "2020-07-03", "kilogram": 70, "calories": 280 }, { "day": "2020-07-04", "kilogram": 70, "calories": 500 }, { "day": "2020-07-05", "kilogram": 69, "calories": 160 }, { "day": "2020-07-06", "kilogram": 69, "calories": 162 }, { "day": "2020-07-07", "kilogram": 69, "calories": 390 }];
    return(  <div class="dashboard">
                <h1>Bonjour {props.name}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
                <div class="data">
                        <div class="activity">
                            <Activity activity={uData}/>
                        </div>
                <div class="chart__container">
                    <div class="line">
                        <AverageSession averageSession={lineData} />                                        
                    </div>
                            <div class="radar">                    
                                <Performance performance={radarData} />
                            </div>
                            <div class="radial">
                                <RadialBarChart width={258} height={263} innerRadius="70%" outerRadius="80%" data={radialData} startAngle={-180} endAngle={-360}>
                                    <PolarAngleAxis type="number"  domain={[0, 1]} angleAxisId={0} tick={false} />
                                    <RadialBar dataKey='score' clockWise={true}>
                                        <Cell fill="#FF0000"/>
                                    </RadialBar>
                                    <Legend />
                                    <Legend />
                                </RadialBarChart>                                                    
                            </div>
                                                   
                            </div>
                    
                        <div class="nutrition">
                            <Card image={calories_icon} value="1930kCal" name="Calories"/>
                            <Card image={protein_icon} value="155g" name="Proteines"/>
                            <Card image={carbs_icon} value="290g" name="Glucides"/>
                            <Card image={fat_icon} value="50g" name="Lipides"/>
                    </div>
                </div>
    </div>
    )
}

Dashboard.propTypes = {
    name: PropTypes.string
}

export default Dashboard;