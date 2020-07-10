import React from 'react';
import {Button} from 'reactstrap';
function Header(props){

   return <div className='main-header  align-items-center flex-column'>
    <h1 className='display-2'
    style={{zIndex:'2',float:'right',}}
    >Game of Thrones</h1>
    <Button onClick={() => {
        props.getBook();
    }} id='primary-btn' className='primary-b-pos'  size="lg" style={{zIndex:'2',backgroundColor:'#313E15'}}>Show Books</Button>
   </div> 
}

export default Header;