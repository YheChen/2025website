import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Yanzhen Chen | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-background text-base md:text-lg">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-6 md:py-12">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Experience />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
