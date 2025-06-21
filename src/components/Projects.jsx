import { Github, ArrowDown } from 'lucide-react';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const projects = [
  {
    id: 1,
    title: "Online Shopping Portal (Simulation)",
    description: "Provides many common features expected in a shopping portal that is mostly built in SPA.",
    extendedDescription: "Incorporated the MVC design pattern using AngularJS where I relied on client sided html, css, javascript for implementing the view portion, and server sided php for implementing the controller classes that would pull data from the DB using embedded mysql.",
    image: "/projects/OSP.png",
    tags: ["HTML", "CSS", "JavaScript", "AngularJS", "PHP", "MySQL"],
    githubUrl: "https://github.com/AmanShoker/SPA-OSP"
  },
  {
    id: 2,
    title: "Toronto Vehicle Collision Visualization",
    description: "Webpage providing info about harmless, injury present, and fatal collisions.",
    extendedDescription: "Deployed statically on AWS using S3 to outsource the work of handling http requests. Used Python pandas library for the initial data processing task of the downloaded datasets which then got passed into my javascript app for visualizing processed data.",
    image: "/projects/CollisionProject.PNG",
    tags: ["HTML-Google Maps API", "JavaScript", "Python-pandas", "Flask", "EC2", "Nginx", "S3"],
    githubUrl: "https://github.com/AnthonyPochapsky/VehicleCollisionDataVisualization"
  },
  {
    id: 3,
    title: "AlarmClock App",
    description: "Allows for tracking time and setting multiple alarms.",
    extendedDescription: "Built entirely using visual basic to design a well functioning frontend that incorporates many good UX principles such as colour contrast, and no loop navigation among others that mix together menu form and direct manipulation paradigms. Allows the means for tracking the time, setting the time, and setting one or more alarms.",
    image: "/projects/AlarmClockProject.PNG",
    tags: ["Visual Basic", ".NET"],
    githubUrl: "https://github.com/AnthonyPochapsky/AlarmClock"
  },
  {
    id: 4,
    title: "OurMeals (Smartfridge like app)",
    description: "Frontend functionality of navigating a tablet like smart fridge app.",
    extendedDescription: "Built entirely using visual basic to design a well functioning frontend that incorporates many good UX principles such as colour contrast, and no loop navigation among others that mix together menu form and direct manipulation paradigms. Allows the means of managing fridge inventory, creating different types of shopping lists (Recipe, Routine, Plain), and shopping with any such list to efficiently sync up fridge inventory with newly purchased items from a fixed domain.",
    image: "/projects/OurMeals.PNG",
    tags: ["Visual Basic", ".NET"],
    githubUrl: "https://github.com/AnthonyPochapsky/OurMeals"
  }
];


const ZoomedProject = ({ project, onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card text-secondary-foreground rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-border transition-all duration-300">

        <div className="h-64 w-full overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {project.extendedDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className= "flex justify-between items-center">
                <div className="flex space-x-3">
                  <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github/>
                  </a>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

const ProjectBlock = ({project, onZoom}) => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div onClick={onZoom} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover animate-jump">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>
              <h2 className="px-2 py-1 font-bold mb-2">{project.title}</h2>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </span>
                </div>
              </div>
              <div className="flex flex-wrap transition duration-500 ease-in-out gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className= "flex justify-between items-center">
                <div className="flex space-x-3">
                  <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github/>
                  </a>
                </div>
              </div>
            </div>
  );
}
export const Projects = () => {
  const [zoomedProject, setZoomedProject] = useState(null);
useEffect(() => {
  const sections = document.querySelectorAll('.animate-jump');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.3});
}, []);

return (
  <section id="projects" className="py-24 px-4 relative"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-jump">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto animate-jump">
          Here are a mix of academic and personal projects that I have worked over my tenure
          as a fulltime TMU student.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} onZoom={() => setZoomedProject(project)}/>
          ))}
        </div>
        {zoomedProject && (
        <ZoomedProject project={zoomedProject} onClose={() => setZoomedProject(null)} />
      )}
      </div>
  </section>
);
}