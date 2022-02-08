import React from 'react';
import {
  TextField,
  InputAdornment,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import {Link, AddBoxOutlined} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  container:{
    display: "flex",
    alignItems: "center"
  },
  urlInput:{
    margin:theme.spacing(1)
  },
  addSongButton:{
    margin: theme.spacing(1)
  },
  dialog:{
    textAlign:"center"
  },
  thumbnail:{
    width: "90%"
  }
}));


function AddSong()
{
  const classes = useStyles();
  const handleCloseDialog = () => {
    setDialog(false);
  }
  const [dialog, setDialog] = React.useState(false);
  return(
    <div className={classes.container}>
      <Dialog open={dialog} onClose={handleCloseDialog} className={classes.dialog}>
        <DialogTitle>
          Edit Song
        </DialogTitle>
        <DialogContent className={classes.thumbnail}>
          <img
            src="https://i.scdn.co/image/ab67616d0000b27373e6084107460bb0070aea52"
            alt="Song Thumbnail" />
          <TextField
            margin="dense"
            name="title"
            label="Title"
            fullWidth
            />
          <TextField
            margin="dense"
            name="artist"
            label="Artist"
            fullWidth
            />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        className={classes.urlInput}
        placeholder="Enter youtube or soundcloud URL"
        fullWidth
        margin="normal"
        type="url"
        InputProps = {{
          startAdornment:(
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        )}} />
        <Button
          className ={classes.addSongButton}
          onClick = {() => setDialog(true)}
          varaint="contained"
          color="primary"
          endIcon={<AddBoxOutlined />}>
          Add
        </Button>
    </div>
  )
}

export default AddSong;
