import { Github, ArrowDown } from 'lucide-react';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const projects = [
  {
    id: 1,
    title: "Online Shopping Portal (Simulation)",
    description: "Provides many common features expected in a shopping portal that is mostly built in SPA",
    image: "/projects/OSP.png",
    tags: ["HTML", "CSS", "JavaScript", "AngularJS", "PHP", "MySQL"],
    githubUrl: "https://github.com/AmanShoker/SPA-OSP"
  },
  {
    id: 2,
    title: "Toronto Vehicle Collision Visualization",
    description: "Webpage providing info about harmless, injury present, and fatal collisions",
    image: "/projects/CollisionProject.PNG",
    tags: ["HTML-Google Maps API", "JavaScript", "Python-pandas", "Flask", "EC2", "Nginx", "S3"],
    githubUrl: "https://github.com/AnthonyPochapsky/VehicleCollisionDataVisualization"
  },
  {
    id: 3,
    title: "AlarmClock App",
    description: "Allows for tracking time and setting multiple alarms",
    image: "/projects/AlarmClockProject.PNG",
    tags: ["Visual Basic", ".NET"],
    githubUrl: "https://github.com/AnthonyPochapsky/AlarmClock"
  },
  {
    id: 4,
    title: "OurMeals (Smartfridge like app)",
    description: "Frontend functionality of navigating a tablet like smart fridge app",
    image: "/projects/OurMeals.PNG",
    tags: ["Visual Basic", ".NET"],
    githubUrl: "https://github.com/AnthonyPochapsky/OurMeals"
  }
];
const ProjectBlock = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const project = props.project;
  return(
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover animate-jump">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>
              <h2 className="px-2 py-1 text-xs font-medium bg-secondary text-secondary">{project.title}</h2>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary">
                        {project.description}
                      </span>
                </div>
              </div>
              <button className="flex flex-wrap gap-2 mb-4 hover:text-primary transition-colors duration-300" onClick={( () => setIsOpen(!isOpen))}>
                  Technologies <ArrowDown />
              </button>
              <div className={cn("transition duration-500 ease-in-out gap-2 mb-4",
                isOpen ? "flex flex-wrap" : "hidden"
                )}>
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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
            <ProjectBlock key={project.id} project={project}/>
          ))}
        </div>
      </div>
  </section>
);
}