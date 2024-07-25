import "../styles/components/Forecast.css";
import { ForecastItem } from "./ForecastItem";

export function Forecast({hourlyData}) {
  return (
    <div className={`forecast`}>
      <h1 className="title">Hourly Forecast</h1>
      <div className="forecast-list">

      {hourlyData?.map((item) => (
          <ForecastItem item={item} />
          ))}

      </div>
    </div>
  );
}
