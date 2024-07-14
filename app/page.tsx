'use client';

import { useCallback, useEffect, useState } from 'react';

import { Navigation } from '@/components/layout';
import { HeroSection } from '@/components/sections/hero';
import { CoinSection } from '@/components/sections/coin';
import { GameSection } from '@/components/sections/game';
import { NFTSection } from '@/components/sections/nft';
import { RoadmapSection } from '@/components/sections/roadmap';
import { FooterSection } from '@/components/sections/footer';
import { Alerts } from '@/components/ui';
import { AlertContext } from '@/context';
import { TeamSection } from '@/components/sections/team/TeamSection';

let timeout: any;

const ids = ['hero', 'the-coin', 'the-game', 'the-nft', 'roadmap', 'team', 'footer'];

const debounce = (fn: () => void) => {
  if (!!timeout) clearTimeout(timeout);
  timeout = setTimeout(fn, 80);
};

const navigateTo = (screen: number) => {
  const element = document.querySelector<HTMLElement>(`#${ids[screen]}`);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {

  const [alerts, setAlerts] = useState<{id: number, message: string, type: 'success' | 'error'}[]>([]);
  const value = { alerts, setAlerts };

  const [currentScreen, setCurrentScreen] = useState(0);

  const navigatePrevious = useCallback(() => {
    if (currentScreen > 0) navigateTo(currentScreen - 1);
  }, [currentScreen]);

  const navigateNext = useCallback(() => {
    if (currentScreen < ids.length - 1) navigateTo(currentScreen + 1);
  }, [currentScreen]);

  useEffect(() => {

    const debouncedScroll = () => debounce(handleScroll);

    const handleScroll = () => {

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
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();

        if (event.key === 'ArrowUp') navigatePrevious();
        else if (event.key === 'ArrowDown') navigateNext();
      }
    }

    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [navigateNext, navigatePrevious]);

  return (

    <AlertContext.Provider value={value}>

      <Navigation 
      navigateTo={(screen) => navigateTo(screen)} 
      currentScreen={currentScreen} />
    
      <main id="viewer">
        <HeroSection navigateTo={(screen) => navigateTo(screen)} />
        <CoinSection />
        <GameSection />
        <NFTSection />
        <RoadmapSection />
        <TeamSection />
        <FooterSection />
      </main>

      <Alerts />

    </ AlertContext.Provider>
  );
}
