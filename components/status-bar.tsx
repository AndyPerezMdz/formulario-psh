interface StatusBarProps {
  time: string
}

export default function StatusBar({ time }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between p-2 px-4 bg-black text-white">
      <div className="text-white font-semibold">{time}</div>
      <div className="flex items-center gap-1">
        <div className="h-3 w-4">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 16.5L9 10.5L13.5 15L21 7.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="h-3 w-4">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="bg-white text-black text-xs font-bold rounded px-1">59</div>
      </div>
    </div>
  )
}
