export const Screen = ({ 
  id, children, containerClasses,
}: Readonly<{ 
  id: string, children: React.ReactNode; containerClasses: string;
}>) => {

  return(
    <article id={id} className={`max-w-screen 2xl:min-h-screen 2xl:h-screen w-full overflow-hidden 2xl:max-h-screen transition duration-75 border-t-4 border-black ${containerClasses}`}>
      {children}
    </article>
  );
}
