function a(a){return " translate("+a+")";};function b(a){return " scale("+a+")";};function c(a){return " rotate("+a+")";};function d(a){return " matrix("+a.join(",")+")";}function e(a){if(a)return "M6.325,6.325c-1.733,1.733-3.834,2.6-6.3,2.6c-2.5,0-4.617-0.866-6.35-2.6c-1.733-1.733-2.6-3.851-2.6-6.351c0-2.466,0.867-4.566,2.6-6.3c1.733-1.733,3.85-2.6,6.35-2.6c2.466,0,4.567,0.867,6.3,2.6s2.6,3.833,2.6,6.3C8.925,2.475,8.059,4.592,6.325,6.325z";return "M8.675-3.325h-17.3c0.367-1.5,1.133-2.833,2.3-4c1.733-1.733,3.85-2.6,6.35-2.6c2.466,0,4.567,0.867,6.3,2.6C7.491-6.158,8.275-4.825,8.675-3.325z M8.675-1.075c0.093,0.357,0.159,0.724,0.2,1.1c0.033,0.343,0.05,0.692,0.05,1.05c0,2.5-0.866,4.617-2.6,6.351s-3.834,2.6-6.3,2.6c-2.5,0-4.617-0.867-6.35-2.6c-1.733-1.733-2.6-3.851-2.6-6.351c0-0.357,0.017-0.707,0.05-1.05c0.041-0.376,0.107-0.743,0.2-1.1c0.011-0.05,0.02-0.1,0.025-0.15h17.3C8.655-1.175,8.663-1.125,8.675-1.075z";};function f(a,b){var c=[],d=Math.PI/b,e=d*2;do{c.push([a*Math.cos(d),a*Math.sin(d)].join(","));d+=e;}while(d<2*Math.PI);return c.join(" ");};function g(a,b){var c=a,d=a*.8;var e="M"+[-c,d].join(",")+"L"+[-c,-d].join(",")+"L"+[0,-d].join(",")+"L"+[0,-d*.8].join(",")+"L"+[c,-d*.8].join(",")+"L"+[c,d].join(",")+"Z";return e;;}function h(a,b){var c=8;var d={x:a[0],y:a[1]+c};ini2={x:a[0],y:a[1]-c},end={x:b[0],y:b[1]};var e=(end.x-d.x)/2;if(Math.abs(e)<30)e=-100;var f="M"+[d.x,d.y].join(",")+"C"+[d.x+e,d.y,d.x+e,end.y,end.x,end.y].join(",")+"C"+[d.x+e,end.y,d.x+e,ini2.y,ini2.x,ini2.y].join(",")+"Z";return f;};function i(a,b){var c=8,d=Math.abs(b[0]-a[0]),e=Math.abs(b[1]-a[1]),f={x:b[0],y:b[1]};if(d>e){var g={x:a[0],y:a[1]+c};ini2={x:a[0],y:a[1]-c},controlX=(f.x-g.x)/2;return "M"+[g.x,g.y].join(",")+"C"+[g.x+controlX,g.y,g.x+controlX,f.y,f.x,f.y].join(",")+"C"+[g.x+controlX,f.y,g.x+controlX,ini2.y,ini2.x,ini2.y].join(",")+"Z";}var g={x:a[0]+c,y:a[1]};ini2={x:a[0]-c,y:a[1]},controlY=(f.y-g.y)/2;return "M"+[g.x,g.y].join(",")+"C"+[g.x,g.y+controlY,f.x,g.y+controlY,f.x,f.y].join(",")+"C"+[f.x,ini2.y+controlY,ini2.x,ini2.y+controlY,ini2.x,ini2.y].join(",")+"Z";};function j(a){var b={hive:{r:20,c:"#c4c9d8"},block:{r:18},system:{r:18,c:"#cfcd74"},src:{r:18,c:"#6967a0"},dep:{r:18,c:"#54965d"},folder:{r:12},sys:{r:10,c:"#cfcd74"},cpp:{r:10,c:"#ffaa00"},text:{r:10,c:"#ddd"},image:{r:10,c:"#8af1f3"},sound:{r:10,c:"#0023f3"},html:{r:10,c:"#f35fd2"},xml:{r:10,c:"#ca80f3"},python:{r:10,c:"#78d26c"},js:{r:10,c:"#38f880"},java:{r:10,c:"#f37f59"},fortran:{r:10,c:"#c3dff3"},unknown:{r:10,c:"#666"}};function c(){this.colorMaker=d3.scale.category20(),this.colorIndex=0;var a=this;this.color=function(){return a.colorMaker(a.colorIndex++);};};var d=new c();function e(a,c,e){var f={"name":a,"type":c,"parent":e,"children":{},"mains":0,"virtuals":0,"unresolved":0,"ncells":{"total":0},"depArray":[]};if(c=="block")f.color=(a=="unresolved")?"#666":d.color();else f.color=b[c].c;f.colorDark=d3.rgb(f.color).darker().toString();f.colorBright=d3.rgb(f.color).brighter().toString();f.size=b[c].r;return f;};function f(a,c,d,e){a.type=a.type.toLowerCase();a.color=b[a.type].c;a.colorDark=d3.rgb(a.color).darker().toString();a.colorBright=d3.rgb(a.color).brighter().toString();a.size=b[a.type].r;a.name=c;a.block=d;a.depArray=e;return a;}function g(a,b){a.cells++;if(b.has_main)a.mains++;if(b.is_virtual)a.virtuals++;if(!b.resolved)a.unresolved++;a.depArray=a.depArray.concat(b.depArray);a.ncells.total++;a.ncells[b.type]=a.ncells[b.type]+1||1;};function h(a){if(a.children){for(var b in a.children)h(a.children[b]);a.children=d3.values(a.children);};return a;};var i=e("Your Project","hive");var j=i.children.SRC=e("SRC","src",i);var k=0;for(var l in a){var m=a[l];var n=null;var o=null;if(l=="system")o=n=i.children.SYS||(i.children.SYS=e("SYS","system",i));else{if(!m.src)n=i.children.DEP||(i.children.DEP=e("DEP","dep",i));else n=j;o=n.children[l]||(n.children[l]=e(l,"block",n));}var p=m.cells;for(cellName in p){var q=p[cellName];var r=cellName.split("/");var s=o;var t=[];for(dt in q.dep){var u=q.dep[dt];for(var v=0;v<u.length;v++){var w=a[u[v][0]].cells[u[v][1]];var x={source:q,target:w,type:dt};x.id=k++;t.push(x);}}q=f(q,r[r.length-1],o,t);g(i,q);g(n,q);g(o,q);for(var y=0;y<r.length-1;y++){g(s,q);var z=r[y];s=s.children[z]||(s.children[z]=e(z,"folder",s));s.block=o;}q.parent=s;s.children[cellName]=q;}}var A=h(i);return A;};function k(a){function b(a){var b=a,c=[];do{c.push(b);b=b.parent;}while(b.parent);for(var d=c.length-1;d>=0;d--)if(!c[d].children)return c[d];};function c(a,b){if(a==b)return;a.level=Math.max(a.level,b.level+1);if(f.children)f.children.forEach(function(a){c(a,f);});};a.forEach(function(a){a.level=a.depth;});var d=[];for(var e=0;e<a.length;e++){var f=a[e];f.level=f.depth;if(f.children||f.type=="hive")continue;var g=f.depArray;if(!g)continue;for(var h=0;h<g.length;h++){var i=g[h];var j=f;var k=b(i.target);if(j==k)continue;if(i.type!="i")c(k,j);d.push({source:j,target:k,id:i.id,type:i.type});}}return d;};function l(e,l){THAT=this;var m={top:20,right:120,bottom:20,left:120},n=960-m.right-m.left,o=600-m.top-m.bottom,p=o;var q=0,r=0,s=500,t=s,u=100,v=false;var w={"lineal":{tree:d3.layout.tree().size([o,n]),diagonal:d3.svg.diagonal().projection(function(a){return [a.y,a.x];}),transform:function(b){b.position=[b.y,b.x];return a(b.position);},transform0:function(b){b.position0=[b.y0,b.x0];return a(b.position0);},inverse:function(a){return [a[1],a[0]];},textAnchor:function(a){return a.children||a._children?"end":"start";},textTransform:function(b){return a((b.children||b._children)?-(b.size+3):(b.size+3));},dependencyPath:h},"radial":{tree:d3.layout.tree().size([360,p/2-120]).separation(function(a,b){return(a.parent==b.parent?1:2)/a.depth;}),diagonal:d3.svg.diagonal.radial().projection(function(a){return [a.y,a.x/180*Math.PI];}),transform:function(b){var d=(Math.PI/180)*(b.x-90);b.position=[Math.cos(d)*b.y,Math.sin(d)*b.y];return c(b.x-90)+a(b.y);},transform0:function(b){var d=(Math.PI/180)*(b.x0-90);b.position0=[Math.cos(d)*b.y0,Math.sin(d)*b.y0];return c(b.x0-90)+a(b.y0);},inverse:function(a){return [180-(180/Math.PI)*Math.atan2(a[0],a[1]),Math.sqrt(a[1]*a[1]+a[0]*a[0])];},textAnchor:function(a){return(a.x<180)?"start":"end";},textTransform:function(b){return(b.x<180)?a(b.size+3):c(180)+a(-(b.size+3));},dependencyPath:i},"force":{tree:d3.layout.tree().size([o,n]),diagonal:d3.svg.diagonal().projection(function(a){return [a.y,a.x];}),transform:function(b){b.position=[b.y,b.x];return a(b.position);},transform0:function(b){b.position0=[b.y0,b.x0];return a(b.position0);},inverse:function(a){return [a[1],a[0]];},textAnchor:function(a){return a.children||a._children?"end":"start";},textTransform:function(b){return a((b.children||b._children)?-(b.size+3):(b.size+3));},dependencyPath:h}};var x=w.lineal;THAT.setLayout=function(a){x=w[a];F();};var y=d3.behavior.zoom().scaleExtent([.2,2]).on("zoom",function(){var c=d3.event.translate;c[0]+=m.right;c[1]+=m.top;z.attr("transform",a(c)+b(d3.event.scale));});var z=d3.select(l).style("width",n+m.left+m.right+"px").style("height",o+m.top+m.bottom+"px").append("svg").attr("width",n+m.right+m.left).attr("height",o+m.top+m.bottom).on("dblclick",function(){y.translate([0,0]);y.scale(1);y.event(z);}).call(y).on("dblclick.zoom",null).append("g").attr("transform","translate("+m.left+","+m.top+")");var A={i:.3,e:.3,s:.3,u:.3,v:.3};var B=j(e);B.x0=0;B.y0=m.left;B.children.forEach(H);var C,D,E;F(B);THAT.doIndent=function(a){v=a;F(B);};THAT.showDepType=function(a,b){A[a]=b?.3:0;F(B);};THAT.expand=function(){};THAT.collapse=function(){};function F(a){function b(){function b(a){return(a=="cpp")||(a=="python")||(a=="js")||(a=="java")||(a=="fortran")||(a=="text")||(a=="image")||(a=="sound")||(a=="html")||(a=="xml")||(a=="sys")||(a=="unknown");}function c(a){return a=="folder";}function e(a){return a=="block";}function j(a){return !b(a)&&!c(a)&&!e(a);}var k=z.selectAll("g.node").data(C,function(a){return a.id||(a.id=++q);});var l=k.enter().append("g").attr("class",function(a){return "node "+a.type;}).attr("transform",function(b){return x.transform0(a);}).call(d3.behavior.drag().on("dragstart",function(a){d3.event.sourceEvent.stopPropagation();d3.event.sourceEvent.preventDefault();t=0;}).on("drag",function(a){d3.event.sourceEvent.stopPropagation();d3.event.sourceEvent.preventDefault();var b=x.inverse(d3.mouse(z.node()));if(d3.event.sourceEvent.shiftKey){deltaX=b[0]-a.x;deltaY=b[1]-a.y;(function c(a){a.x+=deltaX;a.y+=deltaY;if(a.children)a.children.forEach(c);})(a);}else{a.x=b[0];a.y=b[1];}h();i();}).on("dragend",function(a){d3.event.sourceEvent.stopPropagation();d3.event.sourceEvent.preventDefault();t=s;}));l.on("click",G);l.append("text").attr("transform",x.textTransform).attr("text-anchor",x.textAnchor).attr("dy",".35em").text(function(a){return a.name;}).style("fill-opacity",1e-6);var m=l.filter(function(a){return b(a.type);});var n=l.filter(function(a){return c(a.type);});var o=l.filter(function(a){return e(a.type);});var p=l.filter(function(a){return j(a.type);});m.append("polygon").attr("class","meta").attr("points",function(a){return f(a.size,6);}).attr("stroke",function(a){return a.block.color;});m.append("polygon").attr("class","content").attr("points",function(a){return f(a.size-3,6);}).attr("fill",function(a){return a.color;});n.append("path").attr("d",function(a){return g(a.size);}).attr("fill",function(a){return a._children?a.block.colorDark:a.block.color;}).attr("stroke",function(a){return "#fff";});o.append("polygon").attr("points",function(a){return f(a.size,4);}).attr("fill",function(a){return a._children?a.colorDark:a.color;}).attr("stroke",function(a){return a.colorDark;});p.append("circle").attr("r",1e-6).style("fill",function(a){return a._children?a.color:"#fff";}).attr("stroke",function(a){return a.colorDark;});var r=k.transition().duration(t).attr("transform",x.transform);r.select("text").attr("transform",x.textTransform).attr("text-anchor",x.textAnchor).style("fill-opacity",1);var u=r.filter(function(a){return c(a.type);}).select("path").attr("fill",function(a){return a._children?a.block.colorDark:a.block.color;});var v=r.filter(function(a){return e(a.type);}).select("polygon").attr("fill",function(a){return a._children?a.colorDark:a.color;});var w=r.filter(function(a){return j(a.type);});w.select("circle").attr("r",function(a){return a.size;}).style("fill",function(a){return a._children?a.color:a.colorBright;});var y=k.exit().transition().duration(t).attr("transform",function(b){return x.transform(a);}).remove();y.select("circle").attr("r",1e-6);y.select("text").style("fill-opacity",1e-6);k.on("mouseover",function(a,c){if((!a.parent)||(!a.parent.children))return;if(!b(a.type))return;z.selectAll("path.dep").filter(function(b){return b.source==a||b.target==a;}).style("opacity",.85);z.selectAll("path.link").attr("opacity",.2);z.selectAll(".node").attr("opacity",.2);z.selectAll(".node").filter(function(b){if(b==a)return true;for(var c=0;c<a.depArray.length;c++)if(b==a.depArray[c].target)return true;if(!b.children)for(var c=0;c<b.depArray.length;c++)if(a==b.depArray[c].target)return true;return false;}).attr("opacity",1).transition().duration(100).attr('transform',function(a){return x.transform(a)+d([1.5,0,0,1.5,0,0]);});}).on("mouseout",function(a,c){if((!a.parent)||(!a.parent.children))return;if(!b(a.type))return;z.selectAll("path.dep").style("opacity",.3);z.selectAll("path.link").attr("opacity",1);z.selectAll(".node").attr("opacity",1);z.selectAll(".node").filter(function(b){if(b==a)return true;for(var c=0;c<a.depArray.length;c++)if(b==a.depArray[c].target)return true;if(!b.children)for(var c=0;c<b.depArray.length;c++)if(a==b.depArray[c].target)return true;return false;}).transition().duration(100).attr('transform',function(a){return x.transform(a);});});};function c(){var b=z.selectAll("path.link").data(D,function(a){return a.target.id;});b.enter().insert("path","g").attr("class","link").attr("d",function(b){var c={x:a.x0,y:a.y0};return x.diagonal({source:c,target:c});});b.transition().duration(t).attr("d",x.diagonal);b.exit().transition().duration(t).attr("d",function(b){var c={x:a.x,y:a.y};return x.diagonal({source:c,target:c});}).remove();};function e(){E=E.filter(function(a){return A[a.type];});var b=z.selectAll("path.dep").data(E,function(a){return a.id;});b.enter().insert("path","g").attr("class",function(a){return "dep "+a.type;}).attr("d",function(b){return x.dependencyPath(a.position0,a.position0);}).style("opacity",0);b.transition().duration(t).attr("d",function(a){return x.dependencyPath(a.source.position,a.target.position);}).style("opacity",function(a){return A[a.type];});b.exit().transition().duration(t).attr("d",function(b){return x.dependencyPath(a.position,a.position);}).style("opacity",0).remove();};function h(){b();c();e();}C=x.tree.nodes(B).reverse();D=x.tree.links(C);E=k(C);C.forEach(function(a,b){a.y=(v?a.level:a.depth)*u;});h();function i(){C.forEach(function(a){a.x0=a.x;a.y0=a.y;a.position0=a.position;});};i();};function G(a){if(d3.event.defaultPrevented)return;if(a.children){a._children=a.children;a.children=null;}else{a.children=a._children;a._children=null;};F(a);};function H(a){if(a.children){a._children=a.children;a._children.forEach(H);a.children=null;}};};var m=new l(data,"#graph");d3.select("#indent-btn").on("click",function(){m.doIndent(n(this));});d3.select("#explicit-btn").on("click",function(){m.showDepType("e",n(this));});d3.select("#implicit-btn").on("click",function(){m.showDepType("i",n(this));});d3.select("#system-btn").on("click",function(){m.showDepType("s",n(this));});d3.select("#unresolved-btn").on("click",function(){m.showDepType("u",n(this));});d3.select("#legend-btn").on("click",function(){var a=document.getElementById("legend");a.className=n(this)?"on":"";});function n(a){var b=a.className;var c=b.match(" on");if(c)a.className=b.replace(" on","");else a.className+=" on";return !c;}