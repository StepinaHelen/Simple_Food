import CardItem from "./CardItem";
import Button from "../Button/Button";
import CommonContainer from "../Base/Containers/CommonContainer";
import Icons from "../SvgComponent/SvgComponent";
import { useState } from "react";
import { SortWrapper } from "./CardsStyles";
import { CATEGORIES } from "../../common/constants";
import { List, Btn } from "./CardsStyles";
import { getCards, multiSortHandler } from "../../services/common-service";
import { setLocalStorageItem } from "../../services/persistence-service";
import { useQuery } from "react-query";
import Modal from "../Modals/Modal";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { KEYQUERIES } from "../../common/constants";

function CardList() {
  const [btn, setBtn] = useState("active");
  const [choosenCategory, setChoosenCategory] = useState(null);
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery(
    [KEYQUERIES.cards, choosenCategory],
    () => getCards(choosenCategory)
  );

  const filterHandler = (category) => {
    setChoosenCategory(category);
    setLocalStorageItem("category", category);
  };

  const modalHandler = () => {
    navigate("/");
  };

  const sortedHandler = () => {
    if (btn === "inactive") {
      multiSortHandler(1, -1, data);
      setLocalStorageItem("sorting", "ascending");
      setBtn("active");
    } else {
      multiSortHandler(-1, 1, data);
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
      {isLoading && <Spinner />}

      <List>
        {error && error.message && (
          <Modal title={error.message} onCloseModal={modalHandler} />
        )}
        {data &&
          data.map((el) => (
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
