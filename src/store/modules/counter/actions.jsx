export const addCounter = (count) => ({
  type: "ADD_COUNTER",
  count: count + 1,
});

export const subCounter = (count) => ({
  type: "SUB_COUNTER",
  count: count - 1,
});
