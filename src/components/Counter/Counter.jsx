import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "../../libs/store/features/counter";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    const handleInc = () => {
        dispatch(increment());
    };

    const handleDec = () => {
        dispatch(decrement())
    }

    return (
        <div>
            {count}
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
    );
}