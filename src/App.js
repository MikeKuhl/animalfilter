import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HornedGallery from "./components/HornedBeast";
import Main from "./components/Main";
function App() {
  return (
    <div className='App'>
      <Header />
      <Footer />
      <Main />
      <HornedGallery />
    </div>
  );
}

export default App;
