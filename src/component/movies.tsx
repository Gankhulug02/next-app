"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MyPagination from "@/component/pagination";

interface IMovie {
  _id: string;
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}

export default function Movies({
  movies,
  filter,
}: {
  movies: IMovie[];
  filter: string;
}) {
  console.log(movies);
  return (
    <div>
      <div className="grid grid-cols-5 gap-7 max-w-6xl min-h-screen bg-white p-5">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <div
              key={movie._id}
              className="max-w-fit max-h-96 overflow-hidden rounded-lg  "
            >
              <div className=" items-center h-4/5	">
                <Image
                  src={
                    movie.poster ||
                    "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg"
                  }
                  alt="img"
                  width={250}
                  height={200}
                  className="h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col h-1/4 p-2">
                <div className="flex gap-2">
                  <div>
                    <p>🍿{movie.imdb.rating || 4.5}</p>
                  </div>
                  <div>🍅{movie.tomatoes ? 5.3 : 2}</div>
                </div>
                <div className="w-full h-6 overflow-hidden ">
                  <p className="">{movie.title}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MyPagination />
    </div>
  );
}

//
//   /* <Box */
//
//   sx={{
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     width: "100%",
//     height: "90vh",
//     p: 4,
//   }}
// >
//   {movies.map((e: any) => (
//     <Card
//       key={e._id}
//       sx={{
//         maxWidth: 345,
//         // height: "400px",
//       }}
//     >
//       <CardActionArea
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box sx={{ width: "100%", height: "400px" }}>
//           <CardMedia
//             component="img"
//             height="100%"
//             image={
//               e.poster ||
//               "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
//             }
//             alt={e.title}
//           />
//           {/* <Box sx={{ height: "100%", width: "100%" }}>
//             <img src={e.poster} alt={e.poster} className={style.img} />
//           </Box> */}
//         </Box>
//         <CardContent>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography gutterBottom variant="h5" component="div">
//               {e.title}
//             </Typography>
//             <Typography gutterBottom variant="h5" component="div">
//               0
//             </Typography>
//           </Box>
//           <Typography variant="body2" color="text.secondary">
//             {e.plot}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   ))}
// </Box>
