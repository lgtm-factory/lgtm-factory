export const getErrorData = (props) => {
  const options = {
    width: 1200,
    height: 630,
    statusText: props.statusText,
  };
  const jsx = (
    <div tw="flex h-full w-full items-center justify-center bg-white text-7xl">
      🚨 {props.statusText} 🐈‍⬛
    </div>
  );
  return { jsx, options };
};
