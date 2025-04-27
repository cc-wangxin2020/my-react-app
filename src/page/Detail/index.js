import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
//   const [param] = useSearchParams()
//   console.log(param);
  const param = useParams()
  console.log(param);
  
  return (
    <div>Detail: {param.id} + {param.name}</div>
  )
}
