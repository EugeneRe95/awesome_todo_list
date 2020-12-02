import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import AllTasks from './components/AllTasks'
import Today from './components/Today'
import Done from './components/Done'

import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import Active from './components/Active';
import Greeting from './components/Greeting';
import Toolbar from './components/Toolbar';

import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Task from './components/Task';

function App() {
  return (
    <Router basename="/awesome_todo_list">
      <Route
        render={({ location }) => ( <> 
        <Header/>
         <div id = "main-wrapper" >
            <div id="content">
          <Toolbar/>
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={900} key={location.key}>
            <Switch location={location}>
              <Route exact path="/" component={AllTasks}/>
              <Route path="/active-tasks" component={Active}/>
              <Route path="/today-tasks" component={Today}/>
              <Route path="/done-tasks" component={Done}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup>
          <CSSTransition classNames="slide" timeout={900} key={location.key}>
            <Switch location={location}>
              <Route exact path="/tasks/:id" render={(globalProps, props)=> <Task globalProps={globalProps}{...props} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      </div>
      <Greeting /> 
      </>
        )}/>
    </Router>
  );
}

export default App;
