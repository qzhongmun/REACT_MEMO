# REACT_MEMO

REACT MEMO vs USECALLBACK vs USEMEMO

1. Memo hook
   aviod child component to rerender, optimize the performance

   import React, { memo } from "react";
   export default memo(Child);

2. Usecallback
   Let child component to rerender efficiently,input object will not break memo effect.

import React, { useState,useCallback} from "react";
const [childNumber, setChildNumber] = useState(0);
const memoizedCallback = useCallback((number) => changeChildNumber(number),[]);
function changeChildNumber(number) {setChildNumber(number);}
<Child changeNumber={memoizedCallback} number={childNumber} />

3. Usememo
   avoid part of the function rerender in the same page, optimize the performance. For example, the Math.max(...arr) will only calculate once if the the arr didn't change.

import React, { useMemo } from "react";

const [arr, setArr] = useState([
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);

const memiozedVale = useMemo(() => getLargestNumber(), [arr]);

function getLargestNumber() {
console.log("I am working");
return Math.max(...arr);
}

<h1>Largest Number: {memiozedVale}</h1>
