+++
date = "2017-03-04T13:20:12+09:00"
title = "PLL2面判断"
Tags = ["rubiks_cube", "pll"]

css = "pll_2face.css"
+++
全PLL、全方向、全配色の組み合わせです。

<div id="perms">
  <a class="nav-perm">n1/U-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/01.png">
  </div>
  <a class="nav-perm">n2/U-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/02.png">
  </div>
  <a class="nav-perm">n3/A-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/03.png">
  </div>
  <a class="nav-perm">n4/A-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/04.png">
  </div>
  <a class="nav-perm">n5/Z-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/05.png">
  </div>
  <a class="nav-perm">n6/H-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/06.png">
  </div>
  <a class="nav-perm">n7/E-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/07.png">
  </div>
  <a class="nav-perm">n8/T-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/08.png">
  </div>
  <a class="nav-perm">n9/V-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/09.png">
  </div>
  <a class="nav-perm">n10/F-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/10.png">
  </div>
  <a class="nav-perm">n11/R-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/11.png">
  </div>
  <a class="nav-perm">n12/R-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/12.png">
  </div>
  <a class="nav-perm">n13/J-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/13.png">
  </div>
  <a class="nav-perm">n14/J-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/14.png">
  </div>
  <a class="nav-perm">n15/Y-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/15.png">
  </div>
  <a class="nav-perm">n16/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/16.png">
  </div>
  <a class="nav-perm">n17/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/17.png">
  </div>
  <a class="nav-perm">n18/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/18.png">
  </div>
  <a class="nav-perm">n19/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/19.png">
  </div>
  <a class="nav-perm">n20/N-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/20.png">
  </div>
  <a class="nav-perm">n21/N-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/21.png">
  </div>
</div>

<script>
$(function() {
  $('.nav-perm').on('click', function() {
    var that = this;
    $(this).next().slideToggle(200, function() {
      $("body").animate({
        scrollTop: $(that).offset().top
      }, 200);
    });
  });
});

</script>

