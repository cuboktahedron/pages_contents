+++
date = "2020-05-03T22:01:12+09:00"
title = "OLD Pochman手順"
Tags = ["rubiks_cube", "bld", "old_pochmann"]

customs = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/css/iziModal.css" integrity="sha256-m/nnXscwkcMbAFsUOys9WKr+MzlZz3q7EcJpkOxItaU=" crossorigin="anonymous" />',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/js/iziModal.js" integrity="sha256-rPSLT4QVhivrxPwK7xeqPLVWDDtc2YHkZHVxs1I6u9Y=" crossorigin="anonymous"></script>'
]

css = "old_pochmann_patterns.css"
+++

## はじめに

Old pochmann法では以下の手順で2点交換を繰り返し揃えていく。

１．セットアップ  
２．2点交換  
３．逆セットアップ  

セットアップの際、バッファや副作用で入れ替わるピースを移動させないようにする必要がある。  
具体的にはコーナーのセットアップ手順では、U面、L面、B面、M面、S面を  
エッジのセットアップ手順では、U面、R面、F面、B面、S面をそれぞれ回転してはいけない。

## 手順

- 赤：バッファ
- 緑：移動先
- 白：副作用１
- 青：副作用２

赤 ⇔ 緑の 2 点交換が起きる。  
副作用が起きるピースは偶数回2点交換を行うと元に戻る


### Corner

<div class="pattern">
  <p>変形Y-perm</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/op/transformed-y-perm.png"></div><div class="rc"><p class="steps" data-visibles="rdf3,ulb4,ul0,ub1">RU'R'U'RUR'F'RUR'U'R'FR</p>
      <p class="explain">PLL(n15/Y-perm)の手順からFとF'のセットアップ、逆セットアップ手順をなくした手順になっている。</p>
    </div>
  </div>
</div>

### Edge

<div class="pattern">
  <p>T-perm</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/op/t-perm.png"></div><div class="rc"><p class="steps" data-visibles="ul3,ur4,urf0,urb1">RUR'U'R'FR2U'R'U'RUR'F'</p></div>
  </div>
</div>
<div class="pattern">
  <p>J-perm(n13)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/op/j-perm-a.png"></div><div class="rc"><p class="steps" data-visibles="uf3,ur4,urf0,urb1">RUR'F'RUR'U'R'FR2U'R'U'</p></div>
  </div>
</div>
<div class="pattern">
  <p>J-perm(n14)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/op/j-perm-b.png"></div><div class="rc"><p class="steps" data-visibles="ub3,ur4,urf0,urb1">R'U'RBR'U'RU(r')RU'R'2FRF(r)</p></div>
  </div>
</div>
<div class="pattern">
  <p>Parity</p>
  <div class="type">
    <p class="explain">T-perm -> J-perm(n14) -> T-perm を回す。</p>
  </div>
</div>

<script src="/rubiks_cube/js/old_pochmann_patterns.js"></script>
