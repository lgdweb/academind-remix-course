import { Link as LinkComponent } from '@remix-run/react'
import tw from 'tailwind-styled-components'

const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  bg-indigo-600
`

const Title = tw.h1`text-5xl font-bold text-rose-400`
const Link = tw(LinkComponent)`text-blue-300 underline`

const IndexPage = () => (
  <Container>
    <Title>Hello Remix!!!</Title>
    <Link to={'/demo'}>Go to Demo Page</Link>
  </Container>
)

export default IndexPage
