import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Legend, Tooltip} from "recharts";


function Activity(props) {
    
    return (
                            <BarChart width={730} height={250} data={props.activity}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                <XAxis dataKey="name"/>
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" align="right" iconType="circle"/>
                                <Bar dataKey="kilogram" fill="#E60000" barSize={10}/>
                                <Bar dataKey="calories" fill="#282D30" barSize={10}/>
                            </BarChart>
    )
}


export default Activity;