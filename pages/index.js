import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import styled from '@emotion/styled'

import About from '@/components/sections/about'
import Hero from '@/components/sections/hero'
import Procedures from '@/components/sections/procedures'
import Recommendations from '@/components/sections/recommendations'
import Team from '@/components/sections/team'
import Contact from '@/components/sections/contact'

export async function getStaticProps() {
  const { data } = await getAPI({
    hero: 'hero',
    about: 'about',
    treatment: 'treatment',
    recommendation: 'recommendation',
    team: 'team',
  })

  return {
    props: {
      data,
    },
  }
}

const Home = ({ data }) => {
  const { hero, about, treatment, recommendation, team } = data

  if (!data) return <></>

  return (
    <Layout isHeaderHero metadata={{ title: 'Homepage' }}>
      <HomeWrapper>
        <Hero data={hero} />

        <About data={about} />

        <Procedures data={treatment} />

        <Recommendations data={recommendation} />

        <Team data={team} />

        <Contact />
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.div`
  button {
    border: none;
    padding: 1.5rem 2.5rem;

    &.primary {
      background-color: var(--color-primary);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.6rem;
      color: var(--color-white);
    }

    &.secondary {
      background-color: var(--color-black-2);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.6rem;
      color: var(--color-white);
      border-radius: 100rem;
      padding: 1.5rem 3rem;

      &.active {
        background-color: var(--color-primary);
      }

      &:hover {
        background-color: var(--color-primary);
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--color-black-2);
      font-size: var(--font-size-sm);
      padding: 1.5rem;

      span {
        background-color: var(--color-secondary);
        padding: 1.2rem;
        border-radius: 100%;
        color: var(--color-primary);
        margin-right: 1rem;
      }
    }
  }
`

export default Home
