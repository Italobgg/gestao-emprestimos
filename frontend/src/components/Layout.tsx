import { NavLink, Outlet } from 'react-router'

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/emprestimos', label: 'Empréstimos' },
  { to: '/clientes', label: 'Clientes' },
]

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-56 bg-gray-900 p-4 text-white">
        <h1 className="mb-6 text-xl font-bold">MyInvest</h1>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `rounded px-3 py-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-800'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}