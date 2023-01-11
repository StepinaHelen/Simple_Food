import CardItem from "components/Cards/CardItem";
import Button from "components/Button/Button";
import CommonContainer from "components/Base/Containers/CommonContainer";
import Icons from "components/SvgComponent/SvgComponent";
import { SetStateAction, useState } from "react";
import { CATEGORIES } from "common/constants";
import { List, Btn, SortWrapper } from "components/Cards/CardsStyles";
import { getCards, multiSortHandler } from "services/common-service";
import { setLocalStorageItem } from "services/persistence-service";
import { useQuery } from "react-query";
import Modal from "components/Modals/Modal";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { KEYQUERIES } from "common/constants";
import { ICardItem } from "common/interfaces";

function CardList() {
  const [btn, setBtn] = useState("active");
  const [choosenCategory, setChoosenCategory] = useState("");
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery<ICardItem[], Error>(
    [KEYQUERIES.cards, choosenCategory],
    () => getCards(choosenCategory)
  );

  const filterHandler = (category: SetStateAction<string>) => {
    setChoosenCategory(category);
    setLocalStorageItem("category", category);
  };

  const modalHandler = () => {
    navigate("/");
  };

  const sortedHandler = (): void => {
    if (btn === "inactive") {
      multiSortHandler(1, -1, data ?? []);
      setLocalStorageItem("sorting", "ascending");
      setBtn("active");
    } else {
      multiSortHandler(-1, 1, data ?? []);
      setLocalStorageItem("sorting", "descending");
      setBtn("inactive");
    }
  };

  return (
    <CommonContainer withMargin={false}>
      <SortWrapper>
        <div>
          {CATEGORIES.map((el) => (
            <Button
              className={"categories"}
              key={el}
              onClick={() => filterHandler(el)}
              data-testid="filter"
            >
              {el}
            </Button>
          ))}
        </div>
        <Btn onClick={sortedHandler} data-testid="sort">
          <Icons name="arrows" classes={"arrow"} />
        </Btn>
      </SortWrapper>
      {isLoading && <Spinner />}

      <List>
        {error && error.message && (
          <Modal
            title={error.message}
            onCloseModal={modalHandler}
            data-testid="modal"
          />
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
