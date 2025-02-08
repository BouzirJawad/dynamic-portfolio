import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"


function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow mt-25">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
