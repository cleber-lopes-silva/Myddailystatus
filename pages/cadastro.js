import React from 'react'

const Cadastro = () => {
  return (
    <div className='min-h-screen container mx-auto'>
        <h1 className=' mx-auto my-10 text-xl'>Mapa do coronavírus (COVID-19)</h1>
    <div className="md:flex">
    <div className="md:flex-shrink-0">
     <img className="rounded-lg md:w-56" src='/capa_mapa_corona.png'/>
    </div>
    <div className="mt-4 md:mt-0 md:ml-6">
     <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Mapa
     <a href='https://google.com/covid19-map' className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Click aqui !</a>
     <p className="mt-2 text-gray-600">As estatísticas mudam rapidamente
Os dados mudam rapidamente e podem não mostrar alguns dos casos que ainda não foram informados..</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cadastro
