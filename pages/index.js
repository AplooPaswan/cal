import { Paper } from '@mui/material';
import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/material/styles';
import Head from 'next/head'
import Image from 'next/image'
import App from './App'

export default function Home() {

  const theme= createMuiTheme({
    palette:{
      type:'dark'
    }
  })
  return (
    <div >
      <Head>
        <title>Fanancial Calculator</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="description" content="Fanancial Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      
          <App />
     


    </div>
  )
}
