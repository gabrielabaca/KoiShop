import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contentView: {
      display:'flex',
    },

    pricingButtons:{ 
      display:'flex',
      flexDirection: 'column', 
      justifyContent: 'center',
    },
    pricingAddCart:{
      display:'flex', 
      flexDirection:'row',
      justifyContent:'center'
    },
    pricingCantidad:{
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'center',
      alignItems:'center', 
      marginRight:5, 
      marginLeft:5
    },
    paginas: {
      flex: 1,
      paddingLeft:25,
      paddingRight:25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:25,
      marginBottom:25
    }
    });
    