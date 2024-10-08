export const TeamIcon = ({ fillVar }: { fillVar: string }) => {

    const fill = `rgb(var(${fillVar}))`;

    return(
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="28px" width="28px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 16C10 17.6569 8.65685 19 7 19C5.34315 19 4 17.6569 4 16C4 14.3431 5.34315 13 7 13C8.65685 13 10 14.3431 10 16Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 14.3431 15.3431 13 17 13C18.6569 13 20 14.3431 20 16Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    );
};
