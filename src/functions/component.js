export function if_prop_present(props, map) {
  let val = map.Default;
  Object.keys(map).forEach((v) => {
    if (v in props) {
      val = map[v];
    }
  });
  return val;
};
