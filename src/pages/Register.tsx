import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import {
  checkmarkCircleOutline,
  checkmarkDoneCircleOutline,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const doRegister = (e: any) => {
    e.preventDefault();
    console.log("Register");
    router.goBack();
  };
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"secondary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput
                      fill="outline"
                      label="First Name"
                      type="text"
                      labelPlacement="floating"
                      placeholder="Pavan"
                    ></IonInput>

                    <IonInput
                      className=""
                      fill="outline"
                      label="Last Name"
                      type="text"
                      labelPlacement="floating"
                      placeholder="Kumar"
                    ></IonInput>

                    <IonInput
                      className=""
                      fill="outline"
                      label="Email"
                      type="email"
                      labelPlacement="floating"
                      placeholder="bob@gmail.com"
                    ></IonInput>

                    <IonInput
                      className=""
                      fill="outline"
                      label="Password"
                      type="password"
                      labelPlacement="floating"
                      placeholder="******"
                    ></IonInput>

                    <IonInput
                      className="ion-margin-bottom"
                      fill="outline"
                      label="Confirm Password"
                      type="password"
                      labelPlacement="floating"
                      placeholder="******"
                    ></IonInput>

                    <IonButton
                      className="ion-margin-top"
                      type="submit"
                      expand="block"
                      color="secondary"
                    >
                      {" "}
                      Create an account{" "}
                      <IonIcon
                        icon={checkmarkDoneCircleOutline}
                        slot="end"
                      ></IonIcon>
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* <IonFooter>
                <IonToolbar>
                    <IonTitle> Contact US!! </IonTitle>
                </IonToolbar>
            </IonFooter> */}
    </IonPage>
  );
};

export default Register;
