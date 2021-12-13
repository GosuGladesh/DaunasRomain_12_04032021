import { RadarChart, Radar ,PolarGrid, PolarAngleAxis} from "recharts";

import PropTypes from 'prop-types';

function Performance(props) {
    
    return (
             <RadarChart outerRadius={90} width={258} height={263} data={props.performance}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="kind" tickLine={false} tick={{ fill: "#FFFFFF" }}/>
                                    <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
                                </RadarChart>       
    )
}

Performance.propTypes = {
    performance: PropTypes.array
}
export default Performance;