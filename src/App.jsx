import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <Wrapper>
      <div className="spline">
        <Spline scene="https://prod.spline.design/BBGThreI9387uMZo/scene.splinecode" />
      </div>
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          {/* <li>
            <a href="/">Get started</a>
          </li> */}
        </Menu>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build community by using our
          cross-platform app that lets you collaborate via chat, voic and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={IconLaptop} alt="Download" />
          Download for Windows
        </button>
      </Content>
      <Social>
        <div></div>
        <img src={IconTwitter} alt="twitter" />
        <img src={IconYoutube} alt="youtube" />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  overflow: hidden;
  .spline {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    margin: 0;
    height: 100%;
    width: 130vw;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }

  button {
    background: rgba(14, 17, 42, 0.3);
    border-radius: 14px;
    color: #fff;
    padding: 12px 30px;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: #fff;
      padding: 8px 28px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: all 0.5s ease;
      border-radius: 14px;
      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
