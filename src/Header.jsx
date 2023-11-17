import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Kancelaria Prawna
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/about" color="inherit">
          O Nas
        </Button>
        <Button component={Link} to="/office" color="inherit">
          Kancelaria
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Kontakt
        </Button>
        <Button component={Link} to="/news" color="inherit">
          Aktualności
        </Button>
      </Toolbar>
    </AppBar>
  );
}
