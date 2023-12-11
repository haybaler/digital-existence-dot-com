import Banner from '@/components/banner'
import Grow_Business from '@/components/grow-business'
import Our_Strategy from '@/components/our-strategy'
import Services from '@/components/services'
import React from 'react'

export default function About_Us() {
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
