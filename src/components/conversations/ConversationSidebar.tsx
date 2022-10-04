import {
  ConversationsSidebarStyle,
  SideBarConversationItem,
  SideBarConversationItemContainer,
} from "../../utils/styles";
import { TbEdit } from "react-icons/tb";
import { conversationType } from "../../utils/types";
import { FC } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  conversations: conversationType[];
};

export const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();
  return (
    <ConversationsSidebarStyle>
      <header>
        Conversations <TbEdit size={32} />
      </header>
      <SideBarConversationItemContainer>
        {conversations.map((conversation) => (
          <SideBarConversationItem
            key={conversation.id}
            onClick={() => navigate(`/conversation/${conversation.id}`)}
          >
            <div className={styles.avatar}></div>
            <div>
              <span className={styles.conversationName}>
                {conversation.name}
              </span>
              <span className={styles.conversationMessage}>
                {conversation.lastMessage}
              </span>
            </div>
          </SideBarConversationItem>
        ))}
      </SideBarConversationItemContainer>
    </ConversationsSidebarStyle>
  );
};
