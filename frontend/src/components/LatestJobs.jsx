// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 
// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs


import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className='max-w-7xl mx-auto my-20 px-5'>
            <h1 className='text-4xl font-bold mb-8'>
                <span className='text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>Latest & Top</span> 
                Job Openings
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allJobs.length <= 0 
                        ? <span className='col-span-full text-center text-gray-500'>No Job Available</span> 
                        : allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                }
            </div>
        </div>
    );
}

export default LatestJobs;
