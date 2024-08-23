export const errorData = (props) => {
  const options = {
    width: 1200,
    height: 630,
  };
  const jsx = (
    <div tw="flex h-full w-full items-center justify-center bg-white text-7xl">
      🚨 {props.errorMessage} 🐈‍⬛
    </div>
  );
  return { jsx, options };
};
