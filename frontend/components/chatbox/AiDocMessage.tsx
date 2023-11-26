import React, { useState, useEffect } from 'react';
import { cx } from '@/utils';
import { AiDocLogo } from '../icons';

interface AiDocMessageProps {
  content: string;
  speed?: number;
}

const AiDocMessage: React.FC<AiDocMessageProps> = ({ content, speed = 20 }) => {
  const [typedContent, setTypedContent] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;
  
    const typingInterval = setInterval(() => {
      setTypedContent(content.substring(0, currentIndex));
      currentIndex++;
      // 
  
      if (currentIndex > content.length) {
        clearInterval(typingInterval);
      }
    }, speed);
  
    return () => {
      clearInterval(typingInterval);
    };
  }, [content, speed]);


  return (
      <div className={cx('flex items-start w-full py-2')}>
        <div className=' py-3'><AiDocLogo className={cx('w-12 h-12 mr-2 rounded-full border border-blueDark-200')} /></div>
        <div className='p-3 rounded-lg flex flex-col'>
          <span className='text-blueDark-200 text-base font-semibold'>AiDoc</span>
          <span className={cx('text-black text-base leading-tight font-medium', 'whitespace-pre-wrap')}>{typedContent}
          </span>
        </div>
    </div>
  );
};

export default AiDocMessage;
