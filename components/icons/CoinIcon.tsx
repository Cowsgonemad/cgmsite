export const CoinIcon = ({ fillVar }: { fillVar: string }) => {

    const fill = `rgb(var(${fillVar}))`;

    return(
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 9.5C21 11.9853 16.9706 14 12 14M21 9.5C21 7.01472 16.9706 5 12 5C7.02944 5 3 7.01472 3 9.5M21 9.5V15C21 17.2091 16.9706 19 12 19M12 14C7.02944 14 3 11.9853 3 9.5M12 14V19M3 9.5V15C3 17.2091 7.02944 19 12 19M7 18.3264V13.2422M17 18.3264V13.2422" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};
