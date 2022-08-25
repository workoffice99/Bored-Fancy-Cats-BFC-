import React, { useEffect, useState } from "react";
import "./Faq.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "  How much will it cost to mint?",
      content: ` The cost per NFT is 4 Matic + gas fees.`,
    },
    {
      title: "What is the total number of NFTs ?",
      content: `4417 NFTs.`,
    },
    {
      title: "Will there be any token withheld from sale?",
      content: `Yes, 100 tokens will be kept for marketing, the team, and giveaways.`,
    },
    {
      title: "Will there be any giveaways?",
      content: `Yes, we plan to periodically reward active and verified members of our community. Check the roadmap section about for the first giveaways..`,
    },
    {
      title: "How will you help new upcoming artists?",
      content: `Through the Bored Fancy Cats initiative, we hope to help other artists bring their art to the world through the blockchain path.Part of the funds collected from the sale of the first collection will be allocated to sponsoring upcoming new artists who stand out with their talent but can't afford to launch a collection due to the costs involved.The artists will be pre-selected with the help from the Bored Fancy Cats NFT holders and the Bored Fancy Cats team.`,
    },
    {
      title: "How will the Bored Fancy Cats fund work?",
      content: `Once the drop process is completed, 15% percent of the sale will be allocated to the Bored Fancy Cats fund to sponsor talented artists. Not restricted to but with emphasis on artists from developing nations where the economic, political and social conditions do not allow them to make a living through their talent.`,
    },
    {
      title: "What is the Bored Fancy Cats Double Giveback",
      content: `We want to give back to artist in the space by using some of the royalties monthly to purchase from other NFT projects that share our objective and have a clear message of artist’s empowerment! We will buy these NFTs and raffle them off to our holders monthly in a transparent draw, the more Bored Fancy Cats you hold, the more likely you are to win!`,
    },
  ],
};

const styles = {
  bgColor: "transparet",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  rowContentPaddingBottom: "20px",
  arrowColor: "white",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

export default function FAQ() {
  return (
    <div>
      <div className="container">
        <div className="row text-white">
          <div
            class="col-12 col-lg-12  d-flex justify-content-center"
            Style="font-size: 20px;padding-left:0;"
          >
            <span>Oh! I KNOW YOU HAVE THESE NOW</span>
          </div>
          <div
            class="col-12 col-lg-12  d-flex justify-content-center"
            Style="font-size: 45px;padding-left:0; color:#ADEFD1;"
          >
            <p>FAQ</p>
          </div>
        </div>
        <div className="row text-white">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}
