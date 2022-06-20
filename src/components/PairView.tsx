import React from 'react'
import { observer } from 'mobx-react-lite';
import { Plant } from '../datebase/data';
import { Text, Image, ScrollView } from 'react-native';

const PairView = ({ source, name }: Plant) => {
   return (
      <>
         <Image
            source={{ uri: `https:${source}` }}
            style={{ width: 100, height: 100 }}
         />
         <Text>{name}</Text>
      </>
   )
}

export default observer(PairView);