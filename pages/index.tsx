import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mempool Analyzer</title>
        <meta name="description" content="Mempool observer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Mempool Analyzer</Heading>
    </div>
  )
}

export default Home
