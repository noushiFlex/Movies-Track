
function Card(props) {
  const obj = props
  const bg_path = `https://image.tmdb.org/t/p/w500${obj.bgPathLink}`
  const poster_path = `https://image.tmdb.org/t/p/w500${obj.poster}`

  return (
    <div className="border rounded-lg h-[300px] w-full relative flex-col overflow-scroll">
      <div className="overflow-hidden h-2/5 rounded-b-xl "><img src={bg_path} alt="Image description" className="w-full h-full object-cover"></img></div>
      <div className="overflow-hidden h-32 z-10 w-10/12 border border-black absolute  top-16 rounded-lg shadow-lg left-0 right-0 mx-auto "><img src={poster_path} alt="Image description" className="w-full h-full object-cover"></img></div>
      <div className="mt-24 flex flex-col mb-[-5px] px-1">
        <label className=" w-full text-center">{obj.rating}/10</label>
        <label className="font-semibold w-full text-center break-all text-xl">{obj.title}</label>
        <hr className="m-auto w-8/12" />
        <div className="flex flex-col mt-6 gap-4">
          <div className="flex flex-col justify-start">
            <label className="font-semibold">Description</label>
            <label className="break-all">{obj.description}</label>
          </div>
          <div className="flex flex-col justify-start">
            <label className="font-semibold">popularity</label>
            <label className="break-all">{obj.popularity}</label>
          </div>
          <div className="flex flex-col justify-start">
            <label className="font-semibold">genre</label>
            <label className="break-all">comique,drame,aventure</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card