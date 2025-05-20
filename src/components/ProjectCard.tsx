type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
  };

const ProjectCard = ({ title, description, image, github, live }: ProjectCardProps) => {
    
        return (
          <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <div className="project-buttons">
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn github">GitHub</a>
              <a href={live} target="_blank" rel="noopener noreferrer" className="btn vercel">Live</a>
            </div>
          </div>
        );
      };

export default ProjectCard;
