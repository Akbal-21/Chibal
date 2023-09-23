export const FullScreenLoading = () => {
  return (
    <div>
      <div className="flex flex-colitems-center justify-center h-[calc(100vh -200px)]  ">
        Cargando <div className="spinner-dot-intermittent spinner-warning" />
      </div>
    </div>
  );
};
