/// <reference types="react" />
import * as React from 'react';
import "./CustomButton.css";
export interface CustomButtonProps {
    number: number;
}
export declare class CustomButton extends React.Component<CustomButtonProps, undefined> {
    private number;
    constructor(props: CustomButtonProps);
    increaseNumber(): void;
    render(): JSX.Element;
}
