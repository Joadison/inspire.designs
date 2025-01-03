import Carrosel from "@/components/Carrosel";
import Contatos from "@/components/Contatos";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pacotes from "@/components/Pacotes";
import Quemsomos from "@/components/Quemsomos";
import Servicos from "@/components/Servicos";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <>
      <Header/>
      
      {/* <div className="min-h-screen bg-gray-100 p-8">
        <Carrosel/>
      </div> */}

      <section id="pacotes" className="min-h-screen p-8">
        <Pacotes/>
      </section>

      {/* <section id="servicos" className="min-h-screen p-8">
        <Servicos/>
      </section> */}

      <section id="quem-somos" className="min-h-screen p-8">
        <Quemsomos/>
      </section>

      <section id="depoimentos" className="min-h-screen p-8">
        <Depoimentos/>
      </section>

      <section id="contatos" className="min-h-screen p-8">
          <Contatos/>
      </section>

      <BackToTopButton />
      
      <Footer/>
    </>
  );
}
