"use client"
import Banner from '@/components/banner'
import Grow_Business from '@/components/grow-business'
import Our_Strategy from '@/components/our-strategy'
import Services from '@/components/services'
import React from 'react'
import { client } from '../../sanity/lib/client'
import { AboutPage, NavMenu } from '../../sanity/lib/query'
import SeoMeta from '@/components/seo'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function About_Us({ aboutPageData ,navMenuData }: any) {
    const { about_sub_title, about_title, pagebanner, content, Features } = aboutPageData
    return (
        <>
            <SeoMeta title="About Us | Digital Existence" description="Blending digital and analog marketing activities to create holistic go-to-market activities." url="https://digital-existence.com/about-us" />
            <Header data={navMenuData} />
            <main>
                <Banner
                    title={pagebanner?.banner_title}
                    bg={pagebanner?.banner_image.asset.url}
                />
                <Our_Strategy
                    title={about_title}
                    subTitle={about_sub_title}
                    data={content}
                />
                <Services feature={Features} />
                <Grow_Business />
                <Footer data={navMenuData} />
            </main>
        </>
    )
}


export async function getServerSideProps() {
    const aboutPageData = await client.fetch(AboutPage);
    const navMenuData = await client.fetch(NavMenu);
    return {
        props: {
            aboutPageData: aboutPageData[0],
            navMenuData : navMenuData[0],
            preview: true
        }
    };
}