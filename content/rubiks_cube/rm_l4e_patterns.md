+++
date = "2024-04-13T09:00:00+09:00"
title = "L4E手順"
Tags = ["rubiks_cube", "roux_method", "lr"]

customs = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/css/iziModal.css" integrity="sha256-m/nnXscwkcMbAFsUOys9WKr+MzlZz3q7EcJpkOxItaU=" crossorigin="anonymous" />',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.4.2/js/iziModal.js" integrity="sha256-rPSLT4QVhivrxPwK7xeqPLVWDDtc2YHkZHVxs1I6u9Y=" crossorigin="anonymous"></script>'
]

css = "rm_l4e_patterns.css"
+++

<div class="pattern">
  <p>3-Cycle(A)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/rm_l4e/3cycle_01.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="fu5,uf4,u2,f0,d4,b5,bd5,db2,bu0,ub2,fd0,df4">U'2MU'2</p>
    </div> 
  </div>
</div>
<div class="pattern">
  <p>3-Cycle(B)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/rm_l4e/3cycle_02.png"></div>
    <div class="rc">
      <!-- <p class="steps" data-visibles="fu0,f0,fd5,df2,d4,db4,bd0,b5,bu5,ub4,u2,uf2">U'2M'U'2</p> -->
      <p class="steps" data-visibles="fu0,f5,fd5,df4,d2,db2,bd0,b0,bu5,ub2,u4,uf4">U'2M'U'2</p>
    </div> 
  </div>
</div>
<div class="pattern">
  <p>Double Swap(A)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/rm_l4e/double_swap_01.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="fu4,f2,fd4,df0,d0,db0,bd2,b4,bu2,ub5,u5,uf5">U'2M'2U'2</p>
    </div> 
  </div>
</div>
<div class="pattern">
  <p>Double Swap(B)</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/rm_l4e/double_swap_02.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="uf0,fu2,ub0,bu4,df5,fd2,db5,bd4,u5,d0,f2,b4">M'U'2M'2U'2</p>
    </div> 
  </div>
</div>
<div class="pattern">
  <p>Center Swap</p>
  <div class="type">
    <div class="lc"><img src="/rubiks_cube/img/rm_l4e/center_swap.png"></div>
    <div class="rc">
      <p class="steps" data-visibles="uf5,fu2,fd2,df0,ub5,bu4,bd4,db0,f4,u0,b2,d5">U'2M'2U'2M'U'2M'2U'2</p>
    </div> 
  </div>
</div>

<script src="/rubiks_cube/js/m2.bundle.js"></script>
