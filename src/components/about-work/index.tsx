import React from 'react'
import Title from '../title'
import { Cards } from './cards'

const AboutWork = () => {
    return (
        <div className='container mx-auto my-12 flex flex-col justify-center gap-6'>
            <Title desc='milliy_sim_easy' title='how_milliy_sim_works' />
            <Cards />
        </div>
    )
}

export default AboutWork