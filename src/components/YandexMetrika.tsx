import { useEffect } from "react";

export default function YandexMetrika() {
  useEffect(() => {
    // This code will only run on the client
    const script = document.createElement("script");
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.webvisor.org/metrika/tag_ww.js", "ym");
      
      ym(98696884, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);

    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.src = "https://mc.yandex.ru/watch/98696884";
    img.style.position = "absolute";
    img.style.left = "-9999px";
    img.alt = "";
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, []);

  return null;
}
