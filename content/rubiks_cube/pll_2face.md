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
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(r) = C(fr), E(f) != C(rf) => { U(n1-{1, 4}) }<p>
        <p>E(f) = Invert(C(rf)) => { U(n1-1) }<p>
        <p><p>
      </li>
      <li>
        <h3>n1-2</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:a:a) => { U }<p>
        <p>E(f) = Invert(C(rf)) => { U(n1-2) }
      </li>
      <li>
        <h3>n1-3</h3>
        <p>Form(F) = (a:a:a), Form(R) = (a:b:a) => { U }<p>
        <p>E(r) = Invert(C(rf)) => { U(n1-3) }
      </li>
      <li>
        <h3>n1-4</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(r) = C(fr), E(f) != C(rf) => { U(n1-{1, 4}) }<p>
        <p>E(f) = Invert(C(fr)) => { U(n1-4) }<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n2/U-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/02.png">
    <ul>
      <li>
        <h3>n2-1</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(f) = C(rf), E(r) != C(fr) => { U(n2-{1, 4}) }<p>
        <p>E(r) = Invert(C(rf)) => { U(n2-1) }<p>
      </li>
      <li>
        <h3>n2-2</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:a:a) => { U }<p>
        <p>E(f) = Invert(C(rf)) => { U(n2-2) }
      </li>
      <li>
        <h3>n2-3</h3>
        <p>Form(F) = (a:a:a), Form(R) = (a:b:a) => { U }<p>
        <p>E(r) == Invert(C(fr)) => { U(n2-3) }
      </li>
      <li>
        <h3>n2-4</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(f) = C(rf), E(r) != C(fr) => { U(n2-{1, 4}) }<p>
        <p>E(r) = Invert(C(fr)) => { U(n2-4) }<p>
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
        <p>Form(F) = (a:b:b), Form(R) = (a:a:b) => { A, V }<p>
        <p>C(fl) = C(rb) => { A }</p>
        <p>C(fl) = Invert(E(f)) => { A(n3-3) }</p>
      </li>
      <li>
        <h3>n3-4</h3>
        <p>Form(F) = (a:a:b), Form(R) = (a:b:a) => { A, G }<p>
        <p>E(r) = Prev(E(f)) => { A }<p>
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
        <p>Form(F) = (a:b:a), Form(R) = (a:b:b) => { A, G }<p>
        <p>E(f) = Next(E(r)) => { A }<p>
        <p>E(f) = Prev(C(rf) => { A(n4-2) }</p>
      </li>
      <li>
        <h3>n4-3</h3>
        <p>Form(F) = (a:b:b), Form(R) = (a:a:b) => { A, V }<p>
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
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(r) = C(fr), E(f) = C(rf) => { Z(n5-{1, 3}) }<p>
      </li>
      <li>
        <h3>n5-2</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(r) != C(fr), E(f) != C(rf) => { Z(n5-{2, 4}) }<p>
      </li>
      <li>
        <h3>n5-3</h3>
        <p>see n5-1<p>
      </li>
      <li>
        <h3>n5-4</h3>
        <p>see n5-2<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n6/H-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/06.png">
    <ul>
      <li>
        <h3>n6-1</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:b:a) => { U, Z, H }<p>
        <p>E(r) = Invert(C(fr)), E(f) = Invert(C(rf)) => { H(n6-{1, 2, 3, 4}) }<p>
      </li>
      <li>
        <h3>n6-2</h3>
        <p>see n6-1<p>
      </li>
      <li>
        <h3>n6-3</h3>
        <p>see n6-1<p>
      </li>
      <li>
        <h3>n6-4</h3>
        <p>see n6-1<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n7/E-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/07.png">
    <ul>
      <li>
        <h3>n7-1</h3>
        <p>Form(F) = (a:b:c), Form(R) = (a:b:c) => { E, F, G, R, V, Y }<p>
        <p>E(f) = Next(E(r)) => { E, G }<p>
        <p>C(fl) = Next(C(rb)) => { E }<p>
        <p>E(r) = C(fr) => { E(n7-{1, 3}) }<p>
      </li>
      <li>
        <h3>n7-2</h3>
        <p>Form(F) = (a:b:c), Form(R) = (a:b:c) => { E, F, G, R, V, Y }<p>
        <p>E(f) = Next(E(r)) => { E, G }<p>
        <p>C(fl) = Next(C(rb)) => { E }<p>
        <p>E(f) = C(rf) => { E(n7-{2, 4}) }<p>
      </li>
      <li>
        <h3>n7-3</h3>
        <p>see n7-1<p>
      </li>
      <li>
        <h3>n7-4</h3>
        <p>see n7-2<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n8/T-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/08.png">
    <ul>
      <li>
        <h3>n8-1</h3>
        <p>Form(F) = (a:a:b), Form(R) = (a:b:c) => { A, G, R, T, V }<p>
        <p>E(r) = Invert(C(fr)) => { T(n8-1) }<p>
      </li>
      <li>
        <h3>n8-2</h3>
        <p>Form(F) = (a:b:c), Form(R) = (a:b:b) => { A, G, R, T, V }<p>
        <p>E(f) = Invert(C(rf)) => { T(n8-2) }<p>
      </li>
      <li>
        <h3>n8-3</h3>
        <p>Form(F) = (a:b:b), Form(R) = (a:b:a) => { R, T }<p>
        <p>E(r) = Invert(C(rf)) => { T(n8-3) }<p>
      </li>
      <li>
        <h3>n8-4</h3>
        <p>Form(F) = (a:b:a), Form(R) = (a:a:b) => { R, T }<p>
        <p>E(f) = Invert(C(fr)) => { T(n8-4) }<p>
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
        <p>Form(F) = (a:b:b), Form(R) = (a:a:b) => { A, V }<p>
        <p>C(fl) != C(rb) => { V(n9-4) }<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n10/F-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/10.png">
    <ul>
      <li>
        <h3>n10-1</h3>
        <p>同一面に同じ色が存在せず、また3色しかないことからF-perm(n10)であることが確定。<p>
        <p>RのエッジとRBのコーナーが隣接色なので、L面が揃っていると判断できる。<p>
      </li>
      <li>
        <h3>n10-2</h3>
        <p>n10-1と同様にF-perm(n10)であることが確定。<p>
        <p>RのエッジとRBのコーナーが反対色なので、B面が揃っていると判断できる。<p>
      </li>
      <li>
        <h3>n10-3</h3>
        <p>1面がそろっており、もう片面がすべて別の色であることからF-perm(n10)であることが確定。<p>
      </li>
      <li>
        <h3>n10-4</h3>
        <p>n10-3と同様にF-perm(n10)であることが確定。<p>
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
        <p>F(1:2), R(1:2)の配置になっているので、N-perm(n21)、J-perm(n13)のいずれかであることがわかる。</p>
        <p>N-permの場合、各面が反対色で構成されているので、J-permであることが確定。</p>
        <p>R面が反対色で構成されているので、その裏に当たるL面がそろっていると判断できる。<p>
        <p></p>
      </li>
      <li>
        <h3>n13-2</h3>
        <p>n13-1と同様にJ-perm(n13)であることがわかる。<p>
        <p>F面が反対色で構成されているので、その裏に当たるB面がそろっていると判断できる。<p>
      </li>
      <li>
        <h3>n13-3</h3>
        <p>1面がそろっており、もう片面が1:2になっていることからJ-perm(n13)であることが確定。<p>
      </li>
      <li>
        <h3>n13-4</h3>
        <p>n13-3と同様にJ-perm(n13)であることがわかる。<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n14/J-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/14.png">
    <ul>
      <li>
        <h3>n14-1</h3>
        <p>F(2:1), R(2:1)の配置になっているので、N-perm(n20)、J-perm(n14)のいずれかであることがわかる。</p>
        <p>N-permの場合、各面が反対色で構成されているので、J-permであることが確定。</p>
        <p>R面が反対色で構成されているので、その裏に当たるL面がそろっていると判断できる。<p>
      </li>
      <li>
        <h3>n14-2</h3>
        <p>n14-1と同様にJ-perm(n14)であることがわかる。<p>
        <p>F面が反対色で構成されているので、その裏に当たるB面がそろっていると判断できる。<p>
      </li>
      <li>
        <h3>n14-3</h3>
        <p>1面がそろっており、もう片面が2:1になっていることからJ-perm(n14)であることが確定。<p>
      </li>
      <li>
        <h3>n14-4</h3>
        <p>n14-3と同様にJ-perm(n14)であることがわかる。<p>
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
        <p>Form(F) = (a:a:b), Form(R) = (a:b:b) => { Y(n15-2) }<p>
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
        <p>F(2:1), R(2:1)の配置で、2:1がそれぞれ反対色になっているのでN-perm(n20)であることが確定。</p>
      </li>
      <li>
        <h3>n20-2</h3>
        <p>n20-1と同様にN-perm(n20)であることがわかる。<p>
      </li>
      <li>
        <h3>n20-3</h3>
        <p>n20-1と同様にN-perm(n20)であることがわかる。<p>
      </li>
      <li>
        <h3>n20-4</h3>
        <p>n20-1と同様にN-perm(n20)であることがわかる。<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n21/N-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/21.png">
    <ul>
      <li>
        <h3>n21-1</h3>
        <p>F(1:2), R(1:2)の配置で、1:2がそれぞれ反対色になっているのでN-perm(n21)であることが確定。</p>
      </li>
      <li>
        <h3>n21-2</h3>
        <p>n21-1と同様にN-perm(n21)であることがわかる。<p>
      </li>
      <li>
        <h3>n21-3</h3>
        <p>n21-1と同様にN-perm(n21)であることがわかる。<p>
      </li>
      <li>
        <h3>n21-4</h3>
        <p>n21-1と同様にN-perm(n21)であることがわかる。<p>
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

