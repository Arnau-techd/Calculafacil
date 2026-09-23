const euro=x=>Number(x).toLocaleString("es-ES",{style:"currency",currency:"EUR"});
function val(id){return parseFloat(document.getElementById(id).value)}
function out(id,t){document.getElementById(id).textContent=t}
function percentage(){let a=val("p1"),b=val("p2");out("pout",Number.isFinite(a*b/100)?euro(a*b/100):"Introduce los dos valores.")}
function discount(){let p=val("d1"),d=val("d2");if(!Number.isFinite(p)||!Number.isFinite(d))return out("dout","Introduce los dos valores.");let s=p*d/100;out("dout","Final: "+euro(p-s)+" · Ahorras: "+euro(s))}
function iva(){let p=val("i1"),r=val("ir");if(!Number.isFinite(p))return out("iout","Introduce un precio.");let x=p*r/100;out("iout","IVA: "+euro(x)+" · Total: "+euro(p+x))}
function age(){let s=document.getElementById("birth").value;if(!s)return out("aout","Selecciona una fecha.");let b=new Date(s+"T00:00:00"),t=new Date(),a=t.getFullYear()-b.getFullYear(),m=t.getMonth()-b.getMonth();if(m<0||(m===0&&t.getDate()<b.getDate()))a--;out("aout",a>=0?"Tienes "+a+" años.":"Fecha no válida.")}
function grades(){let a=document.getElementById("grades").value.split(",").map(Number).filter(Number.isFinite);out("gout",a.length?"Media: "+(a.reduce((x,y)=>x+y,0)/a.length).toLocaleString("es-ES",{maximumFractionDigits:2}):"Escribe las notas separadas por comas.")}
function rule(){let a=val("ra"),b=val("rb"),c=val("rc");out("rout",a&&Number.isFinite(b)&&Number.isFinite(c)?"Resultado: "+(b*c/a).toLocaleString("es-ES",{maximumFractionDigits:4}):"Introduce A, B y C.")}
function tip(){let a=val("t1"),b=val("t2");if(!Number.isFinite(a)||!Number.isFinite(b))return out("tout","Introduce los dos valores.");let t=a*b/100;out("tout","Propina: "+euro(t)+" · Total: "+euro(a+t))}
function eurusd(){let a=val("euro");out("eout",Number.isFinite(a)?"≈ $"+(a*1.17).toFixed(2)+" USD*":"Introduce una cantidad.")}
function kmmi(){let a=val("km");out("kout",Number.isFinite(a)?(a*.621371).toFixed(2)+" millas":"Introduce kilómetros.")}
function temp(){let a=val("cel");out("tempout",Number.isFinite(a)?((a*9/5)+32).toFixed(1)+" °F":"Introduce una temperatura.")}
function mult(){let a=val("m1"),b=val("m2");out("mout",Number.isFinite(a*b)?(a*b).toLocaleString("es-ES"):"Introduce ambos valores.")}
function save(){let a=val("s1"),b=val("s2");out("sout",Number.isFinite(a*b)?"Total: "+euro(a*b):"Introduce ambos valores.")}
const search=document.getElementById("search"), tools=[...document.querySelectorAll(".tool")], empty=document.getElementById("empty");let category="all";
function filter(){let q=search.value.toLowerCase().trim(),n=0;tools.forEach(t=>{let ok=(category==="all"||t.dataset.cat.split(" ").includes(category))&&t.dataset.search.includes(q);t.style.display=ok?"":"none";if(ok)n++});empty.style.display=n?"none":"block"}
search.addEventListener("input",filter);document.querySelectorAll(".chips button").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".chips .active").classList.remove("active");b.classList.add("active");category=b.dataset.cat;filter()}));
