const Logo = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    />
  </a>
);
const Header = () => (
  <div className="header">
    <Logo />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
export default Header;
