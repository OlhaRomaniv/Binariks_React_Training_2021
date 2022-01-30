import React from 'react';
import fetchAction from '../actions/fetchAction';
import { useDispatch} from 'react-redux';

export default function ChangeImage() {
    const dispatch = useDispatch();
  return (
      <div>
          <button onClick={() => dispatch(fetchAction())}>Change</button>
      </div>
  );
}
