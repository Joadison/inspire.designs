import React from 'react'
import Image from 'next/image'

function Quemsomos() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-7xl font-greatVibes text-center text-gray-900 mb-16">Quem Somos</h1>

      {/* <div className="text-center mb-8">
        <span className="text-lg font-medium text-gray-700">"Como é bom e agradável quando os irmãos vivem em união!"</span>
        <br />
        <span className="text-sm text-gray-500">Salmos 133:1</span>
      </div>*/}

      <div className="flex flex-col md:flex-row justify-center mb-12 gap-14">
        <div className="w-[35rem] -rotate-2 overflow-hidden rounded-md border-2 shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-110 mb-8 sm:mb-0">
          <Image
            src="https://instagram.ffor14-1.fna.fbcdn.net/v/t51.29350-15/452353610_343737225448495_5515210862496269825_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2xlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.ffor14-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2AHRLwLg5eeuv3Uhedi3tRxdwSYW4D4yBoohzNJlGpM4p2kKgrHQpPN-XAgERSgJhoY&_nc_ohc=C66EDMiwLKsQ7kNvgGauDG6&_nc_gid=ddc53ba22d0e4b4991ccca712410fc9f&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQxOTMxODkxNTA1NzQyMDAwOA%3D%3D.3-ccb7-5&oh=00_AYCP--PurHnWTQakAORUfJjkkqjk7ZB6JIkQyfq4iTCWcw&oe=677DBA19&_nc_sid=7a9f4b"
            alt="Joadison"
            className="object-cover"
            width={600}
            height={600}
            layout="intrinsic"
          />
        </div>

        <div className="w-[35rem] rotate-3 overflow-hidden rounded-md border-2 shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-110">
          <Image 
            src="https://instagram.ffor14-1.fna.fbcdn.net/v/t51.29350-15/449789738_511957811292260_1197974357882630805_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2xlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.ffor14-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AHRLwLg5eeuv3Uhedi3tRxdwSYW4D4yBoohzNJlGpM4p2kKgrHQpPN-XAgERSgJhoY&_nc_ohc=XD4yGvEDWZYQ7kNvgEhFEmb&_nc_gid=ddc53ba22d0e4b4991ccca712410fc9f&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQxOTMyMDY5MzkyODgwOTg3Mw%3D%3D.3-ccb7-5&oh=00_AYC-9x1SSaQtd0FkZHLvvvYqnr2K3dxvSXiZxHn5pI2p5Q&oe=677D9ED5&_nc_sid=7a9f4b"
            alt="Victoria"
            className="object-cover"
            width={600}
            height={600}
            layout="intrinsic"
          />
        </div>
      </div>

      <div className="text-center">
        <span className="text-3xl text-gray-900 font-arsenica"> "Em tudo o que fizermos, fazemos por amor e com propósito." </span>
      </div>
    </div>
  )
}

export default Quemsomos
