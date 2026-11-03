import {useEffect} from 'react';
/** Match the reference's one-time reveal threshold and reduced-motion behavior. */
export default function useScrollReveal(root,page){useEffect(()=>{
 const content=root.current;if(!content)return;
 const nodes=[...content.querySelectorAll('main .reveal')];
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).has('visual-check')){nodes.forEach(el=>el.classList.add('is-revealed'));return}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target)}}),{threshold:0,rootMargin:'0px 0px -4% 0px'});
 nodes.forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('is-revealed');else{el.classList.remove('is-revealed');observer.observe(el)}});
 return()=>observer.disconnect();
},[page]);}
