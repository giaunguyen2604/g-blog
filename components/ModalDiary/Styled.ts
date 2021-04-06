import styled from "styled-components";

const MdModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  height: auto;
  z-index: 2000;
  visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  &.md-show {
    visibility: visible;
    .md-content {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const MdContent = styled.div`
  color: #333;
  background: #fff;
  -webkit-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  padding: 20px 20px;
`;

const MdOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  visibility: hidden;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0;
  background: rgba(40, 43, 49, 0.8);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export { MdModal, MdContent, MdOverlay };
