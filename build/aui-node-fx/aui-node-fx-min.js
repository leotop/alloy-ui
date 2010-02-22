AUI.add("aui-node-fx",function(B){var D=B.Lang;B.Node.ATTRS.fx={getter:function(){var A=this;if(!A.fx){A.plug(B.Plugin.NodeFX);}return A.fx;}};var E={fast:0.1,normal:1,slow:1.5};var C=function(A){var G=1;if(D.isNumber(A)){G=A;A=null;}if(D.isString(A)){var F=A.toLowerCase();if(F in E){G=E[F];}A=null;}A=A||{duration:G};return A;};B.mix(B.Node.prototype,{fadeIn:function(G){var A=this;var H=A.get("fx");G=C(G);var F=H.get("to.opacity")||0;if(F==1){F=0;}B.mix(G,{from:{opacity:F},to:{opacity:1},reverse:false});H.setAttrs(G);H.run();},fadeOut:function(F){var A=this;var G=A.get("fx");F=C(F);B.mix(F,{from:{opacity:G.get("to.opacity")||1},to:{opacity:0},reverse:false});G.setAttrs(F);G.run();},fadeTo:function(G,J){var A=this;var F=0;if(D.isNumber(G)||D.isString(G)){F=parseFloat(G);G=null;}G=G||{};J=J||1;if(D.isString(J)){var I=J.toLowerCase();if(I in E){J=E[I];}}B.mix(G,{duration:J,to:{opacity:F},reverse:false});var H=A.get("fx");H.setAttrs(G);H.run();},fadeToggle:function(J){var F=this;J=J||1;if(D.isString(J)){var H=J.toLowerCase();if(H in E){J=E[H];}}var G=F.get("fx");if(false&&!G._fadeToggleSet){G._fadeToggleSet={from:{opacity:0},to:{opacity:1}};G.setAttrs(G._fadeToggleSet);}var I=G.get("from.opacity");var A=G.get("to.opacity");if(D.isUndefined(I)){I=0;}if(D.isUndefined(A)){A=1;}I=Math.round(I);A=Math.round(A);if(I==A){A=(I==1)?0:1;}G.setAttrs({from:{opacity:I},to:{opacity:A},duration:J,reverse:!G.get("reverse")});G.run();},slideDown:function(F){var A=this;var G=A.get("fx");F=C(F);B.mix(F,{from:{height:0},to:{height:function(H){return H.get("scrollHeight");}},reverse:false});G.setAttrs(F);G.on("start",function(H){G.detach("nodefx:start",arguments.callee);A.setStyle("overflow","hidden");});G.run();},slideToggle:function(F){var A=this;var G=A.get("fx");var I=1;if(D.isNumber(F)){I=F;}if(D.isString(F)){var H=F.toLowerCase();if(H in E){I=E[H];}}if(!G._slideToggleSet){G.setAttrs({from:{height:0},to:{height:function(J){return J.get("scrollHeight");}},reverse:false});G._slideToggleSet=true;}G.on("start",function(J){G.detach("nodefx:start",arguments.callee);A.setStyle("overflow","hidden");});G.set("duration",I);G.set("reverse",!G.get("reverse"));G.run();},slideUp:function(F){var A=this;var G=A.get("fx");F=C(F);B.mix(F,{from:{height:function(H){return H.get("scrollHeight");}},to:{height:0},reverse:false});G.setAttrs(F);G.on("start",function(H){G.detach("nodefx:start",arguments.callee);A.setStyle("overflow","hidden");});G.run();}});},"@VERSION@",{requires:["aui-base","anim","anim-node-plugin"],skinnable:false});