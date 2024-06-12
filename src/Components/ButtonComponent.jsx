import React from 'react'
import { Button } from "flowbite-react";

const ButtonComponet = ({title, onClick}) => {
    return (
        <div>
          <Button onclick={onClick} gradientDuoTone="purpleToBlue">{title}</Button>
        </div>
    )
}