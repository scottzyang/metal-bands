import data from '../../metal.json'
import BandCard from '../BandCard/BandCard'

function BandList() {
  const bandList = data.map(({ band_name, fans, origin, formed, split, style }) => {
    return (
      <BandCard key={band_name} band_name={band_name} fans={fans} origin={origin} formed={formed} split={split} style={style}/>
    )
  })

  return (
    <section>
      {bandList}
    </section>
  )
}

export default BandList
