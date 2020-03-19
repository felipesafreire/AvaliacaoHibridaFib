import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import AuthorList from "../components/AuthorList";

const AuthorPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Autores</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AuthorList />
      </IonContent>
    </IonPage>
  );
};

export default AuthorPage;
