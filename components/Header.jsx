import { Logo } from '@/components/Logo'

const Header = () => {
  return (
    <header className="flex w-full items-end justify-between">
      <Logo />
      <button className="text-sm text-accent">Hide completed</button>
    </header>
  )
}

export default Header
