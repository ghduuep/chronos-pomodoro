import './styles/global.css';
import './styles/theme.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';

function App() {
    return (
        <>
       <Container><Heading>Pomodoro Timer</Heading></Container>
        </>
    );
}

export { App };