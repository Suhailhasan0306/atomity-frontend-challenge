import { useEffect, useState } from "react";

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default AnimatedCounter;