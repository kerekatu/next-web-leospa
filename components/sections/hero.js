import styled from '@emotion/styled'

const Hero = ({ data }) => {
  return (
    <HeroWrapper id="#hero">
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
          <div className="hero-content" key={hero._id}>
            <h4>{hero.title1}</h4>
            <h1>{hero.title2}</h1>
            <p>{hero.content}</p>
            <div className="cta">
              <button className="primary">Reserve Now</button>
              <button className="tertiary">
                <span className="ti-control-play"></span>Watch our story
              </button>
            </div>
          </div>
        ))}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;

  .spa {
    position: absolute;
    top: -20rem;
    right: 0;
    z-index: -1;
  }

  .leaf {
    position: absolute;
    top: -10rem;
    left: 0;
    z-index: -2;
  }

  .rose {
    position: absolute;
    bottom: -35rem;
    left: 35rem;
    z-index: -2;
  }

  .jasmine {
    position: absolute;
    bottom: -60rem;
    right: 15rem;
    z-index: -2;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: var(--page-width);
    margin: 10rem auto 0 auto;
  }

  h1,
  h4,
  p {
    width: clamp(30rem, var(--page-width), 25vw);
  }

  p {
    font-weight: 300;
    color: var(--color-black-3);
  }

  .cta {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
`

export default Hero
