import { forwardRef } from "react";

export const Block = forwardRef(({ children, id, stopPropagation }, ref) => (
  <div
    ref={ref}
    className={id}
    onClick={(e) => {
      console.log(
        `%cReact onClick ${id} ${stopPropagation ? "stop propagation" : ""}`,
        "color: blue"
      );
      if (stopPropagation) {
        e.stopPropagation();
      }
    }}
  >
    {id}
    {children}
  </div>
));
