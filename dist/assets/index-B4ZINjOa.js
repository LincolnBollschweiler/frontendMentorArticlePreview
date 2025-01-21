(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=o=>`
    <div class="attribution">
    Challenge by
    <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
    >
        Frontend Mentor
    </a>. Coded by
    <a
        href="${o}"
            target="_blank"
        rel="noopener noreferrer"
    >
        Lincoln Bollschweiler
    </a>.
    </div>
  `,l="",c={init:()=>($(document).on("click",".social",o=>{const r=$(o.target).data("url");window.open(r,"_blank")}).on("click",".card .share",()=>{$(".share-links").toggleClass("show")}),d)},d=`
  <div class="card">
    <img id="drawers" src="images/drawers.jpg" alt="old timey living room hutch" />
    <div class="card-body flex">
      <p>
        Shift the overall look and feel by adding these wonderful touches to furniture in your home
      </p>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
      </p>
      <div class="flex card-footer">
        <div class="flex author">
          <img src="images/avatar-michelle.jpg" alt="author" />
          <div class="flex author-info">
            <div class="author-name">Michelle Appleton</div>
            <time>28 Jun 2020</time>
          </div>
        </div>
        <div role="button" class="share">
          <div><img src="images/icon-share.svg" alt="share" /></div>
          <div class="flex share-links">
            <div>S H A R E</div>
            <img class="social" src="images/icon-facebook.svg" alt="facebook" data-url="https://www.facebook.com/sharer/sharer.php?u=https://www.frontendmentor.io/" />
            <img class="social" src="images/icon-twitter.svg" alt="twitter" data-url="https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20site%20I%20found%20on%20Frontend%20Mentor%20https://www.frontendmentor.io/" />
            <img class="social" src="images/icon-pinterest.svg" alt="pinterest" data-url="https://pinterest.com/pin/create/button/?url=https://www.frontendmentor.io/&media=&description=Check%20out%20this%20cool%20site%20I%20found%20on%20Frontend%20Mentor" />
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`,u=()=>c.init();$("header").html(l),$("main").html(u),$("footer").html(a("test"));
