import React from 'react'

const Entrar = () => {
  return (
  
    
<div>
<h1 className=' mx-auto my-10 text-xl'>INFORMAÇÕES OFICIAIS SOBRE O COVID-19, E SOBRE O AUXÍLIO EMERGENCIAL </h1>
 <div className="md:flex my-10">
  <div className="md:flex-shrink-0">
    <img className="rounded-lg md:w-56" src='/federal.png'/>
  </div>
  <div className="mt-4 md:mt-0 md:ml-6">
    <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Informãoes do governo federal.</div>
    <a href='https:coronavirus.saude.gov.br/sobre-a-doenca#como-se-proteger' className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Click aqui!</a>

  </div>
  </div>
  <div className="md:flex my-10">
  <div className="md:flex-shrink-0">
   <img className="rounded-lg md:w-56" src='/caixa.png'/>
  </div>
  <div className="mt-4 md:mt-0 md:ml-6">
   <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Informãoes sobre o axílio emergencial
   <a href='https://caixa.gov.br/auxilio/Paginas' className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Click aqui!</a>
  </div>
  </div>
 </div>
 </div>


      
      
  )
}

export default Entrar