!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);const o=e=>{const t=e,n=[];for(let e=0;e<t;e++)n.push("untouched");return{length:t,positions:n,hit:e=>(n[e]="hit",n),isSunk:()=>n.every(e=>"hit"==e),coordinates:[]}},r=()=>{const e=[],t=[],n=[],l=o(5);l.coordinates=["A1","A2","A3","A4","A5"],e.push(l);const i=o(3);i.coordinates=["B1","B2","B3"],e.push(i);const d=o(2);d.coordinates=["C1","C2"],e.push(d);const c=()=>{if(!(l.isSunk()&&i.isSunk()&&d.isSunk()))return"Next player's turn!";alert("Game Over!")};return{ship:o,battleship:l,destroyer:i,patrol:d,receiveAttack:o=>{if(l.coordinates.includes(""+o)||i.coordinates.includes(""+o)||d.coordinates.includes(""+o)){for(let n=0;n<e.length;n++)if(e[n].coordinates.includes(""+o)){let r=e[n].coordinates.indexOf(""+o);return e[n].hit(r),t.push(o),alert("Hit at "+o),c(),e[n].positions}}else n.push(o),alert("Miss at "+o)},allSunk:c,ships:e,hits:t,misses:n,gameboard:r}};function l(e){let t=[],n=e.toString().split("");return null==n[1]?(t.push("A"),t.push(n[0])):"1"==n[0]?(t.push("B"),t.push(n[1])):"2"==n[0]?(t.push("C"),t.push(n[1])):"3"==n[0]?(t.push("D"),t.push(n[1])):"4"==n[0]?(t.push("E"),t.push(n[1])):"5"==n[0]?(t.push("F"),t.push(n[1])):"6"==n[0]?(t.push("G"),t.push(n[1])):"7"==n[0]?(t.push("H"),t.push(n[1])):"8"==n[0]?(t.push("I"),t.push(n[1])):"9"==n[0]&&(t.push("J"),t.push(n[1])),t.join("")}const i=()=>({cpu:!1,board:r(),sendAttack:()=>{console.log("S.A 0");return"A1"}});n(0);function d(e,t){let n=document.querySelector(".container");n.innerHTML="";let o=document.createElement("h1");o.innerHTML=`It is ${e.name}'s turn! Select a coordinate to attack on the enemy's board below `,n.appendChild(o),console.log("render 1");let r=document.createElement("div"),i=document.createElement("h3");i.innerHTML="Enemy's board",r.appendChild(i);let d=document.createElement("table"),c=document.createElement("tbody");for(let e=0;e<10;e++){let n=document.createElement("tr");n.dataset.row=e,console.log("render 2");for(let o=0;o<10;o++){let r=document.createElement("td");r.dataset.column=o;let i=e.toString()+o.toString(),d=l(Number(i));r.id=`${d}-${t.name}`,r.innerHTML=" ",r.addEventListener("click",h),n.appendChild(r)}c.appendChild(n)}if(d.appendChild(c),r.appendChild(d),n.appendChild(r),console.log("render 3"),t.board.hits.length>=1)for(let e=0;e<t.board.hits.length;e++){let n=t.board.hits[e];console.log(n),document.getElementById(`${n}-${t.name}`).innerHTML="HIT"}if(t.board.misses.length>=1)for(let e=0;e<t.board.misses.length;e++){let n=t.board.misses[e];document.getElementById(`${n}-${t.name}`).innerHTML="MISS"}console.log("render 4");let a=document.createElement("div"),s=document.createElement("h3");s.innerHTML="Your board",a.appendChild(s);let u=document.createElement("table"),p=document.createElement("tbody");for(let t=0;t<10;t++){let n=document.createElement("tr");n.dataset.row=t;for(let o=0;o<10;o++){let r=document.createElement("td");r.dataset.column=o;let i=t.toString()+o.toString(),d=l(Number(i));r.id=`${d}-${e.name}`,r.innerHTML=" ",n.appendChild(r)}p.appendChild(n)}u.appendChild(p),a.appendChild(u),n.appendChild(a),console.log("render 5");for(let t=0;t<e.board.ships.length;t++){let n=e.board.ships[t];console.log(n);for(let t=0;t<n.coordinates.length;t++){let o=n.coordinates[t];document.getElementById(`${o}-${e.name}`).innerHTML="(SHIP)"}}if(console.log("render 6"),e.board.hits.length>=1)for(let t=0;t<e.board.hits.length;t++){let n=e.board.hits[t];document.getElementById(`${n}-${e.name}`).innerHTML="HIT"}if(e.board.misses.length>=1)for(let t=0;t<e.board.misses.length;t++){let n=e.board.misses[t];document.getElementById(`${n}-${e.name}`).innerHTML="MISS"}}let c;const a=i(),s=i();function u(e,t,n){if(c=n,c%2==0){if(0==e.cpu)d(e,t);else if(1==e.cpu){let n=p(e.sendAttack(),t,e);t.board.receiveAttack(n),c+=1,u(e,t,c)}}else if(c%2==1)if(0==t.cpu)d(t,e);else if(1==t.cpu){let n=p(t.sendAttack(),e,t);e.board.receiveAttack(n),c+=1,u(e,t,c)}return{turn:c}}function p(e,t,n){if(!t.board.hits.includes(e)&&!t.board.misses.includes(e)){return e}p(n.sendAttack(),t,n)}function h(){if(console.log("handleClick 1")," "==this.innerHTML){console.log(this),console.log(this.parentElement);let e=this.parentElement.dataset.row.toString()+this.dataset.column.toString(),t=l(Number(e));c%2==0?s.board.receiveAttack(t):c%2==1&&a.board.receiveAttack(t),c+=1,u(a,s,c)}}function m(){console.log("hello handle submit 1"),console.log("hello handle submit 2"),a.name="Player 1",s.name="Player 2";let e=document.getElementById("pOneInput").checked,t=document.getElementById("pTwoInput").checked;a.cpu=e,s.cpu=t,console.log("hello handle submit 2"),u(a,s,0)}!function(){console.log("hello gameSetup");let e=document.querySelector(".container"),t=document.createElement("form"),n=document.createElement("label");n.for="pOneInput",n.innerHTML="Player One: Human or CPU (check the box for CPU)";let o=document.createElement("input");o.type="checkbox",o.id="pOneInput",t.appendChild(n),t.appendChild(o);let r=document.createElement("br"),l=document.createElement("br");t.appendChild(r),t.appendChild(l);let i=document.createElement("label");i.for="pTwoInput",i.innerHTML="Player Two: Human or CPU (check the box for CPU)";let d=document.createElement("input");d.type="checkbox",d.id="pTwoInput",t.appendChild(i),t.appendChild(d);let c=document.createElement("button");c.id="submitBtn1",c.innerHTML="Submit",e.appendChild(t),e.appendChild(c),c.addEventListener("click",m)}()}]);