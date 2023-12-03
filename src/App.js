import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";

import Onas from './views/Onas';
import Blog from './views/Blog';
import Klasa from './views/Klasa';
import PodBlog from './views/PodBlog';
import PodKlasa from './views/PodKlasa';
import PodOnas from './views/PodOnas';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<h1>Pusta strona</h1>} />
          <Route path="/o_nas" element={<Onas />}>
            <Route path="/o_nas/pod_o_nas" element={<PodOnas />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/pod_blog" element={<PodBlog />} />
          <Route path="/klasa" element={<Klasa />}>
            <Route path="pod_klasa" element={<PodKlasa />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
