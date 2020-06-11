+++
date = "2020-04-12T17:15:12+09:00"
title = "M2手順"
Tags = ["rubiks_cube", "bld", "m2"]

customs = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/css/iziModal.css" integrity="sha256-m/nnXscwkcMbAFsUOys9WKr+MzlZz3q7EcJpkOxItaU=" crossorigin="anonymous" />',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/js/iziModal.js" integrity="sha256-rPSLT4QVhivrxPwK7xeqPLVWDDtc2YHkZHVxs1I6u9Y=" crossorigin="anonymous"></script>'
]

css = "m2_patterns.css"
+++

## 手順

- 赤：バッファ(DF)
- 緑：移動先  
- 白：バッファの対角(UB)

赤 ⇔ 緑の2点交換が起きる。  
BDエッジ((い)、(ち))、FUエッジ((え)、(て))の手順は、奇数回目の入れ替えの際の手順となっている。  
M2法は1手順ごとにM列が180°回転するため、偶数回目の場合は、(い)と(え)、(ち)と(て)の手順をそれぞれ入れ替えて実施する。

<div class="pattern">
  <p>UB(あ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/ub.png"></div><div class="rc"><p class="steps" data-visibles="ub3,df4">M2</p></div>
  </div>
</div>
<div class="pattern">
  <p>UL(か)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/ul.png"></div><div class="rc"><p class="steps" data-visibles="ul3,df4,ub0">LU'L'UM2U'LUL'</p></div>
  </div>
</div>
<div class="pattern">
  <p>UR(さ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/ur.png"></div><div class="rc"><p class="steps" data-visibles="ur3,df4,ub0">R'URU'M2UR'U'R</p></div>
  </div>
</div>
<div class="pattern">
  <p>UF(え）</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/uf.png"></div><div class="rc"><p class="steps" data-visibles="uf3,df4,ub0">U2M'U2M'</p></div>
  </div>
</div>
<div class="pattern">
  <p>BU(た)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/bu.png"></div><div class="rc"><p class="steps" data-visibles="bu3,df4">F2M'UM'UM'U2MUMUMU2F2M2</p></div>
  </div>
</div>
<div class="pattern">
  <p>BR(し)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/br.png"></div><div class="rc"><p class="steps" data-visibles="br3,df4,ub0">UR'U'M2URU'</p></div>
  </div>
</div>
<div class="pattern">
  <p>BL(き)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/bl.png"></div><div class="rc"><p class="steps" data-visibles="bl3,df4,ub0">U'LUM2U'L'U</p></div>
  </div>
</div>
<div class="pattern">
  <p>BD(ち)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/bd.png"></div><div class="rc"><p class="steps" data-visibles="bd3,df4,ub0">M2FRUR'ERU'R'E'F'</p></div>
  </div>
</div>
<div class="pattern">
  <p>LU(な)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/lu.png"></div><div class="rc"><p class="steps" data-visibles="lu3,df4,ub0">BL'B'M2BLB'</p></div>
  </div>
</div>
<div class="pattern">
  <p>LB(に)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/lb.png"></div><div class="rc"><p class="steps" data-visibles="lb3,df4,ub0">L'BLB'M2BL'B'L</p></div>
  </div>
</div>
<div class="pattern">
  <p>LF(ね)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/lf.png"></div><div class="rc"><p class="steps" data-visibles="lf3,df4,ub0">B L2B'M2BL2B'</p></div>
  </div>
</div>
<div class="pattern">
  <p>LD(ぬ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/ld.png"></div><div class="rc"><p class="steps" data-visibles="ld3,df4,ub0">BLB'M2BL'B'</p></div>
  </div>
</div>
<div class="pattern">
  <p>RU(ら)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/ru.png"></div><div class="rc"><p class="steps" data-visibles="ru3,df4,ub0">B'RBM2B'R'B</p></div>
  </div>
</div>
<div class="pattern">
  <p>RF(れ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/rf.png"></div><div class="rc"><p class="steps" data-visibles="rf3,df4,ub0">B'R2BM2B'R2B</p></div>
  </div>
</div>
<div class="pattern">
  <p>RB(り)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/rb.png"></div><div class="rc"><p class="steps" data-visibles="rb3,df4,ub0">RB'R'BM2’B'RBR'</p></div>
  </div>
</div>
<div class="pattern">
  <p>RD(る)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/rd.png"></div><div class="rc"><p class="steps" data-visibles="rd3,df4,ub0">B'R'BM2B'RB</p></div>
  </div>
</div>
<div class="pattern">
  <p>FU(て)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/fu.png"></div><div class="rc"><p class="steps" data-visibles="fu3,df4,ub0">FERUR'E'RU'R'F'M2</p></div>
  </div>
</div>
<div class="pattern">
  <p>FL(け)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/fl.png"></div><div class="rc"><p class="steps" data-visibles="fl3,df4,ub0">U'L'UM2U'LU</p></div>
  </div>
</div>
<div class="pattern">
  <p>FR(せ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/fr.png"></div><div class="rc"><p class="steps" data-visibles="fr3,df4,ub0">URU'M2UR'U'</p></div>
  </div>
</div>
<div class="pattern">
  <p>DL(く)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/dl.png"></div><div class="rc"><p class="steps" data-visibles="dl3,df4,ub0">U'L2UM2U'L2U</p></div>
  </div>
</div>
<div class="pattern">
  <p>DR(す)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/dr.png"></div><div class="rc"><p class="steps" data-visibles="dr3,df4,ub0">U R2U'M2UR2U'</p></div>
  </div>
</div>
<div class="pattern">
  <p>DB(い)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/db.png"></div><div class="rc"><p class="steps" data-visibles="db3,df4,ub0">MU2MU2</p></div>
  </div>
</div>
<div class="pattern">
  <p>Parity</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/m2/parity.png"></div><div class="rc"><p class="steps" data-visibles="ul3,df4,ub0">D'L2DM2D'L2D</p></div>
  </div>
</div>

<script src="/rubiks_cube/js/m2_patterns.js"></script>
