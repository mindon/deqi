// extract css rules and keyframes from stylesheets
export const xstyles = function(names, kfr) {
  const { origin } = globalThis.location;
  let rules = [...document.styleSheets].filter( ({ href, ownerNode }) => {
    return !href || (origin && href.startsWith(origin)) || ownerNode.getAttribute('crossorigin') === 'anonymous';
  });
  rules = rules.map((sheet) => [...(sheet.cssRules || sheet.rules || [])].map((rule) => {
    if (rule instanceof CSSStyleRule) {
      return [rule];
    } else if (rule instanceof CSSMediaRule && window.matchMedia(rule.conditionText)) {
      return [...rule.cssRules];
    } else if (rule instanceof CSSSupportsRule && CSS.supports(rule.conditionText)) {
      return [...rule.cssRules];
    } else if (kfr && rule instanceof CSSKeyframesRule && rule.name.match(kfr)) {
      return [rule];
    }
    return [];
  }));
  rules = rules.reduce((acc, rules) => acc.concat(...rules), []);
  rules = rules.filter(rule => {
    const matched = (rule.selectorText || '').match(names);
    if (matched || rule instanceof CSSKeyframesRule) {
      return true;
    }
    return false;
  });
  return rules;
};
