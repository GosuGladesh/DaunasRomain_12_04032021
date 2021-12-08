import { RadialBarChart, PolarAngleAxis, RadialBar, Legend, Tooltip, Cell} from "recharts";
import PropTypes from 'prop-types';

function ScoreTitle({props}) {
    return (
        <div><p>Score</p></div>
    )
}


function Score(props) {
    
    return (<>
                 <RadialBarChart width={258} height={263} innerRadius="70%" outerRadius="80%" data={props.radialData} startAngle={-180} endAngle={-720}>
                                    <PolarAngleAxis type="number"  domain={[0, 1]} angleAxisId={0} tick={false} />
                                    <RadialBar dataKey='score' clockWise={true} background="#000000" >
                                        <Cell fill="#FF0000"/>
                                    </RadialBar>
                                    <Legend verticalAlign="top" align="left"  content={<ScoreTitle />}/>
                </RadialBarChart>   
                <div class="score">
                    <p class="score__text"><b>{props.radialData[0].score * 100 }%</b> de votre objectif</p>
                </div>
        </>
    )
}



export default Score;