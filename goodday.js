function reqTime(returnType) {
  const dateMod = new Date();
  if (returnType == 'str') {
    return `${dateMod.getHours()}:${dateMod.getMinutes()}`;
  }
  if (returnType == 'int') {
    return [dateMod.getHours(), dateMod.getMinutes()];
  }
}


function insertElements() {
  const intCurTime = reqTime('int');
  let imgPath = '';
  let timeText = '';
  if (intCurTime[0] >= 6 && intCurTime[0] < 12) {
    imgPath = 'images/morning.png';
    timeText = 'morgen';
  } else if (intCurTime[0] >= 12 && intCurTime[0] < 18) {
    imgPath = 'images/afternoon.png';
    timeText = 'middag';
  } else if (intCurTime[0] >= 18 && intCurTime[0] < 24) {
    imgPath = 'images/evening.png';
    timeText = 'avond';
  } else if (intCurTime[0] >= 0 && intCurTime[0] < 6) {
    imgPath = 'images/night.png';
    timeText = 'nacht';
  }
  document.getElementById('bg-image').style.backgroundImage = `url('${imgPath}')`;
  document.getElementById('caption').appendChild(Object.assign(document.createElement('p'), {innerText: `Goede ${timeText}!`}));
  let strCurTime = reqTime('str');
  if (intCurTime[1] < 10) {
    let Hourlength = 1; 
    if (intCurTime[0] >= 10) {
      Hourlength = 2;
      strCurTime = strCurTime.slice(0, (1 + Hourlength)) + '0' + strCurTime.slice(3);
    } else {
      strCurTime = strCurTime.slice(0, (1 + Hourlength)) + '0' + strCurTime.slice(2);
    }
  }
  document.getElementById('caption').appendChild(Object.assign(document.createElement('p'), {innerText: `Het is nu ${strCurTime}`}));
}


insertElements();