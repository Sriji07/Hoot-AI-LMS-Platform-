import React from 'react'
import DashboardHeader from '../dashboard/_components/DashboardHeader'

const CourseViewLayout = ({ children }) => {
    return (
        <div className='mx-10 md:mx-36 lg:px-44 mt-10'>
            <DashboardHeader />
            <div>
                {children}
            </div>
        </div>
    )
}

export default CourseViewLayout