const pT=()=>{};var kd={};/**
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
 */const Fp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},mT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,l=u?n[i+2]:0,d=s>>2,p=(s&3)<<4|c>>4;let g=(c&15)<<2|l>>6,E=l&63;u||(E=64,o||(g=64)),r.push(t[d],t[p],t[g],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||l==null||p==null)throw new gT;const g=s<<2|c>>4;if(r.push(g),l!==64){const E=c<<4&240|l>>2;if(r.push(E),p!==64){const C=l<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _T=function(n){const e=Fp(n);return Up.encodeByteArray(e,!0)},ta=function(n){return _T(n).replace(/\./g,"")},$u=function(n){try{return Up.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yT=()=>Bp().__FIREBASE_DEFAULTS__,IT=()=>{if(typeof process>"u"||typeof kd>"u")return;const n=kd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},TT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$u(n[1]);return e&&JSON.parse(e)},ba=()=>{try{return pT()||yT()||IT()||TT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qp=n=>{var e,t;return(t=(e=ba())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},zp=n=>{const e=qp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ju=()=>{var n;return(n=ba())==null?void 0:n.config},$p=n=>{var e;return(e=ba())==null?void 0:e[`_${n}`]};/**
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
 */class ET{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function jp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ta(JSON.stringify(t)),ta(JSON.stringify(o)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Gp(){var e;const n=(e=ba())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vT(){return typeof window<"u"||Hp()}function Hp(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function AT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ST(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Kp(){return!Gp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wp(){return!Gp()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Qp(){try{return typeof indexedDB=="object"}catch{return!1}}function PT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const CT="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=CT,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kT(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new It(i,c,r)}}function kT(n,e){return n.replace(DT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DT=/\{\$([^}]+)}/g;function NT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Dd(s)&&Dd(o)){if(!yt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Dd(n){return n!==null&&typeof n=="object"}/**
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
 */function yi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function as(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function VT(n,e){const t=new OT(n,e);return t.subscribe.bind(t)}class OT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Lc(){}/**
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
 */function U(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sa(n){return(await fetch(n,{credentials:"include"})).ok}class wn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class LT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ET;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FT(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MT(n){return n===Jn?void 0:n}function FT(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new LT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Gu=[];var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Yp={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},UT=Z.INFO,BT={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},qT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=BT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=UT,this._logHandler=qT,this._userLogHandler=null,Gu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function zT(n){Gu.forEach(e=>{e.setLogLevel(n)})}function $T(n,e){for(const t of Gu){let r=null;e&&e.level&&(r=Yp[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const c=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:Z[s].toLowerCase(),message:c,args:o,type:i.name})}}}const jT=(n,e)=>e.some(t=>n instanceof t);let Nd,Vd;function GT(){return Nd||(Nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HT(){return Vd||(Vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xp=new WeakMap,ou=new WeakMap,Zp=new WeakMap,Mc=new WeakMap,Ku=new WeakMap;function KT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(_n(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xp.set(t,n)}).catch(()=>{}),Ku.set(e,n),e}function WT(n){if(ou.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ou.set(n,e)}let au={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ou.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QT(n){au=n(au)}function JT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fc(this),e,...t);return Zp.set(r,e.sort?e.sort():[e]),_n(r)}:HT().includes(n)?function(...e){return n.apply(Fc(this),e),_n(Xp.get(this))}:function(...e){return _n(n.apply(Fc(this),e))}}function YT(n){return typeof n=="function"?JT(n):(n instanceof IDBTransaction&&WT(n),jT(n,GT())?new Proxy(n,au):n)}function _n(n){if(n instanceof IDBRequest)return KT(n);if(Mc.has(n))return Mc.get(n);const e=YT(n);return e!==n&&(Mc.set(n,e),Ku.set(e,n)),e}const Fc=n=>Ku.get(n);function XT(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=_n(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_n(o.result),u.oldVersion,u.newVersion,_n(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const ZT=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],Uc=new Map;function Od(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=eE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZT.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),i&&u.done]))[0]};return Uc.set(e,s),s}QT(n=>({...n,get:(e,t,r)=>Od(e,t)||n.get(e,t,r),has:(e,t)=>!!Od(e,t)||n.has(e,t)}));/**
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
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const na="@firebase/app",cu="0.14.10";/**
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
 */const $t=new Hu("@firebase/app"),rE="@firebase/app-compat",iE="@firebase/analytics-compat",sE="@firebase/analytics",oE="@firebase/app-check-compat",aE="@firebase/app-check",cE="@firebase/auth",uE="@firebase/auth-compat",lE="@firebase/database",hE="@firebase/data-connect",dE="@firebase/database-compat",fE="@firebase/functions",pE="@firebase/functions-compat",mE="@firebase/installations",gE="@firebase/installations-compat",_E="@firebase/messaging",yE="@firebase/messaging-compat",IE="@firebase/performance",TE="@firebase/performance-compat",EE="@firebase/remote-config",wE="@firebase/remote-config-compat",vE="@firebase/storage",AE="@firebase/storage-compat",RE="@firebase/firestore",bE="@firebase/ai",SE="@firebase/firestore-compat",PE="firebase",CE="12.11.0";/**
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
 */const Ps="[DEFAULT]",kE={[na]:"fire-core",[rE]:"fire-core-compat",[sE]:"fire-analytics",[iE]:"fire-analytics-compat",[aE]:"fire-app-check",[oE]:"fire-app-check-compat",[cE]:"fire-auth",[uE]:"fire-auth-compat",[lE]:"fire-rtdb",[hE]:"fire-data-connect",[dE]:"fire-rtdb-compat",[fE]:"fire-fn",[pE]:"fire-fn-compat",[mE]:"fire-iid",[gE]:"fire-iid-compat",[_E]:"fire-fcm",[yE]:"fire-fcm-compat",[IE]:"fire-perf",[TE]:"fire-perf-compat",[EE]:"fire-rc",[wE]:"fire-rc-compat",[vE]:"fire-gcs",[AE]:"fire-gcs-compat",[RE]:"fire-fst",[SE]:"fire-fst-compat",[bE]:"fire-vertex","fire-js":"fire-js",[PE]:"fire-js-all"};/**
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
 */const vn=new Map,Wr=new Map,Qr=new Map;function uu(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function DE(n,e){n.container.addOrOverwriteComponent(e)}function An(n){const e=n.name;if(Qr.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,n);for(const t of vn.values())uu(t,n);for(const t of Wr.values())uu(t,n);return!0}function Tr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function em(n,e,t=Ps){Tr(n,e).clearInstance(t)}function Wu(n){return n.options!==void 0}function tm(n){return Wu(n)?!1:"authIdToken"in n||"appCheckToken"in n||"releaseOnDeref"in n||"automaticDataCollectionEnabled"in n}function de(n){return n==null?!1:n.settings!==void 0}function NE(){Qr.clear()}/**
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
 */const VE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new Hs("app","Firebase",VE);/**
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
 */class nm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
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
 */function xd(n,e){const t=$u(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const i=JSON.parse(t).exp*1e3,s=new Date().getTime();i-s<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class OE extends nm{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const c=e;super(c.options,o,i)}this._serverConfig={automaticDataCollectionEnabled:s,...t},this._serverConfig.authIdToken&&xd(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&xd(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ht(na,cu,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){im(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw at.create("server-app-deleted")}}/**
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
 */const On=CE;function rm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ps,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw at.create("bad-app-name",{appName:String(i)});if(t||(t=ju()),!t)throw at.create("no-options");const s=vn.get(i);if(s){if(yt(t,s.options)&&yt(r,s.config))return s;throw at.create("duplicate-app",{appName:i})}const o=new Jp(i);for(const u of Qr.values())o.addComponent(u);const c=new nm(t,r,o);return vn.set(i,c),c}function xE(n,e={}){if(vT()&&!Hp())throw at.create("invalid-server-app-environment");let t,r=e||{};if(n&&(Wu(n)?t=n.options:tm(n)?r=n:t=n),r.automaticDataCollectionEnabled===void 0&&(r.automaticDataCollectionEnabled=!0),t||(t=ju()),!t)throw at.create("no-options");const i={...r,...t};i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const s=d=>[...d].reduce((p,g)=>Math.imul(31,p)+g.charCodeAt(0)|0,0);if(r.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw at.create("finalization-registry-not-supported",{});const o=""+s(JSON.stringify(i)),c=Wr.get(o);if(c)return c.incRefCount(r.releaseOnDeref),c;const u=new Jp(o);for(const d of Qr.values())u.addComponent(d);const l=new OE(t,r,o,u);return Wr.set(o,l),l}function Pa(n=Ps){const e=vn.get(n);if(!e&&n===Ps&&ju())return rm();if(!e)throw at.create("no-app",{appName:n});return e}function LE(){return Array.from(vn.values())}async function im(n){let e=!1;const t=n.name;vn.has(t)?(e=!0,vn.delete(t)):Wr.has(t)&&n.decRefCount()<=0&&(Wr.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function ht(n,e,t){let r=kE[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(o.join(" "));return}An(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function ME(n,e){if(n!==null&&typeof n!="function")throw at.create("invalid-log-argument");$T(n,e)}function FE(n){zT(n)}/**
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
 */const UE="firebase-heartbeat-database",BE=1,Cs="firebase-heartbeat-store";let Bc=null;function sm(){return Bc||(Bc=XT(UE,BE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cs)}catch(t){console.warn(t)}}}}).catch(n=>{throw at.create("idb-open",{originalErrorMessage:n.message})})),Bc}async function qE(n){try{const t=(await sm()).transaction(Cs),r=await t.objectStore(Cs).get(om(n));return await t.done,r}catch(e){if(e instanceof It)$t.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function Ld(n,e){try{const r=(await sm()).transaction(Cs,"readwrite");await r.objectStore(Cs).put(e,om(n)),await r.done}catch(t){if(t instanceof It)$t.warn(t.message);else{const r=at.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(r.message)}}}function om(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zE=1024,$E=30;class jE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Md();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>$E){const o=KE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Md(),{heartbeatsToSend:r,unsentEntries:i}=GE(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return $t.warn(t),""}}}function Md(){return new Date().toISOString().substring(0,10)}function GE(n,e=zE){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class HE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qp()?PT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ld(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ld(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fd(n){return ta(JSON.stringify({version:2,heartbeats:n})).length}function KE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function WE(n){An(new wn("platform-logger",e=>new tE(e),"PRIVATE")),An(new wn("heartbeat",e=>new jE(e),"PRIVATE")),ht(na,cu,n),ht(na,cu,"esm2020"),ht("fire-js","")}WE("");var QE="firebase",JE="12.11.0";/**
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
 */ht(QE,JE,"app");const mN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:It,SDK_VERSION:On,_DEFAULT_ENTRY_NAME:Ps,_addComponent:uu,_addOrOverwriteComponent:DE,_apps:vn,_clearComponents:NE,_components:Qr,_getProvider:Tr,_isFirebaseApp:Wu,_isFirebaseServerApp:de,_isFirebaseServerAppSettings:tm,_registerComponent:An,_removeServiceInstance:em,_serverApps:Wr,deleteApp:im,getApp:Pa,getApps:LE,initializeApp:rm,initializeServerApp:xE,onLog:ME,registerVersion:ht,setLogLevel:FE},Symbol.toStringTag,{value:"Module"}));/**
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
 */const YE={PHONE:"phone",TOTP:"totp"},XE={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ZE={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},ew={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},tw={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function nw(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function am(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rw=nw,cm=am,um=new Hs("auth","Firebase",am()),iw={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const ra=new Hu("@firebase/auth");function sw(n,...e){ra.logLevel<=Z.WARN&&ra.warn(`Auth (${On}): ${n}`,...e)}function qo(n,...e){ra.logLevel<=Z.ERROR&&ra.error(`Auth (${On}): ${n}`,...e)}/**
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
 */function rt(n,...e){throw Ju(n,...e)}function Qe(n,...e){return Ju(n,...e)}function Qu(n,e,t){const r={...cm(),[e]:t};return new Hs("auth","Firebase",r).create(e,{appName:n.name})}function Le(n){return Qu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ii(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&rt(n,"argument-error"),Qu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ju(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return um.create(n,...e)}function O(n,e,...t){if(!n)throw Ju(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qo(e),new Error(e)}function jt(n,e){n||Rt(e)}/**
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
 */function ks(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Yu(){return Ud()==="http:"||Ud()==="https:"}function Ud(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yu()||RT()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=wT()||bT()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xu(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class lm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lw=new Ks(3e4,6e4);function pe(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function me(n,e,t,r,i={}){return hm(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=yi({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...s};return AT()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Vn(n.emulatorConfig.host)&&(l.credentials="include"),lm.fetch()(await dm(n,n.config.apiHost,t,c),l)})}async function hm(n,e,t){n._canInitEmulator=!1;const r={...cw,...e};try{const i=new dw(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cs(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cs(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cs(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw cs(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qu(n,d,l);rt(n,d)}}catch(i){if(i instanceof It)throw i;rt(n,"network-request-failed",{message:String(i)})}}async function Qt(n,e,t,r,i={}){const s=await me(n,e,t,r,i);return"mfaPendingCredential"in s&&rt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function dm(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Xu(n.config,i):`${n.config.apiScheme}://${i}`;return uw.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function hw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),lw.get())})}}function cs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qe(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function Bd(n){return n!==void 0&&n.getResponse!==void 0}function qd(n){return n!==void 0&&n.enterprise!==void 0}class fm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function fw(n){return(await me(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function pm(n,e){return me(n,"GET","/v2/recaptchaConfig",pe(n,e))}/**
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
 */async function pw(n,e){return me(n,"POST","/v1/accounts:delete",e)}async function mw(n,e){return me(n,"POST","/v1/accounts:update",e)}async function ia(n,e){return me(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function gw(n,e=!1){return U(n).getIdToken(e)}async function mm(n,e=!1){const t=U(n),r=await t.getIdToken(e),i=Ca(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fs(qc(i.auth_time)),issuedAtTime:fs(qc(i.iat)),expirationTime:fs(qc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qc(n){return Number(n)*1e3}function Ca(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=$u(t);return i?JSON.parse(i):(qo("Failed to decode base64 JWT payload"),null)}catch(i){return qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zd(n){const e=Ca(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&_w(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _w({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class yw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ds(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Gt(n,ia(e,{idToken:t}));O(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?_m(i.providerUserInfo):[],o=Iw(n.providerData,s),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,d)}async function gm(n){const e=U(n);await Ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Iw(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _m(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Tw(n,e){const t=await hm(n,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await dm(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Vn(n.emulatorConfig.host)&&(u.credentials="include"),lm.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ew(n,e){return me(n,"POST","/v2/accounts:revokeToken",pe(n,e))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=zd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tw(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new zr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function un(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mm(this,e)}reload(){return gm(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(de(this.auth.app))return Promise.reject(Le(this.auth));const e=await this.getIdToken();return await Gt(this,pw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:E,providerData:C,stsTokenManager:D}=t;O(p&&D,e,"internal-error");const k=zr.fromJSON(this.name,D);O(typeof p=="string",e,"internal-error"),un(r,e.name),un(i,e.name),O(typeof g=="boolean",e,"internal-error"),O(typeof E=="boolean",e,"internal-error"),un(s,e.name),un(o,e.name),un(c,e.name),un(u,e.name),un(l,e.name),un(d,e.name);const F=new mt({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:k,createdAt:l,lastLoginAt:d});return C&&Array.isArray(C)&&(F.providerData=C.map(z=>({...z}))),u&&(F._redirectEventId=u),F}static async _fromIdTokenResponse(e,t,r=!1){const i=new zr;i.updateFromServerResponse(t);const s=new mt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ds(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_m(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new zr;c.updateFromIdToken(r);const u=new mt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,l),u}}/**
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
 */const $d=new Map;function Ft(n){jt(n instanceof Function,"Expected a class definition");let e=$d.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$d.set(n,e),e)}/**
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
 */class ym{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ym.type="NONE";const hu=ym;/**
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
 */function zo(n,e,t){return`firebase:${n}:${e}:${t}`}class $r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=zo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ia(this.auth,{idToken:e}).catch(()=>{});return t?mt._fromGetAccountInfoResponse(this.auth,t,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $r(Ft(hu),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ft(hu);const o=zo(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){let p;if(typeof d=="string"){const g=await ia(e,{idToken:d}).catch(()=>{});if(!g)break;p=await mt._fromGetAccountInfoResponse(e,g,d)}else p=mt._fromJSON(e,d);l!==s&&(c=p),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new $r(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new $r(s,e,r))}}/**
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
 */function jd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Am(e))return"Blackberry";if(Rm(e))return"Webos";if(Tm(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(vm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Im(n=Ce()){return/firefox\//i.test(n)}function Tm(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(n=Ce()){return/crios\//i.test(n)}function wm(n=Ce()){return/iemobile/i.test(n)}function vm(n=Ce()){return/android/i.test(n)}function Am(n=Ce()){return/blackberry/i.test(n)}function Rm(n=Ce()){return/webos/i.test(n)}function Zu(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ww(n=Ce()){var e;return Zu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function vw(){return ST()&&document.documentMode===10}function bm(n=Ce()){return Zu(n)||vm(n)||Rm(n)||Am(n)||/windows phone/i.test(n)||wm(n)}/**
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
 */function Sm(n,e=[]){let t;switch(n){case"Browser":t=jd(Ce());break;case"Worker":t=`${jd(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${On}/${r}`}/**
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
 */class Aw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Rw(n,e={}){return me(n,"GET","/v2/passwordPolicy",pe(n,e))}/**
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
 */const bw=6;class Sw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??bw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Pw{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gd(this),this.idTokenSubscription=new Gd(this),this.beforeStateQueue=new Aw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ft(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ia(this,{idToken:e}),r=await mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(de(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ds(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(de(this.app))return Promise.reject(Le(this));const t=e?U(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return de(this.app)?Promise.reject(Le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return de(this.app)?Promise.reject(Le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rw(this),t=new Sw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ew(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ft(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[Ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(de(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function we(n){return U(n)}class Gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=VT(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cw(n){Ws=n}function el(n){return Ws.loadJS(n)}function kw(){return Ws.recaptchaV2Script}function Dw(){return Ws.recaptchaEnterpriseScript}function Nw(){return Ws.gapiScript}function Pm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Vw=500,Ow=6e4,Co=1e12;class xw{constructor(e){this.auth=e,this.counter=Co,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Fw(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||Co;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||Co;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}async execute(e){var r;const t=e||Co;return(r=this._widgets.get(t))==null||r.execute(),""}}class Lw{constructor(){this.enterprise=new Mw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Mw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Fw{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Uw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Ow)},Vw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Uw(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Bw="recaptcha-enterprise",ps="NO_RECAPTCHA";class Cm{constructor(e){this.type=Bw,this.auth=we(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{pm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new fm(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;qd(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(ps)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lw().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&qd(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Dw();u.length!==0&&(u+=c),el(u).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Xi(n,e,t,r=!1,i=!1){const s=new Cm(n);let o;if(i)o=ps;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function yn(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Xi(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Xi(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=await Xi(n,e,t);return r(n,c).catch(async u=>{var l;if(((l=n._getRecaptchaConfig())==null?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Xi(n,e,t,!1,!0);return r(n,d)}return Promise.reject(u)})}else{const c=await Xi(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function km(n){const e=we(n),t=await pm(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new fm(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Cm(e).verify()}/**
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
 */function Dm(n,e){const t=Tr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(yt(s,e??{}))return i;rt(i,"already-initialized")}return t.initialize({options:e})}function qw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ft);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nm(n,e,t){const r=we(n);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Vm(e),{host:o,port:c}=zw(e),u=c===null?"":`:${c}`,l={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(yt(l,r.config.emulator)&&yt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Vn(o)?Sa(`${s}//${o}${u}`):i||$w()}function Vm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zw(n){const e=Vm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hd(o)}}}function Hd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $w(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ti{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function Om(n,e){return me(n,"POST","/v1/accounts:resetPassword",pe(n,e))}async function jw(n,e){return me(n,"POST","/v1/accounts:update",e)}async function Gw(n,e){return me(n,"POST","/v1/accounts:signUp",e)}async function Hw(n,e){return me(n,"POST","/v1/accounts:update",pe(n,e))}/**
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
 */async function Kw(n,e){return Qt(n,"POST","/v1/accounts:signInWithPassword",pe(n,e))}async function ka(n,e){return me(n,"POST","/v1/accounts:sendOobCode",pe(n,e))}async function Ww(n,e){return ka(n,e)}async function Qw(n,e){return ka(n,e)}async function Jw(n,e){return ka(n,e)}async function Yw(n,e){return ka(n,e)}/**
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
 */async function Xw(n,e){return Qt(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}async function Zw(n,e){return Qt(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}/**
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
 */class Jr extends Ti{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Jr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Jr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yn(e,t,"signInWithPassword",Kw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Xw(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yn(e,r,"signUpPassword",Gw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Zw(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zt(n,e){return Qt(n,"POST","/v1/accounts:signInWithIdp",pe(n,e))}/**
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
 */const ev="http://localhost";class Dt extends Ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new Dt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zt(e,t)}buildRequest(){const e={requestUri:ev,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */async function Kd(n,e){return me(n,"POST","/v1/accounts:sendVerificationCode",pe(n,e))}async function tv(n,e){return Qt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,e))}async function nv(n,e){const t=await Qt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,e));if(t.temporaryProof)throw cs(n,"account-exists-with-different-credential",t);return t}const rv={USER_NOT_FOUND:"user-not-found"};async function iv(n,e){const t={...e,operation:"REAUTH"};return Qt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,t),rv)}/**
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
 */class In extends Ti{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new In({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new In({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nv(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return iv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new In({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function sv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ov(n){const e=os(as(n)).link,t=e?os(as(e)).deep_link_id:null,r=os(as(n)).deep_link_id;return(r?os(as(r)).link:null)||r||t||e||n}class Ei{constructor(e){const t=os(as(e)),r=t.apiKey??null,i=t.oobCode??null,s=sv(t.mode??null);O(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ov(e);try{return new Ei(t)}catch{return null}}}function av(n){return Ei.parseLink(n)}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,t){return Jr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ei.parseLink(t);return O(r,"argument-error"),Jr._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wi extends Jt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ms extends wi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return O("providerId"in t&&"signInMethod"in t,"argument-error"),Dt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),Dt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ms.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ms.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new ms(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Ot extends wi{constructor(){super("facebook.com")}static credential(e){return Dt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class xt extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class Lt extends wi{constructor(){super("github.com")}static credential(e){return Dt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */const cv="http://localhost";class Ns extends Ti{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return zt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Ns(r,s)}static _create(e,t){return new Ns(e,t)}buildRequest(){return{requestUri:cv,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const uv="saml.";class sa extends Jt{constructor(e){O(e.startsWith(uv),"argument-error"),super(e)}static credentialFromResult(e){return sa.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return sa.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ns.fromJSON(e);return O(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Ns._create(r,t)}catch{return null}}}/**
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
 */class Mt extends wi{constructor(){super("twitter.com")}static credential(e,t){return Dt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function xm(n,e){return Qt(n,"POST","/v1/accounts:signUp",pe(n,e))}/**
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
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await mt._fromIdTokenResponse(e,r,i),o=Wd(r);return new dt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Wd(r);return new dt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Wd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function lv(n){var i;if(de(n.app))return Promise.reject(Le(n));const e=we(n);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new dt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await xm(e,{returnSecureToken:!0}),r=await dt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class oa extends It{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new oa(e,t,r,i)}}function Lm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function Mm(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function hv(n,e){const t=U(n);await Da(!0,t,e);const{providerUserInfo:r}=await mw(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Mm(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function tl(n,e,t=!1){const r=await Gt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dt._forOperation(n,"link",r)}async function Da(n,e,t){await Ds(e);const r=Mm(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";O(r.has(t)===n,e.auth,i)}/**
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
 */async function Fm(n,e,t=!1){const{auth:r}=n;if(de(r.app))return Promise.reject(Le(r));const i="reauthenticate";try{const s=await Gt(n,Lm(r,i,e,n),t);O(s.idToken,r,"internal-error");const o=Ca(s.idToken);O(o,r,"internal-error");const{sub:c}=o;return O(n.uid===c,r,"user-mismatch"),dt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
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
 */async function Um(n,e,t=!1){if(de(n.app))return Promise.reject(Le(n));const r="signIn",i=await Lm(n,r,e),s=await dt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Na(n,e){return Um(we(n),e)}async function Bm(n,e){const t=U(n);return await Da(!1,t,e.providerId),tl(t,e)}async function qm(n,e){return Fm(U(n),e)}/**
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
 */async function dv(n,e){return Qt(n,"POST","/v1/accounts:signInWithCustomToken",pe(n,e))}/**
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
 */async function fv(n,e){if(de(n.app))return Promise.reject(Le(n));const t=we(n),r=await dv(t,{token:e,returnSecureToken:!0}),i=await dt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Qs{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nl._fromServerResponse(e,t):"totpInfo"in t?rl._fromServerResponse(e,t):rt(e,"internal-error")}}class nl extends Qs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nl(t)}}class rl extends Qs{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new rl(t)}}/**
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
 */function Va(n,e,t){var r;O(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),O(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function il(n){const e=we(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pv(n,e,t){const r=we(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Va(r,i,t),await yn(r,i,"getOobCode",Qw,"EMAIL_PASSWORD_PROVIDER")}async function mv(n,e,t){await Om(U(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&il(n),r})}async function gv(n,e){await Hw(U(n),{oobCode:e})}async function zm(n,e){const t=U(n),r=await Om(t,{oobCode:e}),i=r.requestType;switch(O(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,t,"internal-error");default:O(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Qs._fromServerResponse(we(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function _v(n,e){const{data:t}=await zm(U(n),e);return t.email}async function yv(n,e,t){if(de(n.app))return Promise.reject(Le(n));const r=we(n),o=await yn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xm,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&il(n),u}),c=await dt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Iv(n,e,t){return de(n.app)?Promise.reject(Le(n)):Na(U(n),xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&il(n),r})}/**
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
 */async function Tv(n,e,t){const r=we(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){O(c.handleCodeInApp,r,"argument-error"),c&&Va(r,o,c)}s(i,t),await yn(r,i,"getOobCode",Jw,"EMAIL_PASSWORD_PROVIDER")}function Ev(n,e){const t=Ei.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function wv(n,e,t){if(de(n.app))return Promise.reject(Le(n));const r=U(n),i=xn.credentialWithLink(e,t||ks());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Na(r,i)}/**
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
 */async function vv(n,e){return me(n,"POST","/v1/accounts:createAuthUri",pe(n,e))}/**
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
 */async function Av(n,e){const t=Yu()?ks():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await vv(U(n),r);return i||[]}async function Rv(n,e){const t=U(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Va(t.auth,i,e);const{email:s}=await Ww(t.auth,i);s!==n.email&&await n.reload()}async function bv(n,e,t){const r=U(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Va(r.auth,s,t);const{email:o}=await Yw(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function Sv(n,e){return me(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Pv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=U(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Gt(r,Sv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Cv(n,e){const t=U(n);return de(t.auth.app)?Promise.reject(Le(t.auth)):$m(t,e,null)}function kv(n,e){return $m(U(n),null,e)}async function $m(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Gt(n,jw(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function Dv(n){var i,s;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(s=(i=Ca(n.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new jr(r,c)}}if(!e)return null;switch(e){case"facebook.com":return new Nv(r,t);case"github.com":return new Vv(r,t);case"google.com":return new Ov(r,t);case"twitter.com":return new xv(r,t,n.screenName||null);case"custom":case"anonymous":return new jr(r,null);default:return new jr(r,e,t)}}class jr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class jm extends jr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Nv extends jr{constructor(e,t){super(e,"facebook.com",t)}}class Vv extends jm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Ov extends jr{constructor(e,t){super(e,"google.com",t)}}class xv extends jm{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Lv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Dv(t)}/**
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
 */function Mv(n,e){return U(n).setPersistence(e)}function Fv(n){return km(n)}async function Uv(n,e){return we(n).validatePassword(e)}function Gm(n,e,t,r){return U(n).onIdTokenChanged(e,t,r)}function Hm(n,e,t){return U(n).beforeAuthStateChanged(e,t)}function Bv(n,e,t,r){return U(n).onAuthStateChanged(e,t,r)}function qv(n){U(n).useDeviceLanguage()}function zv(n,e){return U(n).updateCurrentUser(e)}function $v(n){return U(n).signOut()}function jv(n,e){return we(n).revokeAccessToken(e)}async function Gv(n){return U(n).delete()}/**
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
 */class rr{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new rr("enroll",e,t)}static _fromMfaPendingCredential(e){return new rr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return rr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return rr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class sl{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=we(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>Qs._fromServerResponse(r,c));O(i.mfaPendingCredential,r,"internal-error");const o=rr._fromMfaPendingCredential(i.mfaPendingCredential);return new sl(o,s,async c=>{const u=await c._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l={...i,idToken:u.idToken,refreshToken:u.refreshToken};switch(t.operationType){case"signIn":const d=await dt._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return O(t.user,r,"internal-error"),dt._forOperation(t.user,t.operationType,l);default:rt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Hv(n,e){var i;const t=U(n),r=e;return O(e.customData.operationType,t,"argument-error"),O((i=r.customData._serverResponse)==null?void 0:i.mfaPendingCredential,t,"argument-error"),sl._fromError(t,r)}/**
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
 */function Qd(n,e){return me(n,"POST","/v2/accounts/mfaEnrollment:start",pe(n,e))}function Kv(n,e){return me(n,"POST","/v2/accounts/mfaEnrollment:finalize",pe(n,e))}function Wv(n,e){return me(n,"POST","/v2/accounts/mfaEnrollment:start",pe(n,e))}function Qv(n,e){return me(n,"POST","/v2/accounts/mfaEnrollment:finalize",pe(n,e))}function Jv(n,e){return me(n,"POST","/v2/accounts/mfaEnrollment:withdraw",pe(n,e))}class ol{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Qs._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ol(e)}async getSession(){return rr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Gt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Gt(this.user,Jv(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const zc=new WeakMap;function Yv(n){const e=U(n);return zc.has(e)||zc.set(e,ol._fromUser(e)),zc.get(e)}const aa="__sak";/**
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
 */class Km{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xv=1e3,Zv=10;class Wm extends Km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wm.type="LOCAL";const Qm=Wm;/**
 * @license
 * Copyright 2025 Google LLC
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
 */const eA=1e3;function $c(n){var r;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((r=document.cookie.match(t))==null?void 0:r[1])??null}function jc(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class Jm{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=jc(e);if(window.cookieStore){const r=await window.cookieStore.get(t);return r==null?void 0:r.value}return $c(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const r=jc(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const r=jc(e);if(window.cookieStore){const c=(l=>{const d=l.changed.find(g=>g.name===r);d&&t(d.value),l.deleted.find(g=>g.name===r)&&t(null)}),u=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",c)}let i=$c(r);const s=setInterval(()=>{const c=$c(r);c!==i&&(t(c),i=c)},eA),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}}Jm.type="COOKIE";const tA=Jm;/**
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
 */class Ym extends Km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ym.type="SESSION";const al=Ym;/**
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
 */function nA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(t.origin,s)),u=await nA(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
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
 */function xa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const l=xa("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function iA(n){be().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function cl(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function sA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function aA(){return cl()?self:null}/**
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
 */const Xm="firebaseLocalStorageDb",cA=1,ca="firebaseLocalStorage",Zm="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function La(n,e){return n.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function uA(){const n=indexedDB.deleteDatabase(Xm);return new Js(n).toPromise()}function du(){const n=indexedDB.open(Xm,cA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ca,{keyPath:Zm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await uA(),e(await du()))})})}async function Jd(n,e,t){const r=La(n,!0).put({[Zm]:e,value:t});return new Js(r).toPromise()}async function lA(n,e){const t=La(n,!1).get(e),r=await new Js(t).toPromise();return r===void 0?null:r.value}function Yd(n,e){const t=La(n,!0).delete(e);return new Js(t).toPromise()}const hA=800,dA=3;class eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(aA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await sA(),!this.activeServiceWorker)return;this.sender=new rA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await Jd(e,aa,"1"),await Yd(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>lA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=La(i,!1).getAll();return new Js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eg.type="LOCAL";const tg=eg;/**
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
 */function Xd(n,e){return me(n,"POST","/v2/accounts/mfaSignIn:start",pe(n,e))}function fA(n,e){return me(n,"POST","/v2/accounts/mfaSignIn:finalize",pe(n,e))}function pA(n,e){return me(n,"POST","/v2/accounts/mfaSignIn:finalize",pe(n,e))}/**
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
 */const Gc=Pm("rcb"),mA=new Ks(3e4,6e4);class gA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=be().grecaptcha)!=null&&e.render)}load(e,t=""){return O(_A(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Bd(be().grecaptcha)?Promise.resolve(be().grecaptcha):new Promise((r,i)=>{const s=be().setTimeout(()=>{i(Qe(e,"network-request-failed"))},mA.get());be()[Gc]=()=>{be().clearTimeout(s),delete be()[Gc];const c=be().grecaptcha;if(!c||!Bd(c)){i(Qe(e,"internal-error"));return}const u=c.render;c.render=(l,d)=>{const p=u(l,d);return this.counter++,p},this.hostLanguage=t,r(c)};const o=`${kw()}?${yi({onload:Gc,render:"explicit",hl:t})}`;el(o).catch(()=>{clearTimeout(s),i(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=be().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _A(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class yA{async load(e){return new xw(e)}clearedOneInstance(){}}/**
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
 */const gs="recaptcha",IA={theme:"light",type:"image"};class TA{constructor(e,t,r={...IA}){this.parameters=r,this.type=gs,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=we(e),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yA:new gA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=be()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Yu()&&!cl(),this.auth,"internal-error"),await EA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fw(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function EA(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class ul{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=In._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function wA(n,e,t){if(de(n.app))return Promise.reject(Le(n));const r=we(n),i=await Ma(r,e,U(t));return new ul(i,s=>Na(r,s))}async function vA(n,e,t){const r=U(n);await Da(!1,r,"phone");const i=await Ma(r.auth,e,U(t));return new ul(i,s=>Bm(r,s))}async function AA(n,e,t){const r=U(n);if(de(r.auth.app))return Promise.reject(Le(r.auth));const i=await Ma(r.auth,e,U(t));return new ul(i,s=>qm(r,s))}async function Ma(n,e,t){var r;if(!n._getRecaptchaConfig())try{await km(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){O(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await yn(n,o,"mfaSmsEnrollment",async(d,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===ps){O((t==null?void 0:t.type)===gs,d,"argument-error");const g=await Hc(d,p,t);return Qd(d,g)}return Qd(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{O(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;O(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await yn(n,c,"mfaSmsSignIn",async(p,g)=>{if(g.phoneSignInInfo.captchaResponse===ps){O((t==null?void 0:t.type)===gs,p,"argument-error");const E=await Hc(p,g,t);return Xd(p,E)}return Xd(p,g)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await yn(n,s,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===ps){O((t==null?void 0:t.type)===gs,l,"argument-error");const p=await Hc(l,d,t);return Kd(l,p)}return Kd(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function RA(n,e){const t=U(n);if(de(t.auth.app))return Promise.reject(Le(t.auth));await tl(t,e)}async function Hc(n,e,t){O(t.type===gs,n,"argument-error");const r=await t.verify();O(typeof r=="string",n,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */class sr{constructor(e){this.providerId=sr.PROVIDER_ID,this.auth=we(e)}verifyPhoneNumber(e,t){return Ma(this.auth,e,U(t))}static credential(e,t){return In._fromVerification(e,t)}static credentialFromResult(e){const t=e;return sr.credentialFromTaggedObject(t)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?In._fromTokenResponse(t,r):null}}sr.PROVIDER_ID="phone";sr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Er(n,e){return e?Ft(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ll extends Ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bA(n){return Um(n.auth,new ll(n),n.bypassAuthState)}function SA(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Fm(t,new ll(n),n.bypassAuthState)}async function PA(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),tl(t,new ll(n),n.bypassAuthState)}/**
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
 */class ng{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bA;case"linkViaPopup":case"linkViaRedirect":return PA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:rt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CA=new Ks(2e3,1e4);async function kA(n,e,t){if(de(n.app))return Promise.reject(Qe(n,"operation-not-supported-in-this-environment"));const r=we(n);Ii(n,e,Jt);const i=Er(r,t);return new Ut(r,"signInViaPopup",e,i).executeNotNull()}async function DA(n,e,t){const r=U(n);if(de(r.auth.app))return Promise.reject(Qe(r.auth,"operation-not-supported-in-this-environment"));Ii(r.auth,e,Jt);const i=Er(r.auth,t);return new Ut(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function NA(n,e,t){const r=U(n);Ii(r.auth,e,Jt);const i=Er(r.auth,t);return new Ut(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ut extends ng{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CA.get())};e()}}Ut.currentPopupAction=null;/**
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
 */const VA="pendingRedirect",$o=new Map;class OA extends ng{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$o.get(this.auth._key());if(!e){try{const r=await xA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$o.set(this.auth._key(),e)}return this.bypassAuthState||$o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xA(n,e){const t=ig(e),r=rg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function hl(n,e){return rg(n)._set(ig(e),"true")}function LA(n,e){$o.set(n._key(),e)}function rg(n){return Ft(n._redirectPersistence)}function ig(n){return zo(VA,n.config.apiKey,n.name)}/**
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
 */function MA(n,e,t){return FA(n,e,t)}async function FA(n,e,t){if(de(n.app))return Promise.reject(Le(n));const r=we(n);Ii(n,e,Jt),await r._initializationPromise;const i=Er(r,t);return await hl(i,r),i._openRedirect(r,e,"signInViaRedirect")}function UA(n,e,t){return BA(n,e,t)}async function BA(n,e,t){const r=U(n);if(Ii(r.auth,e,Jt),de(r.auth.app))return Promise.reject(Le(r.auth));await r.auth._initializationPromise;const i=Er(r.auth,t);await hl(i,r.auth);const s=await og(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function qA(n,e,t){return zA(n,e,t)}async function zA(n,e,t){const r=U(n);Ii(r.auth,e,Jt),await r.auth._initializationPromise;const i=Er(r.auth,t);await Da(!1,r,e.providerId),await hl(i,r.auth);const s=await og(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function $A(n,e){return await we(n)._initializationPromise,sg(n,e,!1)}async function sg(n,e,t=!1){if(de(n.app))return Promise.reject(Le(n));const r=we(n),i=Er(r,e),o=await new OA(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function og(n){const e=xa(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const jA=600*1e3;class GA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ag(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zd(e))}saveEventToCache(e){this.cachedEventUids.add(Zd(e)),this.lastProcessedEventTime=Date.now()}}function Zd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ag({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ag(n);default:return!1}}/**
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
 */async function KA(n,e={}){return me(n,"GET","/v1/projects",e)}/**
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
 */const WA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QA=/^https?/;async function JA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await KA(n);for(const t of e)try{if(YA(t))return}catch{}rt(n,"unauthorized-domain")}function YA(n){const e=ks(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!QA.test(t))return!1;if(WA.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const XA=new Ks(3e4,6e4);function ef(){const n=be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ZA(n){return new Promise((e,t)=>{var i,s,o;function r(){ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ef(),t(Qe(n,"network-request-failed"))},timeout:XA.get()})}if((s=(i=be().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=be().gapi)!=null&&o.load)r();else{const c=Pm("iframefcb");return be()[c]=()=>{gapi.load?r():t(Qe(n,"network-request-failed"))},el(`${Nw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw jo=null,e})}let jo=null;function eR(n){return jo=jo||ZA(n),jo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tR=new Ks(5e3,15e3),nR="__/auth/iframe",rR="emulator/auth/iframe",iR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oR(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xu(e,rR):`https://${n.config.authDomain}/${nR}`,r={apiKey:e.apiKey,appName:n.name,v:On},i=sR.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${yi(r).slice(1)}`}async function aR(n){const e=await eR(n),t=be().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:oR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(n,"network-request-failed"),c=be().setTimeout(()=>{s(o)},tR.get());function u(){be().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uR=500,lR=600,hR="_blank",dR="http://localhost";class tf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fR(n,e,t,r=uR,i=lR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...cR,width:r.toString(),height:i.toString(),top:s,left:o},l=Ce().toLowerCase();t&&(c=Em(l)?hR:t),Im(l)&&(e=e||dR,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(ww(l)&&c!=="_self")return pR(e||"",c),new tf(null);const p=window.open(e||"",c,d);O(p,n,"popup-blocked");try{p.focus()}catch{}return new tf(p)}function pR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const mR="__/auth/handler",gR="emulator/auth/handler",_R=encodeURIComponent("fac");async function nf(n,e,t,r,i,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:On,eventId:i};if(e instanceof Jt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",NT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof wi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),l=u?`#${_R}=${encodeURIComponent(u)}`:"";return`${yR(n)}?${yi(c).slice(1)}${l}`}function yR({config:n}){return n.emulator?Xu(n,gR):`https://${n.authDomain}/${mR}`}/**
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
 */const Kc="webStorageSupport";class IR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=al,this._completeRedirectFn=sg,this._overrideRedirectResult=LA}async _openPopup(e,t,r,i){var o;jt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await nf(e,t,r,ks(),i);return fR(e,s,xa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await nf(e,t,r,ks(),i);return iA(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await aR(e),r=new GA(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kc,{type:Kc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Kc];s!==void 0&&t(!!s),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bm()||Tm()||Zu()}}const cg=IR;class ug{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rt("unexpected MultiFactorSessionType")}}}class dl extends ug{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new dl(e)}_finalizeEnroll(e,t,r){return Kv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fA(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lg{constructor(){}static assertion(e){return dl._fromCredential(e)}}lg.FACTOR_ID="phone";class hg{static assertionForEnrollment(e,t){return Vs._fromSecret(e,t)}static assertionForSignIn(e,t){return Vs._fromEnrollmentId(e,t)}static async generateSecret(e){var i;const t=e;O(typeof((i=t.user)==null?void 0:i.auth)<"u","internal-error");const r=await Wv(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Fa._fromStartTotpMfaEnrollmentResponse(r,t.user.auth)}}hg.FACTOR_ID="totp";class Vs extends ug{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new Vs(t,void 0,e)}static _fromEnrollmentId(e,t){return new Vs(t,e)}async _finalizeEnroll(e,t,r){return O(typeof this.secret<"u",e,"argument-error"),Qv(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){O(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return pA(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Fa{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Fa(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let r=!1;return(ko(e)||ko(t))&&(r=!0),r&&(ko(e)&&(e=((i=this.auth.currentUser)==null?void 0:i.email)||"unknownuser"),ko(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ko(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var rf="@firebase/auth",sf="1.12.2";/**
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
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ER(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wR(n){An(new wn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sm(n)},l=new Pw(r,i,s,u);return qw(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),An(new wn("auth-internal",e=>{const t=we(e.getProvider("auth").getImmediate());return(r=>new TR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(rf,sf,ER(n)),ht(rf,sf,"esm2020")}/**
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
 */const vR=300,AR=$p("authIdTokenMaxAge")||vR;let of=null;const RR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>AR)return;const i=t==null?void 0:t.token;of!==i&&(of=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bR(n=Pa()){const e=Tr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dm(n,{popupRedirectResolver:cg,persistence:[tg,Qm,al]}),r=$p("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RR(s.toString());Hm(t,o,()=>o(t.currentUser)),Gm(t,c=>o(c))}}const i=qp("auth");return i&&Nm(t,`http://${i}`),t}function SR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Cw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",SR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wR("Browser");const gN=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:tw,ActionCodeURL:Ei,AuthCredential:Ti,AuthErrorCodes:iw,EmailAuthCredential:Jr,EmailAuthProvider:xn,FacebookAuthProvider:Ot,FactorId:YE,GithubAuthProvider:Lt,GoogleAuthProvider:xt,OAuthCredential:Dt,OAuthProvider:ms,OperationType:ew,PhoneAuthCredential:In,PhoneAuthProvider:sr,PhoneMultiFactorGenerator:lg,ProviderId:XE,RecaptchaVerifier:TA,SAMLAuthProvider:sa,SignInMethod:ZE,TotpMultiFactorGenerator:hg,TotpSecret:Fa,TwitterAuthProvider:Mt,applyActionCode:gv,beforeAuthStateChanged:Hm,browserCookiePersistence:tA,browserLocalPersistence:Qm,browserPopupRedirectResolver:cg,browserSessionPersistence:al,checkActionCode:zm,confirmPasswordReset:mv,connectAuthEmulator:Nm,createUserWithEmailAndPassword:yv,debugErrorMap:rw,deleteUser:Gv,fetchSignInMethodsForEmail:Av,getAdditionalUserInfo:Lv,getAuth:bR,getIdToken:gw,getIdTokenResult:mm,getMultiFactorResolver:Hv,getRedirectResult:$A,inMemoryPersistence:hu,indexedDBLocalPersistence:tg,initializeAuth:Dm,initializeRecaptchaConfig:Fv,isSignInWithEmailLink:Ev,linkWithCredential:Bm,linkWithPhoneNumber:vA,linkWithPopup:NA,linkWithRedirect:qA,multiFactor:Yv,onAuthStateChanged:Bv,onIdTokenChanged:Gm,parseActionCodeURL:av,prodErrorMap:cm,reauthenticateWithCredential:qm,reauthenticateWithPhoneNumber:AA,reauthenticateWithPopup:DA,reauthenticateWithRedirect:UA,reload:gm,revokeAccessToken:jv,sendEmailVerification:Rv,sendPasswordResetEmail:pv,sendSignInLinkToEmail:Tv,setPersistence:Mv,signInAnonymously:lv,signInWithCredential:Na,signInWithCustomToken:fv,signInWithEmailAndPassword:Iv,signInWithEmailLink:wv,signInWithPhoneNumber:wA,signInWithPopup:kA,signInWithRedirect:MA,signOut:$v,unlink:hv,updateCurrentUser:zv,updateEmail:Cv,updatePassword:kv,updatePhoneNumber:RA,updateProfile:Pv,useDeviceLanguage:qv,validatePassword:Uv,verifyBeforeUpdateEmail:bv,verifyPasswordResetCode:_v},Symbol.toStringTag,{value:"Module"}));var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,dg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(v,w,S){for(var y=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)y[Je-2]=arguments[Je];return _.prototype[w].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,I){I||(I=0);const v=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)v[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;w<16;++w)v[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],w=T.g[2];let S=T.g[3],y;y=_+(S^I&(w^S))+v[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+v[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+v[2]+606105819&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+v[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+v[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+v[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+v[6]+2821735955&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+v[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+v[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+v[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+v[10]+4294925233&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+v[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+v[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+v[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+v[14]+2792965006&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+v[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(w^S&(I^w))+v[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+v[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+v[11]+643717713&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+v[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+v[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+v[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+v[15]+3634488961&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+v[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+v[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+v[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+v[3]+4107603335&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+v[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+v[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+v[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+v[7]+1735328473&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+v[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(I^w^S)+v[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+v[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+v[11]+1839030562&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+v[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+v[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+v[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+v[7]+4139469664&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+v[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+v[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+v[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+v[3]+3572445317&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+v[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+v[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+v[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+v[15]+530742520&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+v[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(w^(I|~S))+v[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+v[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+v[14]+2878612391&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+v[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+v[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+v[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+v[10]+4293915773&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+v[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+v[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+v[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+v[6]+2734768916&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+v[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+v[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+v[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+v[2]+718787259&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,v=this.C;let w=this.h,S=0;for(;S<_;){if(w==0)for(;S<=I;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(v[w++]=T.charCodeAt(S++),w==this.blockSize){i(this,v),w=0;break}}else for(;S<_;)if(v[w++]=T[S++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let v=0;v<32;v+=8)T[_++]=this.g[I]>>>v&255;return T};function s(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let v=!0;for(let w=T.length-1;w>=0;w--){const S=T[w]|0;v&&S==_||(I[w]=S,v=!1)}this.g=I}var c={};function u(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return k(l(-T));const _=[];let I=1;for(let v=0;T>=I;v++)_[v]=T/I|0,I*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return k(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=l(Math.pow(_,8));let v=p;for(let S=0;S<T.length;S+=8){var w=Math.min(8,T.length-S);const y=parseInt(T.substring(S,S+w),_);w<8?(w=l(Math.pow(_,w)),v=v.j(w).add(l(y))):(v=v.j(I),v=v.add(l(y)))}return v}var p=u(0),g=u(1),E=u(16777216);n=o.prototype,n.m=function(){if(D(this))return-k(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const v=this.i(I);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(D(this))return"-"+k(this).toString(T);const _=l(Math.pow(T,6));var I=this;let v="";for(;;){const w=H(I,_).g;I=F(I,w.j(_));let S=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=w,C(I))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=F(this,T),D(T)?-1:C(T)?0:1};function k(T){const _=T.g.length,I=[];for(let v=0;v<_;v++)I[v]=~T.g[v];return new o(I,~T.h).add(g)}n.abs=function(){return D(this)?k(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let v=0;for(let w=0;w<=_;w++){let S=v+(this.i(w)&65535)+(T.i(w)&65535),y=(S>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=y>>>16,S&=65535,y&=65535,I[w]=y<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function F(T,_){return T.add(k(_))}n.j=function(T){if(C(this)||C(T))return p;if(D(this))return D(T)?k(this).j(k(T)):k(k(this).j(T));if(D(T))return k(this.j(k(T)));if(this.l(E)<0&&T.l(E)<0)return l(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var v=0;v<2*_;v++)I[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const S=this.i(v)>>>16,y=this.i(v)&65535,Je=T.i(w)>>>16,$n=T.i(w)&65535;I[2*v+2*w]+=y*$n,z(I,2*v+2*w),I[2*v+2*w+1]+=S*$n,z(I,2*v+2*w+1),I[2*v+2*w+1]+=y*Je,z(I,2*v+2*w+1),I[2*v+2*w+2]+=S*Je,z(I,2*v+2*w+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function z(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function B(T,_){this.g=T,this.h=_}function H(T,_){if(C(_))throw Error("division by zero");if(C(T))return new B(p,p);if(D(T))return _=H(k(T),_),new B(k(_.g),k(_.h));if(D(_))return _=H(T,k(_)),new B(k(_.g),_.h);if(T.g.length>30){if(D(T)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,v=_;v.l(T)<=0;)I=W(I),v=W(v);var w=J(I,1),S=J(v,1);for(v=J(v,2),I=J(I,2);!C(v);){var y=S.add(v);y.l(T)<=0&&(w=w.add(I),S=y),v=J(v,1),I=J(I,1)}return _=F(T,w.j(_)),new B(w,_)}for(w=p;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(I)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=l(I),y=S.j(_);D(y)||y.l(T)>0;)I-=v,S=l(I),y=S.j(_);C(S)&&(S=g),w=w.add(S),T=F(T,y)}return new B(w,T)}n.B=function(T){return H(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)&T.i(v);return new o(I,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)|T.i(v);return new o(I,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let v=0;v<_;v++)I[v]=this.i(v)^T.i(v);return new o(I,this.h^T.h)};function W(T){const _=T.g.length+1,I=[];for(let v=0;v<_;v++)I[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(I,T.h)}function J(T,_){const I=_>>5;_%=32;const v=T.g.length-I,w=[];for(let S=0;S<v;S++)w[S]=_>0?T.i(S+I)>>>_|T.i(S+I+1)<<32-_:T.i(S+I);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Tn=o}).apply(typeof af<"u"?af:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fg,us,pg,Go,fu,mg,gg,_g;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in f))break e;f=f[R]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&f.push([m,h[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function l(a,h,f){return l=u,l.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,R,P){for(var M=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)M[Q-2]=arguments[Q];return h.prototype[R].apply(m,M)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function C(a,h){for(let m=1;m<arguments.length;m++){const R=arguments[m];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=a.length||0;const P=R.length||0;a.length=f+P;for(let M=0;M<P;M++)a[f+M]=R[M]}else a.push(R)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function F(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class z{constructor(){this.h=this.g=null}add(h,f){const m=B.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var B=new D(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,J=!1,T=new z,_=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(I)}};function I(){for(var a;a=F();){try{a.h.call(a.g)}catch(f){k(f)}var h=B;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}J=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Je(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Je,w),Je.prototype.init=function(a,h){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Je.Z.h.call(this)},Je.prototype.h=function(){Je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $n="closure_listenable_"+(Math.random()*1e6|0),LI=0;function MI(a,h,f,m,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=R,this.key=++LI,this.da=this.fa=!1}function po(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function mo(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function FI(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ch(a){const h={};for(const f in a)h[f]=a[f];return h}const kh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dh(a,h){let f,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(f in m)a[f]=m[f];for(let P=0;P<kh.length;P++)f=kh[P],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function go(a){this.src=a,this.g={},this.h=0}go.prototype.add=function(a,h,f,m,R){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const M=fc(a,h,m,R);return M>-1?(h=a[M],f||(h.fa=!1)):(h=new MI(h,this.src,P,!!m,R),h.fa=f,a.push(h)),h};function dc(a,h){const f=h.type;if(f in a.g){var m=a.g[f],R=Array.prototype.indexOf.call(m,h,void 0),P;(P=R>=0)&&Array.prototype.splice.call(m,R,1),P&&(po(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function fc(a,h,f,m){for(let R=0;R<a.length;++R){const P=a[R];if(!P.da&&P.listener==h&&P.capture==!!f&&P.ha==m)return R}return-1}var pc="closure_lm_"+(Math.random()*1e6|0),mc={};function Nh(a,h,f,m,R){if(Array.isArray(h)){for(let P=0;P<h.length;P++)Nh(a,h[P],f,m,R);return null}return f=xh(f),a&&a[$n]?a.J(h,f,c(m)?!!m.capture:!1,R):UI(a,h,f,!1,m,R)}function UI(a,h,f,m,R,P){if(!h)throw Error("Invalid event type");const M=c(R)?!!R.capture:!!R;let Q=_c(a);if(Q||(a[pc]=Q=new go(a)),f=Q.add(h,f,m,M,P),f.proxy)return f;if(m=BI(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)S||(R=M),R===void 0&&(R=!1),a.addEventListener(h.toString(),m,R);else if(a.attachEvent)a.attachEvent(Oh(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function BI(){function a(f){return h.call(a.src,a.listener,f)}const h=qI;return a}function Vh(a,h,f,m,R){if(Array.isArray(h))for(var P=0;P<h.length;P++)Vh(a,h[P],f,m,R);else m=c(m)?!!m.capture:!!m,f=xh(f),a&&a[$n]?(a=a.i,P=String(h).toString(),P in a.g&&(h=a.g[P],f=fc(h,f,m,R),f>-1&&(po(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[P],a.h--)))):a&&(a=_c(a))&&(h=a.g[h.toString()],a=-1,h&&(a=fc(h,f,m,R)),(f=a>-1?h[a]:null)&&gc(f))}function gc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$n])dc(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(Oh(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=_c(h))?(dc(f,a),f.h==0&&(f.src=null,h[pc]=null)):po(a)}}}function Oh(a){return a in mc?mc[a]:mc[a]="on"+a}function qI(a,h){if(a.da)a=!0;else{h=new Je(h,this);const f=a.listener,m=a.ha||a.src;a.fa&&gc(a),a=f.call(m,h)}return a}function _c(a){return a=a[pc],a instanceof go?a:null}var yc="__closure_events_fn_"+(Math.random()*1e9>>>0);function xh(a){return typeof a=="function"?a:(a[yc]||(a[yc]=function(h){return a.handleEvent(h)}),a[yc])}function Ue(){v.call(this),this.i=new go(this),this.M=this,this.G=null}p(Ue,v),Ue.prototype[$n]=!0,Ue.prototype.removeEventListener=function(a,h,f,m){Vh(this,a,h,f,m)};function Ge(a,h){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var R=h;h=new w(m,a),Dh(h,R)}R=!0;let P,M;if(f)for(M=f.length-1;M>=0;M--)P=h.g=f[M],R=_o(P,m,!0,h)&&R;if(P=h.g=a,R=_o(P,m,!0,h)&&R,R=_o(P,m,!1,h)&&R,f)for(M=0;M<f.length;M++)P=h.g=f[M],R=_o(P,m,!1,h)&&R}Ue.prototype.N=function(){if(Ue.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let m=0;m<f.length;m++)po(f[m]);delete a.g[h],a.h--}}this.G=null},Ue.prototype.J=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},Ue.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function _o(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let P=0;P<h.length;++P){const M=h[P];if(M&&!M.da&&M.capture==f){const Q=M.listener,Pe=M.ha||M.src;M.fa&&dc(a.i,M),R=Q.call(Pe,m)!==!1&&R}}return R&&!m.defaultPrevented}function zI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Lh(a){a.g=zI(()=>{a.g=null,a.i&&(a.i=!1,Lh(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $I extends v{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Lh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(a){v.call(this),this.h=a,this.g={}}p(Li,v);var Mh=[];function Fh(a){mo(a.g,function(h,f){this.g.hasOwnProperty(f)&&gc(h)},a),a.g={}}Li.prototype.N=function(){Li.Z.N.call(this),Fh(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ic=o.JSON.stringify,jI=o.JSON.parse,GI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Uh(){}function Bh(){}var Mi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tc(){w.call(this,"d")}p(Tc,w);function Ec(){w.call(this,"c")}p(Ec,w);var jn={},qh=null;function yo(){return qh=qh||new Ue}jn.Ia="serverreachability";function zh(a){w.call(this,jn.Ia,a)}p(zh,w);function Fi(a){const h=yo();Ge(h,new zh(h))}jn.STAT_EVENT="statevent";function $h(a,h){w.call(this,jn.STAT_EVENT,a),this.stat=h}p($h,w);function He(a){const h=yo();Ge(h,new $h(h,a))}jn.Ja="timingevent";function jh(a,h){w.call(this,jn.Ja,a),this.size=h}p(jh,w);function Ui(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Bi(){this.g=!0}Bi.prototype.ua=function(){this.g=!1};function HI(a,h,f,m,R,P){a.info(function(){if(a.g)if(P){var M="",Q=P.split("&");for(let ae=0;ae<Q.length;ae++){var Pe=Q[ae].split("=");if(Pe.length>1){const Ne=Pe[0];Pe=Pe[1];const Et=Ne.split("_");M=Et.length>=2&&Et[1]=="type"?M+(Ne+"="+Pe+"&"):M+(Ne+"=redacted&")}}}else M=null;else M=P;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+f+`
`+M})}function KI(a,h,f,m,R,P,M){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+f+`
`+P+" "+M})}function Pr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+QI(a,f)+(m?" "+m:"")})}function WI(a,h){a.info(function(){return"TIMEOUT: "+h})}Bi.prototype.info=function(){};function QI(a,h){if(!a.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var f=P[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let M=1;M<m.length;M++)m[M]=""}}}}return Ic(P)}catch{return h}}var Io={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hh;function wc(){}p(wc,Uh),wc.prototype.g=function(){return new XMLHttpRequest},Hh=new wc;function qi(a){return encodeURIComponent(String(a))}function JI(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function nn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.S=m||1,this.V=new Li(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Kh}function Kh(){this.i=null,this.g="",this.h=!1}var Wh={},vc={};function Ac(a,h,f){a.M=1,a.A=Eo(Tt(h)),a.u=f,a.R=!0,Qh(a,null)}function Qh(a,h){a.F=Date.now(),To(a),a.B=Tt(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),cd(f.i,"t",m),a.C=0,f=a.j.L,a.h=new Kh,a.g=bd(a.j,f?h:null,!a.u),a.P>0&&(a.O=new $I(l(a.Y,a,a.g),a.P)),h=a.V,f=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Mh[0]=R.toString()),R=Mh);for(let P=0;P<R.length;P++){const M=Nh(f,R[P],m||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=a.J?Ch(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Fi(),HI(a.i,a.v,a.B,a.l,a.S,a.u)}nn.prototype.ba=function(a){a=a.target;const h=this.O;h&&on(a)==3?h.j():this.Y(a)},nn.prototype.Y=function(a){try{if(a==this.g)e:{const Q=on(this.g),Pe=this.g.ya(),ae=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||md(this.g)))){this.K||Q!=4||Pe==7||(Pe==8||ae<=0?Fi(3):Fi(2)),Rc(this);var h=this.g.ca();this.X=h;var f=YI(this);if(this.o=h==200,KI(this.i,this.v,this.B,this.l,this.S,Q,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var P=m;break t}}P=null}if(a=P)Pr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bc(this,a);else{this.o=!1,this.m=3,He(12),Gn(this),zi(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<f.length;)if(Ne=XI(this,f),Ne==vc){Q==4&&(this.m=4,He(14),a=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Wh){this.m=4,He(15),Pr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Pr(this.i,this.l,Ne,null),bc(this,Ne);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||f.length!=0||this.h.h||(this.m=1,He(16),a=!1),this.o=this.o&&a,!a)Pr(this.i,this.l,f,"[Invalid Chunked Response]"),Gn(this),zi(this);else if(f.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Oc(M),M.P=!0,He(11))}}else Pr(this.i,this.l,f,null),bc(this,f);Q==4&&Gn(this),this.o&&!this.K&&(Q==4?wd(this.j,this):(this.o=!1,To(this)))}else dT(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),Gn(this),zi(this)}}}catch{}finally{}};function YI(a){if(!Jh(a))return a.g.la();const h=md(a.g);if(h==="")return"";let f="";const m=h.length,R=on(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gn(a),zi(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<m;P++)a.h.h=!0,f+=a.h.i.decode(h[P],{stream:!(R&&P==m-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Jh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function XI(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?vc:(f=Number(h.substring(f,m)),isNaN(f)?Wh:(m+=1,m+f>h.length?vc:(h=h.slice(m,m+f),a.C=m+f,h)))}nn.prototype.cancel=function(){this.K=!0,Gn(this)};function To(a){a.T=Date.now()+a.H,Yh(a,a.H)}function Yh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ui(l(a.aa,a),h)}function Rc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(WI(this.i,this.B),this.M!=2&&(Fi(),He(17)),Gn(this),this.m=2,zi(this)):Yh(this,this.T-a)};function zi(a){a.j.I==0||a.K||wd(a.j,a)}function Gn(a){Rc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Fh(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function bc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Sc(f.h,a))){if(!a.L&&Sc(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)bo(f),Ao(f);else break e;Vc(f),He(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ui(l(f.Va,f),6e3));ed(f.h)<=1&&f.ta&&(f.ta=void 0)}else Kn(f,11)}else if((a.L||f.g==a)&&bo(f),!y(h))for(R=f.Ba.g.parse(h),h=0;h<R.length;h++){let ae=R[h];const Ne=ae[0];if(!(Ne<=f.K))if(f.K=Ne,ae=ae[1],f.I==2)if(ae[0]=="c"){f.M=ae[1],f.ba=ae[2];const Et=ae[3];Et!=null&&(f.ka=Et,f.j.info("VER="+f.ka));const Wn=ae[4];Wn!=null&&(f.za=Wn,f.j.info("SVER="+f.za));const an=ae[5];an!=null&&typeof an=="number"&&an>0&&(m=1.5*an,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const cn=a.g;if(cn){const Po=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var P=m.h;P.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Pc(P,P.h),P.h=null))}if(m.G){const xc=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;xc&&(m.wa=xc,le(m.J,m.G,xc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var M=a;if(m.na=Rd(m,m.L?m.ba:null,m.W),M.L){td(m.h,M);var Q=M,Pe=m.O;Pe&&(Q.H=Pe),Q.D&&(Rc(Q),To(Q)),m.g=M}else Td(m);f.i.length>0&&Ro(f)}else ae[0]!="stop"&&ae[0]!="close"||Kn(f,7);else f.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Kn(f,7):Nc(f):ae[0]!="noop"&&f.l&&f.l.qa(ae),f.A=0)}}Fi(4)}catch{}}var ZI=class{constructor(a,h){this.g=a,this.map=h}};function Xh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ed(a){return a.h?1:a.g?a.g.size:0}function Sc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Pc(a,h){a.g?a.g.add(h):a.h=h}function td(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xh.prototype.cancel=function(){if(this.i=nd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return E(a.i)}var rd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eT(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let R,P=null;m>=0?(R=a[f].substring(0,m),P=a[f].substring(m+1)):R=a[f],h(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function rn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof rn?(this.l=a.l,$i(this,a.j),this.o=a.o,this.g=a.g,ji(this,a.u),this.h=a.h,Cc(this,ud(a.i)),this.m=a.m):a&&(h=String(a).match(rd))?(this.l=!1,$i(this,h[1]||"",!0),this.o=Gi(h[2]||""),this.g=Gi(h[3]||"",!0),ji(this,h[4]),this.h=Gi(h[5]||"",!0),Cc(this,h[6]||"",!0),this.m=Gi(h[7]||"")):(this.l=!1,this.i=new Ki(null,this.l))}rn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Hi(h,id,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hi(h,id,!0),"@"),a.push(qi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Hi(f,f.charAt(0)=="/"?rT:nT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Hi(f,sT)),a.join("")},rn.prototype.resolve=function(a){const h=Tt(this);let f=!!a.j;f?$i(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var m=a.h;if(f)ji(h,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=h.h.lastIndexOf("/");R!=-1&&(m=h.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let M=0;M<R.length;){const Q=R[M++];Q=="."?m&&M==R.length&&P.push(""):Q==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),m&&M==R.length&&P.push("")):(P.push(Q),m=!0)}m=P.join("/")}else m=R}return f?h.h=m:f=a.i.toString()!=="",f?Cc(h,ud(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Tt(a){return new rn(a)}function $i(a,h,f){a.j=f?Gi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ji(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Cc(a,h,f){h instanceof Ki?(a.i=h,oT(a.i,a.l)):(f||(h=Hi(h,iT)),a.i=new Ki(h,a.l))}function le(a,h,f){a.i.set(h,f)}function Eo(a){return le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Gi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,tT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var id=/[#\/\?@]/g,nT=/[#\?:]/g,rT=/[#\?]/g,iT=/[#\?@]/g,sT=/#/g;function Ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&eT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Ki.prototype,n.add=function(a,h){Hn(this),this.i=null,a=Cr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function sd(a,h){Hn(a),h=Cr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function od(a,h){return Hn(a),h=Cr(a,h),a.g.has(h)}n.forEach=function(a,h){Hn(this),this.g.forEach(function(f,m){f.forEach(function(R){a.call(h,R,m,this)},this)},this)};function ad(a,h){Hn(a);let f=[];if(typeof h=="string")od(a,h)&&(f=f.concat(a.g.get(Cr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return Hn(this),this.i=null,a=Cr(this,a),od(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=ad(this,a),a.length>0?String(a[0]):h):h};function cd(a,h,f){sd(a,h),f.length>0&&(a.i=null,a.g.set(Cr(a,h),E(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var f=h[m];const R=qi(f);f=ad(this,f);for(let P=0;P<f.length;P++){let M=R;f[P]!==""&&(M+="="+qi(f[P])),a.push(M)}}return this.i=a.join("&")};function ud(a){const h=new Ki;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Cr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function oT(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,m){const R=m.toLowerCase();m!=R&&(sd(this,m),cd(this,R,f))},a)),a.j=h}function aT(a,h){const f=new Bi;if(o.Image){const m=new Image;m.onload=d(sn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=d(sn,f,"TestLoadImage: error",!1,h,m),m.onabort=d(sn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=d(sn,f,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function cT(a,h){const f=new Bi,m=new AbortController,R=setTimeout(()=>{m.abort(),sn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(R),P.ok?sn(f,"TestPingServer: ok",!0,h):sn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),sn(f,"TestPingServer: error",!1,h)})}function sn(a,h,f,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(f)}catch{}}function uT(){this.g=new GI}function kc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(kc,Uh),kc.prototype.g=function(){return new wo(this.i,this.h)};function wo(a,h){Ue.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wo,Ue),n=wo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Qi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ld(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ld(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Wi(this):Qi(this),this.readyState==3&&ld(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Wi(this))},n.Na=function(a){this.g&&(this.response=a,Wi(this))},n.ga=function(){this.g&&Wi(this)};function Wi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Qi(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hd(a){let h="";return mo(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Dc(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=hd(f),typeof a=="string"?f!=null&&qi(f):le(a,h,f))}function Ee(a){Ue.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ee,Ue);var lT=/^https?$/i,hT=["POST","PUT"];n=Ee.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hh.g(),this.g.onreadystatechange=g(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){dd(this,P);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)f.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())f.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(hT,h,void 0)>=0)||m||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of f)this.g.setRequestHeader(P,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){dd(this,P)}};function dd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,fd(a),vo(a)}function fd(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ge(this,"complete"),Ge(this,"abort"),vo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vo(this,!0)),Ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?pd(this):this.Xa())},n.Xa=function(){pd(this)};function pd(a){if(a.h&&typeof s<"u"){if(a.v&&on(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ge(a,"readystatechange"),on(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=P===0){let M=String(a.D).match(rd)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),m=!lT.test(M?M.toLowerCase():"")}f=m}if(f)Ge(a,"complete"),Ge(a,"success");else{a.o=6;try{var R=on(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",fd(a)}}finally{vo(a)}}}}function vo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Ge(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function on(a){return a.g?a.g.readyState:0}n.ca=function(){try{return on(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),jI(h)}};function md(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dT(a){const h={};a=(a.g&&on(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var f=JI(a[m]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=h[R]||[];h[R]=P,P.push(f)}FI(h,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function gd(a){this.za=0,this.i=[],this.j=new Bi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ji("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ji("baseRetryDelayMs",5e3,a),this.Za=Ji("retryDelaySeedMs",1e4,a),this.Ta=Ji("forwardChannelMaxRetries",2,a),this.va=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Xh(a&&a.concurrentRequestLimit),this.Ba=new uT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=gd.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,m){He(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=Rd(this,null,this.W),Ro(this)};function Nc(a){if(_d(a),a.I==3){var h=a.V++,f=Tt(a.J);if(le(f,"SID",a.M),le(f,"RID",h),le(f,"TYPE","terminate"),Yi(a,f),h=new nn(a,a.j,h),h.M=2,h.A=Eo(Tt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=bd(h.j,null),h.g.ea(h.A)),h.F=Date.now(),To(h)}Ad(a)}function Ao(a){a.g&&(Oc(a),a.g.cancel(),a.g=null)}function _d(a){Ao(a),a.v&&(o.clearTimeout(a.v),a.v=null),bo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ro(a){if(!Zh(a.h)&&!a.m){a.m=!0;var h=a.Ea;W||_(),J||(W(),J=!0),T.add(h,a),a.D=0}}function fT(a,h){return ed(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ui(l(a.Ea,a,h),vd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new nn(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Ch(P),Dh(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Id(this,R,h),f=Tt(this.J),le(f,"RID",a),le(f,"CVER",22),this.G&&le(f,"X-HTTP-Session-Id",this.G),Yi(this,f),P&&(this.R?h="headers="+qi(hd(P))+"&"+h:this.u&&Dc(f,this.u,P)),Pc(this.h,R),this.Ra&&le(f,"TYPE","init"),this.S?(le(f,"$req",h),le(f,"SID","null"),R.U=!0,Ac(R,f,null)):Ac(R,f,h),this.I=2}}else this.I==3&&(a?yd(this,a):this.i.length==0||Zh(this.h)||yd(this))};function yd(a,h){var f;h?f=h.l:f=a.V++;const m=Tt(a.J);le(m,"SID",a.M),le(m,"RID",f),le(m,"AID",a.K),Yi(a,m),a.u&&a.o&&Dc(m,a.u,a.o),f=new nn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Id(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Pc(a.h,f),Ac(f,m,h)}function Yi(a,h){a.H&&mo(a.H,function(f,m){le(h,m,f)}),a.l&&mo({},function(f,m){le(h,m,f)})}function Id(a,h,f){f=Math.min(a.i.length,f);const m=a.l?l(a.l.Ka,a.l,a):null;e:{var R=a.i;let Q=-1;for(;;){const Pe=["count="+f];Q==-1?f>0?(Q=R[0].g,Pe.push("ofs="+Q)):Q=0:Pe.push("ofs="+Q);let ae=!0;for(let Ne=0;Ne<f;Ne++){var P=R[Ne].g;const Et=R[Ne].map;if(P-=Q,P<0)Q=Math.max(0,R[Ne].g-100),ae=!1;else try{P="req"+P+"_"||"";try{var M=Et instanceof Map?Et:Object.entries(Et);for(const[Wn,an]of M){let cn=an;c(an)&&(cn=Ic(an)),Pe.push(P+Wn+"="+encodeURIComponent(cn))}}catch(Wn){throw Pe.push(P+"type="+encodeURIComponent("_badmap")),Wn}}catch{m&&m(Et)}}if(ae){M=Pe.join("&");break e}}M=void 0}return a=a.i.splice(0,f),h.G=a,M}function Td(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;W||_(),J||(W(),J=!0),T.add(h,a),a.A=0}}function Vc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ui(l(a.Da,a),vd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Ed(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ui(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),Ao(this),Ed(this))};function Oc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ed(a){a.g=new nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Tt(a.na);le(h,"RID","rpc"),le(h,"SID",a.M),le(h,"AID",a.K),le(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&le(h,"TO",a.ia),le(h,"TYPE","xmlhttp"),Yi(a,h),a.u&&a.o&&Dc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Eo(Tt(h)),f.u=null,f.R=!0,Qh(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Ao(this),Vc(this),He(19))};function bo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wd(a,h){var f=null;if(a.g==h){bo(a),Oc(a),a.g=null;var m=2}else if(Sc(a.h,h))f=h.G,td(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;m=yo(),Ge(m,new jh(m,f)),Ro(a)}else Td(a);else if(R=h.m,R==3||R==0&&h.X>0||!(m==1&&fT(a,h)||m==2&&Vc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),R){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function vd(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Kn(a,h){if(a.j.info("Error code "+h),h==2){var f=l(a.bb,a),m=a.Ua;const R=!m;m=new rn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||$i(m,"https"),Eo(m),R?aT(m.toString(),f):cT(m.toString(),f)}else He(2);a.I=0,a.l&&a.l.pa(h),Ad(a),_d(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Ad(a){if(a.I=0,a.ja=[],a.l){const h=nd(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Rd(a,h,f){var m=f instanceof rn?Tt(f):new rn(f);if(m.g!="")h&&(m.g=h+"."+m.g),ji(m,m.u);else{var R=o.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const P=new rn(null);m&&$i(P,m),h&&(P.g=h),R&&ji(P,R),f&&(P.h=f),m=P}return f=a.G,h=a.wa,f&&h&&le(m,f,h),le(m,"VER",a.ka),Yi(a,m),m}function bd(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ee(new kc({ab:f})):new Ee(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sd(){}n=Sd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function So(){}So.prototype.g=function(a,h){return new st(a,h)};function st(a,h){Ue.call(this),this.g=new gd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new kr(this)}p(st,Ue),st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){Nc(this.g)},st.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Ic(a),a=f);h.i.push(new ZI(h.Ya++,a)),h.I==3&&Ro(h)},st.prototype.N=function(){this.g.l=null,delete this.j,Nc(this.g),delete this.g,st.Z.N.call(this)};function Pd(a){Tc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Pd,Tc);function Cd(){Ec.call(this),this.status=1}p(Cd,Ec);function kr(a){this.g=a}p(kr,Sd),kr.prototype.ra=function(){Ge(this.g,"a")},kr.prototype.qa=function(a){Ge(this.g,new Pd(a))},kr.prototype.pa=function(a){Ge(this.g,new Cd)},kr.prototype.oa=function(){Ge(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,_g=function(){return new So},gg=function(){return yo()},mg=jn,fu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,Go=Io,Gh.COMPLETE="complete",pg=Gh,Bh.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",Ue.prototype.listen=Ue.prototype.J,us=Bh,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,fg=Ee}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let vi="12.11.0";function PR(n){vi=n}/**
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
 *//**
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
 */const Rn=new Hu("@firebase/firestore");function Fr(){return Rn.logLevel}function CR(n){Rn.setLogLevel(n)}function V(n,...e){if(Rn.logLevel<=Z.DEBUG){const t=e.map(fl);Rn.debug(`Firestore (${vi}): ${n}`,...t)}}function ve(n,...e){if(Rn.logLevel<=Z.ERROR){const t=e.map(fl);Rn.error(`Firestore (${vi}): ${n}`,...t)}}function it(n,...e){if(Rn.logLevel<=Z.WARN){const t=e.map(fl);Rn.warn(`Firestore (${vi}): ${n}`,...t)}}function fl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yg(n,r,t)}function yg(n,e,t){let r=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ve(r),new Error(r)}function $(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yg(e,i,r)}function kR(n,e){n||q(57014,e)}function L(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Me{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ig{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class DR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class NR{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Me,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Me)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string",31837,{l:r}),new Ig(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class VR{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class OR{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new VR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,de(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$(this.o===void 0,3512);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class LR{getToken(){return Promise.resolve(new pu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function MR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ua{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=MR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function mu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Wc(i)===Wc(s)?G(i,s):Wc(i)?1:-1}return G(n.length,e.length)}const FR=55296,UR=57343;function Wc(n){const e=n.charCodeAt(0);return e>=FR&&e<=UR}function Yr(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}function Eg(n){return n+"\0"}/**
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
 */const gu="__name__";class wt{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=wt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return G(e.length,t.length)}static compareSegments(e,t){const r=wt.isNumericId(e),i=wt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?wt.extractNumericId(e).compare(wt.extractNumericId(t)):mu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class Y extends wt{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Y(t)}static emptyPath(){return new Y([])}}const BR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends wt{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return BR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gu}static keyField(){return new fe([gu])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(Y.fromString(e))}static fromName(e){return new x(Y.fromString(e).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new Y(e.slice()))}}/**
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
 */function pl(n,e,t){if(!t)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wg(n,e,t,r){if(e===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cf(n){if(!x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uf(n){if(x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ba(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function X(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ba(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ag(n,e){if(e<=0)throw new N(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function wr(n,e){if(!vg(n))throw new N(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new N(b.INVALID_ARGUMENT,t);return!0}/**
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
 */const lf=-62135596800,hf=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*hf);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lf)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hf}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wr(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:Se("string",ne._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
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
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ne(0,0))}static max(){return new j(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xr=-1;class Zr{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function _u(n){return n.fields.find((e=>e.kind===2))}function Yn(n){return n.fields.filter((e=>e.kind!==2))}function qR(n,e){let t=G(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=zR(n.fields[r],e.fields[r]),t!==0)return t;return G(n.fields.length,e.fields.length)}Zr.UNKNOWN_ID=-1;class or{constructor(e,t){this.fieldPath=e,this.kind=t}}function zR(n,e){const t=fe.comparator(n.fieldPath,e.fieldPath);return t!==0?t:G(n.kind,e.kind)}class ei{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ei(0,ut.min())}}function Rg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new ut(i,x.empty(),e)}function bg(n){return new ut(n.readTime,n.key,Xr)}class ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ut(j.min(),x.empty(),Xr)}static max(){return new ut(j.max(),x.empty(),Xr)}}function ml(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const Sg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ln(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Sg)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,r)=>{t(e)}))}static reject(e){return new A(((t,r)=>{r(e)}))}static waitFor(e){return new A(((t,r)=>{let i=0,s=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++s,o&&s===i&&t()}),(u=>r(u)))})),o=!0,s===i&&t()}))}static or(e){let t=A.resolve(!1);for(const r of e)t=t.next((i=>i?A.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new A(((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const l=u;t(e[l]).next((d=>{o[l]=d,++c,c===s&&r(o)}),(d=>i(d)))}}))}static doWhile(e,t){return new A(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}/**
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
 */const ot="SimpleDb";class qa{static open(e,t,r,i){try{return new qa(t,e.transaction(i,r))}catch(s){throw new _s(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Me,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new _s(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=gl(r.target.error);this.S.reject(new _s(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(ot,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new jR(t)}}class Pt{static delete(e){return V(ot,"Removing database:",e),Zn(Bp().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Qp())return!1;if(Pt.F())return!0;const e=Ce(),t=Pt.M(e),r=0<t&&t<10,i=Cg(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Pt.M(Ce())===12.2&&ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(V(ot,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new _s(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new N(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new N(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new _s(e,o))},i.onupgradeneeded=s=>{V(ot,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next((()=>{V(ot,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=qa.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next((l=>(c.C(),l))).catch((l=>(c.abort(l),A.reject(l)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,l=u.name!=="FirebaseError"&&o<3;if(V(ot,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Cg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class $R{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Zn(this.U.delete())}}class _s extends N{constructor(e,t){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Mn(n){return n.name==="IndexedDbTransactionError"}class jR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(V(ot,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(V(ot,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zn(r)}add(e){return V(ot,"ADD",this.store.name,e,e),Zn(this.store.add(e))}get(e){return Zn(this.store.get(e)).next((t=>(t===void 0&&(t=null),V(ot,"GET",this.store.name,e,t),t)))}delete(e){return V(ot,"DELETE",this.store.name,e),Zn(this.store.delete(e))}count(){return V(ot,"COUNT",this.store.name),Zn(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new A(((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}}))}{const s=this.cursor(r),o=[];return this.H(s,((c,u)=>{o.push(u)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new A(((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}}))}X(e,t){V(ot,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.H(i,((s,o,c)=>c.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new A(((r,i)=>{t.onerror=s=>{const o=gl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}H(e,t){const r=[];return new A(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new $R(c),l=t(c.primaryKey,c.value,u);if(l instanceof A){const d=l.catch((p=>(u.done(),A.reject(p))));r.push(d)}u.isDone?i():u.G===null?c.continue():c.continue(u.G)}})).next((()=>A.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zn(n){return new A(((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=gl(r.target.error);t(i)}}))}let df=!1;function gl(n){const e=Pt.M(Ce());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return df||(df=!0,setTimeout((()=>{throw r}),0)),r}}return n}const ys="IndexBackfiller";class GR{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){V(ys,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();V(ys,`Documents written: ${t}`)}catch(t){Mn(t)?V(ys,"Ignoring IndexedDB error during index backfill: ",t):await Ln(t)}await this.re(6e4)}))}}class HR{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let i=t,s=!0;return A.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return V(ys,`Processing collection: ${o}`),this.oe(e,o,i).next((c=>{i-=c,r.add(o)}));s=!1})))).next((()=>t-i))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(i,s))).next((c=>(V(ys,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((i,s)=>{const o=bg(s);ml(o,r)>0&&(r=o)})),new ut(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xe.ce=-1;/**
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
 */const En=-1;function Ys(n){return n==null}function Os(n){return n===0&&1/n==-1/0}function kg(n){return typeof n=="number"&&Number.isInteger(n)&&!Os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ua="";function $e(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ff(e)),e=KR(n.get(t),e);return ff(e)}function KR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case ua:t+="";break;default:t+=s}}return t}function ff(n){return n+ua+""}function bt(n){const e=n.length;if($(e>=2,64408,{path:n}),e===2)return $(n.charAt(0)===ua&&n.charAt(1)==="",56145,{path:n}),Y.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(ua,s);switch((o<0||o>t)&&q(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:q(61167,{path:n})}s=o+2}return new Y(r)}/**
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
 */const Xn="remoteDocuments",Xs="owner",Dr="owner",xs="mutationQueues",WR="userId",ft="mutations",pf="batchId",ir="userMutationsIndex",mf=["userId","batchId"];/**
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
 */function Ho(n,e){return[n,$e(e)]}function Dg(n,e,t){return[n,$e(e),t]}const QR={},ti="documentMutations",la="remoteDocumentsV14",JR=["prefixPath","collectionGroup","readTime","documentId"],Ko="documentKeyIndex",YR=["prefixPath","collectionGroup","documentId"],Ng="collectionGroupIndex",XR=["collectionGroup","readTime","prefixPath","documentId"],Ls="remoteDocumentGlobal",yu="remoteDocumentGlobalKey",ni="targets",Vg="queryTargetsIndex",ZR=["canonicalId","targetId"],ri="targetDocuments",eb=["targetId","path"],_l="documentTargetsIndex",tb=["path","targetId"],ha="targetGlobalKey",ar="targetGlobal",Ms="collectionParents",nb=["collectionId","parent"],ii="clientMetadata",rb="clientId",za="bundles",ib="bundleId",$a="namedQueries",sb="name",yl="indexConfiguration",ob="indexId",Iu="collectionGroupIndex",ab="collectionGroup",Is="indexState",cb=["indexId","uid"],Og="sequenceNumberIndex",ub=["uid","sequenceNumber"],Ts="indexEntries",lb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xg="documentKeyIndex",hb=["indexId","uid","orderedDocumentKey"],ja="documentOverlays",db=["userId","collectionPath","documentId"],Tu="collectionPathOverlayIndex",fb=["userId","collectionPath","largestBatchId"],Lg="collectionGroupOverlayIndex",pb=["userId","collectionGroup","largestBatchId"],Il="globals",mb="name",Mg=[xs,ft,ti,Xn,ni,Xs,ar,ri,ii,Ls,Ms,za,$a],gb=[...Mg,ja],Fg=[xs,ft,ti,la,ni,Xs,ar,ri,ii,Ls,Ms,za,$a,ja],Ug=Fg,Tl=[...Ug,yl,Is,Ts],_b=Tl,Bg=[...Tl,Il],yb=Bg;/**
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
 */class Eu extends Pg{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function De(n,e){const t=L(n);return Pt.O(t.le,e)}/**
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
 */function gf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qg(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function zg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Fe.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Fe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _f(this.data.getIterator())}getIteratorFrom(e){return new _f(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class _f{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Nr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new se(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class $g extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Ib(){return typeof atob<"u"}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $g("Invalid base64 string: "+s):s}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(n){if($(!!n,39018),typeof n=="string"){let e=0;const t=Tb.exec(n);if($(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const jg="server_timestamp",Gg="__type__",Hg="__previous_value__",Kg="__local_write_time__";function Ga(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gg])==null?void 0:r.stringValue)===jg}function Ha(n){const e=n.mapValue.fields[Hg];return Ga(e)?Ha(e):e}function Fs(n){const e=Ht(n.mapValue.fields[Kg].timestampValue);return new ne(e.seconds,e.nanos)}/**
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
 */class Eb{constructor(e,t,r,i,s,o,c,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=d,this.apiKey=p}}const Us="(default)";class bn{constructor(e,t){this.projectId=e,this.database=t||Us}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database===Us}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}function wb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(n.options.projectId,e)}/**
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
 */const El="__type__",Wg="__max__",mn={mapValue:{fields:{__type__:{stringValue:Wg}}}},wl="__vector__",si="value",Wo={nullValue:"NULL_VALUE"};function Sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ga(n)?4:Qg(n)?9007199254740991:Ka(n)?10:11:q(28295,{value:n})}function Nt(n,e){if(n===e)return!0;const t=Sn(n);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fs(n).isEqual(Fs(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ht(i.timestampValue),c=Ht(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return Kt(i.bytesValue).isEqual(Kt(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ge(i.doubleValue),c=ge(s.doubleValue);return o===c?Os(o)===Os(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Yr(n.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(gf(o)!==gf(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Nt(o[u],c[u])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function Bs(n,e){return(n.values||[]).find((t=>Nt(t,e)))!==void 0}function Pn(n,e){if(n===e)return 0;const t=Sn(n),r=Sn(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=ge(s.integerValue||s.doubleValue),u=ge(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return yf(n.timestampValue,e.timestampValue);case 4:return yf(Fs(n),Fs(e));case 5:return mu(n.stringValue,e.stringValue);case 6:return(function(s,o){const c=Kt(s),u=Kt(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=G(c[l],u[l]);if(d!==0)return d}return G(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=G(ge(s.latitude),ge(o.latitude));return c!==0?c:G(ge(s.longitude),ge(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return If(n.arrayValue,e.arrayValue);case 10:return(function(s,o){var g,E,C,D;const c=s.fields||{},u=o.fields||{},l=(g=c[si])==null?void 0:g.arrayValue,d=(E=u[si])==null?void 0:E.arrayValue,p=G(((C=l==null?void 0:l.values)==null?void 0:C.length)||0,((D=d==null?void 0:d.values)==null?void 0:D.length)||0);return p!==0?p:If(l,d)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===mn.mapValue&&o===mn.mapValue)return 0;if(s===mn.mapValue)return 1;if(o===mn.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=mu(u[p],d[p]);if(g!==0)return g;const E=Pn(c[u[p]],l[d[p]]);if(E!==0)return E}return G(u.length,d.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function yf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Ht(n),r=Ht(e),i=G(t.seconds,r.seconds);return i!==0?i:G(t.nanos,r.nanos)}function If(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Pn(t[i],r[i]);if(s)return s}return G(t.length,r.length)}function oi(n){return wu(n)}function wu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ht(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Kt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=wu(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wu(t.fields[o])}`;return i+"}"})(n.mapValue):q(61005,{value:n})}function Qo(n){switch(Sn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ha(n);return e?16+Qo(e):16;case 5:return 2*n.stringValue.length;case 6:return Kt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Qo(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Fn(r.fields,((s,o)=>{i+=s.length+Qo(o)})),i})(n.mapValue);default:throw q(13486,{value:n})}}function lr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vu(n){return!!n&&"integerValue"in n}function qs(n){return!!n&&"arrayValue"in n}function Tf(n){return!!n&&"nullValue"in n}function Ef(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Jo(n){return!!n&&"mapValue"in n}function Ka(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[El])==null?void 0:r.stringValue)===wl}function Es(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Fn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Es(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return{...n}}function Qg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wg}const Jg={mapValue:{fields:{[El]:{stringValue:wl},[si]:{arrayValue:{}}}}};function vb(n){return"nullValue"in n?Wo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?lr(bn.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ka(n)?Jg:{mapValue:{}}:q(35942,{value:n})}function Ab(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?lr(bn.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Jg:"mapValue"in n?Ka(n)?{mapValue:{}}:mn:q(61959,{value:n})}function wf(n,e){const t=Pn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function vf(n,e){const t=Pn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Jo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=fe.emptyPath(),r={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Es(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Jo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Jo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Fn(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new xe(Es(this.value))}}function Yg(n){const e=[];return Fn(n.fields,((t,r)=>{const i=new fe([t]);if(Jo(r)){const s=Yg(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new Ze(e)}/**
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
 */class he{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new he(e,0,j.min(),j.min(),j.min(),xe.empty(),0)}static newFoundDocument(e,t,r,i){return new he(e,1,t,j.min(),r,i,0)}static newNoDocument(e,t){return new he(e,2,t,j.min(),j.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new he(e,3,t,j.min(),j.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof he&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new he(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cn{constructor(e,t){this.position=e,this.inclusive=t}}function Af(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),t.key):r=Pn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xg{}class ee extends Xg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bb(e,t,r):t==="array-contains"?new Cb(e,r):t==="in"?new i_(e,r):t==="not-in"?new kb(e,r):t==="array-contains-any"?new Db(e,r):new ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Sb(e,r):new Pb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Pn(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison(Pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Xg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new re(e,t)}matches(e){return ai(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ai(n){return n.op==="and"}function Au(n){return n.op==="or"}function vl(n){return Zg(n)&&ai(n)}function Zg(n){for(const e of n.filters)if(e instanceof re)return!1;return!0}function Ru(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+oi(n.value);if(vl(n))return n.filters.map((e=>Ru(e))).join(",");{const e=n.filters.map((t=>Ru(t))).join(",");return`${n.op}(${e})`}}function e_(n,e){return n instanceof ee?(function(r,i){return i instanceof ee&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)})(n,e):n instanceof re?(function(r,i){return i instanceof re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,c)=>s&&e_(o,i.filters[c])),!0):!1})(n,e):void q(19439)}function t_(n,e){const t=n.filters.concat(e);return re.create(t,n.op)}function n_(n){return n instanceof ee?(function(t){return`${t.field.canonicalString()} ${t.op} ${oi(t.value)}`})(n):n instanceof re?(function(t){return t.op.toString()+" {"+t.getFilters().map(n_).join(" ,")+"}"})(n):"Filter"}class bb extends ee{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sb extends ee{constructor(e,t){super(e,"in",t),this.keys=r_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Pb extends ee{constructor(e,t){super(e,"not-in",t),this.keys=r_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function r_(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>x.fromName(r.referenceValue)))}class Cb extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qs(t)&&Bs(t.arrayValue,this.value)}}class i_ extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bs(this.value.arrayValue,t)}}class kb extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bs(this.value.arrayValue,t)}}class Db extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Bs(this.value.arrayValue,r)))}}/**
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
 */class Nb{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function bu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Nb(n,e,t,r,i,s,o)}function hr(n){const e=L(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ru(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>oi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>oi(r))).join(",")),e.Te=t}return e.Te}function Zs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!e_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rf(n.startAt,e.startAt)&&Rf(n.endAt,e.endAt)}function da(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function fa(n,e){return n.filters.filter((t=>t instanceof ee&&t.field.isEqual(e)))}function bf(n,e,t){let r=Wo,i=!0;for(const s of fa(n,e)){let o=Wo,c=!0;switch(s.op){case"<":case"<=":o=vb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Wo}wf({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];wf({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Sf(n,e,t){let r=mn,i=!0;for(const s of fa(n,e)){let o=mn,c=!0;switch(s.op){case">=":case">":o=Ab(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=mn}vf({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];vf({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Yt{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function s_(n,e,t,r,i,s,o,c){return new Yt(n,e,t,r,i,s,o,c)}function Ai(n){return new Yt(n)}function Pf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vb(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Al(n){return n.collectionGroup!==null}function Gr(n){const e=L(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new se(fe.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(c=c.add(l.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new zs(s,r))})),t.has(fe.keyField().canonicalString())||e.Ee.push(new zs(fe.keyField(),r))}return e.Ee}function je(n){const e=L(n);return e.Ie||(e.Ie=a_(e,Gr(n))),e.Ie}function o_(n){const e=L(n);return e.Re||(e.Re=a_(e,n.explicitOrderBy)),e.Re}function a_(n,e){if(n.limitType==="F")return bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new zs(i.field,s)}));const t=n.endAt?new Cn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Cn(n.startAt.position,n.startAt.inclusive):null;return bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Su(n,e){const t=n.filters.concat([e]);return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ob(n,e){const t=n.explicitOrderBy.concat([e]);return new Yt(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function pa(n,e,t){return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xb(n,e){return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,e,n.endAt)}function Lb(n,e){return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,e)}function eo(n,e){return Zs(je(n),je(e))&&n.limitType===e.limitType}function c_(n){return`${hr(je(n))}|lt:${n.limitType}`}function Ur(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>n_(i))).join(", ")}]`),Ys(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>oi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>oi(i))).join(",")),`Target(${r})`})(je(n))}; limitType=${n.limitType})`}function to(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of Gr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(o,c,u){const l=Af(o,c,u);return o.inclusive?l<=0:l<0})(r.startAt,Gr(r),i)||r.endAt&&!(function(o,c,u){const l=Af(o,c,u);return o.inclusive?l>=0:l>0})(r.endAt,Gr(r),i))})(n,e)}function u_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function l_(n){return(e,t)=>{let r=!1;for(const i of Gr(n)){const s=Mb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Mb(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):(function(s,o,c){const u=o.data.field(s),l=c.data.field(s);return u!==null&&l!==null?Pn(u,l):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
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
 */class Xt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fn(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return zg(this.inner)}size(){return this.innerSize}}/**
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
 */const Fb=new ce(x.comparator);function et(){return Fb}const h_=new ce(x.comparator);function ls(...n){let e=h_;for(const t of n)e=e.insert(t.key,t);return e}function d_(n){let e=h_;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function St(){return ws()}function f_(){return ws()}function ws(){return new Xt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ub=new ce(x.comparator),Bb=new se(x.comparator);function K(...n){let e=Bb;for(const t of n)e=e.add(t);return e}const qb=new se(G);function Rl(){return qb}/**
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
 */function bl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function p_(n){return{integerValue:""+n}}function m_(n,e){return kg(e)?p_(e):bl(n,e)}/**
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
 */class Wa{constructor(){this._=void 0}}function zb(n,e,t){return n instanceof ci?(function(i,s){const o={fields:{[Gg]:{stringValue:jg},[Kg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ga(s)&&(s=Ha(s)),s&&(o.fields[Hg]=s),{mapValue:o}})(t,e):n instanceof dr?__(n,e):n instanceof fr?y_(n,e):(function(i,s){const o=g_(i,s),c=Cf(o)+Cf(i.Ae);return vu(o)&&vu(i.Ae)?p_(c):bl(i.serializer,c)})(n,e)}function $b(n,e,t){return n instanceof dr?__(n,e):n instanceof fr?y_(n,e):t}function g_(n,e){return n instanceof ui?(function(r){return vu(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class ci extends Wa{}class dr extends Wa{constructor(e){super(),this.elements=e}}function __(n,e){const t=I_(e);for(const r of n.elements)t.some((i=>Nt(i,r)))||t.push(r);return{arrayValue:{values:t}}}class fr extends Wa{constructor(e){super(),this.elements=e}}function y_(n,e){let t=I_(e);for(const r of n.elements)t=t.filter((i=>!Nt(i,r)));return{arrayValue:{values:t}}}class ui extends Wa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cf(n){return ge(n.integerValue||n.doubleValue)}function I_(n){return qs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class no{constructor(e,t){this.field=e,this.transform=t}}function jb(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof dr&&i instanceof dr||r instanceof fr&&i instanceof fr?Yr(r.elements,i.elements,Nt):r instanceof ui&&i instanceof ui?Nt(r.Ae,i.Ae):r instanceof ci&&i instanceof ci})(n.transform,e.transform)}class Gb{constructor(e,t){this.version=e,this.transformResults=t}}class _e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qa{}function T_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new bi(n.key,_e.none()):new Ri(n.key,n.data,_e.none());{const t=n.data,r=xe.empty();let i=new se(fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zt(n.key,r,new Ze(i.toArray()),_e.none())}}function Hb(n,e,t){n instanceof Ri?(function(i,s,o){const c=i.value.clone(),u=Df(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Zt?(function(i,s,o){if(!Yo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Df(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(E_(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function vs(n,e,t,r){return n instanceof Ri?(function(s,o,c,u){if(!Yo(s.precondition,o))return c;const l=s.value.clone(),d=Nf(s.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,r):n instanceof Zt?(function(s,o,c,u){if(!Yo(s.precondition,o))return c;const l=Nf(s.fieldTransforms,u,o),d=o.data;return d.setAll(E_(s)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(s,o,c){return Yo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Kb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=g_(r.transform,i||null);s!=null&&(t===null&&(t=xe.empty()),t.set(r.field,s))}return t||null}function kf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yr(r,i,((s,o)=>jb(s,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ri extends Qa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends Qa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E_(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Df(n,e,t){const r=new Map;$(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,$b(o,c,t[i]))}return r}function Nf(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,zb(s,o,e))}return r}class bi extends Qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sl extends Qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Pl{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Hb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=f_();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=T_(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,((t,r)=>kf(t,r)))&&Yr(this.baseMutations,e.baseMutations,((t,r)=>kf(t,r)))}}class Cl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){$(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return Ub})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cl(e,t,r,i)}}/**
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
 */class kl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class w_{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
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
 */class Wb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Re,te;function v_(n){switch(n){case b.OK:return q(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function A_(n){if(n===void 0)return ve("GRPC error has no .code"),b.UNKNOWN;switch(n){case Re.OK:return b.OK;case Re.CANCELLED:return b.CANCELLED;case Re.UNKNOWN:return b.UNKNOWN;case Re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Re.INTERNAL:return b.INTERNAL;case Re.UNAVAILABLE:return b.UNAVAILABLE;case Re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Re.NOT_FOUND:return b.NOT_FOUND;case Re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Re.ABORTED:return b.ABORTED;case Re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Re.DATA_LOSS:return b.DATA_LOSS;default:return q(39323,{code:n})}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let As=null;function Qb(n){if(As)throw new Error("a TestingHooksSpi instance is already set");As=n}/**
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
 */function R_(){return new TextEncoder}/**
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
 */const Jb=new Tn([4294967295,4294967295],0);function Vf(n){const e=R_().encode(n),t=new dg;return t.update(e),new Uint8Array(t.digest())}function Of(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tn([t,r],0),new Tn([i,s],0)]}class Dl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hs(`Invalid padding: ${t}`);if(r<0)throw new hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Tn.fromNumber(r)));return i.compare(Jb)===1&&(i=new Tn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Vf(e),[r,i]=Of(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dl(s,i,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Vf(e),[r,i]=Of(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ro{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ro(j.min(),i,new ce(G),et(),K())}}class io{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new io(r,t,K(),K(),K())}}/**
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
 */class Xo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class b_{constructor(e,t){this.targetId=e,this.Ce=t}}class S_{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class xf{constructor(){this.ve=0,this.Fe=Lf(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),r=K();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:q(38017,{changeType:s})}})),new io(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Lf()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,$(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Yb{constructor(e){this.Ge=e,this.ze=new Map,this.je=et(),this.Je=Vo(),this.He=Vo(),this.Ze=new ce(G)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(da(s))if(r===0){const o=new x(s.path);this.et(t,o,he.newNoDocument(o,j.min()))}else $(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}As==null||As.o((function(d,p,g,E,C){var F,z,B;const D={localCacheCount:d,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},k=p.unchangedNames;return k&&(D.bloomFilter={applied:C===0,hashCount:(k==null?void 0:k.hashCount)??0,bitmapLength:((z=(F=k==null?void 0:k.bits)==null?void 0:F.bitmap)==null?void 0:z.length)??0,padding:((B=k==null?void 0:k.bits)==null?void 0:B.padding)??0,mightContain:H=>(E==null?void 0:E.mightContain(H))??!1}),D})(o,e.Ce,this.Ge.ht(),c,u))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Kt(r).toUint8Array()}catch(u){if(u instanceof $g)return it("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Dl(o,i,s)}catch(u){return it(u instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const c=this.ot(o);if(c){if(s.current&&da(c.target)){const u=new x(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,he.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}}));let r=K();this.He.forEach(((s,o)=>{let c=!0;o.forEachWhile((u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const i=new ro(e,t,this.Ze,this.je,r);return this.je=et(),this.Je=Vo(),this.He=Vo(),this.Ze=new ce(G),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new xf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new se(G),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new se(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xf),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Vo(){return new ce(x.comparator)}function Lf(){return new ce(x.comparator)}const Xb={asc:"ASCENDING",desc:"DESCENDING"},Zb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eS={and:"AND",or:"OR"};class tS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pu(n,e){return n.useProto3Json||Ys(e)?e:{value:e}}function li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function P_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function nS(n,e){return li(n,e.toTimestamp())}function Ae(n){return $(!!n,49232),j.fromTimestamp((function(t){const r=Ht(t);return new ne(r.seconds,r.nanos)})(n))}function Nl(n,e){return Cu(n,e).canonicalString()}function Cu(n,e){const t=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function C_(n){const e=Y.fromString(n);return $(F_(e),10190,{key:e.toString()}),e}function $s(n,e){return Nl(n.databaseId,e.path)}function Ct(n,e){const t=C_(e);if(t.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(N_(t))}function k_(n,e){return Nl(n.databaseId,e)}function D_(n){const e=C_(n);return e.length===4?Y.emptyPath():N_(e)}function ku(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function N_(n){return $(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Mf(n,e,t){return{name:$s(n,e),fields:t.value.mapValue.fields}}function Ja(n,e,t){const r=Ct(n,e.name),i=Ae(e.updateTime),s=e.createTime?Ae(e.createTime):j.min(),o=new xe({mapValue:{fields:e.fields}}),c=he.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function rS(n,e){return"found"in e?(function(r,i){$(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ct(r,i.found.name),o=Ae(i.found.updateTime),c=i.found.createTime?Ae(i.found.createTime):j.min(),u=new xe({mapValue:{fields:i.found.fields}});return he.newFoundDocument(s,o,c,u)})(n,e):"missing"in e?(function(r,i){$(!!i.missing,3894),$(!!i.readTime,22933);const s=Ct(r,i.missing),o=Ae(i.readTime);return he.newNoDocument(s,o)})(n,e):q(7234,{result:e})}function iS(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(l,d){return l.useProto3Json?($(d===void 0||typeof d=="string",58123),Te.fromBase64String(d||"")):($(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Te.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(l){const d=l.code===void 0?b.UNKNOWN:A_(l.code);return new N(d,l.message||"")})(o);t=new S_(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ct(n,r.document.name),s=Ae(r.document.updateTime),o=r.document.createTime?Ae(r.document.createTime):j.min(),c=new xe({mapValue:{fields:r.document.fields}}),u=he.newFoundDocument(i,s,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];t=new Xo(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ct(n,r.document),s=r.readTime?Ae(r.readTime):j.min(),o=he.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Xo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ct(n,r.document),s=r.removedTargetIds||[];t=new Xo([],s,i,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Wb(i,s),c=r.targetId;t=new b_(c,o)}}return t}function js(n,e){let t;if(e instanceof Ri)t={update:Mf(n,e.key,e.value)};else if(e instanceof bi)t={delete:$s(n,e.key)};else if(e instanceof Zt)t={update:Mf(n,e.key,e.data),updateMask:lS(e.fieldMask)};else{if(!(e instanceof Sl))return q(16599,{dt:e.type});t={verify:$s(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const c=o.transform;if(c instanceof ci)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ui)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:nS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)})(n,e.precondition)),t}function Du(n,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?_e.updateTime(Ae(s.updateTime)):s.exists!==void 0?_e.exists(s.exists):_e.none()})(e.currentDocument):_e.none(),r=e.updateTransforms?e.updateTransforms.map((i=>(function(o,c){let u=null;if("setToServerValue"in c)$(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new ci;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];u=new dr(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];u=new fr(d)}else"increment"in c?u=new ui(o,c.increment):q(16584,{proto:c});const l=fe.fromServerFormat(c.fieldPath);return new no(l,u)})(n,i))):[];if(e.update){e.update.name;const i=Ct(n,e.update.name),s=new xe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const l=u.fieldPaths||[];return new Ze(l.map((d=>fe.fromServerFormat(d))))})(e.updateMask);return new Zt(i,s,o,t,r)}return new Ri(i,s,t,r)}if(e.delete){const i=Ct(n,e.delete);return new bi(i,t)}if(e.verify){const i=Ct(n,e.verify);return new Sl(i,t)}return q(1463,{proto:e})}function sS(n,e){return n&&n.length>0?($(e!==void 0,14353),n.map((t=>(function(i,s){let o=i.updateTime?Ae(i.updateTime):Ae(s);return o.isEqual(j.min())&&(o=Ae(s)),new Gb(o,i.transformResults||[])})(t,e)))):[]}function V_(n,e){return{documents:[k_(n,e.path)]}}function Ya(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=k_(n,i);const s=(function(l){if(l.length!==0)return M_(re.create(l,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(l){if(l.length!==0)return l.map((d=>(function(g){return{field:fn(g.field),direction:aS(g.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Pu(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{ft:t,parent:i}}function O_(n,e,t,r){const{ft:i,parent:s}=Ya(n,e),o={},c=[];let u=0;return t.forEach((l=>{const d=r?l.alias:"aggregate_"+u++;o[d]=l.alias,l.aggregateType==="count"?c.push({alias:d,count:{}}):l.aggregateType==="avg"?c.push({alias:d,avg:{field:fn(l.fieldPath)}}):l.aggregateType==="sum"&&c.push({alias:d,sum:{field:fn(l.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function x_(n){let e=D_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){$(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=(function(p){const g=L_(p);return g instanceof re&&vl(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((g=>(function(C){return new zs(Br(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,Ys(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(p){const g=!!p.before,E=p.values||[];return new Cn(E,g)})(t.startAt));let l=null;return t.endAt&&(l=(function(p){const g=!p.before,E=p.values||[];return new Cn(E,g)})(t.endAt)),s_(e,i,o,s,c,"F",u,l)}function oS(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function L_(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Br(t.unaryFilter.field);return ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Br(t.unaryFilter.field);return ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Br(t.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ee.create(Br(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return re.create(t.compositeFilter.filters.map((r=>L_(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function aS(n){return Xb[n]}function cS(n){return Zb[n]}function uS(n){return eS[n]}function fn(n){return{fieldPath:n.canonicalString()}}function Br(n){return fe.fromServerFormat(n.fieldPath)}function M_(n){return n instanceof ee?(function(t){if(t.op==="=="){if(Ef(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NAN"}};if(Tf(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ef(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NAN"}};if(Tf(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(t.field),op:cS(t.op),value:t.value}}})(n):n instanceof re?(function(t){const r=t.getFilters().map((i=>M_(i)));return r.length===1?r[0]:{compositeFilter:{op:uS(t.op),filters:r}}})(n):q(54877,{filter:n})}function lS(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function F_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function U_(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Bt{constructor(e,t,r,i,s=j.min(),o=j.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class B_{constructor(e){this.yt=e}}function hS(n,e){let t;if(e.document)t=Ja(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=x.fromSegments(e.noDocument.path),i=mr(e.noDocument.readTime);t=he.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q(56709);{const r=x.fromSegments(e.unknownDocument.path),i=mr(e.unknownDocument.version);t=he.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime((function(i){const s=new ne(i[0],i[1]);return j.fromTimestamp(s)})(e.readTime)),t}function Ff(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ma(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(s,o){return{name:$s(s,o.key),fields:o.data.value.mapValue.fields,updateTime:li(s,o.version.toTimestamp()),createTime:li(s,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:pr(e.version)};else{if(!e.isUnknownDocument())return q(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:pr(e.version)}}return r}function ma(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function pr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function mr(n){const e=new ne(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function er(n,e){const t=(e.baseMutations||[]).map((s=>Du(n.yt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map((s=>Du(n.yt,s))),i=ne.fromMillis(e.localWriteTimeMs);return new Pl(e.batchId,i,t,r)}function ds(n){const e=mr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?mr(n.lastLimboFreeSnapshotVersion):j.min();let r;return r=(function(s){return s.documents!==void 0})(n.query)?(function(s){const o=s.documents.length;return $(o===1,1966,{count:o}),je(Ai(D_(s.documents[0])))})(n.query):(function(s){return je(x_(s))})(n.query),new Bt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Te.fromBase64String(n.resumeToken))}function q_(n,e){const t=pr(e.snapshotVersion),r=pr(e.lastLimboFreeSnapshotVersion);let i;i=da(e.target)?V_(n.yt,e.target):Ya(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Xa(n){const e=x_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pa(e,e.limit,"L"):e}function Qc(n,e){return new kl(e.largestBatchId,Du(n.yt,e.overlayMutation))}function Uf(n,e){const t=e.path.lastSegment();return[n,$e(e.path.popLast()),t]}function Bf(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:pr(r.readTime),documentKey:$e(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class dS{getBundleMetadata(e,t){return qf(e).get(t).next((r=>{if(r)return(function(s){return{id:s.bundleId,createTime:mr(s.createTime),version:s.version}})(r)}))}saveBundleMetadata(e,t){return qf(e).put((function(i){return{bundleId:i.id,createTime:pr(Ae(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return zf(e).get(t).next((r=>{if(r)return(function(s){return{name:s.name,query:Xa(s.bundledQuery),readTime:mr(s.readTime)}})(r)}))}saveNamedQuery(e,t){return zf(e).put((function(i){return{name:i.name,readTime:pr(Ae(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function qf(n){return De(n,za)}function zf(n){return De(n,$a)}/**
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
 */class Za{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Za(e,r)}getOverlay(e,t){return Zi(e).get(Uf(this.userId,t)).next((r=>r?Qc(this.serializer,r):null))}getOverlays(e,t){const r=St();return A.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){const i=[];return r.forEach(((s,o)=>{const c=new kl(t,o);i.push(this.St(e,c))})),A.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach((o=>i.add($e(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Zi(e).X(Tu,c))})),A.waitFor(s)}getOverlaysForCollection(e,t,r){const i=St(),s=$e(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zi(e).J(Tu,o).next((c=>{for(const u of c){const l=Qc(this.serializer,u);i.set(l.getKey(),l)}return i}))}getOverlaysForCollectionGroup(e,t,r,i){const s=St();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Zi(e).ee({index:Lg,range:c},((u,l,d)=>{const p=Qc(this.serializer,l);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):d.done()})).next((()=>s))}St(e,t){return Zi(e).put((function(i,s,o){const[c,u,l]=Uf(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:js(i.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Zi(n){return De(n,ja)}/**
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
 */class fS{bt(e){return De(e,Il)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?Te.fromUint8Array(r):Te.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class tr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ge(e.integerValue));else if("doubleValue"in e){const r=ge(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Os(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Ht(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Kt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Qg(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Ka(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):q(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const i=si,s=((c=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(ge(s)),this.Ot(i,t),this.Ct(r[i],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),x.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}tr.Wt=new tr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=255;function pS(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function $f(n){const e=64-(function(r){let i=0;for(let s=0;s<8;++s){const o=pS(255&r[s]);if(i+=o,o!==8)break}return i})(n);return Math.ceil(e/8)}class mS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Yt(e){const t=this.en(e),r=$f(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=$f(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(Vr),this.sn(255)}_n(){this.an(Vr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Vr?(this.sn(Vr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Vr?(this.an(Vr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class gS{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class _S{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class es{constructor(){this.cn=new mS,this.ascending=new gS(this.cn),this.descending=new _S(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class nr{constructor(e,t,r,i){this.hn=e,this.Pn=t,this.Tn=r,this.En=i}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new nr(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:Zo(this.Tn),directionalValue:Zo(this.En),orderedDocumentKey:Zo(t),documentKey:r.path.toArray()}}An(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function ln(n,e){let t=n.hn-e.hn;return t!==0?t:(t=jf(n.Tn,e.Tn),t!==0?t:(t=jf(n.En,e.En),t!==0?t:x.comparator(n.Pn,e.Pn)))}function jf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Zo(n){return Wp()?(function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r})(n):n}function Gf(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(n)}class Hf{constructor(e){this.Vn=new se(((t,r)=>fe.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if($(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=_u(e);if(t!==void 0&&!this.pn(t))return!1;const r=Yn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=r[s];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new se(fe.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new or(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new or(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new or(r.field,r.dir==="asc"?0:1)));return new Zr(Zr.UNKNOWN_ID,this.collectionId,t,ei.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function z_(n){var t,r;if($(n instanceof ee||n instanceof re,20012),n instanceof ee){if(n instanceof i_){const i=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map((s=>ee.create(n.field,"==",s))))||[];return re.create(i,"or")}return n}const e=n.filters.map((i=>z_(i)));return re.create(e,n.op)}function yS(n){if(n.getFilters().length===0)return[];const e=Ou(z_(n));return $($_(e),7391),Nu(e)||Vu(e)?[e]:e.getFilters()}function Nu(n){return n instanceof ee}function Vu(n){return n instanceof re&&vl(n)}function $_(n){return Nu(n)||Vu(n)||(function(t){if(t instanceof re&&Au(t)){for(const r of t.getFilters())if(!Nu(r)&&!Vu(r))return!1;return!0}return!1})(n)}function Ou(n){if($(n instanceof ee||n instanceof re,34018),n instanceof ee)return n;if(n.filters.length===1)return Ou(n.filters[0]);const e=n.filters.map((r=>Ou(r)));let t=re.create(e,n.op);return t=ga(t),$_(t)?t:($(t instanceof re,64498),$(ai(t),40251),$(t.filters.length>1,57927),t.filters.reduce(((r,i)=>Vl(r,i))))}function Vl(n,e){let t;return $(n instanceof ee||n instanceof re,38388),$(e instanceof ee||e instanceof re,25473),t=n instanceof ee?e instanceof ee?(function(i,s){return re.create([i,s],"and")})(n,e):Kf(n,e):e instanceof ee?Kf(e,n):(function(i,s){if($(i.filters.length>0&&s.filters.length>0,48005),ai(i)&&ai(s))return t_(i,s.getFilters());const o=Au(i)?i:s,c=Au(i)?s:i,u=o.filters.map((l=>Vl(l,c)));return re.create(u,"or")})(n,e),ga(t)}function Kf(n,e){if(ai(e))return t_(e,n.getFilters());{const t=e.filters.map((r=>Vl(n,r)));return re.create(t,"or")}}function ga(n){if($(n instanceof ee||n instanceof re,11850),n instanceof ee)return n;const e=n.getFilters();if(e.length===1)return ga(e[0]);if(Zg(n))return n;const t=e.map((i=>ga(i))),r=[];return t.forEach((i=>{i instanceof ee?r.push(i):i instanceof re&&(i.op===n.op?r.push(...i.filters):r.push(i))})),r.length===1?r[0]:re.create(r,n.op)}/**
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
 */class IS{constructor(){this.bn=new Ol}addToCollectionParentIndex(e,t){return this.bn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(ut.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(ut.min())}updateCollectionGroup(e,t,r){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class Ol{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new se(Y.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(Y.comparator)).toArray()}}/**
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
 */const Wf="IndexedDbIndexManager",Oo=new Uint8Array(0);class TS{constructor(e,t){this.databaseId=t,this.Dn=new Ol,this.Cn=new Xt((r=>hr(r)),((r,i)=>Zs(r,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const s={collectionId:r,parent:$e(i)};return Qf(e).put(s)}return A.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Eg(t),""],!1,!0);return Qf(e).J(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;r.push(bt(o.parent))}return r}))}addFieldIndex(e,t){const r=ts(e),i=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=xr(e);return s.next((c=>{o.put(Bf(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const r=ts(e),i=xr(e),s=Or(e);return r.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=ts(e),r=Or(e),i=xr(e);return t.X().next((()=>r.X())).next((()=>i.X()))}createTargetIndexes(e,t){return A.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((i=>{if(i===0||i===1){const s=new Hf(r).Sn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const r=Or(e);let i=!0;const s=new Map;return A.forEach(this.vn(t),(o=>this.Fn(e,o).next((c=>{i&&(i=!!c),s.set(o,c)})))).next((()=>{if(i){let o=K();const c=[];return A.forEach(s,((u,l)=>{V(Wf,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((H=>`${H.fieldPath}:${H.kind}`)).join(",")}`})(u)} to execute ${hr(t)}`);const d=(function(B,H){const W=_u(H);if(W===void 0)return null;for(const J of fa(B,W.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null})(l,u),p=(function(B,H){const W=new Map;for(const J of Yn(H))for(const T of fa(B,J.fieldPath))switch(T.op){case"==":case"in":W.set(J.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return W.set(J.fieldPath.canonicalString(),T.value),Array.from(W.values())}return null})(l,u),g=(function(B,H){const W=[];let J=!0;for(const T of Yn(H)){const _=T.kind===0?bf(B,T.fieldPath,B.startAt):Sf(B,T.fieldPath,B.startAt);W.push(_.value),J&&(J=_.inclusive)}return new Cn(W,J)})(l,u),E=(function(B,H){const W=[];let J=!0;for(const T of Yn(H)){const _=T.kind===0?Sf(B,T.fieldPath,B.endAt):bf(B,T.fieldPath,B.endAt);W.push(_.value),J&&(J=_.inclusive)}return new Cn(W,J)})(l,u),C=this.Mn(u,l,g),D=this.Mn(u,l,E),k=this.xn(u,l,p),F=this.On(u.indexId,d,C,g.inclusive,D,E.inclusive,k);return A.forEach(F,(z=>r.Z(z,t.limit).next((B=>{B.forEach((H=>{const W=x.fromSegments(H.documentKey);o.has(W)||(o=o.add(W),c.push(W))}))}))))})).next((()=>c))}return A.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=yS(re.create(e.filters,"and")).map((r=>bu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),l=u/(t!=null?t.length:1),d=[];for(let p=0;p<u;++p){const g=t?this.Nn(t[p/l]):Oo,E=this.Bn(e,g,r[p%l],i),C=this.Ln(e,g,s[p%l],o),D=c.map((k=>this.Bn(e,g,k,!0)));d.push(...this.createRange(E,C,D))}return d}Bn(e,t,r,i){const s=new nr(e,x.empty(),t,r);return i?s:s.In()}Ln(e,t,r,i){const s=new nr(e,x.empty(),t,r);return i?s.In():s}Fn(e,t){const r=new Hf(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const c of s)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const i=this.vn(t);return A.forEach(i,(s=>this.Fn(e,s).next((o=>{o?r!==0&&o.fields.length<(function(u){let l=new se(fe.comparator),d=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?d=!0:l=l.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(l=l.add(p.field));return l.size+(d?1:0)})(s)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&r===2?1:r))}kn(e,t){const r=new es;for(const i of Yn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);tr.Wt.Dt(s,o)}return r.un()}Nn(e){const t=new es;return tr.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new es;return tr.Wt.Dt(lr(this.databaseId,t),r.ln((function(s){const o=Yn(s);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let i=[];i.push(new es);let s=0;for(const o of Yn(e)){const c=r[s++];for(const u of i)if(this.Kn(t,o.fieldPath)&&qs(c))i=this.Un(i,o,c);else{const l=u.ln(o.kind);tr.Wt.Dt(c,l)}}return this.$n(i)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new es;u.seed(c.un()),tr.Wt.Dt(o,u.ln(t.kind)),s.push(u)}return s}Kn(e,t){return!!e.filters.find((r=>r instanceof ee&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=ts(e),i=xr(e);return(t?r.J(Iu,IDBKeyRange.bound(t,t)):r.J()).next((s=>{const o=[];return A.forEach(s,(c=>i.get([c.indexId,this.uid]).next((u=>{o.push((function(d,p){const g=p?new ei(p.sequenceNumber,new ut(mr(p.readTime),new x(bt(p.documentKey)),p.largestBatchId)):ei.empty(),E=d.fields.map((([C,D])=>new or(fe.fromServerFormat(C),D)));return new Zr(d.indexId,d.collectionGroup,E,g)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:G(r.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const i=ts(e),s=xr(e);return this.Wn(e).next((o=>i.J(Iu,IDBKeyRange.bound(t,t)).next((c=>A.forEach(c,(u=>s.put(Bf(u.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return A.forEach(t,((i,s)=>{const o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((c=>(r.set(i.collectionGroup,c),A.forEach(c,(u=>this.Qn(e,i,u).next((l=>{const d=this.Gn(s,u);return l.isEqual(d)?A.resolve():this.zn(e,s,u,l,d)})))))))}))}jn(e,t,r,i){return Or(e).put(i.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,i){return Or(e).delete(i.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const i=Or(e);let s=new se(ln);return i.ee({index:xg,range:IDBKeyRange.only([r.indexId,this.uid,Zo(this.qn(r,t))])},((o,c)=>{s=s.add(new nr(r.indexId,t,Gf(c.arrayValue),Gf(c.directionalValue)))})).next((()=>s))}Gn(e,t){let r=new se(ln);const i=this.kn(t,e);if(i==null)return r;const s=_u(t);if(s!=null){const o=e.data.field(s.fieldPath);if(qs(o))for(const c of o.arrayValue.values||[])r=r.add(new nr(t.indexId,e.key,this.Nn(c),i))}else r=r.add(new nr(t.indexId,e.key,Oo,i));return r}zn(e,t,r,i,s){V(Wf,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,l,d,p,g){const E=u.getIterator(),C=l.getIterator();let D=Nr(E),k=Nr(C);for(;D||k;){let F=!1,z=!1;if(D&&k){const B=d(D,k);B<0?z=!0:B>0&&(F=!0)}else D!=null?z=!0:F=!0;F?(p(k),k=Nr(C)):z?(g(D),D=Nr(E)):(D=Nr(E),k=Nr(C))}})(i,s,ln,(c=>{o.push(this.jn(e,t,r,c))}),(c=>{o.push(this.Jn(e,t,r,c))})),A.waitFor(o)}Wn(e){let t=1;return xr(e).ee({index:Og,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>ln(o,c))).filter(((o,c,u)=>!c||ln(o,u[c-1])!==0));const i=[];i.push(e);for(const o of r){const c=ln(o,e),u=ln(o,t);if(c===0)i[0]=e.In();else if(c>0&&u<0)i.push(o),i.push(o.In());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Hn(i[o],i[o+1]))return[];const c=i[o].An(this.uid,Oo,x.empty()),u=i[o+1].An(this.uid,Oo,x.empty());s.push(IDBKeyRange.bound(c,u))}return s}Hn(e,t){return ln(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Jf)}getMinOffset(e,t){return A.mapArray(this.vn(t),(r=>this.Fn(e,r).next((i=>i||q(44426))))).next(Jf)}}function Qf(n){return De(n,Ms)}function Or(n){return De(n,Ts)}function ts(n){return De(n,yl)}function xr(n){return De(n,Is)}function Jf(n){$(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;ml(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ut(e.readTime,e.documentKey,t)}/**
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
 */const Yf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},j_=41943040;class qe{static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function G_(n,e,t){const r=n.store(ft),i=n.store(ti),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},((d,p,g)=>(c++,g.delete())));s.push(u.next((()=>{$(c===1,47070,{batchId:t.batchId})})));const l=[];for(const d of t.mutations){const p=Dg(e,d.key.path,t.batchId);s.push(i.delete(p)),l.push(d.key)}return A.waitFor(s).next((()=>l))}function _a(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(j_,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);class ec{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,t,r,i){$(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new ec(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return hn(e).ee({index:ir,range:r},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,i){const s=qr(e),o=hn(e);return o.add({}).next((c=>{$(typeof c=="number",49019);const u=new Pl(c,t,r,i),l=(function(E,C,D){const k=D.baseMutations.map((z=>js(E.yt,z))),F=D.mutations.map((z=>js(E.yt,z)));return{userId:C,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:k,mutations:F}})(this.serializer,this.userId,u),d=[];let p=new se(((g,E)=>G(g.canonicalString(),E.canonicalString())));for(const g of i){const E=Dg(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),d.push(o.put(l)),d.push(s.put(E,QR))}return p.forEach((g=>{d.push(this.indexManager.addToCollectionParentIndex(e,g))})),e.addOnCommittedListener((()=>{this.Zn[c]=u.keys()})),A.waitFor(d).next((()=>u))}))}lookupMutationBatch(e,t){return hn(e).get(t).next((r=>r?($(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),er(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return hn(e).ee({index:ir,range:i},((o,c,u)=>{c.userId===this.userId&&($(c.batchId>=r,47524,{Yn:r}),s=er(this.serializer,c)),u.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=En;return hn(e).ee({index:ir,range:t,reverse:!0},((i,s,o)=>{r=s.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,En],[this.userId,Number.POSITIVE_INFINITY]);return hn(e).J(ir,t).next((r=>r.map((i=>er(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ho(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return qr(e).ee({range:i},((o,c,u)=>{const[l,d,p]=o,g=bt(d);if(l===this.userId&&t.path.isEqual(g))return hn(e).get(p).next((E=>{if(!E)throw q(61480,{er:o,batchId:p});$(E.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:E.userId,batchId:p}),s.push(er(this.serializer,E))}));u.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new se(G);const i=[];return t.forEach((s=>{const o=Ho(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=qr(e).ee({range:c},((l,d,p)=>{const[g,E,C]=l,D=bt(E);g===this.userId&&s.path.isEqual(D)?r=r.add(C):p.done()}));i.push(u)})),A.waitFor(i).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ho(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new se(G);return qr(e).ee({range:o},((u,l,d)=>{const[p,g,E]=u,C=bt(g);p===this.userId&&r.isPrefixOf(C)?C.length===i&&(c=c.add(E)):d.done()})).next((()=>this.tr(e,c)))}tr(e,t){const r=[],i=[];return t.forEach((s=>{i.push(hn(e).get(s).next((o=>{if(o===null)throw q(35274,{batchId:s});$(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(er(this.serializer,o))})))})),A.waitFor(i).next((()=>r))}removeMutationBatch(e,t){return G_(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),A.forEach(r,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return qr(e).ee({range:r},((s,o,c)=>{if(s[0]===this.userId){const u=bt(s[1]);i.push(u)}else c.done()})).next((()=>{$(i.length===0,56720,{rr:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return H_(e,this.userId,t)}ir(e){return K_(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:En,lastStreamToken:""}))}}function H_(n,e,t){const r=Ho(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return qr(n).ee({range:s,Y:!0},((c,u,l)=>{const[d,p,g]=c;d===e&&p===i&&(o=!0),l.done()})).next((()=>o))}function hn(n){return De(n,ft)}function qr(n){return De(n,ti)}function K_(n){return De(n,xs)}/**
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
 */class gr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new gr(0)}static ar(){return new gr(-1)}}/**
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
 */class ES{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new gr(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>j.fromTimestamp(new ne(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.cr(e,i))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Lr(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>($(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let i=0;const s=[];return Lr(e).ee(((o,c)=>{const u=ds(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))})).next((()=>A.waitFor(s))).next((()=>i))}forEachTarget(e,t){return Lr(e).ee(((r,i)=>{const s=ds(i);t(s)}))}ur(e){return Xf(e).get(ha).next((t=>($(t!==null,2888),t)))}cr(e,t){return Xf(e).put(ha,t)}lr(e,t){return Lr(e).put(q_(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=hr(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Lr(e).ee({range:i,index:Vg},((o,c,u)=>{const l=ds(c);Zs(t,l.target)&&(s=l,u.done())})).next((()=>s))}addMatchingKeys(e,t,r){const i=[],s=pn(e);return t.forEach((o=>{const c=$e(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))})),A.waitFor(i)}removeMatchingKeys(e,t,r){const i=pn(e);return A.forEach(t,(s=>{const o=$e(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])}))}removeMatchingKeysForTargetId(e,t){const r=pn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=pn(e);let s=K();return i.ee({range:r,Y:!0},((o,c,u)=>{const l=bt(o[1]),d=new x(l);s=s.add(d)})).next((()=>s))}containsKey(e,t){const r=$e(t.path),i=IDBKeyRange.bound([r],[Eg(r)],!1,!0);let s=0;return pn(e).ee({index:_l,Y:!0,range:i},(([o,c],u,l)=>{o!==0&&(s++,l.done())})).next((()=>s>0))}At(e,t){return Lr(e).get(t).next((r=>r?ds(r):null))}}function Lr(n){return De(n,ni)}function Xf(n){return De(n,ar)}function pn(n){return De(n,ri)}/**
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
 */const Zf="LruGarbageCollector",W_=1048576;function ep([n,e],[t,r]){const i=G(n,t);return i===0?G(e,r):i}class wS{constructor(e){this.Pr=e,this.buffer=new se(ep),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ep(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Q_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(Zf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mn(t)?V(Zf,"Ignoring IndexedDB error during garbage collection: ",t):await Ln(t)}await this.Ar(3e5)}))}}class vS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Xe.ce);const r=new wS(t);return this.Vr.forEachTarget(e,(i=>r.Ir(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>r.Ir(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Yf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yf):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(l=Date.now(),Fr()<=Z.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p}))))}}function J_(n,e){return new vS(n,e)}/**
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
 */class AS{constructor(e,t){this.db=e,this.garbageCollector=J_(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,i)=>t(i)))}addReference(e,t,r){return xo(e,r)}removeReference(e,t,r){return xo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return xo(e,t)}wr(e,t){return(function(i,s){let o=!1;return K_(i).te((c=>H_(i,c,s).next((u=>(u&&(o=!0),A.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,((o,c)=>{if(c<=t){const u=this.wr(e,o).next((l=>{if(!l)return s++,r.getEntry(e,o).next((()=>(r.removeEntry(o,j.min()),pn(e).delete((function(p){return[0,$e(p.path)]})(o)))))}));i.push(u)}})).next((()=>A.waitFor(i))).next((()=>r.apply(e))).next((()=>s))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return xo(e,t)}yr(e,t){const r=pn(e);let i,s=Xe.ce;return r.ee({index:_l},(([o,c],{path:u,sequenceNumber:l})=>{o===0?(s!==Xe.ce&&t(new x(bt(i)),s),s=l,i=u):s=Xe.ce})).next((()=>{s!==Xe.ce&&t(new x(bt(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xo(n,e){return pn(n).put((function(r,i){return{targetId:0,path:$e(r.path),sequenceNumber:i}})(e,n.currentSequenceNumber))}/**
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
 */class Y_{constructor(){this.changes=new Xt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,he.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?A.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Qn(e).put(r)}removeEntry(e,t,r){return Qn(e).delete((function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ma(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Sr(e,r))))}getEntry(e,t){let r=he.newInvalidDocument(t);return Qn(e).ee({index:Ko,range:IDBKeyRange.only(ns(t))},((i,s)=>{r=this.br(t,s)})).next((()=>r))}Dr(e,t){let r={size:0,document:he.newInvalidDocument(t)};return Qn(e).ee({index:Ko,range:IDBKeyRange.only(ns(t))},((i,s)=>{r={document:this.br(t,s),size:_a(s)}})).next((()=>r))}getEntries(e,t){let r=et();return this.Cr(e,t,((i,s)=>{const o=this.br(i,s);r=r.insert(i,o)})).next((()=>r))}vr(e,t){let r=et(),i=new ce(x.comparator);return this.Cr(e,t,((s,o)=>{const c=this.br(s,o);r=r.insert(s,c),i=i.insert(s,_a(o))})).next((()=>({documents:r,Fr:i})))}Cr(e,t,r){if(t.isEmpty())return A.resolve();let i=new se(rp);t.forEach((u=>i=i.add(u)));const s=IDBKeyRange.bound(ns(i.first()),ns(i.last())),o=i.getIterator();let c=o.getNext();return Qn(e).ee({index:Ko,range:s},((u,l,d)=>{const p=x.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;c&&rp(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,l),c=o.hasNext()?o.getNext():null),c?d.j(ns(c)):d.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),ma(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qn(e).J(IDBKeyRange.bound(c,u,!0)).next((l=>{s==null||s.incrementDocumentReadCount(l.length);let d=et();for(const p of l){const g=this.br(x.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(to(t,g)||i.has(g.key))&&(d=d.insert(g.key,g))}return d}))}getAllFromCollectionGroup(e,t,r,i){let s=et();const o=np(t,r),c=np(t,ut.max());return Qn(e).ee({index:Ng,range:IDBKeyRange.bound(o,c,!0)},((u,l,d)=>{const p=this.br(x.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(p.key,p),s.size===i&&d.done()})).next((()=>s))}newChangeBuffer(e){return new bS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return tp(e).get(yu).next((t=>($(!!t,20021),t)))}Sr(e,t){return tp(e).put(yu,t)}br(e,t){if(t){const r=hS(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return he.newInvalidDocument(e)}}function X_(n){return new RS(n)}class bS extends Y_{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new Xt((r=>r.toString()),((r,i)=>r.isEqual(i)))}applyChanges(e){const t=[];let r=0,i=new se(((s,o)=>G(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const c=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=Ff(this.Mr.serializer,o);i=i.add(s.path.popLast());const l=_a(u);r+=l-c.size,t.push(this.Mr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=Ff(this.Mr.serializer,o.convertToNoDocument(j.min()));t.push(this.Mr.addEntry(e,s,u))}})),i.forEach((s=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Mr.updateMetadata(e,r)),A.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:i})=>(i.forEach(((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})})),r)))}}function tp(n){return De(n,Ls)}function Qn(n){return De(n,la)}function ns(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function np(n,e){const t=e.documentKey.path.toArray();return[n,ma(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function rp(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=G(t[s],r[s]),i)return i;return i=G(t.length,r.length),i||(i=G(t[t.length-2],r[r.length-2]),i||G(t[t.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class SS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Z_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&vs(r.mutation,i,Ze.empty(),ne.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const i=St();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let o=ls();return s.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=St();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,i){let s=et();const o=ws(),c=(function(){return ws()})();return t.forEach(((u,l)=>{const d=r.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof Zt)?s=s.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),vs(d.mutation,l,d.mutation.getFieldMask(),ne.now())):o.set(l.key,Ze.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((l,d)=>o.set(l,d))),t.forEach(((l,d)=>c.set(l,new SS(d,o.get(l)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=ws();let i=new ce(((o,c)=>o-c)),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||Ze.empty();d=c.applyToLocalView(l,d),r.set(u,d);const p=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,p)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,p=f_();d.forEach((g=>{if(!s.has(g)){const E=T_(t.get(g),r.get(g));E!==null&&p.set(g,E),s=s.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return A.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return Vb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Al(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):A.resolve(St());let c=Xr,u=s;return o.next((l=>A.forEach(l,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(d)?A.resolve():this.remoteDocumentCache.getEntry(e,d).next((g=>{u=u.insert(d,g)}))))).next((()=>this.populateOverlays(e,l,s))).next((()=>this.computeViews(e,u,l,K()))).next((d=>({batchId:c,changes:d_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((r=>{let i=ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ls();return this.indexManager.getCollectionParents(e,s).next((c=>A.forEach(c,(u=>{const l=(function(p,g){return new Yt(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next((d=>{d.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((o=>{s.forEach(((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,he.newInvalidDocument(d)))}));let c=ls();return o.forEach(((u,l)=>{const d=s.get(u);d!==void 0&&vs(d.mutation,l,Ze.empty(),ne.now()),to(t,l)&&(c=c.insert(u,l))})),c}))}}/**
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
 */class PS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return A.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Ae(i.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:Xa(i.bundledQuery),readTime:Ae(i.readTime)}})(t)),A.resolve()}}/**
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
 */class CS{constructor(){this.overlays=new ce(x.comparator),this.Lr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const r=St();return A.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.St(e,t,s)})),A.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.Lr.delete(r)),A.resolve()}getOverlaysForCollection(e,t,r){const i=St(),s=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ce(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=s.get(l.largestBatchId);d===null&&(d=St(),s=s.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=St(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,d)=>c.set(l,d))),!(c.size()>=i)););return A.resolve(c)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kl(t,r));let s=this.Lr.get(t);s===void 0&&(s=K(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class kS{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class xl{constructor(){this.kr=new se(Ve.qr),this.Kr=new se(Ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ve(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new x(new Y([])),r=new Ve(t,e),i=new Ve(t,e+1),s=[];return this.Kr.forEachInRange([r,i],(o=>{this.Wr(o),s.push(o.key)})),s}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new x(new Y([])),r=new Ve(t,e),i=new Ve(t,e+1);let s=K();return this.Kr.forEachInRange([r,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Ve(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return x.comparator(e.key,t.key)||G(e.Jr,t.Jr)}static Ur(e,t){return G(e.Jr,t.Jr)||x.comparator(e.key,t.key)}}/**
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
 */class DS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new se(Ve.qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pl(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new Ve(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?En:this.Yn-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),i=new Ve(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],(o=>{const c=this.Zr(o.Jr);s.push(c)})),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new se(G);return t.forEach((i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],(c=>{r=r.add(c.Jr)}))})),A.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new x(s),0);let c=new se(G);return this.Hr.forEachWhile((u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(c=c.add(u.Jr)),!0)}),o),A.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){$(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return A.forEach(t.mutations,(i=>{const s=new Ve(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new Ve(t,0),i=this.Hr.firstAfterOrEqual(r);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class NS{constructor(e){this.ti=e,this.docs=(function(){return new ce(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return A.resolve(r?r.document.mutableCopy():he.newInvalidDocument(t))}getEntries(e,t){let r=et();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():he.newInvalidDocument(i))})),A.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=et();const o=t.path,c=new x(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ml(bg(d),r)<=0||(i.has(d.key)||to(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,r,i){q(9500)}ni(e,t){return A.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new VS(this)}getSize(e){return A.resolve(this.size)}}class VS extends Y_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)})),A.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class OS{constructor(e){this.persistence=e,this.ri=new Xt((t=>hr(t)),Zs),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.ii=0,this.si=new xl,this.targetCount=0,this.oi=gr._r()}forEachTarget(e,t){return this.ri.forEach(((r,i)=>t(i))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),A.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new gr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.lr(t),A.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),A.waitFor(s).next((()=>i))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return A.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),A.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return A.resolve(r)}containsKey(e,t){return A.resolve(this.si.containsKey(t))}}/**
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
 */class Ll{constructor(e,t){this._i={},this.overlays={},this.ai=new Xe(0),this.ui=!1,this.ui=!0,this.ci=new kS,this.referenceDelegate=e(this),this.li=new OS(this),this.indexManager=new IS,this.remoteDocumentCache=(function(i){return new NS(i)})((r=>this.referenceDelegate.hi(r))),this.serializer=new B_(t),this.Pi=new PS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new CS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new DS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new xS(this.ai.next());return this.referenceDelegate.Ti(),r(i).next((s=>this.referenceDelegate.Ei(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ii(e,t){return A.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class xS extends Pg{constructor(e){super(),this.currentSequenceNumber=e}}class tc{constructor(e){this.persistence=e,this.Ri=new xl,this.Ai=null}static Vi(e){return new tc(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),A.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.di.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,(r=>{const i=x.fromPath(r);return this.mi(e,i).next((s=>{s||t.removeEntry(i,j.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ya{constructor(e,t){this.persistence=e,this.fi=new Xt((r=>$e(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=J_(this,t)}static Vi(e,t){return new ya(e,t)}Ti(){}Ei(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return A.forEach(this.fi,((r,i)=>this.wr(e,r,i).next((s=>s?A.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,s.removeEntry(o,j.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qo(e.data.value)),t}wr(e,t,r){return A.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return A.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class LS{constructor(e){this.serializer=e}k(e,t,r,i){const s=new qa("createOrUpgrade",t);r<1&&i>=1&&((function(u){u.createObjectStore(Xs)})(e),(function(u){u.createObjectStore(xs,{keyPath:WR}),u.createObjectStore(ft,{keyPath:pf,autoIncrement:!0}).createIndex(ir,mf,{unique:!0}),u.createObjectStore(ti)})(e),ip(e),(function(u){u.createObjectStore(Xn)})(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&((function(u){u.deleteObjectStore(ri),u.deleteObjectStore(ni),u.deleteObjectStore(ar)})(e),ip(e)),o=o.next((()=>(function(u){const l=u.store(ar),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return l.put(ha,d)})(s)))),r<4&&i>=4&&(r!==0&&(o=o.next((()=>(function(u,l){return l.store(ft).J().next((p=>{u.deleteObjectStore(ft),u.createObjectStore(ft,{keyPath:pf,autoIncrement:!0}).createIndex(ir,mf,{unique:!0});const g=l.store(ft),E=p.map((C=>g.put(C)));return A.waitFor(E)}))})(e,s)))),o=o.next((()=>{(function(u){u.createObjectStore(ii,{keyPath:rb})})(e)}))),r<5&&i>=5&&(o=o.next((()=>this.gi(s)))),r<6&&i>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Ls)})(e),this.pi(s))))),r<7&&i>=7&&(o=o.next((()=>this.yi(s)))),r<8&&i>=8&&(o=o.next((()=>this.wi(e,s)))),r<9&&i>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&i>=10&&(o=o.next((()=>this.Si(s)))),r<11&&i>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(za,{keyPath:ib})})(e),(function(u){u.createObjectStore($a,{keyPath:sb})})(e)}))),r<12&&i>=12&&(o=o.next((()=>{(function(u){const l=u.createObjectStore(ja,{keyPath:db});l.createIndex(Tu,fb,{unique:!1}),l.createIndex(Lg,pb,{unique:!1})})(e)}))),r<13&&i>=13&&(o=o.next((()=>(function(u){const l=u.createObjectStore(la,{keyPath:JR});l.createIndex(Ko,YR),l.createIndex(Ng,XR)})(e))).next((()=>this.bi(e,s))).next((()=>e.deleteObjectStore(Xn)))),r<14&&i>=14&&(o=o.next((()=>this.Di(e,s)))),r<15&&i>=15&&(o=o.next((()=>(function(u){u.createObjectStore(yl,{keyPath:ob,autoIncrement:!0}).createIndex(Iu,ab,{unique:!1}),u.createObjectStore(Is,{keyPath:cb}).createIndex(Og,ub,{unique:!1}),u.createObjectStore(Ts,{keyPath:lb}).createIndex(xg,hb,{unique:!1})})(e)))),r<16&&i>=16&&(o=o.next((()=>{t.objectStore(Is).clear()})).next((()=>{t.objectStore(Ts).clear()}))),r<17&&i>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Il,{keyPath:mb})})(e)}))),r<18&&i>=18&&Wp()&&(o=o.next((()=>{t.objectStore(Is).clear()})).next((()=>{t.objectStore(Ts).clear()}))),o}pi(e){let t=0;return e.store(Xn).ee(((r,i)=>{t+=_a(i)})).next((()=>{const r={byteSize:t};return e.store(Ls).put(yu,r)}))}gi(e){const t=e.store(xs),r=e.store(ft);return t.J().next((i=>A.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,En],[s.userId,s.lastAcknowledgedBatchId]);return r.J(ir,o).next((c=>A.forEach(c,(u=>{$(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=er(this.serializer,u);return G_(e,s.userId,l).next((()=>{}))}))))}))))}yi(e){const t=e.store(ri),r=e.store(Xn);return e.store(ar).get(ha).next((i=>{const s=[];return r.ee(((o,c)=>{const u=new Y(o),l=(function(p){return[0,$e(p)]})(u);s.push(t.get(l).next((d=>d?A.resolve():(p=>t.put({targetId:0,path:$e(p),sequenceNumber:i.highestListenSequenceNumber}))(u))))})).next((()=>A.waitFor(s)))}))}wi(e,t){e.createObjectStore(Ms,{keyPath:nb});const r=t.store(Ms),i=new Ol,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:$e(u)})}};return t.store(Xn).ee({Y:!0},((o,c)=>{const u=new Y(o);return s(u.popLast())})).next((()=>t.store(ti).ee({Y:!0},(([o,c,u],l)=>{const d=bt(c);return s(d.popLast())}))))}Si(e){const t=e.store(ni);return t.ee(((r,i)=>{const s=ds(i),o=q_(this.serializer,s);return t.put(o)}))}bi(e,t){const r=t.store(Xn),i=[];return r.ee(((s,o)=>{const c=t.store(la),u=(function(p){return p.document?new x(Y.fromString(p.document.name).popFirst(5)):p.noDocument?x.fromSegments(p.noDocument.path):p.unknownDocument?x.fromSegments(p.unknownDocument.path):q(36783)})(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(l))})).next((()=>A.waitFor(i)))}Di(e,t){const r=t.store(ft),i=X_(this.serializer),s=new Ll(tc.Vi,this.serializer.yt);return r.J().next((o=>{const c=new Map;return o.forEach((u=>{let l=c.get(u.userId)??K();er(this.serializer,u).keys().forEach((d=>l=l.add(d))),c.set(u.userId,l)})),A.forEach(c,((u,l)=>{const d=new Oe(l),p=Za.wt(this.serializer,d),g=s.getIndexManager(d),E=ec.wt(d,this.serializer,g,s.referenceDelegate);return new Z_(i,E,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Eu(t,Xe.ce),u).next()}))}))}}function ip(n){n.createObjectStore(ri,{keyPath:eb}).createIndex(_l,tb,{unique:!0}),n.createObjectStore(ni,{keyPath:"targetId"}).createIndex(Vg,ZR,{unique:!0}),n.createObjectStore(ar)}const dn="IndexedDbPersistence",Jc=18e5,Yc=5e3,Xc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ey="main";class Ml{constructor(e,t,r,i,s,o,c,u,l,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=s,this.window=o,this.document=c,this.Fi=l,this.Mi=d,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=g=>Promise.resolve(),!Ml.v())throw new N(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new AS(this,i),this.qi=t+ey,this.serializer=new B_(u),this.Ki=new Pt(this.qi,this.xi,new LS(this.serializer)),this.ci=new fS,this.li=new ES(this.referenceDelegate,this.serializer),this.remoteDocumentCache=X_(this.serializer),this.Pi=new dS,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&ve(dn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(b.FAILED_PRECONDITION,Xc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new Xe(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.Ki&&this.Ki.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Lo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Mn(e))return V(dn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(dn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return rs(e).get(Dr).next((t=>A.resolve(this.Xi(t))))}Yi(e){return Lo(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Jc)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=De(t,ii);return r.J().next((i=>{const s=this.ns(i,Jc),o=i.filter((c=>s.indexOf(c)===-1));return A.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?A.resolve(!0):rs(e).get(Dr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Yc)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new N(b.FAILED_PRECONDITION,Xc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Lo(e).J().next((r=>this.ns(r,Yc).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&V(dn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[Xs,ii],(e=>{const t=new Eu(e,Xe.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.Ki.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>Lo(e).J().next((t=>this.ns(t,Jc).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return ec.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new TS(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Za.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){V(dn,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(u){return u===18?yb:u===17?Bg:u===16?_b:u===15?Tl:u===14?Ug:u===13?Fg:u===12?gb:u===11?Mg:void q(60245)})(this.xi);let o;return this.Ki.runTransaction(e,i,s,(c=>(o=new Eu(c,this.ai?this.ai.next():Xe.ce),t==="readwrite-primary"?this.ji(o).next((u=>!!u||this.Ji(o))).next((u=>{if(!u)throw ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new N(b.FAILED_PRECONDITION,Sg);return r(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ps(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ps(e){return rs(e).get(Dr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Yc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(b.FAILED_PRECONDITION,Xc)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return rs(e).put(Dr,t)}static v(){return Pt.v()}Hi(e){const t=rs(e);return t.get(Dr).next((r=>this.Xi(r)?(V(dn,"Releasing primary lease."),t.delete(Dr)):A.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ve(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;Kp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return V(dn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ve(dn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){ve("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function rs(n){return De(n,Xs)}function Lo(n){return De(n,ii)}function Fl(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Ul{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ul(e,t.fromCache,r,i)}}/**
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
 */class MS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ty{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Kp()?8:Cg(Ce())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ps(e,t,i,r).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new MS;return this.ys(e,t,o).next((c=>{if(s.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>s.result))}ws(e,t,r,i){return r.documentReadCount<this.Vs?(Fr()<=Z.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Fr()<=Z.DEBUG&&V("QueryEngine","Query:",Ur(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Fr()<=Z.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):A.resolve())}gs(e,t){if(Pf(t))return A.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=pa(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const o=K(...s);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const l=this.Ss(t,c);return this.bs(t,l,o,u.readTime)?this.gs(e,pa(t,null,"F")):this.Ds(e,l,t,u)}))))})))))}ps(e,t,r,i){return Pf(t)||i.isEqual(j.min())?A.resolve(null):this.fs.getDocuments(e,r).next((s=>{const o=this.Ss(t,s);return this.bs(t,o,r,i)?A.resolve(null):(Fr()<=Z.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ur(t)),this.Ds(e,o,t,Rg(i,Xr)).next((c=>c)))}))}Ss(e,t){let r=new se(l_(e));return t.forEach(((i,s)=>{to(e,s)&&(r=r.add(s))})),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return Fr()<=Z.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ur(t)),this.fs.getDocumentsMatchingQuery(e,t,ut.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
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
 */const Bl="LocalStore",FS=3e8;class US{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new ce(G),this.Fs=new Xt((s=>hr(s)),Zs),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function ny(n,e,t,r){return new US(n,e,t,r)}async function ry(n,e){const t=L(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const o=[],c=[];let u=K();for(const l of i){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of s){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next((l=>({Ns:l,removedBatchIds:o,addedBatchIds:c})))}))}))}function BS(n,e){const t=L(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,l,d){const p=l.batch,g=p.keys();let E=A.resolve();return g.forEach((C=>{E=E.next((()=>d.getEntry(u,C))).next((D=>{const k=l.docVersions.get(C);$(k!==null,48541),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,l),D.isValidDocument()&&(D.setReadTime(l.commitVersion),d.addEntry(D)))}))})),E.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=K();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function iy(n){const e=L(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function qS(n,e){const t=L(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((d,p)=>{const g=i.get(p);if(!g)return;c.push(t.li.removeMatchingKeys(s,d.removedDocuments,p).next((()=>t.li.addMatchingKeys(s,d.addedDocuments,p))));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Te.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),(function(D,k,F){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=FS?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(g,E,d)&&c.push(t.li.updateTargetData(s,E))}));let u=et(),l=K();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))})),c.push(sy(s,o,e.documentUpdates).next((d=>{u=d.Bs,l=d.Ls}))),!r.isEqual(j.min())){const d=t.li.getLastRemoteSnapshotVersion(s).next((p=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r)));c.push(d)}return A.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,l))).next((()=>u))})).then((s=>(t.vs=i,s)))}function sy(n,e,t){let r=K(),i=K();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let o=et();return t.forEach(((c,u)=>{const l=s.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):V(Bl,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)})),{Bs:o,Ls:i}}))}function zS(n,e){const t=L(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=En),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function hi(n,e){const t=L(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.li.getTargetData(r,e).next((s=>s?(i=s,A.resolve(i)):t.li.allocateTargetId(r).next((o=>(i=new Bt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function di(n,e,t){const r=L(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Mn(o))throw o;V(Bl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ia(n,e,t){const r=L(n);let i=j.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,d){const p=L(u),g=p.Fs.get(d);return g!==void 0?A.resolve(p.vs.get(g)):p.li.getTargetData(l,d)})(r,o,je(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{s=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:K()))).next((c=>(cy(r,u_(e),c),{documents:c,ks:s})))))}function oy(n,e){const t=L(n),r=L(t.li),i=t.vs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",(s=>r.At(s,e).next((o=>o?o.target:null))))}function ay(n,e){const t=L(n),r=t.Ms.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",(i=>t.xs.getAllFromCollectionGroup(i,e,Rg(r,Xr),Number.MAX_SAFE_INTEGER))).then((i=>(cy(t,e,i),i)))}function cy(n,e,t){let r=n.Ms.get(e)||j.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.Ms.set(e,r)}async function $S(n,e,t,r){const i=L(n);let s=K(),o=et();for(const l of t){const d=e.qs(l.metadata.name);l.document&&(s=s.add(d));const p=e.Ks(l);p.setReadTime(e.Us(l.metadata.readTime)),o=o.insert(d,p)}const c=i.xs.newChangeBuffer({trackRemovals:!0}),u=await hi(i,(function(d){return je(Ai(Y.fromString(`__bundle__/docs/${d}`)))})(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(l=>sy(l,c,o).next((d=>(c.apply(l),d))).next((d=>i.li.removeMatchingKeysForTargetId(l,u.targetId).next((()=>i.li.addMatchingKeys(l,s,u.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(l,d.Bs,d.Ls))).next((()=>d.Bs))))))}async function jS(n,e,t=K()){const r=await hi(n,je(Xa(e.bundledQuery))),i=L(n);return i.persistence.runTransaction("Save named query","readwrite",(s=>{const o=Ae(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Pi.saveNamedQuery(s,e);const c=r.withResumeToken(Te.EMPTY_BYTE_STRING,o);return i.vs=i.vs.insert(c.targetId,c),i.li.updateTargetData(s,c).next((()=>i.li.removeMatchingKeysForTargetId(s,r.targetId))).next((()=>i.li.addMatchingKeys(s,t,r.targetId))).next((()=>i.Pi.saveNamedQuery(s,e)))}))}/**
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
 */const uy="firestore_clients";function sp(n,e){return`${uy}_${n}_${e}`}const ly="firestore_mutations";function op(n,e,t){let r=`${ly}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const hy="firestore_targets";function Zc(n,e){return`${hy}_${n}_${e}`}/**
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
 */const vt="SharedClientState";class Ta{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static $s(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new N(i.error.code,i.error.message))),o?new Ta(e,t,i.state,s):(ve(vt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new N(r.error.code,r.error.message))),s?new Rs(e,r.state,i):(ve(vt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ea{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Rl();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=kg(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ea(e,s):(ve(vt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class ql{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ql(t.clientId,t.onlineState):(ve(vt,`Failed to parse online state: ${e}`),null)}}class xu{constructor(){this.activeTargetIds=Rl()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eu{constructor(e,t,r,i,s){this.window=e,this.Ci=t,this.persistenceKey=r,this.zs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new ce(G),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=sp(this.persistenceKey,this.zs),this.Ys=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new xu),this.eo=new RegExp(`^${uy}_${o}_([^_]*)$`),this.no=new RegExp(`^${ly}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${hy}_${o}_(\\d+)$`),this.io=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.so=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const i=this.getItem(sp(this.persistenceKey,r));if(i){const s=Ea.$s(r,i);s&&(this.Hs=this.Hs.insert(s.clientId,s))}}this.oo();const t=this.storage.getItem(this.io);if(t){const r=this._o(t);r&&this.ao(r)}for(const r of this.Zs)this.Js(r);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach(((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,r){this.co(e,t,r),this.lo(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Zc(this.persistenceKey,e));if(i){const s=Rs.$s(e,i);s&&(r=s.state)}}return t&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zc(this.persistenceKey,e))}updateQueryState(e,t,r){this.Po(e,t,r)}handleUserChange(e,t,r){t.forEach((i=>{this.lo(i)})),this.currentUser=e,r.forEach((i=>{this.addPendingMutation(i)}))}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V(vt,"READ",e,t),t}setItem(e,t){V(vt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){V(vt,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(V(vt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const r=this.Io(t.key);return this.Ro(r,null)}{const r=this.Ao(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(t.key)){if(t.newValue!==null){const r=this.Vo(t.key,t.newValue);if(r)return this.mo(r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(t.key===this.io){if(t.newValue!==null){const r=this._o(t.newValue);if(r)return this.ao(r)}}else if(t.key===this.Ys){const r=(function(s){let o=Xe.ce;if(s!=null)try{const c=JSON.parse(s);$(typeof c=="number",30636,{yo:s}),o=c}catch(c){ve(vt,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);r!==Xe.ce&&this.sequenceNumberHandler(r)}else if(t.key===this.so){const r=this.wo(t.newValue);await Promise.all(r.map((i=>this.syncEngine.So(i))))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,r){const i=new Ta(this.currentUser,e,t,r),s=op(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}lo(e){const t=op(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,r){const i=Zc(this.persistenceKey,e),s=new Rs(e,t,r);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Io(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const r=this.Io(e);return Ea.$s(r,t)}Vo(e,t){const r=this.no.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ta.$s(new Oe(s),i,t)}fo(e,t){const r=this.ro.exec(e),i=Number(r[1]);return Rs.$s(i,t)}_o(e){return ql.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);V(vt,`Ignoring mutation for non-active user ${e.user.uid}`)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Hs.insert(e,t):this.Hs.remove(e),i=this.uo(this.Hs),s=this.uo(r),o=[],c=[];return s.forEach((u=>{i.has(u)||o.push(u)})),i.forEach((u=>{s.has(u)||c.push(u)})),this.syncEngine.Co(o,c).then((()=>{this.Hs=r}))}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=Rl();return e.forEach(((r,i)=>{t=t.unionWith(i.activeTargetIds)})),t}}class dy{constructor(){this.vo=new xu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new xu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GS{Mo(e){}shutdown(){}}/**
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
 */const ap="ConnectivityMonitor";class cp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(ap,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(ap,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mo=null;function Lu(){return Mo===null?Mo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mo++,"0x"+Mo.toString(16)}/**
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
 */const tu="RestConnection",HS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class KS{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Us?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=Lu(),c=this.Qo(e,t.toUriEncodedString());V(tu,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:l}=new URL(c),d=Vn(l);return this.zo(e,c,u,r,d).then((p=>(V(tu,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw it(tu,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Qo(e,t){const r=HS[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class WS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Be="WebChannelConnection",is=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Hr extends KS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Hr.c_){const e=gg();is(e,mg.STAT_EVENT,(t=>{t.stat===fu.PROXY?V(Be,"STAT_EVENT: detected buffering proxy"):t.stat===fu.NOPROXY&&V(Be,"STAT_EVENT: detected no buffering proxy")})),Hr.c_=!0}}zo(e,t,r,i,s){const o=Lu();return new Promise(((c,u)=>{const l=new fg;l.setWithCredentials(!0),l.listenOnce(pg.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Go.NO_ERROR:const p=l.getResponseJson();V(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Go.TIMEOUT:V(Be,`RPC '${e}' ${o} timed out`),u(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const g=l.getStatus();if(V(Be,`RPC '${e}' ${o} failed with status:`,g,"response text:",l.getResponseText()),g>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const C=E==null?void 0:E.error;if(C&&C.status&&C.message){const D=(function(F){const z=F.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(z)>=0?z:b.UNKNOWN})(C.status);u(new N(D,C.message))}else u(new N(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new N(b.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{V(Be,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);V(Be,`RPC '${e}' ${o} sending request:`,i),l.send(t,"POST",d,r,15)}))}T_(e,t,r){const i=Lu(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");V(Be,`Creating RPC '${e}' stream ${i}: ${l}`,c);const d=o.createWebChannel(l,c);this.E_(d);let p=!1,g=!1;const E=new WS({Jo:C=>{g?V(Be,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(V(Be,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),V(Be,`RPC '${e}' stream ${i} sending:`,C),d.send(C))},Ho:()=>d.close()});return is(d,us.EventType.OPEN,(()=>{g||(V(Be,`RPC '${e}' stream ${i} transport opened.`),E.i_())})),is(d,us.EventType.CLOSE,(()=>{g||(g=!0,V(Be,`RPC '${e}' stream ${i} transport closed`),E.o_(),this.I_(d))})),is(d,us.EventType.ERROR,(C=>{g||(g=!0,it(Be,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),E.o_(new N(b.UNAVAILABLE,"The operation could not be completed")))})),is(d,us.EventType.MESSAGE,(C=>{var D;if(!g){const k=C.data[0];$(!!k,16349);const F=k,z=(F==null?void 0:F.error)||((D=F[0])==null?void 0:D.error);if(z){V(Be,`RPC '${e}' stream ${i} received error:`,z);const B=z.status;let H=(function(T){const _=Re[T];if(_!==void 0)return A_(_)})(B),W=z.message;B==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&it(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),H===void 0&&(H=b.INTERNAL,W="Unknown error status: "+B+" with message "+z.message),g=!0,E.o_(new N(H,W)),d.close()}else V(Be,`RPC '${e}' stream ${i} received:`,k),E.__(k)}})),Hr.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _g()}}/**
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
 */function QS(n){return new Hr(n)}/**
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
 */function fy(){return typeof window<"u"?window:null}function ea(){return typeof document<"u"?document:null}/**
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
 */function vr(n){return new tS(n,!0)}/**
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
 */Hr.c_=!1;class zl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const up="PersistentStream";class py{constructor(e,t,r,i,s,o,c,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(ve(t.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(up,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(V(up,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class JS extends py{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=iS(this.serializer,e),r=(function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ae(o.readTime):j.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=ku(this.serializer),t.addTarget=(function(s,o){let c;const u=o.target;if(c=da(u)?{documents:V_(s,u)}:{query:Ya(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=P_(s,o.resumeToken);const l=Pu(s,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=li(s,o.snapshotVersion.toTimestamp());const l=Pu(s,o.expectedCount);l!==null&&(c.expectedCount=l)}return c})(this.serializer,e);const r=oS(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=ku(this.serializer),t.removeTarget=e,this.q_(t)}}class YS extends py{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=sS(e.writeResults,e.commitTime),r=Ae(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ku(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>js(this.serializer,r)))};this.q_(t)}}/**
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
 */class XS{}class ZS extends XS{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,Cu(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(b.UNKNOWN,s.toString())}))}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Cu(t,r),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function eP(n,e,t,r){return new ZS(n,e,t,r)}class tP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ve(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _r="RemoteStore";class nP{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Un(this)&&(V(_r,"Restarting streams for network reachability change."),await(async function(u){const l=L(u);l.Ia.add(4),await Si(l),l.Va.set("Unknown"),l.Ia.delete(4),await so(l)})(this))}))})),this.Va=new tP(r,i)}}async function so(n){if(Un(n))for(const e of n.Ra)await e(!0)}async function Si(n){for(const e of n.Ra)await e(!1)}function nc(n,e){const t=L(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Gl(t)?jl(t):Ci(t).O_()&&$l(t,e))}function fi(n,e){const t=L(n),r=Ci(t);t.Ea.delete(e),r.O_()&&my(t,e),t.Ea.size===0&&(r.O_()?r.L_():Un(t)&&t.Va.set("Unknown"))}function $l(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ci(n).Z_(e)}function my(n,e){n.da.$e(e),Ci(n).X_(e)}function jl(n){n.da=new Yb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ci(n).start(),n.Va.ua()}function Gl(n){return Un(n)&&!Ci(n).x_()&&n.Ea.size>0}function Un(n){return L(n).Ia.size===0}function gy(n){n.da=void 0}async function rP(n){n.Va.set("Online")}async function iP(n){n.Ea.forEach(((e,t)=>{$l(n,e)}))}async function sP(n,e){gy(n),Gl(n)?(n.Va.ha(e),jl(n)):n.Va.set("Unknown")}async function oP(n,e,t){if(n.Va.set("Online"),e instanceof S_&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ea.delete(c),i.da.removeTarget(c))})(n,e)}catch(r){V(_r,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wa(n,r)}else if(e instanceof Xo?n.da.Xe(e):e instanceof b_?n.da.st(e):n.da.tt(e),!t.isEqual(j.min()))try{const r=await iy(n.localStore);t.compareTo(r)>=0&&await(function(s,o){const c=s.da.Tt(o);return c.targetChanges.forEach(((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(l);d&&s.Ea.set(l,d.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,l)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(Te.EMPTY_BYTE_STRING,d.snapshotVersion)),my(s,u);const p=new Bt(d.target,u,l,d.sequenceNumber);$l(s,p)})),s.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){V(_r,"Failed to raise snapshot:",r),await wa(n,r)}}async function wa(n,e,t){if(!Mn(e))throw e;n.Ia.add(1),await Si(n),n.Va.set("Offline"),t||(t=()=>iy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(_r,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await so(n)}))}function _y(n,e){return e().catch((t=>wa(n,t,e)))}async function Pi(n){const e=L(n),t=kn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:En;for(;aP(e);)try{const i=await zS(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,cP(e,i)}catch(i){await wa(e,i)}yy(e)&&Iy(e)}function aP(n){return Un(n)&&n.Ta.length<10}function cP(n,e){n.Ta.push(e);const t=kn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function yy(n){return Un(n)&&!kn(n).x_()&&n.Ta.length>0}function Iy(n){kn(n).start()}async function uP(n){kn(n).ra()}async function lP(n){const e=kn(n);for(const t of n.Ta)e.ea(t.mutations)}async function hP(n,e,t){const r=n.Ta.shift(),i=Cl.from(r,e,t);await _y(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Pi(n)}async function dP(n,e){e&&kn(n).Y_&&await(async function(r,i){if((function(o){return v_(o)&&o!==b.ABORTED})(i.code)){const s=r.Ta.shift();kn(r).B_(),await _y(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Pi(r)}})(n,e),yy(n)&&Iy(n)}async function lp(n,e){const t=L(n);t.asyncQueue.verifyOperationInProgress(),V(_r,"RemoteStore received new credentials");const r=Un(t);t.Ia.add(3),await Si(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await so(t)}async function Mu(n,e){const t=L(n);e?(t.Ia.delete(2),await so(t)):e||(t.Ia.add(2),await Si(t),t.Va.set("Unknown"))}function Ci(n){return n.ma||(n.ma=(function(t,r,i){const s=L(t);return s.sa(),new JS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:rP.bind(null,n),Yo:iP.bind(null,n),t_:sP.bind(null,n),H_:oP.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Gl(n)?jl(n):n.Va.set("Unknown")):(await n.ma.stop(),gy(n))}))),n.ma}function kn(n){return n.fa||(n.fa=(function(t,r,i){const s=L(t);return s.sa(),new YS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:uP.bind(null,n),t_:dP.bind(null,n),ta:lP.bind(null,n),na:hP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Pi(n)):(await n.fa.stop(),n.Ta.length>0&&(V(_r,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Hl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Hl(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ki(n,e){if(ve("AsyncQueue",`${e}: ${n}`),Mn(n))return new N(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class cr{static emptySet(e){return new cr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class hp{constructor(){this.ga=new ce(x.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class yr{constructor(e,t,r,i,s,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new yr(e,t,cr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class fP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class pP{constructor(){this.queries=dp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=L(t),s=i.queries;i.queries=dp(),s.forEach(((o,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new N(b.ABORTED,"Firestore shutting down"))}}function dp(){return new Xt((n=>c_(n)),eo)}async function Kl(n,e){const t=L(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new fP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=ki(o,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Ql(t)}async function Wl(n,e){const t=L(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mP(n,e){const t=L(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.Sa)c.Fa(i)&&(r=!0);o.wa=i}}r&&Ql(t)}function gP(n,e,t){const r=L(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Ql(n){n.Ca.forEach((e=>{e.next()}))}var Fu,fp;(fp=Fu||(Fu={})).Ma="default",fp.Cache="cache";class Jl{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fu.Cache}}/**
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
 */class Ty{constructor(e,t){this.Ka=e,this.byteLength=t}Ua(){return"metadata"in this.Ka}}/**
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
 */class pp{constructor(e){this.serializer=e}qs(e){return Ct(this.serializer,e)}Ks(e){return e.metadata.exists?Ja(this.serializer,e.document,!1):he.newNoDocument(this.qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return Ae(e)}}class Yl{constructor(e,t){this.$a=e,this.serializer=t,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=Ey(e)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ka.namedQuery)this.Wa.push(e.Ka.namedQuery);else if(e.Ka.documentMetadata){this.Qa.push({metadata:e.Ka.documentMetadata}),e.Ka.documentMetadata.exists||++t;const r=Y.fromString(e.Ka.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ka.document&&(this.Qa[this.Qa.length-1].document=e.Ka.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,r=new pp(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.qs(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||K()).add(s);t.set(o,c)}}return t}async ja(e){const t=await $S(e,new pp(this.serializer),this.Qa,this.$a.id),r=this.za(this.documents);for(const i of this.Wa)await jS(e,i,r.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function Ey(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class wy{constructor(e){this.key=e}}class vy{constructor(e){this.key=e}}class Ay{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=K(),this.mutatedKeys=K(),this.eu=l_(e),this.tu=new cr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new hp,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const g=i.get(d),E=to(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?C!==D&&(r.track({type:3,doc:E}),k=!0):this.su(g,E)||(r.track({type:2,doc:E}),k=!0,(u&&this.eu(E,u)>0||l&&this.eu(E,l)<0)&&(c=!0)):!g&&E?(r.track({type:0,doc:E}),k=!0):g&&!E&&(r.track({type:1,doc:g}),k=!0,(u||l)&&(c=!0)),k&&(E?(o=o.add(E),s=D?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(E,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:k})}};return D(E)-D(C)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,l=u!==this.Xa;return this.Xa=u,o.length!==0||l?{snapshot:new yr(this.query,e.tu,s,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hp,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=K(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new vy(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new wy(r))})),t}cu(e){this.Za=e.ks,this.Ya=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return yr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Bn="SyncEngine";class _P{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yP{constructor(e){this.key=e,this.hu=!1}}class IP{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xt((c=>c_(c)),eo),this.Eu=new Map,this.Iu=new Set,this.Ru=new ce(x.comparator),this.Au=new Map,this.Vu=new xl,this.du={},this.mu=new Map,this.fu=gr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TP(n,e,t=!0){const r=rc(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Ry(r,e,t,!0),i}async function EP(n,e){const t=rc(n);await Ry(t,e,!0,!1)}async function Ry(n,e,t,r){const i=await hi(n.localStore,je(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await Xl(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&nc(n.remoteStore,i),c}async function Xl(n,e,t,r,i){n.pu=(p,g,E)=>(async function(D,k,F,z){let B=k.view.ru(F);B.bs&&(B=await Ia(D.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,B))));const H=z&&z.targetChanges.get(k.targetId),W=z&&z.targetMismatches.get(k.targetId)!=null,J=k.view.applyChanges(B,D.isPrimaryClient,H,W);return Uu(D,k.targetId,J.au),J.snapshot})(n,p,g,E);const s=await Ia(n.localStore,e,!0),o=new Ay(e,s.ks),c=o.ru(s.documents),u=io.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(c,n.isPrimaryClient,u);Uu(n,t,l.au);const d=new _P(e,t,o);return n.Tu.set(e,d),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),l.snapshot}async function wP(n,e,t){const r=L(n),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter((o=>!eo(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await di(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&fi(r.remoteStore,i.targetId),pi(r,i.targetId)})).catch(Ln)):(pi(r,i.targetId),await di(r.localStore,i.targetId,!0))}async function vP(n,e){const t=L(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),fi(t.remoteStore,r.targetId))}async function AP(n,e,t){const r=nh(n);try{const i=await(function(o,c){const u=L(o),l=ne.now(),d=c.reduce(((E,C)=>E.add(C.key)),K());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let C=et(),D=K();return u.xs.getEntries(E,d).next((k=>{C=k,C.forEach(((F,z)=>{z.isValidDocument()||(D=D.add(F))}))})).next((()=>u.localDocuments.getOverlayedDocuments(E,C))).next((k=>{p=k;const F=[];for(const z of c){const B=Kb(z,p.get(z.key).overlayedDocument);B!=null&&F.push(new Zt(z.key,B,Yg(B.value.mapValue),_e.exists(!0)))}return u.mutationQueue.addMutationBatch(E,l,F,c)})).next((k=>{g=k;const F=k.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(E,k.batchId,F)}))})).then((()=>({batchId:g.batchId,changes:d_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(o,c,u){let l=o.du[o.currentUser.toKey()];l||(l=new ce(G)),l=l.insert(c,u),o.du[o.currentUser.toKey()]=l})(r,i.batchId,t),await en(r,i.changes),await Pi(r.remoteStore)}catch(i){const s=ki(i,"Failed to persist write");t.reject(s)}}async function by(n,e){const t=L(n);try{const r=await qS(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Au.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?$(o.hu,14607):i.removedDocuments.size>0&&($(o.hu,42227),o.hu=!1))})),await en(t,r,e)}catch(r){await Ln(r)}}function mp(n,e,t){const r=L(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=L(o);u.onlineState=c;let l=!1;u.queries.forEach(((d,p)=>{for(const g of p.Sa)g.va(c)&&(l=!0)})),l&&Ql(u)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RP(n,e,t){const r=L(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ce(x.comparator);o=o.insert(s,he.newNoDocument(s,j.min()));const c=K().add(s),u=new ro(j.min(),new Map,new ce(G),o,c);await by(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),th(r)}else await di(r.localStore,e,!1).then((()=>pi(r,e,t))).catch(Ln)}async function bP(n,e){const t=L(n),r=e.batch.batchId;try{const i=await BS(t.localStore,e);eh(t,r,null),Zl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await en(t,i)}catch(i){await Ln(i)}}async function SP(n,e,t){const r=L(n);try{const i=await(function(o,c){const u=L(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next((p=>($(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(l,p)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>u.localDocuments.getDocuments(l,d)))}))})(r.localStore,e);eh(r,e,t),Zl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await en(r,i)}catch(i){await Ln(i)}}async function PP(n,e){const t=L(n);Un(t.remoteStore)||V(Bn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await(function(o){const c=L(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(r===En)return void e.resolve();const i=t.mu.get(r)||[];i.push(e),t.mu.set(r,i)}catch(r){const i=ki(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Zl(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function eh(n,e,t){const r=L(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function pi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||Sy(n,r)}))}function Sy(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(fi(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),th(n))}function Uu(n,e,t){for(const r of t)r instanceof wy?(n.Vu.addReference(r.key,e),CP(n,r)):r instanceof vy?(V(Bn,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Sy(n,r.key)):q(19791,{wu:r})}function CP(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(V(Bn,"New document in limbo: "+t),n.Iu.add(r),th(n))}function th(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new x(Y.fromString(e)),r=n.fu.next();n.Au.set(r,new yP(t)),n.Ru=n.Ru.insert(t,r),nc(n.remoteStore,new Bt(je(Ai(t.path)),r,"TargetPurposeLimboResolution",Xe.ce))}}async function en(n,e,t){const r=L(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{o.push(r.pu(u,e,t).then((l=>{var d;if((l||t)&&r.isPrimaryClient){const p=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(l){i.push(l);const p=Ul.Is(u.targetId,l);s.push(p)}})))})),await Promise.all(o),r.Pu.H_(i),await(async function(u,l){const d=L(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>A.forEach(l,(g=>A.forEach(g.Ts,(E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E))).next((()=>A.forEach(g.Es,(E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))))))}catch(p){if(!Mn(p))throw p;V(Bl,"Failed to update sequence numbers: "+p)}for(const p of l){const g=p.targetId;if(!p.fromCache){const E=d.vs.get(g),C=E.snapshotVersion,D=E.withLastLimboFreeSnapshotVersion(C);d.vs=d.vs.insert(g,D)}}})(r.localStore,s))}async function kP(n,e){const t=L(n);if(!t.currentUser.isEqual(e)){V(Bn,"User change. New user:",e.toKey());const r=await ry(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((c=>{c.forEach((u=>{u.reject(new N(b.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await en(t,r.Ns)}}function DP(n,e){const t=L(n),r=t.Au.get(e);if(r&&r.hu)return K().add(r.key);{let i=K();const s=t.Eu.get(e);if(!s)return i;for(const o of s){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}async function NP(n,e){const t=L(n),r=await Ia(t.localStore,e.query,!0),i=e.view.cu(r);return t.isPrimaryClient&&Uu(t,e.targetId,i.au),i}async function VP(n,e){const t=L(n);return ay(t.localStore,e).then((r=>en(t,r)))}async function OP(n,e,t,r){const i=L(n),s=await(function(c,u){const l=L(c),d=L(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",(p=>d.Xn(p,u).next((g=>g?l.localDocuments.getDocuments(p,g):A.resolve(null)))))})(i.localStore,e);s!==null?(t==="pending"?await Pi(i.remoteStore):t==="acknowledged"||t==="rejected"?(eh(i,e,r||null),Zl(i,e),(function(c,u){L(L(c).mutationQueue).nr(u)})(i.localStore,e)):q(6720,"Unknown batchState",{Su:t}),await en(i,s)):V(Bn,"Cannot apply mutation batch with id: "+e)}async function xP(n,e){const t=L(n);if(rc(t),nh(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await gp(t,r.toArray());t.gu=!0,await Mu(t.remoteStore,!0);for(const s of i)nc(t.remoteStore,s)}else if(e===!1&&t.gu!==!1){const r=[];let i=Promise.resolve();t.Eu.forEach(((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then((()=>(pi(t,o),di(t.localStore,o,!0)))),fi(t.remoteStore,o)})),await i,await gp(t,r),(function(o){const c=L(o);c.Au.forEach(((u,l)=>{fi(c.remoteStore,l)})),c.Vu.zr(),c.Au=new Map,c.Ru=new ce(x.comparator)})(t),t.gu=!1,await Mu(t.remoteStore,!1)}}async function gp(n,e,t){const r=L(n),i=[],s=[];for(const o of e){let c;const u=r.Eu.get(o);if(u&&u.length!==0){c=await hi(r.localStore,je(u[0]));for(const l of u){const d=r.Tu.get(l),p=await NP(r,d);p.snapshot&&s.push(p.snapshot)}}else{const l=await oy(r.localStore,o);c=await hi(r.localStore,l),await Xl(r,Py(l),o,!1,c.resumeToken)}i.push(c)}return r.Pu.H_(s),i}function Py(n){return s_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function LP(n){return(function(t){return L(L(t).persistence).hs()})(L(n).localStore)}async function MP(n,e,t,r){const i=L(n);if(i.gu)return void V(Bn,"Ignoring unexpected query state notification.");const s=i.Eu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await ay(i.localStore,u_(s[0])),c=ro.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Te.EMPTY_BYTE_STRING);await en(i,o,c);break}case"rejected":await di(i.localStore,e,!0),pi(i,e,r);break;default:q(64155,t)}}async function FP(n,e,t){const r=rc(n);if(r.gu){for(const i of e){if(r.Eu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){V(Bn,"Adding an already active target "+i);continue}const s=await oy(r.localStore,i),o=await hi(r.localStore,s);await Xl(r,Py(s),o.targetId,!1,o.resumeToken),nc(r.remoteStore,o)}for(const i of t)r.Eu.has(i)&&await di(r.localStore,i,!1).then((()=>{fi(r.remoteStore,i),pi(r,i)})).catch(Ln)}}function rc(n){const e=L(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.Pu.H_=mP.bind(null,e.eventManager),e.Pu.yu=gP.bind(null,e.eventManager),e}function nh(n){const e=L(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SP.bind(null,e),e}function UP(n,e,t){const r=L(n);(async function(s,o,c){try{const u=await o.getMetadata();if(await(function(E,C){const D=L(E),k=Ae(C.createTime);return D.persistence.runTransaction("hasNewerBundle","readonly",(F=>D.Pi.getBundleMetadata(F,C.id))).then((F=>!!F&&F.createTime.compareTo(k)>=0))})(s.localStore,u))return await o.close(),c._completeWith((function(E){return{taskState:"Success",documentsLoaded:E.totalDocuments,bytesLoaded:E.totalBytes,totalDocuments:E.totalDocuments,totalBytes:E.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(Ey(u));const l=new Yl(u,o.serializer);let d=await o.bu();for(;d;){const g=await l.Ga(d);g&&c._updateProgress(g),d=await o.bu()}const p=await l.ja(s.localStore);return await en(s,p.Ha,void 0),await(function(E,C){const D=L(E);return D.persistence.runTransaction("Save bundle","readwrite",(k=>D.Pi.saveBundleMetadata(k,C)))})(s.localStore,u),c._completeWith(p.progress),Promise.resolve(p.Ja)}catch(u){return it(Bn,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(r,e,t).then((i=>{r.sharedClientState.notifyBundleLoaded(i)}))}class mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ny(this.persistence,new ty,e.initialUser,this.serializer)}Cu(e){return new Ll(tc.Vi,this.serializer)}Du(e){return new dy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mi.provider={build:()=>new mi};class rh extends mi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){$(this.persistence.referenceDelegate instanceof ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Q_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Ll((r=>ya.Vi(r,t)),this.serializer)}}class ih extends mi{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await nh(this.xu.syncEngine),await Pi(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return ny(this.persistence,new ty,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Q_(r,e.asyncQueue,t)}Mu(e,t){const r=new HR(t,this.persistence);return new GR(e.asyncQueue,r)}Cu(e){const t=Fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Ml(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,fy(),ea(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new dy}}class Cy extends ih{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof eu&&(this.sharedClientState.syncEngine={bo:OP.bind(null,t),Do:MP.bind(null,t),Co:FP.bind(null,t),hs:LP.bind(null,t),So:VP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.zi((async r=>{await xP(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}Du(e){const t=fy();if(!eu.v(t))throw new N(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new eu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Dn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kP.bind(null,this.syncEngine),await Mu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new pP})()}createDatastore(e){const t=vr(e.databaseInfo.databaseId),r=QS(e.databaseInfo);return eP(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,o,c){return new nP(r,i,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>mp(this.syncEngine,t,0)),(function(){return cp.v()?new cp:new GS})())}createSyncEngine(e,t){return(function(i,s,o,c,u,l,d){const p=new IP(i,s,o,c,u,l);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=L(i);V(_r,"RemoteStore shutting down."),s.Ia.add(5),await Si(s),s.Aa.shutdown(),s.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Dn.provider={build:()=>new Dn};function _p(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class ic{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ve("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class BP{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new Me,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((r=>{r&&r.Ua()?this.metadata.resolve(r.Ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ka)}`))}),(r=>this.metadata.reject(r)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),r=Number(t);isNaN(r)&&this.Ku(`length string (${t}) is not valid number`);const i=await this.Uu(r);return new Ty(JSON.parse(i),e.length+r)}$u(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.$u()<0&&!await this.Wu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.Ku("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Uu(e){for(;this.buffer.length<e;)await this.Wu()&&this.Ku("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ku(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Wu(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class qP{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.bu();if(!r||!r.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.Ka)}`);this.metadata=r;do r=this.bu(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.Uu(e);return new Ty(JSON.parse(t),e)}Uu(e){if(this.cursor+e>this.bundleData.length)throw new N(b.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */let zP=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const o=L(i),c={documents:s.map((p=>$s(o.serializer,p)))},u=await o.jo("BatchGetDocuments",o.serializer.databaseId,Y.emptyPath(),c,s.length),l=new Map;u.forEach((p=>{const g=rS(o.serializer,p);l.set(g.key.toString(),g)}));const d=[];return s.forEach((p=>{const g=l.get(p.toString());$(!!g,55234,{key:p}),d.push(g)})),d})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new bi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const i=x.fromPath(r);this.mutations.push(new Sl(i,this.precondition(i)))})),await(async function(r,i){const s=L(r),o={writes:i.map((c=>js(s.serializer,c)))};await s.Wo("Commit",s.serializer.databaseId,Y.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw q(50498,{Gu:e.constructor.name});t=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new N(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(j.min())?_e.exists(!1):_e.updateTime(t):_e.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(j.min()))throw new N(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(t)}return _e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class $P{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new zl(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new zP(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.Zu(i)}))))})).catch((r=>{this.Zu(r)}))}))}Hu(e){try{const t=this.updateFunction(e);return!Ys(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!v_(t)}return!1}}/**
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
 */const Nn="FirestoreClient";class jP{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=Ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async o=>{V(Nn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(V(Nn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ki(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function nu(n,e){n.asyncQueue.verifyOperationInProgress(),V(Nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await ry(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function yp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sh(n);V(Nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>lp(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>lp(e.remoteStore,i))),n._onlineComponents=e}async function sh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Nn,"Using user provided OfflineComponentProvider");try{await nu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;it("Error using user provided cache. Falling back to memory cache: "+t),await nu(n,new mi)}}else V(Nn,"Using default OfflineComponentProvider"),await nu(n,new rh(void 0));return n._offlineComponents}async function sc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Nn,"Using user provided OnlineComponentProvider"),await yp(n,n._uninitializedComponentsProvider._online)):(V(Nn,"Using default OnlineComponentProvider"),await yp(n,new Dn))),n._onlineComponents}function ky(n){return sh(n).then((e=>e.persistence))}function Di(n){return sh(n).then((e=>e.localStore))}function Dy(n){return sc(n).then((e=>e.remoteStore))}function oh(n){return sc(n).then((e=>e.syncEngine))}function Ny(n){return sc(n).then((e=>e.datastore))}async function gi(n){const e=await sc(n),t=e.eventManager;return t.onListen=TP.bind(null,e.syncEngine),t.onUnlisten=wP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vP.bind(null,e.syncEngine),t}function GP(n){return n.asyncQueue.enqueue((async()=>{const e=await ky(n),t=await Dy(n);return e.setNetworkEnabled(!0),(function(i){const s=L(i);return s.Ia.delete(0),so(s)})(t)}))}function HP(n){return n.asyncQueue.enqueue((async()=>{const e=await ky(n),t=await Dy(n);return e.setNetworkEnabled(!1),(async function(i){const s=L(i);s.Ia.add(0),await Si(s),s.Va.set("Offline")})(t)}))}function KP(n,e,t,r){const i=new ic(r),s=new Jl(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>Kl(await gi(n),s))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>Wl(await gi(n),s)))}}function WP(n,e){const t=new Me;return n.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await(function(l,d){const p=L(l);return p.persistence.runTransaction("read document","readonly",(g=>p.localDocuments.getDocument(g,d)))})(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new N(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=ki(c,`Failed to get document '${s} from cache`);o.reject(u)}})(await Di(n),e,t))),t.promise}function Vy(n,e,t={}){const r=new Me;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,l){const d=new ic({next:g=>{d.Nu(),o.enqueueAndForget((()=>Wl(s,p)));const E=g.docs.has(c);!E&&g.fromCache?l.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?l.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new Jl(Ai(c.path),d,{includeMetadataChanges:!0,qa:!0});return Kl(s,p)})(await gi(n),n.asyncQueue,e,t,r))),r.promise}function QP(n,e){const t=new Me;return n.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await Ia(i,s,!0),u=new Ay(s,c.ks),l=u.ru(c.documents),d=u.applyChanges(l,!1);o.resolve(d.snapshot)}catch(c){const u=ki(c,`Failed to execute query '${s} against cache`);o.reject(u)}})(await Di(n),e,t))),t.promise}function Oy(n,e,t={}){const r=new Me;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,l){const d=new ic({next:g=>{d.Nu(),o.enqueueAndForget((()=>Wl(s,p))),g.fromCache&&u.source==="server"?l.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new Jl(c,d,{includeMetadataChanges:!0,qa:!0});return Kl(s,p)})(await gi(n),n.asyncQueue,e,t,r))),r.promise}function JP(n,e,t){const r=new Me;return n.asyncQueue.enqueueAndForget((async()=>{try{const i=await Ny(n);r.resolve((async function(o,c,u){var D;const l=L(o),{request:d,gt:p,parent:g}=O_(l.serializer,o_(c),u);l.connection.qo||delete d.parent;const E=(await l.jo("RunAggregationQuery",l.serializer.databaseId,g,d,1)).filter((k=>!!k.result));$(E.length===1,64727);const C=(D=E[0].result)==null?void 0:D.aggregateFields;return Object.keys(C).reduce(((k,F)=>(k[p[F]]=C[F],k)),{})})(i,e,t))}catch(i){r.reject(i)}})),r.promise}function YP(n,e){const t=new Me;return n.asyncQueue.enqueueAndForget((async()=>AP(await oh(n),e,t))),t.promise}function XP(n,e){const t=new ic(e);return n.asyncQueue.enqueueAndForget((async()=>(function(i,s){L(i).Ca.add(s),s.next()})(await gi(n),t))),()=>{t.Nu(),n.asyncQueue.enqueueAndForget((async()=>(function(i,s){L(i).Ca.delete(s)})(await gi(n),t)))}}function ZP(n,e,t){const r=new Me;return n.asyncQueue.enqueueAndForget((async()=>{const i=await Ny(n);new $P(n.asyncQueue,i,t,e,r).ju()})),r.promise}function eC(n,e,t,r){const i=(function(o,c){let u;return u=typeof o=="string"?R_().encode(o):o,(function(d,p){return new BP(d,p)})((function(d,p){if(d instanceof Uint8Array)return _p(d,p);if(d instanceof ArrayBuffer)return _p(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,vr(e));n.asyncQueue.enqueueAndForget((async()=>{UP(await oh(n),i,r)}))}function tC(n,e){return n.asyncQueue.enqueue((async()=>(function(r,i){const s=L(r);return s.persistence.runTransaction("Get named query","readonly",(o=>s.Pi.getNamedQuery(o,i)))})(await Di(n),e)))}function xy(n,e){return(function(r,i){return new qP(r,i)})(n,e)}function nC(n,e){return n.asyncQueue.enqueue((async()=>(async function(r,i){const s=L(r),o=s.indexManager,c=[];return s.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((l=>(function(p,g,E,C,D){p=[...p],g=[...g],p.sort(E),g.sort(E);const k=p.length,F=g.length;let z=0,B=0;for(;z<F&&B<k;){const H=E(p[B],g[z]);H<0?D(p[B++]):H>0?C(g[z++]):(z++,B++)}for(;z<F;)C(g[z++]);for(;B<k;)D(p[B++])})(l,i,qR,(d=>{c.push(o.addFieldIndex(u,d))}),(d=>{c.push(o.deleteFieldIndex(u,d))})))).next((()=>A.waitFor(c)))))})(await Di(n),e)))}function rC(n,e){return n.asyncQueue.enqueue((async()=>(function(r,i){L(r).Cs.As=i})(await Di(n),e)))}function iC(n){return n.asyncQueue.enqueue((async()=>(function(t){const r=L(t),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(s=>i.deleteAllFieldIndexes(s)))})(await Di(n))))}/**
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
 */function Ly(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const sC="ComponentProvider",Ip=new Map;function oC(n,e,t,r,i){return new Eb(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ly(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const My="firestore.googleapis.com",Tp=!0;class Ep{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=My,this.ssl=Tp}else this.host=e.host,this.ssl=e.ssl??Tp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=j_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<W_)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ly(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ep({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ep(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Tg;switch(r.type){case"firstParty":return new OR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ip.get(t);r&&(V(sC,"Removing Datastore"),Ip.delete(t),r.terminate())})(this),Promise.resolve()}}function Fy(n,e,t,r={}){var l;n=X(n,oo);const i=Vn(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&Sa(`https://${c}`),s.host!==My&&s.host!==c&&it("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!yt(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Oe.MOCK_USER;else{d=jp(r.mockUserToken,(l=n._app)==null?void 0:l.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Oe(g)}n._authCredentials=new DR(new Ig(d,p))}}/**
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
 */class ke{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ke(this.firestore,e,this._query)}}class ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}toJSON(){return{type:ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(wr(t,ie._jsonSchema))return new ie(e,r||null,new x(Y.fromString(t.referencePath)))}}ie._jsonSchemaVersion="firestore/documentReference/1.0",ie._jsonSchema={type:Se("string",ie._jsonSchemaVersion),referencePath:Se("string")};class gt extends ke{constructor(e,t,r){super(e,t,Ai(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new x(e))}withConverter(e){return new gt(this.firestore,e,this._path)}}function aC(n,e,...t){if(n=U(n),pl("collection","path",e),n instanceof oo){const r=Y.fromString(e,...t);return uf(r),new gt(n,null,r)}{if(!(n instanceof ie||n instanceof gt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return uf(r),new gt(n.firestore,null,r)}}function cC(n,e){if(n=X(n,oo),pl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ke(n,null,(function(r){return new Yt(Y.emptyPath(),r)})(e))}function Uy(n,e,...t){if(n=U(n),arguments.length===1&&(e=Ua.newId()),pl("doc","path",e),n instanceof oo){const r=Y.fromString(e,...t);return cf(r),new ie(n,null,new x(r))}{if(!(n instanceof ie||n instanceof gt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return cf(r),new ie(n.firestore,n instanceof gt?n.converter:null,new x(r))}}function uC(n,e){return n=U(n),e=U(e),(n instanceof ie||n instanceof gt)&&(e instanceof ie||e instanceof gt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function ah(n,e){return n=U(n),e=U(e),n instanceof ke&&e instanceof ke&&n.firestore===e.firestore&&eo(n._query,e._query)&&n.converter===e.converter}/**
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
 */const wp="AsyncQueue";class vp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zl(this,"async_queue_retry"),this._c=()=>{const r=ea();r&&V(wp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Me;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Mn(e))throw e;V(wp,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ve("INTERNAL UNHANDLED ERROR: ",Ap(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Hl.createAndSchedule(this,e,t,r,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:Ap(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ap(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */class By{constructor(){this._progressObserver={},this._taskCompletionResolver=new Me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const lC=-1;class oe extends oo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vp(e),this._firestoreClient=void 0,await e}}}function hC(n,e,t){t||(t=Us);const r=Tr(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(yt(s,e))return i;throw new N(b.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new N(b.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<W_)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Vn(e.host)&&Sa(e.host),r.initialize({options:e,instanceIdentifier:t})}function dC(n,e){const t=typeof n=="object"?n:Pa(),r=typeof n=="string"?n:e||Us,i=Tr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zp("firestore");s&&Fy(i,...s)}return i}function ye(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qy(n),n._firestoreClient}function qy(n){var r,i,s,o;const e=n._freezeSettings(),t=oC(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new jP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}function fC(n,e){it("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return zy(n,Dn.provider,{build:r=>new ih(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function pC(n){it("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();zy(n,Dn.provider,{build:t=>new Cy(t,e.cacheSizeBytes)})}function zy(n,e,t){if((n=X(n,oe))._firestoreClient||n._terminated)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new N(b.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},qy(n)}function mC(n){if(n._initialized&&!n._terminated)throw new N(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Me;return n._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(r){if(!Pt.v())return Promise.resolve();const i=r+ey;await Pt.delete(i)})(Fl(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function gC(n){return(function(t){const r=new Me;return t.asyncQueue.enqueueAndForget((async()=>PP(await oh(t),r))),r.promise})(ye(n=X(n,oe)))}function _C(n){return GP(ye(n=X(n,oe)))}function yC(n){return HP(ye(n=X(n,oe)))}function IC(n){return em(n.app,"firestore",n._databaseId.database),n._delete()}function Bu(n,e){const t=ye(n=X(n,oe)),r=new By;return eC(t,n._databaseId,e,r),r}function $y(n,e){return tC(ye(n=X(n,oe)),e).then((t=>t?new ke(n,null,t.query):null))}/**
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
 */class Ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ye(Te.fromBase64String(e))}catch(t){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ye(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wr(e,Ye._jsonSchema))return Ye.fromBase64String(e.bytes)}}Ye._jsonSchemaVersion="firestore/bytes/1.0",Ye._jsonSchema={type:Se("string",Ye._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class Ar{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function TC(){return new Ar(gu)}/**
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
 */class qn{constructor(e){this._methodName=e}}/**
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
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(wr(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:Se("string",_t._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
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
 */class ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wr(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ct(e.vectorValues);throw new N(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:Se("string",ct._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */const EC=/^__.*__$/;class wC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}class jy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:n})}}class oc{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new oc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return va(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Gy(this.dataSource)&&EC.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class vC{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vr(e)}A(e,t,r,i=!1){return new oc({dataSource:e,methodName:t,targetDoc:r,path:fe.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rr(n){const e=n._freezeSettings(),t=vr(n._databaseId);return new vC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ac(n,e,t,r,i,s={}){const o=n.A(s.merge||s.mergeFields?2:0,e,t,i);ph("Data must be an object, but it was:",o,r);const c=Wy(r,o);let u,l;if(s.merge)u=new Ze(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=Wt(e,p,t);if(!o.contains(g))throw new N(b.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Jy(d,g)||d.push(g)}u=new Ze(d),l=o.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,l=o.fieldTransforms;return new wC(new xe(c),u,l)}class ao extends qn{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ao}}function Hy(n,e,t){return new oc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ch extends qn{_toFieldTransform(e){return new no(e.path,new ci)}isEqual(e){return e instanceof ch}}class uh extends qn{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=Hy(this,e,!0),r=this.Sc.map((s=>br(s,t))),i=new dr(r);return new no(e.path,i)}isEqual(e){return e instanceof uh&&yt(this.Sc,e.Sc)}}class lh extends qn{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=Hy(this,e,!0),r=this.Sc.map((s=>br(s,t))),i=new fr(r);return new no(e.path,i)}isEqual(e){return e instanceof lh&&yt(this.Sc,e.Sc)}}class hh extends qn{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new ui(e.serializer,m_(e.serializer,this.bc));return new no(e.path,t)}isEqual(e){return e instanceof hh&&this.bc===e.bc}}function dh(n,e,t,r){const i=n.A(1,e,t);ph("Data must be an object, but it was:",i,r);const s=[],o=xe.empty();Fn(r,((u,l)=>{const d=mh(e,u,t);l=U(l);const p=i.fc(d);if(l instanceof ao)s.push(d);else{const g=br(l,p);g!=null&&(s.push(d),o.set(d,g))}}));const c=new Ze(s);return new jy(o,c,i.fieldTransforms)}function fh(n,e,t,r,i,s){const o=n.A(1,e,t),c=[Wt(e,r,t)],u=[i];if(s.length%2!=0)throw new N(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)c.push(Wt(e,s[g])),u.push(s[g+1]);const l=[],d=xe.empty();for(let g=c.length-1;g>=0;--g)if(!Jy(l,c[g])){const E=c[g];let C=u[g];C=U(C);const D=o.fc(E);if(C instanceof ao)l.push(E);else{const k=br(C,D);k!=null&&(l.push(E),d.set(E,k))}}const p=new Ze(l);return new jy(d,p,o.fieldTransforms)}function Ky(n,e,t,r=!1){return br(t,n.A(r?4:3,e))}function br(n,e){if(Qy(n=U(n)))return ph("Unsupported field value:",e,n),Wy(n,e);if(n instanceof qn)return(function(r,i){if(!Gy(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const c of r){let u=br(c,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=U(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ne.fromDate(r);return{timestampValue:li(i.serializer,s)}}if(r instanceof ne){const s=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:li(i.serializer,s)}}if(r instanceof _t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:P_(i.serializer,r._byteString)};if(r instanceof ie){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ct)return(function(o,c){const u=o instanceof ct?o.toArray():o;return{mapValue:{fields:{[El]:{stringValue:wl},[si]:{arrayValue:{values:u.map((d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return bl(c.serializer,d)}))}}}}}})(r,i);if(U_(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Ba(r)}`)})(n,e)}function Wy(n,e){const t={};return zg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fn(n,((r,i)=>{const s=br(i,e.dc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Qy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof _t||n instanceof Ye||n instanceof ie||n instanceof qn||n instanceof ct||U_(n))}function ph(n,e,t){if(!Qy(t)||!vg(t)){const r=Ba(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Wt(n,e,t){if((e=U(e))instanceof Ar)return e._internalPath;if(typeof e=="string")return mh(n,e);throw va("Field path arguments must be of type string or ",n,!1,void 0,t)}const AC=new RegExp("[~\\*/\\[\\]]");function mh(n,e,t){if(e.search(AC)>=0)throw va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ar(...e.split("."))._internalPath}catch{throw va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function va(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new N(b.INVALID_ARGUMENT,c+n+u)}function Jy(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class gh{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fn(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[si].arrayValue)==null?void 0:i.values)==null?void 0:s.map((o=>ge(o.doubleValue)));return new ct(t)}convertGeoPoint(e){return new _t(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ha(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fs(e));default:return null}}convertTimestamp(e){const t=Ht(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Y.fromString(e);$(F_(r),9688,{name:e});const i=new bn(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||ve(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class zn extends gh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}/**
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
 */function RC(){return new ao("deleteField")}function bC(){return new ch("serverTimestamp")}function SC(...n){return new uh("arrayUnion",n)}function PC(...n){return new lh("arrayRemove",n)}function CC(n){return new hh("increment",n)}function kC(n){return new ct(n)}/**
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
 */function DC(n){var r;const e=ye(X(n.firestore,oe)),t=(r=e._onlineComponents)==null?void 0:r.datastore.serializer;return t===void 0?null:Ya(t,je(n._query)).ft}function NC(n,e){var s;const t=qg(e,((o,c)=>new w_(c,o.aggregateType,o._internalFieldPath))),r=ye(X(n.firestore,oe)),i=(s=r._onlineComponents)==null?void 0:s.datastore.serializer;return i===void 0?null:O_(i,o_(n._query),t,!0).request}const Rp="@firebase/firestore",bp="4.13.0";/**
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
 */function Kr(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class _i{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Yy{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new xe({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */class Gs{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Wt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VC extends Gs{data(){return super.data()}}/**
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
 */function Xy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _h{}class Ni extends _h{}function OC(n,e,...t){let r=[];e instanceof _h&&r.push(e),r=r.concat(t),(function(s){const o=s.filter((u=>u instanceof Sr)).length,c=s.filter((u=>u instanceof Vi)).length;if(o>1||o>0&&c>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Vi extends Ni{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Vi(e,t,r)}_apply(e){const t=this._parse(e);return eI(e._query,t),new ke(e.firestore,e.converter,Su(e._query,t))}_parse(e){const t=Rr(e.firestore);return(function(s,o,c,u,l,d,p){let g;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Pp(p,d);const C=[];for(const D of p)C.push(Sp(u,s,D));g={arrayValue:{values:C}}}else g=Sp(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Pp(p,d),g=Ky(c,o,p,d==="in"||d==="not-in");return ee.create(l,d,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xC(n,e,t){const r=e,i=Wt("where",n);return Vi._create(i,r,t)}class Sr extends _h{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sr(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)eI(o,u),o=Su(o,u)})(e._query,t),new ke(e.firestore,e.converter,Su(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function LC(...n){return n.forEach((e=>tI("or",e))),Sr._create("or",n)}function MC(...n){return n.forEach((e=>tI("and",e))),Sr._create("and",n)}class cc extends Ni{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cc(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zs(s,o)})(e._query,this._field,this._direction);return new ke(e.firestore,e.converter,Ob(e._query,t))}}function FC(n,e="asc"){const t=e,r=Wt("orderBy",n);return cc._create(r,t)}class co extends Ni{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new co(e,t,r)}_apply(e){return new ke(e.firestore,e.converter,pa(e._query,this._limit,this._limitType))}}function UC(n){return Ag("limit",n),co._create("limit",n,"F")}function BC(n){return Ag("limitToLast",n),co._create("limitToLast",n,"L")}class uo extends Ni{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uo(e,t,r)}_apply(e){const t=Zy(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,xb(e._query,t))}}function qC(...n){return uo._create("startAt",n,!0)}function zC(...n){return uo._create("startAfter",n,!1)}class lo extends Ni{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new lo(e,t,r)}_apply(e){const t=Zy(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,Lb(e._query,t))}}function $C(...n){return lo._create("endBefore",n,!1)}function jC(...n){return lo._create("endAt",n,!0)}function Zy(n,e,t,r){if(t[0]=U(t[0]),t[0]instanceof Gs)return(function(s,o,c,u,l){if(!u)throw new N(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const p of Gr(s))if(p.field.isKeyField())d.push(lr(o,u.key));else{const g=u.data.field(p.field);if(Ga(g))throw new N(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const E=p.field.canonicalString();throw new N(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}d.push(g)}return new Cn(d,l)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Rr(n.firestore);return(function(o,c,u,l,d,p){const g=o.explicitOrderBy;if(d.length>g.length)throw new N(b.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let C=0;C<d.length;C++){const D=d[C];if(g[C].field.isKeyField()){if(typeof D!="string")throw new N(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof D}`);if(!Al(o)&&D.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${D}' contains a slash.`);const k=o.path.child(Y.fromString(D));if(!x.isDocumentKey(k))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const F=new x(k);E.push(lr(c,F))}else{const k=Ky(u,l,D);E.push(k)}}return new Cn(E,p)})(n._query,n.firestore._databaseId,i,e,t,r)}}function Sp(n,e,t){if(typeof(t=U(t))=="string"){if(t==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Al(e)&&t.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Y.fromString(t));if(!x.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lr(n,new x(r))}if(t instanceof ie)return lr(n,t._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ba(t)}.`)}function Pp(n,e){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eI(n,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function tI(n,e){if(!(e instanceof Vi||e instanceof Sr))throw new N(b.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function uc(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yh extends gh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}/**
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
 */function GC(n){return new _i("sum",Wt("sum",n))}function HC(n){return new _i("avg",Wt("average",n))}function nI(){return new _i("count")}function KC(n,e){var t,r;return n instanceof _i&&e instanceof _i&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)==null?void 0:t.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function WC(n,e){return ah(n.query,e.query)&&yt(n.data(),e.data())}/**
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
 */function QC(n){return rI(n,{count:nI()})}function rI(n,e){const t=X(n.firestore,oe),r=ye(t),i=qg(e,((s,o)=>new w_(o,s.aggregateType,s._internalFieldPath)));return JP(r,n._query,i).then((s=>(function(c,u,l){const d=new zn(c);return new Yy(u,d,l)})(t,n,s)))}class JC{constructor(e){this.kind="memory",this._onlineComponentProvider=Dn.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new rh(void 0)}}toJSON(){return{kind:this.kind}}}class YC{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=iI(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class XC{constructor(){this.kind="memoryEager",this._offlineComponentProvider=mi.provider}toJSON(){return{kind:this.kind}}}class ZC{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new rh(e)}}toJSON(){return{kind:this.kind}}}function ek(){return new XC}function tk(n){return new ZC(n==null?void 0:n.cacheSizeBytes)}function nk(n){return new JC(n)}function rk(n){return new YC(n)}class ik{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Dn.provider,this._offlineComponentProvider={build:t=>new ih(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class sk{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Dn.provider,this._offlineComponentProvider={build:t=>new Cy(t,e==null?void 0:e.cacheSizeBytes)}}}function iI(n){return new ik(n==null?void 0:n.forceOwnership)}function ok(){return new sk}/**
 * @license
 * Copyright 2025 Google LLC
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
 *//**
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
 */const sI="NOT SUPPORTED";class qt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tt extends Gs{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wt("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=tt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function ak(n,e,t){if(wr(e,tt._jsonSchema)){if(e.bundle===sI)throw new N(b.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=vr(n._databaseId),i=xy(e.bundle,r),s=i.Qu(),o=new Yl(i.getMetadata(),r);for(const d of s)o.Ga(d);const c=o.documents;if(c.length!==1)throw new N(b.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=Ja(r,c[0].document),l=new x(Y.fromString(e.bundleName));return new tt(n,new yh(n),l,u,new qt(!1,!1),t||null)}}tt._jsonSchemaVersion="firestore/documentSnapshot/1.0",tt._jsonSchema={type:Se("string",tt._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class bs extends tt{data(e={}){return super.data(e)}}class nt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bs(this._firestore,this._userDataWriter,r.key,r,new qt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new bs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const u=new bs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:uk(c.type),doc:u,oldIndex:l,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=nt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ua.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ck(n,e,t){if(wr(e,nt._jsonSchema)){if(e.bundle===sI)throw new N(b.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=vr(n._databaseId),i=xy(e.bundle,r),s=i.Qu(),o=new Yl(i.getMetadata(),r);for(const g of s)o.Ga(g);if(o.queries.length!==1)throw new N(b.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=Xa(o.queries[0].bundledQuery),u=o.documents;let l=new cr;u.map((g=>{const E=Ja(r,g.document);l=l.add(E)}));const d=yr.fromInitialDocuments(c,l,K(),!1,!1),p=new ke(n,t||null,c);return new nt(n,new yh(n),p,d)}}function uk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}function lk(n,e){return n instanceof tt&&e instanceof tt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof nt&&e instanceof nt&&n._firestore===e._firestore&&ah(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */nt._jsonSchemaVersion="firestore/querySnapshot/1.0",nt._jsonSchema={type:Se("string",nt._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};const hk={maxAttempts:5};/**
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
 */class oI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Rr(e)}set(e,t,r){this._verifyNotCommitted();const i=gn(e,this._firestore),s=uc(i.converter,t,r),o=ac(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,_e.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=gn(e,this._firestore);let o;return o=typeof(t=U(t))=="string"||t instanceof Ar?fh(this._dataReader,"WriteBatch.update",s._key,t,r,i):dh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,_e.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gn(e,this._firestore);return this._mutations=this._mutations.concat(new bi(t._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gn(n,e){if((n=U(n)).firestore!==e)throw new N(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class dk{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Rr(e)}get(e){const t=gn(e,this._firestore),r=new yh(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return q(24041);const s=i[0];if(s.isFoundDocument())return new Gs(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Gs(this._firestore,r,t._key,null,t.converter);throw q(18433,{doc:s})}))}set(e,t,r){const i=gn(e,this._firestore),s=uc(i.converter,t,r),o=ac(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=gn(e,this._firestore);let o;return o=typeof(t=U(t))=="string"||t instanceof Ar?fh(this._dataReader,"Transaction.update",s._key,t,r,i):dh(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=gn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class aI extends dk{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=gn(e,this._firestore),r=new zn(this._firestore);return super.get(e).then((i=>new tt(this._firestore,r,t._key,i._document,new qt(!1,!1),t.converter)))}}function fk(n,e,t){n=X(n,oe);const r={...hk,...t};(function(o){if(o.maxAttempts<1)throw new N(b.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const i=ye(n);return ZP(i,(s=>e(new aI(n,s))),r)}/**
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
 */function pk(n){n=X(n,ie);const e=X(n.firestore,oe),t=ye(e);return Vy(t,n._key).then((r=>Ih(e,n,r)))}function mk(n){n=X(n,ie);const e=X(n.firestore,oe),t=ye(e),r=new zn(e);return WP(t,n._key).then((i=>new tt(e,r,n._key,i,new qt(i!==null&&i.hasLocalMutations,!0),n.converter)))}function gk(n){n=X(n,ie);const e=X(n.firestore,oe),t=ye(e);return Vy(t,n._key,{source:"server"}).then((r=>Ih(e,n,r)))}function _k(n){n=X(n,ke);const e=X(n.firestore,oe),t=ye(e),r=new zn(e);return Xy(n._query),Oy(t,n._query).then((i=>new nt(e,r,n,i)))}function yk(n){n=X(n,ke);const e=X(n.firestore,oe),t=ye(e),r=new zn(e);return QP(t,n._query).then((i=>new nt(e,r,n,i)))}function Ik(n){n=X(n,ke);const e=X(n.firestore,oe),t=ye(e),r=new zn(e);return Oy(t,n._query,{source:"server"}).then((i=>new nt(e,r,n,i)))}function Tk(n,e,t){n=X(n,ie);const r=X(n.firestore,oe),i=uc(n.converter,e,t),s=Rr(r);return Oi(r,[ac(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,_e.none())])}function Ek(n,e,t,...r){n=X(n,ie);const i=X(n.firestore,oe),s=Rr(i);let o;return o=typeof(e=U(e))=="string"||e instanceof Ar?fh(s,"updateDoc",n._key,e,t,r):dh(s,"updateDoc",n._key,e),Oi(i,[o.toMutation(n._key,_e.exists(!0))])}function wk(n){return Oi(X(n.firestore,oe),[new bi(n._key,_e.none())])}function vk(n,e){const t=X(n.firestore,oe),r=Uy(n),i=uc(n.converter,e),s=Rr(n.firestore);return Oi(t,[ac(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,_e.exists(!1))]).then((()=>r))}function qu(n,...e){var l,d,p;n=U(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Kr(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Kr(e[r])){const g=e[r];e[r]=(l=g.next)==null?void 0:l.bind(g),e[r+1]=(d=g.error)==null?void 0:d.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let s,o,c;if(n instanceof ie)o=X(n.firestore,oe),c=Ai(n._key.path),s={next:g=>{e[r]&&e[r](Ih(o,n,g))},error:e[r+1],complete:e[r+2]};else{const g=X(n,ke);o=X(g.firestore,oe),c=g._query;const E=new zn(o);s={next:C=>{e[r]&&e[r](new nt(o,E,g,C))},error:e[r+1],complete:e[r+2]},Xy(n._query)}const u=ye(o);return KP(u,c,i,s)}function Ak(n,e,...t){const r=U(n),i=(function(u){const l={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const p of d){if(!(p in u)){l.error=`snapshotJson missing required field: ${p}`;break}const g=u[p];if(typeof g!="string"){l.error=`snapshotJson field '${p}' must be a string.`;break}if(g.length===0){l.error=`snapshotJson field '${p}' cannot be an empty string.`;break}p==="bundle"?l.bundle=g:p==="bundleName"?l.bundleName=g:p==="bundleSource"&&(l.bundleSource=g)}return l})(e);if(i.error)throw new N(b.INVALID_ARGUMENT,i.error);let s,o=0;if(typeof t[o]!="object"||Kr(t[o])||(s=t[o++]),i.bundleSource==="QuerySnapshot"){let c=null;if(typeof t[o]=="object"&&Kr(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,p,g,E){let C,D=!1;return Bu(l,d.bundle).then((()=>$y(l,d.bundleName))).then((F=>{F&&!D&&(E&&F.withConverter(E),C=qu(F,p||{},g))})).catch((F=>(g.error&&g.error(F),()=>{}))),()=>{D||(D=!0,C&&C())}})(r,i,s,c,t[o])}if(i.bundleSource==="DocumentSnapshot"){let c=null;if(typeof t[o]=="object"&&Kr(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,p,g,E){let C,D=!1;return Bu(l,d.bundle).then((()=>{if(!D){const F=new ie(l,E||null,x.fromPath(d.bundleName));C=qu(F,p||{},g)}})).catch((F=>(g.error&&g.error(F),()=>{}))),()=>{D||(D=!0,C&&C())}})(r,i,s,c,t[o])}throw new N(b.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function Rk(n,e){n=X(n,oe);const t=ye(n),r=Kr(e)?e:{next:e};return XP(t,r)}function Oi(n,e){const t=ye(n);return YP(t,e)}function Ih(n,e,t){const r=t.docs.get(e._key),i=new zn(n);return new tt(n,i,e._key,r,new qt(t.hasPendingWrites,t.fromCache),e.converter)}function bk(n){return n=X(n,oe),ye(n),new oI(n,(e=>Oi(n,e)))}/**
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
 */function Sk(n,e){n=X(n,oe);const t=ye(n);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return it("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(s){const o=typeof s=="string"?(function(l){try{return JSON.parse(l)}catch(d){throw new N(b.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}})(s):s,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=Cp(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const p of u.fields){const g=Cp(p,"fieldPath"),E=mh("setIndexConfiguration",g);p.arrayConfig==="CONTAINS"?d.push(new or(E,2)):p.order==="ASCENDING"?d.push(new or(E,0)):p.order==="DESCENDING"&&d.push(new or(E,1))}c.push(new Zr(Zr.UNKNOWN_ID,l,d,ei.empty()))}return c})(e);return nC(t,r)}function Cp(n,e){if(typeof n[e]!="string")throw new N(b.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
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
 */class cI{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function Pk(n){var i;n=X(n,oe);const e=kp.get(n);if(e)return e;if(((i=ye(n)._uninitializedComponentsProvider)==null?void 0:i._offline.kind)!=="persistent")return null;const r=new cI(n);return kp.set(n,r),r}function Ck(n){uI(n,!0)}function kk(n){uI(n,!1)}function Dk(n){const e=ye(n._firestore);iC(e).then((t=>V("deleting all persistent cache indexes succeeded"))).catch((t=>it("deleting all persistent cache indexes failed",t)))}function uI(n,e){const t=ye(n._firestore);rC(t,e).then((r=>V(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((r=>it(`setting persistent cache index auto creation isEnabled=${e} failed`,r)))}const kp=new WeakMap;/**
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
 */class Nk{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Th.instance.onExistenceFilterMismatch(e)}}class Th{constructor(){this.t=new Map}static get instance(){return Fo||(Fo=new Th,Qb(Fo)),Fo}o(e){this.t.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.t;return r.set(t,e),()=>r.delete(t)}}let Fo=null;(function(e,t=!0){PR(On),An(new wn("firestore",((r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new oe(new NR(r.getProvider("auth-internal")),new xR(o,r.getProvider("app-check-internal")),wb(o,i),o);return s={useFetchStreams:t,...s},c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),ht(Rp,bp,e),ht(Rp,bp,"esm2020")})();const IN=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:gh,AggregateField:_i,AggregateQuerySnapshot:Yy,Bytes:Ye,CACHE_SIZE_UNLIMITED:lC,CollectionReference:gt,DocumentReference:ie,DocumentSnapshot:tt,FieldPath:Ar,FieldValue:qn,Firestore:oe,FirestoreError:N,GeoPoint:_t,LoadBundleTask:By,PersistentCacheIndexManager:cI,Query:ke,QueryCompositeFilterConstraint:Sr,QueryConstraint:Ni,QueryDocumentSnapshot:bs,QueryEndAtConstraint:lo,QueryFieldFilterConstraint:Vi,QueryLimitConstraint:co,QueryOrderByConstraint:cc,QuerySnapshot:nt,QueryStartAtConstraint:uo,SnapshotMetadata:qt,Timestamp:ne,Transaction:aI,VectorValue:ct,WriteBatch:oI,_AutoId:Ua,_ByteString:Te,_DatabaseId:bn,_DocumentKey:x,_EmptyAppCheckTokenProvider:LR,_EmptyAuthCredentialsProvider:Tg,_FieldPath:fe,_TestingHooks:Nk,_cast:X,_debugAssert:kR,_internalAggregationQueryToProtoRunAggregationQueryRequest:NC,_internalQueryToProtoQueryTarget:DC,_isBase64Available:Ib,_logWarn:it,_validateIsNotUsedTogether:wg,addDoc:vk,aggregateFieldEqual:KC,aggregateQuerySnapshotEqual:WC,and:MC,arrayRemove:PC,arrayUnion:SC,average:HC,clearIndexedDbPersistence:mC,collection:aC,collectionGroup:cC,connectFirestoreEmulator:Fy,count:nI,deleteAllPersistentCacheIndexes:Dk,deleteDoc:wk,deleteField:RC,disableNetwork:yC,disablePersistentCacheIndexAutoCreation:kk,doc:Uy,documentId:TC,documentSnapshotFromJSON:ak,enableIndexedDbPersistence:fC,enableMultiTabIndexedDbPersistence:pC,enableNetwork:_C,enablePersistentCacheIndexAutoCreation:Ck,endAt:jC,endBefore:$C,ensureFirestoreConfigured:ye,executeWrite:Oi,getAggregateFromServer:rI,getCountFromServer:QC,getDoc:pk,getDocFromCache:mk,getDocFromServer:gk,getDocs:_k,getDocsFromCache:yk,getDocsFromServer:Ik,getFirestore:dC,getPersistentCacheIndexManager:Pk,increment:CC,initializeFirestore:hC,limit:UC,limitToLast:BC,loadBundle:Bu,memoryEagerGarbageCollector:ek,memoryLocalCache:nk,memoryLruGarbageCollector:tk,namedQuery:$y,onSnapshot:qu,onSnapshotResume:Ak,onSnapshotsInSync:Rk,or:LC,orderBy:FC,persistentLocalCache:rk,persistentMultipleTabManager:ok,persistentSingleTabManager:iI,query:OC,queryEqual:ah,querySnapshotFromJSON:ck,refEqual:uC,runTransaction:fk,serverTimestamp:bC,setDoc:Tk,setIndexConfiguration:Sk,setLogLevel:CR,snapshotEqual:lk,startAfter:zC,startAt:qC,sum:GC,terminate:IC,updateDoc:Ek,vector:kC,waitForPendingWrites:gC,where:xC,writeBatch:bk},Symbol.toStringTag,{value:"Module"}));/**
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
 */const lI="firebasestorage.googleapis.com",hI="storageBucket",Vk=120*1e3,Ok=600*1e3,xk=1e3;/**
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
 */class Ie extends It{constructor(e,t,r=0){super(ru(e),`Firebase Storage: ${t} (${ru(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ru(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function ru(n){return"storage/"+n}function Eh(){const n="An unknown error occurred, please check the error payload for server response.";return new Ie(ue.UNKNOWN,n)}function Lk(n){return new Ie(ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mk(n){return new Ie(ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie(ue.UNAUTHENTICATED,n)}function Uk(){return new Ie(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Bk(n){return new Ie(ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function dI(){return new Ie(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fI(){return new Ie(ue.CANCELED,"User canceled the upload/download.")}function qk(n){return new Ie(ue.INVALID_URL,"Invalid URL '"+n+"'.")}function zk(n){return new Ie(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $k(){return new Ie(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hI+"' property when initializing the app?")}function pI(){return new Ie(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jk(){return new Ie(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Gk(){return new Ie(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Hk(n){return new Ie(ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Aa(n){return new Ie(ue.INVALID_ARGUMENT,n)}function mI(){return new Ie(ue.APP_DELETED,"The Firebase app was deleted.")}function gI(n){return new Ie(ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ss(n,e){return new Ie(ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ss(n){throw new Ie(ue.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(r.path==="")return r;throw zk(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(H){H.path_=decodeURIComponent(H.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},D=t===lI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",F=new RegExp(`^https?://${D}/${i}/${k}`,"i"),B=[{regex:c,indices:u,postModify:s},{regex:E,indices:C,postModify:l},{regex:F,indices:{bucket:1,path:2},postModify:l}];for(let H=0;H<B.length;H++){const W=B[H],J=W.regex.exec(e);if(J){const T=J[W.indices.bucket];let _=J[W.indices.path];_||(_=""),r=new ze(T,_),W.postModify(r);break}}if(r==null)throw qk(e);return r}}class Kk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Wk(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let l=!1;function d(...k){l||(l=!0,e.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,n(E,u())},k)}function g(){s&&clearTimeout(s)}function E(k,...F){if(l){g();return}if(k){g(),d.call(null,k,...F);return}if(u()||o){g(),d.call(null,k,...F);return}r<64&&(r*=2);let B;c===1?(c=2,B=0):B=(r+Math.random())*1e3,p(B)}let C=!1;function D(k){C||(C=!0,g(),!l&&(i!==null?(k||(c=2),clearTimeout(i),p(0)):k||(c=1)))}return p(0),s=setTimeout(()=>{o=!0,D(!0)},t),D}function Qk(n){n(!1)}/**
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
 */function Jk(n){return n!==void 0}function Yk(n){return typeof n=="function"}function Xk(n){return typeof n=="object"&&!Array.isArray(n)}function lc(n){return typeof n=="string"||n instanceof String}function Dp(n){return wh()&&n instanceof Blob}function wh(){return typeof Blob<"u"}function zu(n,e,t,r){if(r<e)throw Aa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Aa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function tn(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function _I(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var ur;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ur||(ur={}));/**
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
 */function yI(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class Zk{constructor(e,t,r,i,s,o,c,u,l,d,p,g=!0,E=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,D)=>{this.resolve_=C,this.reject_=D,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Uo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===ur.NO_ERROR,u=s.getStatus();if(!c||yI(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ur.ABORT;r(!1,new Uo(!1,null,d));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Uo(l,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());Jk(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=Eh();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?mI():fI();o(u)}else{const u=dI();o(u)}};this.canceled_?t(!1,new Uo(!1,null,!0)):this.backoffId_=Wk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function eD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function tD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function rD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function iD(n,e,t,r,i,s,o=!0,c=!1){const u=_I(n.urlParams),l=n.url+u,d=Object.assign({},n.headers);return nD(d,e),eD(d,t),tD(d,s),rD(d,r),new Zk(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
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
 */function sD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oD(...n){const e=sD();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(wh())return new Blob(n);throw new Ie(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function cD(n){if(typeof atob>"u")throw Hk("base-64");return atob(n)}/**
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
 */const lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class iu{constructor(e,t){this.data=e,this.contentType=t||null}}function vh(n,e){switch(n){case lt.RAW:return new iu(II(e));case lt.BASE64:case lt.BASE64URL:return new iu(TI(n,e));case lt.DATA_URL:return new iu(lD(e),hD(e))}throw Eh()}function II(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uD(n){let e;try{e=decodeURIComponent(n)}catch{throw Ss(lt.DATA_URL,"Malformed data URL.")}return II(e)}function TI(n,e){switch(n){case lt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ss(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case lt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ss(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=cD(e)}catch(i){throw i.message.includes("polyfill")?i:Ss(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class EI{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ss(lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=dD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lD(n){const e=new EI(n);return e.base64?TI(lt.BASE64,e.rest):uD(e.rest)}function hD(n){return new EI(n).contentType}function dD(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class At{constructor(e,t){let r=0,i="";Dp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Dp(this.data_)){const r=this.data_,i=aD(r,e,t);return i===null?null:new At(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new At(r,!0)}}static getBlob(...e){if(wh()){const t=e.map(r=>r instanceof At?r.data_:r);return new At(oD.apply(null,t))}else{const t=e.map(o=>lc(o)?vh(lt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new At(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Ah(n){let e;try{e=JSON.parse(n)}catch{return null}return Xk(e)?e:null}/**
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
 */function fD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pD(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function wI(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function mD(n,e){return e}class Ke{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||mD}}let Bo=null;function gD(n){return!lc(n)||n.length<2?n:wI(n)}function ho(){if(Bo)return Bo;const n=[];n.push(new Ke("bucket")),n.push(new Ke("generation")),n.push(new Ke("metageneration")),n.push(new Ke("name","fullPath",!0));function e(s,o){return gD(o)}const t=new Ke("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Ke("size");return i.xform=r,n.push(i),n.push(new Ke("timeCreated")),n.push(new Ke("updated")),n.push(new Ke("md5Hash",null,!0)),n.push(new Ke("cacheControl",null,!0)),n.push(new Ke("contentDisposition",null,!0)),n.push(new Ke("contentEncoding",null,!0)),n.push(new Ke("contentLanguage",null,!0)),n.push(new Ke("contentType",null,!0)),n.push(new Ke("metadata","customMetadata",!0)),Bo=n,Bo}function _D(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function yD(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return _D(r,n),r}function vI(n,e,t){const r=Ah(e);return r===null?null:yD(n,r,t)}function ID(n,e,t,r){const i=Ah(e);if(i===null||!lc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const d=n.bucket,p=n.fullPath,g="/b/"+o(d)+"/o/"+o(p),E=tn(g,t,r),C=_I({alt:"media",token:l});return E+C})[0]}function Rh(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}/**
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
 */const Np="prefixes",Vp="items";function TD(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[Np])for(const i of t[Np]){const s=i.replace(/\/$/,""),o=n._makeStorageReference(new ze(e,s));r.prefixes.push(o)}if(t[Vp])for(const i of t[Vp]){const s=n._makeStorageReference(new ze(e,i.name));r.items.push(s)}return r}function ED(n,e,t){const r=Ah(t);return r===null?null:TD(n,e,r)}class Vt{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kt(n){if(!n)throw Eh()}function hc(n,e){function t(r,i){const s=vI(n,i,e);return kt(s!==null),s}return t}function wD(n,e){function t(r,i){const s=ED(n,e,i);return kt(s!==null),s}return t}function vD(n,e){function t(r,i){const s=vI(n,i,e);return kt(s!==null),ID(s,i,n.host,n._protocol)}return t}function xi(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Uk():i=Fk():t.getStatus()===402?i=Mk(n.bucket):t.getStatus()===403?i=Bk(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function fo(n){const e=xi(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Lk(n.path)),s.serverResponse=i.serverResponse,s}return t}function AI(n,e,t){const r=e.fullServerUrl(),i=tn(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new Vt(i,s,hc(n,t),o);return c.errorHandler=fo(e),c}function AD(n,e,t,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",t.length>0&&(s.delimiter=t),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),c=tn(o,n.host,n._protocol),u="GET",l=n.maxOperationRetryTime,d=new Vt(c,u,wD(n,e.bucket),l);return d.urlParams=s,d.errorHandler=xi(e),d}function RI(n,e,t){const r=e.fullServerUrl(),i=tn(r,n.host,n._protocol)+"?alt=media",s="GET",o=n.maxOperationRetryTime,c=new Vt(i,s,(u,l)=>l,o);return c.errorHandler=fo(e),t!==void 0&&(c.headers.Range=`bytes=0-${t}`,c.successCodes=[200,206]),c}function RD(n,e,t){const r=e.fullServerUrl(),i=tn(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new Vt(i,s,vD(n,t),o);return c.errorHandler=fo(e),c}function bD(n,e,t,r){const i=e.fullServerUrl(),s=tn(i,n.host,n._protocol),o="PATCH",c=Rh(t,r),u={"Content-Type":"application/json; charset=utf-8"},l=n.maxOperationRetryTime,d=new Vt(s,o,hc(n,r),l);return d.headers=u,d.body=c,d.errorHandler=fo(e),d}function SD(n,e){const t=e.fullServerUrl(),r=tn(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(u,l){}const c=new Vt(r,i,o,s);return c.successCodes=[200,204],c.errorHandler=fo(e),c}function PD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bI(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=PD(null,e)),r}function SI(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let B="";for(let H=0;H<2;H++)B=B+Math.random().toString().slice(2);return B}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const l=bI(e,r,i),d=Rh(l,t),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,g=`\r
--`+u+"--",E=At.getBlob(p,r,g);if(E===null)throw pI();const C={name:l.fullPath},D=tn(s,n.host,n._protocol),k="POST",F=n.maxUploadRetryTime,z=new Vt(D,k,hc(n,t),F);return z.urlParams=C,z.headers=o,z.body=E.uploadData(),z.errorHandler=xi(e),z}class Ra{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function bh(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{kt(!1)}return kt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function CD(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=bI(e,r,i),c={name:o.fullPath},u=tn(s,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=Rh(o,t),g=n.maxUploadRetryTime;function E(D){bh(D);let k;try{k=D.getResponseHeader("X-Goog-Upload-URL")}catch{kt(!1)}return kt(lc(k)),k}const C=new Vt(u,l,E,g);return C.urlParams=c,C.headers=d,C.body=p,C.errorHandler=xi(e),C}function kD(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const d=bh(l,["active","final"]);let p=null;try{p=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{kt(!1)}p||kt(!1);const g=Number(p);return kt(!isNaN(g)),new Ra(g,r.size(),d==="final")}const o="POST",c=n.maxUploadRetryTime,u=new Vt(t,o,s,c);return u.headers=i,u.errorHandler=xi(e),u}const Op=256*1024;function DD(n,e,t,r,i,s,o,c){const u=new Ra(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw jk();const l=u.total-u.current;let d=l;i>0&&(d=Math.min(d,i));const p=u.current,g=p+d;let E="";d===0?E="finalize":l===d?E="upload, finalize":E="upload";const C={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},D=r.slice(p,g);if(D===null)throw pI();function k(H,W){const J=bh(H,["active","final"]),T=u.current+d,_=r.size();let I;return J==="final"?I=hc(e,s)(H,W):I=null,new Ra(T,_,J==="final",I)}const F="POST",z=e.maxUploadRetryTime,B=new Vt(t,F,k,z);return B.headers=C,B.body=D.uploadData(),B.progressCallback=c||null,B.errorHandler=xi(n),B}/**
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
 */const ND={STATE_CHANGED:"state_changed"},We={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function su(n){switch(n){case"running":case"pausing":case"canceling":return We.RUNNING;case"paused":return We.PAUSED;case"success":return We.SUCCESS;case"canceled":return We.CANCELED;case"error":return We.ERROR;default:return We.ERROR}}/**
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
 */class VD{constructor(e,t,r){if(Yk(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Mr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Sh{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw ss("cannot .send() more than once");if(Vn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OD extends Sh{initXhr(){this.xhr_.responseType="text"}}function pt(){return new OD}class xD extends Sh{initXhr(){this.xhr_.responseType="arraybuffer"}}function LD(){return new xD}class MD extends Sh{initXhr(){this.xhr_.responseType="blob"}}function FD(){return new MD}/**
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
 */class PI{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=ho(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(yI(i.status,[]))if(s)i=dI();else{this.sleepTime=Math.max(this.sleepTime*2,xk),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=CD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,pt,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=kD(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,pt,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Op*this._chunkMultiplier,t=new Ra(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=DD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const c=this._ref.storage._makeRequest(o,pt,i,s,!1);this._request=c,c.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Op*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=AI(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,pt,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=SI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,pt,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=fI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=su(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new VD(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(su(this._state)){case We.SUCCESS:Mr(this._resolve.bind(null,this.snapshot))();break;case We.CANCELED:case We.ERROR:const t=this._reject;Mr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(su(this._state)){case We.RUNNING:case We.PAUSED:e.next&&Mr(e.next.bind(e,this.snapshot))();break;case We.SUCCESS:e.complete&&Mr(e.complete.bind(e))();break;case We.CANCELED:case We.ERROR:e.error&&Mr(e.error.bind(e,this._error))();break;default:e.error&&Mr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ir{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ir(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wI(this._location.path)}get storage(){return this._service}get parent(){const e=fD(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Ir(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw gI(e)}}function UD(n,e){n._throwIfRoot("getBytes");const t=RI(n.storage,n._location,e);return n.storage.makeRequestWithTokens(t,LD).then(r=>e!==void 0?r.slice(0,e):r)}function BD(n,e){n._throwIfRoot("getBlob");const t=RI(n.storage,n._location,e);return n.storage.makeRequestWithTokens(t,FD).then(r=>e!==void 0?r.slice(0,e):r)}function CI(n,e,t){n._throwIfRoot("uploadBytes");const r=SI(n.storage,n._location,ho(),new At(e,!0),t);return n.storage.makeRequestWithTokens(r,pt).then(i=>({metadata:i,ref:n}))}function qD(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new PI(n,new At(e),t)}function zD(n,e,t=lt.RAW,r){n._throwIfRoot("uploadString");const i=vh(t,e),s={...r};return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),CI(n,i.data,s)}function $D(n){const e={prefixes:[],items:[]};return kI(n,e).then(()=>e)}async function kI(n,e,t){const i=await DI(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await kI(n,e,i.nextPageToken)}function DI(n,e){e!=null&&typeof e.maxResults=="number"&&zu("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=AD(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,pt)}function jD(n){n._throwIfRoot("getMetadata");const e=AI(n.storage,n._location,ho());return n.storage.makeRequestWithTokens(e,pt)}function GD(n,e){n._throwIfRoot("updateMetadata");const t=bD(n.storage,n._location,e,ho());return n.storage.makeRequestWithTokens(t,pt)}function HD(n){n._throwIfRoot("getDownloadURL");const e=RD(n.storage,n._location,ho());return n.storage.makeRequestWithTokens(e,pt).then(t=>{if(t===null)throw Gk();return t})}function KD(n){n._throwIfRoot("deleteObject");const e=SD(n.storage,n._location);return n.storage.makeRequestWithTokens(e,pt)}function NI(n,e){const t=pD(n._location.path,e),r=new ze(n._location.bucket,t);return new Ir(n.storage,r)}/**
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
 */function WD(n){return/^[A-Za-z]+:\/\//.test(n)}function QD(n,e){return new Ir(n,e)}function VI(n,e){if(n instanceof Ph){const t=n;if(t._bucket==null)throw $k();const r=new Ir(t,t._bucket);return e!=null?VI(r,e):r}else return e!==void 0?NI(n,e):n}function JD(n,e){if(e&&WD(e)){if(n instanceof Ph)return QD(n,e);throw Aa("To use ref(service, url), the first argument must be a Storage instance.")}else return VI(n,e)}function xp(n,e){const t=e==null?void 0:e[hI];return t==null?null:ze.makeFromBucketSpec(t,n)}function YD(n,e,t,r={}){n.host=`${e}:${t}`;const i=Vn(e);i&&Sa(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:jp(s,n.app.options.projectId))}class Ph{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=lI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vk,this._maxUploadRetryTime=Ok,this._requests=new Set,i!=null?this._bucket=ze.makeFromBucketSpec(i,this._host):this._bucket=xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(de(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ir(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Kk(mI());{const o=iD(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Lp="@firebase/storage",Mp="0.14.2";/**
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
 */const OI="storage";/**
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
 */function XD(n,e){return n=U(n),UD(n,e)}function ZD(n,e,t){return n=U(n),CI(n,e,t)}function eN(n,e,t,r){return n=U(n),zD(n,e,t,r)}function tN(n,e,t){return n=U(n),qD(n,e,t)}function nN(n){return n=U(n),jD(n)}function rN(n,e){return n=U(n),GD(n,e)}function iN(n,e){return n=U(n),DI(n,e)}function sN(n){return n=U(n),$D(n)}function oN(n){return n=U(n),HD(n)}function aN(n){return n=U(n),KD(n)}function cN(n,e){return n=U(n),JD(n,e)}function uN(n,e){return NI(n,e)}function lN(n=Pa(),e){n=U(n);const r=Tr(n,OI).getImmediate({identifier:e}),i=zp("storage");return i&&xI(r,...i),r}function xI(n,e,t,r={}){YD(n,e,t,r)}/**
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
 */function hN(n,e){return n=U(n),BD(n,e)}function dN(n,e){throw new Error("getStream() is only supported by NodeJS builds")}function fN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Ph(t,r,i,e,On)}function pN(){An(new wn(OI,fN,"PUBLIC").setMultipleInstances(!0)),ht(Lp,Mp,""),ht(Lp,Mp,"esm2020")}pN();const TN=Object.freeze(Object.defineProperty({__proto__:null,StorageError:Ie,get StorageErrorCode(){return ue},StringFormat:lt,_FbsBlob:At,_Location:ze,_TaskEvent:ND,_TaskState:We,_UploadTask:PI,_dataFromString:vh,_getChild:uN,_invalidArgument:Aa,_invalidRootOperation:gI,connectStorageEmulator:xI,deleteObject:aN,getBlob:hN,getBytes:XD,getDownloadURL:oN,getMetadata:nN,getStorage:lN,getStream:dN,list:iN,listAll:sN,ref:cN,updateMetadata:rN,uploadBytes:ZD,uploadBytesResumable:tN,uploadString:eN},Symbol.toStringTag,{value:"Module"}));export{gN as a,IN as b,TN as c,mN as i};
