import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Typography,
  Modal,
  Backdrop,
  Fade,
  TextField
} from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: 100
  },
  text: {
    fontFamily: "Berkshire Swash , cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: 35
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20
    }
  },
  subtext: {
    fontFamily: "Berkshire Swash , cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3)
  }
}));

const Header = () => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  //const [input,setInput] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickTextField = () => {
    setValue({ value: value });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              className={classes.text}
            >
              I have no special talent.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" component="h3" className={classes.text}>
              I am only passionately curious.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="left"
              variant="subtitle1"
              component="h3"
              className={classes.subtext}
              style={{ color: "red" }}
            >
              Albert Einstein
            </Typography>
          </Grid>
          <Grid item style={{ paddingTop: 40 }}>
            <span onClick={handleOpen}>
              <ArrowDownward />
            </span>
          </Grid>
        </Grid>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">PassCode):</h3>
            <div id="transition-modal-description">
              <form noValidate autoComplete="off">
                <TextField
                  id="filled-password-input"
                  label="Insert pass code"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  onSubmit={onClickTextField}
                />
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};
export default Header;
