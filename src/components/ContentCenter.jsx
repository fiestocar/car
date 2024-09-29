function ContentCenter({ children }) {
  return (
    <div
      className="content-center"
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export default ContentCenter;
