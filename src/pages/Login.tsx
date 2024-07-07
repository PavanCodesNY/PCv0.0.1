import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { closeSharp, logInOutline, personCircleOutline } from "ionicons/icons";
import PC from "../assets/pc.png";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";
const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("Seen:", seen);
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const doLogin = async (e: any) => {
    e.preventDefault();
    console.log("Register");
    await present("Logging in...");
    setTimeout(() => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    console.log("Fin");
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"secondary"}>
              <IonTitle>Pocket Counselor</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                  <div className="ion-text-center ion-padding">
                    <img src={PC} alt="PC Logo" width={"50%"}></img>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput
                          fill="outline"
                          label="Email"
                          type="email"
                          labelPlacement="floating"
                          placeholder="bob@gmail.com"
                        ></IonInput>

                        <IonInput
                          className="ion-margin-top"
                          fill="outline"
                          label="Password"
                          type="password"
                          labelPlacement="floating"
                          placeholder="******"
                        ></IonInput>

                        <IonButton
                          className="ion-margin-top"
                          type="submit"
                          expand="block"
                          color="primary"
                        >
                          {" "}
                          Login{" "}
                          <IonIcon icon={logInOutline} slot="end"></IonIcon>
                        </IonButton>

                        <IonButton
                          routerLink="/register"
                          className="ion-margin-top"
                          expand="block"
                          fill="outline"
                          color="secondary"
                        >
                          {" "}
                          Create Account{" "}
                          <IonIcon icon={personCircleOutline}> </IonIcon>{" "}
                        </IonButton>

                        <IonButton
                          onClick={seeIntroAgain}
                          size="small"
                          className="ion-margin-top"
                          expand="block"
                          fill="clear"
                          color="medium"
                        >
                          {" "}
                          Watch Intro Again
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
