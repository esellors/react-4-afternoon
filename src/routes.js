import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default <Switch>
   <Route component={Home} exact path='/' />
   <Route component={About} path='/about' />
   <Route component={ClassList} path='/classlist/:class' />
   <Route component={Student} path='/student/:id' />
   <Route render={() => (
      <div style={{color:'red', textAlign:'center'}}>
         <h1>404 NOT FOUND</h1>
         <img src="http://3.bp.blogspot.com/-ZFKCd2ldIo4/T5u93aYEDbI/AAAAAAAAFJM/UVoWuuOgW1k/s1600/funny+angry+face+(3).jpg" />
      </div>
   )} />
</Switch>