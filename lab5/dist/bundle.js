(()=>{"use strict";var e;!function(e){e.CHANGEBACKGROUNDCABEZA="CHANGEBACKGROUNDCABEZA",e.CHANGEBACKGROUNDMANOS="CHANGEBACKGROUNDMANOS"}(e||(e={}));let t={cabeza:"",manos:""},a=[];const n=n=>{const o=JSON.parse(JSON.stringify(t));t=((t,a)=>{const{action:n,payload:o}=t;switch(n){case e.CHANGEBACKGROUNDCABEZA:return Object.assign(Object.assign({},a),{cabeza:o});case e.CHANGEBACKGROUNDMANOS:return Object.assign(Object.assign({},a),{manos:o});default:return a}})(n,o),a.forEach((e=>e.render()))};class o extends HTMLElement{constructor(){super(),this.rowContainer=[],this.attachShadow({mode:"open"}),a=[...a,this]}connectedCallback(){this.render()}render(){var e,a;if(this.shadowRoot){this.shadowRoot.innerHTML="";const n=document.createElement("main-body");null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),this.rowContainer.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}));const o=this.ownerDocument.createElement("div"),s=this.ownerDocument.createElement("img"),i=this.ownerDocument.createElement("img");s.src=t.cabeza,i.src=t.manos,o.appendChild(s),o.appendChild(i),null===(a=this.shadowRoot)||void 0===a||a.appendChild(o)}}}var s;customElements.define("estoy-cansada-porfavorayuda",o),function(e){e.cabeza="cabeza",e.manos="manos"}(s||(s={}));class i extends HTMLElement{static get observedAttributes(){return Object.keys({cabeza:null,manos:null})}attributeChangedCallback(e,t,a){this[e]=a,this.mount()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}mount(){var t;this.render();const a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("button");null==a||a.addEventListener("click",(()=>{var t;this.cabeza?n((t=this.cabeza,{action:e.CHANGEBACKGROUNDCABEZA,payload:t})):this.manos&&n((t=>({action:e.CHANGEBACKGROUNDMANOS,payload:t}))(this.manos))}))}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("button"),a=this.ownerDocument.createElement("img");a.setAttribute("src",`${this.cabeza||this.manos}`),t.appendChild(a),null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}}customElements.define("my-card-mini",i);const c=class{get(){return[{cabeza:"https://emojiisland.com/cdn/shop/products/Flushed_Emoji_Icon_5e6ce936-4add-472b-96ba-9082998adcf7_large.png?v=1571606089",manos:"https://emojigraph.org/media/apple/heart-hands-medium-skin-tone_1faf6-1f3fd.png"},{cabeza:"https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?height=711&width=711&fit=bounds",manos:"https://emojigraph.org/media/apple/handshake-light-skin-tone_1f91d-1f3fb.png"},{cabeza:"https://imageio.forbes.com/specials-images/imageserve/63efaa7702c6b4c4adb8d5b0/Shaking-face-emoji-in-iOS-16-4-/960x0.png?height=711&width=711&fit=bounds",manos:"https://emojitool.com/img/apple/ios-13.3/call-me-hand-type-1-2-167.png"}]}};class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;const a=document.createElement("div"),n=document.createElement("div"),o=(new c).get();for(let e=0;e<3;e++){const t=document.createElement("my-card-mini");t.setAttribute(s.cabeza,o[e].cabeza),a.appendChild(t)}for(let e=0;e<3;e++){const t=document.createElement("my-card-mini");t.setAttribute(s.manos,o[e].manos),n.appendChild(t)}null===(e=this.shadowRoot)||void 0===e||e.appendChild(a),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}customElements.define("my-card-row",d);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;const t=document.createElement("my-card-row");null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}customElements.define("main-body",r);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;const t=this.ownerDocument.createElement("estoy-cansada-porfavorayuda");null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}customElements.define("app-container-final",h)})();