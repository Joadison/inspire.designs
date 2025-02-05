import Contatos from "@/components/Contatos";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pacotes from "@/components/Pacotes";
import Quemsomos from "@/components/Quemsomos";
import BackToTopButton from "@/components/BackToTopButton";
/* import HeroSection from "@/components/HeroSection"; */

export default function Home() {
  return (
    <>
      <Header />

      {/* <section className="relative min-h-[80vh]">
        <HeroSection />
      </section> */}

      <section id="pacotes" className="min-h-screen p-[7rem]">
        <Pacotes />
      </section>

      {/* <section id="servicos" className="min-h-screen  p-[7rem]">
        <Servicos/>
      </section> */}

      <section id="quem-somos" className="min-h-screen  p-[7rem]">
        <Quemsomos />
      </section>

      <section id="depoimentos" className="min-h-screen  p-[7rem]">
        <Depoimentos />
      </section>

      <section id="contatos" className="min-h-screen  p-[7rem]">
        <Contatos />
      </section>

      <BackToTopButton />

      <Footer />
    </>
  );
}
