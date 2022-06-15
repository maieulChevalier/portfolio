import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Rating, useTheme } from "@mui/material";
import { Box } from "@mui/system";

export default function SkillCard(props) {
  const {
    title = "Heading",
    picture,
    gradient = {
      topLeftColor: "#430089",
      bottomRightColor: "#82ffa1",
    },
    level = 5,
  } = props;

  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: "12px",
          backgroundColor: "inherit",
          border: 1,
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.primary.main.concat("35")
              : "white",
        }}
      >
        <CardMedia
          component="img"
          image={picture}
          alt="random"
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            p: 1,
            mr: 2,
            // backgroundColor: theme.palette.primary.light,
            background:
              theme.palette.mode === "light"
                ? `linear-gradient(to right bottom, ${gradient.topLeftColor}, ${gradient.bottomRightColor})`
                : `linear-gradient(to right bottom, ${gradient.topLeftColor.concat(
                    "80"
                  )},
                 ${gradient.bottomRightColor.concat("80")})`,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 900 }}>
            {title}
          </Typography>
          {/* <Typography variant="body2" sx={{ fontWeight: 500 }}> */}
          <Rating
            size="small"
            name="read-only"
            value={level}
            precision={0.5}
            readOnly
            sx={{
              color: theme.palette.text.primary,
            }}
          />
          {/* </Typography> */}
        </Box>
      </Card>
    </Grid>
  );
}
