## NOTE

---

### Console

- console.js

### JS Intro

- Dyanmicall Typed Language
  Types are associated with values not variables.
  same variable can hold multiple types.
  we do not need to specify type.
  Most others are statically typed
  There are supersets of JS and addons to allow static typing (TypeScript, Flow)

### Variables: const, let, var

- variables.js

### Data Types

- datatypes.js
- Primitive Data Types:
  Stored directly in the location the variable accesses Stored on the stack.
  - String, Number, Boolean, Null, Undefined, Symbols(ES6)
- Reference Data Types:
  Accessed by reference
  Objects that are stored on the heap**(dynamically allocated memory **Search)
  A pointer to a location in memory
  - Arrays, Object Literals, Functions, Dates, Anything Else.. (object wrappers?\*\*Search)

### null

- Type of Null is Object?
  This stands since the beginning of JavaScript
  typeof null === 'object';
  In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. (reference)
  A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.
  (https://stackoverflow.com/questions/18808226/why-is-typeof-null-object)
- null 타입체크 시, 일치연산자 === 사용
  (https://curryyou.tistory.com/183)
