import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import { MainNavigation } from '~/components'

import tailwind from './tailwind.css'

export const links = () => [{ rel: 'stylesheet', href: tailwind }]

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

const App = () => (
  <html lang='en' className='bg-zinc-900 text-zinc-50'>
    <head>
      <Meta />
      <Links />
    </head>
    <body className='min-h-screen bg-gradient-to-tr from-indigo-700/90 via-violet-700/80 to-purple-600'>
      <header>
        <MainNavigation />
      </header>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV !== 'production' && <LiveReload />}
    </body>
  </html>
)

export default App
