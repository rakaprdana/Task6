import Poster1 from "../assets/poster/1.png";
import Poster2 from "../assets/poster/2.png";
import Poster3 from "../assets/poster/3.png";
import Poster4 from "../assets/poster/4.png";
import Poster5 from "../assets/poster/5.png";
import Poster6 from "../assets/poster/6.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import { useEffect, useState } from "react";

const image = [Poster1, Poster2, Poster3, Poster4, Poster5, Poster6];
interface PosterProps {
  id: number;
  name: string;
  image: string;
}

const GalleryPage = () => {
  const [posters, setPosters] = useState<PosterProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataPoster = async () => {
      try {
        const resp = await fetch("/poster.json");
        if (!resp.ok) {
          throw new Error("Failed fetch data");
        }
        const data: PosterProps[] = await resp.json();
        const PosterImage = data.map((poster, index) => ({
          ...poster,
          image: image[index],
        }));
        setPosters(PosterImage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataPoster();
  });
  return (
    <>
      <Button onClick={() => navigate("/")} label="Home" type="button" />
      <div>
        <h1 className="text-6xl">My Gallery</h1>
        <p>
          Welcome to my gallery, this page created for show you about several
          poster have been created
        </p>
        {posters.map((poster) => (
          <div key={poster.id}>
            <img src={poster.image} alt={poster.name} />
            <h1>{poster.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
