(() => {
  'use strict';
  const e = (t, n) => {
      Array.isArray(n)
        ? n.forEach((n) => e(t, n))
        : ((e, t) => {
            e.appendChild(t?.nodeType ? t : document.createTextNode(t));
          })(t, n);
    },
    t = (t, n) => {
      const { children: r } = n;
      if ('function' == typeof t) return t(n, r);
      const c = document.createElement(t);
      return (
        Object.entries(n || {}).forEach(([e, t]) => {
          e.startsWith('on') && e.toLowerCase() in window
            ? c.addEventListener(e.toLowerCase().substr(2), t)
            : c.setAttribute(e, t);
        }),
        e(c, r),
        c
      );
    },
    n = t,
    r = ({ children: e, onClick: n }) =>
      t('button', { onClick: n, children: e });
  document
    .getElementById('root')
    .appendChild(
      t(
        () =>
          n('div', {
            class: 'app',
            children: [
              t(r, { onClick: () => alert(1), children: 'Click 11' }),
              t(r, { onClick: () => alert(2), children: 'Click 12' }),
              t(r, { onClick: () => alert(3), children: 'Click 13' }),
              t(r, { onClick: () => alert(3), children: 'Click 14' }),
            ],
          }),
        {}
      )
    );
})();
