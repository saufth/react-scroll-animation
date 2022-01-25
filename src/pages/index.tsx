import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navigation/Navbar'

/** 
 * The main page of the application
*/
const Home: NextPage = () => (
    <div>

        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <meta name='author' content='[Fernando Torres](https://github.com/saufth)'/>
            <meta name='description' content="React scroll animation" />
            <title>React scroll animation</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Navbar />
        <div className="h-x"></div>

    </div>
)

export default Home
