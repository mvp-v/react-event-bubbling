import { forwardRef } from "react";

export const Block = forwardRef(({children, id}, ref) => (
  <div
    ref={ref}
    className={id}
    onClick={(e) => {
      console.log(`%cReact onClick ${id}`, 'color: blue');
    }}
  >
    {id}
    {children}
  </div>
));
