import React from "react";
import { Buttonprops } from "@/interfaces";

const Button: React.FC<Buttonprops> = ({title, size="medium",shape="rounded-md"}) => {
    const sizeClasses = {
          small: "px-3 py-1 text-sm",
          medium: "px-5 py-2 text-base",
          large: "px-7 py-3 text-lg",
    }
    return (
        <button className={"bg-blue-600 text-white font-semibold $(sizeClasses[size]} ${shape}"}>
            {title}
        </button>
    )
}
export default Button