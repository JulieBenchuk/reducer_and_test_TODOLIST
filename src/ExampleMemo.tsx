import React, {useMemo, useState} from 'react';

export const ExampleMemo = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        console.log("resultA was called!")
        let tempResult = 1;
        for (let i=1; i<=a; i++) {
            let fake = 0;
            while (fake<100000000) {
                fake++;
            }
            tempResult = tempResult*i;
        } return tempResult;
    }, [a])

    for (let i=1; i<=b; i++) {
        console.log("resultB was called!")
        resultB *= i;
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
            <ExampleForReactMemo />
        </div>
    );
};

export const ExampleMemo2 = () => {
    console.log("Example 2 is rendering")
    const [counter, setCounter] = useState<number>(0);
    return <div>
        <div>{counter}</div>
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
}
const ExampleForReactMemo = React.memo(ExampleMemo2);

