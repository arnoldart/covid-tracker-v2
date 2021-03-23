import { useState } from "react"

export default function Home({ data }) {
  const [country, setCountry] = useState()

  const test = (e) => {
    e.preventDefault()

    test(formData)
  }

  return (
    <>
      <select>
        {data.map(({country}) => (
          <option value={country}>{country}</option>
        ))}
      </select>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries/`)
  const json = await res.json()

  return {
    data: json
  }
}
