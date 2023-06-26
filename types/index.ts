/*
    An interface in typescript specifies how a specific structure should look like, what variables and values should it have.
*/

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

/*Here, ? means that it is an optional prop*/

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
    /*setManufacturer is a function that takes 'manufacturer' as a string and does not return anything(void)*/
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}