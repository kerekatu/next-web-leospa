import CONSTANTS from '@/lib/constants'
import React from 'react'

const ChangeHero = ({ hero, handleModal }) => {
  const changeHero = async (e) => {
    const response = await fetch(
      `${CONSTANTS.API_URL}/hero/admin/${e.target.value}`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      }
    )

    if (response.ok) {
      handleModal(`${e.target.value} has been set as hero`)
    }
  }

  return (
    <select onChange={(e) => changeHero(e)}>
      <option disabled selected value>
        Select Hero
      </option>
      {hero.map((item) => (
        <>
          {item.show === false && (
            <option key={item._id} value={item._id}>
              {item.title1}
            </option>
          )}
        </>
      ))}
    </select>
  )
}

export default ChangeHero
