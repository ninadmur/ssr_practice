import fs from 'fs';
import path from 'path';

export default function Home(props) {
  // console.log(jsonData);
  return (
    <ul>
      {props.products.map(product => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'dummy.json');
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
};
