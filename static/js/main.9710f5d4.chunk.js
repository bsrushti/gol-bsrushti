(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,n,r){t.exports=r(17)},,,,,function(t,n,r){},,function(t,n,r){var e=r(16),o=e.initialGrid,i=e.generateWorld,a=e.generateNextWorld,u=e.getAliveCellsOfNextGeneration,c=e.filterInputs,f=e.cellCoordinates,l=e.getDimension;t.exports={nextGeneration:function(t,n){var r=n.topLeft,e=(n.bottomRight,l(n)),h=e.height,s=e.width,v=t.filter(function(t){return c(t,f(n))});v=v.map(function(t){return[t[0]-r[0],t[1]-r[1]]});var g=i(o(s,h),v),p=a(g);return u(p,h,s).map(function(t){return[t[0]+r[0],t[1]+r[1]]})},returnGrid:function(t,n){var r=n.topLeft,e=(n.bottomRight,l(n)),u=e.height,h=e.width,s=t.filter(function(t){return c(t,f(n))});s=s.map(function(t){return[t[0]-r[0],t[1]-r[1]]});var v=i(o(h,u),s);return a(v)}}},function(t,n){var r=String.fromCharCode(9473),e=String.fromCharCode(9475),o=function(t,n){return n[0]<t[0]&&n[1]<t[1]},i=function(t){return t[0]>=0&&t[1]>=0},a=function(t,n){for(var r=[],e=0;e<t.length;e++)for(var o=0;o<n.length;o++)r.push([t[e],n[o]]);return r},u=function(t,n,r){var e=t.filter(function(t){return function(t,n){return!(t[0]==n[0]&&t[1]==n[1])}(n,t)});e=e.filter(i);var a=o.bind(null,r);return e=e.filter(a),e},c=function(t,n){var r=[n[0]-1,n[0],n[0]+1],e=[n[1]-1,n[1],n[1]+1],o=a(r,e);return u(o,n,t)},f=function(t,n){return"*"==t[n[0]][n[1]]},l=function(t,n){var r=c([n.length,n[0].length],t),e=f.bind(null,n);return r.filter(e).length},h=function(t,n){for(var r=[],e=0;e<t;e++)r.push(n),n+=1;return r},s=function(t){return{height:t.bottomRight[0]-t.topLeft[0]+1,width:t.bottomRight[1]-t.topLeft[1]+1}},v=function(t,n){var r=[],o=t.map(p).join(e),i=e+o+e;return r.push(i),r},g=function(t){return 0==t?"":(n=r,function(t){return new Array(t).fill(n)})(4*t+1).join("");var n},p=function(t){return void 0!=t?" "+t+" ":""};t.exports={initialGrid:function(t,n){return new Array(n).fill(t).map(function(t){return new Array(t).fill(" ")})},isCoordinatesGreaterThanBoard:o,generateWorld:function(t,n){var r=!0,e=!1,o=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var u=i.value;t[u[0]][u[1]]="*"}}catch(c){e=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(e)throw o}}return t},cartesian:a,validNeighbors:u,findingNeighbors:c,checkForAlive:f,totalAliveNeighbors:l,generateNextWorld:function(t){for(var n=t.map(function(t){return t.slice()}),r=0;r<t.length;r++)for(var e=0;e<t[0].length;e++){var o=l([r,e],t),i=[" "," ",t[r][e],"*"," "," "," "," "," "][o];n[r][e]=i}return n},getAliveCellsOfNextGeneration:function(t,n,r){for(var e=[],o=0;o<n;o++)for(var i=0;i<r;i++)"*"==t[o][i]&&e.push([o,i]);return e},cellCoordinates:function(t){var n=s(t),r=n.height,e=n.width,o=h(r,t.topLeft[0]),i=h(e,t.topLeft[1]);return a(o,i)},getDimension:s,filterInputs:function(t,n){return n.some(function(n){var r=n.every(function(n){return t.includes(n)}),e=t.every(function(t){return n.includes(t)});return r&&e})},printBoard:function(t){var n=[],r=t[0].length;if(0==t[0].length)return[""];n=n.concat(g(r));for(var e=0;e<t.length;e++)n=n.concat(v(t[e],e));return n.concat(g(r))}}},function(t,n,r){"use strict";r.r(n);var e=r(0),o=r.n(e),i=r(7),a=r.n(i),u=(r(13),r(1)),c=r(2),f=r(4),l=r(3),h=r(5),s=function(t){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("rect",{width:"10",height:"10",fill:this.props.color||"white",x:10*this.props.col,y:10*this.props.row,stroke:"lightgray",strokeWidth:1})}}]),n}(e.Component),v=r(15).nextGeneration,g=function(t){function n(t){var r;return Object(u.a)(this,n),(r=Object(f.a)(this,Object(l.a)(n).call(this,t))).state={gen:r.props.gen},r}return Object(h.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},180)}},{key:"tick",value:function(){this.setState(function(t,n){return{gen:v(t.gen,{topLeft:[0,0],bottomRight:[17,17]})}})}},{key:"render",value:function(){var t=function(t){for(var n=[],r=0;r<17;r++)for(var e=0;e<17;e++)n.push(o.a.createElement(s,{row:r,col:e,color:t["".concat(r,"_").concat(e)]}));return n}(function(t){var n={};return t.forEach(function(t){var r;n[(r=t,r.join("_"))]="black"}),n}(this.state.gen));return o.a.createElement("div",{className:"App"},o.a.createElement("svg",{width:800,height:800},t))}}]),n}(e.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(g,{gen:[[1,5],[1,11],[2,5],[2,11],[3,5],[3,6],[3,10],[3,11],[5,1],[5,2],[5,3],[5,6],[5,7],[5,9],[5,10],[5,13],[5,14],[5,15],[6,3],[6,5],[6,7],[6,9],[6,11],[6,13],[7,5],[7,6],[7,10],[7,11],[9,5],[9,6],[9,10],[9,11],[10,3],[10,5],[10,7],[10,9],[10,11],[10,13],[11,1],[11,2],[11,3],[11,6],[11,7],[11,9],[11,10],[11,13],[11,14],[11,15],[13,5],[13,6],[13,10],[13,11],[14,5],[14,11],[15,5],[15,11]]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.9710f5d4.chunk.js.map