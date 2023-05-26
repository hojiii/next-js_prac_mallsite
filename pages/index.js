import { useEffect, useState } from 'react';
import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import axios from '@/lib/axios';

//정적 생성을 했을때 프롭으로 내려줄 값을 만드는 함수
export async function getStaticProps() {
    const res = await axios.get('/movies/');
    const movies = res.data.results ?? []
    return{
      props: {
        movies
      },
  }
}


export default function Home({movies}) {

  return (
    <>
        <SearchForm />
        <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}