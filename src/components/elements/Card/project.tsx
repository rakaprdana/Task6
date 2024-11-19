import EcoSwap from "../../../assets/project/ecoswap.png";
import GithubPage from "../../../assets/project/githubpage.png";
import MiniLib from "../../../assets/project/minilib.png";
import Portfolio from "../../../assets/project/portofolio.png";
import MLP from "../../../assets/project/mlp.png";
import ObjDetect from "../../../assets/project/objdetect.png";
import TrafficPred from "../../../assets/project/trafficpred.png";
import { useEffect, useState } from "react";

const image = [
  EcoSwap,
  GithubPage,
  MiniLib,
  Portfolio,
  MLP,
  ObjDetect,
  TrafficPred,
];
interface ProjectProps {
  id: number;
  name: string;
  desc: string;
  image: string;
}
const CardProject = () => {
  const [project, setProject] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("project.json");
        if (!resp.ok) {
          throw new Error("Failed fetch data");
        }
        const data: ProjectProps[] = await resp.json();
        const ProjectImage = data.map((project, index) => ({
          ...project,
          image: image[index],
        }));
        setProject(ProjectImage);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <div className="flex gap-4 overflow-x-auto w-11/12 px-8 my-16 hide-scrollbar">
        {project.map((project) => (
          <div
            key={project.id}
            className="min-w-[300px] max-w-sm bg-white rounded-lg shadow dark:bg-zinc-800 hover:bg-zinc-700 duration-700"
          >
            <a href="">
              <img
                className="rounded-t-lg"
                src={project.image}
                alt={project.name}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardProject;