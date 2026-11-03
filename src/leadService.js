/** Configure a project-owned endpoint; no requests go to the reference backend. */
export async function submitLead(data){
 const endpoint=import.meta.env.VITE_LEAD_ENDPOINT;
 if(!endpoint)throw new Error('Ariza yuborish xizmati hali ulanmagan. Iltimos, +998 (78) 777 77 57 raqamiga qo‘ng‘iroq qiling.');
 const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
 if(!response.ok)throw new Error('Yuborilmadi. Iltimos, qayta urinib ko‘ring.');
 return response.json();
}

/** Optional project-owned scoring service. The original scores on its server. */
export async function submitQuiz(answers){
 const endpoint=import.meta.env.VITE_QUIZ_ENDPOINT;
 if(!endpoint)throw new Error('Test natijasini hisoblash xizmati hali ulanmagan. Bepul maslahat uchun biz bilan bog‘laning.');
 const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({answers})});
 if(!response.ok)throw new Error('Natijani yuklab bo‘lmadi.');
 return response.json();
}
