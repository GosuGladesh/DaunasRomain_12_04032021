import { RadarChart, Radar ,PolarGrid, PolarAngleAxis, ResponsiveContainer} from "recharts";

import PropTypes from 'prop-types';


/**
 * Performance Chart component
 *
 * @param {object} props 
 * @returns {node} recharts radar chart
 */
function Performance(props) {
    
    props.performance.forEach((item) => {            
                switch (item.kind) {                
                    case  1:
                        item.kind = "cardio";
                        break;
                    case 2:
                        item.kind = "energie";
                        break;
                    case  3:
                        item.kind = "endurance";
                        break;
                    case  4:
                        item.kind = "Force";
                        break;
                    case  5:
                        item.kind = "Vitesse";
                        break;
                    case  6:
                        item.kind = "Intensité";
                        break;
                    default:
                }
            })
    return (
        <ResponsiveContainer>
            <RadarChart outerRadius={60} data={props.performance}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tickLine={false} tick={{ fill: "#FFFFFF", fontSize: 12 }} />
                <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>  
        </ResponsiveContainer>
                  
    )
}

Performance.propTypes = {
    performance: PropTypes.array
}
export default Performance;