import "../styles/components/MainData.css";

export function MainData({temperature, appTemperature}) {
  return (
    <div className="main-data">
      <h1 className="title">Temperature Data</h1>
      <div className="data">
        <h2 className="temperature">Temperature: {temperature}°C</h2>
        <h3 className="apparent_temperature">Apparent Temperature: {appTemperature}°C</h3>
      </div>
    </div>
  );
}
