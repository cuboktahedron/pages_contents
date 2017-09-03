+++
date = "2017-03-11T14:44:12+09:00"
title = "PLL2面判断練習"
Tags = ["rubiks_cube", "pll"]

css = "pll_2face_practice.css"
+++
<div id="hidden-parts">
  <div id="stage"></div><br>
</div>

<div id="perm" class="cf">
  <img>
  <div>
    <div><h2 id="desc-header"></h2></div>
  </div>
</div>
<div id="config" class="cf">
  <div>
    <p>Answer</p><input id="txt-time-to-answer" type="number" size="8" value="5000" step="10">ms<br>
  </div>
  <div>
    <p>Next</p><input id="txt-time-to-next" type="number" size="8" value="5000" step="10">ms
  </div>
</div>

<hr class="filter-separator">

<div id="filter">
</div>

<script src="/q/cube/js/lib/three.min.js"></script>
<script src="/q/cube/js/cube_defs.js"></script>
<script src="/q/cube/js/cube.js"></script>
<script src="/rubiks_cube/js/pll_2face_data.js"></script>
<script src="/rubiks_cube/js/pll_2face_practice.js"></script>
<script src="/rubiks_cube/js/patterns.js"></script>

