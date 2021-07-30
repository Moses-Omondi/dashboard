import "./home.css";

import FeaturedInfo from "../../Components/FeaturedHome/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";
import { userData } from "../../dummyData"

import WidgetSm from "../../Components/widgetSm/widgetSm";
import WidgetLg from "../../Components/widgetLg/widgetLg";

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" name="" dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
