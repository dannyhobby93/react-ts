import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";

function App() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <Heading title="Hello World" />
            <Section>
                <b>React + TypeScript + Vite</b>
            </Section>
            <Counter setCount={setCount}>
                <div>
                    <b>Count: {count}</b>
                </div>
            </Counter>
            <List
                items={["Coffee", "Code", "Gym"]}
                render={(item: string) => <span className="bold">{item}</span>}
            />
        </>
    );
}

export default App;
