import "./App.css";
import { Header} from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ProductSection } from "./components/ProductSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
