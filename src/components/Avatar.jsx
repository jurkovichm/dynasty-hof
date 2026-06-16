export default function Avatar({ url, name, className }) {
  const initial = (name || '?')[0].toUpperCase()
  if (!url) return <div className={`${className} avatar-fallback`}>{initial}</div>
  return (
    <img
      className={className}
      src={url}
      alt=""
      loading="lazy"
      onError={e => {
        const div = document.createElement('div')
        div.className = `${className} avatar-fallback`
        div.textContent = initial
        e.target.replaceWith(div)
      }}
    />
  )
}
