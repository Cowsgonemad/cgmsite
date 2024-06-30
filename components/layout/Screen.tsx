export const Screen = ({ 
  id, children, containerClasses,
}: Readonly<{ 
  id: string, children: React.ReactNode; containerClasses: string;
}>) => {

  return(
    <article id={id} className={`max-w-screen xl:min-h-screen xl:h-screen w-full overflow-hidden xl:max-h-screen transition duration-75 border-t-4 border-black ${containerClasses}`}>
      {children}
    </article>
  );
}
