import EcoSwap from "../assets/project/ecoswap.png";
import GithubPage from "../assets/project/githubpage.png";
import MiniLib from "../assets/project/minilib.png";
import Portfolio from "../assets/project/portofolio.png";
import MLP from "../assets/project/mlp.png";
import ObjDetect from "../assets/project/objdetect.png";
import TrafficPred from "../assets/project/trafficpred.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/elements/Button";
import Copyright from "../components/layout/copyright";

interface ProjectProps {
  id: number;
  name: string;
  detail: string;
  image: string;
}

const images: { [key: number]: string } = {
  1: EcoSwap,
  2: GithubPage,
  3: MiniLib,
  4: Portfolio,
  5: MLP,
  6: ObjDetect,
  7: TrafficPred,
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetailProject = async () => {
      try {
        const resp = await fetch("/project.json");
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: ProjectProps[] = await resp.json();
        const projectData = data.find((project) => project.id === parseInt(id));
        if (!projectData) {
          throw new Error("Project not found");
        }

        // Set the correct image path from the imported images
        setProject({
          ...projectData,
          image: images[parseInt(id)] || "default.jpg", // Fallback to default image if none found
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailProject();
  }, [id]);
  const handleNext = () => {
    const currentId = parseInt(id);
    const nextId = currentId < Object.keys(images).length ? currentId + 1 : 1;
    navigate(`/project/${nextId}`);
  };

  const handleBack = () => {
    const currentId = parseInt(id);
    const backId = currentId > 1 ? currentId - 1 : Object.keys(images).length;
    navigate(`/project/${backId}`);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <div className="flex justify-between mx-8">
        <Button label="Back" onClick={handleBack} />
        <Button label="Next" onClick={handleNext} />
      </div>
      <div className="flex flex-col items-center pb-20">
        <h1 className="text-5xl font-bold mb-8">Project Detail</h1>
        <div className="flex items-center py-8 mx-12 space-x-8">
          <img
            src={project.image}
            alt={project.name}
            className="w-2/5 rounded-md border"
          />
          <div className="bg-stone-800 p-8 space-y-4 rounded-xl">
            <h1 className="text-5xl">{project.name}</h1>
            <hr className="border border-white w-1/2" />
            <p>{project.detail}</p>
          </div>
        </div>
        <Button label="Home" onClick={() => navigate("/")} />
      </div>
      <Copyright />
    </>
  );
};

export default ProjectDetail;
