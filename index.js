import{S as l,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function u(n){const o=`https://pixabay.com/api/?key=28678786-a2e7b218e16ae31de09ab66ee&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(s=>{if(!s.ok)throw new Error("Failed to fetch images");return s.json()})}function f(n){return n.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <div class="info">
              <p>Likes: ${e.likes}</p>
              <p>Views: ${e.views}</p>
              <p>Comments: ${e.comments}</p>
              <p>Downloads: ${e.downloads}</p>
          </div>
      </a>
  `).join("")}function d(){document.querySelector(".gallery").innerHTML=""}const m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),c=document.querySelector("#loader"),y=new l(".gallery a");m.addEventListener("submit",n=>{n.preventDefault();const e=document.querySelector(".input").value.trim();if(!e){a.warning({message:"Please enter a search term"});return}d(),c.classList.remove("hidden"),u(e).then(o=>{if(o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}p.innerHTML=f(o.hits),y.refresh()}).catch(o=>{a.error({message:"Error fetching images. Please try again later."})}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
