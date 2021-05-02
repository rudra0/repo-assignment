import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CardMedia } from '@material-ui/core';

export default function ProductCard({product}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={product?.owner?.avatar_url} 
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product?.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {product?.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Typography variant="subtitle1" color="textPrimary" className={classes.controlText}>
            Stars: {product?.stargazers_count}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" className={classes.controlText}> 
          Issues: {product?.open_issues_count}
          </Typography>
          
          <Typography variant="subtitle1" color="textPrimary" >
          Submitted by {product?.owner?.login}
          </Typography>
        </div>
      </div>
      
    </Card>
      
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 140,
    height: 140
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft:20
    
  },
  controlText:{marginRight: 20, borderStyle:"outset", width:150, textAlign: "center"}
 
});
