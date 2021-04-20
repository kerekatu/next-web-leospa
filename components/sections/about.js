import styled from '@emotion/styled'
import Title from '../common/title'

const About = ({ data }) => {
  return (
    <AboutWrapper id="#about">
      <img
        src="/static/images/butterfly.png"
        alt="Leospa Logotype (Butterfly)"
      />
      <h4 className="secondary">About our spa center</h4>
      <Title title={data.title} subtitle={data.content} />
      <button className="secondary active">Read more</button>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`
  width: var(--page-width);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  align-items: center;
  margin: 30rem auto 10rem auto;

  img {
    display: block;
  }

  p {
    font-weight: 300;
    color: var(--color-black-3);
    margin-bottom: 3rem;
  }
`

export default About
