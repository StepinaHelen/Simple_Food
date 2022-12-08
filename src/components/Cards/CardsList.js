import CardItem from "./CardItem";
import Button from "../Button/Button";
import CommonContainer from "../Base/Containers/CommonContainer";
import Icons from "../SvgComponent/SvgComponent";
import { useEffect, useState } from "react";
import { SortWrapper } from "./CardsStyles";
import { CATEGORIES } from "../../common/constants";
import { List, Btn } from "./CardsStyles";
import {
  getCards,
  getFilteredCards,
  multiSortHandler,
} from "../../services/common-service";
import { setLocalStorageItem } from "../../services/persistence-service";

function CardList() {
  const [cards, setCards] = useState([]);
  const [btn, setBtn] = useState("active");

  const fetchCards = async () => {
    const result = await getCards();

    setCards(result);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const filterHandler = async (category) => {
    const result = await getFilteredCards(category);
    setCards(result);
    setLocalStorageItem("category", category);
  };

  const sortedHandler = () => {
    if (btn === "inactive") {
      multiSortHandler(1, -1, cards);
      setLocalStorageItem("sorting", "ascending");
      setBtn("active");
    } else {
      multiSortHandler(-1, 1, cards);
      setLocalStorageItem("sorting", "descending");
      setBtn("inactive");
    }
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
