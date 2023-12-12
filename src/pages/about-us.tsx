"use client"
import Banner from '@/components/banner'
import Grow_Business from '@/components/grow-business'
import Our_Strategy from '@/components/our-strategy'
import Services from '@/components/services'
import React from 'react'
import { client } from '../../sanity/lib/client'
import { AboutPage } from '../../sanity/lib/query'

export default function About_Us({aboutPageData}:any) {
    console.log("🚀 ~ file: about-us.tsx:11 ~ About_Us ~ aboutPageData:", aboutPageData)
    return (
        <main>
            <Banner
                title="About Us" />
            <Our_Strategy />
            <Services />
            <Grow_Business />
        </main>
    )
}


export async function getServerSideProps() {
    const aboutPageData = await client.fetch(AboutPage);
    return {
      props: {
        aboutPageData : aboutPageData[0],
        preview: true
      }
    };
  }