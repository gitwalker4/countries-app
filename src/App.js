import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CountryGrid from './components/countries/CountryGrid'

const App = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    const fetchSports = async () => {
      setIsLoading(true)
      const result = await axios(`https://restcountries.com/v3.1/all`)

      setCountries(result.data)
      setIsLoading(false)
    }

    fetchSports()
  }, [])

  const searchItems = (searchValue) => {
    setSearch(searchValue)
    if (search !== '') {
      const filteredCountries = countries.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(search.toLowerCase())
      })
      console.log(filteredCountries)
      setFilteredCountries(filteredCountries)
    } else {
      setFilteredCountries(countries)
    } 
  }

  return (
    <>
      <Header searchCountry={searchItems} />
      <CountryGrid isLoading={isLoading} countries={countries} filteredCountries={filteredCountries} search={search} />
    </>
  )
}

export default App