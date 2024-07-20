export const Screen = ({ 
  id, children, containerClasses,
}: Readonly<{ 
  id: string, children: React.ReactNode; containerClasses: string;
}>) => {

  return(
    <article id={id} className={`max-w-screen w-full overflow-hidden transition duration-75 border-t-4 border-black ${containerClasses}`}>
      {children}
    </article>
  );
}
