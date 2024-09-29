import ConfigText from "./components/configs/ConfigText";
import ContainerBackgound from "./components/containers/ContainerBackgound";
import ContentCenter from "./components/ContentCenter";
import Music from "./components/effects/Music";
import Snow from "./components/effects/Snow";
import ContentPage from "./components/pages/ContentPage";

function App() {
  return (
    <>
      <Snow />
      <Music />
      <ContainerBackgound>
        {/* <ConfigText /> */}
        <ContentCenter>
          <div className="container">
            <div className="row">
              <div className="col">
                <ContentPage />
              </div>
            </div>
          </div>
        </ContentCenter>
      </ContainerBackgound>
    </>
  );
}

export default App;
