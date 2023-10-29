import { forwardRef } from "react";

export const Block = forwardRef(({children, id, stopPropagation}, ref) => (
  <div
    ref={ref}
    className={id}
    onClick={(e) => {
      console.log(`%cReact onClick ${id}`, 'color: blue', stopPropagation ? 'stop propagation' : '');
      if (stopPropagation) {
        e.stopPropagation();
      }
    }}
  >
    {id}
    {children}
  </div>
));
