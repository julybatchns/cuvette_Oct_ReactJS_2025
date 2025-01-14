/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const MovieCard = (props) => {
  const {
    movie: { Year, Poster, Title, Type },
  } = props;
  return (
    <>
      <div className="movie">
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://placehold.co/400"}
            alt={Title}
          />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
