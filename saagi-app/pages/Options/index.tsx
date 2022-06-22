import { NextPage } from "next";
import data from "../api/data.json";


const Options: NextPage = () => {
    return (
        <div>{data}</div>
    )
}

export default Options;