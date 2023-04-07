import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

interface IProps {
  params: [];
}

const Movie = ({ movie }: any) => {
  const router = useRouter();
  console.log("mm=======>", movie.moviez);

  if (router.isFallback) {
    return <div>Уншиж байна ...</div>;
  }

  return (
    <div className="bg-blue-400 h-full">
      <div className="container mx-auto">
        <h1 className="text-violet-700 text-4xl"> {movie.moviez.title}</h1>
        <div className="group">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
            width={300}
            height={200}
            alt="poster"
          />
          <p className="text-bold">
            year rating
            {/* {movie.year} : {movie.imdb.rating} */}
          </p>
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
