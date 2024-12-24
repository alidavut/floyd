import { PiCircleNotch } from 'react-icons/pi'

export function Spinner() {
  return (
    <span>
      <PiCircleNotch size={24} className="animate-spin" />
    </span>
  )
}
