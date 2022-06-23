import React, { useState } from 'react'
import CartView from './index.view'
import AsyncStorage from '@react-native-community/async-storage';


const CartContainer = () =>{
    const [data, setData] = useState()

    const readData = async () => {
        try {
        const result: any = [];
        const keys = await AsyncStorage.getAllKeys();
        
            for (const key of keys) {
                const val = await AsyncStorage.getItem(key);
                result.push({
                    key: key,
                    data: JSON.parse(val)
                })
            }
            setData(result)

        } catch (e) {
            console.log(e)
        }
      };

    const handleQuitar = async (item) =>{
        
            try {
                await AsyncStorage.removeItem(item);
                return true;
            }
            catch(exception) {
                return false;
            }
    };
    
    return (
        <CartView 
        data={data == undefined || data == '' || data == null ? '':data} 
        onQuitar={handleQuitar} 
        onRead={readData}/>
    )
};
export default CartContainer;