import React, { useState } from "react";
import * as S from "./PhotoSlider.style";
import { AnimatePresence, wrap } from "framer-motion";
import RightIcon from "../icons/RightIcon";
import LeftIcon from "../icons/LeftIcon";

interface PhotoSliderProps {
  imgs: string[];
  category: "review" | "charging";
}

export default function PhotoSlider({ imgs, category }: PhotoSliderProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const imgIndex = wrap(0, imgs.length, page);

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
    setDirection(newDirection);
  };

  return (
    <S.Container category={category}>
      {imgs.length > 1 && (
        <S.PrevBtn onClick={() => paginate(-1)}>
          <LeftIcon />
        </S.PrevBtn>
      )}
      <S.ImgBox>
        <AnimatePresence initial={false} custom={direction}>
          <S.Img
            key={page}
            src={imgs[imgIndex]}
            custom={direction}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween" },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={imgs.length > 1 ? 1 : 0}
            onDragEnd={(e, { offset, velocity }) => {
              if (imgs.length < 2) {
                return;
              }
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              }
              if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </S.ImgBox>
      {imgs.length > 1 && (
        <S.NextBtn onClick={() => paginate(1)}>
          <RightIcon />
        </S.NextBtn>
      )}
    </S.Container>
  );
}

const imgVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 342 : -342,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 342 : -342,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
