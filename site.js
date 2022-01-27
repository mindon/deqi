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
    2021-6-4,22:49,7.7,睡前
    6-4,18:36,8.5,晚餐前
    6-4,14:34,11,午餐后
    6-4,11:50,8,午餐前
    6-4,6:38,4.5,空腹
    6-3,21:22,6.1,睡前
    6-3,18:52,9.0,晚餐前
    6-3,14:53,10.7,午餐后
    6-3,9:12,7.8,早餐后
    6-3,6:30,8,空腹
    6-3,2:4,3.8,低血糖
    6-2,22:05,6.4,睡前
    6-2,17:27,12.7,晚餐前
    6-2,14:17,10.7,午餐后
    6-2,11:1,5.3,午餐前
    6-2,7:14,7.9,空腹`;
    p = '2021-06-04,2021-06-03,2021-06-02';
  }
  deqi.apply(dmm, 'load', data, p ? p.split(',') : undefined);
}

// fetch('dod.csv').then(resp=>resp.text()).then(ddup);
ddup(ds || localStorage.getItem('d') || '', ds ? true : false);
