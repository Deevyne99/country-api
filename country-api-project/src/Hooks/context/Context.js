import React, { useContext, useState, useEffect } from 'react'
import useFetch from '../fetch/Usefetch'
const AppContext = React.createContext()

let url
const getTheme = () => {
  let theme = 'dark-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme())
  const [showFilter, setShowFilter] = useState(false)
  const [Query, setQuery] = useState('')
  const { loading, data, description, setDescription, isError } = useFetch(
    `${url}`
  )
  console.log(url)
  // const [info, setInfo] = useState(data)

  // console.log(description)
  if (Query) {
    url = `https://restcountries.com/v3.1/name/${Query}`
  }
  if (!Query) {
    url = `https://restcountries.com/v3.1/all`
  }

  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }
  const toggleFilter = () => {
    setShowFilter((prevState) => !prevState)
  }
  // const allContinent = ['all', ...new Set(data.map((item) => item.region))]
  const filterCountries = (region) => {
    if (region === 'all') {
      setDescription(data)
      return
    }
    setDescription(data.filter((item) => item.region === region))
  }
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        toggleFilter,
        showFilter,
        loading,
        data,
        description,
        setQuery,
        Query,
        filterCountries,
        isError,
        // info,
        // allContinent,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
