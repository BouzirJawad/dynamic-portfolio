import Header from "./Components/Header"
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import Footer from "./Components/Footer"


function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow mt-35">
        <Home />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
