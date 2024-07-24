import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  homeOutline,
  list,
  logOutOutline,
  newspaperOutline,
} from "ionicons/icons";
import React from "react";
import List from "./List";
import { Redirect, Route } from "react-router";
import Settings from "./Settings";

const Menu: React.FC = () => {
  const paths = [
    {
      name: "Home",
      url: "/app/list",
      icon: homeOutline,
      routerD: "none",
    },
    {
      name: "Settings",
      url: "/app/settings",
      icon: newspaperOutline,
      routerD: "none",
    },
  ];
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"secondary"}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={item.url} routerDirection="none">
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonMenuToggle autoHide={false} className="ion-padding">
              <IonButton expand="block" routerLink="/login" routerDirection="root">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Settings} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
