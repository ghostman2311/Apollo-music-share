import React from 'react';
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  makeStyles} from '@material-ui/core';
import {PlayArrow, Save} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container:{
    margin: theme.spacing(3)
  },
  songInfoContainer:{
    display: 'flex',
    alignItems:'center',
  },
  songInfo:{
    width:'100%',
    display:'flex',
    justifyContent: 'space-between'
  },
  thumbnail:{
    objectFit: 'cover',
    width: 140,
    height: 140
  }
}))

function SongList()
{


  const song = {
    title: "Old Skool",
    artist: "Sidhu moose wala",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b27373e6084107460bb0070aea52"
  }
  let isLoading = false;
  if(isLoading)
  {
    return(
      <div>
        <CircularProgress />
      </div>
    )
  }
  return(
    <div>{Array.from({length:10}, () => song).map((song, index) => {
      return <Song song={song} key={index} />
    })}</div>
  )
}


function Song({song}){
  const classes = useStyles();
  const {artist, thumbnail, title} = song;
  return(
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia className={classes.thumbnail} image={thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterbottom ="true" variant="h5" component="h2">
              {title}
            </Typography>
            <Typography  variant="body1" component="p" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton size="small" color="secondary">
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  )
}

export default SongList;
