import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Plan from './pages/Plan/index';
import Real from './pages/Real/index';
import Count from './pages/Count/index';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/plan">
            <Plan />
          </Route>
          <Route exact path="/real">
            <Real />
          </Route>
          <Route path="/count">
            <Count />
          </Route>
          <Route exact path="/">
            <Redirect to="/real" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="plan" href="/plan">
            <IonIcon icon={triangle} />
            <IonLabel>计划</IonLabel>
          </IonTabButton>
          <IonTabButton tab="real" href="/real">
            <IonIcon icon={ellipse} />
            <IonLabel>实施</IonLabel>
          </IonTabButton>
          <IonTabButton tab="count" href="/count">
            <IonIcon icon={square} />
            <IonLabel>积分</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
