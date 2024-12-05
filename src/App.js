import { ChatEngine } from 'react-chat-engine';

import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed  from './components/ChatFeed';

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine 
            height='100vh'
            projectID="6599cc4d-61f6-4fc1-9427-6987a168a44c"
            // userName='maheshkothawade'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


        />
         
    );
}

export default App;
