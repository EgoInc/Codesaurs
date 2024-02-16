import { ReactComponent as Logo } from './trex.svg'

const Header = () => {
  return (
    <header>
      <div class="nav">
        <a href="#">
          {/* <img src="/logo.png" alt="logo" class="logo" /> */}
          <Logo class="logo" width="100px" />
        </a>
        <a href="#">Все курсы</a>
        <a href="#">Поиск</a>
        <a href="#">О нас</a>
      </div>
      <button>Войти</button>
    </header>
  )
}
export { Header }