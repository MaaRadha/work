import { data } from "../../helper/projectsList";
const ProjectList = () => {
  return (
    <div>
      <div></div>
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {data.map((project) => {
            return (
              <div className="bg-gray-600 p-3" key={project.id}>
                <img src={project.imgUrl} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
