import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "../../components/featuredInfo/featuredInfo.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetLg />
      </div>
    </div>
  );
}
