'use client';

import { useCallback, useEffect, useState } from 'react';

import { Navigation } from '@/components/layout';
import { HeroSection } from '@/components/sections/hero';
import { CoinSection } from '@/components/sections/coin';
import { GameSection } from '@/components/sections/game';
import { NFTSection } from '@/components/sections/nft';
import { RoadmapSection } from '@/components/sections/roadmap';
import { FooterSection } from '@/components/sections/footer';
import { Alerts, Popup } from '@/components/ui';
import { AlertContext } from '@/context';
import { TeamSection } from '@/components/sections/team/TeamSection';
import { MetaHealthSection } from '@/components/sections/metahealth';
import { TutorialSection } from '@/components/sections/tutorial';
import { ChartSection } from '@/components/sections/chart';

let timeout: any;

const ids = ['hero', 'the-coin', 'the-game', 'the-nft', 'roadmap', 'team', 'meta-health', 'chart', 'footer'];

const debounce = (fn: () => void) => {
  if (!!timeout) clearTimeout(timeout);
  timeout = setTimeout(fn, 80);
};

const navigateTo = (screen: string) => {
  const element = document.querySelector<HTMLElement>(`#${screen}`);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {

  const [alerts, setAlerts] = useState<{id: number, message: string, type: 'success' | 'error'}[]>([]);
  const value = { alerts, setAlerts };

  const [currentScreen, setCurrentScreen] = useState('hero');

  const navigatePrevious = useCallback(() => {
    if (currentScreen !== ids[0]) {
      const index = ids.findIndex(ids => ids === currentScreen);
      navigateTo(ids[index - 1]);
    }
  }, [currentScreen]);

  const navigateNext = useCallback(() => {
    if (currentScreen !== ids[ids.length - 1]) {
      const index = ids.findIndex(ids => ids === currentScreen);
      navigateTo(ids[index + 1]);
    }
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
          setCurrentScreen(ids[i]);
          break;
        }

        if (document.documentElement.scrollHeight - scrollTop === document.documentElement.clientHeight) {
          setCurrentScreen(ids[ids.length - 1]);
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
        <TutorialSection />
        <GameSection />
        <NFTSection />
        <RoadmapSection />
        <TeamSection />
        <MetaHealthSection />
        <ChartSection />
        <FooterSection />
      </main>

      <Popup />

      <Alerts />

    </ AlertContext.Provider>
  );
}
