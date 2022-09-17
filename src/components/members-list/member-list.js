import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MemberList} from "@pubnub/react-chat-components";
import './member-list.css';

const pubnub = new PubNub({
  publishKey: "pub-c-463f1868-f2fd-4d52-9ec0-108df85032be",
  subscribeKey: "sub-c-fb76c606-5115-4be2-a1ab-c5cd13745653",
  uuid: "Kirun",
});
const currentChannel = "Default";
const theme = "light";



function AllMembers(): JSX.Element {
  return (
    <PubNubProvider client={pubnub}>
      <Chat {...{ currentChannel, theme}}>
      <MemberList
        members={[
            {
            custom: {
                title: 'VP Marketing'
            },
            eTag: 'AZDyqJ7andTHlAE',
            email: null,
            externalId: null,
            id: 'user_3c4400761cba4b65b77b6cae55fc21eb',
            name: 'Anna Gordon',
            profileUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
            updated: '2020-09-23T09:23:33.598365Z'
            },
            {
            custom: {
                title: 'Environmental Tech'
            },
            eTag: 'AeTqgs2X16ql2wE',
            email: null,
            externalId: null,
            id: 'user_def709b1adfc4e67b98bb7a820f581b1',
            name: 'Luis Griffin',
            profileUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
            updated: '2020-09-23T09:23:31.809198Z'
            },
            {
            custom: {
                title: 'VP Sales'
            },
            eTag: 'Acmf1d+vmczaKw',
            email: null,
            externalId: null,
            id: 'user_a56c20222c484ff8987ec9b69b0c8f5b',
            name: 'Sue Flores',
            profileUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
            updated: '2020-09-23T09:23:31.837372Z'
            },
            {
            custom: {
                title: 'Nurse Practicioner'
            },
            eTag: 'Acyi+ufEqbOT7QE',
            email: null,
            externalId: null,
            id: 'user_608169810dc143998c7964485415a5c7',
            name: 'Stephen West',
            profileUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
            updated: '2020-09-23T09:23:33.606653Z'
            },
            {
            custom: {
                title: 'Registered Nurse'
            },
            eTag: 'AYjs1ImXqfrDqQE',
            email: null,
            externalId: null,
            id: 'user_363d9255193e45f19513f4bfa9901fbe',
            name: 'Jon Warren',
            profileUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
            updated: '2020-09-23T09:23:33.480424Z'
            }
        ]}
        onMemberClicked={function noRefCheck(){}}/>
      </Chat>
    </PubNubProvider>
  );
}

export default AllMembers;