import {useEffect} from 'react';

export const DomLogger = ({element, id}) => {
  useEffect(() => {
    const node = element.current ?? element;
    if (!node) return;
    function log() {
      console.log(`%cDOM click ${id}`, 'color: green');
    }

    function logCapture() {
      console.log(`%cDOM capture click ${id}`, 'color: red');
    }

    node.addEventListener("click", logCapture, {capture: true});
    node.addEventListener("click", log);
    return () => {
      node.removeEventListener("click", logCapture, {capture: true});
      node.removeEventListener("click", log);
    };
  }, [element, id]);
  return null;
}