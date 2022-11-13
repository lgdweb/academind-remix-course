import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwind from './tailwind.css'

export const links = () => [{ rel: 'stylesheet', href: tailwind }]

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  return (
    <html lang='en' className='bg-zinc-900 text-zinc-50'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV !== 'production' && <LiveReload />}
      </body>
    </html>
  )
}
