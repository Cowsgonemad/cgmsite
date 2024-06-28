export const Screen = ({ 
  id, children, containerClasses, containerStyle 
}: Readonly<{ 
  id: string, children: React.ReactNode; containerClasses: string; containerStyle: { [key: string]: string }
}>) => {

  return(
    <article id={id} className={`max-w-screen xl:min-h-screen xl:h-screen w-full overflow-hidden xl:max-h-screen transition duration-75 ${containerClasses}`} style={containerStyle}>
      {children}
    </article>
  );
}
