import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';
import ProfilesList from './components/profiles/ProfilesList';
import ProfileDetails from './components/profiles/ProfileDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/post/:post_id" component={PostDetails}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/create" component={CreatePost}></Route>
          <Route path="/profiles" component={ProfilesList}></Route>
          <Route path="/profile" component={ProfileDetails}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
