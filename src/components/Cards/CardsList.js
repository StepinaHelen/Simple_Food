import CardItem from "./CardItem";
import Button from "../Button/Button";
import CommonContainer from "../Base/Containers/CommonContainer";
import Icons from "../SvgComponent/SvgComponent";
import { useEffect, useState } from "react";
import { SortWrapper } from "./CardsStyles";
import { CATEGORIES } from "../../common/constants";
import { List, Btn } from "./CardsStyles";
import { getCards, getFilteredCards } from "../../services/common-service";

function CardList() {
  const [cards, setCards] = useState([]);
  const [btn, setBtn] = useState("active");

  const fetchCards = async () => {
    let cardsArr = [];
    if (localStorage.getItem("sortedList").length) {
      cardsArr = JSON.parse(localStorage.getItem("sortedList"));
    } else {
      const result = await getCards();
      cardsArr = result.data;
    }
    setCards(cardsArr);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const filterHandler = async (categories) => {
    const result = await getFilteredCards(categories);
    setCards(result);
    localStorage.setItem("sortedList", JSON.stringify(result));
  };

  const multiSortHandler = (positive, negative, stateBtn) => {
    setBtn(stateBtn);
    return cards.sort(function (a, b) {
      if (a.title > b.title) {
        return positive;
      }
      if (a.title < b.title) {
        return negative;
      }
      return 0;
    });
  };

  const sortedHandler = () => {
    let result = [];
    if (btn === "inactive") {
      result = multiSortHandler(-1, 1, "active");
    } else {
      result = multiSortHandler(1, -1, "inactive");
    }
    localStorage.setItem("sortedList", JSON.stringify(result));
    return result;
  };

  return (
    <CommonContainer>
      <SortWrapper>
        <div>
          {CATEGORIES.map((el) => (
            <Button
              className={"categories"}
              key={el}
              onClick={() => filterHandler(el)}
            >
              {el}
            </Button>
          ))}
        </div>
        <Btn onClick={sortedHandler}>
          <Icons name="arrows" classes={"arrow"} />
        </Btn>
      </SortWrapper>
      <List>
        {cards.map((el) => (
          <CardItem
            img={el.img}
            price={el.price}
            amount={el.amount}
            id={el.id}
            title={el.title}
            category={el.category}
            key={el.id}
          />
        ))}
      </List>
    </CommonContainer>
  );
}

export default CardList;
