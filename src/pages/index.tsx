import type { NextPage } from "next";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import MainTable from "../components/MainTable";

const Home: NextPage = () => {
  return (
    <div>
      <MainTable />
    </div>
  );
};

export default Home;
