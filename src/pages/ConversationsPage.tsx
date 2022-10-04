import { Outlet, useParams } from "react-router-dom";
import { ConversationPannel } from "../components/conversations/ConversationPanel";
import { ConversationSidebar } from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";
import { mockConversation } from "../__mocks__/mockConversation";

export const ConversationsPage = () => {
  const { id } = useParams();

  return (
    <Page>
      <ConversationSidebar conversations={mockConversation}/>
      {!id && <ConversationPannel />}
      <Outlet />
    </Page>
  );
};
