import styled from "styled-components";
import { PageProps } from "./stylesTypes";

export const DARK = "#131313";

export const InputField = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
`;

export const InputLabel = styled.label`
  color: #8f8f8f;
  font-size: 12px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  border: none;
  outline: none;
  font-size: 15px;
  border-radius: 10px;
  padding: 25px;
  transition: 250ms background-color ease;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:focus {
    background-color: #3415ff;
    border: 2px solid #fff;
  }
`;

export const Page = styled.div<PageProps>`
  height: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const ConversationsSidebarStyle = styled.aside`
  background-color: #1a1a1a;
  height: 100%;
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  border-right: 1px solid #5454543b;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & header {
    background-color: #151515;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
  }
`;

export const ConversationsChannelStyle = styled.div`
  height: 100%;
  margin-left: 350px;
`;

export const ConversationPanelStyle = styled.div`
  height: 100%;
  margin-left: 350px;
`;

export const SideBarConversationItemContainer = styled.div``;

export const SideBarConversationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  border-bottom: 1px solid #ffffff2b;
  box-sizing: border-box;
  padding: 18px 12px;
  background-color: #131313;
  cursor: pointer;
`;
