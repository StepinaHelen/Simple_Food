import Hero from "components/Hero/Hero";
import CardList from "components/Cards/CardsList";
import { MarginWrapper } from "components/Pages/PagesStyles";

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
