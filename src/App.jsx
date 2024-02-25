import "./App.css";
import { Routes,Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Admin from "./Components/Admin";
import View from "./Components/View";
import Add from './Components/Add';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <div className="App">

      <header>
        <Header />
      </header>

      <section>
        <Routes>
          {/* localhost:3000 */}
          <Route path="/" element={<Admin />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />

          {/*page not found*/}

          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
      </section>

      <footer>
        <Footer />
      </footer>

      
    </div>
  );
}

export default App;
