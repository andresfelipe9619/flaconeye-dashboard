import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

export default function ReportCard({
  title,
  percentage,
  accumulated,
  currentValue,
  currentDate,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item md={12} className={classes.titleBox}>
            <Typography
              align="left"
              gutterBottom
              className={classes.title}
            >
              {title}
            </Typography>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid container item md={12} alignItems="center" spacing={2}>
            <Grid item md={5} alignItems="center" className={classes.accBox}>
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
                gutterBottom
              >
                {isNaN(percentage) ? `Hasta ${currentDate}` : "Acumuladas"}
              </Typography>
              <Typography color="textSecondary" align="center" gutterBottom>
                {accumulated}
              </Typography>
            </Grid>
            <Grid container item md={7}>
              <Grid item md={12} className={classes.borderBox}>
                <Typography color="textSecondary" align="center" gutterBottom>
                  {currentDate}
                </Typography>
              </Grid>
              <Grid item md={12} container>
                {isNaN(percentage) ? (
                  <Grid item md={6}>
                    <Typography
                      color="textSecondary"
                      align="center"
                      gutterBottom
                    >
                      {currentValue}
                    </Typography>
                  </Grid>
                ) : (
                  <PercentageBlock {...{ classes, currentValue, percentage }} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const PercentageBlock = ({ classes, currentValue, percentage }) => (
  <>
    <Grid item md={6} className={classes.accBox}>
      <Typography color="textSecondary" align="center" gutterBottom>
        {currentValue}
      </Typography>
    </Grid>
    <Grid item md={6}>
      <Typography color="textSecondary" align="right" gutterBottom>
        {percentage}%
      </Typography>
    </Grid>
  </>
);

const borderStyle = (theme) => [[1, "solid", theme.palette.divider]];
const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontWeight: "bold",
  },
  titleBox: { marginBottom: 10 },
  accBox: {
    borderRight: borderStyle(theme),
  },
  borderBox: {
    borderBottom: borderStyle(theme),
  },
}));
