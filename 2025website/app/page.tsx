import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6 md:py-12">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
