import { testProp, fc } from 'ava-fast-check';

///*bug*/ const contains = (pattern, text) => text.substr(1).indexOf(pattern) !== -1;
const contains = (pattern, text) => text.indexOf(pattern) !== -1;

testProp('The concatenation of a, b and c always contains b', [fc.string(), fc.string(), fc.string()], (a, b, c) => {
  return contains(b, a + b + c);
});
