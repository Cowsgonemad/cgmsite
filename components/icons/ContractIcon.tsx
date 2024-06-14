export const ContractIcon = ({ fillVar }: { fillVar: string }) => {

    const fill = `rgb(var(${fillVar}))`;

    return(
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 4V9H4M15 4V9H20M4 15H9V20M15 20V15H20" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    );
};
