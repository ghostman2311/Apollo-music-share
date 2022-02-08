import React from 'react';
import {
  Typography,
  Avatar,
  IconButton,
  makeStyles, useMediaQuery} from '@material-ui/core';
import {Delete} from '@material-ui/icons';

const useStyles = makeStyles({
  container:{
    display:'grid',
    gridAutoFlow:'column',
    gridTemplateColumns:'50px auto 50px',
    gridGap:12,
    alignItems:'center',
    marginTop:10
  },
  songInfoContainer:{
    overflow:'hidden',
    whitespace:'nowrap'
  },
  avatar:{
    width:44,
    height: 44
  },
  text:{
    textOverflow: 'ellipsis',
    overflow:'hidden'
  }
})

function QueuedSongList()
{
  const song = {
    title: "Old Skool",
    artist: "Sidhu moose wala",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b27373e6084107460bb0070aea52"
  }
  const smallerThanSm = useMediaQuery(theme => theme.breakpoints.up('md'));
  return(
    smallerThanSm && (<div style={{margin: '10px 0'}}>
      <Typography color="textSecondary" variant='button'>
        QUEUE(5)
      </Typography>
      {Array.from({length:10}, () => song).map((song, index) => {
        return <QueuedSong key={index} song={song} />
      }) }
    </div>)
  )
}

function QueuedSong({song}){
  const classes = useStyles();
  const {title, artist, thumbnail} = song;
  return(
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={thumbnail} alt="Song thumbnail" />
      <div className={classes.songInfoContainer}>
        <Typography variant="subtitle2" className={classes.text}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.text}>
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color='error' />
      </IconButton>
    </div>
  )
}

export default QueuedSongList;
