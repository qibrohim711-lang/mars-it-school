import React,{useEffect,useState} from 'react';
export default function Lightbox({image,onClose}){
 const [index,setIndex]=useState(image.index||0);
 const photos=image.photos||[image];
 const move=direction=>setIndex(i=>(i+direction+photos.length)%photos.length);
 useEffect(()=>{const fn=e=>{if(e.key==='Escape')onClose();if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)};document.addEventListener('keydown',fn);return()=>document.removeEventListener('keydown',fn)},[onClose]);
 return <div className="replica-modal" role="dialog" aria-modal="true" aria-label={photos[index].alt} onClick={onClose}><button className="replica-close" autoFocus onClick={onClose} aria-label="Yopish">×</button>{photos.length>1&&<button className="replica-photo-prev" aria-label="Oldingi foto" onClick={e=>{e.stopPropagation();move(-1)}}>‹</button>}<img className="replica-lightbox-image" src={photos[index].src} alt={photos[index].alt} onClick={e=>e.stopPropagation()}/>{photos.length>1&&<button className="replica-photo-next" aria-label="Keyingi foto" onClick={e=>{e.stopPropagation();move(1)}}>›</button>}</div>
}
