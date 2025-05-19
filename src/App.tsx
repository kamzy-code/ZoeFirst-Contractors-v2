import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HomePage from "./pages/home";
import Services from "./pages/services";
import AboutPage from "./pages/about";
import ExpectPage from "./pages/expect";
import GalleryPage from "./pages/gallery";
import ReviewsPage from "./pages/reviews";
import Footer from './pages/footer';


function App() {
  return (
    <div className="App">
     <HomePage/>
     <Services/>
     <AboutPage/>
     <ExpectPage/>
     <GalleryPage/>
     <ReviewsPage/>
     <Footer/>
    </div>
  );
}

export default App;
