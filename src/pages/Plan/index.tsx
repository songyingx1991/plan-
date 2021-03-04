import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonCardHeader,IonCardTitle,IonCardContent } from '@ionic/react';
import moment from 'moment'
import './plan.scss';

const Tab1: React.FC = () => {
  const formart ='MM-DD'
  const data =[
    {title: moment().format(formart),description:'今日计划'},
    {title: moment().add(1,'days').format(formart),description:'明日计划',checked:false},
    {title: `${moment().week(moment().week()).startOf('week').format(formart)}~${moment().week(moment().week()).endOf('week').format(formart)}`,description:'本周计划' },
    {title: `${moment().month()+1}月`,description:'本月计划' }
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Plan</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          data.map((item)=>{
            return <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                {item.title}
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              {item.description}
        </IonCardContent>
          </IonCard>
          })
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
