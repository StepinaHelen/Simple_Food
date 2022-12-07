import CardItem from "./CardItem";
import Button from "../Button/Button";
import CommonContainer from "../Base/Containers/CommonContainer";
import Icons from "../SvgComponent/SvgComponent";
import { useEffect, useState } from "react";
import { SortWrapper } from "./CardsStyles";
import { CATEGORIES } from "../../common/constants";
import { List } from "./CardsStyles";
import { getCards } from "../../services/common-service";

function CardList() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const result = await getCards();
    setCards(result.data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <CommonContainer>
      <SortWrapper>
        <div>
          {CATEGORIES.map((el) => (
            <Button className={"categories"} key={el}>
              {el}
            </Button>
          ))}
        </div>
        <Icons name="arrows" classes={"arrow"} />
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
