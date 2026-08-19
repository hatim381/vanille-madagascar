export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.2s-.7 1-.9 1.2c-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.2-1.3c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.4-1.3-3-1.3-4.4C3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20.2 12 20.2z" />
    </svg>
  )
}

export function Logo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#2E1C11" />
      <path d="M11 6c5 4 8 10 10 20" stroke="#D8B26A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function PodsArt() {
  return (
    <svg viewBox="0 0 240 300" aria-label="Illustration de gousses de vanille">
      <defs>
        <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6B4526" />
          <stop offset=".5" stopColor="#40270F" />
          <stop offset="1" stopColor="#20130A" />
        </linearGradient>
        <linearGradient id="p2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8A5C33" />
          <stop offset="1" stopColor="#33200F" />
        </linearGradient>
      </defs>
      <path d="M70 20c14 6 22 24 24 60 3 60-2 130-12 200-10-56-16-120-16-176 0-46 1-72 4-84z" fill="url(#p1)" />
      <path d="M118 14c15 8 24 30 25 70 2 62-4 138-14 208-11-60-17-128-17-186 0-48 2-78 6-92z" fill="url(#p2)" />
      <path d="M166 26c13 10 20 32 20 70 0 58-6 130-16 190-10-56-15-120-15-174 0-42 3-74 11-86z" fill="url(#p1)" />
      <g stroke="#C9A570" strokeOpacity=".35" strokeWidth="1.2" fill="none">
        <path d="M74 40c6 60 8 140 6 210" />
        <path d="M124 34c6 64 7 148 4 214" />
        <path d="M170 46c4 58 4 138-2 200" />
      </g>
    </svg>
  )
}
