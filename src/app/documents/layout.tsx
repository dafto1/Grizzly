interface DocumentsLayoutChildren { 
  children: React.ReactNode; 
}
 
const DocumentsLayout = ({children}: DocumentsLayoutChildren) => {
  return (
    <>
      Documents Navbar
      {children}
    </>
  )
}

export default DocumentsLayout; 