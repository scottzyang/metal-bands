import Like from "../Like/Like"

function BandCard({band_name, fans, formed, origin, split, style}) {
  return (
    <section>
      <p><strong>Band Name: </strong>{band_name}</p>
      <p><strong>Formed: </strong>{formed}</p>
      <p><strong>Origin: </strong>{origin}</p>
      <p><strong>Fans: </strong>{fans}</p>
      <Like />
    </section>
  )
}

export default BandCard
