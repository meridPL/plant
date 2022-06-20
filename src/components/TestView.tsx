import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import TestButton from "./TestButton";
import { colorPallete, styles } from '../styles';
import { observer } from 'mobx-react-lite';

/** This is template of view for a question 
 * qData.position - question's number
 * qData.source - this object should consist of uri of an image
 * qData.name - label for the image in question
 * onActionFalse - action if the label and the image do not match 
 * onActiontrue - action if the label and the image do match 
*/
const TestView = ({ qData, onActionFalse, onActionTrue }) => {
  return (
    <View>
      <View>
        <Text style={styles.testViewLabel}>Question {qData.position}</Text>
        <Image
          //@ts-ignore
          loadingIndicatorSource={
            <View>
              <Text>Loading...</Text>
            </View>
          }
          style={styles.testViewImage}
          source={qData.source}
          onLoad={() => {
            console.log('loading');
          }}
          resizeMethod={'scale'}
        />
        <Text style={styles.testViewLabel}>
          Is this {qData.name}?
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TestButton label={"TRUE"} color={colorPallete.trueColor} onAction={onActionTrue} />
        <TestButton label={"FALSE"} color={colorPallete.falseColor} onAction={onActionFalse} />
      </View>
    </View>
  );
}

export default observer(TestView)