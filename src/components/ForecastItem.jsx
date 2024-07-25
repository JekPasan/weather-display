import "../styles/components/ForecastItem.css"

export function ForecastItem({item}) {
    return (
        <div class="forecast-item">
            {item.time.hour}:{item.time.minute} 
            <br />
            {item.weatherCode?.description} <br />
            <img src={item.weatherCode?.image} alt="" srcset="" />
        </div>
    );
}