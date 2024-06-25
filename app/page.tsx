'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Navigation } from '@/components/layout';
import { HeroSection } from '@/components/sections/hero';
import { CoinSection } from '@/components/sections/coin';
import { GameSection } from '@/components/sections/game';
import { NFTSection } from '@/components/sections/nft';
import { RoadmapSection } from '@/components/sections/roadmap';
import { FooterSection } from '@/components/sections/footer';

const ids = ['hero', 'the-coin', 'the-game', 'the-nft', 'roadmap', 'footer'];

const calculatePercentage = (currentScreen: number, screen: number, currentPercentage: number): number => {
  if (currentScreen === screen) { return currentPercentage; }
  if (currentScreen < screen) { return 0; }
  return 100;
};

const navigateTo = (screen: number) => {

  const clientWidth = document.documentElement.clientWidth;
  console.log(clientWidth);

  if (clientWidth > 768) {
    window.scrollTo({ top: window.innerHeight * screen });
    console.log('scroll to', window.innerHeight * screen);
  } else {
    const element = document.querySelector<HTMLElement>(`#${ids[screen]}`);
    element?.scrollIntoView();
  }

  // const element = document.querySelector<HTMLElement>(`#${ids[screen]}`);
  // console.log(ids[screen]);
  // console.log(element?.offsetTop);
  // window.scrollTo({ top: window.innerHeight * screen });
  // window.scrollTo({ top: element?.offsetTop });
  // element?.scrollIntoView();
}

export default function Home() {

  const [currentScreen, setCurrentScreen] = useState(0);

  const [scrollState, setScrollState] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0
  });

  const [coinTab, setCoinTab] = useState('coin');
  const [gameTab, setGameTab] = useState('trailer');
  const [nftTab, setNftTab] = useState(0);
  const [nft, setNft] = useState('1');

  const totalSections = Object.keys(scrollState).length;
  const viewer = useRef<HTMLElement>(null);

  const navigatePrevious = useCallback(() => {
    if (currentScreen > 0) navigateTo(currentScreen - 1);
  }, [currentScreen]);

  const navigateNext = useCallback(() => {
    if (currentScreen < totalSections - 1) navigateTo(currentScreen + 1);
  }, [currentScreen, totalSections]);

  useEffect(() => {

    const screenPercentage = 100 / (totalSections-1);

    const handleScroll = () => {

      console.log('handle scroll');
      const height = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const maxScrollTop = viewer.current!.clientHeight - height;
      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min( 100 + 1, Math.floor(scrollFraction * 100));

      const current = Math.floor(frameIndex / screenPercentage);
      const currentAdvance = Math.floor(frameIndex % screenPercentage);
      const currentPercentage = Math.floor(currentAdvance * 100 / screenPercentage);

      // console.log('%', frameIndex);
      // console.log('current', current);
      // console.log('current percentage', currentPercentage);
      // console.log('----------------------');

      setScrollState({
        first: current === 0 ? currentPercentage : 100,
        second: calculatePercentage(current, 1, currentPercentage),
        third: calculatePercentage(current, 2, currentPercentage),
        fourth: calculatePercentage(current, 3, currentPercentage),
        fifth: calculatePercentage(current, 4, currentPercentage),
        sixth: calculatePercentage(current, 5, currentPercentage)
      });

      setCurrentScreen(current);
    };

    handleScroll();

    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === 'ArrowUp') navigatePrevious();
      else if (event.key === 'ArrowDown') navigateNext();
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [totalSections, navigateNext, navigatePrevious]);

  return (

    <>

      <Navigation 
      navigateTo={(screen) => navigateTo(screen)} 
      navigatePrevious={navigatePrevious}
      navigateNext={navigateNext}
      currentScreen={currentScreen} />
    
      <main id="viewer" ref={viewer} style={{ height: `${totalSections}00vh`}}>

        <HeroSection navigateTo={(screen) => navigateTo(screen)} />

        <CoinSection progress={scrollState.first} tab={coinTab} setTab={(tab) => setCoinTab(tab)} />

        <GameSection progress={scrollState.second} tab={gameTab} setTab={(tab) => setGameTab(tab)} />

        <NFTSection progress={scrollState.third} nft={nft} setNft={(n) => setNft(n)} tab={nftTab} setTab={(n) => setNftTab(n)} />

        <RoadmapSection progress={scrollState.fourth} />

        <FooterSection progress={scrollState.fifth} />

      </main>

    </>
  );
}
