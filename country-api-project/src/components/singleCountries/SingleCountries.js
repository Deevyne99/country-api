import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import useFetch from '../../Hooks/fetch/Usefetch'
import { countries } from 'country-data'

const SingleCountries = () => {
  // const {  error } = useGlobalContext()
  // console.log(data)
  const { id } = useParams()
  const { loading, data: country } = useFetch(
    `https://restcountries.com/v3.1/name/${id}?fullText=true`
  )
  // console.log(data)
  if (loading) {
    return <div className='loading'></div>
  }

  console.log(country[0])

  // console.log(country[0].currencies[name])
  const { png } = country[0].flags
  const language = Object.values(country[0].languages)
  const currency = Object.keys(country[0].currencies)
  console.log(currency[0])
  const native = Object.keys(country[0].name.nativeName)
  // console.log(native[0])

  return (
    <section className='single-page'>
      <div className='container'>
        <Link className='btn-link btn' to='/'>
          <FaLongArrowAltLeft /> back
        </Link>
        <article className='details'>
          <div className='image-container'>
            <img src={png} alt='' />
          </div>
          <div className='details-info'>
            <h3>{country[0].name.common}</h3>
            <div className='region'>
              <div className='region-1'>
                <p>
                  <strong>native name: </strong>
                  <span>{country[0].name.nativeName[native[0]].common}</span>
                </p>
                <p>
                  <strong>Population: </strong>
                  <span> {country[0].population} </span>
                </p>
                <p>
                  <strong>Region: </strong>
                  <span> {country[0].region} </span>
                </p>
                <p>
                  <strong>sub-Region: </strong>
                  <span> {country[0].subregion}</span>
                </p>
                <p>
                  <strong>capital: </strong>
                  <span> {country[0].capital} </span>
                </p>
              </div>
              <div className='region-1'>
                <p>
                  <strong>top level Domain: </strong>
                  <span>{country[0].tld} </span>
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {<span>{country[0].currencies[currency[0]].name}</span>}
                </p>
                <p>
                  <strong>Language: </strong>
                  {language.map((lan, index) => {
                    return <span key={index}>{lan} </span>
                  })}
                </p>
              </div>
            </div>
            <div className='borders'>
              <h3>border countries: </h3>
              <div className='btn-container'>
                {country[0].borders &&
                  country[0].borders.map((border, index) => {
                    // console.log(countries[border].name)
                    const nation = countries[border].name

                    const national = nation.split(',')
                    console.log(national[0])
                    return (
                      <Link
                        key={index}
                        to={`/countrydetails/${nation}`}
                        className='btn-link'
                      >
                        {countries[border].name}
                      </Link>
                    )
                  })}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SingleCountries
