import { NavLink } from '@remix-run/react'
import * as React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <nav className='flex justify-center px-4 py-8'>{children}</nav>
}

const Items = ({ children }: { children: React.ReactNode }) => {
  return <ul className='m-0 flex list-none justify-center gap-6 p-0'>{children}</ul>
}

const MainNavigation = () => (
  <Container>
    <Items>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-2xl font-bold no-underline hover:text-orange-400 ${
              isActive ? 'text-orange-400' : 'text-orange-300'
            }`
          }
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-2xl font-bold no-underline hover:text-orange-400 ${
              isActive ? 'text-orange-400' : 'text-orange-300'
            }`
          }
          to='/notes'
        >
          My Notes
        </NavLink>
      </li>
    </Items>
  </Container>
)

export default MainNavigation
