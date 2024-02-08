import Layout from "@/components/Layout/layout";
import styles from "../../styles/beranda.module.css";
import { environment } from "@/environment";
import { useEffect } from "react";

interface BlogProps {
  dataBlog: ModelPOST[];
}

interface ModelPOST {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const beranda = (props: BlogProps) => {
  const { dataBlog } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(dataBlog);
  }, []);
  return (
    <>
      <Layout>
        <div className="overflow-auto">
          {dataBlog.map((e) => (
            <div key={e.id} className={styles.card}>
              <h2>{e.title}</h2>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${environment.api}/posts`);
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}

export default beranda;
