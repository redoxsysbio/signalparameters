"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7866],{77866:(e,t,a)=>{a.r(t),a.d(t,{autoCloseTags:()=>be,html:()=>he,htmlCompletionSource:()=>ce,htmlCompletionSourceWith:()=>pe,htmlLanguage:()=>ge,htmlPlain:()=>Se});var l=a(49906),r=a(96947),n=a(12926);const s=20,o=22,O=23,i=24,u=26,c=27,p=28,d=31,m=34,f=37,S={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},g={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},h={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function x(e){return 9==e||10==e||13==e||32==e}let b=null,P=null,V=0;function w(e,t){let a=e.pos+t;if(V==a&&P==e)return b;let l=e.peek(t);for(;x(l);)l=e.peek(++t);let r="";for(;45==(n=l)||46==n||58==n||n>=65&&n<=90||95==n||n>=97&&n<=122||n>=161;)r+=String.fromCharCode(l),l=e.peek(++t);var n;return P=e,V=a,b=r?r.toLowerCase():l==T||l==v?void 0:null}const T=63,v=33;function y(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let t=0;t<e.length;t++)this.hash+=(this.hash<<4)+e.charCodeAt(t)+(e.charCodeAt(t)<<8)}const X=[6,10,7,8,9],k=new l.IK({start:null,shift:(e,t,a,l)=>X.indexOf(t)>-1?new y(w(l,1)||"",e):e,reduce:(e,t)=>t==s&&e?e.parent:e,reuse(e,t,a,l){let r=t.type.id;return 6==r||36==r?new y(w(l,1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),$=new l.Jq(((e,t)=>{if(60!=e.next)return void(e.next<0&&t.context&&e.acceptToken(57));e.advance();let a=47==e.next;a&&e.advance();let l=w(e,0);if(void 0===l)return;if(!l)return e.acceptToken(a?14:6);let r=t.context?t.context.name:null;if(a){if(l==r)return e.acceptToken(11);if(r&&g[r])return e.acceptToken(57,-2);if(t.dialectEnabled(0))return e.acceptToken(12);for(let e=t.context;e;e=e.parent)if(e.name==l)return;e.acceptToken(13)}else{if("script"==l)return e.acceptToken(7);if("style"==l)return e.acceptToken(8);if("textarea"==l)return e.acceptToken(9);if(S.hasOwnProperty(l))return e.acceptToken(10);r&&h[r]&&h[r][l]?e.acceptToken(57,-1):e.acceptToken(6)}}),{contextual:!0}),_=new l.Jq((e=>{for(let t=0,a=0;;a++){if(e.next<0){a&&e.acceptToken(58);break}if(45==e.next)t++;else{if(62==e.next&&t>=2){a>3&&e.acceptToken(58,-2);break}t=0}e.advance()}})),q=new l.Jq(((e,t)=>{if(47==e.next&&62==e.peek(1)){let a=t.dialectEnabled(1)||function(e){for(;e;e=e.parent)if("svg"==e.name||"math"==e.name)return!0;return!1}(t.context);e.acceptToken(a?5:4,2)}else 62==e.next&&e.acceptToken(4,1)}));function Q(e,t,a){let r=2+e.length;return new l.Jq((l=>{for(let n=0,s=0,o=0;;o++){if(l.next<0){o&&l.acceptToken(t);break}if(0==n&&60==l.next||1==n&&47==l.next||n>=2&&n<r&&l.next==e.charCodeAt(n-2))n++,s++;else if(2!=n&&n!=r||!x(l.next)){if(n==r&&62==l.next){o>s?l.acceptToken(t,-s):l.acceptToken(a,-(s-2));break}if((10==l.next||13==l.next)&&o){l.acceptToken(t,1);break}n=s=0}else s++;l.advance()}}))}const C=Q("script",54,1),A=Q("style",55,2),Y=Q("textarea",56,3),R=(0,r.styleTags)({"Text RawText":r.tags.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":r.tags.angleBracket,TagName:r.tags.tagName,"MismatchedCloseTag/TagName":[r.tags.tagName,r.tags.invalid],AttributeName:r.tags.attributeName,"AttributeValue UnquotedAttributeValue":r.tags.attributeValue,Is:r.tags.definitionOperator,"EntityReference CharacterReference":r.tags.character,Comment:r.tags.blockComment,ProcessingInst:r.tags.processingInstruction,DoctypeDecl:r.tags.documentMeta}),M=l.WQ.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:"+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:k,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"]],propSources:[R],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[C,A,Y,q,$,_,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:485},tokenPrec:487});function Z(e,t){let a=Object.create(null);for(let l of e.getChildren(O)){let e=l.getChild(i),r=l.getChild(u)||l.getChild(c);e&&(a[t.read(e.from,e.to)]=r?r.type.id==u?t.read(r.from+1,r.to-1):t.read(r.from,r.to):"")}return a}function E(e,t){let a=e.getChild(o);return a?t.read(a.from,a.to):" "}function B(e,t,a){let l;for(let r of a)if(!r.attrs||r.attrs(l||(l=Z(e.node.parent.firstChild,t))))return{parser:r.parser};return null}function W(e=[],t=[]){let a=[],l=[],r=[],o=[];for(let t of e)("script"==t.tag?a:"style"==t.tag?l:"textarea"==t.tag?r:o).push(t);let i=t.length?Object.create(null):null;for(let e of t)(i[e.name]||(i[e.name]=[])).push(e);return(0,n.parseMixed)(((e,t)=>{let n=e.type.id;if(n==p)return B(e,t,a);if(n==d)return B(e,t,l);if(n==m)return B(e,t,r);if(n==s&&o.length){let a,l=e.node,r=l.firstChild,n=r&&E(r,t);if(n)for(let e of o)if(e.tag==n&&(!e.attrs||e.attrs(a||(a=Z(l,t))))){let t=l.lastChild;return{parser:e.parser,overlay:[{from:r.to,to:t.type.id==f?t.from:l.to}]}}}if(i&&n==O){let a,l=e.node;if(a=l.firstChild){let e=i[t.read(a.from,a.to)];if(e)for(let a of e){if(a.tagName&&a.tagName!=E(l.parent,t))continue;let e=l.lastChild;if(e.type.id==u){let t=e.from+1,l=e.lastChild,r=e.to-(l&&l.isError?0:1);if(r>t)return{parser:a.parser,overlay:[{from:t,to:r}]}}else if(e.type.id==c)return{parser:a.parser,overlay:[{from:e.from,to:e.to}]}}}}return null}))}var z=a(59239),D=a(65850),G=a(29387),j=a(53552),I=a(3314);const U=["_blank","_self","_top","_parent"],N=["ascii","utf-8","utf-16","latin1","latin1"],L=["get","post","put","delete"],F=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],J=["true","false"],H={},K={a:{attrs:{href:null,ping:null,type:null,media:null,target:U,hreflang:null}},abbr:H,address:H,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:H,aside:H,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:H,base:{attrs:{href:null,target:U}},bdi:H,bdo:H,blockquote:{attrs:{cite:null}},body:H,br:H,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:F,formmethod:L,formnovalidate:["novalidate"],formtarget:U,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:H,center:H,cite:H,code:H,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:H,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:H,div:H,dl:H,dt:H,em:H,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:H,figure:H,footer:H,form:{attrs:{action:null,name:null,"accept-charset":N,autocomplete:["on","off"],enctype:F,method:L,novalidate:["novalidate"],target:U}},h1:H,h2:H,h3:H,h4:H,h5:H,h6:H,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:H,hgroup:H,hr:H,html:{attrs:{manifest:null}},i:H,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:F,formmethod:L,formnovalidate:["novalidate"],formtarget:U,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:H,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:H,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:H,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:N,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:H,noscript:H,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:H,param:{attrs:{name:null,value:null}},pre:H,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:H,rt:H,ruby:H,samp:H,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:N}},section:H,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:H,source:{attrs:{src:null,type:null,media:null}},span:H,strong:H,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:H,summary:H,sup:H,table:H,tbody:H,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:H,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:H,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:H,time:{attrs:{datetime:null}},title:H,tr:H,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:H,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:H},ee={accesskey:null,class:null,contenteditable:J,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:J,autocorrect:J,autocapitalize:J,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":J,"aria-autocomplete":["inline","list","both","none"],"aria-busy":J,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":J,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":J,"aria-hidden":J,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":J,"aria-multiselectable":J,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":J,"aria-relevant":null,"aria-required":J,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},te="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((e=>"on"+e));for(let e of te)ee[e]=null;class ae{constructor(e,t){this.tags=Object.assign(Object.assign({},K),e),this.globalAttrs=Object.assign(Object.assign({},ee),t),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}}function le(e,t,a=e.length){if(!t)return"";let l=t.firstChild,r=l&&l.getChild("TagName");return r?e.sliceString(r.from,Math.min(r.to,a)):""}function re(e,t=!1){for(;e;e=e.parent)if("Element"==e.name){if(!t)return e;t=!1}return null}function ne(e,t,a){let l=a.tags[le(e,re(t))];return(null==l?void 0:l.children)||a.allTags}function se(e,t){let a=[];for(let l=re(t);l&&!l.type.isTop;l=re(l.parent)){let r=le(e,l);if(r&&"CloseTag"==l.lastChild.name)break;r&&a.indexOf(r)<0&&("EndTag"==t.name||t.from>=l.firstChild.to)&&a.push(r)}return a}ae.default=new ae;const oe=/^[:\-\.\w\u00b7-\uffff]*$/;function Oe(e,t,a,l,r){let n=/\s*>/.test(e.sliceDoc(r,r+5))?"":">",s=re(a,!0);return{from:l,to:r,options:ne(e.doc,s,t).map((e=>({label:e,type:"type"}))).concat(se(e.doc,a).map(((e,t)=>({label:"/"+e,apply:"/"+e+n,type:"type",boost:99-t})))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function ie(e,t,a,l){let r=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:a,to:l,options:se(e.doc,t).map(((e,t)=>({label:e,apply:e+r,type:"type",boost:99-t}))),validFor:oe}}function ue(e,t){let{state:a,pos:l}=t,r=(0,I.syntaxTree)(a).resolveInner(l,-1),n=r.resolve(l);for(let e,t=l;n==r&&(e=r.childBefore(t));){let a=e.lastChild;if(!a||!a.type.isError||a.from<a.to)break;n=r=e,t=a.from}return"TagName"==r.name?r.parent&&/CloseTag$/.test(r.parent.name)?ie(a,r,r.from,l):Oe(a,e,r,r.from,l):"StartTag"==r.name?Oe(a,e,r,l,l):"StartCloseTag"==r.name||"IncompleteCloseTag"==r.name?ie(a,r,l,l):"OpenTag"==r.name||"SelfClosingTag"==r.name||"AttributeName"==r.name?function(e,t,a,l,r){let n=re(a),s=n?t.tags[le(e.doc,n)]:null,o=s&&s.attrs?Object.keys(s.attrs):[];return{from:l,to:r,options:(s&&!1===s.globalAttrs?o:o.length?o.concat(t.globalAttrNames):t.globalAttrNames).map((e=>({label:e,type:"property"}))),validFor:oe}}(a,e,r,"AttributeName"==r.name?r.from:l,l):"Is"==r.name||"AttributeValue"==r.name||"UnquotedAttributeValue"==r.name?function(e,t,a,l,r){var n;let s,o=null===(n=a.parent)||void 0===n?void 0:n.getChild("AttributeName"),O=[];if(o){let n=e.sliceDoc(o.from,o.to),i=t.globalAttrs[n];if(!i){let l=re(a),r=l?t.tags[le(e.doc,l)]:null;i=(null==r?void 0:r.attrs)&&r.attrs[n]}if(i){let t=e.sliceDoc(l,r).toLowerCase(),a='"',n='"';/^['"]/.test(t)?(s='"'==t[0]?/^[^"]*$/:/^[^']*$/,a="",n=e.sliceDoc(r,r+1)==t[0]?"":t[0],t=t.slice(1),l++):s=/^[^\s<>='"]*$/;for(let e of i)O.push({label:e,apply:a+e+n,type:"constant"})}}return{from:l,to:r,options:O,validFor:s}}(a,e,r,"Is"==r.name?l:r.from,l):!t.explicit||"Element"!=n.name&&"Text"!=n.name&&"Document"!=n.name?null:function(e,t,a,l){let r=[],n=0;for(let l of ne(e.doc,a,t))r.push({label:"<"+l,type:"type"});for(let t of se(e.doc,a))r.push({label:"</"+t+">",type:"type",boost:99-n++});return{from:l,to:l,options:r,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(a,e,r,l)}function ce(e){return ue(ae.default,e)}function pe(e){let{extraTags:t,extraGlobalAttributes:a}=e,l=a||t?new ae(t,a):ae.default;return e=>ue(l,e)}const de=D.javascriptLanguage.parser.configure({top:"SingleExpression"}),me=[{tag:"script",attrs:e=>"text/typescript"==e.type||"ts"==e.lang,parser:D.typescriptLanguage.parser},{tag:"script",attrs:e=>"text/babel"==e.type||"text/jsx"==e.type,parser:D.jsxLanguage.parser},{tag:"script",attrs:e=>"text/typescript-jsx"==e.type,parser:D.tsxLanguage.parser},{tag:"script",attrs:e=>/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type),parser:de},{tag:"script",attrs:e=>!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),parser:D.javascriptLanguage.parser},{tag:"style",attrs:e=>(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),parser:z.cssLanguage.parser}],fe=[{name:"style",parser:z.cssLanguage.parser.configure({top:"Styles"})}].concat(te.map((e=>({name:e,parser:D.javascriptLanguage.parser})))),Se=I.LRLanguage.define({name:"html",parser:M.configure({props:[I.indentNodeProp.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit,Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t,a=null;for(let t=e.node;;){let e=t.lastChild;if(!e||"Element"!=e.name||e.to!=t.to)break;a=t=e}return a&&(!(t=a.lastChild)||"CloseTag"!=t.name&&"SelfClosingTag"!=t.name)?e.lineIndent(a.from)+e.unit:null}}),I.foldNodeProp.add({Element(e){let t=e.firstChild,a=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==a.name?a.from:e.to}:null}}),I.bracketMatchingHandle.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),ge=Se.configure({wrap:W(me,fe)});function he(e={}){let t,a="";!1===e.matchClosingTags&&(a="noMatch"),!0===e.selfClosingTags&&(a=(a?a+" ":"")+"selfClosing"),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(t=W((e.nestedLanguages||[]).concat(me),(e.nestedAttributes||[]).concat(fe)));let l=t?Se.configure({wrap:t,dialect:a}):a?ge.configure({dialect:a}):ge;return new I.LanguageSupport(l,[ge.data.of({autocomplete:pe(e)}),!1!==e.autoCloseTags?be:[],(0,D.javascript)().support,(0,z.css)().support])}const xe=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),be=G.EditorView.inputHandler.of(((e,t,a,l,r)=>{if(e.composing||e.state.readOnly||t!=a||">"!=l&&"/"!=l||!ge.isActiveAt(e.state,t,-1))return!1;let n=r(),{state:s}=n,o=s.changeByRange((e=>{var t,a,r;let n,o=s.doc.sliceString(e.from-1,e.to)==l,{head:O}=e,i=(0,I.syntaxTree)(s).resolveInner(O,-1);if(o&&">"==l&&"EndTag"==i.name){let l=i.parent;if("CloseTag"!=(null===(a=null===(t=l.parent)||void 0===t?void 0:t.lastChild)||void 0===a?void 0:a.name)&&(n=le(s.doc,l.parent,O))&&!xe.has(n))return{range:e,changes:{from:O,to:O+(">"===s.doc.sliceString(O,O+1)?1:0),insert:`</${n}>`}}}else if(o&&"/"==l&&"IncompleteCloseTag"==i.name){let e=i.parent;if(i.from==O-2&&"CloseTag"!=(null===(r=e.lastChild)||void 0===r?void 0:r.name)&&(n=le(s.doc,e,O))&&!xe.has(n)){let e=O+(">"===s.doc.sliceString(O,O+1)?1:0),t=`${n}>`;return{range:j.EditorSelection.cursor(O+t.length,-1),changes:{from:O,to:e,insert:t}}}}return{range:e}}));return!o.changes.empty&&(e.dispatch([n,s.update(o,{userEvent:"input.complete",scrollIntoView:!0})]),!0)}))}}]);
//# sourceMappingURL=7866.adeb5b3.js.map