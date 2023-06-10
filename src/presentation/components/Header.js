import Logo from "./Logo";

function Header() {
  function NavItem(props) {
    return (
      <button onClick={props.onClick()}>
        <p>{props.title.toUpperCase()}</p>
      </button>
    );
  }

  return (
    <header>
      <nav>
        <div>
          <Logo />
          <NavItem onClick={{}} title="about" />
          <NavItem onClick={{}} title="technologies" />
          <NavItem onClick={{}} title="cv" />
          <NavItem onClick={{}} title="contact" />
        </div>
      </nav>
    </header>
  );
}

export default Header();
