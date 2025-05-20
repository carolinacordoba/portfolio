import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.scss";

const Projects = () => {

  return (
    <>
    <section className="projects-wrapper">
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      image={project.image}
      github={project.github}
      live={project.live}
    />
  ))}
</section>
    </>
  );
};

export default Projects
