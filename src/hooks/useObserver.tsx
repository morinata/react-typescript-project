import {useEffect, useRef} from 'react';

export const useObserver = (ref: any, canLoad: boolean, isLoading: any, callback: any) => {
  const observer = useRef<any>();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb = (entries: any) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};