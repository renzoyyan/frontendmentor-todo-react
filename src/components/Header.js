import switchDarkThemeIcon from "../images/icon-moon.svg";
import switchLightThemeIcon from "../images/icon-sun.svg"

const Header = ({theme, setTheme}) => {
  const switchThemeIcon = theme ? switchLightThemeIcon : switchDarkThemeIcon

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <header className="header">
      <h1>Todo</h1>
      <button className="btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Theme" />
      </button>
    </header>
  );
};

export default Header;
