export function $(sel, root=document){ return root.querySelector(sel); }
export function $all(sel, root=document){ return [...root.querySelectorAll(sel)]; }

export function fadeIn(el){
  el.animate(
    [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0px)' }],
    { duration: 450, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
  );
}