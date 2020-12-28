//设置随机颜色
//颜色对象
function backgroundColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
}

//获取随机边框大小和透明度
function borderHeight() {
  const options = (Math.random()).toFixed(1)
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return '3px solid rgba(' + r + ',' + g + ',' + b + ',0.8)'
}

export {
  backgroundColor,
  borderHeight
}