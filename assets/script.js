/* Desktop stage (locked): authored at 1374x1145 design px and scaled with CSS zoom to the
   viewport width; rows stretch so the stage always reaches the bottom edge.
   Every narrower or portrait viewport is laid out by the CSS media queries above —
   this script does nothing there. */
(function(){
  var root=document.documentElement, mq=window.matchMedia('(min-width:1120px) and (min-aspect-ratio:1/1)');
  function fit(){
    if(!mq.matches){ root.style.removeProperty('--k'); root.style.removeProperty('--stage-h'); return; }
    var k=root.clientWidth/1374;
    root.style.setProperty('--k', k);
    root.style.setProperty('--stage-h', Math.max(1145, window.innerHeight/k)+'px');
  }
  fit();
  window.addEventListener('resize', fit, {passive:true});
  if (mq.addEventListener) mq.addEventListener('change', fit);
})();
