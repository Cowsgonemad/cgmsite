export const HomeIcon = ({ fillVar }: { fillVar: string }) => {

    const fill = `rgb(var(${fillVar}))`;

    return(
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="28px" width="28px"><path d="M9 12v9m0-9 1.846-5L15 5l4.154 2L21 12v9H9m0-9V8m0 13H3V6a3 3 0 0 1 6 0v2m0 0H3m10 7h4v6h-4v-6Zm1.5-5v1h1v-1h-1Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    );
};
