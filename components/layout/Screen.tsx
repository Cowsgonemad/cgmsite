export const Screen = ({ 
  children, containerClasses, containerStyle 
}: Readonly<{ 
  children: React.ReactNode; containerClasses: string; containerStyle: { [key: string]: string }
}>) => {

  return(
    <article className={`h-screen max-h-screen w-full fixed overflow-hidden transition duration-75 ${containerClasses}`} style={containerStyle}>
      {children}
    </article>
  );
}
