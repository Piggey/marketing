import { Typography, Link } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ftims.edu.p.lodz.pl/user/profile.php?id=20396">
        Dawid Sośnia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
