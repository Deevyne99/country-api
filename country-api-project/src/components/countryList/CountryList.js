import React from 'react'
import { useGlobalContext } from '../../Hooks/context/Context'
import Countries from '../countries/Countries'
const CountryList = () => {
  const { loading, description, data, isError } = useGlobalContext()

  if (loading) {
    return <div className='loading'></div>
  }
  if (description.length < 1) {
    return (
      <div>
        <h1>not found</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    )
  }
  return (
    <section>
      <div className='container-country'>
        {/* {console.log(description)} */}
        {/* {console.log(data)} */}
        {description &&
          description.map((countries, index) => {
            // console.log(countries)
            return <Countries key={index} {...countries} />
          })}
      </div>
    </section>
  )
}

export default CountryList
