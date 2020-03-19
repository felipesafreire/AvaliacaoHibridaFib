import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonIcon
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { bookOutline, peopleOutline } from "ionicons/icons";
import BookPage from "./BookPage";
import AuthorPage from "./AuthorPage";

const TabsPage: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/books" component={BookPage} />
        <Route path="/tabs/authors" component={AuthorPage} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/authors" />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="primary">
        <IonTabButton tab="authors" href="/tabs/authors">
          <IonTitle>Autores</IonTitle>
          <IonIcon icon={peopleOutline}></IonIcon>
        </IonTabButton>
        <IonTabButton tab="books" href="/tabs/books">
          <IonTitle>Livros</IonTitle>
          <IonIcon icon={bookOutline}></IonIcon>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabsPage;
