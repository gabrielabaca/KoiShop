import * as React from "react";
import { Header as MHeader, Icon, withBadge,} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { IHeaderProps } from "./index.type";



const HeaderView = ({cart}:IHeaderProps) => {

  const BadgedIcon = withBadge(15, {value:cart, hidden:(cart == 0 ? true: false), status:'success'})(Icon);
  
  const navigation  = useNavigation();
  return (
    <>
    <MHeader
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "Koi Shop",
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 'auto' }}
      leftComponent={
        <Icon 
          type='font-awesome-5'
          name='home'
          color='#fff'
          onPress={()=> navigation.navigate( 'Home' )}
        />
      }
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={
        
        <BadgedIcon 
          type='font-awesome-5'
          name="shopping-cart" 
          color='#fff'
          onPress={()=> navigation.navigate( 'Cart' )}
        />
        }
      rightContainerStyle={{paddingRight:15}}
      statusBarProps={{}}
    />
    </>
  );
}

export default HeaderView