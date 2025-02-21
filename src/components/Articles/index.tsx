import ArticlesCard from "./Card";

const Articles = ({ cards }: any) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      {cards.map((card: any) => {
        return (
          <div key={card.id}>
            <ArticlesCard {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
