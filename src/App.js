import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { default as HornedBeast } from "./components/HornedBeast";
import Main from "./components/ImageCard";
function App() {
  return (
    <div className='App'>
      <Header />
      <Footer />
      <Main />

      <HornedBeast />
    </div>
  );
}

export default App;
