// import {NavLink} from 'react-router'

const Sidebar = () => {
  return (
    <aside className='max-w-2xs min-h-screen bg-blue-900 flex flex-col text-white p-7'>
        <a>
            Dashboard
        </a>
        <a>
            Cadastrar produto
        </a>
        <a>
            Gerenciar compras
        </a>
    </aside>
  )
}

export default Sidebar