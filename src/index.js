require('noop');
let method;
const noop = global.noop;
const methods = [
  "assert",
  "clear",
  "count",
  "debug",
  "dir",
  "dirxml",
  "error",
  "exception",
  "group",
  "groupCollapsed",
  "groupEnd",
  "info",
  "log",
  "markTimeline",
  "profile",
  "profileEnd",
  "table",
  "time",
  "timeEnd",
  "timeStamp",
  "trace",
  "warn"
];
let length = methods.length;

while (length--) {
  method = methods[length];
  if (!console[method]) {
    console[method] = noop;
  }
}

export default console;
