import ReactSignatureCanvas from "react-signature-canvas";
// import signatureC from "react-signature-canvas"

const indexPage = () => {
  return (
    <div>
      <ReactSignatureCanvas
        backgroundColor="white"
        dotSize={8}
        minWidth={8}
        maxWidth={8}
        canvasProps={{
          width: 200,
          height: 200,
          style: { border: "2px solid #000" },
          title: "Dibuja",
        }}
      />
    </div>
  );
};

export default indexPage;
