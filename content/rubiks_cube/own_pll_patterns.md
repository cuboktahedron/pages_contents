+++
tags = ["rubiks_cube", "pll"]
date = "2017-01-01T21:18:17+09:00"
title = "PLL手順"

css = "own_pll_patterns.css"
+++

<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/01a.png"></div><div class="rc"><p>n1/U-perm</p><p class="steps">L'UL'U'L'U'L'ULUL2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/02a.png"></div><div class="rc"><p>n2/U-perm</p><p class="steps">RU'RURURU'R'U'R2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/03a.png"></div><div class="rc"><p>n3/A-perm</p><p class="steps">(r')RU'RD2R'URD2R2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/04a.png"></div><div class="rc"><p>n4/A-perm</p><p class="steps">R'2(r)U2R'D'RU'2(f')U'RU'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/05a.png"></div><div class="rc"><p>n5/Z-perm</p><p class="steps">UR'U'RU'RURU'R'URUR2U'R'U</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/06a.png"></div><div class="rc"><p>n6/H-perm</p><p class="steps">M'2UM'2U2M'2UM'2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/07a.png"></div><div class="rc"><p>n7/E-perm</p><p class="steps">(r')RU'R'DRUR'D2L'ULUw(u')L'U'L</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/08a.png"></div><div class="rc"><p>n8/T-perm</p><p class="steps">RUR'U'R'FR2U'R'U'RUR'F'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/09a.png"></div><div class="rc"><p>n9/V-perm</p><p class="steps">R'UR'U'(u)(r2)R'UR'U'R2(u)(r)R'U'RUR</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/10a.png"></div><div class="rc"><p>n10/F-perm</p><p class="steps">U'R'URU'R'2F'(f)R'FRD(f')(r)UR'U'R2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/11a.png"></div><div class="rc"><p>n11/R-perm</p><p class="steps">R'U2RU'2R'FRUR'U'R'FR2U'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/12a.png"></div><div class="rc"><p>n12/R-perm</p><p class="steps">F'R'U'RF'R'U(u')R'U'R'URBR2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/13a.png"></div><div class="rc"><p>n13/J-perm</p><p class="steps">RUR'F'RUR'U'R'FR2U'R'U'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/14a.png"></div><div class="rc"><p>n14/J-perm</p><p class="steps">R'U'RBR'U'RU(r')RU'R'2FRF</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/15a.png"></div><div class="rc"><p>n15/Y-perm</p><p class="steps">(r')R'2FwR2U'RU(r')RU'(u)(r)R'UFU'R'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/16a.png"></div><div class="rc"><p>n16/G-perm</p><p class="steps">(r')(u')URU'(u)(r)R2Uw'RU'R'UR'UwR2</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/17a.png"></div><div class="rc"><p>n17/G-perm</p><p class="steps">R2Uw'RU'RUR'UwR'2(u)RU'R'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/18a.png"></div><div class="rc"><p>n18/G-perm</p><p class="steps">Rw2U(r')(u)U'RU'R'URw'U2B'RB</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/19a.png"></div><div class="rc"><p>n19/G-perm</p><p class="steps">R'U'(u)FR2UwR'URU'RUw'2R'</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/20a.png"></div><div class="rc"><p>n20/N-perm</p><p class="steps">(f)U'RD'R2UR'DU'RD'R2UR'DR</p></div>
</div>
<div class="pattern">
  <div class="lc"><img src="/rubiks_cube/img/pll/21a.png"></div><div class="rc"><p>n21/N-perm</p><p class="steps">LU'RU'2L'UR'LU'RU'2L'UR'U</p></div>
</div>

<script>
  $('.pattern p.steps').each(function() {
    var $this = $(this);
    var pattern = $(this).text();
    var r = /[UDRLFB]w?'?2?|[MSE]'?2?|\([ruf]'?2?\)/ig

    $this.text('');
    while ((m = r.exec(pattern)) != null) {
      $(this).append('<span>' + m[0] + '</span>');
    }
  });
</script>
