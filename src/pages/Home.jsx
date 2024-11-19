import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import headerImg from "../assets/header.webp";
import Favorites from "../components/favorite/Favorites";
import MyFavorites from "../components/myfavorites/Myfavorites";
import Newsletter from "../components/newsletter/Newsletter";


const Home = () => {
  return (
    <article>
      <PageHeader
        title='SMAGFULDE FAVORITTER'
        subTitle='En verden af smag lige ved hånden'
        headerImg={headerImg}
      />
      <SectionHeader title='Brugernes favoritter' />
      <Favorites />
      <SectionHeader title='Mine favoritter' />
      <MyFavorites/>
      <SectionHeader title='Tilmeld dig vores nyhedsbrev' />
      <Newsletter/>
    </article>
  );
};

export default Home;
