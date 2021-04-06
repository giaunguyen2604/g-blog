import styled from "styled-components";

interface ItemDiaryProp {
  color: string
}

const ItemDiaryContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin-top: 20px;
  border-radius: 50%;
  background-color: ${(props: ItemDiaryProp) =>
    props.color ? props.color : ""};
  ${(props: ItemDiaryProp) =>
    props.color ? `box-shadow: 0px 0px 90px -15px ${props.color};` : ""}
  .title-diary {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { ItemDiaryContainer };
