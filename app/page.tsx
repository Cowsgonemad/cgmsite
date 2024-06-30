'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Navigation } from '@/components/layout';
import { HeroSection } from '@/components/sections/hero';
import { CoinSection } from '@/components/sections/coin';
import { GameSection } from '@/components/sections/game';
import { NFTSection } from '@/components/sections/nft';
import { RoadmapSection } from '@/components/sections/roadmap';
import { FooterSection } from '@/components/sections/footer';

let timeout: any;

const ids = ['hero', 'the-coin', 'the-game', 'the-nft', 'roadmap', 'footer'];

const debounce = (fn: () => void) => {
  if (!!timeout) clearTimeout(timeout);
  timeout = setTimeout(fn, 80);
};

const navigateTo = (screen: number) => {
  const element = document.querySelector<HTMLElement>(`#${ids[screen]}`);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {

  const [currentScreen, setCurrentScreen] = useState(0);
  const [coinTab, setCoinTab] = useState('coin');
  const [gameTab, setGameTab] = useState('trailer');
  const [nftTab, setNftTab] = useState(0);
  const [nft, setNft] = useState('1');

  const viewer = useRef<HTMLElement>(null);

  const navigatePrevious = useCallback(() => {
    if (currentScreen > 0) navigateTo(currentScreen - 1);
  }, [currentScreen]);

  const navigateNext = useCallback(() => {
    if (currentScreen < ids.length - 1) navigateTo(currentScreen + 1);
  }, [currentScreen]);

  useEffect(() => {

    const debouncedScroll = () => debounce(handleScroll);

    const handleScroll = () => {

      console.log('handle scroll');
      const scrollTop = document.documentElement.scrollTop;

      let acc = 0;

      for (let i = 0; i < ids.length; i ++) {

        const el = document.querySelector(`#${ids[i]}`);
        if (!!!el) { continue; }

        acc += el.clientHeight;
        if (scrollTop < acc) {
          setCurrentScreen(i);
          break;
        }
      }
    };

    handleScroll();

    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === 'ArrowUp') navigatePrevious();
      else if (event.key === 'ArrowDown') navigateNext();
    }

    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [navigateNext, navigatePrevious]);

  return (

    <>

      <Navigation 
      navigateTo={(screen) => navigateTo(screen)} 
      navigatePrevious={navigatePrevious}
      navigateNext={navigateNext}
      currentScreen={currentScreen} />
    
      <main id="viewer" ref={viewer}>

        <HeroSection navigateTo={(screen) => navigateTo(screen)} />

        <CoinSection tab={coinTab} setTab={(tab) => setCoinTab(tab)} />

        <GameSection tab={gameTab} setTab={(tab) => setGameTab(tab)} />

        <NFTSection nft={nft} setNft={(n) => setNft(n)} tab={nftTab} setTab={(n) => setNftTab(n)} />

        <RoadmapSection />

        <FooterSection />

      </main>

    </>
  );
}
