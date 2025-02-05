import React from "react";
import Image from "next/image";

function Quemsomos() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-7xl font-greatVibes text-center text-gray-900 mb-16">
        Quem Somos
      </h1>

      {/* <div className="text-center mb-8">
        <span className="text-lg font-medium text-gray-700">"Como é bom e agradável quando os irmãos vivem em união!"</span>
        <br />
        <span className="text-sm text-gray-500">Salmos 133:1</span>
      </div>*/}

      <div className="flex flex-col md:flex-row justify-center mb-12 gap-14">
        <div className="w-[30rem] -rotate-2 overflow-hidden rounded-md border-2 shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-110 mb-8 sm:mb-0">
          <Image
            src={"/joadison.png"}
            alt="Joadison"
            className="object-cover"
            width={600}
            height={600}
            layout="intrinsic"
          />
        </div>

        <div className="w-[30rem] rotate-3 overflow-hidden rounded-md border-2 shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-110">
          <Image
            src={"/victoria.png"}
            alt="Victoria"
            className="object-cover"
            width={600}
            height={600}
            layout="intrinsic"
          />
        </div>
      </div>

      <div className="text-center">
        <span className="text-3xl text-gray-900 font-arsenica">
          {" "}
          &quot;Em tudo o que fizermos, fazemos por amor e com propósito.&quot;{" "}
        </span>
      </div>
    </div>
  );
}

export default Quemsomos;
