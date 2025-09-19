import React from 'react'
import Title from '../title'
import { Content } from './content'

const WhyUs = () => {
    return (
        <div className='container mx-auto flex flex-col gap-4'>
            <Title title='why_milliy_sim' desc='why_milliy_sim_desc' />
            <Content />
        </div>
    )
}

export default WhyUs