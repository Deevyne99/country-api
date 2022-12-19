import React, { useState, useEffect, useCallback } from 'react'

const API_ENDPOINT = `https://restcountries.com/v3.1/all`
const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [description, setDescription] = useState()
  const [data, setData] = useState()

  const fetchData = async (url) => {
    setLoading(true)

    try {
      const response = await fetch(url)
      if (response.ok) {
        const countries = await response.json()

        setData(countries)
        setDescription(countries)
      } else {
        throw new Error('Not Found')
      }
      // console.log(countries)

      setLoading(false)
    } catch (error) {
      console.log(error)
      // setisError(true)
      console.log(isError)
      setLoading(false)
    }
    // setisError(false)
  }

  useEffect(() => {
    fetchData(urlParams)
  }, [urlParams])
  return { loading, data, setData, description, isError, setDescription }
}

export default useFetch
