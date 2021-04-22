import CONSTANTS from '@/lib/constants'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Title from '@/components/common/title'
import Link from 'next/link'
import ServiceCard from '@/components/service-card'
import { mq } from '@/styles/global'

const Procedures = ({ data }) => {
  const [randProcedures, setRandProcedures] = useState([])

  useEffect(() => {
    setRandProcedures([...data].sort(() => 0.5 - Math.random()))
  }, [data])

  return (
    <ProceduresWrapper id="procedures">
      <div className="showcase">
        {randProcedures.slice(0, 4).map((item) => (
          <Link href="/services" key={item._id}>
            <a className="showcase-container">
              <img
                src={`${CONSTANTS.API_URL}/images/treatment/${item.image}`}
                alt={item.title}
              />
              <div className="info">
                <img src="/static/images/icons/1.png" alt="Procedure Icon" />
                <p>{item.title}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="highlight wrapper">
        <Title
          title="Popular Procedures"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          natus id quasi aut distinctio dolorum deleniti! Animi facilis delectus
          impedit nostrum ad nihil."
        />
        <div className="cards">
          {data.slice(0, 3).map((item) => (
            <ServiceCard withLinks={true} item={item} key={item._id} />
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

    ${mq[1]} {
      grid-template-columns: repeat(2, 1fr);
    }

    img {
      display: block;
      width: 100%;
    }

    .showcase-container {
      position: relative;
    }

    .info {
      opacity: 0;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 129, 126, 0.8);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all var(--transition);

      img {
        display: block;
        width: 5rem;
      }

      p {
        color: var(--color-white);
        margin-top: 1rem;
        font-weight: 700;
        font-family: var(--font-secondary);
      }
    }

    .showcase-container:hover > .info {
      opacity: 1;
    }
  }

  .highlight {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    margin: 10rem auto;
    text-align: center;

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      ${mq[2]} {
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      }

      & > article {
        height: 100%;
      }
    }
  }
`

export default Procedures
