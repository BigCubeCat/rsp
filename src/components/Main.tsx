import * as React from 'react';
import HistoryCard from './History/HistoryCard';
import Card from './Card/Card';

export default function Main() {
  return (
    <>
      <Card
        title={"Классика"}
        gameLink={"/game/classic"}
        rulesLink={"/about/classic"}
        img="/img/classic.jpg"
      />
      <Card
        title={"Спок"}
        rulesLink={"/about/spock"}
        gameLink={"/game/spock"}
        img="/img/5.svg"
      />
      <Card
        title={"Что?!"}
        rulesLink={"/about/custom"}
        gameLink={"/game/custom"}
        img="/img/custom.webp"
      />
      <HistoryCard />
    </>
  )
}
