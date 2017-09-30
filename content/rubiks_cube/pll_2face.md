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
        <p>ColorNum = 3 => { U({ n1, n2 }) }</p>
        <p>E(r) = C(fr) => { U({ n1-1, n1-4 }) }</p>
        <p>E(f) = Next(E(r)) => { U(n1-1) }</p>
      </li>
      <li>
        <h3>n1-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:a) => { U({ n1-2, n2-2 } }</p>
        <p>E(f) != Invert(C(fr)) => { U(n1-2) }</p>
      </li>
      <li>
        <h3>n1-3</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:b:a) => { U({ n1-3, n2-3 }) }</p>
        <p>E(r) = Invert(C(rf)) => { U(n1-3) }</p>
      </li>
      <li>
        <h3>n1-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>ColorNum = 3 => { U({ n1, n2 }) }</p>
        <p>E(r) = C(fr) => { U({ n1-1, n1-4 }) }</p>
        <p>E(f) = Invert(E(r)) => { U(n1-4) }</p>
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
        <p>ColorNum = 3 => { U({ n1, n2 }) }</p>
        <p>E(f) = C(rf) => { U({ n2-1, n2-4 }) }</p>
        <p>E(f) = Invert(E(r)) => { U(n2-1) }</p>
      </li>
      <li>
        <h3>n2-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:a) => { U({ n1-2, n2-2 }) }</p>
        <p>E(f) = Invert(C(fr)) => { U(n2-2) }</p>
      </li>
      <li>
        <h3>n2-3</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:b:a) => { U({ n1-3, n2-3 }) }</p>
        <p>E(r) != Invert(C(rf)) => { U(n2-3) }</p>
      </li>
      <li>
        <h3>n2-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>ColorNum = 3 => { U({ n1, n2 }) }</p>
        <p>E(f) = C(rf) => { U({ n2-1, n2-4 }) }</p>
        <p>E(f) = Next(E(r)) => { U(n2-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n3/A-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/03.png">
    <ul>
      <li>
        <h3>n3-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:c) => { A, R, G }</p>
        <p>E(r) = C(fr) => { A(n3-1), R(n11-1), G(n16-1) }</p>
        <p>E(f) = Next(E(r)) => { A(n3-1) }</p>
      </li>
      <li>
        <h3>n3-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:b) => { A, T, V, R, G }</p>
        <p>E(r) = C(fl) => { A, T, R, G }</p>
        <p>E(f) != Invert(E(r)) => { A, T, R }</p>
        <p>E(f) = Invert(C(fr)) => { A(n3-2) }</p>
      </li>
      <li>
        <h3>n3-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:b) => { A, V }</p>
        <p>C(fl) = C(rb) => { A({ n3-3, n4-3 }) }</p>
        <p>E(f) = Invert(C(fl)) => { A(n3-3) }</p>
      </li>
      <li>
        <h3>n3-4</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:a) => { A, G }</p>
        <p>E(f) = Next(E(r)) => { A(n3-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n4/A-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/04.png">
    <ul>
      <li>
        <h3>n4-1</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:a) => { A, R, G }</p>
        <p>E(f) = C(rf) => { A(n4-1), R(n12-4), G(n19-4) }</p>
        <p>E(f) = Next(E(r)) => { A(n4-1) }</p>
      </li>
      <li>
        <h3>n4-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:b) => { A, G }</p>
        <p>E(f) = Next(E(r)) => { A(n4-2) }</p>
      </li>
      <li>
        <h3>n4-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:b) => { A, V }</p>
        <p>C(fl) = C(rb) => { A({ n3-3, n4-3 }) }</p>
        <p>E(r) = Invert(C(rb)) => { A(n4-3) }</p>
      </li>
      <li>
        <h3>n4-4</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:c) => { A, T, V, R, G }</p>
        <p>E(f) = C(rb) => { A, T, R, G }</p>
        <p>E(f) != Invert(E(r)) => { A, T, R }</p>
        <p>E(r) = Invert(C(rf)) => { A(n4-4) }</p>
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
        <p>ColorNum = 2 => { Z({ n5-1, n5-3 }) }</p>
      </li>
      <li>
        <h3>n5-2</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:a) => { U, Z, H }</p>
        <p>ColorNum = 4 => { Z, H }</p>
        <p>E(f) != Invert(C(fr)) => { Z({ n5-2, n5-4 }) }</p>
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
        <p>ColorNum = 4 => { Z, H }</p>
        <p>E(f) = Invert(C(fr)) => { H({ n6-1, n6-2, n6-3, n6-4 }) }</p>
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
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>E(f) = Next(E(r)) => { E, G }</p>
        <p>C(fl) != C(rb) => { E }</p>
        <p>E(r) = C(fr) => { E({ n7-1, n7-3 }) }</p>
      </li>
      <li>
        <h3>n7-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>E(f) = Next(E(r)) => { E, G }</p>
        <p>C(fl) != C(rb) => { E }</p>
        <p>E(f) = C(rf) => { E({ n7-2, n7-4 }) }</p>
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
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:c) => { A, T, V, R, G }</p>
        <p>E(f) = C(rb) => { A, T, R, G }</p>
        <p>E(r) = Next(C(rb)) and Next(E(r)) = C(rf) => { T(n8-1) }</p>
      </li>
      <li>
        <h3>n8-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:b) => { A, T, V, R, G }</p>
        <p>E(r) = C(fl) => { A, T, R, G }</p>
        <p>Next(E(f)) = C(fl) and E(f) = Next(C(fr)) => { T(n8-2) }</p>
      </li>
      <li>
        <h3>n8-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:a) => { T, R }</p>
        <p>E(r) = Invert(C(rf)) => { T(n8-3) }</p>
      </li>
      <li>
        <h3>n8-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:b) => { T, R }</p>
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
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:c) => { A, T, V, R, G }</p>
        <p>E(f) != C(rb) => { V(n9-1) }</p>
      </li>
      <li>
        <h3>n9-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>Next(E(f)) = E(r) => { V, F, Y }</p>
        <p>C(fl) != C(rb) => { V(n9-2), Y(n15-4) }</p>
        <p>E(f) = C(rf) and E(r) = C(fr) => { V(n9-2) }</p>
      </li>
      <li>
        <h3>n9-3</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:b) => { A, T, V, R, G }</p>
        <p>E(r) != C(fl) => { V(n9-3) }</p>
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
        <p>Next(E(f)) = E(r) => { V, F, Y }</p>
        <p>C(fl) = C(rb) => { F({ n10-1, n10-2 }) }</p>
        <p>E(f) = Invert(C(fl)) => { F(n10-1) }</p>
      </li>
      <li>
        <h3>n10-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>Next(E(f)) = E(r) => { V, F, Y }</p>
        <p>C(fl) = C(rb) => { F({ n10-1, n10-2 }) }</p>
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
    <ul>
      <li>
        <h3>n11-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:c) => { A, R, G }</p>
        <p>E(r) = C(fr) => { A(n3-1), R(n11-1), G(n16-1) }</p>
        <p>Next(E(f)) = E(r) => { R(n11-1) }</p>
      </li>
      <li>
        <h3>n11-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>E(f) = Invert(E(r)) => { R({ n11-2, n12-3 }) }</p>
        <p>E(r) = C(fr) => { R(n11-2) }</p>
      </li>
      <li>
        <h3>n11-3</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:b) => { A, T, V, R, G }</p>
        <p>E(r) = C(fl) => { A, T, R, G }</p>
        <p>E(f) = Next(C(fl)) and Next(E(f)) = C(rf) => { R(n11-3) }</p>
      </li>
      <li>
        <h3>n11-4</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:a) => { T, R }</p>
        <p>E(r) != Invert(C(rf)) => { R(n11-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n12/R-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/12.png">
    <ul>
      <li>
        <h3>n12-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:a:b) => { T, R }</p>
        <p>E(f) != Invert(C(fr)) => { R(n12-1) }</p>
      </li>
      <li>
        <h3>n12-2</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:c) => { A, T, V, R, G }</p>
        <p>E(f) = C(rb) => { A, T, R, G }</p>
        <p>E(r) = Next(C(rf)) and Next(E(r)) = C(rb) => { R(n12-2) }</p>
      </li>
      <li>
        <h3>n12-3</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>E(f) = Invert(E(r)) => { R({ n11-2, n12-3 }) }</p>
        <p>E(f) = C(rf) => { R(n12-3) }</p>
      </li>
      <li>
        <h3>n12-4</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:a) => { A, R, G }</p>
        <p>E(f) = C(rf) => { A(n4-1), R(n12-4), G(n19-4) }</p>
        <p>Next(E(f)) = E(r) => { R(n12-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n13/J-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/13.png">
    <ul>
      <li>
        <h3>n13-1</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:b) => { J, N }</p>
        <p>ColorNum = 3 => { J({ n13-1, n13-2 }) }</p>
        <p>E(f) != Invert(C(fl)) => { J(n13-1) }</p>
      </li>
      <li>
        <h3>n13-2</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:b) => { J, N }</p>
        <p>ColorNum = 3 => { J({ n13-1, n13-2 }) }</p>
        <p>E(f) = Invert(C(fl)) => { J(n13-2) }</p>
      </li>
      <li>
        <h3>n13-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:a:a) => { J(n13-3) }</p>
      </li>
      <li>
        <h3>n13-4</h3>
        <p>Form(F) = (a:a:a) and Form(R) = (a:b:b) => { J(n13-4) }</p>
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
        <p>ColorNum = 3 => { J({ n14-1, n14-2 }) }</p>
        <p>E(f) != Invert(C(fr)) => { J(n14-1) }</p>
      </li>
      <li>
        <h3>n14-2</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:a:b) => { J, N }</p>
        <p>ColorNum = 3 => { J({ n14-1, n14-2 }) }</p>
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
        <p>Form(F) = (a:b:c) and Form(R) = (a:a:b) => { Y, G }</p>
        <p>C(fl) != C(rb) => { Y(n15-1) }</p>
      </li>
      <li>
        <h3>n15-2</h3>
        <p>Form(F) = (a:a:b), Form(R) = (a:b:b) => { Y(n15-2) }</p>
      </li>
      <li>
        <h3>n15-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:c) => { Y, G }</p>
        <p>C(fl) != C(rb) => { Y(n15-3) }</p>
      </li>
      <li>
        <h3>n15-4</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>Next(E(f)) = E(r) => { V, F, Y }</p>
        <p>C(fl) != C(rb) => { V(n9-2), Y(n15-4) }</p>
        <p>E(f) != C(rf) and E(r) != C(fr) => { Y(n15-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n16/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/16.png">
    <ul>
      <li>
        <h3>n16-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:c) => { A, R, G }</p>
        <p>E(r) = C(fr) => { A(n3-1), R(n11-1), G(n16-1) }</p>
        <p>E(f) = Invert(E(r)) => { G(n16-1) }</p>
      </li>
      <li>
        <h3>n16-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:a:b) => { Y, G }</p>
        <p>C(rl) = C(rb) => { G(n16-2 ,n17-2 }) }</p>
        <p>E(r) = Invert(C(rb)) => { G(n16-2) }</p>
      </li>
      <li>
        <h3>n16-3</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:c) => { A, T, V, R, G }</p>
        <p>E(f) = C(rb) => { A, T, R, G }</p>
        <p>E(f) = Invert(E(r)) => { G(n16-3) }</p>
      </li>
      <li>
        <h3>n16-4</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:a) => { A, R, G }</p>
        <p>E(f) != C(rf) => { G({ n16-4, n18-4 }) }</p>
        <p>E(r) = Invert(C(rf)) => { G(n16-4)) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n17/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/17.png">
    <ul>
      <li>
        <h3>n17-1</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>E(f) = Next(E(r)) => { E, G }</p>
        <p>C(fl) = C(rb) => { G({ n17-1, n18-3 }) }</p>
        <p>E(r) != C(fr) => { G(n17-1) }</p>
      </li>
      <li>
        <h3>n17-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:a:b) => { Y, G }</p>
        <p>C(rl) = C(rb) => { G(n16-2 ,n17-2 }) }</p>
        <p>E(r) != Invert(C(rb)) => { G(n17-2) }</p>
      </li>
      <li>
        <h3>n17-3</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:b:a) => { A, G }</p>
        <p>E(f) != Next(E(r)) => { G(n17-3) }</p>
      </li>
      <li>
        <h3>n17-4</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:c) => { A, R, G }</p>
        <p>E(r) != C(fr) => { G({ n17-4, n19-1 }) }</p>
        <p>E(f) != Invert(C(fr)) => { G(n17-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n18/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/18.png">
    <ul>
      <li>
        <h3>n18-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:b) => { A, G }</p>
        <p>E(f) != Next(E(r)) => { G(n18-1) }</p>
      </li>
      <li>
        <h3>n18-2</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:c) => { Y, G }</p>
        <p>C(fl) = C(rb) => { G({ n18-2, n19-3 }) }</p>
        <p>E(f) != Invert(C(fl)) => { G(n18-2) }</p>
      </li>
      <li>
        <h3>n18-3</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:c) => { E, V, F, R, Y, G }</p>
        <p>E(f) = Next(E(r)) => { E, G }</p>
        <p>C(fl) = C(rb) => { G({ n17-1, n18-3 }) }</p>
        <p>E(r) = C(fr) => { G(n18-3) }</p>
      </li>
      <li>
        <h3>n18-4</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:a) => { A, R, G }</p>
        <p>E(f) != C(rf) => { G({ n16-4, n18-4 }) }</p>
        <p>E(r) != Invert(C(rf)) => { G(n18-4)) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n19/G-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/19.png">
    <ul>
      <li>
        <h3>n19-1</h3>
        <p>Form(F) = (a:b:a) and Form(R) = (a:b:c) => { A, R, G }</p>
        <p>E(r) != C(fr) => { G({ n17-4, n19-1 }) }</p>
        <p>E(f) = Invert(C(fr)) => { G(n19-1) }</p>
      </li>
      <li>
        <h3>n19-2</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:b) => { A, T, V, R, G }</p>
        <p>E(r) = C(fl) => { A, T, R, G }</p>
        <p>E(f) = Invert(E(r)) => { G(n19-2) }</p>
      </li>
      <li>
        <h3>n19-3</h3>
        <p>Form(F) = (a:b:b) and Form(R) = (a:b:c) => { Y, G }</p>
        <p>C(fl) = C(rb) => { G({ n18-2, n19-3 }) }</p>
        <p>E(f) = Invert(C(fl)) => { G(n19-3) }</p>
      </li>
      <li>
        <h3>n19-4</h3>
        <p>Form(F) = (a:b:c) and Form(R) = (a:b:a) => { A, R, G }</p>
        <p>E(f) = C(rf) => { A(n4-1), R(n12-4), G(n19-4) }</p>
        <p>E(f) = Invert(E(r)) => { G(n19-4) }</p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n20/N-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/20.png">
    <ul>
      <li>
        <h3>n20-1</h3>
        <p>Form(F) = (a:a:b) and Form(R) = (a:a:b) => { J, N }</p>
        <p>ColorNum = 4 => { N({ n20-1, n20-2, n20-3, n20-4 }) }</p>
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
        <p>ColorNum = 4 => { N({ n21-1, n21-2, n21-3, n21-4 }) }</p>
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

