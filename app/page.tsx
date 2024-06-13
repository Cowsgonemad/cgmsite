'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { HomeSection, CoinSection, GameSection, RoadmapSection, FooterSection, NFTSection } from '@/components/sections';
import { Navigation } from '@/components/layout';

const calculatePercentage = (currentScreen: number, screen: number, currentPercentage: number): number => {
  if (currentScreen === screen) { return currentPercentage; }
  if (currentScreen < screen) { return 0; }
  return 100;
};

const navigateTo = (screen: number) => {
  window.scrollTo({
    top: window.innerHeight * screen, 
    // behavior: 'smooth',
  });
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
  const [nft, setNft] = useState('1');
  const [roadMapTranslate, setRoadMapTranslate] = useState(0);

  const totalSections = Object.keys(scrollState).length;
  const viewer = useRef<HTMLElement>(null);

  const navigatePrevious = useCallback(() => {
    if (currentScreen > 0) navigateTo(currentScreen - 1);
  }, [currentScreen]);

  const navigateNext = useCallback(() => {
    if (currentScreen < totalSections - 1) navigateTo(currentScreen + 1);
  }, [currentScreen, totalSections]);

  const backRoadmap = () => {
    if (roadMapTranslate > 0) setRoadMapTranslate(roadMapTranslate - 10); 
  };

  const forwardRoadmap = () => {
    if (roadMapTranslate < 50) setRoadMapTranslate(roadMapTranslate + 10); 
  };

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
    
      <main ref={viewer} style={{ height: `${totalSections}00vh` }}>

        <HomeSection navigateToCoinScreen={(screen) => navigateTo(screen)} />

        <CoinSection progress={scrollState.first} tab={coinTab} setTab={(tab) => setCoinTab(tab)} />

        <GameSection progress={scrollState.second} tab={gameTab} setTab={(tab) => setGameTab(tab)} />

        <NFTSection progress={scrollState.third} nft={nft} setNft={(n) => setNft(n)} />

        <RoadmapSection progress={scrollState.fourth} roadProgress={roadMapTranslate} back={backRoadmap} forward={forwardRoadmap} />

        <FooterSection progress={scrollState.fifth} />

      </main>

    </>
  );
}
