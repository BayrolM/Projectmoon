import { useState, useCallback } from "react";

export function useCarousel(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prev = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goTo = useCallback((index: number, current: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrentIndex(index);
  }, []);

  return { currentIndex, direction, next, prev, goTo };
}
