import React from "react";

const Form = props =>(
<div>
    <form onSubmit={props.getWeather}>
        <input type='text' name="longitude" placeholder="Longitude...(Ex-159)"/>
        <input type='text' name="lattitude" placeholder="Lattitude...(Ex-35)"/>
        <button>Get Weather</button>
    </form>
</div>
);

export default Form;