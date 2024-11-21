"use client";

import { useEffect, useState } from "react";

export default function Seconds({serverRenderTime}: {serverRenderTime: number}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    function setTime() {
      setNow(Date.now());
      requestAnimationFrame(setTime);
    }

    setTime();
  }, []);

  const seconds = now ? Math.floor((now - serverRenderTime) / 1000) : 0;

  return <span>{seconds}</span>;
}
