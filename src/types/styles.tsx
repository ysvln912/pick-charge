import { css } from "styled-components";

export interface ObjMap {
  [key: string]: ReturnType<typeof css>;
}

export type SizeType = "sm" | "md" | "lg" | "full";
export type ColorType = "default" | "primary";
export type ShapeType = "default" | "round";
