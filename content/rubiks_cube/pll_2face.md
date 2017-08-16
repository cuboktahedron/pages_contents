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
    <ul>
      <li>
        <h3>n1-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(r) = C(fr) and E(f) != C(rf) => { U(n1-{1, 4}) }</p>
        <p>E(f) = Invert(C(rf)) => { U(n1-1) }</p>
      </li>
      <li>
        <h3>n1-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:a) => { U }</p>
        <p>E(f) = Invert(C(rf)) => { U(n1-2) }</p>
      </li>
      <li>
        <h3>n1-3</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:b:a) => { U }</p>
        <p>E(r) = Invert(C(rf)) => { U(n1-3) }</p>
      </li>
      <li>
        <h3>n1-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(r) = C(fr) and E(f) != C(rf) => { U(n1-{1, 4}) }</p>
        <p>E(f) = Invert(C(fr)) => { U(n1-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n2/U-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/02.png">
    <ul>
      <li>
        <h3>n2-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(f) = C(rf) and E(r) != C(fr) => { U(n2-{1, 4}) }</p>
        <p>E(r) = Invert(C(rf)) => { U(n2-1) }</p>
      </li>
      <li>
        <h3>n2-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:a) => { U }</p>
        <p>E(f) = Invert(C(rf)) => { U(n2-2) }</p>
      </li>
      <li>
        <h3>n2-3</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:b:a) => { U }</p>
        <p>E(r) == Invert(C(fr)) => { U(n2-3) }</p>
      </li>
      <li>
        <h3>n2-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(f) = C(rf) and E(r) != C(fr) => { U(n2-{1, 4}) }</p>
        <p>E(r) = Invert(C(fr)) => { U(n2-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n3/A-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/03.png">
    <ul>
      <li>
        <h3>n3-1</h3>
      </li>
      <li>
        <h3>n3-2</h3>
      </li>
      <li>
        <h3>n3-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:b) => { A, V }</p>
        <p>C(fl) = C(rb) => { A }</p>
        <p>C(fl) = Invert(E(f)) => { A(n3-3) }</p>
      </li>
      <li>
        <h3>n3-4</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:a) => { A, G }</p>
        <p>E(r) = Prev(E(f)) => { A }</p>
        <p>E(r) = C(fr) => { A(n3-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n4/A-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/04.png">
    <ul>
      <li>
        <h3>n4-1</h3>
      </li>
      <li>
        <h3>n4-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:b) => { A, G }</p>
        <p>E(f) = Next(E(r)) => { A }</p>
        <p>E(f) = Prev(C(rf) => { A(n4-2) }</p>
      </li>
      <li>
        <h3>n4-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:b) => { A, V }</p>
        <p>C(fl) = C(rb) => { A }</p>
        <p>C(rb) = Invert(E(r)) => { A(n4-3) }</p>
      </li>
      <li>
        <h3>n4-4</h3>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n5/Z-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/05.png">
    <ul>
      <li>
        <h3>n5-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(r) = C(fr) and E(f) = C(rf) => { Z(n5-{1, 3}) }</p>
      </li>
      <li>
        <h3>n5-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(r) != C(fr) and E(f) != C(rf) => { Z(n5-{2, 4}) }</p>
      </li>
      <li>
        <h3>n5-3</h3>
        <p>see n5-1</p>
      </li>
      <li>
        <h3>n5-4</h3>
        <p>see n5-2</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n6/H-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/06.png">
    <ul>
      <li>
        <h3>n6-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>E(r) = Invert(C(fr)) and E(f) = Invert(C(rf)) => { H(n6-{1, 2, 3, 4}) }</p>
      </li>
      <li>
        <h3>n6-2</h3>
        <p>see n6-1</p>
      </li>
      <li>
        <h3>n6-3</h3>
        <p>see n6-1</p>
      </li>
      <li>
        <h3>n6-4</h3>
        <p>see n6-1</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n7/E-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/07.png">
    <ul>
      <li>
        <h3>n7-1</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, F, G, R, V, Y }</p>
        <p>E(f) = Next(E(r)) => { E, G }</p>
        <p>C(fl) = Next(C(rb)) => { E }</p>
        <p>E(r) = C(fr) => { E(n7-{1, 3}) }</p>
      </li>
      <li>
        <h3>n7-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, F, G, R, V, Y }</p>
        <p>E(f) = Next(E(r)) => { E, G }</p>
        <p>C(fl) = Next(C(rb)) => { E }</p>
        <p>E(f) = C(rf) => { E(n7-{2, 4}) }</p>
      </li>
      <li>
        <h3>n7-3</h3>
        <p>see n7-1</p>
      </li>
      <li>
        <h3>n7-4</h3>
        <p>see n7-2</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n8/T-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/08.png">
    <ul>
      <li>
        <h3>n8-1</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:c) => { A, G, R, T, V }</p>
        <p>E(r) = Invert(C(fr)) => { T(n8-1) }</p>
      </li>
      <li>
        <h3>n8-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:b) => { A, G, R, T, V }</p>
        <p>E(f) = Invert(C(rf)) => { T(n8-2) }</p>
      </li>
      <li>
        <h3>n8-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:a) => { R, T }</p>
        <p>E(r) = Invert(C(rf)) => { T(n8-3) }</p>
      </li>
      <li>
        <h3>n8-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:b) => { R, T }</p>
        <p>E(f) = Invert(C(fr)) => { T(n8-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n9/V-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/09.png">
    <ul>
      <li>
        <h3>n9-1</h3>
      </li>
      <li>
        <h3>n9-2</h3>
      </li>
      <li>
        <h3>n9-3</h3>
      </li>
      <li>
        <h3>n9-4</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:b) => { A, V }</p>
        <p>C(fl) != C(rb) => { V(n9-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n10/F-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/10.png">
    <ul>
      <li>
        <h3>n10-1</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>ColorNum(F and R) = 3 => { F }</p>
        <p>E(f) = Invert(C(fl)) => { F(n10-1) }</p>
      </li>
      <li>
        <h3>n10-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>ColorNum(F and R) = 3 => { F }</p>
        <p>E(r) = Invert(C(rb)) => { F(n10-2) }</p>
      </li>
      <li>
        <h3>n10-3</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:a:a) => { F(n10-3) }</p>
      </li>
      <li>
        <h3>n10-4</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:b:c) => { F(n10-4) }</p>
      </li>
    </ul>
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
    <ul>
      <li>
        <h3>n13-1</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:b) => { J, N }</p>
        <p>E(f) != Invert(C(fl)) => { J(n13-{1, 2}) }</p>
        <p>E(r) = Invert(C(rf)) => { J(n13-1) }</p>
      </li>
      <li>
        <h3>n13-2</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:b) => { J, N }</p>
        <p>E(r) != Invert(C(rf)) => { J(n13-{1, 2}) }</p>
        <p>E(f) = Invert(C(fl)) => { J(n13-2) }</p>
      </li>
      <li>
        <h3>n13-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:a) => { J(n13-3) }</p>
      </li>
      <li>
        <h3>n13-4</h3>
        <p>Form(F) = (a:a:ab) and Form(R) = (a:b:b) => { J(n13-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n14/J-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/14.png">
    <ul>
      <li>
        <h3>n14-1</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:a:b) => { J, N }</p>
        <p>E(f) != Invert(C(fr)) => { J(n14-{1, 2}) }</p>
        <p>E(r) = Invert(C(rb)) => { J(n14-1) }</p>
      </li>
      <li>
        <h3>n14-2</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:a:b) => { J, N }</p>
        <p>E(r) != Invert(C(rb)) => { J(n14-{1, 2}) }</p>
        <p>E(f) = Invert(C(fr)) => { J(n14-2) }</p>
      </li>
      <li>
        <h3>n14-3</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:a:a) => { J(n14-3) }</p>
      </li>
      <li>
        <h3>n14-4</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:a:b) => { J(n14-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n15/Y-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/15.png">
    <ul>
      <li>
        <h3>n15-1</h3>
      </li>
      <li>
        <h3>n15-2</h3>
        <p>Form(F) = (a:a:b), Form(R) = (a:b:b) => { Y(n15-2) }</p>
      </li>
      <li>
        <h3>n15-3</h3>
      </li>
      <li>
        <h3>n15-4</h3>
      </li>
    </ul>
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
    <ul>
      <li>
        <h3>n20-1</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:a:b) => { J, N }</p>
        <p>E(f) = Invert(C(fr)) and E(r) = Invert(C(rb)) => { N(n20-{1, 2, 3, 4}) }</p>
      </li>
      <li>
        <h3>n20-2</h3>
        <p>see n20-1</p>
      </li>
      <li>
        <h3>n20-3</h3>
        <p>see n20-1</p>
      </li>
      <li>
        <h3>n20-4</h3>
        <p>see n20-1</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n21/N-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/21.png">
    <ul>
      <li>
        <h3>n21-1</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:b) => { J, N }</p>
        <p>E(f) = Invert(C(fl)) and E(r) = Invert(C(rf)) => { N(n21-{1, 2, 3, 4}) }</p>
      </li>
      <li>
        <h3>n21-2</h3>
        <p>see n21-1</p>
      </li>
      <li>
        <h3>n21-3</h3>
        <p>see n21-1</p>
      </li>
      <li>
        <h3>n21-4</h3>
        <p>see n21-1</p>
      </li>
    </ul>
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

