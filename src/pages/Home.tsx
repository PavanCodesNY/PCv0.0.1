import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonIcon,
} from "@ionic/react";
import "../theme/Home.css";
import { arrowForwardCircleOutline, arrowForwardOutline } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false} className="ion-padding home-page">
        <IonGrid className="ion-padding center-content">
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonText className="poppins-medium">Pocket Counselor</IonText>
              <IonButton routerLink ="/login" size="small" expand="block" fill = "clear" color="dark">
                Continue{}
                <IonIcon icon = {arrowForwardCircleOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

