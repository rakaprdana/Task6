import Photo from "../../../assets/me2-nobg.png";
const ImageCard = () => {
  return (
    <>
      <div className="border border-gray-600 bg-zinc-800 flex flex-col items-center py-16 text-center rounded-md hover:shadow-stone-700 shadow-md duration-700">
        <img src={Photo} alt="" className="bg-stone-700 w-56 rounded-full" />
        <div className="bg-stone-800 mt-8 px-16 py-4">
          <h1>Raka Pradana</h1>
          <p>Fullstack software developer</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
