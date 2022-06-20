import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
   Home: undefined;
   Game: undefined;
 };
 
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;