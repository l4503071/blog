document.addEventListener('copy', function (event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  if (!clipboardData) { 
    return; 
  }
  const text = window.getSelection().toString();
  if (text) {
      event.preventDefault();
      clipboardData.setData('text/plain', text + '\n😁\n');
  }
});

document.addEventListener('paste', function (event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  if (!clipboardData) { 
    return; 
  }
  const items = clipboardData.items || [];
  const docPaste = document.getElementById('paste');
  for (let i = 0; i < items.length; i++) {
    if(items[i].kind === 'string') {
      items[i].getAsString((item)=>{
        docPaste.innerText = item;
      })
    }
  }
});
