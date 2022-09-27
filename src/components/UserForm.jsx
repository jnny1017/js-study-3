import Input from "./Input";
import Button from "./Button";
import * as Styled from "../styles/userStyles";

export default function UserForm({ state, setState }) {
  const { inputValue, userName } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      inputValue: event.target.value,
    });
  };

  const handleClick = () => {
    if (userName !== "") {
      localStorage.removeItem("user");
    }

    setState({
      ...state,
      userName: inputValue,
      inputValue: "",
    });

    localStorage.setItem("user", inputValue);
  };

  return (
    <Styled.Box>
      <strong>{userName}</strong>

      {userName === "" ? (
        <Styled.Form>
          <Input id="user" value={inputValue || ""} placeholder="아이디를 입력해주세요" onChange={handleChange} />
          <Button text="로그인" onClick={handleClick} />
        </Styled.Form>
      ) : (
        <Button text="로그아웃" onClick={handleClick} />
      )}
    </Styled.Box>
  );
}
