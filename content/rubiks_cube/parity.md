+++
date = "2020-06-21T17:34:00+09:00"
title = "Parity手順"
Tags = ["rubiks_cube", "bld"]

customs = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/css/iziModal.css" integrity="sha256-m/nnXscwkcMbAFsUOys9WKr+MzlZz3q7EcJpkOxItaU=" crossorigin="anonymous" />',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/js/iziModal.js" integrity="sha256-rPSLT4QVhivrxPwK7xeqPLVWDDtc2YHkZHVxs1I6u9Y=" crossorigin="anonymous"></script>'
]

css = "parity.css"
+++

## Parityの解消手順

Edge手順/Corner手順

<div class="pattern">
  <p>Old pochmann/Old pochmann</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/parity/old_pochmann_old_pochmann.png"></div>
    <div class="rc">
      <p class="steps">
        RUR'U'R'FR2U'R'U'RUR'F'R'U'RBR'U'RU(r')RU'R'2FRF(r)RUR'U'R'FR2U'R'U'RUR'F'
      </p>
      <p class="explain">
        T-perm -> J-Perm -> T-perm
      </p>
    </div>
  </div>
</div>

<div class="pattern">
  <p>M2/Old pochmann</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/parity/m2_old_pochman.png"></div>
    <div class="rc">
      <p class="steps">D'L2DM2D'L2D</p>
    </div>
  </div>
</div>

<div class="pattern">
  <p>M2/R2</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/parity/m2_r2.png"></div>
    <div class="rc">
    <p class="steps">Rw2U'Rw'2(u)R'U'RBR'U'RU(r')RU'R'2FRF(r)(u')L2Uw</p>
      <p class="explain">
        Rw2U'Rw’2 -> J-Perm -> (u')L2Uw
      </p>
    </div>
  </div>
</div>

<script src="/rubiks_cube/js/patterns.js"></script>
