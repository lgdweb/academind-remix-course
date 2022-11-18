import { NavLink } from '@remix-run/react'
import tw from 'tailwind-styled-components'

const Container = tw.nav`py-8 px-4 flex justify-center`
const Items = tw.ul`list-none m-0 p-0 flex gap-6 justify-center`
const activeLinkClass = ({ isActive }) =>
  `text-2xl font-bold no-underline hover:text-orange-400 ${
    isActive ? 'text-orange-400' : 'text-orange-300'
  }`

const MainNavigation = () => (
  <Container>
    <Items>
      <li>
        <NavLink className={activeLinkClass} to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeLinkClass} to='/notes'>
          My Notes
        </NavLink>
      </li>
    </Items>
  </Container>
)

export default MainNavigation
