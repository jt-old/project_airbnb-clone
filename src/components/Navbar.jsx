import { airbnb } from '../assets/images'
export default function Navbar() {
  return (
    <nav>
      <img src={airbnb} alt='logo' className='nav--logo' />
    </nav>
  )
}
