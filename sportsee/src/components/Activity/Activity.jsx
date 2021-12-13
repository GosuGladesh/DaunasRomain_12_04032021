import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip } from "recharts";
import PropTypes from 'prop-types';


function ActivityTooltip({active, payload}) {
    
    if (active) {
        return <div style={{ backgroundColor: "#FF0000", height: "60px", width: "80px", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
            <p>{payload[0].value} kg</p>
            <p>{payload[1].value} kcal</p>
        </div>
    }
    return null
}

function Activity(props) {
    
    return (
                            <BarChart width={730} height={250} data={props.activity}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                <XAxis dataKey="name"/>
                                <YAxis orientation="right"/>
                                <Tooltip content={<ActivityTooltip />}/>
                                <Legend verticalAlign="top" align="right" iconType="circle" />
                                <Bar dataKey="kilogram" fill="#E60000" barSize={10}/>
                                <Bar dataKey="calories" fill="#282D30" barSize={10}/>
                            </BarChart>
    )
}

Activity.propTypes = {
    activity: PropTypes.array
}
export default Activity;