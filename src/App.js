import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';



function App() {
  return (
    <div className='bg-zinc-800 h-screen w-screen overflow-auto scroll-smooth' >
      
      <Header></Header>
      <Hero>
        
      </Hero>

      <About></About>

      <Experience>

      </Experience>
      <Projects>
        
      </Projects>

    </div>
  );
}

export default App;
