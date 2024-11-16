import React from 'react'
import ButtonFilled from "../components/Buttons/ButtonFilled";
import ButtonOutlined from "../components/Buttons/ButtonOutlined";
import AddButton from "../components/Buttons/AddButton";

const ButtonTest = () => {
    const onPress = () => {
        console.log("Press");
    }

  return (
    <div>
        <ButtonFilled name="Hello" onClick={onPress}/>
        <ButtonOutlined name="Hi"/>
        <AddButton name="Hey" onClick={onPress}/>
    </div>
  )
}

export default ButtonTest
