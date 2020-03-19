import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from "@ionic/react";
import React from "react";
import BookList, { BookListProps } from "../components/BookList";
import { useParams } from "react-router";

const BookPage: React.FC = () => {

  let authorId = '';
  const params: BookListProps = useParams();
  if (params.authorId !== undefined) {
    authorId = params.authorId
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          {
            authorId ?
              <IonButtons slot="start">
                <IonBackButton defaultHref="/tabs/authors" />
              </IonButtons> : null
          }
          <IonTitle>Livros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <BookList authorId={authorId}></BookList>
      </IonContent>
    </IonPage>
  );
};

export default BookPage;
