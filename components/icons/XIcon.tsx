export const XIcon = ({ size }: { size?: number }) => {
    return(
        <svg version="1.1" id="Layer_1" width={size ? `${size}px` : '24px'} height={size ? `${size}px` : '24px'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 595.3 595.3">
            <g>
                <path fill="rgb(var(--accent))" d="M341.3,262.5L512,68.1h-40.5L323.3,236.9L204.9,68.1H68.3l179.1,255.2L68.3,527.1h40.5l156.5-178.2l125,178.2h136.6
                    L341.3,262.5z M285.9,325.5l-18.2-25.4L123.3,98h62.2L302,261.2l18.1,25.4l151.5,212.1h-62.2L285.9,325.5z"/>
            </g>
        </svg> 
    );
};
