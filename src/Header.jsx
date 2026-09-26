import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <IconButton onClick={onMenuClick} aria-label="Open menu">
        <MenuIcon />
      </IconButton>

      <h1>Social App</h1>

    </header>
  );
}

export default Header;
