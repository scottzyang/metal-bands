import Like from "../Like/Like"
import './BandCard.css'

function BandCard({band_name, fans, formed, origin, split, style}) {
  const fans_format = (fans) => {
    let new_fans = fans * 1000
    return new_fans.toLocaleString('en')
  }

  const band_style = style.split(',').map((style_item) => {
    return (
      <li className="ml-6 google-font text-lg">{style_item}</li>
    )
  })

  return (
    <section>
      <p className="google-font text-4xl m-8"><strong>Band Name: </strong>{band_name}</p>
      <section className="m-10 flex flex-col items-start">
        <p className="google-font text-xl"><strong>Formed: </strong>{formed}</p>
        <p className="google-font text-xl"><strong>Origin: </strong>{origin}</p>
        <p className="google-font text-xl"><strong>Fans: </strong>{fans_format(fans)}</p>
        <p className="google-font text-xl"><strong>Split: </strong>{split}</p>
      </section>
      <ul className="flex flex-col items-start m-10 list-disc">
        <p className="google-font text-xl"><strong>Style:</strong></p>
          {band_style}
      </ul>
      <section>
        {split !== "-" && <Like />}
      </section>
    </section>
  )
}

export default BandCard
