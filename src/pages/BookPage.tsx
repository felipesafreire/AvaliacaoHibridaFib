import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import BookList from "../components/BookList";

const BookPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Livros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <BookList></BookList>
      </IonContent>
    </IonPage>
  );
};

export default BookPage;
