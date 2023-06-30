import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag" />
            标签
          </Link>
        </li>
        <li>
          <Link to="/money">
            记账
            <Icon name="money" />
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chat" />
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
