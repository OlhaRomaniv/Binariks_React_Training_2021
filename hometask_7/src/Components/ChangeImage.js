import React from 'react';
import fetchAction from '../actions/fetchAction';
import { useDispatch} from 'react-redux';
import './ChangeImage.css';

export default function ChangeImage() {
    const dispatch = useDispatch();
  return (
      <div>
          <button onClick={() => dispatch(fetchAction())}>Change</button>
      </div>
  );
}
