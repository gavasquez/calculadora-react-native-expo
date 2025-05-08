import { Pressable, Text } from 'react-native';
import { appStyles, colors } from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}


export const CalculatorButton = ( { label, color = colors.darGray, doubleSize = false, blackText = false, onPress }: Props ) => {
  return (
    <Pressable
      onPress={ () => onPress() }
      style={ ( { pressed } ) => ( {
        ...appStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80
      } ) }>
      <Text style={ {
        ...appStyles.buttonText,
        color: blackText ? 'black' : 'white'
      } }>{ label }</Text>
    </Pressable>
  );
};