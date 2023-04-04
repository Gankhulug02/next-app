"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import axios from "axios";
import style from "../styles/movie.module.css";

export default function Movies(): any {
  const [moviesData, setMoviesData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8022/movies");
      console.log(res.data.movies);
      setMoviesData(res.data.movies);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
        height: "90vh",
        p: 4,
      }}
    >
      {moviesData.map((e: any) => (
        <Card
          key={e._id}
          sx={{
            maxWidth: 345,
            // height: "400px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "100%", height: "400px" }}>
              {/* <CardMedia
                component="img"
                height="100%"
                image={
                  e.poster ||
                  "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
                }
                alt={e.title}
              /> */}
              <Box sx={{ height: "100%", width: "100%" }}>
                <img src={e.poster} alt={e.poster} className={style.img} />
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  0
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {e.plot}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
