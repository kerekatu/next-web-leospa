import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'

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
      <Hero data={hero} />
      <About data={about} />
      <Procedures data={treatment} />
      <Recommendations data={recommendation} />
      <Team data={team} />
      <Contact data={treatment} />
    </Layout>
  )
}

export default Home
