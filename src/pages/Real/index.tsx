import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList,IonItem,IonLabel,IonItemGroup,IonItemDivider,IonItemOptions,IonItemOption,IonItemSliding,IonListHeader ,IonChip,IonCheckbox  } from '@ionic/react';
import './real.scss';

const Real: React.FC = () => {
  const levelOptions={
    HIGH:'danger',
    MD:'primary',
    LOW: 'success'
  } as any
  const planData=[
    {level:'HIGH',order:1,content:'1',finish:false},
    {level:'HIGH',order:2,content:'2',finish:false},
    {level:'MD',order:1,content:'',finish:false},
    {level:'LOW',order:1,content:'',finish:false},
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>实施</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
        <IonListHeader>今日计划</IonListHeader>
        {
          planData.map((item)=>{
              return <IonItemSliding>
              <IonItem>
                 <IonChip color={levelOptions[item.level]}>
                      <IonLabel>{item.order}</IonLabel>
                  </IonChip>
                  <IonLabel>{item.content}</IonLabel>
                  <IonCheckbox checked={item.finish} color="secondary" ></IonCheckbox>
              </IonItem>
              <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>完成</IonItemOption>
          <IonItemOption onClick={() => {}} color="secondary">完成度</IonItemOption>
        </IonItemOptions>
              </IonItemSliding>
          })
        }
      </IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonList>
      <IonItemGroup>
      <IonItemDivider>
        <IonLabel>A</IonLabel>
      </IonItemDivider>
      <IonItem>
        <IonLabel>Angola</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Argentina</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Armenia</IonLabel>
      </IonItem>
    </IonItemGroup>

      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
        <IonLabel>Pokémon Yellow</IonLabel>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Real;
