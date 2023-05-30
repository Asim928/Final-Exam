import React from 'react'
import Crud from '../../layout/Crud/Crud'
import Mic from '../../layout/BehindTheMic/Mic'
import {Helmet} from "react-helmet";
import Guests from '../../layout/Guests/Guests';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Crud />
      <Mic />
      <Guests/>
    </>
  )
}

export default Home