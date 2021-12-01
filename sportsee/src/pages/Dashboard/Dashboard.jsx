import Card from "../../components/Card/Card";
import PropTypes from 'prop-types';

import fat_icon from "../../img/fat-icon.svg";
import carbs_icon from "../../img/carbs-icon.svg";
import calories_icon from "../../img/calories-icon.svg";
import protein_icon from "../../img/protein-icon.svg";

function Dashboard(props) {
    return  <div class="dashboard">
                <h1>Bonjour {props.name}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
                <div class="data">
                        <div class="activity"></div>
                        <div class="chart__container">
                            <div class="chart"></div>
                            <div class="chart"></div>
                            <div class="chart"></div>
                        </div>
                    
                        <div class="nutrition">
                            <Card image={calories_icon} value="1930kCal" name="Calories"/>
                            <Card image={protein_icon} value="155g" name="Proteines"/>
                            <Card image={carbs_icon} value="290g" name="Glucides"/>
                            <Card image={fat_icon} value="50g" name="Lipides"/>
                    </div>
                </div>
            </div>
}

Dashboard.propTypes = {
    name: PropTypes.string
}
export default Dashboard;