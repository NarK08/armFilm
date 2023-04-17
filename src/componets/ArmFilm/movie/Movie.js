function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
    Plot:plot
    
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x400?text=${title}`}
          alt="title" />
        ) : (
          <img className="activator" src={poster} alt = "poster"/>
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <h5>{title}</h5>
        </span>
       
          <h6 className="year">{year}<span className="right">{type}</span></h6> 
          <p>{plot}</p>
      
      </div>
    </div>
  );
}
export { Movie };
