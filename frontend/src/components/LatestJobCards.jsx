import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer'
        >
            {/* Company Info */}
            <div className='mb-4'>
                <h1 className='font-bold  text-lg text-gray-800'>{job?.company?.name || 'Unknown Company'}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            {/* Job Title and Description */}
            <div className='mb-4'>
                <h1 className='font-medium text-xl text-gray-900'>{job?.title || 'Job Title Not Available'}</h1>
                <p className='text-sm text-gray-600 line-clamp-3'>{job?.description || 'No description available for this job.'}</p>
            </div>

            {/* Badges for Job Info */}
            <div className='flex flex-wrap items-center gap-3 mt-4'>
                <Badge className='text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-md' variant="ghost">
                    {job?.position || '0'} Positions
                </Badge>
                <Badge className='text-[#F83002] font-semibold bg-red-50 px-3 py-1 rounded-md' variant="ghost">
                    {job?.jobType || 'Full-Time'}
                </Badge>
                <Badge className='text-[#7209b7] font-semibold bg-purple-50 px-3 py-1 rounded-md' variant="ghost">
                    {job?.salary ? `${job?.salary} LPA` : 'Salary Not Disclosed'}
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
