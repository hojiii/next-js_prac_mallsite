import styles from '@/styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <h1 className={styles.title}>
    watchit
    </h1>
    <ul>
      <li>
        <Link href="/movies/1">1번 영화</Link>
      </li>
      <li>
        <Link href="/movies/2">2번 영화</Link>
      </li>
      <li>
        <Link href="/movies/3">3번 영화</Link>
      </li>
    </ul>
    </>
  )
}
