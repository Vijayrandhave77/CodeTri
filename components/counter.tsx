"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 120, suffix: "+", label: "Launched Products" },
    { value: 2000, suffix: "", label: "Happy Clients" },
    { value: 20, suffix: "+", label: "Expert Developers" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // ek hi baar chale
        }
      },
      { threshold: 0.4 } // 40% visible hone par
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          World acclaimed leaders the field
        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Super devoted to education introducing creative solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl py-8 px-6 shadow-sm"
            >
              <h3 className="text-3xl font-bold text-gray-900">
                {startCount ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={3}
                  />
                ) : (
                  0
                )}
                {item.value === 2000 && "k"}
                {item.suffix}
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
