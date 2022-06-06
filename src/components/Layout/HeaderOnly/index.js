import Header from '~/components/Layout/components/Header';

export default function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
