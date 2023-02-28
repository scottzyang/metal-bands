import Like from "../Like/Like"

function BandCard({band_name, fans, formed, origin, split, style}) {
  const fans_format = (fans) => {
    return fans.toLocaleString('en')
  }

  const band_style = style.split(',').map((style_item) => {
    return (
      <li className="ml-6">{style_item}</li>
    )
  })

  return (
    <section>
      <section className="m-8 flex flex-col items-start">
        <p className="font-mono"><strong>Band Name: </strong>{band_name}</p>
        <p className="font-mono"><strong>Formed: </strong>{formed}</p>
        <p className="font-mono"><strong>Origin: </strong>{origin}</p>
        <p className="font-mono"><strong>Fans: </strong>{fans_format(fans)}</p>
        <p className="font-mono"><strong>Split: </strong>{split}</p>
      </section>
      <ul className="flex flex-col items-start m-8 list-disc">
        <p className="font-mono"><strong>Style:</strong></p>
          {band_style}
      </ul>
      <section>
        {split !== "-" && <Like />}
      </section>
    </section>
  )
}

export default BandCard
