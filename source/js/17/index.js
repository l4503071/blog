function raf() {
  const docTime = document.getElementById('time');
  const count = 500000;
  let index = 0;
  let old_time = null;
  let current_time = 0; // 秒
  function cb(t) {
    if (old_time === null) {
      window.requestAnimationFrame((t)=>{
        old_time = t;
        cb();
      })
      return;
    }
    if (index < count) {
      window.requestAnimationFrame((t)=>{
        if( t - old_time >= current_time ) {
          // console.log(current_time, new Date().getSeconds());
          docTime.innerText = current_time/1000;
          current_time += 1000;
        }
        index+=1;
        cb();
      })
    }
  }
  cb();
}

function raf1() {
  const docProgress = document.getElementById('progress');
  let step = 10;
  let direction = 1; // 1:正 -1:反
  const count = 500000;
  let index = 0;
  let current_time = 0; // 秒
  function cb(t) {
    if (index < count) {
      window.requestAnimationFrame((t)=>{
        const width = parseFloat(window.getComputedStyle(docProgress).width) - direction * step;
        if (width < 0 ) {
          direction = -1;
        }
        if (width > 500) {
          direction = 1;
        }
        docProgress.style.width = width + 'px';
        current_time += 1000;
        index+=1;
        cb();
      })
    }
  }
  cb();
}


