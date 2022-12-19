import React from 'react'
import { Link } from 'react-router-dom'
// import { useGlobalContext } from '../../Hooks/context/Context'
const Countries = ({ name, capital, population, region, flags }) => {
  // const { official } = name
  // const { png } = flags
  // const { common } = name
  // console.log(common)
  // const slug = name.common.replace(/ /g, '-')

  return (
    <section className='countries'>
      <div className='container '>
        <div className='link-container'>
          <div className='link-div'>
            <Link className='link' to={`/countrydetails/${name.official}`}>
              <article className='container-content'>
                <div className='wrapper'>
                  <img src={flags.png} alt={name.common} />
                </div>
                <div className='country-info'>
                  <h3 data-testid='country'>{name.common}</h3>
                  <p>
                    <strong>population:</strong> <span>{population}</span>
                  </p>
                  <p>
                    <strong>Region:</strong> <span>{region}</span>
                  </p>
                  <p>
                    <strong>Capital:</strong> <span>{capital}</span>
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countries
