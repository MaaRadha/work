import Project from "../components/work/Project";
import IconsList from "../components/iconsComponent/IconsList";
import ProjectList from "../components/work/ProjectList";
import DatabaseProject from "../components/work/DatabaseProject";
const Projects = () => {
  return (
    <section>
      <Project />
      <ProjectList />
      <IconsList />
      <DatabaseProject />
    </section>
  );
};

export default Projects;
