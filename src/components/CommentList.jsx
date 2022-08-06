import { useEffect, useState } from "react";

import Input from "./Input";
import Button from "./Button";

import * as Styled from "../styles/userStyles";

export default function CommentList({ state, setState }) {
  const [comment, setComment] = useState({
    newId: 0,
    commentValue: "",
    cards: [],
  });

  const { userName } = state;
  const { newId, commentValue, cards } = comment;

  const handleChange = (event) => {
    setComment({
      ...comment,
      commentValue: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleClick = () => {
    const localDate = new Date().toLocaleDateString();

    setComment({
      ...comment,
      newId: newId + 1,
      cards: [{ id: newId, user: userName, message: commentValue, date: localDate }, ...cards],
      commentValue: "",
    });
  };

  const handleDelete = (id) => {
    setComment({
      ...comment,
      cards: cards.filter((card) => card.id !== id),
    });
  };

  useEffect(() => {
    const userItems = localStorage.getItem("user");

    if (userItems !== "") {
      setState({
        userName: userItems,
      });
    }
  }, []);

  //TODO 첫 렌더링이후 실행 되도록 수정
  // useEffect(() => {
  //   if (newId > 0) {
  //     let time = setTimeout(() => {
  //       handleDelete(newId);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(time);
  //     };
  //   }
  // }, [cards]);

  return (
    <>
      {userName !== "" ? (
        <Styled.CardWrap>
          <Styled.Form>
            <Input id="comment" value={commentValue || ""} placeholder="내용을 입력해주세요" onChange={handleChange} />
            <Button text="Tweet" onClick={handleClick} />
          </Styled.Form>

          {cards.map((card, index) => {
            return (
              <Styled.Card key={index}>
                <strong>{card.user}</strong>
                <p>{card.message}</p>
                <p>{card.date}</p>
                {card.user === userName ? <Button text="삭제" onClick={() => handleDelete(card.id)} /> : null}
              </Styled.Card>
            );
          })}
        </Styled.CardWrap>
      ) : null}
    </>
  );
}
