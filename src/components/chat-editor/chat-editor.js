import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput} from "@pubnub/react-chat-components";

import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";


const pubnub = new PubNub({
  publishKey: "pub-c-463f1868-f2fd-4d52-9ec0-108df85032be",
  subscribeKey: "sub-c-fb76c606-5115-4be2-a1ab-c5cd13745653",
  uuid: "Kirun",
});
const currentChannel = "Default";
const theme = "support-dark";



function ChatEditor(): JSX.Element {
  return (
    <PubNubProvider client={pubnub}>
      {/* PubNubProvider is a part of the PubNub React SDK and allows you to access PubNub instance
        in components down the tree. */}
      <Chat {...{ currentChannel, theme}}>
        {/* Chat is an obligatory state provider. It allows you to configure some common component
          options, like the current channel and the general theme for the app. */}
        <MessageList enableReactions reactionsPicker={<Picker data={emojiData} />} />
        <MessageInput typingIndicator emojiPicker={<Picker data={emojiData} />} />
      </Chat>
    </PubNubProvider>
  );
}

export default ChatEditor;