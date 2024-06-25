export const Screen = ({ 
  id, children, containerClasses, containerStyle 
}: Readonly<{ 
  id: string, children: React.ReactNode; containerClasses: string; containerStyle: { [key: string]: string }
}>) => {

  return(
    <article id={id} className={`h-screen max-h-screen w-full md:fixed md:overflow-hidden transition duration-75 ${containerClasses}`} style={containerStyle}>
      {children}
    </article>
  );
}
