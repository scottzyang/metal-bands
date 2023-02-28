import { useState } from 'react'
import './BandList.css'
import data from '../../metal.json'
import BandCard from '../BandCard/BandCard'

function BandList() {
  const [query, setQuery] = useState('')
  const bandList = data.filter((obj) => {
    const inName = obj.band_name.toLowerCase().includes(query.toLowerCase())
    const inOrigin = obj.origin.toLowerCase().includes(query.toLowerCase())
    return inName || inOrigin }).map(({ band_name, fans, origin, formed, split, style }) => {
    return (
      <div className='border-solid border-4 border-gray-400'>
        <BandCard key={band_name} band_name={band_name} fans={fans} origin={origin} formed={formed} split={split} style={style}/>
      </div>
    )
  })

  return (
    <section>
      <section className='flex flex-col items-center mb-8'>
        <form>
          <legend className='google-font text-3xl'>Search Band by Name or Country of Origin</legend>
          <input
          className='text-slate-800 w-4/5'
            value={query}
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="ml-4 border-solid border-4 border-white rounded-xl bg-gray-500" type="submit"><p className='m-1'>Submit</p></button>
        </form>
      </section>
      <section className='grid gap-0 grid-cols-3 w-11/12 m-auto'>
        {bandList}
      </section>
    </section>
  )
}

export default BandList
