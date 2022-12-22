import Hero from "../Hero/Hero";
import CardList from "../Cards/CardsList";
import { MarginWrapper } from "./PagesStyles";

const MainPage = () => {
  return (
    <>
      <MarginWrapper>
        <Hero></Hero>
        <CardList></CardList>
      </MarginWrapper>
    </>
  );
};

export default MainPage;
