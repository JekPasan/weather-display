import "../styles/components/FeaturedData.css";

export function FeaturedData({cityName="Baicoi"}) {
  return (
    <div className="featured-data">
      <h1 className="city"> {cityName} </h1>
    </div>
  );
}
