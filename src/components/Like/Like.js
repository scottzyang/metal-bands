import { useState } from "react"

function Like() {
  const [like, setLike] = useState(0)
  return (
    <section className="flex justify-center text-3xl m-6">
      <button onClick={() => setLike(like + 1)}>🤘</button>
       <p>{like}</p>
       <button onClick={() => setLike(like - 1)}>🖕</button>
    </section>
  )
}

export default Like
