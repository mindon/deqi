// import './de.js';
import './de.js?m=de-dm.js;de-dmm.js;hello::world.js,mindon.js';

// deqi.apply('hello::world,mindon', 'testing', 'Mindon');
// deqi.apply('hello::world,mindon', function(d) {
//   console.log(`Working on ${d}`);
// }, 'Nothing');

// deqi.apply((tags) => {
//   console.log(tags, '======');
//   return false; // every ready
// }, (d)=>{
//   console.log(d, 'NOT called');
// }, 'Hey');

if(screen.width<640) {
  document.querySelector('meta[name="viewport"]').setAttribute('content',`user-scalable=yes,width=640,scale=${(screen.width/640).toFixed(2)}`);
}

const dm = document.querySelector('de-dm'),
  dmm = document.querySelector('de-dmm');
dmm.addEventListener('changed', (evt) => {
  const {view, picked, data, changed} = evt.detail;

  if (view) {
    deqi.apply(dm, 'load', {data: view});
  }
  if (dmm.readonly) { // DO NOT SAVE shared
    return;
  }
  if (changed) {
    localStorage.setItem('d', dmm.raw(data));
  }
  if (picked.length == 0) {
    localStorage.removeItem('p');
  } else {
    localStorage.setItem('p', picked.join(','));
  }
});

// shared
const ds = (function () {
  const m = location.search.match(/[?&]z=([^&]+)/);
  if (!m) return '';
  try {
    return decodeURIComponent(escape(atob(m[1])));
  } catch (e) { }
  return '';
})();
function ddup(data, readonly) {
  let p = localStorage.getItem('p');
  dmm.readonly = readonly;
  if (!data) {
    data = `日期,时间,血糖,备注
    2021-06-04,22:49,7.7,睡前
    06-04,18:36,8.5,晚餐前
    06-04,14:34,11,午餐后
    06-04,11:50,8,午餐前
    06-04,06:38,4.5,空腹
    06-03,21:22,6.1,睡前
    06-03,18:52,9.0,晚餐前
    06-03,14:53,10.7,午餐后
    06-03,09:12,7.8,早餐后
    06-03,06:30,8,空腹
    06-03,02:04,3.8,低血糖
    06-02,22:05,6.4,睡前
    06-02,17:27,12.7,晚餐前
    06-02,14:17,10.7,午餐后
    06-02,11:01,5.3,午餐前
    06-02,07:14,7.9,空腹`;
    p = '2021-06-04,2021-06-03,2021-06-02';
  }
  deqi.apply(dmm, 'load', data, p ? p.split(',') : undefined);
}

// fetch('dod.csv').then(resp=>resp.text()).then(ddup);
ddup(ds || localStorage.getItem('d') || '', ds ? true : false);
