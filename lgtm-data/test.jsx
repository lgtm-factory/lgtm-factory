export const getLgtmData = () => {
  const options = {
    width: 1200,
    height: 630,
  };
  const jsx = (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        fontSize: "64px",
      }}
    >
      LGTM🐈‍⬛
    </div>
  );
  return { jsx, options };
};
