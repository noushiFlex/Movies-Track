function Card(props) {
  const { title, rating, description, popularity, bgPathLink, poster } = props;
  const bgPath = `https://image.tmdb.org/t/p/w500${bgPathLink}`;
  const posterPath = `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <div className="border rounded-lg h-[300px] w-full relative flex-col overflow-scroll pb-10 shadow-lg">
      {/* Background Image */}
      <div className="overflow-hidden h-2/5">
        <img
          src={bgPath}
          alt={`${title} background`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Poster Image */}
      <div className="h-32 w-24 z-10 border border-black absolute top-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg overflow-hidden">
        <img
          src={posterPath}
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-28 flex flex-col px-4">
        <label className="w-full text-center text-gray-700">{rating}/10</label>
        <label className="font-semibold w-full text-center break-words text-xl">
          {title}
        </label>
        <hr className="m-auto w-8/12 border-gray-300" />
        <div className="flex flex-col mt-4 gap-4 text-gray-700">
          <div>
            <label className="font-semibold">Description</label>
            <p className="text-sm break-words">{description}</p>
          </div>
          <div>
            <label className="font-semibold">Popularity</label>
            <p className="text-sm">{popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
