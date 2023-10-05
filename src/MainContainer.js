import React from 'react';
import { PassBook } from './PassBook';
import EntryForm from './EntryForm';

const MainContainer = () => {

  return (
    <div>
      <div class="container wrapper  px-4">
        <div class="row align-items-center py-5">
         <EntryForm/>
        </div>
        <PassBook/>
      </div>
    </div>
  )
}

export default MainContainer;