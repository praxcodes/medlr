
import Head from 'next/head';
import styles from '../styles/Layout.module.css'

export default function Home({}) {
  return (
    <div className={styles.container}>
      <h1>Welcome to Medlr</h1>
      <p>Find the best prices for medicines from various suppliers and pharmacies</p>
     
    </div>
  )
}
/*
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
*/