import { ConversationsSidebarStyle } from "../../utils/styles";
import { TbEdit } from "react-icons/tb";

export const ConversationSidebar = () => {
  return (
    <ConversationsSidebarStyle>
      <header>
        Conversations <TbEdit size={32} />
      </header>
    </ConversationsSidebarStyle>
  );
};
