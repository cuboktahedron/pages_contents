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
        <p>形からU-perm, Z-perm, H-permのいずれかであることがわかる。<p>
        <p>エッジの色がR -> F -> LにスライドすることからU-perm(n1)であることが確定。<p>
      </li>
      <li>
        <h3>n1-2</h3>
        <p>形からU-permであることがわかる。<p>
        <p>エッジの色がF -> LにスライドすることからU-perm(n1)であることが確定。<p>
      </li>
      <li>
        <h3>n1-3</h3>
        <p>形からU-permであることがわかる。<p>
        <p>エッジの色がR -> LにスライドすることからU-perm(n1)であることが確定。<p>
      </li>
      <li>
        <h3>n1-4</h3>
        <p>n1-1と同様にR -> F -> BでスライドするU-perm(n1)であることが確定。<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n2/U-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/02.png">
    <ul>
      <li>
        <h3>n2-1</h3>
        <p>形からU-perm, Z-perm, H-permのいずれかであることがわかる。<p>
        <p>エッジの色がF -> R- > LにスライドすることからU-perm(n2)であることが確定。<p>
      </li>
      <li>
        <h3>n2-2</h3>
        <p>形からU-permであることがわかる。<p>
        <p>エッジの色がF -> BにスライドすることからU-perm(n2)であることが確定。<p>
      </li>
      <li>
        <h3>n2-3</h3>
        <p>形からU-permであることがわかる。<p>
        <p>エッジの色がR -> BにスライドすることからU-perm(n2)であることが確定。<p>
      </li>
      <li>
        <h3>n2-4</h3>
        <p>n2-1と同様にR -> F -> BでスライドU-perm(n2)であることが確定。<p>
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
        <p>形からA-perm, V-permのいずれかであることがわかる。<p>
        <p>F面、R面の共有していないコーナーの色が同じ色なので、A-permであることが確定。<p>
        <p>F面が反対色で構成されているので、反時計回り(n3)であることが確定。<p>
      </li>
      <li>
        <h3>n3-4</h3>
        <p>形からA-perm, G-permのいずれかであることがわかる。<p>
        <p>エッジは正順になっているので、A-Permであることが確定。<p>
        <p>コーナとエッジの色関係から反時計回り(n3)であることが確定。<p>
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
        <p>形からA-perm, G-permのいずれかであることがわかる。<p>
        <p>エッジは正順になっているので、A-Permであることが確定。<p>
        <p>コーナとエッジの色関係から時計回り(n4)であることが確定。<p>
      </li>
      <li>
        <h3>n4-3</h3>
        <p>形からA-perm, V-permのいずれかであることがわかる。<p>
        <p>F面、R面の共有していないコーナーの色が同じ色なので、A-permであることが確定。<p>
        <p>R面が反対色で構成されているので、時計回り(n4)であることが確定。<p>
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
        <p>形からU-perm, Z-perm, H-permのいずれかであることがわかる。<p>
        <p>見えてるエッジ同士が入れ替わる関係にあるためZ-perm(n5)であることが確定。<p>
      </li>
      <li>
        <h3>n5-2</h3>
        <p>形からU-perm, Z-perm, H-permのいずれかであることがわかる。<p>
        <p>F-R面のエッジがスライドする関係ではないためA-permは除外。<p>
        <p>H-permは2面ともエッジにコーナーの反対色がくるため除外。<p>
        <p>なのでZ-perm(n5)であることが確定。<p>
      </li>
      <li>
        <h3>n5-3</h3>
        <p>n5-1と同様にZ-perm(n5)であることが確定。<p>
      </li>
      <li>
        <h3>n5-4</h3>
        <p>n5-2と同様にZ-perm(n5)であることが確定。<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n6/H-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/06.png">
    <ul>
      <li>
        <h3>n6-1</h3>
        <p>形からU-perm, Z-perm, H-permのいずれかであることがわかる。<p>
        <p>2面ともエッジにコーナーの反対色が来ているためH-Perm(n6)であることが確定。<p>
      </li>
      <li>
        <h3>n6-2</h3>
        <p>n6-1と同様にH-perm(n6)であることが確定。<p>
      </li>
      <li>
        <h3>n6-3</h3>
        <p>n6-1と同様にH-perm(n6)であることが確定。<p>
      </li>
      <li>
        <h3>n6-4</h3>
        <p>n6-1と同様にH-perm(n6)であることが確定。<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n7/E-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/07.png">
    <ul>
      <li>
        <h3>n7-1</h3>
        <p>形からE-perm, V-perm, F-perm, R-perm, Y-perm, G-permのいずれかであることがわかる。<p>
        <p>エッジが正順になっているので、E-perm, G-permのいずれかであることがわかる。<p>
        <p>共通していないコーナーが正順になっているのでE-permであることが確定。<p>
        <p>共通のコーナーと各エッジの色から共通のコーナーはR面奥に移動することがわかる。<p>
      </li>
      <li>
        <h3>n7-2</h3>
        <p>n7-1と同様にE-perm(n7)であることが確定。<p>
        <p>共通のコーナーと各エッジの色から共通のコーナーはL面奥に移動することがわかる。<p>
      </li>
      <li>
        <h3>n7-3</h3>
        <p>n7-1と同様にE-perm(n7)であることが確定。<p>
        <p>共通のコーナーと各エッジの色から共通のコーナーはR面奥に移動することがわかる。<p>
      </li>
      <li>
        <h3>n7-4</h3>
        <p>n7-1と同様にE-perm(n7)であることが確定。<p>
        <p>共通のコーナーと各エッジの色から共通のコーナーはL面奥に移動することがわかる。<p>
      </li>
    </ul>
  </div>
  <a class="nav-perm">n8/T-perm</a>
  <div class="n-pattern">
    <img class="img-fluid" src="/rubiks_cube/img/pll/2face/08.png">
    <ul>
      <li>
        <h3>n8-1</h3>
        <p>形(F(2:1), R(1:1:1))からA-perm, T-perm, V-perm, R-perm, G-permのいずれかであることがわかる。<p>
        <p>エッジの色からR面のエッジがL面に移動することがわかり、この時点でT-permであることが確定。 </p>
      </li>
      <li>
        <h3>n8-2</h3>
      </li>
      <li>
        <h3>n8-3</h3>
      </li>
      <li>
        <h3>n8-4</h3>
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
        <p>形からA-perm, V-permのいずれかであることがわかる。<p>
        <p>F面、R面の共有していないコーナーの色が別々の色なので、V-perm(n9)であることが確定。<p>
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
        <p>F(2:1), R(1:2)の配置になっているので、Y-perm(n15)であることが確定。</p>
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

