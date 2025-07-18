
import { RevealOnScroll } from "../RevealOnScroll"; 


export const About = () => {
  const frontendSkills = ["html", "css", "javascript", "react", "tailwindcss"];
  const backendSkills = ["Java", "C#", "JavaScript", "SQL"];

  return (

    
    <section id="about" className="min-h-screen flex items-center justify-center py-20">

      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <br/>

        <div className="rounded-xl p-8 border-1 hover:-translate-y-1 transition-all">
          <p className="font-default text-gray-300 mb-6 font-light">
            I’m a final-year Informatics student with a strong interest in QA Automation, software testing, and the application of mathematics in computing — especially in AI and problem-solving.
            </p>
            <br /> <br />
             <p className="font-default text-gray-300 mb-2 font-light">
            So far, I’ve built academic projects using:
          </p>
            
          <div className="flex justify-start">
  <ul className="text-left font-default text-gray-300 mb-6 font-light list-disc pl-6">
    <li>🔹 Java, C++, Python</li>
    <li>🔹 HTML, CSS, JavaScript</li>
    <li>🔹 SQL and database integration (with C++/.NET)</li>
    <li>🔹 Basic automation testing using Selenium</li>
  </ul>
  </div>
              <br /> <br />
            <p className="font-default text-gray-300 mb-6 font-light">
              I’m currently building my GitHub portfolio and strengthening my practical skills in testing, automation, and programming. I enjoy learning how systems work and improving their quality through logic and structured testing.
            </p>

           




<br />
          {/* Skills Section */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 ">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-1 py-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px-8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div> 

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-1 py-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px-8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
                
              </div>
           
            </div>
            
            
          </div>
          
          </div>

          
</div>
      </RevealOnScroll>
    </section>

    
  );
};
