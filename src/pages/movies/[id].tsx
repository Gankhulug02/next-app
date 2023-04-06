import React from "react";
import { useRouter } from "next/router";

interface IProps {
  params: [];
}
const Movie = ({ movies }: any) => {
  return <div>{movies.title}</div>;
};

export async function getStaticPath() {
  const ids = [1, 2, 3, 4];
  return {
    paths: ids,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  console.log("params", params);
  const res = await fetch(`http://localhost:8022/movies/${params.id}`);
  const data = await res.json();
  return {
    props: { movies: data.movie },
  };
}

export default Movie;
