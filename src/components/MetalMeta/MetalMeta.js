import data from '../../metal.json'

function MetalMeta() {
  return (
    <section className='flex flex-col items-start m-6'>
      <p><strong>Metal Bands🤘</strong></p>
      <p><strong>Total Bands: </strong>{data.length}</p>
    </section>
  )
}

export default MetalMeta
