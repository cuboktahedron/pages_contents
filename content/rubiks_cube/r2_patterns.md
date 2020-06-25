+++
date = "2020-06-07T17:14:48+09:00"
title = "R2手順"
Tags = ["rubiks_cube", "bld", "r2"]

customs = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/css/iziModal.css" integrity="sha256-m/nnXscwkcMbAFsUOys9WKr+MzlZz3q7EcJpkOxItaU=" crossorigin="anonymous" />',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/js/iziModal.js" integrity="sha256-rPSLT4QVhivrxPwK7xeqPLVWDDtc2YHkZHVxs1I6u9Y=" crossorigin="anonymous"></script>'
]

css = "r2_patterns.css"
+++

## 手順

- 赤：バッファ(DRF)
- 緑：移動先  
- 白：バッファのR列の対角(URB)

赤 ⇔ 緑の2点交換が起きる。  

BRDコーナー((し)、(ち)、(り))、UFRコーナー((せ)、(て)、(れ))の手順は、奇数回目の入れ替えの際の手順となっている。  
R2法は1手順ごとにR列が180°回転するため、偶数回目の場合は、(し)と(せ)、(ち)と(て)、(り)と(れ)の手順をそれぞれ入れ替えて実施する。

<div class="pattern">
  <p>UBL(あ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/ubl.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="ubl3,drf4,urb0">L'U'LUR2U'L'UL</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>DLB(い)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/dlb.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="dlb3,drf4,urb0">U'L2UL'U'LUR2U'L'ULU'L2U</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>DFL(う)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/dfl.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="dfl3,drf4,urb0">U'L2UR2U'L2U</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>ULF(え)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/ulf.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="ulf3,drf4,urb0">LU'L'UL'U'LUR2U'L'ULU'LUL'</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>BLU(か)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/blu.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="blu3,drf4,urb0">(u)RUR2U'R'F2RUR2U'R'(u')</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>BLD(き)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/bld.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="bld3,drf4,urb0">U'LUR2U'L'U</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>FLD(く)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/fld.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="fld3,drf4,urb0">U'L'UL'U'LUR2U'L'ULU'LU</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>FUL(け)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/ful.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="ful3,drf4,urb0">R'ULU'R2UL'U'R</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>BUR(さ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/bur.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="bur3,drf4"> U'L'ULU'L'UR2U'LUL'U'LU</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>BRD(し)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/brd.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="brd3,drf4,urb0">(u)RU'RD2R'URD2R2(u')R2</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>FRU(せ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/fru.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="fru3,drf4,urb0">R2(u)R2D2R'U'RD2R'UR'(u')</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>URB(た)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/urb.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="urb3,drf4">R2</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>DBR(ち)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/dbr.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="dbr3,drf4,urb0">R2U'L'U'LUR2U'L'ULR2U</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>UFR(て)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/ufr.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="ufr3,drf4,urb0">U'R2L'U'LUR2U'L'ULUR2</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>LUB(な)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/lub.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="lub3,drf4,urb0">U'L'UR2U'LU</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>LBD(に)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/lbd.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="lbd3,drf4,urb0">LU'L'UR2U'LUL'</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>LDF(ぬ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/ldf.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="ldf3,drf4,urb0">L2'U'L'UR2U'LUL2'</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>LFU(ね)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/lfu.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="lfu3,drf4,urb0">L'U'L'UR2U'LUL</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>RBU(ら)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/rbu.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="rbu3,drf4">U'LUL'U'LUR2U'L'ULU'L'U</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>RDB(り)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/rdb.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="rdb3,drf4,urb0">R'UR2U'R'F'RUR2U'R'F</p>
    </div>
  </div>
</div>
<div class="pattern">
  <p>RUF(れ)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/r2/ruf.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="ruf3,drf4,urb0">F'RUR2U'R'FRUR2U'R</p>
    </div>
  </div>
</div>

<script src="/rubiks_cube/js/m2_patterns.js"></script>
