import "./App.css";
import Layout from './Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import QuizList from "./containers/QuizList/QuizList";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/" component={QuizList}/>
      </Switch>
    </Layout>
  );
}

export default App;
