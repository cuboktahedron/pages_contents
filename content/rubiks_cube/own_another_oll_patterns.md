+++
date = "2017-01-15T20:50:12+09:00"
title = "OLL手順(別回し手順)"
Tags = ["rubiks_cube", "oll"]

css = "own_oll_patterns.css"
+++
<div class="pattern">
  <div class="lc"><img class="type-c" src="/rubiks_cube/img/oll/25.png"></div><div class="rc"><p>25c</p><p class="steps">RL'UR'U'LURU'R'</p></div>
</div>

<script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>

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

