import React from 'react'
import Link from 'next/link'

const NavLink = ({href, children}) => {
  return(
    <Link href={href} >
  <a className='p-2 hover:text-red-700 '>{children}</a>
</Link>
  )
}

const NavBar = () => {
  return (
    <div>
      <div className='bg-indigo-500 py-4 text-center'>
        <NavLink href='/sobre'>Sobre</NavLink>
        <NavLink href='/cadastro'>Cadastro</NavLink>
        <NavLink href='/Entrar'>Entrar</NavLink>
      </div>
    </div>
  )
}
export default NavBar
