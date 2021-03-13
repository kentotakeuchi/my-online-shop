import Header from './header'

const Page: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Page
