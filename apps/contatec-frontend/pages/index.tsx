import Head from "next/head"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import Hero from "../sections/Home/Hero"
import React from "react"
import OurCategories from "../sections/Home/OurCategories"
import Reason from "../sections/Home/Reason"
import JoinUs from "../sections/Home/JoinUs"
import FeaturedServices from "../sections/Home/FeaturedServices"
import Layout from "../components/Layout"

SwiperCore.use([Autoplay, Navigation])

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout withNav withFooter>
        <Hero />
        <FeaturedServices />
        <Reason />
        <OurCategories />
        <JoinUs />
      </Layout>
    </div>
  )
}