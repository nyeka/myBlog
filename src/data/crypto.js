import React from "react";
import { Link } from "react-router-dom";
import Chip from "../components/common/Chip";
import { blogList } from "../config/data";
import "./crypto.css";

export default function Krypto() {
  let tmptitem;
  blogList.map((item) => {
    if (item.id === 3) {
      tmptitem = item;
    }
    return {
      tmptitem,
    };
  });

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      <div className="blog-wrap">
        <header>
          <p className="blog-date">Published {tmptitem.createdAt}</p>
          <h1>{tmptitem.title}</h1>
          <div className="blog-subCategory">
            {tmptitem.subCategory.map((category, i) => (
              <div key={i}>
                <Chip label={category} />
              </div>
            ))}
          </div>
        </header>
      </div>

      <div className="contentful">
        <h1>ZkPad</h1>
        <p>
          <a href="https://zkpad.io/">ZkPad</a> is a fundraising platform
          focusing on providing a healthy and fair way for projects to launch
          tokens on StarkNet. Their mission is to foster innovation in the
          StarkNet ecosystem by providing a platform where users will be able to
          invest in projects curated by our internal expert team.
        </p>
        <h3>The retail investment market</h3>
        <p>
          Societal changes, most notably materialized by the growing desire of
          individuals to put their money to work, and to achieve financial
          freedom faster than with just a traditional job, are only part of the
          progress that personal finance is making around the world. The
          increasing inflation in traditional and centralized finance, with
          record-high rates, is further pushing individuals to find solutions to
          counter this problem.
        </p>
        <p>
          We have seen the transition in time of the stock market to adapt to
          the demand of retail investors, and thus address a large and still
          untouched market. This transition was first made by the possibility to
          hire a broker, then to use a paid electronic broker, before becoming
          widely available to the general public in more recent times. These
          various steps have made it possible to popularize the stock market.
        </p>
        <p>
          Individual investors have therefore been able to invest in the stock
          market and in companies known to the general public, in order to
          attempt to invest their savings in the best possible way. Despite
          these efforts, we can observe today that the participation of
          individuals in venture capital is negligible: the global venture
          capital market has reached nearly 300 billion dollars. Personal
          funding is on track to reach $1.1 billion. Annual personal
          participation in venture capital is about $2 billion, which means that
          personal participation is only 1% of the global venture capital
          market, and venture capital participation is only 0.2% of the
          personal-finance market. These numbers therefore speak to the
          inability of industry firms to bring individuals into venture capital
          participation, despite the attractive potential profits that
          individuals could rub shoulders with. Moreover, it should be said that
          these figures are even more true in the blockchain environment, where
          it is still much less developed, and individuals have a harder time
          entering.
        </p>
        <h1 className="bot">ZkPad Vision</h1>
        <p>
          <br />
          bring retail investors and the personal finance market to zk-Rollups
          through ZkPad.
        </p>
        <h3>Making An Accesable Platform</h3>
        <p>
          their first mission is to facilitate the accessibility of zk-Rollups'
          technologies for individuals and developers alike. For that, we will
          have in heart to provide educational content on this technology. This
          content will include tutorials, analyses, explanations, ecosystem data
          etc... We will set up complex technology monitoring tools, as well as
          data collection tools to be able to offer important data and
          information for all.
        </p>
        <h3>Reducing the risk for retail investors</h3>
        <p>
          their second mission will be to reduce the risk for individuals using
          ZkPad, as investments are so risky in today's environment, between
          scams, weak teams and/or market hazards. We have chosen to focus on
          the public sales segment at first, with a launchpad, however we plan
          to offer earlier investments for our users in the future. Later on we
          would like to offer seed investments, with strategies to guarantee
          retail investors zero losses no matter what, but that will come later.
          Regarding the IDOs we will launch on ZkPad, we will do the necessary
          research to ensure maximum security for our users. An internal review
          process will be run to ensure the security of users when investing.
          <br /> <br />
          <br />
          <br />
        </p>
        <h1>Roadmap</h1>
        <img src={tmptitem.cover} alt="roadmap" />
        <div className="linkto">
          <p>
            For more information{" "}
            <a href="https://wp.zkpad.io/roadmap/">see here</a>
          </p>
          <p>
            Or Visit <a href="https://zkpad.io/">ZkPad.io</a>
          </p>
        </div>
        <div className="author">
          <h3>Writer</h3>
          <p>
            Name : {tmptitem.authorName}
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
