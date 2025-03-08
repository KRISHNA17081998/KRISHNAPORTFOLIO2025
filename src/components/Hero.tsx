import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, MessageCircle, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 pt-16">
      <div className="text-center">


        <p className="text-xl mb-2 text-white">
  Hello, It's me
</p>
     
     
<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
RAKATLA KRISHNA</h1>

        <div className="h-16 mb-8">
          <TypeAnimation
            sequence={[
              'Web Designer',
              2000,
              'Web Developer',
              2000,
            ]}
            wrapper="div"
            speed={50}
            className="text-3xl md:text-4xl text-blue-500 font-bold"
            repeat={Infinity}
          />
        </div>
  
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity mb-8">
  <div className="flex items-center gap-2">
    <a 
      href="/Pictures/RESUME.pdf"  // Path to the resume
      download  // This makes the browser download the file
      className="flex items-center gap-2">
      <Download size={20} />
      Download Resume
    </a>
  </div>
</button>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white hover:opacity-90 transition-opacity">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white hover:opacity-90 transition-opacity">
            <Linkedin size={24} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
             className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white hover:opacity-90 transition-opacity">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;