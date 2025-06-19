import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";



import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">

      {/* Background Effects */}
      <StarBackground/>

      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main>
        <About/>
        <Projects/>
      </main>

      {/* Footer */}
      <Footer/>

    </div>
    );
};
