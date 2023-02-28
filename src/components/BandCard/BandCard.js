import Like from "../Like/Like"

function BandCard({band_name, fans, formed, origin, split, style}) {
  return (
    <section>
      <section className="m-8 flex flex-col items-start">
        <p className="font-mono"><strong>Band Name: </strong>{band_name}</p>
        <p className="font-mono"><strong>Formed: </strong>{formed}</p>
        <p className="font-mono"><strong>Origin: </strong>{origin}</p>
        <p className="font-mono"><strong>Fans: </strong>{fans}</p>
        <p className="font-mono"><strong>Split: </strong>{split}</p>
        <p className="font-mono"><strong>Style: </strong>{style}</p>
      </section>
      <section>
        {split !== "-" && <Like />}
      </section>
    </section>
  )
}

export default BandCard
