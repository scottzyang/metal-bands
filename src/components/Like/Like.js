import { useState } from "react"

function Like() {
  const [like, setLike] = useState(0)
  return (
    <section className="flex justify-center text-3xl m-6">
      <button className="mr-4" onClick={() => setLike(like + 1)}>🤘</button>
       <p className='google-font text-4xl'>{like}</p>
       <button className="ml-4" onClick={() => setLike(like - 1)}>🖕</button>
    </section>
  )
}

export default Like
