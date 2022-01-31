import React from 'react';
import fetchApi from '../actions/fetchAction';
import { useDispatch} from 'react-redux';
import './ChangeImage.css';

export default function ChangeImage() {
    const dispatch = useDispatch();

    const dispatchApi = () =>{
        dispatch(fetchApi())
    };
    
  return (
      <div>
          <button onClick={dispatchApi}>Change</button>
      </div>
  );
}
