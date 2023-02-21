import { useLayoutEffect, useRef } from 'react';

export function useComponentDidUpdate(callback: (...args: any[]) => any) {
  const isMountedRef = useRef(false);

  useLayoutEffect(() => {
    if (!isMountedRef.current) isMountedRef.current = true;
    else callback();
  });
}
