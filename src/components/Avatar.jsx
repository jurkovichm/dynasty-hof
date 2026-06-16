import { useState } from 'react'

export default function Avatar({ url, name, className }) {
  const [failed, setFailed] = useState(false)
  const initial = (name || '?')[0].toUpperCase()

  if (!url || failed) {
    return <div className={`${className} avatar-fallback`}>{initial}</div>
  }

  return (
    <img
      className={className}
      src={url}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
