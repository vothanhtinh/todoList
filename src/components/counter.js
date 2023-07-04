import '../App.css';

import { Button,Space } from '@antscorp/antsomi-ui';

import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, incrementByAmount,decrementByAmount } from '../features/counter/counter';

const Counter =()=>{
    const count = useSelector((state) =>  state.count.value);
    const dispatch = useDispatch();
    return (
        <>
          <div className="App">
            <h2>{count}</h2>
            
            <Space>
            <Button
              danger
              htmlType="button"
              onClick={()=>dispatch(decrement())}
              shape="default"
              size="middle"
              type="default"
            >
            Giảm
            </Button>
            <Button
              danger
              htmlType="button"
              onClick={()=>dispatch(decrementByAmount(3))}
              shape="default"
              size="middle"
              type="default"
            >
            Giảm 3
            </Button>
            <Button
              danger
              htmlType="button"
              onClick={()=>dispatch(increment())}
              shape="default"
              size="middle"
              type="default"
            >
            Tăng
            </Button>
            <Button
              danger
              htmlType="button"
              onClick={()=>dispatch(incrementByAmount(3))}
              shape="default"
              size="middle"
              type="default"
            >
            Tăng 3
            </Button>
            </Space>
            
          </div>
          <div>
            
          </div>
        </>
      );
}
export default Counter