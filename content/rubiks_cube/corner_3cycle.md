+++
date = "2020-05-09T22:36:15+09:00"
title = "3cycle"
Tags = ["rubiks_cube", "bld", "3-cycle"]

customs = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/css/iziModal.css" integrity="sha256-m/nnXscwkcMbAFsUOys9WKr+MzlZz3q7EcJpkOxItaU=" crossorigin="anonymous" />',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/js/iziModal.js" integrity="sha256-rPSLT4QVhivrxPwK7xeqPLVWDDtc2YHkZHVxs1I6u9Y=" crossorigin="anonymous"></script>'
]

css = "3cycle_patterns.css"
+++

最適化とかは全然できてませんが、一応一通りのパターンを自分なりに導いてみたものです。
チェックも出来てないので、間違いが含まれている可能性があります。

## 手順

<div id="patterns">
  <h3>UBL(あ)</h3>
  <div class="to" data-visibles="ubl3,dlb0,drf4">
    <span>UBL -&gt; DLB(あい)</span>
    <span class="steps">[U2:D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ubl3,dfl0,drf4">
    <span>UBL -&gt; DFL(あう)</span>
    <span class="steps">[UR2U',L2]</span>
  </div>
  <div class="to" data-visibles="ubl3,ulf0,drf4">
    <span>UBL -&gt; ULF(あえ)</span>
    <span class="steps">[U2:R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="ubl3,bdl0,drf4">
    <span>UBL -&gt; BDL(あき)</span>
    <span class="steps">[UR2U',L]</span>
  </div>
  <div class="to" data-visibles="ubl3,fld0,drf4">
    <span>UBL -&gt; FLD(あく)</span>
    <span class="steps">[LU':D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ubl3,ful0,drf4">
    <span>UBL -&gt; FUL(あけ)</span>
    <span class="steps">[UR2U',L']</span>
  </div>
  <div class="to" data-visibles="ubl3,bur0,drf4">
    <span>UBL -&gt; BUR(あさ)</span>
    <span class="steps">[L2U:RUR',D]</span>
  </div>
  <div class="to" data-visibles="ubl3,brd0,drf4">
    <span>UBL -&gt; BRD(あし)</span>
    <span class="steps">[LBU':R'D'R,U2]</span>
  </div>
  <div class="to" data-visibles="ubl3,fru0,drf4">
    <span>UBL -&gt; FRU(あせ)</span>
    <span class="steps">[L2:(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="ubl3,urb0,drf4">
    <span>UBL -&gt; URB(あた)</span>
    <span class="steps">[L2U:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="ubl3,dbr0,drf4">
    <span>UBL -&gt; DBR(あち)</span>
    <span class="steps">[(u):U'L2U,R2]</span>
  </div>
  <div class="to" data-visibles="ubl3,ufr0,drf4">
    <span>UBL -&gt; UFR(あて)</span>
    <span class="steps">[U2:R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="ubl3,lbd0,drf4">
    <span>UBL -&gt; LBD(あに)</span>
    <span class="steps">[(u):U'L2U,R']</span>
  </div>
  <div class="to" data-visibles="ubl3,ldf0,drf4">
    <span>UBL -&gt; LDF(あぬ)</span>
    <span class="steps">[BL2:U'RU,L]</span>
  </div>
  <div class="to" data-visibles="ubl3,lfu0,drf4">
    <span>UBL -&gt; LFU(あね)</span>
    <span class="steps">[BL2:U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="ubl3,rbu0,drf4">
    <span>UBL -&gt; RBU(あら)</span>
    <span class="steps">[(u):U'L2U,R]</span>
  </div>
  <div class="to" data-visibles="ubl3,rdb0,drf4">
    <span>UBL -&gt; RDB(あり)</span>
    <span class="steps">[U'BU':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="ubl3,ruf0,drf4">
    <span>UBL -&gt; RUF(あれ)</span>
    <span class="steps">[L2:RUR',D]</span>
  </div>
  <h3>DLB(い)</h3>
  <div class="to" data-visibles="dlb3,ubl0,drf4">
    <span>DLB -&gt; UBL(いあ)</span>
    <span class="steps">[U2:RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,dfl0,drf4">
    <span>DLB -&gt; DFL(いう)</span>
    <span class="steps">[B2U:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="dlb3,ulf0,drf4">
    <span>DLB -&gt; ULF(いえ)</span>
    <span class="steps">[U':RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,blu0,drf4">
    <span>DLB -&gt; BLU(いか)</span>
    <span class="steps">[RU2R',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,fld0,drf4">
    <span>DLB -&gt; FLD(いく)</span>
    <span class="steps">[L':L',RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="dlb3,ful0,drf4">
    <span>DLB -&gt; FUL(いけ)</span>
    <span class="steps">[U':RUR',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,bur0,drf4">
    <span>DLB -&gt; BUR(いさ)</span>
    <span class="steps">[(u)L'UL(u'),D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,brd0,drf4">
    <span>DLB -&gt; BRD(いし)</span>
    <span class="steps">[L(u)R':UL'U',R2]</span>
  </div>
  <div class="to" data-visibles="dlb3,fru0,drf4">
    <span>DLB -&gt; FRU(いせ)</span>
    <span class="steps">[(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,urb0,drf4">
    <span>DLB -&gt; URB(いた)</span>
    <span class="steps">[U:RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,dbr0,drf4">
    <span>DLB -&gt; DBR(いち)</span>
    <span class="steps">[L2U':D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="dlb3,ufr0,drf4">
    <span>DLB -&gt; UFR(いて)</span>
    <span class="steps">[RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,lub0,drf4">
    <span>DLB -&gt; LUB(いな)</span>
    <span class="steps">[F'U2F,D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,ldf0,drf4">
    <span>DLB -&gt; LDF(いぬ)</span>
    <span class="steps">[B'L:U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="dlb3,lfu0,drf4">
    <span>DLB -&gt; LFU(いね)</span>
    <span class="steps">[RU'R',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,rbu0,drf4">
    <span>DLB -&gt; RBU(いら)</span>
    <span class="steps">[U2:RU'R',D2]</span>
  </div>
  <div class="to" data-visibles="dlb3,rdb0,drf4">
    <span>DLB -&gt; RDB(いり)</span>
    <span class="steps">[(r):D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="dlb3,ruf0,drf4">
    <span>DLB -&gt; RUF(いれ)</span>
    <span class="steps">[RUR',D2]</span>
  </div>
  <h3>DFL(う)</h3>
  <div class="to" data-visibles="dfl3,ubl0,drf4">
    <span>DFL -&gt; UBL(うあ)</span>
    <span class="steps">[L2,UR2U']</span>
  </div>
  <div class="to" data-visibles="dfl3,dlb0,drf4">
    <span>DFL -&gt; DLB(うい)</span>
    <span class="steps">[B2U:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,ulf0,drf4">
    <span>DFL -&gt; ULF(うえ)</span>
    <span class="steps">[U':RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,blu0,drf4">
    <span>DFL -&gt; BLU(うか)</span>
    <span class="steps">[RU2R',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,bdl0,drf4">
    <span>DFL -&gt; BDL(うき)</span>
    <span class="steps">[L:L,UR2U']</span>
  </div>
  <div class="to" data-visibles="dfl3,ful0,drf4">
    <span>DFL -&gt; FUL(うけ)</span>
    <span class="steps">[U':RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,bur0,drf4">
    <span>DFL -&gt; BUR(うさ)</span>
    <span class="steps">[(u)L'UL(u'),D]</span>
  </div>
  <div class="to" data-visibles="dfl3,brd0,drf4">
    <span>DFL -&gt; BRD(うし)</span>
    <span class="steps">[BU:RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,fru0,drf4">
    <span>DFL -&gt; FRU(うせ)</span>
    <span class="steps">[(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="dfl3,urb0,drf4">
    <span>DFL -&gt; URB(うた)</span>
    <span class="steps">[U:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,dbr0,drf4">
    <span>DFL -&gt; DBR(うち)</span>
    <span class="steps">[BU:(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="dfl3,ufr0,drf4">
    <span>DFL -&gt; UFR(うて)</span>
    <span class="steps">[RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,lub0,drf4">
    <span>DFL -&gt; LUB(うな)</span>
    <span class="steps">[F'U2F,D]</span>
  </div>
  <div class="to" data-visibles="dfl3,lbd0,drf4">
    <span>DFL -&gt; LBD(うに)</span>
    <span class="steps">[B':L2,UR2U']</span>
  </div>
  <div class="to" data-visibles="dfl3,lfu0,drf4">
    <span>DFL -&gt; LFU(うね)</span>
    <span class="steps">[RU'R',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,rbu0,drf4">
    <span>DFL -&gt; RBU(うら)</span>
    <span class="steps">[U2:RU'R',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,rdb0,drf4">
    <span>DFL -&gt; RDB(うり)</span>
    <span class="steps">[BU:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="dfl3,ruf0,drf4">
    <span>DFL -&gt; RUF(うれ)</span>
    <span class="steps">[RUR',D]</span>
  </div>
  <h3>ULF(え)</h3>
  <div class="to" data-visibles="ulf3,ubl0,drf4">
    <span>ULF -&gt; UBL(えあ)</span>
    <span class="steps">[U2:U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="ulf3,dlb0,drf4">
    <span>ULF -&gt; DLB(えい)</span>
    <span class="steps">[U':D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ulf3,dfl0,drf4">
    <span>ULF -&gt; DFL(えう)</span>
    <span class="steps">[U':D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ulf3,blu0,drf4">
    <span>ULF -&gt; BLU(えか)</span>
    <span class="steps">[RU'R'URU'R'URU'R'U,L]</span>
  </div>
  <div class="to" data-visibles="ulf3,bdl0,drf4">
    <span>ULF -&gt; BDL(えき)</span>
    <span class="steps">[B':RU'R'URU'R'URU'R'U,L]</span>
  </div>
  <div class="to" data-visibles="ulf3,fld0,drf4">
    <span>ULF -&gt; FLD(えく)</span>
    <span class="steps">[RU'R'URU'R'URU'R'U,L']</span>
  </div>
  <div class="to" data-visibles="ulf3,bur0,drf4">
    <span>ULF -&gt; BUR(えさ)</span>
    <span class="steps">[B:RU'R'URU'R'URU'R'U,L]</span>
  </div>
  <div class="to" data-visibles="ulf3,brd0,drf4">
    <span>ULF -&gt; BRD(えし)</span>
    <span class="steps">[B2:RU'R'URU'R'URU'R'U,L]</span>
  </div>
  <div class="to" data-visibles="ulf3,fru0,drf4">
    <span>ULF -&gt; FRU(えせ)</span>
    <span class="steps">[L':L'D2L,U2]</span>
  </div>
  <div class="to" data-visibles="ulf3,urb0,drf4">
    <span>ULF -&gt; URB(えた)</span>
    <span class="steps">[U':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="ulf3,dbr0,drf4">
    <span>ULF -&gt; DBR(えち)</span>
    <span class="steps">[U':D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ulf3,ufr0,drf4">
    <span>ULF -&gt; UFR(えて)</span>
    <span class="steps">[U':R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="ulf3,lub0,drf4">
    <span>ULF -&gt; LUB(えな)</span>
    <span class="steps">[BU':D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ulf3,lbd0,drf4">
    <span>ULF -&gt; LBD(えに)</span>
    <span class="steps">[B'U':R'F'R2FR,U']</span>
  </div>
  <div class="to" data-visibles="ulf3,ldf0,drf4">
    <span>ULF -&gt; LDF(えぬ)</span>
    <span class="steps">[UBL2:U'RU,L]</span>
  </div>
  <div class="to" data-visibles="ulf3,rbu0,drf4">
    <span>ULF -&gt; RBU(えら)</span>
    <span class="steps">[BU':R'F'R2FR,U']</span>
  </div>
  <div class="to" data-visibles="ulf3,rdb0,drf4">
    <span>ULF -&gt; RDB(えり)</span>
    <span class="steps">[BU':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="ulf3,ruf0,drf4">
    <span>ULF -&gt; RUF(えれ)</span>
    <span class="steps">[L2:RUR',D2]</span>
  </div>
  <h3>BLU(か)</h3>
  <div class="to" data-visibles="blu3,dlb0,drf4">
    <span>BLU -&gt; DLB(かい)</span>
    <span class="steps">[D2,RU2R']</span>
  </div>
  <div class="to" data-visibles="blu3,dfl0,drf4">
    <span>BLU -&gt; DFL(かう)</span>
    <span class="steps">[D,RU2R']</span>
  </div>
  <div class="to" data-visibles="blu3,ulf0,drf4">
    <span>BLU -&gt; ULF(かえ)</span>
    <span class="steps">[L,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="blu3,bdl0,drf4">
    <span>BLU -&gt; BDL(かき)</span>
    <span class="steps">[(u)R':UL'U',R']</span>
  </div>
  <div class="to" data-visibles="blu3,fld0,drf4">
    <span>BLU -&gt; FLD(かく)</span>
    <span class="steps">[L:RU'R'URU'R'URU'R'U,L2]</span>
  </div>
  <div class="to" data-visibles="blu3,ful0,drf4">
    <span>BLU -&gt; FUL(かけ)</span>
    <span class="steps">[LU':D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="blu3,bur0,drf4">
    <span>BLU -&gt; BUR(かさ)</span>
    <span class="steps">[(u):R',UL'U']</span>
  </div>
  <div class="to" data-visibles="blu3,brd0,drf4">
    <span>BLU -&gt; BRD(かし)</span>
    <span class="steps">[(u)R':UL'U',R2]</span>
  </div>
  <div class="to" data-visibles="blu3,fru0,drf4">
    <span>BLU -&gt; FRU(かせ)</span>
    <span class="steps">[L'D2L,U2]</span>
  </div>
  <div class="to" data-visibles="blu3,urb0,drf4">
    <span>BLU -&gt; URB(かた)</span>
    <span class="steps">[L'U:RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="blu3,dbr0,drf4">
    <span>BLU -&gt; DBR(かち)</span>
    <span class="steps">[D',RU2R']</span>
  </div>
  <div class="to" data-visibles="blu3,ufr0,drf4">
    <span>BLU -&gt; UFR(かて)</span>
    <span class="steps">[L:U',R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="blu3,lbd0,drf4">
    <span>BLU -&gt; LBD(かに)</span>
    <span class="steps">[U':U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="blu3,ldf0,drf4">
    <span>BLU -&gt; LDF(かぬ)</span>
    <span class="steps">[U':U'RU,L']</span>
  </div>
  <div class="to" data-visibles="blu3,lfu0,drf4">
    <span>BLU -&gt; LFU(かね)</span>
    <span class="steps">[L'D2L,U]</span>
  </div>
  <div class="to" data-visibles="blu3,rbu0,drf4">
    <span>BLU -&gt; RBU(から)</span>
    <span class="steps">[L'D2L,U']</span>
  </div>
  <div class="to" data-visibles="blu3,rdb0,drf4">
    <span>BLU -&gt; RDB(かり)</span>
    <span class="steps">[B'U:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="blu3,ruf0,drf4">
    <span>BLU -&gt; RUF(かれ)</span>
    <span class="steps">[L':RUR',D2]</span>
  </div>
  <h3>BDL(き)</h3>
  <div class="to" data-visibles="bdl3,ubl0,drf4">
    <span>BDL -&gt; UBL(きあ)</span>
    <span class="steps">[L,UR2U']</span>
  </div>
  <div class="to" data-visibles="bdl3,dfl0,drf4">
    <span>BDL -&gt; DFL(きう)</span>
    <span class="steps">[L:UR2U',L]</span>
  </div>
  <div class="to" data-visibles="bdl3,ulf0,drf4">
    <span>BDL -&gt; ULF(きえ)</span>
    <span class="steps">[B':L,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="bdl3,blu0,drf4">
    <span>BDL -&gt; BLU(きか)</span>
    <span class="steps">[(u)R':R',UL'U']</span>
  </div>
  <div class="to" data-visibles="bdl3,fld0,drf4">
    <span>BDL -&gt; FLD(きく)</span>
    <span class="steps">[L'U':RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="bdl3,ful0,drf4">
    <span>BDL -&gt; FUL(きけ)</span>
    <span class="steps">[L':L2,UR2U']</span>
  </div>
  <div class="to" data-visibles="bdl3,bur0,drf4">
    <span>BDL -&gt; BUR(きさ)</span>
    <span class="steps">[(u):R2,UL'U']</span>
  </div>
  <div class="to" data-visibles="bdl3,brd0,drf4">
    <span>BDL -&gt; BRD(きし)</span>
    <span class="steps">[(u)R:R,UL'U']</span>
  </div>
  <div class="to" data-visibles="bdl3,fru0,drf4">
    <span>BDL -&gt; FRU(きせ)</span>
    <span class="steps">[U2(u)R':R',UL'U']</span>
  </div>
  <div class="to" data-visibles="bdl3,urb0,drf4">
    <span>BDL -&gt; URB(きた)</span>
    <span class="steps">[LU2:R'F'R2FR,U']</span>
  </div>
  <div class="to" data-visibles="bdl3,dbr0,drf4">
    <span>BDL -&gt; DBR(きち)</span>
    <span class="steps">[LU2:D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="bdl3,ufr0,drf4">
    <span>BDL -&gt; UFR(きて)</span>
    <span class="steps">[L':RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="bdl3,lub0,drf4">
    <span>BDL -&gt; LUB(きな)</span>
    <span class="steps">[U'L:UR2U',L2]</span>
  </div>
  <div class="to" data-visibles="bdl3,ldf0,drf4">
    <span>BDL -&gt; LDF(きぬ)</span>
    <span class="steps">[L'U':(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="bdl3,lfu0,drf4">
    <span>BDL -&gt; LFU(きね)</span>
    <span class="steps">[L'U2:RUR',D]</span>
  </div>
  <div class="to" data-visibles="bdl3,rbu0,drf4">
    <span>BDL -&gt; RBU(きら)</span>
    <span class="steps">[L'U:(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="bdl3,rdb0,drf4">
    <span>BDL -&gt; RDB(きり)</span>
    <span class="steps">[B'U2:D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="bdl3,ruf0,drf4">
    <span>BDL -&gt; RUF(きれ)</span>
    <span class="steps">[L':RUR',D]</span>
  </div>
  <h3>FLD(く)</h3>
  <div class="to" data-visibles="fld3,ubl0,drf4">
    <span>FLD -&gt; UBL(くあ)</span>
    <span class="steps">[LU':RUR',D2]</span>
  </div>
  <div class="to" data-visibles="fld3,dlb0,drf4">
    <span>FLD -&gt; DLB(くい)</span>
    <span class="steps">[L':RU'R'URU'R'URU'R'U,L']</span>
  </div>
  <div class="to" data-visibles="fld3,ulf0,drf4">
    <span>FLD -&gt; ULF(くえ)</span>
    <span class="steps">[L',RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="fld3,blu0,drf4">
    <span>FLD -&gt; BLU(くか)</span>
    <span class="steps">[L:L2,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="fld3,bdl0,drf4">
    <span>FLD -&gt; BDL(くき)</span>
    <span class="steps">[L'U':D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="fld3,ful0,drf4">
    <span>FLD -&gt; FUL(くけ)</span>
    <span class="steps">[L'U':R'F'R2FR,U']</span>
  </div>
  <div class="to" data-visibles="fld3,bur0,drf4">
    <span>FLD -&gt; BUR(くさ)</span>
    <span class="steps">[LU:RUR',D2]</span>
  </div>
  <div class="to" data-visibles="fld3,brd0,drf4">
    <span>FLD -&gt; BRD(くし)</span>
    <span class="steps">[L2(u)R':UL'U',R2]</span>
  </div>
  <div class="to" data-visibles="fld3,fru0,drf4">
    <span>FLD -&gt; FRU(くせ)</span>
    <span class="steps">[L:(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="fld3,urb0,drf4">
    <span>FLD -&gt; URB(くた)</span>
    <span class="steps">[L'U':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="fld3,dbr0,drf4">
    <span>FLD -&gt; DBR(くち)</span>
    <span class="steps">[L'U':D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="fld3,ufr0,drf4">
    <span>FLD -&gt; UFR(くて)</span>
    <span class="steps">[L'U':R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="fld3,lub0,drf4">
    <span>FLD -&gt; LUB(くな)</span>
    <span class="steps">[LU':(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="fld3,lbd0,drf4">
    <span>FLD -&gt; LBD(くに)</span>
    <span class="steps">[LU2:RUR',D2]</span>
  </div>
  <div class="to" data-visibles="fld3,lfu0,drf4">
    <span>FLD -&gt; LFU(くね)</span>
    <span class="steps">[UL':RU'R'URU'R'URU'R'U,L2]</span>
  </div>
  <div class="to" data-visibles="fld3,rbu0,drf4">
    <span>FLD -&gt; RBU(くら)</span>
    <span class="steps">[LU:(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="fld3,rdb0,drf4">
    <span>FLD -&gt; RDB(くり)</span>
    <span class="steps">[L'BU':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="fld3,ruf0,drf4">
    <span>FLD -&gt; RUF(くれ)</span>
    <span class="steps">[L:RUR',D2]</span>
  </div>
  <h3>FUL(け)</h3>
  <div class="to" data-visibles="ful3,ubl0,drf4">
    <span>FUL -&gt; UBL(けあ)</span>
    <span class="steps">[L',UR2U']</span>
  </div>
  <div class="to" data-visibles="ful3,dlb0,drf4">
    <span>FUL -&gt; DLB(けい)</span>
    <span class="steps">[U':D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ful3,dfl0,drf4">
    <span>FUL -&gt; DFL(けう)</span>
    <span class="steps">[U':D,RUR']</span>
  </div>
  <div class="to" data-visibles="ful3,blu0,drf4">
    <span>FUL -&gt; BLU(けか)</span>
    <span class="steps">[LU':RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="ful3,bdl0,drf4">
    <span>FUL -&gt; BDL(けき)</span>
    <span class="steps">[L':UR2U',L2]</span>
  </div>
  <div class="to" data-visibles="ful3,fld0,drf4">
    <span>FUL -&gt; FLD(けく)</span>
    <span class="steps">[L'U':U',R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="ful3,bur0,drf4">
    <span>FUL -&gt; BUR(けさ)</span>
    <span class="steps">[U':R'D'R,U2]</span>
  </div>
  <div class="to" data-visibles="ful3,brd0,drf4">
    <span>FUL -&gt; BRD(けし)</span>
    <span class="steps">[L2(u)R2:UL'U',R']</span>
  </div>
  <div class="to" data-visibles="ful3,fru0,drf4">
    <span>FUL -&gt; FRU(けせ)</span>
    <span class="steps">[L:(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="ful3,urb0,drf4">
    <span>FUL -&gt; URB(けた)</span>
    <span class="steps">[LU:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="ful3,dbr0,drf4">
    <span>FUL -&gt; DBR(けち)</span>
    <span class="steps">[U':D',RUR']</span>
  </div>
  <div class="to" data-visibles="ful3,ufr0,drf4">
    <span>FUL -&gt; UFR(けて)</span>
    <span class="steps">[L:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="ful3,lub0,drf4">
    <span>FUL -&gt; LUB(けな)</span>
    <span class="steps">[U':R'D'R,U']</span>
  </div>
  <div class="to" data-visibles="ful3,lbd0,drf4">
    <span>FUL -&gt; LBD(けに)</span>
    <span class="steps">[UL:U'RU,L]</span>
  </div>
  <div class="to" data-visibles="ful3,ldf0,drf4">
    <span>FUL -&gt; LDF(けぬ)</span>
    <span class="steps">[UL:U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="ful3,rbu0,drf4">
    <span>FUL -&gt; RBU(けら)</span>
    <span class="steps">[LU:(u)L'U'L(u'),D]</span>
  </div>
  <div class="to" data-visibles="ful3,rdb0,drf4">
    <span>FUL -&gt; RDB(けり)</span>
    <span class="steps">[LBU:RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="ful3,ruf0,drf4">
    <span>FUL -&gt; RUF(けれ)</span>
    <span class="steps">[U':R'D'R,U]</span>
  </div>
  <h3>BUR(さ)</h3>
  <div class="to" data-visibles="bur3,ubl0,drf4">
    <span>BUR -&gt; UBL(さあ)</span>
    <span class="steps">[L2U:D,RUR']</span>
  </div>
  <div class="to" data-visibles="bur3,dlb0,drf4">
    <span>BUR -&gt; DLB(さい)</span>
    <span class="steps">[D2,(u)L'UL(u')]</span>
  </div>
  <div class="to" data-visibles="bur3,dfl0,drf4">
    <span>BUR -&gt; DFL(さう)</span>
    <span class="steps">[D,(u)L'UL(u')]</span>
  </div>
  <div class="to" data-visibles="bur3,ulf0,drf4">
    <span>BUR -&gt; ULF(さえ)</span>
    <span class="steps">[B:L,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="bur3,blu0,drf4">
    <span>BUR -&gt; BLU(さか)</span>
    <span class="steps">[(u):UL'U',R']</span>
  </div>
  <div class="to" data-visibles="bur3,bdl0,drf4">
    <span>BUR -&gt; BDL(さき)</span>
    <span class="steps">[(u):UL'U',R2]</span>
  </div>
  <div class="to" data-visibles="bur3,fld0,drf4">
    <span>BUR -&gt; FLD(さく)</span>
    <span class="steps">[LU:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="bur3,ful0,drf4">
    <span>BUR -&gt; FUL(さけ)</span>
    <span class="steps">[U':U2,R'D'R]</span>
  </div>
  <div class="to" data-visibles="bur3,brd0,drf4">
    <span>BUR -&gt; BRD(さし)</span>
    <span class="steps">[(u):UL'U',R]</span>
  </div>
  <div class="to" data-visibles="bur3,fru0,drf4">
    <span>BUR -&gt; FRU(させ)</span>
    <span class="steps">[B:L'D2L,U2]</span>
  </div>
  <div class="to" data-visibles="bur3,dbr0,drf4">
    <span>BUR -&gt; DBR(さち)</span>
    <span class="steps">[D',(u)L'UL(u')]</span>
  </div>
  <div class="to" data-visibles="bur3,ufr0,drf4">
    <span>BUR -&gt; UFR(さて)</span>
    <span class="steps">[BL':RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="bur3,lub0,drf4">
    <span>BUR -&gt; LUB(さな)</span>
    <span class="steps">[U:R'D'R,U]</span>
  </div>
  <div class="to" data-visibles="bur3,lbd0,drf4">
    <span>BUR -&gt; LBD(さに)</span>
    <span class="steps">[BU2:D',(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="bur3,ldf0,drf4">
    <span>BUR -&gt; LDF(さぬ)</span>
    <span class="steps">[L2(u):UL'U',R']</span>
  </div>
  <div class="to" data-visibles="bur3,lfu0,drf4">
    <span>BUR -&gt; LFU(さね)</span>
    <span class="steps">[B:L'D2L,U]</span>
  </div>
  <div class="to" data-visibles="bur3,rdb0,drf4">
    <span>BUR -&gt; RDB(さり)</span>
    <span class="steps">[BLU':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="bur3,ruf0,drf4">
    <span>BUR -&gt; RUF(され)</span>
    <span class="steps">[U,R'D'R]</span>
  </div>
  <h3>BRD(し)</h3>
  <div class="to" data-visibles="brd3,ubl0,drf4">
    <span>BRD -&gt; UBL(しあ)</span>
    <span class="steps">[LBU':U2,R'D'R]</span>
  </div>
  <div class="to" data-visibles="brd3,dlb0,drf4">
    <span>BRD -&gt; DLB(しい)</span>
    <span class="steps">[L(u)R':R2,UL'U']</span>
  </div>
  <div class="to" data-visibles="brd3,dfl0,drf4">
    <span>BRD -&gt; DFL(しう)</span>
    <span class="steps">[BU:D,RUR']</span>
  </div>
  <div class="to" data-visibles="brd3,ulf0,drf4">
    <span>BRD -&gt; ULF(しえ)</span>
    <span class="steps">[B2:L,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="brd3,blu0,drf4">
    <span>BRD -&gt; BLU(しか)</span>
    <span class="steps">[(u)R':R2,UL'U']</span>
  </div>
  <div class="to" data-visibles="brd3,bdl0,drf4">
    <span>BRD -&gt; BDL(しき)</span>
    <span class="steps">[(u)R:UL'U',R]</span>
  </div>
  <div class="to" data-visibles="brd3,fld0,drf4">
    <span>BRD -&gt; FLD(しく)</span>
    <span class="steps">[L2(u)R':R2,UL'U']</span>
  </div>
  <div class="to" data-visibles="brd3,ful0,drf4">
    <span>BRD -&gt; FUL(しけ)</span>
    <span class="steps">[L2(u)R2:R',UL'U']</span>
  </div>
  <div class="to" data-visibles="brd3,bur0,drf4">
    <span>BRD -&gt; BUR(しさ)</span>
    <span class="steps">[(u):R,UL'U']</span>
  </div>
  <div class="to" data-visibles="brd3,fru0,drf4">
    <span>BRD -&gt; FRU(しせ)</span>
    <span class="steps">[B2:L'D2L,U2]</span>
  </div>
  <div class="to" data-visibles="brd3,urb0,drf4">
    <span>BRD -&gt; URB(した)</span>
    <span class="steps">[U2B2:L,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="brd3,ufr0,drf4">
    <span>BRD -&gt; UFR(して)</span>
    <span class="steps">[B2L:U',R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="brd3,lub0,drf4">
    <span>BRD -&gt; LUB(しな)</span>
    <span class="steps">[BU:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="brd3,lbd0,drf4">
    <span>BRD -&gt; LBD(しに)</span>
    <span class="steps">[BU:D',RUR']</span>
  </div>
  <div class="to" data-visibles="brd3,ldf0,drf4">
    <span>BRD -&gt; LDF(しぬ)</span>
    <span class="steps">[L'U(u)R:UL'U',R2]</span>
  </div>
  <div class="to" data-visibles="brd3,lfu0,drf4">
    <span>BRD -&gt; LFU(しね)</span>
    <span class="steps">[B2:L'D2L,U]</span>
  </div>
  <div class="to" data-visibles="brd3,rbu0,drf4">
    <span>BRD -&gt; RBU(しら)</span>
    <span class="steps">[U'(u)R:UL'U',R2]</span>
  </div>
  <div class="to" data-visibles="brd3,ruf0,drf4">
    <span>BRD -&gt; RUF(しれ)</span>
    <span class="steps">[B:U,R'D'R]</span>
  </div>
  <h3>FRU(せ)</h3>
  <div class="to" data-visibles="fru3,ubl0,drf4">
    <span>FRU -&gt; UBL(せあ)</span>
    <span class="steps">[L2:D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,dlb0,drf4">
    <span>FRU -&gt; DLB(せい)</span>
    <span class="steps">[D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,dfl0,drf4">
    <span>FRU -&gt; DFL(せう)</span>
    <span class="steps">[D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,ulf0,drf4">
    <span>FRU -&gt; ULF(せえ)</span>
    <span class="steps">[L':U2,L'D2L]</span>
  </div>
  <div class="to" data-visibles="fru3,blu0,drf4">
    <span>FRU -&gt; BLU(せか)</span>
    <span class="steps">[U2,L'D2L]</span>
  </div>
  <div class="to" data-visibles="fru3,bdl0,drf4">
    <span>FRU -&gt; BDL(せき)</span>
    <span class="steps">[U2(u)R':UL'U',R']</span>
  </div>
  <div class="to" data-visibles="fru3,fld0,drf4">
    <span>FRU -&gt; FLD(せく)</span>
    <span class="steps">[L:D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,ful0,drf4">
    <span>FRU -&gt; FUL(せけ)</span>
    <span class="steps">[L:D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,bur0,drf4">
    <span>FRU -&gt; BUR(せさ)</span>
    <span class="steps">[B:U2,L'D2L]</span>
  </div>
  <div class="to" data-visibles="fru3,brd0,drf4">
    <span>FRU -&gt; BRD(せし)</span>
    <span class="steps">[B2:U2,L'D2L]</span>
  </div>
  <div class="to" data-visibles="fru3,urb0,drf4">
    <span>FRU -&gt; URB(せた)</span>
    <span class="steps">[B2:D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,dbr0,drf4">
    <span>FRU -&gt; DBR(せち)</span>
    <span class="steps">[D',(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,lub0,drf4">
    <span>FRU -&gt; LUB(せな)</span>
    <span class="steps">[B:D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,lbd0,drf4">
    <span>FRU -&gt; LBD(せに)</span>
    <span class="steps">[B:D',(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="fru3,ldf0,drf4">
    <span>FRU -&gt; LDF(せぬ)</span>
    <span class="steps">[L'U:U,L'D2L]</span>
  </div>
  <div class="to" data-visibles="fru3,lfu0,drf4">
    <span>FRU -&gt; LFU(せね)</span>
    <span class="steps">[U:U,L'D2L]</span>
  </div>
  <div class="to" data-visibles="fru3,rbu0,drf4">
    <span>FRU -&gt; RBU(せら)</span>
    <span class="steps">[U2:L'D2L,U]</span>
  </div>
  <div class="to" data-visibles="fru3,rdb0,drf4">
    <span>FRU -&gt; RDB(せり)</span>
    <span class="steps">[B':D2,(u)L'U'L(u')]</span>
  </div>
  <h3>URB(た)</h3>
  <div class="to" data-visibles="urb3,ubl0,drf4">
    <span>URB -&gt; UBL(たあ)</span>
    <span class="steps">[L2U:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,dlb0,drf4">
    <span>URB -&gt; DLB(たい)</span>
    <span class="steps">[U:D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,dfl0,drf4">
    <span>URB -&gt; DFL(たう)</span>
    <span class="steps">[U:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,ulf0,drf4">
    <span>URB -&gt; ULF(たえ)</span>
    <span class="steps">[U':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="urb3,blu0,drf4">
    <span>URB -&gt; BLU(たか)</span>
    <span class="steps">[L'U:D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,bdl0,drf4">
    <span>URB -&gt; BDL(たき)</span>
    <span class="steps">[LU2:U',R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="urb3,fld0,drf4">
    <span>URB -&gt; FLD(たく)</span>
    <span class="steps">[L'U':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="urb3,ful0,drf4">
    <span>URB -&gt; FUL(たけ)</span>
    <span class="steps">[LU:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,brd0,drf4">
    <span>URB -&gt; BRD(たし)</span>
    <span class="steps">[U2B2:RU'R'URU'R'URU'R'U,L]</span>
  </div>
  <div class="to" data-visibles="urb3,fru0,drf4">
    <span>URB -&gt; FRU(たせ)</span>
    <span class="steps">[B2:(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="urb3,dbr0,drf4">
    <span>URB -&gt; DBR(たち)</span>
    <span class="steps">[U:D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,ufr0,drf4">
    <span>URB -&gt; UFR(たて)</span>
    <span class="steps">[U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="urb3,lub0,drf4">
    <span>URB -&gt; LUB(たな)</span>
    <span class="steps">[BU2:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,lbd0,drf4">
    <span>URB -&gt; LBD(たに)</span>
    <span class="steps">[BU2:D',RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,ldf0,drf4">
    <span>URB -&gt; LDF(たぬ)</span>
    <span class="steps">[BL:U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="urb3,lfu0,drf4">
    <span>URB -&gt; LFU(たね)</span>
    <span class="steps">[BL:U'RU,L']</span>
  </div>
  <div class="to" data-visibles="urb3,rdb0,drf4">
    <span>URB -&gt; RDB(たり)</span>
    <span class="steps">[(r):D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="urb3,ruf0,drf4">
    <span>URB -&gt; RUF(たれ)</span>
    <span class="steps">[B2:RUR',D2]</span>
  </div>
  <h3>DBR(ち)</h3>
  <div class="to" data-visibles="dbr3,ubl0,drf4">
    <span>DBR -&gt; UBL(ちあ)</span>
    <span class="steps">[(u):R2,U'L2U]</span>
  </div>
  <div class="to" data-visibles="dbr3,dlb0,drf4">
    <span>DBR -&gt; DLB(ちい)</span>
    <span class="steps">[L2U':RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,dfl0,drf4">
    <span>DBR -&gt; DFL(ちう)</span>
    <span class="steps">[BU:D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="dbr3,ulf0,drf4">
    <span>DBR -&gt; ULF(ちえ)</span>
    <span class="steps">[U':RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,blu0,drf4">
    <span>DBR -&gt; BLU(ちか)</span>
    <span class="steps">[RU2R',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,bdl0,drf4">
    <span>DBR -&gt; BDL(ちき)</span>
    <span class="steps">[LU2:RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,fld0,drf4">
    <span>DBR -&gt; FLD(ちく)</span>
    <span class="steps">[L'U':RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,ful0,drf4">
    <span>DBR -&gt; FUL(ちけ)</span>
    <span class="steps">[U':RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,bur0,drf4">
    <span>DBR -&gt; BUR(ちさ)</span>
    <span class="steps">[(u)L'UL(u'),D']</span>
  </div>
  <div class="to" data-visibles="dbr3,fru0,drf4">
    <span>DBR -&gt; FRU(ちせ)</span>
    <span class="steps">[(u)L'U'L(u'),D']</span>
  </div>
  <div class="to" data-visibles="dbr3,urb0,drf4">
    <span>DBR -&gt; URB(ちた)</span>
    <span class="steps">[U:RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,ufr0,drf4">
    <span>DBR -&gt; UFR(ちて)</span>
    <span class="steps">[RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,lub0,drf4">
    <span>DBR -&gt; LUB(ちな)</span>
    <span class="steps">[F'U2F,D']</span>
  </div>
  <div class="to" data-visibles="dbr3,lbd0,drf4">
    <span>DBR -&gt; LBD(ちに)</span>
    <span class="steps">[(u)R':R',U'L2U]</span>
  </div>
  <div class="to" data-visibles="dbr3,ldf0,drf4">
    <span>DBR -&gt; LDF(ちぬ)</span>
    <span class="steps">[L'U':(u)L'U'L(u'),D']</span>
  </div>
  <div class="to" data-visibles="dbr3,lfu0,drf4">
    <span>DBR -&gt; LFU(ちね)</span>
    <span class="steps">[RU'R',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,rbu0,drf4">
    <span>DBR -&gt; RBU(ちら)</span>
    <span class="steps">[U2:RU'R',D']</span>
  </div>
  <div class="to" data-visibles="dbr3,ruf0,drf4">
    <span>DBR -&gt; RUF(ちれ)</span>
    <span class="steps">[RUR',D']</span>
  </div>
  <h3>UFR(て)</h3>
  <div class="to" data-visibles="ufr3,ubl0,drf4">
    <span>UFR -&gt; UBL(てあ)</span>
    <span class="steps">[U2:U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="ufr3,dlb0,drf4">
    <span>UFR -&gt; DLB(てい)</span>
    <span class="steps">[D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,dfl0,drf4">
    <span>UFR -&gt; DFL(てう)</span>
    <span class="steps">[D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,ulf0,drf4">
    <span>UFR -&gt; ULF(てえ)</span>
    <span class="steps">[U':U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="ufr3,blu0,drf4">
    <span>UFR -&gt; BLU(てか)</span>
    <span class="steps">[L:R'F'R2FR,U']</span>
  </div>
  <div class="to" data-visibles="ufr3,bdl0,drf4">
    <span>UFR -&gt; BDL(てき)</span>
    <span class="steps">[L':D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,fld0,drf4">
    <span>UFR -&gt; FLD(てく)</span>
    <span class="steps">[L'U':U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="ufr3,ful0,drf4">
    <span>UFR -&gt; FUL(てけ)</span>
    <span class="steps">[L:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,bur0,drf4">
    <span>UFR -&gt; BUR(てさ)</span>
    <span class="steps">[BL':D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,brd0,drf4">
    <span>UFR -&gt; BRD(てし)</span>
    <span class="steps">[B2L:R'F'R2FR,U']</span>
  </div>
  <div class="to" data-visibles="ufr3,urb0,drf4">
    <span>UFR -&gt; URB(てた)</span>
    <span class="steps">[R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="ufr3,dbr0,drf4">
    <span>UFR -&gt; DBR(てち)</span>
    <span class="steps">[D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,lub0,drf4">
    <span>UFR -&gt; LUB(てな)</span>
    <span class="steps">[B':R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="ufr3,lbd0,drf4">
    <span>UFR -&gt; LBD(てに)</span>
    <span class="steps">[B':R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="ufr3,ldf0,drf4">
    <span>UFR -&gt; LDF(てぬ)</span>
    <span class="steps">[LB:D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="ufr3,lfu0,drf4">
    <span>UFR -&gt; LFU(てね)</span>
    <span class="steps">[L'B':R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="ufr3,rbu0,drf4">
    <span>UFR -&gt; RBU(てら)</span>
    <span class="steps">[B:R'F'R2FR,U2]</span>
  </div>
  <div class="to" data-visibles="ufr3,rdb0,drf4">
    <span>UFR -&gt; RDB(てり)</span>
    <span class="steps">[B:R'F'R2FR,U]</span>
  </div>
  <h3>LUB(な)</h3>
  <div class="to" data-visibles="lub3,dlb0,drf4">
    <span>LUB -&gt; DLB(ない)</span>
    <span class="steps">[D2,F'U2F]</span>
  </div>
  <div class="to" data-visibles="lub3,dfl0,drf4">
    <span>LUB -&gt; DFL(なう)</span>
    <span class="steps">[D,F'U2F]</span>
  </div>
  <div class="to" data-visibles="lub3,ulf0,drf4">
    <span>LUB -&gt; ULF(なえ)</span>
    <span class="steps">[BU':RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="lub3,bdl0,drf4">
    <span>LUB -&gt; BDL(なき)</span>
    <span class="steps">[U'L:L2,UR2U']</span>
  </div>
  <div class="to" data-visibles="lub3,fld0,drf4">
    <span>LUB -&gt; FLD(なく)</span>
    <span class="steps">[LU':D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="lub3,ful0,drf4">
    <span>LUB -&gt; FUL(なけ)</span>
    <span class="steps">[U':U',R'D'R]</span>
  </div>
  <div class="to" data-visibles="lub3,bur0,drf4">
    <span>LUB -&gt; BUR(なさ)</span>
    <span class="steps">[U:U,R'D'R]</span>
  </div>
  <div class="to" data-visibles="lub3,brd0,drf4">
    <span>LUB -&gt; BRD(なし)</span>
    <span class="steps">[BU:RUR',D2]</span>
  </div>
  <div class="to" data-visibles="lub3,fru0,drf4">
    <span>LUB -&gt; FRU(なせ)</span>
    <span class="steps">[B:(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="lub3,urb0,drf4">
    <span>LUB -&gt; URB(なた)</span>
    <span class="steps">[BU2:RUR',D2]</span>
  </div>
  <div class="to" data-visibles="lub3,dbr0,drf4">
    <span>LUB -&gt; DBR(なち)</span>
    <span class="steps">[D',F'U2F]</span>
  </div>
  <div class="to" data-visibles="lub3,ufr0,drf4">
    <span>LUB -&gt; UFR(なて)</span>
    <span class="steps">[B':U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="lub3,lbd0,drf4">
    <span>LUB -&gt; LBD(なに)</span>
    <span class="steps">[L:U'RU,L]</span>
  </div>
  <div class="to" data-visibles="lub3,ldf0,drf4">
    <span>LUB -&gt; LDF(なぬ)</span>
    <span class="steps">[L:U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="lub3,lfu0,drf4">
    <span>LUB -&gt; LFU(なね)</span>
    <span class="steps">[L,U'RU]</span>
  </div>
  <div class="to" data-visibles="lub3,rbu0,drf4">
    <span>LUB -&gt; RBU(なら)</span>
    <span class="steps">[BU2:RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="lub3,rdb0,drf4">
    <span>LUB -&gt; RDB(なり)</span>
    <span class="steps">[(r):D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="lub3,ruf0,drf4">
    <span>LUB -&gt; RUF(なれ)</span>
    <span class="steps">[U2,R'D'R]</span>
  </div>
  <h3>LBD(に)</h3>
  <div class="to" data-visibles="lbd3,ubl0,drf4">
    <span>LBD -&gt; UBL(にあ)</span>
    <span class="steps">[(u):R',U'L2U]</span>
  </div>
  <div class="to" data-visibles="lbd3,dfl0,drf4">
    <span>LBD -&gt; DFL(にう)</span>
    <span class="steps">[B':UR2U',L2]</span>
  </div>
  <div class="to" data-visibles="lbd3,ulf0,drf4">
    <span>LBD -&gt; ULF(にえ)</span>
    <span class="steps">[B'U':U',R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="lbd3,blu0,drf4">
    <span>LBD -&gt; BLU(にか)</span>
    <span class="steps">[U':L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="lbd3,fld0,drf4">
    <span>LBD -&gt; FLD(にく)</span>
    <span class="steps">[LU2:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="lbd3,ful0,drf4">
    <span>LBD -&gt; FUL(にけ)</span>
    <span class="steps">[UL:L,U'RU]</span>
  </div>
  <div class="to" data-visibles="lbd3,bur0,drf4">
    <span>LBD -&gt; BUR(にさ)</span>
    <span class="steps">[BU2:(u)L'U'L(u'),D']</span>
  </div>
  <div class="to" data-visibles="lbd3,brd0,drf4">
    <span>LBD -&gt; BRD(にし)</span>
    <span class="steps">[BU:RUR',D']</span>
  </div>
  <div class="to" data-visibles="lbd3,fru0,drf4">
    <span>LBD -&gt; FRU(にせ)</span>
    <span class="steps">[B:(u)L'U'L(u'),D']</span>
  </div>
  <div class="to" data-visibles="lbd3,urb0,drf4">
    <span>LBD -&gt; URB(にた)</span>
    <span class="steps">[BU2:RUR',D']</span>
  </div>
  <div class="to" data-visibles="lbd3,dbr0,drf4">
    <span>LBD -&gt; DBR(にち)</span>
    <span class="steps">[(u)R':U'L2U,R']</span>
  </div>
  <div class="to" data-visibles="lbd3,ufr0,drf4">
    <span>LBD -&gt; UFR(にて)</span>
    <span class="steps">[B':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="lbd3,lub0,drf4">
    <span>LBD -&gt; LUB(にな)</span>
    <span class="steps">[L:L,U'RU]</span>
  </div>
  <div class="to" data-visibles="lbd3,ldf0,drf4">
    <span>LBD -&gt; LDF(にぬ)</span>
    <span class="steps">[L':L',U'RU]</span>
  </div>
  <div class="to" data-visibles="lbd3,lfu0,drf4">
    <span>LBD -&gt; LFU(にね)</span>
    <span class="steps">[L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="lbd3,rbu0,drf4">
    <span>LBD -&gt; RBU(にら)</span>
    <span class="steps">[(u)R':U'L2U,R2]</span>
  </div>
  <div class="to" data-visibles="lbd3,rdb0,drf4">
    <span>LBD -&gt; RDB(にり)</span>
    <span class="steps">[BU:RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="lbd3,ruf0,drf4">
    <span>LBD -&gt; RUF(にれ)</span>
    <span class="steps">[B:RUR',D']</span>
  </div>
  <h3>LDF(ぬ)</h3>
  <div class="to" data-visibles="ldf3,ubl0,drf4">
    <span>LDF -&gt; UBL(ぬあ)</span>
    <span class="steps">[BL2:L,U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,dlb0,drf4">
    <span>LDF -&gt; DLB(ぬい)</span>
    <span class="steps">[B'L:L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,ulf0,drf4">
    <span>LDF -&gt; ULF(ぬえ)</span>
    <span class="steps">[UBL2:L,U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,blu0,drf4">
    <span>LDF -&gt; BLU(ぬか)</span>
    <span class="steps">[U':L',U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,bdl0,drf4">
    <span>LDF -&gt; BDL(ぬき)</span>
    <span class="steps">[L'U':D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="ldf3,ful0,drf4">
    <span>LDF -&gt; FUL(ぬけ)</span>
    <span class="steps">[UL:L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,bur0,drf4">
    <span>LDF -&gt; BUR(ぬさ)</span>
    <span class="steps">[L2(u):R',UL'U']</span>
  </div>
  <div class="to" data-visibles="ldf3,brd0,drf4">
    <span>LDF -&gt; BRD(ぬし)</span>
    <span class="steps">[L'U(u)R:R2,UL'U']</span>
  </div>
  <div class="to" data-visibles="ldf3,fru0,drf4">
    <span>LDF -&gt; FRU(ぬせ)</span>
    <span class="steps">[L'U:L'D2L,U]</span>
  </div>
  <div class="to" data-visibles="ldf3,urb0,drf4">
    <span>LDF -&gt; URB(ぬた)</span>
    <span class="steps">[BL:L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,dbr0,drf4">
    <span>LDF -&gt; DBR(ぬち)</span>
    <span class="steps">[L'U':D',(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="ldf3,ufr0,drf4">
    <span>LDF -&gt; UFR(ぬて)</span>
    <span class="steps">[LB:RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="ldf3,lub0,drf4">
    <span>LDF -&gt; LUB(ぬな)</span>
    <span class="steps">[L:L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,lbd0,drf4">
    <span>LDF -&gt; LBD(ぬに)</span>
    <span class="steps">[L':U'RU,L']</span>
  </div>
  <div class="to" data-visibles="ldf3,lfu0,drf4">
    <span>LDF -&gt; LFU(ぬね)</span>
    <span class="steps">[L',U'RU]</span>
  </div>
  <div class="to" data-visibles="ldf3,rbu0,drf4">
    <span>LDF -&gt; RBU(ぬら)</span>
    <span class="steps">[L'U:L'D2L,U2]</span>
  </div>
  <div class="to" data-visibles="ldf3,rdb0,drf4">
    <span>LDF -&gt; RDB(ぬり)</span>
    <span class="steps">[L'B'U':D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="ldf3,ruf0,drf4">
    <span>LDF -&gt; RUF(ぬれ)</span>
    <span class="steps">[L2:U2,R'D'R]</span>
  </div>
  <h3>LFU(ね)</h3>
  <div class="to" data-visibles="lfu3,ubl0,drf4">
    <span>LFU -&gt; UBL(ねあ)</span>
    <span class="steps">[BL2:L2,U'RU]</span>
  </div>
  <div class="to" data-visibles="lfu3,dlb0,drf4">
    <span>LFU -&gt; DLB(ねい)</span>
    <span class="steps">[D2,RU'R']</span>
  </div>
  <div class="to" data-visibles="lfu3,dfl0,drf4">
    <span>LFU -&gt; DFL(ねう)</span>
    <span class="steps">[D,RU'R']</span>
  </div>
  <div class="to" data-visibles="lfu3,blu0,drf4">
    <span>LFU -&gt; BLU(ねか)</span>
    <span class="steps">[U,L'D2L]</span>
  </div>
  <div class="to" data-visibles="lfu3,bdl0,drf4">
    <span>LFU -&gt; BDL(ねき)</span>
    <span class="steps">[L'U2:D,RUR']</span>
  </div>
  <div class="to" data-visibles="lfu3,fld0,drf4">
    <span>LFU -&gt; FLD(ねく)</span>
    <span class="steps">[UL':L2,RU'R'URU'R'URU'R'U]</span>
  </div>
  <div class="to" data-visibles="lfu3,bur0,drf4">
    <span>LFU -&gt; BUR(ねさ)</span>
    <span class="steps">[B:U,L'D2L]</span>
  </div>
  <div class="to" data-visibles="lfu3,brd0,drf4">
    <span>LFU -&gt; BRD(ねし)</span>
    <span class="steps">[B2:U,L'D2L]</span>
  </div>
  <div class="to" data-visibles="lfu3,fru0,drf4">
    <span>LFU -&gt; FRU(ねせ)</span>
    <span class="steps">[U:L'D2L,U]</span>
  </div>
  <div class="to" data-visibles="lfu3,urb0,drf4">
    <span>LFU -&gt; URB(ねた)</span>
    <span class="steps">[BL:L',U'RU]</span>
  </div>
  <div class="to" data-visibles="lfu3,dbr0,drf4">
    <span>LFU -&gt; DBR(ねち)</span>
    <span class="steps">[D',RU'R']</span>
  </div>
  <div class="to" data-visibles="lfu3,ufr0,drf4">
    <span>LFU -&gt; UFR(ねて)</span>
    <span class="steps">[L'B':U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="lfu3,lub0,drf4">
    <span>LFU -&gt; LUB(ねな)</span>
    <span class="steps">[U'RU,L]</span>
  </div>
  <div class="to" data-visibles="lfu3,lbd0,drf4">
    <span>LFU -&gt; LBD(ねに)</span>
    <span class="steps">[U'RU,L2]</span>
  </div>
  <div class="to" data-visibles="lfu3,ldf0,drf4">
    <span>LFU -&gt; LDF(ねぬ)</span>
    <span class="steps">[U'RU,L']</span>
  </div>
  <div class="to" data-visibles="lfu3,rbu0,drf4">
    <span>LFU -&gt; RBU(ねら)</span>
    <span class="steps">[U:L'D2L,U2]</span>
  </div>
  <div class="to" data-visibles="lfu3,rdb0,drf4">
    <span>LFU -&gt; RDB(ねり)</span>
    <span class="steps">[U'B':D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="lfu3,ruf0,drf4">
    <span>LFU -&gt; RUF(ねれ)</span>
    <span class="steps">[L'B:RUR',D2]</span>
  </div>
  <h3>RBU(ら)</h3>
  <div class="to" data-visibles="rbu3,ubl0,drf4">
    <span>RBU -&gt; UBL(らあ)</span>
    <span class="steps">[(u):R,U'L2U]</span>
  </div>
  <div class="to" data-visibles="rbu3,dlb0,drf4">
    <span>RBU -&gt; DLB(らい)</span>
    <span class="steps">[U2:D2,RU'R']</span>
  </div>
  <div class="to" data-visibles="rbu3,dfl0,drf4">
    <span>RBU -&gt; DFL(らう)</span>
    <span class="steps">[U2:D,RU'R']</span>
  </div>
  <div class="to" data-visibles="rbu3,ulf0,drf4">
    <span>RBU -&gt; ULF(らえ)</span>
    <span class="steps">[BU':U',R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rbu3,blu0,drf4">
    <span>RBU -&gt; BLU(らか)</span>
    <span class="steps">[U',L'D2L]</span>
  </div>
  <div class="to" data-visibles="rbu3,bdl0,drf4">
    <span>RBU -&gt; BDL(らき)</span>
    <span class="steps">[L'U:D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="rbu3,fld0,drf4">
    <span>RBU -&gt; FLD(らく)</span>
    <span class="steps">[LU:D2,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="rbu3,ful0,drf4">
    <span>RBU -&gt; FUL(らけ)</span>
    <span class="steps">[LU:D,(u)L'U'L(u')]</span>
  </div>
  <div class="to" data-visibles="rbu3,brd0,drf4">
    <span>RBU -&gt; BRD(らし)</span>
    <span class="steps">[U'(u)R:R2,UL'U']</span>
  </div>
  <div class="to" data-visibles="rbu3,fru0,drf4">
    <span>RBU -&gt; FRU(らせ)</span>
    <span class="steps">[U2:U,L'D2L]</span>
  </div>
  <div class="to" data-visibles="rbu3,dbr0,drf4">
    <span>RBU -&gt; DBR(らち)</span>
    <span class="steps">[U2:D',RU'R']</span>
  </div>
  <div class="to" data-visibles="rbu3,ufr0,drf4">
    <span>RBU -&gt; UFR(らて)</span>
    <span class="steps">[B:U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rbu3,lub0,drf4">
    <span>RBU -&gt; LUB(らな)</span>
    <span class="steps">[BU2:D2,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="rbu3,lbd0,drf4">
    <span>RBU -&gt; LBD(らに)</span>
    <span class="steps">[(u)R':R2,U'L2U]</span>
  </div>
  <div class="to" data-visibles="rbu3,ldf0,drf4">
    <span>RBU -&gt; LDF(らぬ)</span>
    <span class="steps">[L'U:U2,L'D2L]</span>
  </div>
  <div class="to" data-visibles="rbu3,lfu0,drf4">
    <span>RBU -&gt; LFU(らね)</span>
    <span class="steps">[U:U2,L'D2L]</span>
  </div>
  <div class="to" data-visibles="rbu3,rdb0,drf4">
    <span>RBU -&gt; RDB(らり)</span>
    <span class="steps">[BU:U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rbu3,ruf0,drf4">
    <span>RBU -&gt; RUF(られ)</span>
    <span class="steps">[B':RUR',D']</span>
  </div>
  <h3>RDB(り)</h3>
  <div class="to" data-visibles="rdb3,ubl0,drf4">
    <span>RDB -&gt; UBL(りあ)</span>
    <span class="steps">[U'BU':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rdb3,dlb0,drf4">
    <span>RDB -&gt; DLB(りい)</span>
    <span class="steps">[(r):RU'R'U2RUR',D]</span>
  </div>
  <div class="to" data-visibles="rdb3,dfl0,drf4">
    <span>RDB -&gt; DFL(りう)</span>
    <span class="steps">[BU:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="rdb3,ulf0,drf4">
    <span>RDB -&gt; ULF(りえ)</span>
    <span class="steps">[BU':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rdb3,blu0,drf4">
    <span>RDB -&gt; BLU(りか)</span>
    <span class="steps">[B'U:RUR',D2]</span>
  </div>
  <div class="to" data-visibles="rdb3,bdl0,drf4">
    <span>RDB -&gt; BDL(りき)</span>
    <span class="steps">[B'U2:(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="rdb3,fld0,drf4">
    <span>RDB -&gt; FLD(りく)</span>
    <span class="steps">[L'BU':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rdb3,ful0,drf4">
    <span>RDB -&gt; FUL(りけ)</span>
    <span class="steps">[LBU:D,RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="rdb3,bur0,drf4">
    <span>RDB -&gt; BUR(りさ)</span>
    <span class="steps">[BLU':U2,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rdb3,fru0,drf4">
    <span>RDB -&gt; FRU(りせ)</span>
    <span class="steps">[B':(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="rdb3,urb0,drf4">
    <span>RDB -&gt; URB(りた)</span>
    <span class="steps">[(r):RU'R'U2RUR',D']</span>
  </div>
  <div class="to" data-visibles="rdb3,ufr0,drf4">
    <span>RDB -&gt; UFR(りて)</span>
    <span class="steps">[B:U,R'F'R2FR]</span>
  </div>
  <div class="to" data-visibles="rdb3,lub0,drf4">
    <span>RDB -&gt; LUB(りな)</span>
    <span class="steps">[(r):RU'R'U2RUR',D2]</span>
  </div>
  <div class="to" data-visibles="rdb3,lbd0,drf4">
    <span>RDB -&gt; LBD(りに)</span>
    <span class="steps">[BU:D',RU'R'U2RUR']</span>
  </div>
  <div class="to" data-visibles="rdb3,ldf0,drf4">
    <span>RDB -&gt; LDF(りぬ)</span>
    <span class="steps">[L'B'U':(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="rdb3,lfu0,drf4">
    <span>RDB -&gt; LFU(りね)</span>
    <span class="steps">[U'B':(u)L'U'L(u'),D2]</span>
  </div>
  <div class="to" data-visibles="rdb3,rbu0,drf4">
    <span>RDB -&gt; RBU(りら)</span>
    <span class="steps">[BU:R'F'R2FR,U]</span>
  </div>
  <div class="to" data-visibles="rdb3,ruf0,drf4">
    <span>RDB -&gt; RUF(りれ)</span>
    <span class="steps">[B':RUR',D2]</span>
  </div>
  <h3>RUF(れ)</h3>
  <div class="to" data-visibles="ruf3,ubl0,drf4">
    <span>RUF -&gt; UBL(れあ)</span>
    <span class="steps">[L2:D,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,dlb0,drf4">
    <span>RUF -&gt; DLB(れい)</span>
    <span class="steps">[D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,dfl0,drf4">
    <span>RUF -&gt; DFL(れう)</span>
    <span class="steps">[D,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,ulf0,drf4">
    <span>RUF -&gt; ULF(れえ)</span>
    <span class="steps">[L2:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,blu0,drf4">
    <span>RUF -&gt; BLU(れか)</span>
    <span class="steps">[L':D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,bdl0,drf4">
    <span>RUF -&gt; BDL(れき)</span>
    <span class="steps">[L':D,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,fld0,drf4">
    <span>RUF -&gt; FLD(れく)</span>
    <span class="steps">[L:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,ful0,drf4">
    <span>RUF -&gt; FUL(れけ)</span>
    <span class="steps">[U':U,R'D'R]</span>
  </div>
  <div class="to" data-visibles="ruf3,bur0,drf4">
    <span>RUF -&gt; BUR(れさ)</span>
    <span class="steps">[R'D'R,U]</span>
  </div>
  <div class="to" data-visibles="ruf3,brd0,drf4">
    <span>RUF -&gt; BRD(れし)</span>
    <span class="steps">[B:R'D'R,U]</span>
  </div>
  <div class="to" data-visibles="ruf3,urb0,drf4">
    <span>RUF -&gt; URB(れた)</span>
    <span class="steps">[B2:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,dbr0,drf4">
    <span>RUF -&gt; DBR(れち)</span>
    <span class="steps">[D',RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,lub0,drf4">
    <span>RUF -&gt; LUB(れな)</span>
    <span class="steps">[R'D'R,U2]</span>
  </div>
  <div class="to" data-visibles="ruf3,lbd0,drf4">
    <span>RUF -&gt; LBD(れに)</span>
    <span class="steps">[B:D',RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,ldf0,drf4">
    <span>RUF -&gt; LDF(れぬ)</span>
    <span class="steps">[L2:R'D'R,U2]</span>
  </div>
  <div class="to" data-visibles="ruf3,lfu0,drf4">
    <span>RUF -&gt; LFU(れね)</span>
    <span class="steps">[L'B:D2,RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,rbu0,drf4">
    <span>RUF -&gt; RBU(れら)</span>
    <span class="steps">[B':D',RUR']</span>
  </div>
  <div class="to" data-visibles="ruf3,rdb0,drf4">
    <span>RUF -&gt; RDB(れり)</span>
    <span class="steps">[B':D2,RUR']</span>
  </div>
</div>

<script src="/rubiks_cube/js/corner_3cycle.bundle.js"></script>
