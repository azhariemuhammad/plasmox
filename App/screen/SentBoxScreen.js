import React, {useState, useEffect} from 'react'
import {Container, Content} from "native-base";

import ListCase from "../component/ListCase";
import {baseService} from "../services";

const SentBoxScreen = () => {

    const [cases, setCases] = useState([]);

    useEffect(() => {
        async function getCaseInfo() {
            const result = await baseService().getCaseInformation()
            setCases(result.data)
        }
        getCaseInfo();
    }, []);

    return (
        <Container>
            <ListCase data={cases} />
        </Container>
    )
}

export default SentBoxScreen
