import Title from '@/components/common/title'
import Layout from '@/layouts/layout'
import { mq } from '@/styles/global'
import styled from '@emotion/styled'

const Features = () => {
  return (
    <Layout metadata={{ title: 'Features' }}>
      <FeaturesWrapper className="wrapper">
        <img
          src="/static/images/butterfly.png"
          alt="Leospa Logotype (Butterfly)"
        />
        <Title
          title="Features - Events"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita vitae, earum minus, eligendi veniam consequuntur necessitatibus id debitis placeat, sunt accusantium. Fugiat illum in ea vel velit soluta eveniet necessitatibus?"
        />
        <div className="events">
          <ul>
            <li className="highlight">
              <img
                src="/static/images/extra_procedures_etc/4.jpg"
                alt="Procedure"
              />
              <div className="details">
                <div>
                  <h3>Event One</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor tempora, vel est voluptatibus facere mollitia ab
                    excepturi cumque sint, quidem eius eveniet. Commodi velit
                    eveniet molestias, ab temporibus quam dignissimos.
                  </p>
                </div>

                <div>
                  <span className="date">19-05-2021</span>
                  <button className="primary">Attend</button>
                </div>
              </div>
            </li>
            <li className="item">
              <img
                src="/static/images/extra_procedures_etc/2.jpg"
                alt="Procedure"
              />
              <div className="details">
                <div>
                  <h3>Event One</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor tempora, vel est voluptatibus facere mollitia ab
                    excepturi cumque sint, quidem eius eveniet.
                  </p>
                </div>

                <div className="info">
                  <span className="date">19-05-2021</span>
                  <button className="secondary">Attend</button>
                </div>
              </div>
            </li>
            <li className="item">
              <img
                src="/static/images/extra_procedures_etc/5.jpg"
                alt="Procedure"
              />
              <div className="details">
                <div>
                  <h3>Event One</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor tempora, vel est voluptatibus facere mollitia ab
                    excepturi cumque sint, quidem eius eveniet.
                  </p>
                </div>

                <div className="info">
                  <span className="date">19-05-2021</span>
                  <button className="secondary">Attend</button>
                </div>
              </div>
            </li>
            <li className="item">
              <img
                src="/static/images/extra_procedures_etc/6.jpg"
                alt="Procedure"
              />
              <div className="details">
                <div>
                  <h3>Event One</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor tempora, vel est voluptatibus facere mollitia ab
                    excepturi cumque sint, quidem eius eveniet.
                  </p>
                </div>

                <div className="info">
                  <span className="date">19-05-2021</span>
                  <button className="secondary">Attend</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </FeaturesWrapper>
    </Layout>
  )
}

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: 6rem auto 10rem auto;

  .events {
    margin-top: 4rem;

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12rem 3rem;

      .item {
        display: flex;
        flex-direction: column;
        text-align: center;

        ${mq[1]} {
          grid-column: span 3;
        }

        .details {
          padding: 1rem;
        }

        img {
          height: 30rem;
        }

        h3 {
          margin: 1rem 0;
        }

        p {
          font-weight: 300;
          color: var(--color-black-3);
          font-size: var(--font-size-sm);
        }

        .date {
          font-weight: 300;
          color: var(--color-black-3);
        }

        .info {
          display: flex;
          flex-flow: row-reverse;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
      }

      .highlight {
        grid-column: span 3;
        height: 100%;
        position: relative;

        h3 {
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .details {
          position: absolute;
          padding: 4rem;
          bottom: -6rem;
          right: 6rem;
          left: 6rem;
          background-color: var(--color-secondary-2);
          z-index: 10;
          box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.08);

          display: flex;
          gap: 6rem;
          justify-content: center;
          align-items: center;

          ${mq[0]} {
            position: static;
            gap: 4rem;
            flex-direction: column;
            box-shadow: none;
            z-index: 0;
          }
        }

        img {
          height: 60rem;
        }

        p {
          font-family: var(--font-secondary);
          color: var(--color-black-2);
          font-size: var(--font-size-sm);
        }

        .date {
          display: block;
          text-align: center;
          font-weight: 400;
          font-size: var(--font-size-sm);
          margin-bottom: 1rem;
          color: var(--color-black-3);
        }
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export default Features
