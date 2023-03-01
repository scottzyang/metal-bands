import data from '../../metal.json'

function MetalMeta() {
  const total_fans = data.reduce((accumulator, data) => {
    return accumulator + data.fans;
  }, 0)

  return (
    <section className='flex flex-col items-center m-6'>
      <p className='google-font text-lg'><strong>Metal Bands🤘</strong></p>
      <p className='google-font text-lg'><strong>Total Bands: </strong>{data.length}</p>
      <p className='google-font text-lg'><strong>Total Number of Fans 🎸: </strong>{total_fans * 1000}</p>
    </section>
  )
}

export default MetalMeta
