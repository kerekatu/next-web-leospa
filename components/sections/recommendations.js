import CONSTANTS from '@/lib/constants'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Recommendations = ({ data }) => {
  const [newestRec, setNewestRec] = useState([])
  const [selectedRec, setSelectedRec] = useState(0)

  useEffect(() => {
    setNewestRec(
      [...data]
        .sort((a, b) => new Date(b.created) - new Date(a.created))
        .slice(0, 3)
    )
  }, [data])

  return (
    <RecommendationsWrapper id="#recommendations">
      <img src="/static/images/quote.png" alt="Quote Symbol" />
      <Link href="/recommendations">
        <a>
          {newestRec.map((item, index) => (
            <div
              className={
                selectedRec === index
                  ? 'recommendation active'
                  : 'recommendation'
              }
              key={item._id}
            >
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
        </a>
      </Link>
      <div className="pagination">
        {newestRec.map((item, index) => (
          <button
            className={selectedRec === index ? 'dot active' : 'dot'}
            key={item._id}
            onClick={() => setSelectedRec(index)}
          ></button>
        ))}
      </div>
    </RecommendationsWrapper>
  )
}

const RecommendationsWrapper = styled.section`
  background-color: var(--color-secondary-2);
  min-height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem 0;
  text-align: center;
  padding: 4rem;

  .recommendation {
    display: none;
    width: var(--page-width);
    font-family: var(--font-secondary);
    color: var(--color-black-2);

    &.active {
      display: flex;
      flex-direction: column;
    }

    img {
      margin-top: 3rem;
      border-radius: 100%;
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
  }

  .pagination {
    display: flex;
    gap: 1rem;

    .dot {
      padding: 0.6rem;
      border-radius: 100%;
      background-color: var(--color-primary);
      opacity: 0.6;

      &.active {
        opacity: 1;
      }
    }
  }
`

export default Recommendations
