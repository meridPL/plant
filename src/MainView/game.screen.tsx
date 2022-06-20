import React, { useContext, useEffect, useState } from 'react'
import { Text, Image, ScrollView } from 'react-native';
import { getPlantsDB, Plant } from '../datebase/data';
import ContextApp from '../components/ContextApp'
import { observer } from 'mobx-react-lite';
import PairView from '../components/PairView';
import TestView from '../components/TestView';

const GameScreen = () => {
   const context = useContext(ContextApp)
   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      const result = await getPlantsDB()
      context.plant.setList(result)
   }

   const handleAction = () => {
      context.plant.setPosition()
   }

   return (
      <>
         {context.plant.list[context.plant.position] &&
            <TestView qData={context.plant.list[context.plant.position]} onActionFalse={handleAction} onActionTrue={handleAction} />
         }

      </>
   )
}

export default observer(GameScreen);