
const time=1000;const step=1;(function(){let square=document.querySelector('.out');let observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(typeof getCurrentAnimationPreference==='function'&&!getCurrentAnimationPreference()){return;}
if(entry.isIntersecting){function outNum(num,elem){let e=document.querySelector("#out");n=2800;let t=Math.round(time/(num/step));let interval=setInterval(()=>{n=n+step;if(n==num){clearInterval(interval);}
e.innerHTML=n;},t);}
outNum(3000,"#out");}});});observer.observe(square);})();(function(){let square=document.querySelector('#out1');let observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(typeof getCurrentAnimationPreference==='function'&&!getCurrentAnimationPreference()){return;}
if(entry.isIntersecting){function outNum1(num,elem){let e1=document.querySelector("#out1");n1=4800;let t=Math.round(time/(num/step));let interval=setInterval(()=>{n1=n1+step;if(n1==num){clearInterval(interval);}
e1.innerHTML=n1;},t);}
outNum1(5000,"#out1");}});});observer.observe(square);})();(function(){let square=document.querySelector('#out2');let observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(typeof getCurrentAnimationPreference==='function'&&!getCurrentAnimationPreference()){return;}
if(entry.isIntersecting){function outNum2(num,elem){let e2=document.querySelector("#out2");n2=6800;let t=Math.round(time/(num/step));let interval=setInterval(()=>{n2=n2+step;if(n2==num){clearInterval(interval);}
e2.innerHTML=n2;},t);}
outNum2(7000,"#out2");}});});observer.observe(square);})();(function(){let square=document.querySelector('#out3');let observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(typeof getCurrentAnimationPreference==='function'&&!getCurrentAnimationPreference()){return;}
if(entry.isIntersecting){function outNum3(num,elem){let e3=document.querySelector("#out3");n3=1;let t=Math.round(time/(num/step));let interval=setInterval(()=>{n3=n3+step;if(n3==num){clearInterval(interval);}
e3.innerHTML=n3;},t);}
outNum3(15,"#out3");}});});observer.observe(square);})();let video=document.querySelector("video");const form=document.forms[0];form.addEventListener("submit",function(e){alert("Форма отправлена");});form.addEventListener("change",eventHandler)
form.addEventListener("invalid",eventHandler,true);function eventHandler(e){if(e.target.tagName!="INPUT"){return;}
checkErrorAndSetMessage(e.target);}
function checkErrorAndSetMessage(input){if(input.validity.valueMissing){input.setCustomValidity("Пожалуйста, заполните это поле");}
else if(input.validity.typeMismatch){input.setCustomValidity("Пожалуйста, укажите правильный email адрес");}
else{input.setCustomValidity("");}}