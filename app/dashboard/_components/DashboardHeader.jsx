import { UserButton } from '@clerk/nextjs';
import React from 'react';

function DashboardHeader() {
    return (
        <div className="w-full px-5 py-4 shadow-md bg-white">
            <div className="max-w-screen-2xl mx-auto flex justify-end">
                <UserButton />
            </div>
        </div>
    );
}

export default DashboardHeader;
