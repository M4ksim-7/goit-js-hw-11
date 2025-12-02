import{a as p,S as g,i}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="53485925-ce0cf73790b8d8f557c3a40d7";async function b(a){const s={key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return(await p.get(y,{params:s})).data}const c=document.querySelector(".gallery"),l=document.getElementById("loader"),v=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const s=a.map(r=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:o,views:u,comments:m,downloads:f}=r;return`
<li>
<a href="${e}">
<img class="card-img" src="${n}" alt="${t}" loading="lazy" />
</a>
<div class="card-info">
<div><b>Likes</b><span>${o}</span></div>
<div><b>Views</b><span>${u}</span></div>
<div><b>Comments</b><span>${m}</span></div>
<div><b>Downloads</b><span>${f}</span></div>
</div>
</li>`}).join("");c.insertAdjacentHTML("beforeend",s),v.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function E(){l.classList.add("is-hidden")}const d=document.querySelector(".form"),P=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async a=>{a.preventDefault();const s=P.value.trim();if(!s){i.warning({title:"Warning",message:"Please type something to search."});return}w(),S();try{const r=await b(s);if(!r||!Array.isArray(r.hits)||r.hits.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r.hits),i.success({title:"Success",message:`Found ${r.hits.length} images.`})}catch(r){console.error(r),i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{E()}});
//# sourceMappingURL=index.js.map
