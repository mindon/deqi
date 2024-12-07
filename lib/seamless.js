// restore animation timepoint from first animation of an element
export function restore(element, key) {
  const anis = Array.from(element.getAnimations());
  if (anis.length === 0) return;
  if (key) element.dataset.seamless = key;
  key = key || `sla.${element.id || element.tagName}`;
  const s = sessionStorage.getItem(key);
  if (!s) return;
  const t = s.split(",").map((v) => parseFloat(v));
  Array.from(anis).some((ani, i) => {
    ani.pause();
    ani.startTime = t[0] || 0;
    ani.currentTime = t[1] || 0;
    ani.play();
    return false;
  });
}

// keep animation timepoint, only use first animation (disconnect and beforeunload)
export function save(element, key) {
  const anis = Array.from(element.getAnimations());
  if (!anis.length) return;
  Array.from(anis).some((ani: Animation) => {
    ani.pause();
  });
  const { effect, startTime, timeline } = anis[0];
  const at = effect.target;
  if (!at) return;
  const dur = getComputedStyle(at).animationDuration;
  sessionStorage.setItem(
    key || element.dataset.seamless,
    [
      startTime ?? 0,
      ((timeline?.currentTime ?? 0) %
        (parseInt(dur.replace("ms", "").replace("s", "000"), 10)))
        .toFixed(2),
    ].join(","),
  );
}
