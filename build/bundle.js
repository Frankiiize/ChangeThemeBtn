(()=>{const s=document.querySelector("body"),o=document.querySelector("button"),e=document.querySelector(".toggleContainer"),n=document.querySelector(".toggleContainer__moonSun-element"),a=document.querySelector(".moonSun__holes"),t=document.querySelector(".moonSun__holes-Cut"),d=document.querySelector(".moonSun__clouds-One"),l=document.querySelector(".moonSun__clouds-Two"),i=document.querySelector(".moonSun__starts"),c={ligth:!0,dark:!1};o.addEventListener("animationstart",(()=>{let o=c.ligth?"ligth":"dark";console.log("animation start"),s.className=`${o}`,console.log(o)}),!1),e.addEventListener("click",(()=>{c.ligth&&!1===c.dark?(o.disabled=!0,n.classList.add("ChangeSunToMoonAnimation"),a.classList.add("fadeInAnimation"),t.style.display="flex",a.style.display="flex",t.classList.add("SpandCutAnimation"),d.classList.add("SpandCloudOne"),l.classList.add("SpandCloudTwo"),e.classList.add("ChangeBgColor"),i.classList.add("StarsMove"),e.disabled=!0,c.ligth=!1,c.dark=!0,setTimeout((()=>{n.classList.remove("ChangeSunToMoonAnimation"),a.classList.remove("fadeInAnimation"),t.classList.remove("SpandCutAnimation"),d.classList.remove("SpandCloudOne"),l.classList.remove("SpandCloudTwo"),e.classList.remove("ChangeBgColor"),i.classList.remove("StarsMove"),n.classList.add("toggleContainer__moonSun-elementEndPos"),a.classList.add("moonSun__holes-EndPos"),t.classList.add("moonSun__holes-CutEndPos"),d.classList.add("moonSun__clouds-OneEndPos"),l.classList.add("moonSun__clouds-TwoEndPos"),e.classList.add("toggleContainer-EndPos"),i.classList.add("moonSun__startsEndPos"),e.disabled=!1,o.disabled=!1}),950)):c.dark&&!1===c.ligth&&(o.disabled=!0,c.ligth=!0,c.dark=!1,a.classList.add("fadeInAnimationRev"),n.classList.add("ChangeSunToMoonAnimationRev"),t.classList.add("SpandCutAnimationRev"),d.classList.add("SpandCloudOneRev"),l.classList.add("SpandCloudTwoRev"),e.classList.add("ChangeBgColorRev"),i.classList.add("StarsMoveRev"),e.disabled=!0,setTimeout((()=>{t.style.display="none",a.style.display="none",a.classList.remove("fadeInAnimationRev"),n.classList.remove("ChangeSunToMoonAnimationRev"),t.classList.remove("SpandCutAnimationRev"),d.classList.remove("SpandCloudOneRev"),l.classList.remove("SpandCloudTwoRev"),e.classList.remove("ChangeBgColorRev"),i.classList.remove("StarsMoveRev"),a.classList.remove("moonSun__holes-EndPos"),n.classList.remove("toggleContainer__moonSun-elementEndPos"),t.classList.remove("moonSun__holes-CutEndPos"),d.classList.remove("moonSun__clouds-OneEndPos"),l.classList.remove("moonSun__clouds-TwoEndPos"),e.classList.remove("toggleContainer-EndPos"),i.classList.remove("moonSun__startsEndPos"),e.disabled=!1,o.disabled=!1}),950),a.classList.add("moonSun__holes"),n.classList.add("toggleContainer__moonSun-element"),t.classList.add("moonSun__holes-Cut"),d.classList.add("moonSun__clouds-One"),l.classList.add("moonSun__clouds-Two"),e.classList.add("toggleContainer"),i.classList.add("moonSun__starts"))}))})();