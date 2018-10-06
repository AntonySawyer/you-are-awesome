// DO WHATEVER YOU WANT HERE
//we espect array with one key - argument = key
const createEnumerableProperty = (propertyName) => {return propertyName};
//symbol length always 0. argument = key - we return key in symbol
const createNotEnumerableProperty = (propertyName) => {return Symbol(propertyName)};
//magic here
const createProtoMagicObject = () => {
  let magicObj = function () {};
  magicObj.prototype = magicObj.__proto__;
  return magicObj;
};

const incrementor = () => {
  incrementor.count = incrementor.count ? incrementor.count + 1 : 1;
  incrementor.valueOf = function () {return incrementor.count};
  return incrementor;
};

const asyncIncrementor = () => {};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  let result = new Promise(res => {setTimeout(() => res(param), 1000)});
  return result;
};

const getDeepPropertiesCount = () => {};
// type of NULL == object
const createSerializedObject = () => {return null};

const toBuffer = () => {};
// in arguments is not numbers => sort without number compare
const sortByProto = (array) => {
  return array.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
