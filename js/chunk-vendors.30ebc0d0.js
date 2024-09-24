"use strict";(self["webpackChunkimage_scrapper_app"]=self["webpackChunkimage_scrapper_app"]||[]).push([[504],{4046:function(t,e,n){n.d(e,{FA:function(){return A},Fy:function(){return w},Ku:function(){return R},T9:function(){return y},Uj:function(){return c},ZQ:function(){return _},bD:function(){return k},cY:function(){return v},eX:function(){return S},g:function(){return I},nr:function(){return E},yU:function(){return m},zW:function(){return T}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyCwdS4H0dcEdNfGQ7BOUptagbMx_81hjhs",VUE_APP_FIREBASE_AUTH_DOMAIN:"scrapper-a3247.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"scrapper-a3247",VUE_APP_FIREBASE_STORAGE_BUCKET:"scrapper-a3247.appspot.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"680602738170",VUE_APP_FIREBASE_APP_ID:"1:680602738170:web:4c21789e962b5fc5d11843",BASE_URL:"/image-scrapper-app/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function E(){return!b()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"===typeof indexedDB}catch(t){return!1}}function S(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=C,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new I(r,o,n);return a}}function x(t,e){return t.replace(D,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(N(n)&&N(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){return t&&t._delegate?t._delegate:t}},144:function(t,e,n){n.d(e,{C4:function(){return y},EW:function(){return At},Gc:function(){return gt},IG:function(){return Tt},KR:function(){return Nt},Kh:function(){return pt},Pr:function(){return Pt},X2:function(){return u},bl:function(){return v},fE:function(){return _t},g8:function(){return vt},hZ:function(){return D},i9:function(){return kt},ju:function(){return bt},o5:function(){return c},u4:function(){return x},ux:function(){return Et},yC:function(){return o}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}class u{constructor(t,e,n,r){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,y();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(l(e.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=p,e=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{f(this),this._runnings--,s=e,p=t}}stop(){this.active&&(h(this),f(this),this.onStop&&this.onStop(),this.active=!1)}}function l(t){return t.value}function h(t){t._trackId++,t._depsLength=0}function f(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)d(t.deps[e],t);t.deps.length=t._depsLength}}function d(t,e){const n=t.get(e);void 0!==n&&e._trackId!==n&&(t.delete(e),0===t.size&&t.cleanup())}let p=!0,g=0;const m=[];function y(){m.push(p),p=!1}function v(){const t=m.pop();p=void 0===t||t}function w(){g++}function _(){g--;while(!g&&E.length)E.shift()()}function b(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&d(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const E=[];function T(t,e,n){w();for(const r of t.keys()){let n;r._dirtyLevel<e&&(null!=n?n:n=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=e),r._shouldSchedule&&(null!=n?n:n=t.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&E.push(r.scheduler)))}_()}const S=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},C=new WeakMap,I=Symbol(""),A=Symbol("");function x(t,e,n){if(p&&s){let e=C.get(t);e||C.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=S((()=>e.delete(n)))),b(s,r,void 0)}}function D(t,e,n,i,s,o){const a=C.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.cy)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.cy)(t)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(I)),(0,r.CE)(t)&&c.push(a.get(A)));break;case"delete":(0,r.cy)(t)||(c.push(a.get(I)),(0,r.CE)(t)&&c.push(a.get(A)));break;case"set":(0,r.CE)(t)&&c.push(a.get(I));break}w();for(const r of c)r&&T(r,4,void 0);_()}const k=(0,r.pD)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm)),R=O();function O(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Et(this);for(let e=0,i=this.length;e<i;e++)x(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Et)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){y(),w();const n=Et(this)[e].apply(this,t);return _(),v(),n}})),t}function L(t){(0,r.Bm)(t)||(t=String(t));const e=Et(this);return x(e,"has",t),e.hasOwnProperty(t)}class M{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?ht:lt:s?ut:ct).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){if(o&&(0,r.$3)(R,e))return Reflect.get(R,e,n);if("hasOwnProperty"===e)return L}const a=Reflect.get(t,e,n);return((0,r.Bm)(e)?N.has(e):k(e))?a:(i||x(t,"get",e),s?a:kt(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?mt(a):pt(a):a)}}class P extends M{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=wt(s);if(_t(n)||wt(n)||(s=Et(s),n=Et(n)),!(0,r.cy)(t)&&kt(s)&&!kt(n))return!e&&(s.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,i);return t===Et(i)&&(o?(0,r.$H)(n,s)&&D(t,"set",e,n,s):D(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&D(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&N.has(e)||x(t,"has",e),n}ownKeys(t){return x(t,"iterate",(0,r.cy)(t)?"length":I),Reflect.ownKeys(t)}}class F extends M{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const V=new P,U=new F,B=new P(!0),j=t=>t,$=t=>Reflect.getPrototypeOf(t);function q(t,e,n=!1,i=!1){t=t["__v_raw"];const s=Et(t),o=Et(e);n||((0,r.$H)(e,o)&&x(s,"get",e),x(s,"get",o));const{has:a}=$(s),c=i?j:n?Ct:St;return a.call(s,e)?c(t.get(e)):a.call(s,o)?c(t.get(o)):void(t!==s&&t.get(e))}function z(t,e=!1){const n=this["__v_raw"],i=Et(n),s=Et(t);return e||((0,r.$H)(t,s)&&x(i,"has",t),x(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function K(t,e=!1){return t=t["__v_raw"],!e&&x(Et(t),"iterate",I),Reflect.get(t,"size",t)}function G(t,e=!1){e||_t(t)||wt(t)||(t=Et(t));const n=Et(this),r=$(n),i=r.has.call(n,t);return i||(n.add(t),D(n,"add",t,t)),this}function H(t,e,n=!1){n||_t(e)||wt(e)||(e=Et(e));const i=Et(this),{has:s,get:o}=$(i);let a=s.call(i,t);a||(t=Et(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,e),a?(0,r.$H)(e,c)&&D(i,"set",t,e,c):D(i,"add",t,e),this}function W(t){const e=Et(this),{has:n,get:r}=$(e);let i=n.call(e,t);i||(t=Et(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&D(e,"delete",t,void 0,s),o}function Q(){const t=Et(this),e=0!==t.size,n=void 0,r=t.clear();return e&&D(t,"clear",void 0,void 0,n),r}function X(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Et(s),a=e?j:t?Ct:St;return!t&&x(o,"iterate",I),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function Y(t,e,n){return function(...i){const s=this["__v_raw"],o=Et(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?j:e?Ct:St;return!e&&x(o,"iterate",u?A:I),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function J(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function Z(){const t={get(t){return q(this,t)},get size(){return K(this)},has:z,add:G,set:H,delete:W,clear:Q,forEach:X(!1,!1)},e={get(t){return q(this,t,!1,!0)},get size(){return K(this)},has:z,add(t){return G.call(this,t,!0)},set(t,e){return H.call(this,t,e,!0)},delete:W,clear:Q,forEach:X(!1,!0)},n={get(t){return q(this,t,!0)},get size(){return K(this,!0)},has(t){return z.call(this,t,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!1)},r={get(t){return q(this,t,!0,!0)},get size(){return K(this,!0)},has(t){return z.call(this,t,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=Y(i,!1,!1),n[i]=Y(i,!0,!1),e[i]=Y(i,!1,!0),r[i]=Y(i,!0,!0)})),[t,n,e,r]}const[tt,et,nt,rt]=Z();function it(t,e){const n=e?t?rt:nt:t?et:tt;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const st={get:it(!1,!1)},ot={get:it(!1,!0)},at={get:it(!0,!1)};const ct=new WeakMap,ut=new WeakMap,lt=new WeakMap,ht=new WeakMap;function ft(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:ft((0,r.Zf)(t))}function pt(t){return wt(t)?t:yt(t,!1,V,st,ct)}function gt(t){return yt(t,!1,B,ot,ut)}function mt(t){return yt(t,!0,U,at,lt)}function yt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=dt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function vt(t){return wt(t)?vt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function wt(t){return!(!t||!t["__v_isReadonly"])}function _t(t){return!(!t||!t["__v_isShallow"])}function bt(t){return!!t&&!!t["__v_raw"]}function Et(t){const e=t&&t["__v_raw"];return e?Et(e):t}function Tt(t){return Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const St=t=>(0,r.Gv)(t)?pt(t):t,Ct=t=>(0,r.Gv)(t)?mt(t):t;class It{constructor(t,e,n,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>t(this._value)),(()=>Dt(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Et(this);return t._cacheable&&!t.effect.dirty||!(0,r.$H)(t._value,t._value=t.effect.run())||Dt(t,4),xt(t),t.effect._dirtyLevel>=2&&Dt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function At(t,e,n=!1){let i,s;const o=(0,r.Tn)(t);o?(i=t,s=r.tE):(i=t.get,s=t.set);const a=new It(i,s,o||!s,n);return a}function xt(t){var e;p&&s&&(t=Et(t),b(s,null!=(e=t.dep)?e:t.dep=S((()=>t.dep=void 0),t instanceof It?t:void 0),void 0))}function Dt(t,e=4,n,r){t=Et(t);const i=t.dep;i&&T(i,e,void 0)}function kt(t){return!(!t||!0!==t.__v_isRef)}function Nt(t){return Rt(t,!1)}function Rt(t,e){return kt(t)?t:new Ot(t,e)}class Ot{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Et(t),this._value=e?t:St(t)}get value(){return xt(this),this._value}set value(t){const e=this.__v_isShallow||_t(t)||wt(t);if(t=e?t:Et(t),(0,r.$H)(t,this._rawValue)){const n=this._rawValue;this._rawValue=t,this._value=e?t:St(t),Dt(this,4,t,n)}}}function Lt(t){return kt(t)?t.value:t}const Mt={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return kt(i)&&!kt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Pt(t){return vt(t)?t:new Proxy(t,Mt)}},6768:function(t,e,n){n.d(e,{$u:function(){return ft},CE:function(){return on},Df:function(){return X},FK:function(){return We},Fv:function(){return vn},Gy:function(){return U},K9:function(){return we},Lk:function(){return fn},MZ:function(){return Q},OW:function(){return G},Q3:function(){return wn},QP:function(){return j},Qi:function(){return R},Wv:function(){return an},bF:function(){return dn},bo:function(){return M},dY:function(){return v},g2:function(){return _t},h:function(){return Wn},hi:function(){return pt},jt:function(){return O},nI:function(){return Dn},pM:function(){return Y},pR:function(){return z},qL:function(){return o},sV:function(){return lt},uX:function(){return tn},wB:function(){return Ne}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,i=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}const c=e.appContext.config.errorHandler;if(c)return(0,r.C4)(),s(c,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,o,i)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function w(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=h[r],s=I(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function _(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),b())}function b(){u||l||(l=!0,y=m.then(x))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,i.cy)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),b()}function S(t,e,n=(u?f+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function C(t){if(d.length){const t=[...new Set(d)].sort(((t,e)=>I(t)-I(e)));if(d.length=0,p)return void p.push(...t);for(p=t,g=0;g<p.length;g++){const t=p[g];0,!1!==t.active&&t()}p=null,g=0}}const I=t=>null==t.id?1/0:t.id,A=(t,e)=>{const n=I(t)-I(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function x(t){l=!1,u=!0,h.sort(A);i.tE;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,t.i,t.i?15:14)}}finally{f=0,h.length=0,C(t),u=!1,y=null,(h.length||d.length)&&x(t)}}let D=null,k=null;function N(t){const e=D;return D=t,k=t&&t.type.__scopeId||null,e}function R(t){k=t}function O(){k=null}function L(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&rn(-1);const i=N(e);let s;try{s=t(...n)}finally{N(i),r._d&&rn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(t,e){if(null===D)return t;const n=zn(D),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,o,a,c=i.MZ]=e[s];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&Me(o),r.push({dir:t,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function P(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}const F=Symbol("_leaveCb"),V=Symbol("_enterCb");function U(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt((()=>{t.isMounted=!0})),dt((()=>{t.isUnmounting=!0})),t}const B=[Function,Array],j={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:B,onEnter:B,onAfterEnter:B,onEnterCancelled:B,onBeforeLeave:B,onLeave:B,onAfterLeave:B,onLeaveCancelled:B,onBeforeAppear:B,onAppear:B,onAfterAppear:B,onAppearCancelled:B},$=t=>{const e=t.subTree;return e.component?$(e.component):e},q={name:"BaseTransition",props:j,setup(t,{slots:e}){const n=Dn(),i=U();return()=>{const s=e.default&&X(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Xe){0,o=e,t=!0;break}}const a=(0,r.ux)(t),{mode:c}=a;if(i.isLeaving)return H(o);const u=W(o);if(!u)return H(o);let l=G(u,a,i,n,(t=>l=t));Q(u,l);const h=n.subTree,f=h&&W(h);if(f&&f.type!==Xe&&!un(u,f)&&$(n).type!==Xe){const t=G(f,a,i,n);if(Q(f,t),"out-in"===c&&u.type!==Xe)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},H(o);"in-out"===c&&u.type!==Xe&&(t.delayLeave=(t,e,n)=>{const r=K(i,f);r[String(f.key)]=f,t[F]=()=>{e(),t[F]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},z=q;function K(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function G(t,e,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:_,onAppearCancelled:b}=e,E=String(t.key),T=K(n,t),S=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];S(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[F]&&e[F](!0);const i=T[E];i&&un(t,i)&&i.el[F]&&i.el[F](),S(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=w||h,r=_||f,i=b||d}let s=!1;const o=t[V]=e=>{s||(s=!0,S(e?i:r,[t]),I.delayedLeave&&I.delayedLeave(),t[V]=void 0)};e?C(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[V]&&e[V](!0),n.isUnmounting)return r();S(p,[e]);let s=!1;const o=e[F]=n=>{s||(s=!0,r(),S(n?y:m,[e]),e[F]=void 0,T[i]===t&&delete T[i])};T[i]=t,g?C(g,[e,o]):o()},clone(t){const i=G(t,e,n,r,s);return s&&s(i),i}};return I}function H(t){if(Z(t))return t=mn(t),t.children=null,t}function W(t){if(!Z(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,i.Tn)(n.default))return n.default()}}function Q(t,e){6&t.shapeFlag&&t.component?Q(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function X(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===We?(128&o.patchFlag&&i++,r=r.concat(X(o.children,e,a))):(e||o.type!==Xe)&&r.push(null!=a?mn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Y(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}const J=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Z=t=>t.type.__isKeepAlive;RegExp,RegExp;function tt(t,e){return(0,i.cy)(t)?t.some((t=>tt(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&t.test(e)}function et(t,e){rt(t,"a",e)}function nt(t,e){rt(t,"da",e)}function rt(t,e,n=xn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(at(e,r,n),n){let t=n.parent;while(t&&t.parent)Z(t.parent.vnode)&&it(r,e,n,t),t=t.parent}}function it(t,e,n,r){const s=at(e,t,r,!0);pt((()=>{(0,i.TF)(r[e],s)}),n)}function st(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ot(t){return 128&t.shapeFlag?t.ssContent:t}function at(t,e,n=xn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=Rn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ct=t=>(e,n=xn)=>{Fn&&"sp"!==t||at(t,((...t)=>e(...t)),n)},ut=ct("bm"),lt=ct("m"),ht=ct("bu"),ft=ct("u"),dt=ct("bum"),pt=ct("um"),gt=ct("sp"),mt=ct("rtg"),yt=ct("rtc");function vt(t,e=xn){at("ec",t,e)}const wt="components";function _t(t,e){return Et(wt,t,!0,e)||t}const bt=Symbol.for("v-ndc");function Et(t,e,n=!0,r=!1){const s=D||xn;if(s){const n=s.type;if(t===wt){const t=Kn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=Tt(s[t]||n[t],e)||Tt(s.appContext[t],e);return!o&&r?n:o}}function Tt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}const St=t=>t?Ln(t)?zn(t):St(t.parent):null,Ct=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>St(t.parent),$root:t=>St(t.root),$emit:t=>t.emit,$options:t=>Lt(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,_(t.update)}),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>Oe.bind(t)}),It=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),At={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(It(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];Dt&&(c[e]=0)}}const f=Ct[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return It(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||It(e,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ct,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xt(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Dt=!0;function kt(t){const e=Lt(t),n=t.proxy,s=t.ctx;Dt=!1,e.beforeCreate&&Rt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:E,render:T,renderTracked:S,renderTriggered:C,errorCaptured:I,serverPrefetch:A,expose:x,inheritAttrs:D,components:k,directives:N,filters:R}=e,O=null;if(h&&Nt(h,s,O),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Dt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Hn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Ot(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Wt(e,t[e])}))}function L(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Rt(f,t,"c"),L(ut,d),L(lt,p),L(ht,g),L(ft,m),L(et,y),L(nt,v),L(vt,I),L(yt,S),L(mt,C),L(dt,_),L(pt,E),L(gt,A),(0,i.cy)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=D&&(t.inheritAttrs=D),k&&(t.components=k),N&&(t.directives=N)}function Nt(t,e,n=i.tE){(0,i.cy)(t)&&(t=Ut(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?Qt(n.from||s,n.default,!0):Qt(n.from||s):Qt(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Rt(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Ot(t,e,n,r){const s=r.includes(".")?Le(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&Ne(s,n)}else if((0,i.Tn)(t))Ne(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>Ot(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&Ne(s,r,t)}else 0}function Lt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>Mt(u,t,a,!0))),Mt(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function Mt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Mt(t,s,n,!0),i&&i.forEach((e=>Mt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Pt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Pt={data:Ft,props:$t,emits:$t,methods:jt,computed:jt,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:jt,directives:jt,watch:qt,provide:Ft,inject:Vt};function Ft(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Vt(t,e){return jt(Ut(t),Ut(e))}function Ut(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function jt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function $t(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),xt(t),xt(null!=e?e:{})):e}function qt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function zt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kt=0;function Gt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=zt(),o=new WeakSet;let a=!1;const c=s.app={_uid:Kt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Qn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.Tn)(t.install)?(o.add(t),t.install(c,...e)):(0,i.Tn)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=dn(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,zn(l.component)}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){const e=Ht;Ht=c;try{return t()}finally{Ht=e}}};return c}}let Ht=null;function Wt(t,e){if(xn){let n=xn.provides;const r=xn.parent&&xn.parent.provides;r===n&&(n=xn.provides=Object.create(r)),n[t]=e}else 0}function Qt(t,e,n=!1){const r=xn||D;if(r||Ht){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ht._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const Xt={},Yt=()=>Object.create(Xt),Jt=t=>Object.getPrototypeOf(t)===Xt;function Zt(t,e,n,i=!1){const s={},o=Yt();t.propsDefaults=Object.create(null),ee(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function te(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ee(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ne(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Ue(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=ne(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function ee(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Ue(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ne(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function ne(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Rn(s);r=i[n]=t.call(null,e),o()}}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const re=new WeakMap;function ie(t,e,n=!1){const r=n?re:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=ie(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);se(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(se(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function se(t){return"$"!==t[0]&&!(0,i.SU)(t)}const oe=t=>"_"===t[0]||"$stable"===t,ae=t=>(0,i.cy)(t)?t.map(_n):[_n(t)],ce=(t,e,n)=>{if(e._n)return e;const r=L(((...t)=>ae(e(...t))),n);return r._c=!1,r},ue=(t,e,n)=>{const r=t._ctx;for(const s in t){if(oe(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=ce(s,n,r);else if(null!=n){0;const t=ae(n);e[s]=()=>t}}},le=(t,e)=>{const n=ae(e);t.slots.default=()=>n},he=(t,e,n)=>{for(const r in e)(n||"_"!==r)&&(t[r]=e[r])},fe=(t,e,n)=>{const r=t.slots=Yt();if(32&t.vnode.shapeFlag){const t=e._;t?(he(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):ue(e,r)}else e&&le(t,e)},de=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:he(s,e,n):(o=!e.$stable,ue(e,s)),a=e}else e&&(le(t,e),a={default:1});if(o)for(const i in s)oe(i)||null!=a[i]||delete s[i]};function pe(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>pe(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(J(o)&&!a)return;const c=4&o.shapeFlag?zn(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,(0,i.$3)(p,f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))s(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.$3)(p,h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.$3)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,ve(r,n)):r()}else 0}}const ge=Symbol("_vte"),me=t=>t.__isTeleport;function ye(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ve=He;function we(t){return _e(t)}function _e(t,e){ye();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!un(t,e)&&(r=X(t),K(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Qe:v(t,e,n,r);break;case Xe:w(t,e,n,r);break;case Ye:null==t&&b(e,n,r,o);break;case We:L(t,e,n,r,i,s,o,a,c);break;default:1&h?A(t,e,n,r,i,s,o,a,c):6&h?M(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&pe(l,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,i,s,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?x(e,n,r,i,s,o,a,c):N(t,e,i,s,o,a,c)},x=(t,e,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&k(t.children,d,null,r,o,be(t,u),l,h),v&&P(t,null,r,"created"),D(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&Sn(p,r,t)}v&&P(t,null,r,"beforeMount");const w=Te(o,y);w&&y.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||w||v)&&ve((()=>{p&&Sn(p,r,t),w&&y.enter(d),v&&P(t,null,r,"mounted")}),o)},D=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;D(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},k=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?bn(t[u]):_n(t[u]);y(null,c,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&Ee(n,!1),(m=g.onVnodeBeforeUpdate)&&Sn(m,n,e,t),d&&P(e,t,n,"beforeUpdate"),n&&Ee(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?R(t.dynamicChildren,h,u,n,r,be(e,s),o):c||j(t,e,u,null,n,r,be(e,s),o,!1),l>0){if(16&l)O(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||O(u,p,g,n,s);((m=g.onVnodeUpdated)||d)&&ve((()=>{m&&Sn(m,n,e,t),d&&P(e,t,n,"updated")}),r)},R=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===We||!un(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},O=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},L=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),k(e.children||[],n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Se(t,e,!0)):j(t,e,n,f,i,o,a,c,l)},M=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):F(e,n,r,i,s,o,c):V(t,e,c)},F=(t,e,n,r,i,s,o)=>{const a=t.component=An(t,r,i);if(Z(t)&&(a.ctx.renderer=et),Vn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,U,o),!t.el){const t=a.subTree=dn(Xe);w(null,t,e,n)}}else U(a,t,e,n,i,s,o)},V=(t,e,n)=>{const r=e.component=t.component;if(qe(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,e,n);r.next=e,E(r.update),r.effect.dirty=!0,r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=Ie(t);if(n)return e&&(e.el=l.el,B(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,f=e;0,Ee(t,!1),e?(e.el=l.el,B(t,e,c)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&Sn(h,s,e,l),Ee(t,!0);const p=Be(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),X(g),t,o,a),e.el=p.el,null===f&&Ke(t,p.el),r&&ve(r,o),(h=e.props&&e.props.onVnodeUpdated)&&ve((()=>Sn(h,s,e,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=J(e);if(Ee(t,!1),l&&(0,i.DY)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&Sn(r,f,e),Ee(t,!0),c&&rt){const n=()=>{t.subTree=Be(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=Be(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&ve(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;ve((()=>Sn(r,f,t)),o)}(256&e.shapeFlag||f&&J(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&ve(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.X2(u,i.tE,(()=>_(h)),t.scope),h=t.update=()=>{l.dirty&&l.run()};h.i=t,h.id=t.uid,Ee(t,!0),h()},B=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,te(t,e.props,i,n),de(t,e.children,n),(0,r.C4)(),S(t),(0,r.bl)()},j=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void q(u,h,n,r,i,s,o,a,c);if(256&d)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&f(n,h)):16&l?16&p?q(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&f(n,""),16&p&&k(h,n,r,i,s,o,a,c))},$=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?bn(e[d]):_n(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?Q(t,s,o,!0,!1,f):k(e,n,r,s,o,a,c,u,f)},q=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?bn(e[l]):_n(e[l]);if(!un(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?bn(e[d]):_n(e[d]);if(!un(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?bn(e[l]):_n(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)K(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?bn(e[l]):_n(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const _=d-g+1;let b=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=_){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&un(r,e[v])){i=v;break}void 0===i?K(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const S=b?Ce(T):i.Oj;for(v=S.length-1,l=_-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,f,s,o,a,c,u):b&&(v<0||l!==S[v]?z(i,n,f,2):v--)}}},z=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void z(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===We){s(o,e,n);for(let t=0;t<u.length;t++)z(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===Ye)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),ve((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},K=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f,cacheIndex:d}=t;if(-2===h&&(i=!1),null!=a&&pe(a,null,n,t,!0),null!=d&&(e.renderCache[d]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&f,g=!J(t);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&Sn(m,e,t),6&l)W(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);p&&P(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,et,r):u&&!u.hasOnce&&(s!==We||h>0&&64&h)?Q(u,e,n,!1,!0):(s===We&&384&h||!i&&16&l)&&Q(c,e,n),r&&G(t)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&ve((()=>{m&&Sn(m,e,t),p&&P(t,null,e,"unmounted")}),n)},G=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===We)return void H(n,r);if(e===Ye)return void I(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},H=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},W=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c,m:u,a:l}=t;Ae(u),Ae(l),r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,K(a,t,e,n)),c&&ve(c,e),ve((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Q=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,r,i)},X=t=>{if(6&t.shapeFlag)return X(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[ge];return n?p(n):e};let Y=!1;const tt=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),Y||(Y=!0,S(),C(),Y=!1),e._vnode=t},et={p:y,um:K,m:z,r:G,mt:F,mc:k,pc:j,pbc:R,n:X,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Gt(tt,nt)}}function be({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ee({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Te(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Se(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=bn(s[i]),e.el=t.el),n||-2===e.patchFlag||Se(t,e)),e.type===Qe&&(e.el=t.el)}}function Ce(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function Ie(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ie(e)}function Ae(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const xe=Symbol.for("v-scx"),De=()=>{{const t=Qt(xe);return t}};const ke={};function Ne(t,e,n){return Re(t,e,n)}function Re(t,e,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(e&&u){const t=e;e=(...e)=>{t(...e),I()}}const f=xn,d=t=>!0===a?t:Me(t,!1===a?1:void 0);let p,g,m=!1,y=!1;if((0,r.i9)(t)?(p=()=>t.value,m=(0,r.fE)(t)):(0,r.g8)(t)?(p=()=>d(t),m=!0):(0,i.cy)(t)?(y=!0,m=t.some((t=>(0,r.g8)(t)||(0,r.fE)(t))),p=()=>t.map((t=>(0,r.i9)(t)?t.value:(0,r.g8)(t)?d(t):(0,i.Tn)(t)?s(t,f,2):void 0))):p=(0,i.Tn)(t)?e?()=>s(t,f,2):()=>(g&&g(),o(t,f,3,[w])):i.tE,e&&a){const t=p;p=()=>Me(t())}let v,w=t=>{g=S.onStop=()=>{s(t,f,4),g=S.onStop=void 0}};if(Fn){if(w=i.tE,e?n&&o(e,f,3,[p(),y?[]:void 0,w]):p(),"sync"!==c)return i.tE;{const t=De();v=t.__watcherHandles||(t.__watcherHandles=[])}}let b=y?new Array(t.length).fill(ke):ke;const E=()=>{if(S.active&&S.dirty)if(e){const t=S.run();(a||m||(y?t.some(((t,e)=>(0,i.$H)(t,b[e]))):(0,i.$H)(t,b)))&&(g&&g(),o(e,f,3,[t,b===ke?void 0:y&&b[0]===ke?[]:b,w]),b=t)}else S.run()};let T;E.allowRecurse=!!e,"sync"===c?T=E:"post"===c?T=()=>ve(E,f&&f.suspense):(E.pre=!0,f&&(E.id=f.uid),T=()=>_(E));const S=new r.X2(p,i.tE,T),C=(0,r.o5)(),I=()=>{S.stop(),C&&(0,i.TF)(C.effects,S)};return e?n?E():b=S.run():"post"===c?ve(S.run.bind(S),f&&f.suspense):S.run(),v&&v.push(I),I}function Oe(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?Le(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=Rn(this),c=Re(s,o.bind(r),n);return a(),c}function Le(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Me(t,e=1/0,n){if(e<=0||!(0,i.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,(0,r.i9)(t))Me(t.value,e,n);else if((0,i.cy)(t))for(let r=0;r<t.length;r++)Me(t[r],e,n);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{Me(t,e,n)}));else if((0,i.Qd)(t)){for(const r in t)Me(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Me(t[r],e,n)}return t}const Pe=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function Fe(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&Pe(r,e.slice(7));let u;c&&(c.trim&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function Ve(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Ve(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function Ue(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function Be(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=N(t);let w,_;try{if(4&n.shapeFlag){const t=s||r,e=t;w=_n(h.call(e,t,f,d,g,p,m)),_=u}else{const t=e;0,w=_n(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),_=e.props?u:je(u)}}catch(E){Je.length=0,a(E,t,1),w=dn(Xe)}let b=w;if(_&&!1!==y){const t=Object.keys(_),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(i.CP)&&(_=$e(_,o)),b=mn(b,_,!1,!0))}return n.dirs&&(b=mn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),w=b,N(v),w}const je=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},$e=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function qe(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ze(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ze(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Ue(u,n))return!0}}return!1}function ze(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Ue(n,s))return!0}return!1}function Ke({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Ge=t=>t.__isSuspense;function He(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const We=Symbol.for("v-fgt"),Qe=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Ye=Symbol.for("v-stc"),Je=[];let Ze=null;function tn(t=!1){Je.push(Ze=t?null:[])}function en(){Je.pop(),Ze=Je[Je.length-1]||null}let nn=1;function rn(t){nn+=t,t<0&&Ze&&(Ze.hasOnce=!0)}function sn(t){return t.dynamicChildren=nn>0?Ze||i.Oj:null,en(),nn>0&&Ze&&Ze.push(t),t}function on(t,e,n,r,i,s){return sn(fn(t,e,n,r,i,s,!0))}function an(t,e,n,r,i){return sn(dn(t,e,n,r,i,!0))}function cn(t){return!!t&&!0===t.__v_isVNode}function un(t,e){return t.type===e.type&&t.key===e.key}const ln=({key:t})=>null!=t?t:null,hn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:D,r:t,k:e,f:!!n}:t:null);function fn(t,e=null,n=null,r=0,s=null,o=(t===We?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ln(e),ref:e&&hn(e),scopeId:k,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(En(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),nn>0&&!a&&Ze&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ze.push(u),u}const dn=pn;function pn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==bt||(t=Xe),cn(t)){const r=mn(t,e,!0);return n&&En(r,n),nn>0&&!a&&Ze&&(6&r.shapeFlag?Ze[Ze.indexOf(t)]=r:Ze.push(r)),r.patchFlag=-2,r}if(Gn(t)&&(t=t.__vccOpts),e){e=gn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:Ge(t)?128:me(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return fn(t,e,n,s,o,c,a,!0)}function gn(t){return t?(0,r.ju)(t)||Jt(t)?(0,i.X$)({},t):t:null}function mn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?Tn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ln(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(hn(e)):[o,hn(e)]:hn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Q(h,u.clone(h)),h}function yn(t=" ",e=0){return dn(Qe,null,t,e)}function vn(t,e){const n=dn(Ye,null,t);return n.staticCount=e,n}function wn(t="",e=!1){return e?(tn(),an(Xe,null,t)):dn(Xe,null,t)}function _n(t){return null==t||"boolean"===typeof t?dn(Xe):(0,i.cy)(t)?dn(We,null,t.slice()):"object"===typeof t?bn(t):dn(Qe,null,String(t))}function bn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:mn(t)}function En(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),En(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Jt(e)?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.Tn)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function Sn(t,e,n,r=null){o(t,e,7,[n,r])}const Cn=zt();let In=0;function An(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Cn,a={uid:In++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ie(s,o),emitsOptions:Ve(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Fe.bind(null,a),t.ce&&t.ce(a),a}let xn=null;const Dn=()=>xn||D;let kn,Nn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};kn=e("__VUE_INSTANCE_SETTERS__",(t=>xn=t)),Nn=e("__VUE_SSR_SETTERS__",(t=>Fn=t))}const Rn=t=>{const e=xn;return kn(t),t.scope.on(),()=>{t.scope.off(),kn(e)}},On=()=>{xn&&xn.scope.off(),kn(null)};function Ln(t){return 4&t.vnode.shapeFlag}let Mn,Pn,Fn=!1;function Vn(t,e=!1,n=!1){e&&Nn(e);const{props:r,children:i}=t.vnode,s=Ln(t);Zt(t,r,s,e),fe(t,i,n);const o=s?Un(t,e):void 0;return e&&Nn(!1),o}function Un(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,At);const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?qn(t):null,c=Rn(t);(0,r.C4)();const u=s(o,t,0,[t.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then(On,On),e)return u.then((n=>{Bn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else Bn(t,u,e)}else jn(t,e)}function Bn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),jn(t,n)}function jn(t,e,n){const s=t.type;if(!t.render){if(!e&&Mn&&!s.render){const e=s.template||Lt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Mn(e,c)}}t.render=s.render||i.tE,Pn&&Pn(t)}{const e=Rn(t);(0,r.C4)();try{kt(t)}finally{(0,r.bl)(),e()}}}const $n={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function qn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,$n),slots:t.slots,emit:t.emit,expose:e}}function zn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ct?Ct[n](t):void 0},has(t,e){return e in t||e in Ct}})):t.proxy}function Kn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Gn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Hn=(t,e)=>{const n=(0,r.EW)(t,e,Fn);return n};function Wn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?cn(e)?dn(t,null,[e]):dn(t,e):dn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&cn(n)&&(n=[n]),dn(t,e,n))}const Qn="3.4.35"},5130:function(t,e,n){n.d(e,{D$:function(){return bt},Ef:function(){return Ct},Jo:function(){return vt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?c.createElementNS(o,t):"mathml"===e?c.createElementNS(a,t):n?c.createElement(t,{is:n}):c.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>c.createTextNode(t),createComment:t=>c.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>c.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t;const i=u.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",f="animation",d=Symbol("_vtc"),p=(t,{slots:e})=>(0,r.h)(r.pR,w(t),e);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),y=(t,e=[])=>{(0,i.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)},v=t=>!!t&&((0,i.cy)(t)?t.some((t=>t.length>1)):t.length>1);function w(t){const e={};for(const i in t)i in g||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=_(s),w=m&&m[0],b=m&&m[1],{onBeforeEnter:C,onEnter:A,onEnterCancelled:x,onLeave:D,onLeaveCancelled:N,onBeforeAppear:R=C,onAppear:O=A,onAppearCancelled:L=x}=e,M=(t,e,n)=>{T(t,e?h:c),T(t,e?l:a),n&&n()},P=(t,e)=>{t._isLeaving=!1,T(t,f),T(t,p),T(t,d),e&&e()},F=t=>(e,n)=>{const i=t?O:A,s=()=>M(e,t,n);y(i,[e,s]),S((()=>{T(e,t?u:o),E(e,t?h:c),v(i)||I(e,r,w,s)}))};return(0,i.X$)(e,{onBeforeEnter(t){y(C,[t]),E(t,o),E(t,a)},onBeforeAppear(t){y(R,[t]),E(t,u),E(t,l)},onEnter:F(!1),onAppear:F(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>P(t,e);E(t,f),E(t,d),k(),S((()=>{t._isLeaving&&(T(t,f),E(t,p),v(D)||I(t,r,b,n))})),y(D,[t,n])},onEnterCancelled(t){M(t,!1),y(x,[t])},onAppearCancelled(t){M(t,!0),y(L,[t])},onLeaveCancelled(t){P(t),y(N,[t])}})}function _(t){if(null==t)return null;if((0,i.Gv)(t))return[b(t.enter),b(t.leave)];{const e=b(t);return[e,e]}}function b(t){const e=(0,i.Ro)(t);return e}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[d]||(t[d]=new Set)).add(e)}function T(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[d];n&&(n.delete(e),n.size||(t[d]=void 0))}function S(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let C=0;function I(t,e,n,r){const i=t._endId=++C,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=A(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function A(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=x(i,s),a=r(`${f}Delay`),c=r(`${f}Duration`),u=x(a,c);let l=null,d=0,p=0;e===h?o>0&&(l=h,d=o,p=s.length):e===f?u>0&&(l=f,d=u,p=c.length):(d=Math.max(o,u),l=d>0?o>u?h:f:null,p=l?l===h?s.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:d,propCount:p,hasTransform:g}}function x(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>D(e)+D(t[n]))))}function D(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function k(){return document.body.offsetHeight}function N(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const R=Symbol("_vod"),O=Symbol("_vsh");const L=Symbol("");const M=/(^|;)\s*display\s*:/;function P(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&V(r,e,"")}else for(const t in e)null==n[t]&&V(r,t,"");for(const t in n)"display"===t&&(o=!0),V(r,t,n[t])}else if(s){if(e!==n){const t=r[L];t&&(n+=";"+t),r.cssText=n,o=M.test(n)}}else e&&t.removeAttribute("style");R in t&&(t[R]=o?r.display:"",t[O]&&(r.display="none"))}const F=/\s*!important$/;function V(t,e,n){if((0,i.cy)(n))n.forEach((n=>V(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=j(t,e);F.test(n)?t.setProperty((0,i.Tg)(r),n.replace(F,""),"important"):t[r]=n}}const U=["Webkit","Moz","ms"],B={};function j(t,e){const n=B[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return B[e]=r;r=(0,i.ZH)(r);for(let i=0;i<U.length;i++){const n=U[i]+r;if(n in t)return B[e]=n}return e}const $="http://www.w3.org/1999/xlink";function q(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS($,e.slice(6,e.length)):t.setAttributeNS($,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function z(t,e,n,r){if("innerHTML"===e||"textContent"===e){if(null==n)return;return void(t[e]=n)}const s=t.tagName;if("value"===e&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?t.getAttribute("value")||"":t.value,i=null==n?"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let o=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",o=!0):"number"===r&&(n=0,o=!0)}try{t[e]=n}catch(a){0}o&&t.removeAttribute(e)}function K(t,e,n,r){t.addEventListener(e,n,r)}function G(t,e,n,r){t.removeEventListener(e,n,r)}const H=Symbol("_vei");function W(t,e,n,r,i=null){const s=t[H]||(t[H]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=X(e);if(r){const o=s[e]=tt(r,i);K(t,n,o,a)}else o&&(G(t,n,o,a),s[e]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(t){let e;if(Q.test(t)){let n;e={};while(n=t.match(Q))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let Y=0;const J=Promise.resolve(),Z=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function tt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(et(t,n.value),e,5,[t])};return n.value=t,n.attached=Z(),n}function et(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const nt=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rt=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?N(t,r,a):"style"===e?P(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||W(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):it(t,e,r,a))?(z(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||q(t,e,r,a,o,"value"!==e)):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),q(t,e,r,a))};function it(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&nt(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!nt(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const st=new WeakMap,ot=new WeakMap,at=Symbol("_moveCb"),ct=Symbol("_enterCb"),ut={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!dt(o[0].el,n.vnode.el,e))return;o.forEach(lt),o.forEach(ht);const r=o.filter(ft);k(),r.forEach((t=>{const n=t.el,r=n.style;E(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[at]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[at]=null,T(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(t),u=w(c);let l=c.tag||r.FK;if(o=[],a)for(let t=0;t<a.length;t++){const e=a[t];e.el&&e.el instanceof Element&&(o.push(e),(0,r.MZ)(e,(0,r.OW)(e,u,i,n)),st.set(e,e.el.getBoundingClientRect()))}a=e.default?(0,r.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.MZ)(e,(0,r.OW)(e,u,i,n))}return(0,r.bF)(l,null,a)}}};ut.props;function lt(t){const e=t.el;e[at]&&e[at](),e[ct]&&e[ct]()}function ht(t){ot.set(t,t.el.getBoundingClientRect())}function ft(t){const e=st.get(t),n=ot.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function dt(t,e,n){const r=t.cloneNode(),i=t[d];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=A(r);return s.removeChild(r),o}const pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function gt(t){t.target.composing=!0}function mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yt=Symbol("_assign"),vt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[yt]=pt(s);const o=r||s.props&&"number"===s.props.type;K(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),t[yt](r)})),n&&K(t,"change",(()=>{t.value=t.value.trim()})),e||(K(t,"compositionstart",gt),K(t,"compositionend",mt),K(t,"change",mt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[yt]=pt(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c!==u){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===u)return}t.value=u}}};const wt=["ctrl","shift","alt","meta"],_t={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>wt.some((n=>t[`${n}Key`]&&!e.includes(n)))},bt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=_t[e[t]];if(r&&r(n,e))return}return t(n,...r)})},Et=(0,i.X$)({patchProp:rt},l);let Tt;function St(){return Tt||(Tt=(0,r.K9)(Et))}const Ct=(...t)=>{const e=St().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=At(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,It(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function It(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function At(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){n.d(e,{$3:function(){return d},$H:function(){return F},BH:function(){return K},BX:function(){return nt},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return V},Gv:function(){return E},J$:function(){return Z},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return R},Qd:function(){return A},Ro:function(){return j},SU:function(){return D},TF:function(){return h},Tg:function(){return L},Tn:function(){return w},Tr:function(){return G},We:function(){return q},X$:function(){return l},Y2:function(){return tt},ZH:function(){return M},Zf:function(){return I},bB:function(){return B},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return P},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return x},yL:function(){return T},yQ:function(){return U}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t,e){const n=new Set(t.split(","));return e?t=>n.has(t.toLowerCase()):t=>n.has(t)}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===C(t),m=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),v=t=>"[object RegExp]"===C(t),w=t=>"function"===typeof t,_=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),S=Object.prototype.toString,C=t=>S.call(t),I=t=>C(t).slice(8,-1),A=t=>"[object Object]"===C(t),x=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,D=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-(\w)/g,R=k((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),O=/\B([A-Z])/g,L=k((t=>t.replace(O,"-$1").toLowerCase())),M=k((t=>t.charAt(0).toUpperCase()+t.slice(1))),P=k((t=>{const e=t?`on${M(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),V=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},j=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(z);function G(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_(r)?X(r):G(r);if(i)for(const t in i)e[t]=i[t]}return e}if(_(t)||E(t))return t}const H=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(H).forEach((t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(_(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t.__v_isRef),st=t=>_(t)?t:null==t?"":p(t)||E(t)&&(t.toString===S||!w(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},4458:function(t,e,n){n.d(e,{k:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)}))):(a(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},9306:function(t,e,n){var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},3506:function(t,e,n){var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},8551:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var r=n(6706),i=n(4576),s=TypeError;t.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==i(t))throw new s("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var r=n(9504),i=n(7394),s=r(ArrayBuffer.prototype.slice);t.exports=function(t){if(0!==i(t))return!1;try{return s(t,0,0),!1}catch(e){return!0}}},5636:function(t,e,n){var r=n(4475),i=n(9504),s=n(6706),o=n(7696),a=n(3238),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=r.TypeError,g=Math.min,m=f.prototype,y=d.prototype,v=i(m.slice),w=s(m,"resizable","get"),_=s(m,"maxByteLength","get"),b=i(y.getInt8),E=i(y.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),s=void 0===e?i:o(e),m=!w||!w(t);if(a(t))throw new p("ArrayBuffer is detached");if(l&&(t=h(t,{transfer:[t]}),i===s&&(n||m)))return t;if(i>=s&&(!n||m))r=v(t,0,s);else{var y=n&&!m&&_?{maxByteLength:_(t)}:void 0;r=new f(s,y);for(var T=new d(t),S=new d(r),C=g(s,i),I=0;I<C;I++)E(S,I,b(T,I))}return l||u(t),r}},4644:function(t,e,n){var r,i,s,o=n(7811),a=n(3724),c=n(4475),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),_=n(8227),b=n(3392),E=n(1181),T=E.enforce,S=E.get,C=c.Int8Array,I=C&&C.prototype,A=c.Uint8ClampedArray,x=A&&A.prototype,D=C&&v(C),k=I&&v(I),N=Object.prototype,R=c.TypeError,O=_("toStringTag"),L=b("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",P=o&&!!w&&"Opera"!==f(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},B=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(V,e)||h(U,e)},j=function(t){var e=v(t);if(l(e)){var n=S(e);return n&&h(n,M)?n[M]:j(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(V,e)||h(U,e)},q=function(t){if($(t))return t;throw new R("Target is not a typed array")},z=function(t){if(u(t)&&(!w||y(D,t)))return t;throw new R(d(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:P&&I[t]||e,r)}},G=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(D[t]&&!n)return;try{return g(D,t,n?e:P&&D[t]||e)}catch(s){}}for(r in V)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:P=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!P||!u(D)||D===Function.prototype)&&(D=function(){throw new R("Incorrect invocation")},P))for(r in V)c[r]&&w(c[r],D);if((!P||!k||k===N)&&(k=D.prototype,P))for(r in V)c[r]&&w(c[r].prototype,k);if(P&&v(x)!==k&&w(x,k),a&&!h(k,O))for(r in F=!0,m(k,O,{configurable:!0,get:function(){return l(this)?this[L]:void 0}}),V)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:F&&L,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:j,isView:B,isTypedArray:$,TypedArray:D,TypedArrayPrototype:k}},5370:function(t,e,n){var r=n(6198);t.exports=function(t,e,n){var i=0,s=arguments.length>2?n:r(e),o=new t(s);while(s>i)o[i]=e[i++];return o}},9617:function(t,e,n){var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7628:function(t,e,n){var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},9928:function(t,e,n){var r=n(6198),i=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},4576:function(t,e,n){var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},6955:function(t,e,n){var r=n(2140),i=n(4901),s=n(4576),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6699:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){var r=n(4475),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){var r,i,s,o,a=n(4475),c=n(9714),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,s=new h(2),o=function(t){i.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(d=o)))}catch(p){}t.exports=d},4055:function(t,e,n){var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(t,e,n){var r=n(516),i=n(9088);t.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(t){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(t,e,n){var r=n(4475),i=n(4576);t.exports="process"===i(r.process)},9392:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(t,e,n){var r,i,s=n(4475),o=n(9392),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(t,e,n){var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6518:function(t,e,n){var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},9504:function(t,e,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},7751:function(t,e,n){var r=n(4475),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new f(t,n)}},4475:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},421:function(t){t.exports={}},5917:function(t,e,n){var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3167:function(t,e,n){var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3706:function(t,e,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){var r,i,s,o=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var _=f("state");d[_]=!0,r=function(t,e){if(l(t,_))throw new g(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},s=function(t){return l(t,_)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4376:function(t,e,n){var r=n(4576);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},9539:function(t,e,n){var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return s(this)&&f(this).source||u(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},4913:function(t,e,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9286:function(t,e,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,(function(t){o(e,t)})),e}},3440:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(e)<=n.size?c(e,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l,"normal",!1)}))}},3838:function(t,e,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u,"normal",!1)}))}},8469:function(t,e,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](i(0));try{return(new e)[t](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,(function(t){i(c,t)})),c}},6119:function(t,e,n){var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},7629:function(t,e,n){var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},1548:function(t,e,n){var r=n(4475),i=n(9039),s=n(7388),o=n(7290),a=n(516),c=n(9088),u=r.structuredClone;t.exports=!!u&&!i((function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var t=new ArrayBuffer(8),e=u(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){var r=n(7388),i=n(9039),s=n(4475),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){var r=n(1291),i=n(8014),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new s("Wrong length or index");return n}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},9714:function(t,e,n){var r=n(9088);t.exports=function(t){try{if(r)return Function('return require("'+t+'")')()}catch(e){}}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){var r=n(4475),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8227:function(t,e,n){var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},6573:function(t,e,n){var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},7642:function(t,e,n){var r=n(6518),i=n(3440),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},8004:function(t,e,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(t,e,n){var r=n(6518),i=n(4449),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},5876:function(t,e,n){var r=n(6518),i=n(3838),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2475:function(t,e,n){var r=n(6518),i=n(8527),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},5024:function(t,e,n){var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},1698:function(t,e,n){var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},7467:function(t,e,n){var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(t,e,n){var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},9577:function(t,e,n){var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},3375:function(t,e,n){n(7642)},9225:function(t,e,n){n(8004)},3972:function(t,e,n){n(3853)},9209:function(t,e,n){n(5876)},5714:function(t,e,n){n(2475)},7561:function(t,e,n){n(5024)},6197:function(t,e,n){n(1698)},4979:function(t,e,n){var r=n(6518),i=n(4475),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,_);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),C=b&&!S&&!E;r({global:!0,constructor:!0,forced:g||C},{DOMException:C?w:v});var I=s(m),A=I.prototype;if(A.constructor!==I)for(var x in g||a(A,"constructor",o(1,I)),f)if(c(f,x)){var D=f[x],k=D.s;c(I,k)||a(I,k,o(6,D.c))}},4603:function(t,e,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),c=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(t,e,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=u(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(t,e,n){var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},3405:function(t,e,n){n.d(e,{MF:function(){return yt},j6:function(){return dt},om:function(){return ft},Sx:function(){return wt},Wp:function(){return vt},KO:function(){return _t}});n(4114);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}w((t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",R="0.10.11",O=new i.Vy("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",G="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/vertexai-preview",rt="@firebase/firestore-compat",it="firebase",st="10.13.2",ot="[DEFAULT]",at={[N]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[G]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[rt]:"fire-fst-compat",[nt]:"fire-vertex","fire-js":"fire-js",[it]:"fire-js-all"},ct=new Map,ut=new Map,lt=new Map;function ht(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(lt.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of ct.values())ht(n,t);for(const n of ut.values())ht(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},gt=new s.FA("app","Firebase",pt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt=st;function vt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw gt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw gt.create("no-options");const a=ct.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw gt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of lt.values())c.addComponent(r);const u=new mt(n,i,c);return ct.set(o,u),u}function wt(t=ot){const e=ct.get(t);if(!e&&t===ot&&(0,s.T9)())return vt();if(!e)throw gt.create("no-app",{appName:t});return e}function _t(t,e,n){var i;let s=null!==(i=at[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ft(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",Et=1,Tt="firebase-heartbeat-store";let St=null;function Ct(){return St||(St=S(bt,Et,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tt)}catch(n){console.warn(n)}}}}).catch((t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})}))),St}async function It(t){try{const e=await Ct(),n=e.transaction(Tt),r=await n.objectStore(Tt).get(xt(t));return await n.done,r}catch(e){if(e instanceof s.g)O.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});O.warn(t.message)}}}async function At(t,e){try{const n=await Ct(),r=n.transaction(Tt,"readwrite"),i=r.objectStore(Tt);await i.put(e,xt(t)),await r.done}catch(n){if(n instanceof s.g)O.warn(n.message);else{const t=gt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(t.message)}}}function xt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=1024,kt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Rt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){O.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Rt(),{heartbeatsToSend:n,unsentEntries:r}=Ot(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return O.warn(e),""}}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=Dt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Mt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Mt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){ft(new r.uA("platform-logger",(t=>new D(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new Nt(t)),"PRIVATE")),_t(N,R,t),_t(N,R,"esm2017"),_t("fire-js","")}Pt("")},852:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="10.13.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},7617:function(t,e,n){n.d(e,{gS:function(){return Ga},rJ:function(){return Ho},aU:function(){return Jo},AB:function(){return La},aQ:function(){return Ha},P:function(){return Da},_M:function(){return Na}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r,i,s=n(3405),o=n(852),a=n(1363),c=n(4046),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function a(t,e){var n=u;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var u={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return w(f(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(d(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=f(Math.pow(e,8)),r=p,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=f(Math.pow(e,s)),r=r.j(s).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function _(t,e){return t.add(w(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(30<t.g.length){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;0>=r.l(t);)n=S(n),r=S(r);var i=C(n,1),s=C(r,1);for(r=C(r,2),n=C(n,2);!y(r);){var o=s.add(r);0>=o.l(t)&&(i=i.add(n),s=o),r=C(r,1),n=C(n,1)}return e=_(t,i.j(e)),new E(i,e)}for(i=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=f(n),o=s.j(e);v(o)||0<o.l(t);)n-=r,s=f(n),o=s.j(e);y(s)&&(s=g),i=i.add(s),t=_(t,o)}return new E(i,t)}function S(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function C(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);for(var e=f(Math.pow(t,6)),n=this,r="";;){var i=T(n,e).g;n=_(n,i.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,y(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=_(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.i(i))+(65535&t.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(0>this.l(m)&&0>t.l(m))return f(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=t.i(i)>>>16,u=65535&t.i(i);n[2*r+2*i]+=o*u,b(n,2*r+2*i),n[2*r+2*i+1]+=s*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,b(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new c(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,f,d,p,g,m,y,v,w,_="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},b={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function E(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:E,T.apply(null,arguments)}function C(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function I(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class D{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function k(t){return/^[\s\xa0]*$/.test(t)}function N(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function R(t){return R[" "](t),t}R[" "]=function(){};var O=-1!=N().indexOf("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&-1==N().indexOf("Edge"))&&!(-1!=N().indexOf("Trident")||-1!=N().indexOf("MSIE"))&&-1==N().indexOf("Edge");function L(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}const F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function B(t){a.setTimeout((()=>{throw t}),0)}function j(){var t=H;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ${constructor(){this.h=this.g=null}add(t,e){const n=q.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var q=new D((()=>new z),(t=>t.reset()));class z{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let K,G=!1,H=new $,W=()=>{const t=a.Promise.resolve(void 0);K=()=>{t.then(Q)}};var Q=()=>{for(var t;t=j();){try{t.h.call(t.g)}catch(n){B(n)}var e=q;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}G=!1};function X(){this.s=this.s,this.C=this.C}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(O){t:{try{R(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}I(Z,Y);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.da=this.fa=!1}function it(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new rt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=_t(n),t&&t[et]?t.K(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=_t(n),t&&t[et]?t.L(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=_t(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(it(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):it(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof st?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function bt(){X.call(this),this.i=new st(this),this.M=this,this.F=null}function Et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(r,t),V(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&ot(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function St(t,e,n){if("function"===typeof t)n&&(t=T(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=T(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ct(t){t.g=St((()=>{t.g=null,t.i&&(t.i=!1,Ct(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}I(bt,X),bt.prototype[et]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.F=null},bt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class It extends X{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Ct(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(t){X.call(this),this.h=t,this.g={}}I(At,X);var xt=[];function Dt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}At.prototype.N=function(){At.aa.N.call(this),Dt(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=a.JSON.stringify,Nt=a.JSON.parse,Rt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Ot(){}function Lt(t){return t.h||(t.h=t.i())}function Mt(){}Ot.prototype.h=null;var Pt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){Y.call(this,"d")}function Vt(){Y.call(this,"c")}I(Ft,Y),I(Vt,Y);var Ut={},Bt=null;function jt(){return Bt=Bt||new bt}function $t(t){Y.call(this,Ut.La,t)}function qt(t){const e=jt();Et(e,new $t(e))}function zt(t,e){Y.call(this,Ut.STAT_EVENT,t),this.stat=e}function Kt(t){const e=jt();Et(e,new zt(e,t))}function Gt(t,e){Y.call(this,Ut.Ma,t),this.size=e}function Ht(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Wt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return kt(n)}catch(a){return e}}Ut.La="serverreachability",I($t,Y),Ut.STAT_EVENT="statevent",I(zt,Y),Ut.Ma="timingevent",I(Gt,Y),Wt.prototype.xa=function(){this.g=!1},Wt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function re(){}function ie(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}I(re,Ot),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var oe={},ae={};function ce(t,e,n){t.L=1,t.v=Fe(Re(e)),t.m=n,t.P=!0,ue(t,null)}function ue(t,e){t.F=Date.now(),fe(t),t.A=Re(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Xe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new se,t.g=qn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new It(T(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(xt[0]=i.toString()),i=xt);for(var s=0;s<i.length;s++){var o=lt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?P(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),qt(),Qt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ae:(n=Number(e.substring(n,r)),isNaN(n)?oe:(r+=1,r+n>e.length?ae:(e=e.slice(r,r+n),t.C=r+n,e)))}function fe(t){t.S=Date.now()+t.I,de(t,t.I)}function de(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ht(T(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.j.G||t.J||Vn(t.j,t)}function me(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Dt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ye(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Ee(n.h,t)))if(!t.K&&Ee(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Fn(n),In(n)}Ln(n),Kt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ht(T(n.Za,n),6e3));if(1>=be(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Bn(n,11)}else if((t.K||n.g==t)&&Fn(n),!k(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Te(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Pe(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=$n(r,r.J?r.ia:null,r.W),o.K){Se(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(pe(a),fe(a)),r.g=o}else On(r);0<n.i.length&&xn(n)}else"stop"!=u[0]&&"close"!=u[0]||Bn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Bn(n,7):Cn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}qt(4)}catch(u){}}ie.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==_n(t)?e.j():this.Y(t)},ie.prototype.Y=function(t){try{if(t==this.g)t:{const f=_n(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=f||7==e||qt(8==e||0>=d?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var r=bn(this.g);t="";var i=r.length,s=4==_n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),ge(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(s&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,Kt(12),me(this),ge(this);break t}Yt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ye(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=he(this,o),t==ae){4==f&&(this.s=4,Kt(14),n=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}if(t==oe){this.s=4,Kt(15),Yt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Yt(this.i,this.l,t,null),ye(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,Kt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Mn(h),h.M=!0,Kt(11))}}else Yt(this.i,this.l,o,"[Invalid Chunked Response]"),me(this),ge(this)}else Yt(this.i,this.l,o,null),ye(this,o);4==f&&me(this),this.o&&!this.J&&(4==f?Vn(this.j,this):(this.o=!1,fe(this)))}else En(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),me(this),ge(this)}}}catch(f){}},ie.prototype.cancel=function(){this.J=!0,me(this)},ie.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(qt(),Kt(17)),me(this),this.s=2,ge(this)):de(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function we(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _e(t){return!!t.h||!!t.g&&t.g.size>=t.j}function be(t){return t.h?1:t.g?t.g.size:0}function Ee(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Te(t,e){t.g?t.g.add(e):t.h=e}function Se(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ce(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Ie(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ae(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ae(t),r=Ie(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}we.prototype.cancel=function(){if(this.i=Ce(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var De=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ne(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ne){this.h=t.h,Oe(this,t.j),this.o=t.o,this.g=t.g,Le(this,t.s),this.l=t.l;var e=t.i,n=new Ge;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Me(this,n),this.m=t.m}else t&&(e=String(t).match(De))?(this.h=!1,Oe(this,e[1]||"",!0),this.o=Ve(e[2]||""),this.g=Ve(e[3]||"",!0),Le(this,e[4]),this.l=Ve(e[5]||"",!0),Me(this,e[6]||"",!0),this.m=Ve(e[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}function Re(t){return new Ne(t)}function Oe(t,e,n){t.j=n?Ve(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Le(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Me(t,e,n){e instanceof Ge?(t.i=e,Je(t.i,t.h)):(n||(e=Ue(e,ze)),t.i=new Ge(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Fe(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ve(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ue(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Be),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Be(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ne.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ue(e,je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ue(e,je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ue(n,"/"==n.charAt(0)?qe:$e,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ue(n,Ke)),t.join("")};var je=/[#\/\?@]/g,$e=/[#\?:]/g,qe=/[#\?]/g,ze=/[#\?@]/g,Ke=/#/g;function Ge(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new Map,t.h=0,t.i&&ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){He(t),e=Ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qe(t,e){return He(t),e=Ye(t,e),t.g.has(e)}function Xe(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Ye(t,e),A(n)),t.h+=n.length)}function Ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),Xe(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Wt;if(a.Image){const r=new Image;r.onload=C(en,n,"TestLoadImage: loaded",!0,e,r),r.onerror=C(en,n,"TestLoadImage: error",!1,e,r),r.onabort=C(en,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=C(en,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function tn(t,e){const n=new Wt,r=new AbortController,i=setTimeout((()=>{r.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function nn(){this.g=new Rt}function rn(t,e,n){const r=n||"";try{xe(t,(function(t,n){let i=t;u(t)&&(i=kt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sn(t){this.l=t.Ub||null,this.j=t.eb||!1}function on(t,e){bt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,un(t)}function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Pe(t,e,n))}function fn(t){bt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Ge.prototype,t.add=function(t,e){He(this),this.i=null,t=Ye(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){He(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){He(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){He(this);let e=[];if("string"===typeof t)Qe(this,t)&&(e=e.concat(this.g.get(Ye(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return He(this),this.i=null,t=Ye(this,t),Qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},I(sn,Ot),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),I(on,bt),t=on.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,un(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):un(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),I(fn,bt);var dn=/^https?$/i,pn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),vn(t)}function mn(t){t.A||(t.A=!0,Et(t,"complete"),Et(t,"error"))}function yn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=_n(t)||2!=t.Z()))if(t.u&&4==_n(t))St(t.Ea,0,t);else if(Et(t,"readystatechange"),4==_n(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.D).match(De)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<_n(t)?t.g.statusText:""}catch(c){s=""}t.l=s+" ["+t.Z()+"]",mn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){wn(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function wn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function _n(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(S){return null}}function En(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(k(t[r]))continue;var n=U(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}M(e,(function(t){return t.join(", ")}))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Aa=0,this.i=[],this.j=new Wt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,t),this.cb=Tn("retryDelaySeedMs",1e4,t),this.Wa=Tn("forwardChannelMaxRetries",2,t),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new we(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Cn(t){if(An(t),3==t.G){var e=t.U++,n=Re(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Nn(t,n),e=new ie(t,t.j,e),e.L=2,e.v=Fe(Re(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=qn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),fe(e)}jn(t)}function In(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function An(t){In(t),t.u&&(a.clearTimeout(t.u),t.u=null),Fn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function xn(t){if(!_e(t.h)&&!t.s){t.s=!0;var e=t.Ga;K||W(),G||(K(),G=!0),H.add(e,t),t.B=0}}function Dn(t,e){return!(be(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Ht(T(t.Ga,t,e),Un(t,t.B)),t.B++,!0))}function kn(t,e){var n;n=e?e.l:t.U++;const r=Re(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.T),Nn(t,r),t.m&&t.o&&hn(r,t.m,t.o),n=new ie(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Rn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Te(t.h,n),ce(n,r,e)}function Nn(t,e){t.H&&L(t.H,(function(t,n){Pe(e,n,t)})),t.l&&xe({},(function(t,n){Pe(e,n,t)}))}function Rn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?T(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{rn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function On(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;K||W(),G||(K(),G=!0),H.add(e,t),t.v=0}}function Ln(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ht(T(t.Fa,t),Un(t,t.v)),t.v++,!0)}function Mn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Pn(t){t.g=new ie(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Re(t.qa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.T),Pe(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Pe(e,"TO",t.ja),Pe(e,"TYPE","xmlhttp"),Nn(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Fe(Re(e)),n.m=null,n.P=!0,ue(n,t)}function Fn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Vn(t,e){var n=null;if(t.g==e){Fn(t),Mn(t),t.g=null;var r=2}else{if(!Ee(t.h,e))return;n=e.D,Se(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=jt(),Et(r,new Gt(r,n)),xn(t)}else On(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&Dn(t,e)||2==r&&Ln(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function Un(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=T(t.fb,t),r=t.Xa;const e=!r;r=new Ne(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Oe(r,"https"),Fe(r),e?Ze(r.toString(),n):tn(r.toString(),n)}else Kt(2);t.G=0,t.l&&t.l.sa(e),jn(t),An(t)}function jn(t){if(t.G=0,t.ka=[],t.l){const e=Ce(t.h);0==e.length&&0==t.i.length||(x(t.ka,e),x(t.ka,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ra()}}function $n(t,e,n){var r=n instanceof Ne?Re(n):new Ne(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Le(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ne(null);r&&Oe(s,r),e&&(s.g=e),i&&Le(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.ya,n&&e&&Pe(r,n,e),Pe(r,"VER",t.la),Nn(t,r),r}function qn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new fn(new sn({eb:n})):new fn(t.pa),e.Ha(t.J),e}function zn(){}function Kn(){}function Gn(t,e){bt.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!k(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Hn(t){Ft.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wn(){Vt.call(this),this.status=1}function Qn(t){this.g=t}t=fn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Lt(this.o):Lt(te),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void gn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wn(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){gn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),fn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yn(this):this.bb())},t.bb=function(){yn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Nt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Sn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){Kt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),xn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ie(this,this.j,t);let s=this.o;if(this.S&&(s?(s=P(s),V(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Rn(this,i,e),n=Re(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),Nn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ln(s)))+"&"+e:this.m&&hn(n,this.m,s)),Te(this.h,i),this.Ua&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),i.T=!0,ce(i,n,null)):ce(i,n,e),this.G=2}}else 3==this.G&&(t?kn(this,t):0==this.i.length||_e(this.h)||kn(this))},t.Fa=function(){if(this.u=null,Pn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ht(T(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Kt(10),In(this),Pn(this))},t.Za=function(){null!=this.C&&(this.C=null,In(this),Ln(this),Kt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=zn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Kn.prototype.g=function(t,e){return new Gn(t,e)},I(Gn,bt),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){Cn(this.g)},Gn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=kt(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&xn(e)},Gn.prototype.N=function(){this.g.l=null,delete this.j,Cn(this.g),delete this.g,Gn.aa.N.call(this)},I(Hn,Ft),I(Wn,Vt),I(Qn,zn),Qn.prototype.ua=function(){Et(this.g,"a")},Qn.prototype.ta=function(t){Et(this.g,new Hn(t))},Qn.prototype.sa=function(t){Et(this.g,new Wn)},Qn.prototype.ra=function(){Et(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,w=b.createWebChannelTransport=function(){return new Kn},v=b.getStatEventTarget=function(){return jt()},y=b.Event=Ut,m=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,g=b.ErrorCode=ee,ne.COMPLETE="complete",p=b.EventType=ne,Mt.EventType=Pt,Pt.OPEN="a",Pt.CLOSE="b",Pt.ERROR="c",Pt.MESSAGE="d",bt.prototype.listen=bt.prototype.K,d=b.WebChannel=Mt,f=b.FetchXmlHttpFactory=sn,fn.prototype.listenOnce=fn.prototype.L,fn.prototype.getLastError=fn.prototype.Ka,fn.prototype.getLastErrorCode=fn.prototype.Ba,fn.prototype.getStatus=fn.prototype.Z,fn.prototype.getResponseJson=fn.prototype.Oa,fn.prototype.getResponseText=fn.prototype.oa,fn.prototype.send=fn.prototype.ea,fn.prototype.setWithCredentials=fn.prototype.Ha,h=b.XhrIo=fn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const E="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let S="10.13.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new a.Vy("@firebase/firestore");function I(){return C.logLevel}function A(t,...e){if(C.logLevel<=a.$b.DEBUG){const n=e.map(k);C.debug(`Firestore (${S}): ${t}`,...n)}}function x(t,...e){if(C.logLevel<=a.$b.ERROR){const n=e.map(k);C.error(`Firestore (${S}): ${t}`,...n)}}function D(t,...e){if(C.logLevel<=a.$b.WARN){const n=e.map(k);C.warn(`Firestore (${S}): ${t}`,...n)}}function k(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t="Unexpected state"){const e=`FIRESTORE (${S}) INTERNAL ASSERTION FAILED: `+t;throw x(e),new Error(e)}function R(t,e){t||N()}function O(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class U{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class B{constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new P;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new P,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new P)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(R("string"==typeof e.accessToken),new F(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(null===t||"string"==typeof t),new T(t)}}class j{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ${constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new j(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class q{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(R("string"==typeof t.token),this.R=t.token,new q(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=K(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function H(t,e){return t<e?-1:t>e?1:0}function W(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Q(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.timestamp=t}static fromTimestamp(t){return new X(t)}static min(){return new X(new Q(0,0))}static max(){return new X(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e,n){void 0===e?e=0:e>t.length&&N(),void 0===n?n=t.length-e:n>t.length-e&&N(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Y.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Y?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends Y{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(L.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new J(e)}static emptyPath(){return new J([])}}const Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Y{construct(t,e,n){return new tt(t,e,n)}static isValidIdentifier(t){return Z.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new M(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new M(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new M(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new M(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(e)}static emptyPath(){return new tt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.path=t}static fromPath(t){return new et(J.fromString(t))}static fromName(t){return new et(J.fromString(t).popFirst(5))}static empty(){return new et(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===J.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new et(new J(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}nt.UNKNOWN_ID=-1;function rt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(1e9===r?new Q(n+1,0):new Q(n,r));return new st(i,et.empty(),e)}function it(t){return new st(t.readTime,t.key,-1)}class st{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new st(X.min(),et.empty(),-1)}static max(){return new st(X.max(),et.empty(),-1)}}function ot(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=et.comparator(t.documentKey,e.documentKey),0!==n?n:H(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const at="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ct{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==at)throw t;A("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lt(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof lt?e:lt.resolve(e)}catch(t){return lt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):lt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):lt.reject(e)}static resolve(t){return new lt(((e,n)=>{e(t)}))}static reject(t){return new lt(((e,n)=>{n(t)}))}static waitFor(t){return new lt(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=lt.resolve(!1);for(const n of t)e=e.next((t=>t?lt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new lt(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new lt(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ft(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function pt(t){return null==t}function gt(t){return 0===t&&1/t==-1/0}function mt(t){return"number"==typeof t&&Number.isInteger(t)&&!gt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.oe=-1;const yt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wt=vt,_t=[...wt,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Et(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.comparator=t,this.root=e||It.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,It.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,It.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ct(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ct(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ct(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ct(this.root,t,this.comparator,!0)}}class Ct{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class It{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:It.RED,this.left=null!=r?r:It.EMPTY,this.right=null!=i?i:It.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new It(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return It.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw N();if(this.right.isRed())throw N();const t=this.left.check();if(t!==this.right.check())throw N();return t+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1,It.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(t,e,n,r,i){return this}insert(t,e,n){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xt(this.data.getIterator())}getIteratorFrom(t){return new xt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof At))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new At(this.comparator);return e.data=t,e}}class xt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new At(tt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return W(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new kt("Invalid base64 string: "+t):t}}(t);return new Nt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Rt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(t){if(R(!!t),"string"==typeof t){let e=0;const n=Rt.exec(t);if(R(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Lt(t.seconds),nanos:Lt(t.nanos)}}function Lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Mt(t){return"string"==typeof t?Nt.fromBase64String(t):Nt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ft(t){const e=t.mapValue.fields.__previous_value__;return Pt(e)?Ft(e):e}function Vt(t){const e=Ot(t.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Bt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Bt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Bt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pt(t)?4:ie(t)?9007199254740991:ne(t)?10:11:N()}function qt(t,e){if(t===e)return!0;const n=$t(t);if(n!==$t(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vt(t).isEqual(Vt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ot(t.timestampValue),r=Ot(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Mt(t.bytesValue).isEqual(Mt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Lt(t.geoPointValue.latitude)===Lt(e.geoPointValue.latitude)&&Lt(t.geoPointValue.longitude)===Lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Lt(t.integerValue)===Lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Lt(t.doubleValue),r=Lt(e.doubleValue);return n===r?gt(n)===gt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return W(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(bt(n)!==bt(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!qt(n[i],r[i])))return!1;return!0}(t,e);default:return N()}}function zt(t,e){return void 0!==(t.values||[]).find((t=>qt(t,e)))}function Kt(t,e){if(t===e)return 0;const n=$t(t),r=$t(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Lt(t.integerValue||t.doubleValue),r=Lt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Gt(t.timestampValue,e.timestampValue);case 4:return Gt(Vt(t),Vt(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Mt(t),r=Mt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=H(n[i],r[i]);if(0!==t)return t}return H(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=H(Lt(t.latitude),Lt(e.latitude));return 0!==n?n:H(Lt(t.longitude),Lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ht(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=H((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Ht(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===jt.mapValue&&e===jt.mapValue)return 0;if(t===jt.mapValue)return 1;if(e===jt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=H(r[o],s[o]);if(0!==t)return t;const e=Kt(n[r[o]],i[s[o]]);if(0!==e)return e}return H(r.length,s.length)}(t.mapValue,e.mapValue);default:throw N()}}function Gt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return H(t,e);const n=Ot(t),r=Ot(e),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function Ht(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Kt(n[i],r[i]);if(t)return t}return H(n.length,r.length)}function Wt(t){return Qt(t)}function Qt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ot(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Mt(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return et.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Qt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Qt(t.fields[i])}`;return n+"}"}(t.mapValue):N()}function Xt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yt(t){return!!t&&"integerValue"in t}function Jt(t){return!!t&&"arrayValue"in t}function Zt(t){return!!t&&"nullValue"in t}function te(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ee(t){return!!t&&"mapValue"in t}function ne(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function re(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Et(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=re(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=re(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ie(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(t){this.value=t}static empty(){return new se({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ee(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(e)}setAll(t){let e=tt.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=re(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ee(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ee(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Et(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new se(re(this.value))}}function oe(t){const e=[];return Et(t.fields,((t,n)=>{const r=new tt([t]);if(ee(n)){const t=oe(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Dt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ae{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ae(t,0,X.min(),X.min(),X.min(),se.empty(),0)}static newFoundDocument(t,e,n,r){return new ae(t,1,e,X.min(),n,r,0)}static newNoDocument(t,e){return new ae(t,2,e,X.min(),X.min(),se.empty(),0)}static newUnknownDocument(t,e){return new ae(t,3,e,X.min(),X.min(),se.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(X.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=se.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.position=t,this.inclusive=e}}function ue(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):Kt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function le(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e="asc"){this.field=t,this.dir=e}}function fe(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{}class pe extends de{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ee(t,e,n):"array-contains"===e?new Ie(t,n):"in"===e?new Ae(t,n):"not-in"===e?new xe(t,n):"array-contains-any"===e?new De(t,n):new pe(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Te(t,n):new Se(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Kt(e,this.value)):null!==e&&$t(this.value)===$t(e)&&this.matchesComparison(Kt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends de{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ge(t,e)}matches(t){return me(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function me(t){return"and"===t.op}function ye(t){return ve(t)&&me(t)}function ve(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function we(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+Wt(t.value);if(ye(t))return t.filters.map((t=>we(t))).join(",");{const e=t.filters.map((t=>we(t))).join(",");return`${t.op}(${e})`}}function _e(t,e){return t instanceof pe?function(t,e){return e instanceof pe&&t.op===e.op&&t.field.isEqual(e.field)&&qt(t.value,e.value)}(t,e):t instanceof ge?function(t,e){return e instanceof ge&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&_e(n,e.filters[r])),!0)}(t,e):void N()}function be(t){return t instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`}(t):t instanceof ge?function(t){return t.op.toString()+" {"+t.getFilters().map(be).join(" ,")+"}"}(t):"Filter"}class Ee extends pe{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.matchesComparison(e)}}class Te extends pe{constructor(t,e){super(t,"in",e),this.keys=Ce("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Se extends pe{constructor(t,e){super(t,"not-in",e),this.keys=Ce("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ce(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>et.fromName(t.referenceValue)))}class Ie extends pe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Jt(e)&&zt(e.arrayValue,this.value)}}class Ae extends pe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zt(this.value.arrayValue,e)}}class xe extends pe{constructor(t,e){super(t,"not-in",e)}matches(t){if(zt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zt(this.value.arrayValue,e)}}class De extends pe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Jt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function Ne(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ke(t,e,n,r,i,s,o)}function Re(t){const e=O(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>we(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),pt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Wt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Wt(t))).join(",")),e.ue=t}return e.ue}function Oe(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fe(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_e(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!le(t.startAt,e.startAt)&&le(t.endAt,e.endAt)}function Le(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pe(t,e,n,r,i,s,o,a){return new Me(t,e,n,r,i,s,o,a)}function Fe(t){return new Me(t)}function Ve(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ue(t){return null!==t.collectionGroup}function Be(t){const e=O(t);if(null===e.ce){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new At(tt.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new he(r,n))})),t.has(tt.keyField().canonicalString())||e.ce.push(new he(tt.keyField(),n))}return e.ce}function je(t){const e=O(t);return e.le||(e.le=$e(e,Be(t))),e.le}function $e(t,e){if("F"===t.limitType)return Ne(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new he(t.field,e)}));const n=t.endAt?new ce(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ce(t.startAt.position,t.startAt.inclusive):null;return Ne(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qe(t,e){const n=t.filters.concat([e]);return new Me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ze(t,e,n){return new Me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ke(t,e){return Oe(je(t),je(e))&&t.limitType===e.limitType}function Ge(t){return`${Re(je(t))}|lt:${t.limitType}`}function He(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>be(t))).join(", ")}]`),pt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Wt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Wt(t))).join(",")),`Target(${e})`}(je(t))}; limitType=${t.limitType})`}function We(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Be(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=ue(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Be(t),e))&&!(t.endAt&&!function(t,e,n){const r=ue(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Be(t),e))}(t,e)}function Qe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xe(t){return(e,n)=>{let r=!1;for(const i of Be(t)){const t=Ye(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ye(t,e,n){const r=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Kt(r,i):N()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Et(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Tt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new St(et.comparator);function tn(){return Ze}const en=new St(et.comparator);function nn(...t){let e=en;for(const n of t)e=e.insert(n.key,n);return e}function rn(t){let e=en;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function sn(){return an()}function on(){return an()}function an(){return new Je((t=>t.toString()),((t,e)=>t.isEqual(e)))}const cn=new St(et.comparator),un=new At(et.comparator);function ln(...t){let e=un;for(const n of t)e=e.add(n);return e}const hn=new At(H);function fn(){return hn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gt(e)?"-0":e}}function pn(t){return{integerValue:""+t}}function gn(t,e){return mt(e)?pn(e):dn(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this._=void 0}}function yn(t,e,n){return t instanceof _n?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Pt(e)&&(e=Ft(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof bn?En(t,e):t instanceof Tn?Sn(t,e):function(t,e){const n=wn(t,e),r=In(n)+In(t.Pe);return Yt(n)&&Yt(t.Pe)?pn(r):dn(t.serializer,r)}(t,e)}function vn(t,e,n){return t instanceof bn?En(t,e):t instanceof Tn?Sn(t,e):n}function wn(t,e){return t instanceof Cn?function(t){return Yt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class _n extends mn{}class bn extends mn{constructor(t){super(),this.elements=t}}function En(t,e){const n=An(e);for(const r of t.elements)n.some((t=>qt(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Tn extends mn{constructor(t){super(),this.elements=t}}function Sn(t,e){let n=An(e);for(const r of t.elements)n=n.filter((t=>!qt(t,r)));return{arrayValue:{values:n}}}class Cn extends mn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function In(t){return Lt(t.integerValue||t.doubleValue)}function An(t){return Jt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof bn&&e instanceof bn||t instanceof Tn&&e instanceof Tn?W(t.elements,e.elements,qt):t instanceof Cn&&e instanceof Cn?qt(t.Pe,e.Pe):t instanceof _n&&e instanceof _n}(t.transform,e.transform)}class Dn{constructor(t,e){this.version=t,this.transformResults=e}}class kn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kn}static exists(t){return new kn(void 0,t)}static updateTime(t){return new kn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Rn{}function On(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new qn(t.key,kn.none()):new Vn(t.key,t.data,kn.none());{const n=t.data,r=se.empty();let i=new At(tt.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Un(t.key,r,new Dt(i.toArray()),kn.none())}}function Ln(t,e,n){t instanceof Vn?function(t,e,n){const r=t.value.clone(),i=jn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Un?function(t,e,n){if(!Nn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=jn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Bn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Mn(t,e,n,r){return t instanceof Vn?function(t,e,n,r){if(!Nn(t.precondition,e))return n;const i=t.value.clone(),s=$n(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Un?function(t,e,n,r){if(!Nn(t.precondition,e))return n;const i=$n(t.fieldTransforms,r,e),s=e.data;return s.setAll(Bn(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Nn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Pn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=wn(r.transform,t||null);null!=i&&(null===n&&(n=se.empty()),n.set(r.field,i))}return n||null}function Fn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&W(t,e,((t,e)=>xn(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vn extends Rn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Un extends Rn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function jn(t,e,n){const r=new Map;R(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vn(o,a,n[i]))}return r}function $n(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,yn(t,s,e))}return r}class qn extends Rn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zn extends Rn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ln(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=on();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=On(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(X.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ln())}isEqual(t){return this.batchId===t.batchId&&W(this.mutations,t.mutations,((t,e)=>Fn(t,e)))&&W(this.baseMutations,t.baseMutations,((t,e)=>Fn(t,e)))}}class Gn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){R(t.mutations.length===n.length);let r=function(){return cn}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Gn(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn,Xn;function Yn(t){switch(t){default:return N();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Jn(t){if(void 0===t)return x("GRPC error has no .code"),L.UNKNOWN;switch(t){case Qn.OK:return L.OK;case Qn.CANCELLED:return L.CANCELLED;case Qn.UNKNOWN:return L.UNKNOWN;case Qn.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Qn.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Qn.INTERNAL:return L.INTERNAL;case Qn.UNAVAILABLE:return L.UNAVAILABLE;case Qn.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Qn.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Qn.NOT_FOUND:return L.NOT_FOUND;case Qn.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Qn.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Qn.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Qn.ABORTED:return L.ABORTED;case Qn.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Qn.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Qn.DATA_LOSS:return L.DATA_LOSS;default:return N()}}(Xn=Qn||(Qn={}))[Xn.OK=0]="OK",Xn[Xn.CANCELLED=1]="CANCELLED",Xn[Xn.UNKNOWN=2]="UNKNOWN",Xn[Xn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xn[Xn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xn[Xn.NOT_FOUND=5]="NOT_FOUND",Xn[Xn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xn[Xn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xn[Xn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xn[Xn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xn[Xn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xn[Xn.ABORTED=10]="ABORTED",Xn[Xn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xn[Xn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xn[Xn.INTERNAL=13]="INTERNAL",Xn[Xn.UNAVAILABLE=14]="UNAVAILABLE",Xn[Xn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new r([4294967295,4294967295],0);function nr(t){const e=tr().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function rr(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class ir{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new sr(`Invalid padding: ${e}`);if(n<0)throw new sr(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new sr(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new sr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=r.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(er)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=nr(t),[n,r]=rr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,r,i);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new ir(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ie)return;const e=nr(t),[n,r]=rr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,r,i);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ar.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new or(X.min(),r,new St(H),tn(),ln())}}class ar{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ar(n,e,ln(),ln(),ln())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class ur{constructor(t,e){this.targetId=t,this.me=e}}class lr{constructor(t,e,n=Nt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class hr{constructor(){this.fe=0,this.ge=pr(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ln(),e=ln(),n=ln();return this.ge.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:N()}})),new ar(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=pr()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,R(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fr{constructor(t){this.Le=t,this.Be=new Map,this.ke=tn(),this.qe=dr(),this.Qe=new St(H)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:N()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const i=r.target;if(Le(i))if(0===n){const t=new et(i.path);this.Ue(e,t,ae.newNoDocument(t,X.min()))}else R(1===n);else{const r=this.Ye(e);if(r!==n){const n=this.Ze(t),i=n?this.Xe(n,t,r):1;if(0!==i){this.je(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==Zn||Zn.et(function(t,e,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==f?void 0:f.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.me,this.Le.tt(),n,i))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Mt(n).toUint8Array()}catch(t){if(t instanceof kt)return D("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ir(s,r,i)}catch(t){return D(t instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.Ue(e,n,null),r++)})),r}rt(t){const e=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Le(i.target)){const e=new et(i.target.path);null!==this.ke.get(e)||this.it(r,e)||this.Ue(r,e,ae.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}}));let n=ln();this.qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const r=new or(t,e,this.Qe,this.ke,n);return this.ke=tn(),this.qe=dr(),this.Qe=new St(H),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new hr,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new At(H),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||A("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new hr),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function dr(){return new St(et.comparator)}function pr(){return new St(et.comparator)}const gr=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),mr=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),yr=(()=>{const t={and:"AND",or:"OR"};return t})();class vr{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wr(t,e){return t.useProto3Json||pt(e)?e:{value:e}}function _r(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function br(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Er(t,e){return _r(t,e.toTimestamp())}function Tr(t){return R(!!t),X.fromTimestamp(function(t){const e=Ot(t);return new Q(e.seconds,e.nanos)}(t))}function Sr(t,e){return Cr(t,e).canonicalString()}function Cr(t,e){const n=function(t){return new J(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Ir(t){const e=J.fromString(t);return R(Qr(e)),e}function Ar(t,e){return Sr(t.databaseId,e.path)}function xr(t,e){const n=Ir(e);if(n.get(1)!==t.databaseId.projectId)throw new M(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(Rr(n))}function Dr(t,e){return Sr(t.databaseId,e)}function kr(t){const e=Ir(t);return 4===e.length?J.emptyPath():Rr(e)}function Nr(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rr(t){return R(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Or(t,e,n){return{name:Ar(t,e),fields:n.value.mapValue.fields}}function Lr(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:N()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(R(void 0===e||"string"==typeof e),Nt.fromBase64String(e||"")):(R(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Nt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?L.UNKNOWN:Jn(t.code);return new M(e,t.message||"")}(o);n=new lr(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xr(t,r.document.name),s=Tr(r.document.updateTime),o=r.document.createTime?Tr(r.document.createTime):X.min(),a=new se({mapValue:{fields:r.document.fields}}),c=ae.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new cr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xr(t,r.document),s=r.readTime?Tr(r.readTime):X.min(),o=ae.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xr(t,r.document),s=r.removedTargetIds||[];n=new cr([],s,i,null)}else{if(!("filter"in e))return N();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Wn(r,i),o=t.targetId;n=new ur(o,s)}}return n}function Mr(t,e){let n;if(e instanceof Vn)n={update:Or(t,e.key,e.value)};else if(e instanceof qn)n={delete:Ar(t,e.key)};else if(e instanceof Un)n={update:Or(t,e.key,e.data),updateMask:Wr(e.fieldMask)};else{if(!(e instanceof zn))return N();n={verify:Ar(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _n)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof bn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Cn)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw N()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Er(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:N()}(t,e.precondition)),n}function Pr(t,e){return t&&t.length>0?(R(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Tr(t.updateTime):Tr(e);return n.isEqual(X.min())&&(n=Tr(e)),new Dn(n,t.transformResults||[])}(t,e)))):[]}function Fr(t,e){return{documents:[Dr(t,e.path)]}}function Vr(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Dr(t,i);const s=function(t){if(0!==t.length)return Hr(ge.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Kr(t.field),direction:$r(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wr(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:i}}function Ur(t){let e=kr(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){R(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=jr(t);return e instanceof ge&&ye(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new he(Gr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,pt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ce(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ce(n,e)}(n.endAt)),Pe(e,i,o,s,a,"F",c,u)}function Br(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function jr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gr(t.unaryFilter.field);return pe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gr(t.unaryFilter.field);return pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gr(t.unaryFilter.field);return pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gr(t.unaryFilter.field);return pe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(t):void 0!==t.fieldFilter?function(t){return pe.create(Gr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ge.create(t.compositeFilter.filters.map((t=>jr(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return N()}}(t.compositeFilter.op))}(t):N()}function $r(t){return gr[t]}function qr(t){return mr[t]}function zr(t){return yr[t]}function Kr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return tt.fromServerFormat(t.fieldPath)}function Hr(t){return t instanceof pe?function(t){if("=="===t.op){if(te(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NAN"}};if(Zt(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(te(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NOT_NAN"}};if(Zt(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kr(t.field),op:qr(t.op),value:t.value}}}(t):t instanceof ge?function(t){const e=t.getFilters().map((t=>Hr(t)));return 1===e.length?e[0]:{compositeFilter:{op:zr(t.op),filters:e}}}(t):N()}function Wr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e,n,r,i=X.min(),s=X.min(),o=Nt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Xr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.ct=t}}function Jr(t){const e=Ur({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ze(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(Lt(t.integerValue));else if("doubleValue"in t){const n=Lt(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),gt(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),"string"==typeof n&&(n=Ot(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(Mt(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?ie(t)?this.dt(e,Number.MAX_SAFE_INTEGER):ne(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):N()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const r of Object.keys(n))this.Vt(r,e),this.Tt(n[r],e)}wt(t,e){var n,r;const i=t.fields||{};this.dt(e,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(e,15),e.At(Lt(o)),this.Vt(s,e),this.Tt(i[s],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const r of n)this.Tt(r,e)}yt(t,e){this.dt(e,37),et.fromName(t).path.forEach((t=>{this.dt(e,60),this.Dt(t,e)}))}dt(t,e){t.At(e)}ft(t){t.At(2)}}Zr.vt=new Zr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(){this.un=new ei}addToCollectionParentIndex(t,e){return this.un.add(e),lt.resolve()}getCollectionParents(t,e){return lt.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return lt.resolve()}deleteFieldIndex(t,e){return lt.resolve()}deleteAllFieldIndexes(t){return lt.resolve()}createTargetIndexes(t,e){return lt.resolve()}getDocumentsMatchingTarget(t,e){return lt.resolve(null)}getIndexType(t,e){return lt.resolve(0)}getFieldIndexes(t,e){return lt.resolve([])}getNextCollectionGroupToUpdate(t){return lt.resolve(null)}getMinOffset(t,e){return lt.resolve(st.min())}getMinOffsetFromCollectionGroup(t,e){return lt.resolve(st.min())}updateCollectionGroup(t,e,n){return lt.resolve()}updateIndexEntries(t,e){return lt.resolve()}}class ei{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new At(J.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new At(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ni{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ni(t,ni.DEFAULT_COLLECTION_PERCENTILE,ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni.DEFAULT_COLLECTION_PERCENTILE=10,ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ni.DEFAULT=new ni(41943040,ni.DEFAULT_COLLECTION_PERCENTILE,ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ni.DISABLED=new ni(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(){this.changes=new Je((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mn(n.mutation,t,Dt.empty(),Q.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ln()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ln()){const r=sn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=nn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=sn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ln())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=tn();const s=an(),o=function(){return an()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Un)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Mn(o.mutation,e,o.mutation.getFieldMask(),Q.now())):s.set(e.key,Dt.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new si(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=an();let r=new St(((t,e)=>t-e)),i=ln();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Dt.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ln()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=on();c.forEach((t=>{if(!i.has(t)){const r=On(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return lt.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ue(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):lt.resolve(sn());let o=-1,a=i;return s.next((e=>lt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?lt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ln()))).next((t=>({batchId:o,changes:rn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new et(e)).next((t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=nn();return this.indexManager.getCollectionParents(t,i).next((o=>lt.forEach(o,(o=>{const a=function(t,e){return new Me(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,ae.newInvalidDocument(r)))}));let n=nn();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Mn(s.mutation,r,Dt.empty(),Q.now()),We(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return lt.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Tr(t.createTime)}}(e)),lt.resolve()}getNamedQuery(t,e){return lt.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(t){return{name:t.name,query:Jr(t.bundledQuery),readTime:Tr(t.readTime)}}(e)),lt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.overlays=new St(et.comparator),this.Ir=new Map}getOverlay(t,e){return lt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=sn();return lt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),lt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),lt.resolve()}getOverlaysForCollection(t,e,n){const r=sn(),i=e.length+1,s=new et(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return lt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new St(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=sn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=sn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return lt.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Hn(e,n));let i=this.Ir.get(e);void 0===i&&(i=ln(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(t){return lt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,lt.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.Tr=new At(hi.Er),this.dr=new At(hi.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new hi(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new hi(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new et(new J([])),n=new hi(e,t),r=new hi(e,t+1),i=[];return this.dr.forEachInRange([n,r],(t=>{this.Vr(t),i.push(t.key)})),i}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new et(new J([])),n=new hi(e,t),r=new hi(e,t+1);let i=ln();return this.dr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new hi(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class hi{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return et.comparator(t.key,e.key)||H(t.wr,e.wr)}static Ar(t,e){return H(t.wr,e.wr)||et.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new At(hi.Er)}checkEmpty(t){return lt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Kn(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.br=this.br.add(new hi(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return lt.resolve(s)}lookupMutationBatch(t,e){return lt.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),i=r<0?0:r;return lt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return lt.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return lt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new hi(e,0),r=new hi(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(t=>{const e=this.Dr(t.wr);i.push(e)})),lt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new At(H);return e.forEach((t=>{const e=new hi(t,0),r=new hi(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,r],(t=>{n=n.add(t.wr)}))})),lt.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;et.isDocumentKey(i)||(i=i.child(""));const s=new hi(new et(i),0);let o=new At(H);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.wr)),!0)}),s),lt.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){R(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return lt.forEach(e.mutations,(r=>{const i=new hi(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new hi(e,0),r=this.br.firstAfterOrEqual(n);return lt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,lt.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.Mr=t,this.docs=function(){return new St(et.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lt.resolve(n?n.document.mutableCopy():ae.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ae.newInvalidDocument(t))})),lt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=tn();const s=e.path,o=new et(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||ot(it(o),n)<=0||(r.has(o.key)||We(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return lt.resolve(i)}getAllFromCollectionGroup(t,e,n,r){N()}Or(t,e){return lt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new pi(this)}getSize(t){return lt.resolve(this.size)}}class pi extends ii{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)})),lt.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this.persistence=t,this.Nr=new Je((t=>Re(t)),Oe),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new li,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),lt.resolve()}getLastRemoteSnapshotVersion(t){return lt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lt.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),lt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),lt.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ri(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,lt.resolve()}updateTargetData(t,e){return this.Kn(e),lt.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,lt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Nr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),lt.waitFor(i).next((()=>r))}getTargetCount(t){return lt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return lt.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),lt.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),lt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),lt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return lt.resolve(n)}containsKey(t,e){return lt.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e){this.qr={},this.overlays={},this.Qr=new dt(0),this.Kr=!1,this.Kr=!0,this.$r=new ui,this.referenceDelegate=t(this),this.Ur=new gi(this),this.indexManager=new ti,this.remoteDocumentCache=function(t){return new di(t)}((t=>this.referenceDelegate.Wr(t))),this.serializer=new Yr(e),this.Gr=new ai(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ci,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new fi(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new yi(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((t=>this.referenceDelegate.jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Hr(t,e){return lt.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class yi extends ct{constructor(t){super(),this.currentSequenceNumber=t}}class vi{constructor(t){this.persistence=t,this.Jr=new li,this.Yr=null}static Zr(t){return new vi(t)}get Xr(){if(this.Yr)return this.Yr;throw N()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),lt.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),lt.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),lt.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lt.forEach(this.Xr,(n=>{const r=et.fromPath(n);return this.ei(t,r).next((t=>{t||e.removeEntry(r,X.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return lt.or([()=>lt.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=ln(),r=ln();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wi(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:ht((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Yi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Zi(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new _i;return this.Xi(t,e,n).next((r=>{if(i.result=r,this.zi)return this.es(t,e,n,r.size)}))})).next((()=>i.result))}es(t,e,n,r){return n.documentReadCount<this.ji?(I()<=a.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),lt.resolve()):(I()<=a.$b.DEBUG&&A("QueryEngine","Query:",He(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(I()<=a.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,je(e))):lt.resolve())}Yi(t,e){if(Ve(e))return lt.resolve(null);let n=je(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ze(e,null,"F"),n=je(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ln(...r);return this.Ji.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ts(e,r);return this.ns(e,s,i,n.readTime)?this.Yi(t,ze(e,null,"F")):this.rs(t,s,e,n)}))))})))))}Zi(t,e,n,r){return Ve(e)||r.isEqual(X.min())?lt.resolve(null):this.Ji.getDocuments(t,n).next((i=>{const s=this.ts(e,i);return this.ns(e,s,n,r)?lt.resolve(null):(I()<=a.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),He(e)),this.rs(t,s,e,rt(r,-1)).next((t=>t)))}))}ts(t,e){let n=new At(Xe(t));return e.forEach(((e,r)=>{We(t,r)&&(n=n.add(r))})),n}ns(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(t,e,n){return I()<=a.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",He(e)),this.Ji.getDocumentsMatchingQuery(t,e,st.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new St(H),this._s=new Je((t=>Re(t)),Oe),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new oi(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function Ti(t,e,n,r){return new Ei(t,e,n,r)}async function Si(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=ln();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ci(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=lt.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);R(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ln();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ii(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function Ai(t,e){const n=O(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(Nt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ur.updateTargetData(t,u))}));let a=tn(),c=ln();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(xi(t,s,e.documentUpdates).next((t=>{a=t.Ps,c=t.Is}))),!r.isEqual(X.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return lt.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.os=i,t)))}function xi(t,e,n){let r=ln(),i=ln();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=tn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(X.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):A("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}function Di(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function ki(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ur.getTargetData(t,e).next((i=>i?(r=i,lt.resolve(r)):n.Ur.allocateTargetId(t).next((i=>(r=new Xr(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.os.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}async function Ni(t,e,n){const r=O(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ft(t))throw t;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ri(t,e,n){const r=O(t);let i=X.min(),s=ln();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=O(t),i=r._s.get(n);return void 0!==i?lt.resolve(r.os.get(i)):r.Ur.getTargetData(e,n)}(r,t,je(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.ss.getDocumentsMatchingQuery(t,e,n?i:X.min(),n?s:ln()))).next((t=>(Oi(r,Qe(e),t),{documents:t,Ts:s})))))}function Oi(t,e,n){let r=t.us.get(e)||X.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.us.set(e,r)}class Li{constructor(){this.activeTargetIds=fn()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mi{constructor(){this.so=new Li,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Li,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{_o(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi=null;function Ui(){return null===Vi?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Bi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="WebChannelConnection";class qi extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(t,e,n,r,i){const s=Ui(),o=this.xo(t,e.toUriEncodedString());A("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(t,o,a,n).then((e=>(A("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw D("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,r,i,s){return this.Mo(t,e,n,r,i)}Oo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+S}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=Bi[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const i=Ui();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(p.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case g.NO_ERROR:const e=a.getResponseJson();A($i,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case g.TIMEOUT:A($i,`RPC '${t}' ${i} timed out`),o(new M(L.DEADLINE_EXCEEDED,"Request time out"));break;case g.HTTP_ERROR:const n=a.getStatus();if(A($i,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(e)>=0?e:L.UNKNOWN}(e.status);o(new M(t,e.message))}else o(new M(L.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(L.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{A($i,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);A($i,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Bo(t,e,n){const r=Ui(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=w(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new f({})),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");A($i,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,p=!1;const g=new ji({Io:e=>{p?A($i,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(A($i,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),A($i,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},To:()=>l.close()}),_=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return _(l,d.EventType.OPEN,(()=>{p||(A($i,`RPC '${t}' stream ${r} transport opened.`),g.yo())})),_(l,d.EventType.CLOSE,(()=>{p||(p=!0,A($i,`RPC '${t}' stream ${r} transport closed`),g.So())})),_(l,d.EventType.ERROR,(e=>{p||(p=!0,D($i,`RPC '${t}' stream ${r} transport errored:`,e),g.So(new M(L.UNAVAILABLE,"The operation could not be completed")))})),_(l,d.EventType.MESSAGE,(e=>{var n;if(!p){const i=e.data[0];R(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){A($i,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Qn[t];if(void 0!==e)return Jn(e)}(e),i=o.message;void 0===n&&(n=L.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),p=!0,g.So(new M(n,i)),l.close()}else A($i,`RPC '${t}' stream ${r} received:`,i),g.bo(i)}})),_(o,y.STAT_EVENT,(e=>{e.stat===m.PROXY?A($i,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===m.NOPROXY&&A($i,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{g.wo()}),0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){return new vr(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,e,n,r,i,s,o,a){this.ui=t,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gi(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(x(e.toString()),x("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===L.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new M(L.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wi extends Hi{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Lr(this.serializer,t),n=function(t){if(!("targetChange"in t))return X.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?X.min():e.readTime?Tr(e.readTime):X.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Nr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Le(r)?{documents:Fr(t,r)}:{query:Vr(t,r)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=br(t,e.resumeToken);const r=wr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(X.min())>0){n.readTime=_r(t,e.snapshotVersion.toTimestamp());const r=wr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Br(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Nr(this.serializer),e.removeTarget=t,this.a_(e)}}class Qi extends Hi{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return R(!!t.streamToken),this.lastStreamToken=t.streamToken,R(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Pr(t.writeResults,t.commitTime),n=Tr(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Nr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Mr(this.serializer,t)))};this.a_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new M(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(t,Cr(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new M(L.UNKNOWN,t.toString())}))}Lo(t,e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Lo(t,Cr(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new M(L.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Yi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(x(e),this.D_=!1):A("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((t=>{n.enqueueAndForget((async()=>{as(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=O(t);e.L_.add(4),await ts(e),e.q_.set("Unknown"),e.L_.delete(4),await Zi(e)}(this))}))})),this.q_=new Yi(n,r)}}async function Zi(t){if(as(t))for(const e of t.B_)await e(!0)}async function ts(t){for(const e of t.B_)await e(!1)}function es(t,e){const n=O(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),os(n)?ss(n):Is(n).r_()&&rs(n,e))}function ns(t,e){const n=O(t),r=Is(n);n.N_.delete(e),r.r_()&&is(n,e),0===n.N_.size&&(r.r_()?r.o_():as(n)&&n.q_.set("Unknown"))}function rs(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).A_(e)}function is(t,e){t.Q_.xe(e),Is(t).R_(e)}function ss(t){t.Q_=new fr({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.q_.v_()}function os(t){return as(t)&&!Is(t).n_()&&t.N_.size>0}function as(t){return 0===O(t).L_.size}function cs(t){t.Q_=void 0}async function us(t){t.q_.set("Online")}async function ls(t){t.N_.forEach(((e,n)=>{rs(t,e)}))}async function hs(t,e){cs(t),os(t)?(t.q_.M_(e),ss(t)):t.q_.set("Unknown")}async function fs(t,e,n){if(t.q_.set("Online"),e instanceof lr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.N_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.N_.delete(r),t.Q_.removeTarget(r))}(t,e)}catch(n){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ds(t,n)}else if(e instanceof cr?t.Q_.Ke(e):e instanceof ur?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const e=await Ii(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.N_.get(r);i&&t.N_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.N_.get(e);if(!r)return;t.N_.set(e,r.withResumeToken(Nt.EMPTY_BYTE_STRING,r.snapshotVersion)),is(t,e);const i=new Xr(r.target,e,n,r.sequenceNumber);rs(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){A("RemoteStore","Failed to raise snapshot:",e),await ds(t,e)}}async function ds(t,e,n){if(!ft(e))throw e;t.L_.add(1),await ts(t),t.q_.set("Offline"),n||(n=()=>Ii(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Zi(t)}))}function ps(t,e){return e().catch((n=>ds(t,n,e)))}async function gs(t){const e=O(t),n=As(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ms(e);)try{const t=await Di(e.localStore,r);if(null===t){0===e.O_.length&&n.o_();break}r=t.batchId,ys(e,t)}catch(t){await ds(e,t)}vs(e)&&ws(e)}function ms(t){return as(t)&&t.O_.length<10}function ys(t,e){t.O_.push(e);const n=As(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vs(t){return as(t)&&!As(t).n_()&&t.O_.length>0}function ws(t){As(t).start()}async function _s(t){As(t).p_()}async function bs(t){const e=As(t);for(const n of t.O_)e.m_(n.mutations)}async function Es(t,e,n){const r=t.O_.shift(),i=Gn.from(r,e,n);await ps(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await gs(t)}async function Ts(t,e){e&&As(t).V_&&await async function(t,e){if(function(t){return Yn(t)&&t!==L.ABORTED}(e.code)){const n=t.O_.shift();As(t).s_(),await ps(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await gs(t)}}(t,e),vs(t)&&ws(t)}async function Ss(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=as(n);n.L_.add(3),await ts(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Zi(n)}async function Cs(t,e){const n=O(t);e?(n.L_.delete(2),await Zi(n)):e||(n.L_.add(2),await ts(n),n.q_.set("Unknown"))}function Is(t){return t.K_||(t.K_=function(t,e,n){const r=O(t);return r.w_(),new Wi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Eo:us.bind(null,t),Ro:ls.bind(null,t),mo:hs.bind(null,t),d_:fs.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),os(t)?ss(t):t.q_.set("Unknown")):(await t.K_.stop(),cs(t))}))),t.K_}function As(t){return t.U_||(t.U_=function(t,e,n){const r=O(t);return r.w_(),new Qi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_s.bind(null,t),mo:Ts.bind(null,t),f_:bs.bind(null,t),g_:Es.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await gs(t)):(await t.U_.stop(),t.O_.length>0&&(A("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xs{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new P,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new xs(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ds(t,e){if(x("AsyncQueue",`${e}: ${t}`),ft(t))return new M(L.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new St(this.comparator)}static emptySet(t){return new ks(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ks))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ks;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.W_=new St(et.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):N():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Rs{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Rs(t,e,ks.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ke(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Ls{constructor(){this.queries=Ms(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=O(t),r=n.queries;n.queries=Ms(),r.forEach(((t,n)=>{for(const r of n.j_)r.onError(e)}))}(this,new M(L.ABORTED,"Firestore shutting down"))}}function Ms(){return new Je((t=>Ge(t)),Ke)}async function Ps(t,e){const n=O(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Os,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Ds(t,`Initialization of query '${He(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Bs(n)}async function Fs(t,e){const n=O(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.j_.indexOf(e);t>=0&&(s.j_.splice(t,1),0===s.j_.length?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vs(t,e){const n=O(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(i)&&(r=!0);e.z_=i}}r&&Bs(n)}function Us(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Bs(t){t.Y_.forEach((t=>{t.next()}))}var js,$s;($s=js||(js={})).ea="default",$s.Cache="cache";class qs{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Rs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=Rs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==js.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{constructor(t){this.key=t}}class Ks{constructor(t){this.key=t}}class Gs{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ln(),this.mutatedKeys=ln(),this.Aa=Xe(t),this.Ra=new ks(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Ns,r=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=We(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.ga(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ra:s,fa:n,ns:o,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const s=t.fa.G_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),r=null!=r&&r;const o=e&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==s.length||c?{snapshot:new Rs(this.query,t.Ra,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ns,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=ln(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Ks(t))})),this.da.forEach((n=>{t.has(n)||e.push(new zs(n))})),e}ba(t){this.Ta=t.Ts,this.da=ln();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Hs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ws{constructor(t){this.key=t,this.va=!1}}class Qs{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Je((t=>Ge(t)),Ke),this.Ma=new Map,this.xa=new Set,this.Oa=new St(et.comparator),this.Na=new Map,this.La=new li,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Xs(t,e,n=!0){const r=wo(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Js(r,e,n,!0),i}async function Ys(t,e){const n=wo(t);await Js(n,e,!0,!1)}async function Js(t,e,n,r){const i=await ki(t.localStore,je(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Zs(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&es(t.remoteStore,i),a}async function Zs(t,e,n,r,i){t.Ka=(e,n,r)=>async function(t,e,n,r){let i=e.view.ma(n);i.ns&&(i=await Ri(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return fo(t,e.targetId,a.wa),a.snapshot}(t,e,n,r);const s=await Ri(t.localStore,e,!0),o=new Gs(e,s.Ts),a=o.ma(s.documents),c=ar.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);fo(t,n,u.wa);const l=new Hs(e,n,o);return t.Fa.set(e,l),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function to(t,e,n){const r=O(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((t=>!Ke(t,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ni(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ns(r.remoteStore,i.targetId),lo(r,i.targetId)})).catch(ut)):(lo(r,i.targetId),await Ni(r.localStore,i.targetId,!0))}async function eo(t,e){const n=O(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ns(n.remoteStore,r.targetId))}async function no(t,e,n){const r=_o(t);try{const t=await function(t,e){const n=O(t),r=Q.now(),i=e.reduce(((t,e)=>t.add(e.key)),ln());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=tn(),c=ln();return n.cs.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Pn(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Un(t.key,e,oe(e.value.mapValue),kn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:rn(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ba[t.currentUser.toKey()];r||(r=new St(H)),r=r.insert(e,n),t.Ba[t.currentUser.toKey()]=r}(r,t.batchId,n),await mo(r,t.changes),await gs(r.remoteStore)}catch(t){const e=Ds(t,"Failed to persist write");n.reject(e)}}async function ro(t,e){const n=O(t);try{const t=await Ai(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Na.get(e);r&&(R(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.va=!0:t.modifiedDocuments.size>0?R(r.va):t.removedDocuments.size>0&&(R(r.va),r.va=!1))})),await mo(n,t,e)}catch(t){await ut(t)}}function io(t,e,n){const r=O(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=O(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.j_)i.Z_(e)&&(r=!0)})),r&&Bs(n)}(r.eventManager,e),t.length&&r.Ca.d_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function so(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let t=new St(et.comparator);t=t.insert(s,ae.newNoDocument(s,X.min()));const n=ln().add(s),i=new or(X.min(),new Map,new St(H),t,n);await ro(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(e),go(r)}else await Ni(r.localStore,e,!1).then((()=>lo(r,e,n))).catch(ut)}async function oo(t,e){const n=O(t),r=e.batch.batchId;try{const t=await Ci(n.localStore,e);uo(n,r,null),co(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,t)}catch(t){await ut(t)}}async function ao(t,e,n){const r=O(t);try{const t=await function(t,e){const n=O(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(R(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);uo(r,e,n),co(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,t)}catch(n){await ut(n)}}function co(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function uo(t,e,n){const r=O(t);let i=r.Ba[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||ho(t,e)}))}function ho(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(ns(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),go(t))}function fo(t,e,n){for(const r of n)r instanceof zs?(t.La.addReference(r.key,e),po(t,r)):r instanceof Ks?(A("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ho(t,r.key)):N()}function po(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(A("SyncEngine","New document in limbo: "+n),t.xa.add(r),go(t))}function go(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new et(J.fromString(e)),r=t.qa.next();t.Na.set(r,new Ws(n)),t.Oa=t.Oa.insert(n,r),es(t.remoteStore,new Xr(je(Fe(n.path)),r,"TargetPurposeLimboResolution",dt.oe))}}async function mo(t,e,n){const r=O(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((t,a)=>{o.push(r.Ka(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=wi.Wi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ca.d_(i),await async function(t,e){const n=O(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>lt.forEach(e,(e=>lt.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>lt.forEach(e.Ui,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ft(t))throw t;A("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.os.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(t,i)}}}(r.localStore,s))}async function yo(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const t=await Si(n.localStore,e);n.currentUser=e,function(t,e){t.ka.forEach((t=>{t.forEach((t=>{t.reject(new M(L.CANCELLED,e))}))})),t.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await mo(n,t.hs)}}function vo(t,e){const n=O(t),r=n.Na.get(e);if(r&&r.va)return ln().add(r.key);{let t=ln();const r=n.Ma.get(e);if(!r)return t;for(const e of r){const r=n.Fa.get(e);t=t.unionWith(r.view.Va)}return t}}function wo(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ro.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=so.bind(null,e),e.Ca.d_=Vs.bind(null,e.eventManager),e.Ca.$a=Us.bind(null,e.eventManager),e}function _o(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ao.bind(null,e),e}class bo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ki(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ti(this.persistence,new bi,t.initialUser,this.serializer)}createPersistence(t){return new mi(vi.Zr,this.serializer)}createSharedClientState(t){return new Mi}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Eo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>io(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yo.bind(null,this.syncEngine),await Cs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ls}()}createDatastore(t){const e=Ki(t.databaseInfo.databaseId),n=function(t){return new qi(t)}(t.databaseInfo);return function(t,e,n,r){return new Xi(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Ji(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>io(this.syncEngine,t,0)),function(){return Fi.D()?new Fi:new Pi}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Qs(t,e,n,r,i,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=O(t);A("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await ts(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):x("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=G.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{A("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(A("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new P;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ds(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Co(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Si(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Io(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xo(t);A("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Ss(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ss(e.remoteStore,n))),t._onlineComponents=e}function Ao(t){return"FirebaseError"===t.name?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function xo(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await Co(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ao(n))throw n;D("Error using user provided cache. Falling back to memory cache: "+n),await Co(t,new bo)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await Co(t,new bo);return t._offlineComponents}async function Do(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Io(t,t._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Io(t,new Eo))),t._onlineComponents}function ko(t){return Do(t).then((t=>t.syncEngine))}async function No(t){const e=await Do(t),n=e.eventManager;return n.onListen=Xs.bind(null,e.syncEngine),n.onUnlisten=to.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ys.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eo.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Oo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e,n){if(!n)throw new M(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mo(t,e,n,r){if(!0===e&&!0===r)throw new M(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Po(t){if(!et.isDocumentKey(t))throw new M(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fo(t){if(et.isDocumentKey(t))throw new M(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":N()}function Uo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vo(t);throw new M(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Bo(t,e){if(e<=0)throw new M(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new M(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new M(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mo("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ro(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new M(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new M(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new M(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $o{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new M(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new V;switch(t.type){case"firstParty":return new $(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new M(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Oo.get(t);e&&(A("ComponentProvider","Removing Datastore"),Oo.delete(t),e.terminate())}(this),Promise.resolve()}}function qo(t,e,n,r={}){var i;const s=(t=Uo(t,$o))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&D("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=T.MOCK_USER;else{e=(0,c.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new M(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}t._authCredentials=new U(new F(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zo(this.firestore,t,this._query)}}class Ko{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Go(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ko(this.firestore,t,this._key)}}class Go extends zo{constructor(t,e,n){super(t,e,Fe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ko(this.firestore,null,new et(t))}withConverter(t){return new Go(this.firestore,t,this._path)}}function Ho(t,e,...n){if(t=(0,c.Ku)(t),Lo("collection","path",e),t instanceof $o){const r=J.fromString(e,...n);return Fo(r),new Go(t,null,r)}{if(!(t instanceof Ko||t instanceof Go))throw new M(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return Fo(r),new Go(t.firestore,null,r)}}function Wo(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=G.newId()),Lo("doc","path",e),t instanceof $o){const r=J.fromString(e,...n);return Po(r),new Ko(t,null,new et(r))}{if(!(t instanceof Ko||t instanceof Go))throw new M(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return Po(r),new Ko(t.firestore,t instanceof Go?t.converter:null,new et(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Gi(this,"async_queue_retry"),this.Eu=()=>{const t=zi();t&&A("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const t=zi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=zi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise((()=>{}));const e=new P;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.uu.push(t),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!ft(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(t){const e=this.au.then((()=>(this.Pu=!0,t().catch((t=>{this.hu=t,this.Pu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw x("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Pu=!1,t))))));return this.au=e,e}enqueueAfterDelay(t,e,n){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const r=xs.createAndSchedule(this,t,e,n,(t=>this.Vu(t)));return this.lu.push(r),r}du(){this.hu&&N()}verifyOperationInProgress(){}async mu(){let t;do{t=this.au,await t}while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then((()=>{this.lu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.lu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.mu()}))}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}function Xo(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Yo extends $o{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Qo}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ta(this),this._firestoreClient.terminate()}}function Jo(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||"(default)",i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,c.yU)("firestore");t&&qo(i,...t)}return i}function Zo(t){return t._firestoreClient||ta(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ta(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new Ut(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ro(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new So(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ea{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ea(Nt.fromBase64String(t))}catch(t){throw new M(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ea(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new M(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ra{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=/^__.*__$/;class aa{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Un(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vn(t,this.data,e,this.fieldTransforms)}}function ca(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class ua{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new ua(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Du:!1});return r.vu(t),r}Cu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Du:!1});return r.yu(),r}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return ba(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(0===t.length)throw this.Mu("Document fields must not be empty");if(ca(this.wu)&&oa.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class la{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ki(t)}Nu(t,e,n,r=!1){return new ua({wu:t,methodName:e,Ou:n,path:tt.emptyPath(),Du:!1,xu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ha(t){const e=t._freezeSettings(),n=Ki(t._databaseId);return new la(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fa(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);ya("Data must be an object, but it was:",o,r);const a=ga(r,o);let c,u;if(s.merge)c=new Dt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=va(e,r,n);if(!o.contains(i))throw new M(L.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ea(t,i)||t.push(i)}c=new Dt(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new aa(new se(a),c,u)}function da(t,e,n,r=!1){return pa(n,t.Nu(r?4:3,e))}function pa(t,e){if(ma(t=(0,c.Ku)(t)))return ya("Unsupported field value:",e,t),ga(t,e);if(t instanceof ra)return function(t,e){if(!ca(e.wu))throw e.Mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&4!==e.wu)throw e.Mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=pa(i,e.Fu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return gn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Q.fromDate(t);return{timestampValue:_r(e.serializer,n)}}if(t instanceof Q){const n=new Q(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:_r(e.serializer,n)}}if(t instanceof ia)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ea)return{bytesValue:br(e.serializer,t._byteString)};if(t instanceof Ko){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sr(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof sa)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Mu("VectorValues must only contain numeric values.");return dn(e.serializer,t)}))}}}}}}(t,e);throw e.Mu(`Unsupported field value: ${Vo(t)}`)}(t,e)}function ga(t,e){const n={};return Tt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Et(t,((t,r)=>{const i=pa(r,e.bu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function ma(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Q||t instanceof ia||t instanceof ea||t instanceof Ko||t instanceof ra||t instanceof sa)}function ya(t,e,n){if(!ma(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Vo(n);throw"an object"===r?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function va(t,e,n){if((e=(0,c.Ku)(e))instanceof na)return e._internalPath;if("string"==typeof e)return _a(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const wa=new RegExp("[~\\*/\\[\\]]");function _a(t,e,n){if(e.search(wa)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new na(...e.split("."))._internalPath}catch(r){throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new M(L.INVALID_ARGUMENT,a+t+c)}function Ea(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ko(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Sa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ca("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Sa extends Ta{data(){return super.data()}}function Ca(t,e){return"string"==typeof e?_a(t,e):e instanceof na?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new M(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aa{}class xa extends Aa{}function Da(t,e,...n){let r=[];e instanceof Aa&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Ra)).length,n=t.filter((t=>t instanceof ka)).length;if(e>1||e>0&&n>0)throw new M(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class ka extends xa{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new ka(t,e,n)}_apply(t){const e=this._parse(t);return Fa(t._query,e),new zo(t.firestore,t.converter,qe(t._query,e))}_parse(t){const e=ha(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new M(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Pa(o,s);const e=[];for(const n of o)e.push(Ma(r,t,n));a={arrayValue:{values:e}}}else a=Ma(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Pa(o,s),a=da(n,e,o,"in"===s||"not-in"===s);return pe.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Na(t,e,n){const r=e,i=Ca("where",t);return ka._create(i,r,n)}class Ra extends Aa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ra(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:ge.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Fa(n,i),n=qe(n,i)}(t._query,e),new zo(t.firestore,t.converter,qe(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Oa extends xa{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Oa(t,e,n)}_apply(t){return new zo(t.firestore,t.converter,ze(t._query,this._limit,this._limitType))}}function La(t){return Bo("limit",t),Oa._create("limit",t,"F")}function Ma(t,e,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new M(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ue(e)&&-1!==n.indexOf("/"))throw new M(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!et.isDocumentKey(r))throw new M(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xt(t,new et(r))}if(n instanceof Ko)return Xt(t,n._key);throw new M(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vo(n)}.`)}function Pa(t,e){if(!Array.isArray(t)||0===t.length)throw new M(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fa(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new M(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Va{convertValue(t,e="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw N()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Et(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>Lt(t.doubleValue)));return new sa(i)}convertGeoPoint(t){return new ia(Lt(t.latitude),Lt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ft(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vt(t));default:return null}}convertTimestamp(t){const e=Ot(t);return new Q(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);R(Qr(n));const r=new Bt(n.get(1),n.get(3)),i=new et(n.popFirst(5));return r.isEqual(e)||x(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ja extends Ta{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ca("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $a extends ja{data(t={}){return super.data(t)}}class qa{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ba(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new $a(this._firestore,this._userDataWriter,n.key,n,new Ba(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new $a(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ba(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new $a(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ba(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:za(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function za(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N()}}class Ka extends Va{constructor(t){super(),this.firestore=t}convertBytes(t){return new ea(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ko(this.firestore,null,e)}}function Ga(t,e){const n=Uo(t.firestore,Yo),r=Wo(t),i=Ua(t.converter,e);return Wa(n,[fa(ha(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,kn.exists(!1))]).then((()=>r))}function Ha(t,...e){var n,r,i;t=(0,c.Ku)(t);let s={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||Xo(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xo(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof Ko)l=Uo(t.firestore,Yo),h=Fe(t._key.path),u={next:n=>{e[o]&&e[o](Qa(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Uo(t,zo);l=Uo(n.firestore,Yo),h=n._query;const r=new Ka(l);u={next:t=>{e[o]&&e[o](new qa(l,r,n,t))},error:e[o+1],complete:e[o+2]},Ia(t._query)}return function(t,e,n,r){const i=new To(r),s=new qs(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Ps(await No(t),s))),()=>{i.za(),t.asyncQueue.enqueueAndForget((async()=>Fs(await No(t),s)))}}(Zo(l),h,a,u)}function Wa(t,e){return function(t,e){const n=new P;return t.asyncQueue.enqueueAndForget((async()=>no(await ko(t),e,n))),n.promise}(Zo(t),e)}function Qa(t,e,n){const r=n.docs.get(e._key),i=new Ka(t);return new ja(t,i,e._key,r,new Ba(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){S=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Yo(new B(t.getProvider("auth-internal")),new z(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new M(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(E,"4.7.2",t),(0,s.KO)(E,"4.7.2","esm2017")}()}}]);
//# sourceMappingURL=chunk-vendors.30ebc0d0.js.map