import BoardList from '@/components/BoardList';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const OrganizationIdPage = () => {

  return (
    <div className='flex flex-col w-full mb-20'>
      <Info />
      <Separator className='my-4'/>
      <div className='px-2 md:px-4'>
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage