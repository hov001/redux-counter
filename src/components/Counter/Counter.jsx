import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, calculate} from "../../libs/store/features/counter";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const step = useSelector((state) => state.counter.step);
    const min = useSelector((state) => state.counter.min);
    const max = useSelector((state) => state.counter.max);

    const handleInc = () => {
        dispatch(increment());
    };

    const handleDec = () => {
        dispatch(decrement())
    }

    const handleAmount = (e) => {

        const payload = {
            key: e.target.name,
            value: Number(e.target.value)
        }
        dispatch(calculate(payload))
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <input type="text" name='min' value={min} onChange={handleAmount} />
            <input type="text" name='max' value={max} onChange={handleAmount} />
            <input type="text" name='step' value={step} onChange={handleAmount} />
        </div>
    );
}