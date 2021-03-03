const database = firebase.database();
var starCountRef = database.ref();
starCountRef.on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(val.ThongSo);
  if ( val.ThongSo.Control == 0 && !val.ThongSo.IsRun )
  {
    document.querySelector('#data').value = '';
  }
  document.querySelector("#dbNhietDo").innerHTML = `${val.ThongSo.Temperature} &#8451;`;
  document.querySelector("#dbPpm").innerHTML = `${Math.round(val.ThongSo.PPM*100)/100} ppm`;
  document.querySelector("#dbTrangThai").innerHTML = val.ThongSo.IsRun?"on":"off";
});

document.querySelector('button').addEventListener('click', (e) => {
  const data = document.querySelector('#data');
  const textSplit = data.value.split(' ');
  const setting = textSplit[0];
  let updates = {};
  document.querySelector('#message').textContent = '';

  if ( setting.toLowerCase() == 'calibrate' ) {
    const val = textSplit[1];
    updates['/ThongSo/Control'] = 1;
    updates['/ThongSo/Calibrate/CalibrationPPM'] = Number(val);
    firebase.database().ref().update(updates);
    console.log(val);
  }else if ( setting.toLowerCase() == 'del' ) {
    updates['/ThongSo/Control'] = -1;
    firebase.database().ref().update(updates);
  }else {
    updates['/ThongSo/Control'] = 0;
    firebase.database().ref().update(updates);
    document.querySelector('#message').textContent = 'Invalid value';
  }
})
