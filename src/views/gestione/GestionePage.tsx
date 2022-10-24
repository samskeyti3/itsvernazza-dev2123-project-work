import { Tab, Tabs } from "react-bootstrap";
import Dati from "./Dati";

const GestionePage = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="home" title="IL MIO CONTO">
                <Dati />
            </Tab>
            <Tab eventKey="profile" title="COSTI">

            </Tab>
            <Tab eventKey="longer-tab" title="DATI PATRIMONIALI">

            </Tab>
            <Tab eventKey="contact" title="ELIMINA CONTO">

            </Tab>
        </Tabs>
    );
};
export default GestionePage;
