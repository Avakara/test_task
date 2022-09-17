import MainMenu from '../main-menu/main-menu';
import Accordion from '../accordion/accordion';
import ChatEditor from '../chat-editor/chat-editor';
import AllMembers from '../members-list/member-list';

import './app.css';
import '../accordion/accordion.css';

function App() {
    const accordionData = [
        {
          title: 'INFO',
          content1: "rules",
          content2: "about",
          content3: "support",
          content4: "other",
          content5: "team"
        },
        {
          title: 'LOUNGES',
          content1: "main-chat",
          content2: "flud",
          content3: "meetup",
          content4: "for_tester",
          content5: "holders"
        },
        {
          title: 'ACTIVITES',
          content1: "catalog",
          content2: "play_2_earn",
          content3: "mini_games",
          content4: "quest",
          content5: "top_player"
        }
      ];



    return (
        <div class="app d-flex justify-content-between">
            <div className="app-menu" >
                <MainMenu/>
            </div>
            <div className="app-accordion">
                {accordionData.map(({ title, content1, content2, content3, content4, content5 }) => (
                <Accordion title={title} content1={content1} content2={content2} content3={content3} content4={content4} content5={content5}/>
                ))}
            </div>
            <div className='app-chat'>
                <ChatEditor/>
            </div>
            <div className='app-members'>
                <AllMembers/>
            </div>
        </div>
    )
}

export default App;