import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import { MainNavigation } from '~/components'
import tailwindStylesheetLink from '~/styles/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStylesheetLink },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
]

export const meta = () => [
  { name: 'charset', content: 'utf-8' },
  { title: 'New Remix App' },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' }
]

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
