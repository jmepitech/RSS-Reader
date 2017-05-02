import * as React from "react";

export interface HomeProps { firstName: string; lastname: string; }

export const Home = (props: HomeProps) => <h1>Hello {props.firstName} {props.lastname}!</h1>;