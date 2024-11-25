"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";
export default function useInfiniteLoading(options, query) {
  const ref = useRef(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, page];
}
