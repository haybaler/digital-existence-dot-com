"use client"
import Banner from '@/components/banner'
import ContactForm from '@/components/contact-form'
import SeoMeta from '@/components/seo'
import React from 'react'

export default function Contact_Us() {
    return (
        <>       
         <SeoMeta title="Contact Us | Digital Existence" description="Contact Us Blending digital and analog marketing activities to create holistic go-to-market activities." url="https://digital-existence.com/contact-us" />
            <main>
                <Banner
                    title="Contact Us" />
                <ContactForm />
            </main>
        </>

    )
}
