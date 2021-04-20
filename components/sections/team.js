import styled from '@emotion/styled'
import Title from '@/components/common/title'
import CONSTANTS from '@/lib/constants'

const Team = ({ data }) => {
  return (
    <TeamWrapper className="wrapper" id="#team">
      <Title
        title="Experienced Team"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cupiditate omnis sit. Eveniet, ratione magnam nobis."
      />
      <ul className="list">
        {data.map((item) => (
          <li key={item._id}>
            <img
              src={`${CONSTANTS.API_URL}/images/team/${item.image}`}
              alt={item.role}
            />
            <div className="info">
              <h3>
                {item.firstname} {item.lastname}
              </h3>
              <p>{item.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </TeamWrapper>
  )
}

const TeamWrapper = styled.section`
  margin-top: 4rem;

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 4rem;
    margin: 5rem 0 14rem 0;
    text-align: center;

    li {
      position: relative;
    }

    li img {
      display: block;
      width: 100%;
    }

    .info {
      position: absolute;
      gap: 0.5rem;
      bottom: -8rem;
      left: 50%;
      transform: translate(-50%);
      box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
      width: 80%;
      background-color: var(--color-white);
      padding: 2rem;
      height: 12rem;

      p {
        margin-top: 0.5rem;
        font-size: var(--font-size-sm);
        color: var(--color-black-3);
        font-weight: 300;
      }

      h3 {
        font-weight: 700;
      }
    }
  }
`

export default Team
