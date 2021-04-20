import CONSTANTS from '@/lib/constants'
import trimWords from '@/lib/trim-words'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import Title from '@/components/common/title'

const Procedures = ({ data }) => {
  const [randProcedures, setRandProcedures] = useState([])

  useEffect(() => {
    setRandProcedures([...data].sort(() => 0.5 - Math.random()))
  }, [data])

  return (
    <ProceduresWrapper id="#procedures">
      <div className="showcase">
        {randProcedures.slice(0, 4).map((item) => (
          <img
            src={`${CONSTANTS.API_URL}/images/treatment/${item.image}`}
            alt={item.title}
            key={item._id}
          />
        ))}
      </div>
      <div className="highlight">
        <Title
          title="Popular Procedures"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          natus id quasi aut distinctio dolorum deleniti! Animi facilis delectus
          impedit nostrum ad nihil."
        />
        <div className="cards">
          {data.slice(0, 3).map((item) => (
            <div className="card" key={item._id}>
              <img
                src={`${CONSTANTS.API_URL}/images/treatment/${item.image}`}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <span>{parse(trimWords(item.content, 20, 140))}</span>
              <button className="secondary">Read more</button>
            </div>
          ))}
        </div>
      </div>
    </ProceduresWrapper>
  )
}

const ProceduresWrapper = styled.section`
  .showcase {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;

    img {
      display: block;
      width: 100%;
    }
  }

  .highlight {
    display: flex;
    flex-direction: column;
    width: var(--page-width);
    gap: 6rem;
    margin: 10rem auto;
    text-align: center;

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding: 2.5rem;
      border: 0.1rem solid var(--color-gray);
      align-items: center;
      font-weight: 300;
      font-size: var(--font-size-sm);
    }

    .card img {
      display: block;
      width: 100%;
    }

    .card strong {
      font-weight: 300;
    }

    .card p {
      color: var(--color-black-3);
    }

    .card button {
      margin-top: auto;
    }
  }
`

export default Procedures
