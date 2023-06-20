import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
//
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const AppToolBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    // <header className={css.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>

    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ p: 1}}>
          <Toolbar>

              <Typography variant="h4" component="div" sx={styles.logoTitle}>
                PHONEBOOK
              </Typography>

              <Box sx={{ flexGrow: 1 }} display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Navigation />
              </Box>

                <Box sx={{ flexGrow: 1 }}>
                      {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Box>
          </Toolbar>
        </AppBar>
    </Box>
  );
};


const styles = {
  logoTitle: {
    flexGrow: 1,
    fontSize: 34,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 600,
  }
};
