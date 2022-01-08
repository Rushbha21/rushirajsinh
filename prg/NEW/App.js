import React from "react";
import { useState } from "react";
import { Button, Text, View } from "react-native";
const Cat =(props)=>{
  const [ishungry,setIsHungry]=useState(true);

  return(
<View>
  <Text>I am  {props.name} , and I am {ishungry ? "hungry":"full"}</Text>
  <Button
  onPress={()=>{setIsHungry(false);}}
  disabled={!ishungry}
  title={ishungry ? "Pour me some milk": "THANK YOU "}/>
</View>
  );

}

const Cafe1=()=>{
  return(
    <View>
    <Text>
      Welcome
    </Text>
    <Cat name="Rushirajsinh"/>
    <Cat name="Rushbha"/>
    <Cat name="CAt"/>
      </View>
  );
}
export default Cafe1;