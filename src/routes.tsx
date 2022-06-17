import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createNativeStackNavigator();


export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen 
          name="OrphanagesMap"  
          component={OrphanagesMap}
          options={{
            headerShown: false
          }}
        />
        <Screen 
          name="OrphanageDetails"  
          component={OrphanageDetails}
        />
      </Navigator>
    </NavigationContainer>
  )
}