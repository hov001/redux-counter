import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, amount} from "../../libs/store/features/counter";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const step = useSelector((state) => state.counter.step);

    console.log(count)

    const handleInc = () => {
        dispatch(increment());
    };

    const handleDec = () => {
        dispatch(decrement())
    }

    const handleAmount = (e) => {
        const value = Number(e.target.value)
        dispatch(amount(value))
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <input type="text" name='min' />
            <input type="text" name='max' />
            <input type="text" name='step' value={step} onChange={handleAmount} />
        </div>
    );
}