"use client";

import { useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => setTime(new Date().toLocaleTimeString());

  setInterval(updateTime, 1000);

  return <time className="font-mono text-xs" dateTime={time} suppressHydrationWarning>{time}</time>;
}
