export const Screen = ({ 
  id, children, containerClasses, containerStyle 
}: Readonly<{ 
  id: string, children: React.ReactNode; containerClasses: string; containerStyle: { [key: string]: string }
}>) => {

  return(
    <article id={id} className={`min-h-screen lg:h-screen w-full overflow-x-hidden md:max-h-screen md:fixed md:overflow-hidden transition duration-75 pt-14 ${containerClasses}`} style={containerStyle}>
      {children}
    </article>
  );
}
