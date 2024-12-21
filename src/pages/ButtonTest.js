import React from 'react'
import ButtonFilled from "../components/Buttons/CommonButtons/ButtonFilled";
import ButtonOutlined from "../components/Buttons/CommonButtons/ButtonOutlined";
import AddButton from "../components/Buttons/CommonButtons/AddButton";

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
