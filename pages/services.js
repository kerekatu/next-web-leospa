import Title from '@/components/common/title'
import ServiceCard from '@/components/service-card'
import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import { mq } from '@/styles/global'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const { data } = await getAPI({
    treatment: 'treatment',
  })

  return {
    props: {
      data,
    },
  }
}

const Services = ({ data }) => {
  const router = useRouter()
  const { treatment } = data
  const treatmentId = router.asPath.match(/#([a-z0-9]+)/gi)

  if (!data) return <></>

  return (
    <Layout metadata={{ title: 'Services' }}>
      <ServicesWrapper className="wrapper">
        <Title title="Services" />
        <div className="cards">
          {treatment.map((item) => (
            <ServiceCard
              item={item}
              key={item._id}
              isActive={
                treatmentId && item._id === treatmentId[0].replace('#', '')
                  ? true
                  : false
              }
            />
          ))}
        </div>
      </ServicesWrapper>
    </Layout>
  )
}

const ServicesWrapper = styled.div`
  margin-top: 6rem;

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 6rem;

    ${mq[1]} {
      grid-template-columns: 1fr;
    }
  }
`

export default Services
