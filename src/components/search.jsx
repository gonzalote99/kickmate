import React, {useRef} from 'react';

export default function Search({util}) {
const ref = useRef();
const fillCells = () => util(ref.current.value);

return <input type='text' placeholder='search teams' onChange={fillCells} ref = {ref} />
}