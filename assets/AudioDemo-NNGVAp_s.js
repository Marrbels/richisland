import{r as e}from"./rolldown-runtime-hePW80VL.js";import{n as t,t as n}from"./jsx-runtime-BNakU3Ej.js";import{i as r,n as i,o as a,r as o,t as s}from"./audio-I7Qz8BhA.js";import{t as c}from"./credits-DFEojJdZ.js";var l=e(t(),1),u=n(),d=[[`Interface`,[`ui-click`,`ui-hover`,`ui-open`,`ui-close`,`ui-error`]],[`Cards`,[`card-deal`,`card-flip`,`card-pick`]],[`Gold`,[`coin`,`coins`,`coin-loss`]],[`Dice`,[`dice-shake`,`dice-land`]],[`Board`,[`step-bridge`,`splash`,`explosion`,`bridge-repair`,`kraken-roar`,`swap-harpoon`,`duel-clash`,`magic-block`,`freeze`,`gavel`]],[`Turn and round`,[`turn-yours`,`turn-start`,`round-start`,`timer-tick`,`timer-urgent`,`final-reached`]],[`Start lights`,[`light-on`,`lights-go`,`false-start`]],[`End of game`,[`victory`,`defeat`]]],f=new Set(d.flatMap(([,e])=>e)),p=r.filter(e=>!f.has(e)),m=p.length?[...d,[`Other`,p]]:d,h={menu:`Menu`,voyage:`Voyage`,finale:`Finale`,"voyage-orchestra":`Pirate's Orchestra`,"voyage-seaside":`Seaside Village`,"voyage-treasure":`Treasure Hunter`,"voyage-merchants":`Merchants`},g=`
.ad {
  --abyss: #0f2c3a;
  --lagoon: #2a86c4;
  --sailcloth: #f4e7c9;
  --doubloon: #f0b429;
  --coral: #e0533f;
  --teak: #6e4526;
  --ink: #2b2118;
  min-height: 100dvh;
  background: var(--abyss);
  color: var(--sailcloth);
  font-family: ui-rounded, "SF Pro Rounded", system-ui, -apple-system, "Segoe UI", sans-serif;
  padding: 28px 16px 64px;
}
.ad-inner { max-width: 1040px; margin: 0 auto; }
.ad h1 {
  font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  font-weight: 600;
  font-size: clamp(2rem, 6vw, 2.8rem);
  line-height: 1.05;
  margin: 0;
}
.ad-lede { margin: 8px 0 20px; max-width: 60ch; line-height: 1.5; opacity: 0.85; }
.ad-desk {
  position: sticky;
  top: 12px;
  z-index: 1;
  background: var(--sailcloth);
  color: var(--ink);
  border: 3px solid var(--teak);
  border-radius: 14px;
  box-shadow: 0 10px 28px rgb(0 0 0 / 35%);
  padding: 14px 16px;
  display: grid;
  gap: 12px;
}
.ad-row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 18px; }
.ad-label { font-weight: 700; font-size: 0.9rem; color: var(--teak); }
.ad-field { border: 0; margin: 0; padding: 0; min-width: 0; display: flex; align-items: center; gap: 10px; }
.ad-field legend { float: left; padding: 0; }
.ad-seg { display: inline-flex; flex-wrap: wrap; max-width: 100%; border: 2px solid var(--teak); border-radius: 10px; overflow: hidden; }
.ad-seg button {
  font: inherit; font-weight: 700; font-size: 0.95rem;
  padding: 7px 14px; border: 0; background: transparent; color: var(--ink); cursor: pointer;
}
.ad-seg button + button { border-left: 2px solid var(--teak); }
.ad-seg button[aria-pressed="true"] { background: var(--doubloon); }
.ad-toggle {
  font: inherit; font-weight: 700; font-size: 0.95rem;
  padding: 7px 14px; border-radius: 10px; border: 2px solid var(--teak);
  background: transparent; color: var(--ink); cursor: pointer;
}
.ad-toggle[aria-pressed="true"] { background: var(--doubloon); }
.ad-toggle.ad-mute[aria-pressed="true"] { background: var(--coral); border-color: #9c2f20; color: #fff; }
.ad-sliders { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px 20px; }
.ad-slider { display: grid; grid-template-columns: auto 1fr 3ch; align-items: center; gap: 10px; font-weight: 600; font-size: 0.9rem; }
.ad-slider input { accent-color: var(--teak); width: 100%; }
.ad-slider output { font-variant-numeric: tabular-nums; text-align: right; color: var(--teak); }
.ad section { margin-top: 28px; }
.ad h2 { font-size: 1.05rem; font-weight: 700; margin: 0 0 10px; color: var(--sailcloth); }
.ad-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
.ad-sound {
  position: relative;
  display: grid; gap: 2px; text-align: left;
  font: inherit; color: var(--ink); background: var(--sailcloth);
  border: 2px solid transparent; border-radius: 10px; padding: 10px 12px; cursor: pointer;
  box-shadow: 0 3px 0 #c9b48a;
  transition: background-color 350ms ease-out, transform 90ms ease;
}
.ad-sound:active { transform: translateY(2px); box-shadow: 0 1px 0 #c9b48a; }
.ad-sound[data-hit="true"] { background: var(--doubloon); transition: none; }
.ad-key { font-weight: 700; font-size: 0.98rem; }
.ad-tags { font-size: 0.78rem; color: #7a6248; min-height: 1em; }
.ad-run {
  position: absolute; top: 6px; right: 6px;
  font: inherit; font-size: 0.75rem; font-weight: 700;
  border: 1.5px solid #b89a6a; border-radius: 6px; background: transparent; color: var(--teak);
  padding: 1px 6px; cursor: pointer;
}
.ad button:focus-visible { outline: 3px solid var(--lagoon); outline-offset: 2px; }
.ad-foot { margin-top: 36px; font-size: 0.85rem; opacity: 0.7; }
.ad-foot a { color: var(--sailcloth); }
@media (max-width: 600px) {
  .ad-desk { position: static; }
}
@media (prefers-reduced-motion: reduce) {
  .ad-sound { transition: none; }
  .ad-sound:active { transform: none; }
}
`;function _({label:e,value:t,onChange:n}){return(0,u.jsxs)(`label`,{className:`ad-slider`,children:[(0,u.jsx)(`span`,{children:e}),(0,u.jsx)(`input`,{type:`range`,min:0,max:100,value:Math.round(t*100),onChange:e=>n(Number(e.currentTarget.value)/100)}),(0,u.jsx)(`output`,{children:Math.round(t*100)})]})}function v({sound:e}){let[t,n]=(0,l.useState)(!1),r=(0,l.useRef)(void 0),o=()=>{n(!0),clearTimeout(r.current),r.current=setTimeout(()=>n(!1),60)};(0,l.useEffect)(()=>()=>clearTimeout(r.current),[]);let c=i.has(e),d=a.has(e),f=[c&&`varies each time`,d&&`dips the music`].filter(Boolean).join(`, `);return(0,u.jsxs)(`div`,{style:{position:`relative`},children:[(0,u.jsxs)(`button`,{type:`button`,className:`ad-sound`,"data-hit":t,style:{width:`100%`},onClick:()=>{s.play(e),o()},children:[(0,u.jsx)(`span`,{className:`ad-key`,children:e}),(0,u.jsx)(`span`,{className:`ad-tags`,children:f})]}),c&&(0,u.jsx)(`button`,{type:`button`,className:`ad-run`,"aria-label":`Play ${e} five times`,title:`Play five in a row`,onClick:()=>{for(let t=0;t<5;t++)setTimeout(()=>s.play(e),t*140);o()},children:`×5`})]})}function y(){let[e,t]=(0,l.useState)(()=>s.settings()),[n,r]=(0,l.useState)(null),[i,a]=(0,l.useState)(!1);(0,l.useEffect)(()=>()=>{s.music(null),s.ambience(null)},[]);let d=e=>{s.update(e),t(s.settings())},f=e=>{s.music(e),r(e)};return(0,u.jsxs)(`main`,{className:`ad`,children:[(0,u.jsx)(`style`,{children:g}),(0,u.jsxs)(`div`,{className:`ad-inner`,children:[(0,u.jsx)(`h1`,{children:`Sound check`}),(0,u.jsx)(`p`,{className:`ad-lede`,children:`Every sound in the game, as the game plays it: same levels, same volume controls. Sound starts with your first click or key press.`}),(0,u.jsxs)(`div`,{className:`ad-desk`,children:[(0,u.jsxs)(`div`,{className:`ad-row`,children:[(0,u.jsxs)(`fieldset`,{className:`ad-field`,children:[(0,u.jsx)(`legend`,{className:`ad-label`,children:`Music`}),(0,u.jsxs)(`div`,{className:`ad-seg`,children:[o.map(e=>(0,u.jsx)(`button`,{type:`button`,"aria-pressed":n===e,onClick:()=>f(e),children:h[e]},e)),(0,u.jsx)(`button`,{type:`button`,"aria-pressed":n===null,onClick:()=>f(null),children:`Off`})]})]}),(0,u.jsx)(`button`,{type:`button`,className:`ad-toggle`,"aria-pressed":i,onClick:()=>{s.ambience(i?null:`sea`),a(!i)},children:`Sea waves`}),(0,u.jsx)(`button`,{type:`button`,className:`ad-toggle ad-mute`,"aria-pressed":e.muted,onClick:()=>d({muted:!e.muted}),children:e.muted?`Muted`:`Mute`})]}),(0,u.jsxs)(`div`,{className:`ad-sliders`,children:[(0,u.jsx)(_,{label:`Master`,value:e.master,onChange:e=>d({master:e})}),(0,u.jsx)(_,{label:`Music and sea`,value:e.music,onChange:e=>d({music:e})}),(0,u.jsx)(_,{label:`Effects`,value:e.sfx,onChange:e=>d({sfx:e})})]})]}),m.map(([e,t])=>(0,u.jsxs)(`section`,{"aria-label":e,children:[(0,u.jsx)(`h2`,{children:e}),(0,u.jsx)(`div`,{className:`ad-grid`,children:t.map(e=>(0,u.jsx)(v,{sound:e},e))})]},e)),(0,u.jsxs)(`p`,{className:`ad-foot`,children:[`Sources and licenses: `,(0,u.jsx)(`a`,{href:c,children:`CREDITS.md`}),`. Rebuild with`,` `,(0,u.jsx)(`code`,{children:`node tools/assets/audio/build.mjs`}),`.`]})]})]})}export{y as default};