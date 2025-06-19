import { useEffect } from "react";
export const About = () => {
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
      threshold: 0.3
    });

    sections.forEach(section => {
      observer.observe(section);
    });
})
return (
<div id="about" className="h-screen flex items-center justify-center animate-jump">
        <div className="glow bg-indigo-800 bg-opacity-80 max-w-xl p-12 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl font-bold mb-4 ">Hi, I'm Anthony Pochapsky</h1>
          <p className="text-indigo-200">I am an aspiring Software Developer who is interested in pursuing a career in web development as either a frontend, backend, or full-stack developer</p>
          <br/>
          <a className="cosmic-button" href="#projects"> view my work</a>
        </div>
</div>

);
}