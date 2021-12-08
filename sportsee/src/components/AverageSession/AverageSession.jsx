import { LineChart, Line, XAxis, Legend, Tooltip, ResponsiveContainer} from "recharts";
import PropTypes from 'prop-types';

function LineTooltip({active, payload}) {
    if (active) {
        return <div style={{ backgroundColor: "#FFFFFF", height: "30px", width: "60px", display: "flex", alignItems: "center",justifyContent: "center"} }><p>{payload[0].value} min</p></div>
    }
    return null
}
function LineLegend(props) {
    return <div><p style={{color: "#FFFFFF", width: "75%", textAlign: "left", marginLeft:"20px", opacity:"0.7"}}>Durée moyenne des sessions</p></div>
}

function AverageSession(props) {
    
    return (
        
                    <LineChart width={258} height={263} data={props.averageSession} >
                        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false}/>
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }}/>
                        <Tooltip content={<LineTooltip />} />
                        <Legend verticalAlign="top" align="left" iconSize={0} content={<LineLegend />}/>
                    </LineChart>
    )
}

LineTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

export default AverageSession;