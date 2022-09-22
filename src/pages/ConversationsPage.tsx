import { Outlet, useParams } from "react-router-dom";
import { ConversationPannel } from "../components/conversations/ConversationPanel";
import { ConversationSidebar } from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";

export const ConversationsPage = () => {
  const { id } = useParams();

  return (
    <Page>
      <ConversationSidebar />
      {!id && <ConversationPannel />}
      <Outlet />
    </Page>
  );
};
