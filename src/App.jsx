import { useState } from "react";

import UserForm from "./components/UserForm";
import CommentList from "./components/CommentList";

import * as Styled from "./styles/userStyles";

export default function App() {
  const [state, setState] = useState({
    userName: "",
    inputValue: "",
  });

  return (
    <Styled.Wrap>
      <UserForm state={state} setState={setState} />
      <CommentList state={state} setState={setState} />
    </Styled.Wrap>
  );
}
