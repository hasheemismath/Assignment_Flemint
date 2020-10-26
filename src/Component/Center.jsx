import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "1000px",
      height: "auto",
      padding: "20px",
      backgroundColor: "#efefef",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  center_head: {
    fontFamily: "Roboto",
    marginBottom: "30px",
  },
  center_title: {
    fontFamily: "Roboto",
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "15px",
  },
  center_label: {
    fontFamily: "Roboto",
    marginBottom: "15px",
    fontSize: "15px",
  },
  center_table: {
    marginTop: "20px",
  },
  center_bottom: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center_bottom__links: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  p: {
    margin: "10px 0px",
    color: "rgb(127, 127, 235)",
    cursor: "pointer",
  },
  rootForm: {
    "& > *": {
      margin: theme.spacing(1),
      width: "500px",
      overflow: "hidden"
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// Adding Details of Table Component

function createData(nameofCompany, duration) {
  return { nameofCompany, duration };
}

const rows = [
  createData("Software Engineer | Blue Tac", "May 2005 - May 2007"),
  createData("Software Engineer | Pinger Textiles", "May 2001 - May 2002"),
];

// Details Of Dialog Box

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Center() {
  // Controls Styling
  const classes = useStyles();

  // Controling Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // Check Button


  const [checked, setChecked] = React.useState(true);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChanged = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className="center">
        <h2 className={classes.center_head}>Employment</h2>
        <p className={classes.center_title}>Add Your Work Experience</p>
        <p className={classes.center_label}>
          Build Your Credibility By showing your past projects and Experience
        </p>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AddCircleOutlineIcon />}
          size="small"
          onClick={handleClickOpen}
        >
          Add Employment
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Add Employment
          </DialogTitle>
          <DialogContent>
            <form className={classes.rootForm} noValidate autoComplete="off">
              <div>
                <TextField
                  id="company"
                  label="Company"
                  style={{ width: "500px" }}
                />
              </div>
              {/* <TextField id="Location_City" label="Location" /> */}
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                ></Select>
              </FormControl>
              <div>
                <TextField id="title" label="Title" style={{width: '500px'}}/>
              </div>
              <FormControl
                className={classes.formControl}
                style={{ display: "inline-block" }}
              >
                <InputLabel id="demo-simple-select-label">Period</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  style={{ display: "inline-block", width: "240px", marginRight: '5px'}}
                >
                  <MenuItem value={10}>Month</MenuItem>
                </Select>
                <Select
                  style={{ display: "inline-block", width: "240px", marginLeft: '5px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  placeholder="Year"
                >
                  <MenuItem value={10}>Year</MenuItem>
                </Select>
              </FormControl>
              {/* <FormControl
                className={classes.formControl}
                style={{ display: "inline-block" }}
              >
                <InputLabel id="demo-simple-select-label">Through</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  style={{ display: "inline-block", width: "240px", marginRight: '5px'}}
                >
                  <MenuItem value={10}>Month</MenuItem>
                </Select>
                <Select
                  style={{ display: "inline-block", width: "240px", marginLeft: '5px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  placeholder="Year"
                >
                  <MenuItem value={10}>Year</MenuItem>
                </Select>
              </FormControl> */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChanged}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="I current work here."
              />
              <br />
              <FormControl className={classes.formControl}>
                  <label style={{fontFamily: 'Roboto'}}>Description</label> 
                <TextareaAutosize aria-label="minimum height" rowsMin={4} placeholder="Describe yourselves in few lines" style={{width: '400px'}}/>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <div className={classes.center_table}>
          <TableContainer
            component={Paper}
            style={{ backgroundColor: "#efefef" }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tile | Company</TableCell>
                  <TableCell align="right">Duration</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.nameofCompany}
                    </TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                    <TableCell align="right">
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.center_bottom}>
          <div className={classes.center_bottom__links}>
            <p className={classes.p}>Skip this Step for now</p>
            <p className={classes.p}>Back</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            href="#contained-buttons"
          >
            Link
          </Button>
        </div>
      </Paper>
    </div>
  );
}
