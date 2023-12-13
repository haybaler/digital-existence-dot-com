"use client"
import Banner from '@/components/banner'
import Grow_Business from '@/components/grow-business'
import Our_Strategy from '@/components/our-strategy'
import Services from '@/components/services'
import React from 'react'
import { client } from '../../sanity/lib/client'
import { AboutPage } from '../../sanity/lib/query'
import SeoMeta from '@/components/seo'

export default function About_Us({ aboutPageData }: any) {
    const { about_sub_title, about_title, pagebanner, content, Features } = aboutPageData
    return (
        <>
            <SeoMeta title="About Us | Digital Existence" description="Blending digital and analog marketing activities to create holistic go-to-market activities." url="https://digital-existence.com/about-us" />

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
            </main>
        </>
    )
}


export async function getServerSideProps() {
    const aboutPageData = await client.fetch(AboutPage);
    return {
        props: {
            aboutPageData: aboutPageData[0],
            preview: true
        }
    };
}