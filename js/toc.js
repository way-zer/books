!function(){"use strict";var t=document.getElementById("header").clientHeight,n=document.getElementById("article-toc"),e=document.getElementById("article-toc-top");if(n){var o=document.getElementById("footer").clientHeight;document.getElementById("article-toc-inner").style["margin-bottom"]=o+"px",window.addEventListener("scroll",function(){window.requestAnimationFrame(c)}),c(),e.addEventListener("click",function(e){e.preventDefault(),document.scrollingElement.scrollTop=0})}function c(){var e=document.scrollingElement.scrollTop;t<e?n.classList.add("fixed"):n.classList.remove("fixed")}}();