import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPositian';
import Header from './components/Header';

const { Navigator, Screen } = createNativeStackNavigator();


export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator 
        initialRouteName='OrphanagesMap'
        screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#f2f3f5'}}}
      
      >
        <Screen 
          name="OrphanagesMap"  
          component={OrphanagesMap}
          
        />
        <Screen 
          name="OrphanageDetails"  
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: ()=> <Header showCancel={false} title="Orfanato"/>
          }}
        />
        <Screen 
          name="SelectMapPosition"  
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: ()=> <Header title="Selecione no mapa"/>
          }}
        />
        <Screen 
          name="OrphanageData"  
          component={OrphanageData}
          options={{
            headerShown: true,
            header: ()=> <Header title="Informe os dados"/>
          }}
        />

      </Navigator>
    </NavigationContainer>
  )
}