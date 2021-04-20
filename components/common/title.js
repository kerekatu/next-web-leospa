import styled from '@emotion/styled'

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-align: center;

  p {
    font-weight: 300;
    color: var(--color-black-3);
    margin-top: 2.5rem;
  }
`

export default Title
