import React from "react";
import "./Input.css";

// Pure component, doesn't handle states etc.

export const Input = props => (<div className="input">{props.input}</div>);
