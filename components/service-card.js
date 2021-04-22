import CONSTANTS from '@/lib/constants'
import CustomLink from '@/components/common/custom-link'
import parse from 'html-react-parser'
import trimWords from '@/lib/trim-words'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const ServiceCard = ({ item, image, withLinks = false, isActive = false }) => {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    if (isActive) setExpand(true)
  }, [isActive])

  return (
    <ServiceCardWrapper id={item._id} key={item._id}>
      <img
        src={image ?? `${CONSTANTS.API_URL}/images/treatment/${item.image}`}
        alt={item.title}
      />
      <h3>{item.title}</h3>
      <span className="content">
        {!expand
          ? parse(trimWords(item.content, 16, 100))
          : parse(item.content)}
      </span>
      {!withLinks ? (
        <button
          className={expand ? 'secondary active' : 'secondary'}
          onClick={() => setExpand(!expand)}
        >
          {!expand ? 'Read More' : 'Show less'}
        </button>
      ) : (
        <CustomLink href={`/services#${item._id}`} className="btn secondary">
          Read more
        </CustomLink>
      )}
    </ServiceCardWrapper>
  )
}

const ServiceCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2.5rem;
  border: 0.1rem solid var(--color-gray);
  align-items: center;
  font-weight: 300;
  font-size: var(--font-size-sm);
  height: min-content;
  transition: box-shadow var(--transition);

  &:hover {
    box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.06);
  }

  &:hover > .btn {
    background-color: var(--color-primary);
  }

  img {
    display: block;
    width: 100%;
  }

  strong {
    font-weight: 300;
  }

  .content p {
    color: var(--color-black-3);
  }

  .content p + p {
    margin-top: 1rem;
  }

  a,
  button {
    margin-top: auto;
  }
`

export default ServiceCard
