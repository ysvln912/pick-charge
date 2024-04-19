import { AnimatePresence } from "framer-motion";
import React from "react";
import * as S from "./OverLay.style";

export interface OverLayProps {
  open: boolean;
  updateOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function OverLay({ open, updateOpen, children }: OverLayProps) {
  return (
    <AnimatePresence>
      {open && (
        <S.Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target !== e.currentTarget) {
              return;
            }
            updateOpen(false);
          }}
        >
          {children}
        </S.Wrapper>
      )}
    </AnimatePresence>
  );
}
