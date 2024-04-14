import { HTMLAttributes, ReactNode } from "react";

type CSSAlignment =
  | "start"
  | "end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "baseline";

type Props = {
  gapPX?: number;
  marginBlockPX?: string;
  children: ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?: CSSAlignment;
  alignItems?: CSSAlignment;
} & HTMLAttributes<Omit<HTMLDivElement, "display">>;

export const FlexBox = ({
  gapPX,
  marginBlockPX,
  children,
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center"
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gapPX ? `${gapPX}px` : "8px",
        marginBlock: marginBlockPX ? `${marginBlockPX}px` : "8px"
      }}
    >
      {children}
    </div>
  );
};
