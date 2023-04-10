import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import MyNav from "@/component/nav";

interface IProps {
  params: [];
}

const Movie = ({ movie }: any) => {
  console.log(movie.moviez);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Уншиж байна ...</div>;
  }

  return (
    <div className="min-h-full w-1/2 mx-auto">
      <div>
        {/* <MyNav /> */}
        <div>
          <Image
            src={movie.moviez.poster}
            width={300}
            height={200}
            alt="poster"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <h5 className="font-semibold border-l-2 pl-2 border-red-400">
          MOVIE INFO
        </h5>
        <p>{movie.moviez.plot}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <p className="font-bold">Rating:</p>
            <p>{movie.moviez.imdb.rating}</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Genre:</p>
            {movie.moviez.genres.map((e: string) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Original Language:</p>
            <p>{movie.moviez.languages}</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Director:</p>
            {movie.moviez.directors.map((e: string) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Writer:</p>
            {movie.moviez.writers.map((e: string) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Release Date:</p>
            <p> {movie.moviez.released}</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Run Time:</p>
            <p> {movie.moviez.runtime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

export async function getServerSideProps({ query }: any) {
  console.log("query", query.id);
  const res = await fetch(`http://localhost:8022/movies/${query.id}`);
  const data = await res.json();
  console.log("dasdas", data);

  return {
    props: { movie: data },
  };
}
