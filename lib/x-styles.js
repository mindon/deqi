// extract css rules and keyframes from stylesheets
export const xstyles = function (names, kfr) {
  const { origin } = globalThis.location;
  let styleSheets = [...document.styleSheets].filter(({ href, ownerNode }) => {
    return !href || (origin && href.startsWith(origin)) ||
      ownerNode.getAttribute("crossorigin") === "anonymous";
  });
  const aniname = /animation:\s*(\w+)/;
  const anis = [];
  let rules = styleSheets.map((sheet) =>
    [...(sheet.cssRules || sheet.rules || [])].map((rule) => {
      if (rule instanceof CSSStyleRule) {
        const m = rule.cssText.match(aniname);
        if (m) anis.push(m[1]);
        return [rule];
      } else if (
        rule instanceof CSSMediaRule && window.matchMedia(rule.conditionText)
      ) {
        return [...rule.cssRules];
      } else if (
        rule instanceof CSSSupportsRule && CSS.supports(rule.conditionText)
      ) {
        return [...rule.cssRules];
      } else if (
        kfr && rule instanceof CSSKeyframesRule &&
        (rule.name.match(kfr) || anis.some((k) => rule.name.endsWith(k)))
      ) {
        return [rule];
      }
      return [];
    })
  );
  rules = rules.reduce((acc, rules) => acc.concat(...rules), []);
  rules = rules.filter(
    names instanceof Function ? names : (rule) => {
      const matched = (rule.selectorText || "").match(names);
      if (matched || rule instanceof CSSKeyframesRule) {
        return true;
      }
      return false;
    },
  );
  return rules;
};
