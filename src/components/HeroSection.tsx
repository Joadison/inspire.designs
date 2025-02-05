export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center h-full">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center text-black max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforme seu negócio com nossos serviços profissionais
        </h1>
        <p className="text-xl mb-8">
          Soluções personalizadas que impulsionam seus resultados
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all">
          Agendar Consultoria
        </button>
      </div>
    </div>
  );
}
