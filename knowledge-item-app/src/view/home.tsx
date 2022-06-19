import { Header } from "./components/header";
import { DataTable } from "./components/main";

const Home: React.FC = () => {
  return (
    <section className="home-section ">
      <Header />
      <main>
        <DataTable />
      </main>
    </section>
  );
};
export default Home;
