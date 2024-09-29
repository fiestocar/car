function ContainerText({ children }) {
  return (
    <Backgound>
      <Content>{children}</Content>
    </Backgound>
  );
}

function Content({ children }) {
  return (
    <div
      className="hide-scrollbar"
      style={{
        height: "50vh",
        overflowY: "scroll",
      }}
    >
      {children}
    </div>
  );
}

function Backgound({ children }) {
  // border border-4 rounded border-danger-subtle
  return <div className="container-text-backgound">{children}</div>;
}

export default ContainerText;
