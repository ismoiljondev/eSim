import React from 'react'
import japan from '@/media/japan.webp'
import { HoverEffect } from '../ui/card-hover-effect'
const CountriesData = [
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
]

const Countries = () => {
    return (
        <div className='container mx-auto'>
            <HoverEffect items={CountriesData} />
        </div>
    )
}

export default Countries