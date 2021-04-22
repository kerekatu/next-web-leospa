import Title from '@/components/common/title'
import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import CONSTANTS from '@/lib/constants'
import styled from '@emotion/styled'

export async function getStaticProps() {
  const { data } = await getAPI({
    recommendation: 'recommendation',
  })

  return {
    props: {
      data,
    },
  }
}

const Recommendations = ({ data }) => {
  return (
    <Layout metadata={{ title: 'Recommendations' }}>
      <RecommendationsWrapper className="wrapper">
        <Title title="Recommendations" />
        {data.recommendation.map((item) => (
          <div className="recommendation" key={item._id}>
            <p>{item.content}</p>
            <div>
              <img
                src={`${CONSTANTS.API_URL}/images/recommendation/${item.image}`}
                alt={item.name}
              />
              <div className="author">
                <h3>{item.name},</h3>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </RecommendationsWrapper>
    </Layout>
  )
}

const RecommendationsWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem 0;
  text-align: center;

  .recommendation {
    display: flex;
    width: var(--page-width);
    font-family: var(--font-secondary);
    color: var(--color-black-2);
    flex-direction: column;
    background-color: var(--color-secondary-2);
    padding: 4rem;

    img {
      margin-top: 3rem;
      border-radius: 100%;
    }
  }

  .author {
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    justify-content: center;
    gap: 0.6rem;

    span {
      font-size: var(--font-size-sm);
      font-family: var(--font-primary);
    }
  }
`

export default Recommendations
