import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'warning'} style={{minHeight: '85px'}} className="custom-nav" >
          <IonTitle color={'light'} style={{fontSize: '50px', paddingTop: '10px'}}>Teamfinder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className='custom-card'>
                <IonCard color={'light'} style={{width: '300px'}}>
                  <img alt="Team" src="https://logowik.com/content/uploads/images/premier-league3330.jpg" />
                  <IonCardHeader>
                    <IonCardTitle>Welcome to Teamfinder</IonCardTitle>
                    <IonCardSubtitle>Your guide to Premier League football</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <p>
                      This app was built for my third assignment for the Introduction to Mobile App Design and Development at Laurea UAS in Espoo, Finland.
                    </p>
                    <p>
                      The API used was built by me, Matti Simpson as part of my Fullstack course, also at Laurea.
                    </p>
                  </IonCardContent>
                </IonCard>
              </div>           
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
