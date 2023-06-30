import styled from "styled-components";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";

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
        &.selected {
          color: red;
          .icon{
            fill: red;
          }
        }
      }
    }
  }
`;

const getActiveClass = ({ isActive }) => {
  return isActive ? "selected" : "";
};
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" className={getActiveClass}>
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={getActiveClass}>
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={getActiveClass}>
            <Icon name="chat" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
