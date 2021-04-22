import styled from '@emotion/styled'
import { Fragment, useState } from 'react'
import CustomLink from '@/components/common/custom-link'
import Modal from '@/components/common/modal'
import { mq } from '@/styles/global'

const Hero = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <HeroWrapper id="hero">
      {/* BACKGROUND FLOATING IMAGES */}
      <div className="spa">
        <img src="/static/images/spa.png" alt="Hero Image (Spa)" />
      </div>
      <div className="leaf">
        <img src="/static/images/leaf.png" alt="Background Image (Leaf)" />
      </div>
      <div className="rose">
        <img
          src="/static/images/china-rose.png"
          alt="Background Image (China Rose)"
        />
      </div>
      <div className="jasmine">
        <img
          src="/static/images/jasmine.png"
          alt="Background Image (China Rose)"
        />
      </div>

      {data
        .filter((el) => el.show === true)
        .map((hero) => (
          <Fragment key={hero._id}>
            <div className="hero-content wrapper">
              <h4>{hero.title1}</h4>
              <h1>{hero.title2}</h1>
              <p>{hero.content}</p>
              <div className="cta">
                <CustomLink href="#contact" className="btn primary">
                  Reserve Now
                </CustomLink>
                <button className="tertiary" onClick={() => setOpenModal(true)}>
                  <span className="ti-control-play"></span>Watch our story
                </button>
              </div>
            </div>
            {openModal && (
              <Modal
                handleOpen={setOpenModal}
                isFullscreen
                render={() => (
                  <iframe
                    src={hero.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              />
            )}
          </Fragment>
        ))}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  .spa {
    position: absolute;
    top: -20rem;
    right: 0;
    z-index: -1;
    width: 45%;

    ${mq[1]} {
      display: none;
    }
  }

  .leaf {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 13%;
  }

  .rose {
    position: absolute;
    bottom: -35rem;
    left: 20%;
    z-index: -2;
  }

  .jasmine {
    position: absolute;
    bottom: -60rem;
    right: 10%;
    z-index: -2;

    ${mq[2]} {
      display: none;
    }
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 10rem auto 0 auto;

    h1,
    h4,
    p {
      max-width: clamp(50rem, var(--page-width), 25vw);
    }
  }

  p {
    font-weight: 300;
    color: var(--color-black-3);
  }

  .cta {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    ${mq[0]} {
      gap: 2rem;
    }
  }
`

export default Hero
