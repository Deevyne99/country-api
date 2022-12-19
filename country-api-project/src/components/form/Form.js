import React, { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'
import { useGlobalContext } from '../../Hooks/context/Context'
const Form = () => {
  const {
    theme,
    showFilter,
    data,
    description,
    toggleFilter,
    Query,
    setQuery,
    filterCountries,
    // allContinent,
  } = useGlobalContext()

  const regions = data && data.map((item) => item.region)
  const allContinent = ['all', ...new Set(regions)]
  // console.log(allContinent)
  return (
    <section className='form-section'>
      <div className='container'>
        <div className='form-container'>
          <form className='form' onSubmit={(e) => e.preventDefault()}>
            <input
              value={Query}
              placeholder='Search'
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              className='input-box'
            />
          </form>
          <button className='btn-filter' onClick={toggleFilter}>
            filter by region
            {showFilter && <FaChevronUp />}
            {!showFilter && <FaChevronDown />}
          </button>
          <div
            data-testid='filter-option'
            style={{ visibility: showFilter ? 'visible' : 'hidden' }}
            className={`filter-container  ${
              theme === 'light-theme' ? 'bg-white' : ''
            }`}
          >
            {allContinent.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterCountries(item)}
                  className='toggle-btn filter'
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
