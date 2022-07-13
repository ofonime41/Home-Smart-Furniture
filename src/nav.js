
export function hambugerMenu(){
const btn = document.getElementById('menu-btn');
const menu=document.getElementById('menu');
btn.addEventListener('click',()=>{  
 btn.classList.toggle('open');
 menu.classList.toggle('top-[0]');
//  btn.classList.toggle('z-20');
 menu.classList.toggle('z-10');
 menu.classList.toggle('opacity-[1]');

 
});
}