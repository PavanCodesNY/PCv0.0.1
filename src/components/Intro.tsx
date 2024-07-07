import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Intro.css";
import Intro1 from "./img1.svg";
import Intro2 from "./img2.svg";
import Intro3 from "./img3.svg";

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const SwiperPreviousButton = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slidePrev()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Intro1} alt="Slide 1" />
        <IonText>
          <h3> RANDOM IMAGE ONE</h3>
        </IonText>
        <SwiperButtonNext> Next </SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Intro2} alt="Slide 2" />
        <IonText>
          <h3> RANDOM IMAGE TWO</h3>
        </IonText>
        <SwiperButtonNext> Next </SwiperButtonNext>
      </SwiperSlide>
      {/* Two buttons of the same size side by side use Ion Grid */}
      <SwiperSlide>
        <IonGrid className="ion-grid">
          <img src={Intro3} alt="Slide 3" />
          <IonText>
            <h3> RANDOM IMAGE THREE</h3>
          </IonText>
          <IonRow>
            <IonCol>
              <IonButton onClick={() => onFinish()}> Finish </IonButton>
            </IonCol>
            <IonCol>
              <SwiperPreviousButton> Back </SwiperPreviousButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
