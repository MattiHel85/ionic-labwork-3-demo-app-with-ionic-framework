import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Teams.css';

const Teams: React.FC = () => {

  interface TeamsResult {
    badgeUrl: String,
    name: String,
    nickname: String,
    founded: Number,
    groundName: String,
    groundCapacity: Number,
    country: String,
    league: String,
    coach: String
  }
  
  const [teams, setTeams] = useState<TeamsResult[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
      const jsonData = await response.json()
      setTeams(jsonData)
    }
    fetchTeams()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'warning'} style={{minHeight: '85px'}} >
          <IonTitle color={'light'} style={{fontSize: '50px', paddingTop: '10px'}}>Teamfinder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow justify-content-center>
            <IonCol>
              <p style={{fontSize: '50px', paddingTop: '10px', textAlign: 'center'}}>All Teams</p>
                <div className='custom-card'>
                  {teams.map((team) => (
                    <IonCard color={'light'} style={{width: '300px'}}>
                      <img alt="Team" src={String(team.badgeUrl)} style={{margin: '5px'}} />
                      <IonCardHeader>
                        <IonCardTitle>{String(team.name)}</IonCardTitle>
                        <IonCardSubtitle>Nickname: {String(team.nickname)}</IonCardSubtitle>
                      </IonCardHeader>
                  
                      <IonCardContent>
                        <p>Founded in:{String(team.founded)}</p>
                        <p>Plays at: {String(team.groundName)}</p>
                        <p>Ground capacity: {String(team.groundCapacity)}</p>
                        <p>Country: {String(team.country)}</p>
                        <p>League: {String(team.league)}</p>
                        <p>Coach: {String(team.coach)}</p>
                      </IonCardContent>
                    </IonCard>
                  ))}
                </div>              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Teams;
