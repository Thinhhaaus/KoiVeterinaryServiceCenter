import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
function KoiFood() {
    return (
        <>
            <>
                {/* Navigation Bar */}
                <Header></Header>
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>Standard Care for Koi Fish</h1>
                        <p>
                            Our Standard Care feature provides essential information on proper Koi
                            fish care. From daily maintenance tips to best practices for feeding,
                            cleaning, and monitoring health, this guide ensures your Koi receive the
                            highest standard of care to stay healthy and thrive.
                        </p>
                    </div>
                </section>
                {/* Food for Koi Fish Section */}
                <section className="container">
                    <h1 className='text-center'>Food for Koi Fish</h1>
                    <div className="image-container d-flex justify-content-center align-items-center">
                        <img src="public/img/koi12.webp" alt="Food for Koi Fish" />
                    </div>
                </section>
                {/* Footer */}
                <Footer></Footer>
            </>
        </>
    )
}

export default KoiFood