interface IndexProps {
  message: string;
  data: string;
}

export default function Index(props: IndexProps) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl">Hello, Ferd!</h1>
      <div className="flex gap-3">
        <p>Message: {props.message}</p>
        <p>Data: {props.data}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://api:1323/hello');
  const data = await res.json();

  return {
    props: data,
  };
}
