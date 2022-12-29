import styled from "styled-components";

export const Item = styled.li`
  margin: 15px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  border-radius: 0px 0px 4px 4px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and ${({ theme }) => theme.media.medium} {
    width: calc((100% - 4 * 15px) / 2);

    img {
      height: 226px;
    }
  }
  @media screen and ${({ theme }) => theme.media.large} {
    width: calc((100% - 8 * 15px) / 4);

    img {
      height: 175px;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
  }
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

export const WraperItem = styled.div`
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.secondaryFont};
  color: ${({ theme }) => theme.colors.mainFont};

  h2 {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 600, fontSize: 22, lineHeight: 28 })}
    margin-bottom: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    margin-bottom: 20px;
    ${({ theme }) =>
      theme.fontText({ fontWeight: 600, fontSize: 20, lineHeight: 23 })}

    span {
      font-weight: 400;
    }
  }
`;

export const AmountWrapper = styled.div`
  ${({ theme }) =>
    theme.flex({
      alignItems: "center",
      justifyContent: "flex-start",
    })}

  margin-bottom: 20px;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 20px;
    width: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    color:  ${({ theme }) => theme.colors.btnColor};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    margin: 0 12px 0 0;
  }

  span {
    margin-right: 3px;
    margin-left: 3px;
  }
`;

export const BtnWrapper = styled.div`
  text-align: right;
`;

export const SortWrapper = styled.div`
  ${({ theme }) => theme.flex({ justifyContent: "space-between" })}
  padding: 60px 0;

  .arrow {
    width: 40px;
    height: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
