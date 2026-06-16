export default function LombardiTrophy() {
  return (
    <svg className="lombardi" viewBox="0 0 80 124" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Championship Trophy">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1b0"/>
          <stop offset="0.45" stopColor="#f5c842"/>
          <stop offset="1" stopColor="#b8881a"/>
        </linearGradient>
        <linearGradient id="goldShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55"/>
          <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* Football */}
      <g transform="rotate(-12 40 23)">
        <ellipse cx="40" cy="23" rx="23" ry="11.5" fill="url(#goldGrad)" stroke="#7d5e10" strokeWidth="1.2"/>
        <ellipse cx="33" cy="19" rx="11" ry="4" fill="url(#goldShine)"/>
        <path d="M19 23 H61" stroke="#7d5e10" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M34 23 H46" stroke="#7d5e10" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M36 20 V26 M40 20 V26 M44 20 V26" stroke="#7d5e10" strokeWidth="1.1" strokeLinecap="round"/>
      </g>
      {/* Neck connecting football to spire */}
      <path d="M35 33 H45 L43.5 40 H36.5 Z" fill="url(#goldGrad)" stroke="#7d5e10" strokeWidth="1.2"/>
      {/* Spire (concave sides, flat-ish top so it doesn't pinch) */}
      <path d="M35.5 40 C 34 58, 30 78, 23 95 L 57 95 C 50 78, 46 58, 44.5 40 Z"
            fill="url(#goldGrad)" stroke="#7d5e10" strokeWidth="1.2"/>
      <path d="M37 43 C 35.5 60, 32 78, 27 93" fill="none" stroke="url(#goldShine)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Base tiers */}
      <rect x="19" y="95"  width="42" height="9"  rx="2.5" fill="url(#goldGrad)" stroke="#7d5e10" strokeWidth="1.2"/>
      <rect x="13" y="104" width="54" height="11" rx="3"   fill="url(#goldGrad)" stroke="#7d5e10" strokeWidth="1.2"/>
    </svg>
  )
}
