import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button} from '../Button';

export const Sort = ({
  sortKey, 
  onSort, 
  activeSortKey, 
  isSortReverse,
  children
})=>{
  const sortClass=classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey}
  );

  return(
    <div>
      <Button 
        onClick={()=>onSort(sortKey)}
        className={sortClass}
      >
        {children}
      </Button>
      { sortKey===activeSortKey 
      && (isSortReverse
      ? <i class="fas fa-arrow-up"></i>
      : <i class="fas fa-arrow-down"></i>)}
    </div>
  )
}

Sort.propTypes={
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func,
  children: PropTypes.node,
}