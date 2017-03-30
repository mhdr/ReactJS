import * as React from 'react'
export interface HomeProps {Link?:string }

export const Home = (props: HomeProps) => {
    return (
        <div>
            <a href="#">{props.Link}</a>
        </div>
    );
};