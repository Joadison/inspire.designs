import Contatos from "@/components/Contatos";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pacotes from "@/components/Pacotes";
import Quemsomos from "@/components/Quemsomos";
import BackToTopButton from "@/components/BackToTopButton";
import HeroSection from "@/components/HeroSection";
//import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <>
      <Header />

      <section className="">
        <HeroSection />
      </section>

      <section id="pacotes" className="min-h-screen pt-[7rem] px-3">
        <Pacotes />
      </section>

      {/* <section id="servicos" className="min-h-screen  p-[7rem]">
        <Servicos/>
      </section> */}

      <section id="quem-somos" className="min-h-screen pt-[7rem] px-3">
        <Quemsomos />
      </section>

      <section id="depoimentos" className="px-3">
        <Depoimentos />
      </section>

      <section id="contatos" className="min-h-screen pt-[7rem]">
        <Contatos />
      </section>

      <BackToTopButton />

      <Footer />
    </>
  );
}
