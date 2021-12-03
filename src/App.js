import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  default as HornedBeast,
  default as HornedGallery,
} from "./components/HornedBeast";
import Main from "./components/ImageCard";
function App() {
  return (
    <div className='App'>
      <Header />
      <Footer />
      <Main />
      <HornedGallery />
      <HornedBeast />
    </div>
  );
}

export default App;
