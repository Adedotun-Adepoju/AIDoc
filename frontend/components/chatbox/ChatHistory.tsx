"use client"

import React, { useEffect, useState } from 'react';
import { AiLogoWhiteIcon, BackIcon, DashboardIcon, LogoutIcon, ProfileIcon, SpecialistIcon } from '../icons';
import { formatDate, getConversations, getConversationsType } from '@/utils';
import SideBar from './SideBar';
import Link from 'next/link';

const queriesFromDatabase = [
  { title: 'Query 1', date: '2023-11-25T12:30:00Z' },
  { title: 'Query 2', date: '2023-11-24T08:45:00Z' },
  { title: 'Query 3', date: '2023-11-23T15:20:00Z' },
  { title: 'Query 4', date: '2023-11-22T09:10:00Z' },
  { title: 'Query 5', date: '2023-11-21T18:55:00Z' },
  { title: 'Query 6', date: '2023-11-20T11:40:00Z' },
  { title: 'Query 7', date: '2023-11-19T07:25:00Z' },
  { title: 'Query 8', date: '2023-11-18T14:15:00Z' },
  { title: 'Query 9', date: '2023-11-17T10:05:00Z' },
  { title: 'Query 10', date: '2023-11-16T22:50:00Z' },
];

export type ConversationHistoryType = {
  id: string;
  title: string;
  cycles_number: number;
  user_id: string;
  created_at: string; // Assuming this is a string representation of a date
  updated_at: string; // Assuming this is a string representation of a date
};
const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYmU4ODQ2NC0yOTFiLTRmMzktYmJmMi0yNzgzNDZmYjM3YTgiLCJ1c2VybmFtZSI6ImQuZS5hZGVwb2p1QGdtYWlsLmNvbSIsImlhdCI6MTcwMDkzMDIyMywiZXhwIjoxNzAxMTg5NDIzfQ.nrJsCxnzZ95x_9xpn0ILMWxG9S03yDQFHjSfEuyW2eM`;

const user_id = '1be88464-291b-4f39-bbf2-278346fb37a8'

const ChatHistory = ({...props}) => {
  const [history, setHistory] = useState<ConversationHistoryType[]>([]);

  useEffect(() => {
    const getHistory = async () => {
      const history = await getConversations({token, user_id});
      setHistory(history.data);
      console.log(`Trying to get the datya array: ${history.data}`);
    }
    getHistory();
  }
  , [props.currentConvoId]);

  return (
    <section className='blueLight mx-auto flex flex-col justify-between h-full py-8 p-5'>
      <AiLogoWhiteIcon className="w-30 h-16 mx-auto" />
      <aside className='text-white xl:hidden flex gap-3'>
        <Link href="/" className='flex justify-center py-2 px-2 border bg-blueLight/20 border-grayLight rounded-lg mt-4 w-full hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>
          <DashboardIcon className="w-5 h-5" fill='#fff' />
        </Link>
        <Link href="/profile" className='flex justify-center py-2 px-2 border bg-blueLight/20 border-grayLight rounded-lg mt-4 w-full hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>
          <ProfileIcon className="w-5 h-5" fill='#fff' />
          
        </Link>
        <Link href="/connect-specialist" className='flex justify-center py-2 px-2 border bg-blueLight/20 border-grayLight rounded-lg mt-4 w-full  hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>
          <SpecialistIcon className="w-5 h-5" fill='#fff' />
           
        </Link>
      </aside>
      <div>
        <h3 className='text-white font-semibold py-4 mb-6 border-b border-blueLight/50'>History</h3>
        <div>
          {history.length > 0 ? (
            history.slice(0,7).map((query, index) => (
              <div key={index} className="flex items-start flex-col justify-between bg-black/30 rounded-lg py-2 px-4 relative mb-2 max-h-[400px] overflow-hidden overflow-y-auto  hover:bg-black/20 transition-all duration-200 ease-in-out hover:scale-105">
                <p className='text-white font-semibold capitalize text-xs'>{query.title}</p>
                <p className='text-grayLight uppercase text-[10px]'>{formatDate(query.created_at)}</p>
                <BackIcon fill='#fff' className="w-3 h-3 text-white transform rotate-180 absolute right-8 top-1/2 -translate-y-1/2" />
              </div>
            ))
          ) : (
            <p className='text-white text-sm text-center'>No history yet</p>
          )}
        </div>
      </div>
      <button type='button' className='w-max rounded-xl flex gap-2 px-4 py-2 text-white bg-blueLight/10 hover:bg-blueLight/20 hover:text-red transition-all duration-200 ease-in-out hover:scale-105 '>
        <LogoutIcon className="w-6 h-6" />
        Logout
      </button>
    </section>
  );
};

export default ChatHistory;
