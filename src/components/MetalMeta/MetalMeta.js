import data from '../../metal.json'

function MetalMeta() {
  const total_fans = data.reduce((accumulator, data) => {
    return accumulator + data.fans;
  }, 0)

  return (
    <section className='flex flex-col items-start m-6'>
      <p><strong>Metal Bands🤘</strong></p>
      <p><strong>Total Bands: </strong>{data.length}</p>
      <p><strong>Total Number of Fans 🎸: </strong>{total_fans}</p>
    </section>
  )
}

export default MetalMeta
