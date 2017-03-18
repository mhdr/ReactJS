/// <reference types="react" />
import * as React from 'react';
export interface HomeProps {
    number?: number;
}
export interface HomeState {
    number: number;
}
export declare class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps);
    static defaultProps: Partial<HomeProps>;
    increaseNumber(): void;
    render(): JSX.Element;
}
