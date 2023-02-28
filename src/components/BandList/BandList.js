import data from '../../metal.json'
import BandCard from '../BandCard/BandCard'

function BandList() {
  const bandList = data.map(({ band_name, fans, origin, formed, split, style }) => {
    return (
      <div className='border-solid border-2 border-gray-400'>
        <BandCard key={band_name} band_name={band_name} fans={fans} origin={origin} formed={formed} split={split} style={style}/>
      </div>
    )
  })

  return (
    <section className='grid gap-0 grid-cols-3'>
      {bandList}
    </section>
  )
}

export default BandList
