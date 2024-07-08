import React from 'react'
import SectionSecond from './SectionSecond'
import SectionThird from './SectionThird'

const AllSection = () => {
    return (
        <article>
            <div className='mt-[125px] lg:mt-[-135px]'>
                <SectionSecond />
                <SectionThird />
            </div>

        </article>
    )
}

export default AllSection