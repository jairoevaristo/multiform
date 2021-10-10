import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Contact } from './pages/Contact';
import { Person } from './pages/Person';
import { Professional } from './pages/Professional';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Person} />
        <Route path="/pontact" component={Contact} />
        <Route path="/professional" component={Professional} />
      </Switch>
    </BrowserRouter>
  )
}