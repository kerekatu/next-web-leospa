import styled from '@emotion/styled'
import Title from '@/components/common/title'
import CONSTANTS from '@/lib/constants'
import { mq } from '@/styles/global'

const Team = ({ data }) => {
  return (
    <TeamWrapper className="wrapper" id="team">
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
              <div className="social">
                <a href="facebook.com" target="_blank" title="Facebook">
                  <i className="ti-facebook"></i>
                </a>
                <a href="twitter.com" target="_blank" title="Twitter">
                  <i className="ti-twitter-alt"></i>
                </a>
                <a href="vimeo.com" target="_blank" title="Vimeo">
                  <i className="ti-google"></i>
                </a>
                <a href="instagram.com" target="_blank" title="Instagram">
                  <i className="ti-instagram"></i>
                </a>
              </div>
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

    ${mq[1]} {
      grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
      gap: 12rem 4rem;
    }

    li {
      position: relative;
    }

    li:hover .social {
      opacity: 1;
      visibility: visible;
      margin-top: 1rem;
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
      width: 85%;
      background-color: var(--color-white);
      padding: 2rem;
      min-height: 10rem;

      ${mq[1]} {
        bottom: -7rem;
      }

      p {
        margin-top: 0.5rem;
        font-size: var(--font-size-sm);
        color: var(--color-black-3);
        font-weight: 300;
      }

      h3 {
        font-weight: 700;
      }

      .social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        opacity: 0;
        visibility: none;
        margin-top: -2rem;
        transition: all 0.3s ease-in-out;

        a {
          color: var(--color-black-2);
          border: 0.1rem solid var(--color-black-2);
          border-radius: 100%;
          padding: 0.6rem;
          transition: all var(--transition);
        }

        a:hover {
          color: var(--color-white);
          background-color: var(--color-primary);
          border: 0.1rem solid var(--color-primary);
        }

        a > i {
          display: block;
        }
      }
    }
  }
`

export default Team
