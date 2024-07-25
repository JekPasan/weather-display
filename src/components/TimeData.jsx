import "../styles/components/TimeData.css";

export function TimeData({date}) {
  return (
    <div className="time-data">
      <h2 className="title">Date & Time</h2>
      <div className="sections">
        <div className="section">
          <h3 className="section-title">Date</h3>
          <p className="date"> {date.day}/{date.month}/{date.year} </p>
        </div>
        <div className="section">
          <h3 className="section-title">Time</h3>
          <p className="time"> {date.hour}:{date.minute} </p>
        </div>
      </div>
    </div>
  );
}
